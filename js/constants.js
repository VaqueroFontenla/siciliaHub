export const VIGO_COORDS = {
  lat: 42.23748,
  lng: -8.72872,
};
export const TOLL_POLYGON =
  "polygon:42.3673,-8.6376;42.3727,-8.6405;42.3727,-8.6329";

export const TOLL_FREE_30_MIN_DRIVE_VIGO_REQUEST_PARAMS = {
  origin: `${VIGO_COORDS.lat},${VIGO_COORDS.lng}`,
  "range[type]": "time",
  "range[values]": 1800,
  transportMode: "car",
  "avoid[areas]": TOLL_POLYGON,
};

export const TOLL_FREE_45_MIN_DRIVE_VIGO_REQUEST_PARAMS = {
  origin: `${VIGO_COORDS.lat},${VIGO_COORDS.lng}`,
  "range[type]": "time",
  "range[values]": 2700,
  transportMode: "car",
  "avoid[areas]": TOLL_POLYGON,
};

export const HOUR_PUBLIC_TRANSPORT_VIGO_REQUEST_PARAMS = {
  origin: `${VIGO_COORDS.lat},${VIGO_COORDS.lng}`,
  "range[type]": "time",
  "range[values]": 3600,
  transportMode: "bus",
};

export const TOLL_FREE_30_MIN_DRIVE_VIGO_STYLES = {
  lineWidth: 4,
  strokeColor: "#008f39",
};

export const TOLL_FREE_45_MIN_DRIVE_VIGO_STYLES = {
  lineWidth: 4,
  strokeColor: "#EF2B7C",
};

export const HOUR_PUBLIC_TRANSPORT_VIGO_STYLES = {
  lineWidth: 4,
  strokeColor: "#5dc1b9",
};
