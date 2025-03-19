import { getTextFile } from './utils.js';

const legendStyles = { position: 'absolute', top: '10px', left: '10px', padding: '20px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px' ,minWidth: '200px' };
const legendItemList = [{ icon: '../assets/icons/music.svg', color: '#EF2B7C', label: 'Escuelas de música' }];
const legendItemListStyles = { listStyleType: 'none', padding: 0, margin: 0}
const legendItemStyles = { display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '8px', alignItems: 'center' }
const iconContainerStyles = { width: '24px', height: '24px' };

export const generateLegend = async () => {
  try {
    // Create the legend container
    const legend = document.createElement('section');
    Object.assign(legend.style, legendStyles);

    // Create the list for legend items
    const legendItems = document.createElement('ul');
    Object.assign(legendItems.style, legendItemListStyles);
    
    // Use for...of to handle async code correctly
    for (const item of legendItemList) {
      const legendItem = document.createElement('li');
      Object.assign(legendItem.style, legendItemStyles);
      
      //Icon
      const iconContainer = document.createElement('span');
      Object.assign(iconContainer.style, iconContainerStyles);
      const svgText = await getTextFile(item.icon); // Assume this returns SVG or similar text content
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const svgElement = svgDoc.documentElement; // Extract the SVG element
      iconContainer.appendChild(svgElement); // Append the SVG element
      legendItem.appendChild(iconContainer);

      //Label 
      const label = document.createElement('span');
      label.innerHTML = item.label;
      label.style.color = item.color;
      legendItem.appendChild(label);

      //Object.assign(iconContainer.style, iconContainerStyles);

      //legendItem.innerHTML = `${iconContainer} <span style="color: ${item.color};">${item.label}</span>`;
      legendItems.appendChild(legendItem);
    }

    // Append the items list to the legend container
    legend.appendChild(legendItems);

    // Finally, add the legend to the body
    document.body.appendChild(legend);

    console.log('Legend generated successfully');
  } catch (error) {
    console.error('Error generating legend:', error);
  }
};
