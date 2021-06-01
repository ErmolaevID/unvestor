import { useAPIs } from "./apis.hook";
import { useHttp } from "./http.hook";
import { useRoutes } from "./routes.hook";

export const useTools = () => {
  return {
    req: useHttp(),
    api: useAPIs(),
    routes: useRoutes(),
  };
};