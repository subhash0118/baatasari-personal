export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          There's More to Your City than you think!
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-100">
          New experiences, local sounds, events and more!
        </p>

        <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition inline-flex items-center gap-2">
          Join Baatasari &gt;&gt;&gt;
        </button>
      </div>
    </section>
  );
}
