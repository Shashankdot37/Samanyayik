import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icon for TypeScript
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type MapPickerProps = {
  onSelectPosition: (lat: number, lng: number) => void;
};

const MapPicker: React.FC<MapPickerProps> = ({ onSelectPosition }) => {
  const [markerPos, setMarkerPos] = useState<[number, number] | null>(null);

  const ClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPos([lat, lng]);
        onSelectPosition(lat, lng);
      },
    });
    return null;
  };

  const defaultPosition: [number, number] = [27.697585759107973, 85.3296673042068]; // Sydney

  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      style={{ height: '250px', width: '100%', borderRadius: '12px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <ClickHandler />
      {markerPos && <Marker position={markerPos} />}
    </MapContainer>
  );
};

export default MapPicker;
