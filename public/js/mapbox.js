/* eslint-disable */
const displayMap = (locations) => {
  // 1️⃣ Initialize Leaflet map
  const map = L.map('map', {
    scrollWheelZoom: false, // equivalent to scrollZoom: false
  });

  // 2️⃣ Add OpenStreetMap tile layer (no Mapbox needed)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  // 3️⃣ Create a Leaflet LatLngBounds object to fit all locations
  const bounds = L.latLngBounds([]);

  // 4️⃣ Loop through locations to add markers & popups
  locations.forEach((loc) => {
    // Create a custom marker icon (optional)
    const markerIcon = L.divIcon({
      className: 'marker', // You can style this with CSS
      iconSize: [30, 40], // adjust as needed
      iconAnchor: [15, 40], // bottom center of icon
    });

    // Add marker
    const marker = L.marker([loc.coordinates[1], loc.coordinates[0]], {
      icon: markerIcon,
    }).addTo(map);

    // Add popup
    marker
      .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        autoClose: false,
        closeOnClick: false,
        offset: [0, -20],
      })
      .openPopup();

    // Extend bounds to include this location
    bounds.extend([loc.coordinates[1], loc.coordinates[0]]);
  });

  // 5️⃣ Fit map to show all markers with padding (similar to Mapbox fitBounds)
  map.fitBounds(bounds, {
    padding: [100, 100], // top-left-right-bottom padding in pixels
  });
};
