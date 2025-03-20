import { onError, onSuccess } from "./eventHandlers.js";
import { getJSONFile } from "./utils.js";

export const loadIsolineRoute = async (map, routeStyle, urlJSONData) => {
  try {
    const result = await getJSONFile(urlJSONData);
    onSuccess(result, map, routeStyle);
  } catch (error) {
    onError(error);
  }
};
