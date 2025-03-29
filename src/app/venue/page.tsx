'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { QRCodeSVG } from 'qrcode.react';

const Venue = () => {
  // Dummy venue coordinates (replace with actual venue coordinates)
  const venueLocation = {
    lat: 10.065032,
    lng: 78.773410,
  };

  // Dummy venue address (replace with actual venue address)
  const venueAddress = "<b>Dhanalakshmi Marriage Hall</b>,<br/> <span class='text-gray-600'>110, Alangudiyar St, Kallukatti, Karaikudi, Tamil Nadu 630001</span>";

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 pb-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl text-gray-900 mb-4 font-medium">Venue</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light" dangerouslySetInnerHTML={{ __html: venueAddress }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-4 font-medium">Location</h2>
            <LoadScript googleMapsApiKey="AIzaSyCDGfVE4hXBWaKNM1jK6MohdGdZgTft7c8">
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
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-4 font-medium">Scan for Directions</h2>
            <div className="flex justify-center">
              <QRCodeSVG
                value={`https://www.google.com/maps/search/?api=1&query=${venueLocation.lat},${venueLocation.lng}`}
                size={200}
                level="H"
                includeMargin={true}
              />
            </div>
            <p className="text-center text-gray-600 mt-4">
              Scan this QR code to get directions to the venue.
            </p>
            <p className="text-center text-gray-600 mt-4">
              or
            </p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${venueLocation.lat},${venueLocation.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-600 hover:text-blue-800 mt-2"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue; 