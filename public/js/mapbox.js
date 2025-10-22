/* eslint-disable */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const displayMap = (locations) => {
  const map = L.map('map', { scrollWheelZoom: false });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  const bounds = L.latLngBounds([]);

  locations.forEach((loc) => {
    const markerIcon = L.divIcon({
      className: 'marker',
      iconSize: [30, 40],
      iconAnchor: [15, 40],
    });

    const marker = L.marker([loc.coordinates[1], loc.coordinates[0]], {
      icon: markerIcon,
    }).addTo(map);

    marker
      .bindTooltip(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        permanent: true,
        direction: 'top',
        offset: [0, -20],
        className: 'marker-tooltip',
      })
      .openTooltip();
    bounds.extend([loc.coordinates[1], loc.coordinates[0]]);
  });

  map.fitBounds(bounds, { padding: [100, 100] });
};
