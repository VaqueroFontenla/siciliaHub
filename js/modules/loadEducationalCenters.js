import { getJSONFile, getTextFile } from './utils.js'

const educationalCentersIcons = {
  ESMU: 'music', 
  CMUS: 'music', 
  EMUSPR: 'music', 
  CEIP: 'child',
  CEP: 'child',
  IES: 'person',
  CPR: 'sack-dollar',
  CPI: 'school',
  ESCO: 'palette',
  CIFP: 'wrench',
  EMUSPR: 'sack-dollar',
  ESAD: 'theater',
  CEEPR: 'person-cane',
  EDANPR: 'music',
  EIO: 'microphone'
}

export const loadSchools = async (map, url, ui) => {
  try {
    const schools = await getJSONFile(url);
    const minZoomLevel = 13; // Minimum zoom level to display markers

    const markers = new Map(); // Use a Map to efficiently manage markers

    for (const school of schools) {
      const icon = new H.map.Icon(
        await getTextFile(`../assets/icons/${educationalCentersIcons[school.type] || 'school'}.svg`), 
        { size: { w: 24, h: 24 } }
      );

      const marker = new H.map.Marker(
        { lat: school.latitude, lng: school.longitude }, 
        { icon }
      );

      // Set the tooltip data for the marker
      marker.setData(`<div style='
        font-family: Arial, sans-serif; font-size: 14px; color: #333;'>
        <b>${school.name}</b>
        <span>${school.ownership}</span>
      </div>`);

      // Add click event to display an info bubble
      marker.addEventListener('tap', (evt) => {
        const bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
          content: evt.target.getData(),
        });
        ui.addBubble(bubble);
      });

      // Store the marker in the Map
      markers.set(marker, school);

      // Initially, add the marker only if the zoom level is high enough
      if (map.getZoom() >= minZoomLevel) {
        map.addObject(marker);
      }
    }

    // Event to show/hide markers based on zoom level
    map.addEventListener('mapviewchange', () => {
      const currentZoom = map.getZoom();
      markers.forEach((school, marker) => {
        if (currentZoom >= minZoomLevel) {
          if (!map.getObjects().includes(marker)) {
            map.addObject(marker);
          }
        } else {
          if (map.getObjects().includes(marker)) {
            map.removeObject(marker); // Remove only if the marker is present
          }
        }
      });
    });

    console.log(`${schools.length} schools loaded successfully`);
  } catch (error) {
    console.error('Error loading schools:', error);
  }
};
