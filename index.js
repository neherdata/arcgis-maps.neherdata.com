const apiKey = "AAPKccb0e5dd6a284b889e332a34192a6794Ax_dxMugMKgYrpOgp5DqdQGyqohd3QsWsSRdMbbZhItf1t8EB1aI-oKXXlLShiL_";
const basemapEnum = "arcgis/streets-night";
const map = new maplibregl.Map({
  container: "map", // the id of the div element
  style: `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapEnum}?token=${apiKey}`,
  zoom: 12, // starting zoom
  center: [-74.0697479, 40.3083382], // starting location [longitude, latitude]
});
