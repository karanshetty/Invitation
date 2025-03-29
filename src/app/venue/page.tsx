'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { QRCodeSVG } from 'qrcode.react';

const Venue = () => {
  // Dummy venue coordinates (replace with actual venue coordinates)
  const venueLocation = {
    lat: 12.9716,
    lng: 77.5946,
  };

  // Dummy venue address (replace with actual venue address)
  const venueAddress = "123 Wedding Street, City, State, Country";

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif text-gray-900 mb-4">Venue</h1>
          <p className="text-xl text-gray-600">{venueAddress}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Location</h2>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={venueLocation}
                zoom={15}
              >
                <Marker position={venueLocation} />
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">Scan for Directions</h2>
            <div className="flex justify-center">
              <QRCodeSVG
                value={`https://www.google.com/maps/search/?api=1&query=${venueLocation.lat},${venueLocation.lng}`}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <p className="text-center text-gray-600 mt-4">
              Scan this QR code to get directions to the venue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue; 