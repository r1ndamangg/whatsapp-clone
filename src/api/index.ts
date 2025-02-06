const BASE_URL = import.meta.env.VITE_API_URL;

const http = {
  get: async <T>(
    url: string,
    params?: Record<string, string | number>,
    init?: RequestInit
  ): Promise<T> => {
    const urlWithParams = new URL(BASE_URL + url);

    let keys: string[] = [];

    if (params) {
      Object.keys(params).forEach((key) => {
        keys.push(key);
      });

      if (keys.length > 0) {
        const searchParams = new URLSearchParams();
        keys.forEach((key) => {
          searchParams.set(key, String(params[key]));
        });

        urlWithParams.search = searchParams.toString();
      }
    }

    const response = await fetch(urlWithParams, {
      headers: {
        "Content-Type": "application/json",
      },
      ...init,
    });

    const json = await response.json();

    if (!response.ok) {
      throw json;
    }

    return json;
  },
  post: async <T>(
    url: string,
    body?: Record<string, unknown>,
    init?: RequestInit
  ): Promise<T> => {
    const response = await fetch(BASE_URL + url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
      ...init,
    });

    const json = await response.json();

    if (!response.ok) {
      throw json;
    }

    return json;
  },
};

export default http;
