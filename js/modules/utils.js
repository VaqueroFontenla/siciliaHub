export const addRouteShapeToMap = (route, map, routeStyle)  => {
  route.polygons.forEach((section) => {
    const linestring = H.geo.LineString.fromFlexiblePolyline(section.outer);

    const polygon = new H.map.Polygon(linestring, {
      style: routeStyle
    });

    map.addObject(polygon);

    map.getViewModel().setLookAtData({
      bounds: polygon.getBoundingBox(),
    });
  });
}

export const downloadJSON = (data) => {
  const jsonData = JSON.stringify(data);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'jsonData.json';
  a.click();
  URL.revokeObjectURL(url);
}

export const getJSONFile = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error to load file: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error to load JSON file:', error);
    throw error;
  }
};

export const getTextFile = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error to load file: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error('Error to load file:', error);
    throw error;
  }
};