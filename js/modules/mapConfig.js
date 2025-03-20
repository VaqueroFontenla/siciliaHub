import { VIGO_COORDS } from "../constants.js";

export const initializeMap = () => {
  const mapContainer = document.getElementById("map");

  //Step 1: initialize communication with the platform
  const platform = new H.service.Platform({ apikey: CONFIG.API_KEY });
  const defaultLayers = platform.createDefaultLayers();

  // Step 2: initialize a map - this map is centered over Vigo
  const map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
    center: VIGO_COORDS,
    zoom: 8,
    pixelRatio: window.devicePixelRatio || 1,
  });

  // Step 3: make the map interactive: pan/zoom (also on mobile touch environments)
  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  // Step 4: add UI map
  const ui = H.ui.UI.createDefault(map, defaultLayers);
  ui.removeControl('mapsettings');
  ui.removeControl('scalebar');

  // Step 5: add a resize listener to make sure that the map occupies the whole container
  window.addEventListener("resize", () => map.getViewPort().resize());

  return { platform, map, ui };
};

