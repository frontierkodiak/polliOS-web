import L from 'leaflet';

const PodMarkerIcon = L.icon({
  iconUrl: '/leaflet/images/PodCutout1.42t.png',
  shadowUrl: '/leaflet/images/PodCutout1.shadow.42t.png',
  iconSize: [29.4, 50.4], // size of the icon, you can adjust the size as per your needs
  shadowSize: [18,30], // size of the shadow, you can adjust the size as per your needs
//   iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [5, 13],  // the same for the shadow
  popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
});

export default PodMarkerIcon;