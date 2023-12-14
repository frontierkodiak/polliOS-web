// components/SwarmMap/SwarmMap.tsx
import React, { useEffect } from 'react';
import { Loader } from '@mantine/core';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DataItem } from 'interfaces/SwarmStatusInterface';
import SwarmMapError from 'components/Error/SwarmMapError/SwarmMapError';
import PodMarkerIcon from 'components/Assets/PodMarkerIcon/PodMarkerIcon';
import L from 'leaflet';


// Define your custom icon
const customIcon = L.icon({
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
  iconSize: [25, 41], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 41],  // the same for the shadow
  popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
});

interface SwarmMapProps {
  data: DataItem[];
  loading: boolean;
  style?: React.CSSProperties;
}

const SwarmMap: React.FC<SwarmMapProps> = ({ data, loading, style }) => {
  // If loading or data is undefined or null, display a loader
  if (loading || !data) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', ...style }}>
        <Loader />
      </div>
    );
  }

  useEffect(() => {
    const leafletContainer = document.querySelector('.leaflet-container') as HTMLElement;
    if (leafletContainer) {
      leafletContainer.style.zIndex = '1';
    }
  }, []);

  // Find the first Pod with valid coordinates
  const firstPodWithLocation = data.find(pod => pod.loc_lat !== null && pod.loc_lon !== null);

  // If there is no pod with valid coordinates, display an error.
  if (!firstPodWithLocation) {
    return <SwarmMapError />;
  }

  return (
    <div style={{ height: '100%', width: '100%', ...style }}>
      <MapContainer center={[firstPodWithLocation.loc_lat, firstPodWithLocation.loc_lon]} zoom={19} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {data.map((pod, index) => (
          // Check before rendering each marker if the pod has valid coordinates
          pod.loc_lat !== null && pod.loc_lon !== null && (
            <Marker key={index} position={[pod.loc_lat, pod.loc_lon]} icon={PodMarkerIcon}>
              <Popup>{pod.podID} (Pod, 1st gen)</Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
}

export default SwarmMap;