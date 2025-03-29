'use client';

import { motion } from 'framer-motion';
import { BsHeartFill, BsCalendar2HeartFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { RiHeartsLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Decorative elements */}
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

      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main content with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-1 sm:gap-2 mb-8"
          >
            <RiHeartsLine className="text-pink-600 text-2xl sm:text-3xl" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-light whitespace-nowrap">
              We Are Getting Married
            </h1>
            <RiHeartsLine className="text-pink-600 text-2xl sm:text-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center  flex-col lg:flex-row gap-2 lg:gap-4">
              <span className="text-3xl md:text-4xl text-pink-600">Pandiyaraj</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BsHeartFill className="text-pink-600 text-2xl md:text-3xl" />
              </motion.div>
              <span className="text-3xl md:text-4xl text-pink-600">Kotteeswari</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 flex justify-center gap-2">
              We invite you to celebrate our wedding
            </p>

            <div className="relative inline-block">
              <motion.div
                className="text-2xl md:text-3xl text-gray-800 font-medium flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaRegClock className="text-pink-500" />
                May 18th, 2025
              </motion.div>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <FaMapMarkerAlt className="text-pink-500" />
              <span>
                Dhanalakshmi Marriage Hall
                <br />
                Karaikudi
              </span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
