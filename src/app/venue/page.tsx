'use client';

import { motion } from 'framer-motion';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { QRCodeSVG } from 'qrcode.react';
import { RiHeartsLine } from 'react-icons/ri';

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
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-4 -left-4 w-32 h-32 bg-pink-100 rounded-full opacity-60"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/4 -right-8 w-40 h-40 bg-pink-50 rounded-full opacity-60"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative pt-20 pb-16 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pink-600 font-great-vibes tracking-wide">
              Venue
            </h1>
          </motion.div>

          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl text-gray-600 font-light" dangerouslySetInnerHTML={{ __html: venueAddress }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl text-gray-900 mb-4 font-great-vibes">Location</h2>
              <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
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
              <h2 className="text-2xl md:text-3xl text-gray-900 mb-4 font-great-vibes">Scan for Directions</h2>
              <div className="flex justify-center">
                <QRCodeSVG
                  value={`https://www.google.com/maps/search/?api=1&query=${venueLocation.lat},${venueLocation.lng}`}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-center text-gray-600 mt-4 font-light">
                Scan this QR code to get directions to the venue.
              </p>
              <p className="text-center text-gray-600 mt-4 font-light">
                or
              </p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${venueLocation.lat},${venueLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-600 hover:text-blue-800 mt-2 font-light"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue; 