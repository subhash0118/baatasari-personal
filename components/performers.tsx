import Image from "next/image";

export default function Performers() {
  const performers = [
    {
      title: "Audience",
      description: "Audience with your energizing moves",
      image: "per-1.png",
    },
    {
      title: "Singers!",
      description: "Captivate the crowd and let your voice be heard",
      image: "per-2.png",
    },
    {
      title: "Artists",
      description: "Showcase your creativity and connect with your audience",
      image: "per-3.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16 text-center">
          Calling All Performers!
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {performers.map((performer, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 relative hover:shadow-lg transition-shadow"
            >
              {/* Performer Image */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src={performer.image}
                  alt={performer.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Play Button */}
              <button className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white/80 backdrop-blur hover:bg-white transition">
                <span className="text-gray-700">▶</span>
              </button>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {performer.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {performer.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mb-8">
          <button className="w-3 h-3 rounded-full border-2 border-gray-400 hover:bg-gray-400 transition" />
          <button className="w-3 h-3 rounded-full bg-gray-800" />
        </div>

        <div className="text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-3 rounded-full font-medium transition">
            Showcase your Talent
          </button>
        </div>
      </div>
    </section>
  );
}
