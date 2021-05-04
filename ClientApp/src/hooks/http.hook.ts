export interface HttpRequest<T> {
  readonly url: string;
  readonly method?: "GET" | "POST" | "PUT" | "DELETE";
  readonly body?: T;
  readonly headers?: HeadersInit;
}

export const useHttp = () => {
  return async<In, Out>(configObject: HttpRequest<In>): Promise<Out> => {
    try {
      const { method, body, headers } = { ...configObject };
      const _body = body as unknown as BodyInit;
      const response = await fetch(configObject.url, { method, body: JSON.stringify(_body), headers });
      return await response.json();
    } catch (e) {
      throw e;
    }
  };
};