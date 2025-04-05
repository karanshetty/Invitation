'use client';

import { motion } from 'framer-motion';
import EventCountdown from '../components/EventCountdown';
import { RiHeartsLine } from 'react-icons/ri';

const Details = () => {
  const events = [
    {
      title: "Reception",
      date: "Saturday, May 17, 2025",
      time: "7:00 PM onwards",
      description: "Join us for an evening of celebration with dinner, music, and festivities as we begin our wedding celebrations.",
      targetDate: "2025-05-17T19:00:00"
    },
    {
      title: "Marriage Ceremony",
      date: "Sunday, May 18, 2025",
      time: "7:00 AM",
      description: "We invite you to witness our traditional wedding ceremony followed by lunch as we exchange vows and begin our journey together.",
      targetDate: "2025-05-18T07:00:00"
    }
  ];

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

      <div className="relative pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pink-600 font-great-vibes tracking-wide">
              Wedding Events
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <EventCountdown
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
                targetDate={event.targetDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details; 