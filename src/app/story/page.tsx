const Story = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white pt-20 pb-16">
      {/* Couple Photo Section */}
      <div className="relative h-[60vh] mb-16">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="/couple.jpg"
          alt="Bride and Groom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h1 className="text-4xl sm:text-6xl font-serif text-white mb-4">
            Our Love Story
          </h1>
          <p className="text-xl sm:text-2xl text-white/90">
            A journey of love and togetherness
          </p>
        </div>
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
  );
};

export default Story; 