'use client';

import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const Details = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const receptionDate = new Date('2025-05-17T19:00:00');
  const weddingDate = new Date('2025-05-18T07:00:00');

  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-2xl font-bold">{days}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-2xl font-bold">{hours}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-2xl font-bold">{minutes}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="text-2xl font-bold">{seconds}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 pb-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif text-gray-900 mb-4">Event Details</h1>
          <p className="text-gray-600">
            Current time: {currentTime.toLocaleString()}
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-6 text-center">
              Reception
            </h2>
            <p className="text-center text-gray-600 mb-6">
              May 17th, 2025 at 7:00 PM
            </p>
            <Countdown date={receptionDate} renderer={renderer} />
          </div>

          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-6 text-center">
              Wedding Ceremony
            </h2>
            <p className="text-center text-gray-600 mb-6">
              May 18th, 2025 at 7:00 AM
            </p>
            <Countdown date={weddingDate} renderer={renderer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details; 