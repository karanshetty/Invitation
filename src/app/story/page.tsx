'use client';

import { motion } from 'framer-motion';
import { RiHeartsLine } from 'react-icons/ri';

const Story = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pb-4">
      {/* Decorative elements - add lower z-index */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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

      {/* Main content - add higher z-index */}
      <div className="relative z-10">
        {/* Couple Photo Section */}
        <div className="relative h-[60vh] mb-16">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src="/couple.jpg"
            alt="Bride and Groom"
            className="w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20"
          >
            <div className="flex items-center gap-2 mb-4">
              <RiHeartsLine className="text-white text-3xl sm:text-4xl" />
              <h1 className="text-4xl sm:text-6xl font-serif text-white">
                Our Love Story
              </h1>
              <RiHeartsLine className="text-white text-3xl sm:text-4xl" />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl text-white/90"
            >
              A journey of love and togetherness
            </motion.p>
          </motion.div>
        </div>

        {/* Story Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">The Beginning</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">The Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">The Proposal</h2>
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">The Future</h2>
              <p className="text-gray-600 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story; 