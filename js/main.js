import { initializeMap } from './modules/mapConfig.js';
import { loadIsolineRoute } from './modules/loadIsolineRoute.js';
import { TOLL_FREE_30_MIN_DRIVE_VIGO_STYLES, TOLL_FREE_45_MIN_DRIVE_VIGO_STYLES, HOUR_PUBLIC_TRANSPORT_VIGO_STYLES } from './constants.js'
import { loadSchools } from './modules/loadEducationalCenters.js';
import { generateLegend } from './modules/generateLegend.js';
//import { calculateIsolineRoute } from './modules/calculateIsolineRoute.js';
//import { TOLL_FREE_30_MIN_DRIVE_VIGO_REQUEST_PARAMS,  TOLL_FREE_45_MIN_DRIVE_VIGO_REQUEST_PARAMS,  HOUR_PUBLIC_TRANSPORT_VIGO_REQUEST_PARAMS } from './constants.js'

// Inicializa el mapa y obtiene la plataforma configurada
const { platform, map, ui } = initializeMap();

// Carga la isolínea de la carpeta data
loadIsolineRoute(map, TOLL_FREE_30_MIN_DRIVE_VIGO_STYLES,'../data/tollFree30MinVigoDrive.json')
loadIsolineRoute(map, TOLL_FREE_45_MIN_DRIVE_VIGO_STYLES, '../data/tollFree45MinVigoDrive.json')
loadIsolineRoute(map, HOUR_PUBLIC_TRANSPORT_VIGO_STYLES, '../data/hourPublicBusVigo.json')

loadSchools(map, '../data/educationalCenters.json', ui)
generateLegend()
// Calcula la isolínea usando la plataforma y el mapa
//calculateIsolineRoute(platform, map, TOLL_FREE_30_MIN_DRIVE_VIGO_REQUEST_PARAMS, TOLL_FREE_30_MIN_DRIVE_VIGO_STYLES);
//calculateIsolineRoute(platform, map, TOLL_FREE_45_MIN_DRIVE_VIGO_REQUEST_PARAMS, TOLL_FREE_45_MIN_DRIVE_VIGO_STYLES);
//calculateIsolineRoute(platform, map, HOUR_PUBLIC_TRANSPORT_VIGO_REQUEST_PARAMS, HOUR_PUBLIC_TRANSPORT_VIGO_STYLES);