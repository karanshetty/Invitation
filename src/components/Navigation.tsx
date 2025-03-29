'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Details', path: '/details' },
    { name: 'Venue', path: '/venue' },
    { name: 'Our Story', path: '/story' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20">
          <div className="flex space-x-8 sm:space-x-12">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative font-serif text-base sm:text-lg transition-colors duration-200 ${
                    isActive 
                      ? 'text-pink-600' 
                      : 'text-gray-600 hover:text-pink-500'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 