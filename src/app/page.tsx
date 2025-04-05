'use client';

import { motion } from 'framer-motion';
import { BsHeartFill, BsCalendar2HeartFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { RiHeartsLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';

const Home = () => {
  const [heartPositions, setHeartPositions] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    // Initialize heart positions only on client side
    setHeartPositions(
      Array(6).fill(null).map(() => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
        size: Math.random() * 20 + 10
      }))
    );
  }, []);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left corner decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-100/40 to-rose-200/40 rounded-full blur-3xl"
        />
        
        {/* Bottom right corner decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-pink-100/40 to-rose-200/40 rounded-full blur-3xl"
        />

        {/* Floating hearts */}
        <div className="absolute inset-0">
          {heartPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: position.x,
                y: position.y,
                scale: 0.5,
                opacity: 0.3
              }}
              animate={{
                y: [null, '-100%'],
                opacity: [0.3, 0],
                scale: [0.5, 0.8]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5
              }}
            >
              <BsHeartFill className="text-pink-200" size={position.size} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 pt-20 pb-5">
        {/* Top Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pink-600 font-great-vibes tracking-wide mb-6">
            We Are Getting Married
          </h1>
          
          <div className="flex items-center justify-center flex-col lg:flex-row gap-2 lg:gap-4 mb-2">
            <span className="text-3xl md:text-4xl text-pink-600 font-serif">Pandiyaraj</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <BsHeartFill className="text-pink-500 text-2xl md:text-3xl" />
            </motion.div>
            <span className="text-3xl md:text-4xl text-pink-600 font-serif">Kotteeswari</span>
          </div>
        </motion.div>

        {/* Image Frame */}
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 border-[3px] border-pink-200 rounded-lg transform rotate-3"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 border-[3px] border-rose-300 rounded-lg transform -rotate-3"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute inset-0"
          >
            <img
              src="/couple.jpeg"
              alt="Couple"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="space-y-8">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
