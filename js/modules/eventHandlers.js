import { addRouteShapeToMap, downloadJSON } from "./utils.js";

export const onSuccess = (result, map, routeStyle) => {
  //downloadJSON(result)
  const route = result.isolines[0];
  addRouteShapeToMap(route, map, routeStyle);
};

export const onError = (error) => {
  alert("Can't reach the remote server");
  console.error(error);
};
