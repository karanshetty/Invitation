// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex h-screen justify-center items-center" >
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-serif text-gray-900 mb-8 flex flex-col items-center">
              Pandiyaraj 
              <span className="text-gray-600">&</span>
              Kotishwari
            </h1>
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl text-gray-700">
                Are getting married
              </p>
              <p className="text-xl sm:text-2xl text-gray-600">
                May 18th, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
