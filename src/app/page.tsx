'use client';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 pb-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl text-gray-900 mb-12 font-light tracking-wide">
            We Are Getting Married
          </h1>
          
          <div className="text-4xl md:text-5xl text-gray-800 mb-12 font-medium flex flex-col lg:flex-row items-center justify-center">
            <span className="text-pink-600">Pandiyaraj</span>
            <span className="mx-4">&</span>
            <span className="text-pink-600">Kotteeshwari</span>
          </div>

          <p className="text-2xl md:text-3xl text-gray-700 mb-10 font-light tracking-wide">
            We invite you to celebrate our wedding
          </p>

          <div className="text-3xl md:text-4xl text-gray-800 mb-10 font-medium">
            May 18th, 2025
          </div>

          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Dhanalakshmi Marriage Hall
            <br />
            Karaikudi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
