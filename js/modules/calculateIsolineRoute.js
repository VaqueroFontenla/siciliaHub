import { onError, onSuccess } from './eventHandlers.js'

export const calculateIsolineRoute = (platform, map, routeRequestParams, routeStyle, urlJSONData) => {
  const router = platform.getRoutingService(null, 8);
  router.calculateIsoline(routeRequestParams, (result) => onSuccess(result, map, routeStyle), onError);

}