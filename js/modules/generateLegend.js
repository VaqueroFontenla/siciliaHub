import { getTextFile } from "./utils.js";

const legendItemListStyles = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  rowGap: "8px",
};

const legendItemStyles = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "8px",
  alignItems: "center",
};

const iconContainerStyles = {
  width: "16px",
  height: "24px",
  display: "grid",
  alignItems: "center",
};

const categories = [
  {
    title: "Centros Educativos",
    items: [
      {
        icon: "../assets/icons/music.svg",
        color: "#EF2B7C",
        label: "Escuela de música",
      },
      {
        icon: "../assets/icons/sack-dollar.svg",
        color: "#DAA520",
        label: "Escuela privada",
      },
      {
        icon: "../assets/icons/child.svg",
        color: "#008f39",
        label: "Escuela infantil/primaria",
      },
      {
        icon: "../assets/icons/person.svg",
        color: "#572364",
        label: "Instituto",
      },
      {
        icon: "../assets/icons/school.svg",
        color: "#009DCF",
        label: "Centro iniciativas profesionales",
      },
      {
        icon: "../assets/icons/palette.svg",
        color: "#FF8000",
        label: "FP Marítimo Pesquera",
      },
      {
        icon: "../assets/icons/wrench.svg",
        color: "#9B9B9B",
        label: "Formación Profesional",
      },
      {
        icon: "../assets/icons/microphone.svg",
        color: "#ff0000",
        label: "Escuela idiomas",
      },
      {
        icon: "../assets/icons/theater.svg",
        color: "#6C3B2A",
        label: "Escuela Arte Dramático",
      },
    ],
  },
  {
    title: "Isolíneas",
    items: [
      {
        icon: "../assets/icons/30Min.svg",
        color: "#008f39",
        label: "30 minutos coche (sin peajes)",
      },
      {
        icon: "../assets/icons/45Min.svg",
        color: "#EF2B7C",
        label: "45 minutos coche (sin peajes)",
      },
      {
        icon: "../assets/icons/hour.svg",
        color: "#5dc1b9",
        label: "Una hora transporte público",
      },
    ],
  },
];

const createLegendItem = async (item) => {
  const legendItem = document.createElement("li");
  Object.assign(legendItem.style, legendItemStyles);

  const iconContainer = document.createElement("span");
  Object.assign(iconContainer.style, iconContainerStyles);
  const svgText = await getTextFile(item.icon);
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
  iconContainer.appendChild(svgDoc.documentElement);
  legendItem.appendChild(iconContainer);

  const label = document.createElement("span");
  label.textContent = item.label;
  label.style.color = item.color;
  legendItem.appendChild(label);

  return legendItem;
};

export const generateLegend = async () => {
  try {
    const legend = document.getElementById("legend");

    const legendItems = document.createElement("ul");
    Object.assign(legendItems.style, legendItemListStyles);

    for (const category of categories) {
      for (const item of category.items) {
        const legendItem = await createLegendItem(item);
        legendItems.appendChild(legendItem);
      }
      const divider = document.createElement("hr");
      divider.style.width = "100%";
      legendItems.appendChild(divider);
    }

    legend.appendChild(legendItems);

    console.log("Legend generated successfully");
  } catch (error) {
    console.error("Error generating legend:", error);
  }
};
