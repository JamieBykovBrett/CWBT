const gpt35TurboApiProvider = {
  api_key: "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",
  authenticate: (api_key) => {
    gpt35TurboApiProvider.api_key = api_key;
  },

  sendRequest: async (message) => {
    const response = await fetch("https://gpt-3.5-turbo-api-provider.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${gpt35TurboApiProvider.api_key}`
      },
      body: JSON.stringify({message: message})
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      return data.response;
    } else {
      throw new Error(`API error: ${data.error}`);
    }
  }
};