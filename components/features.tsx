import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Inclusive events in seconds!",
      description:
        "Upon going, schedule experiments, and booking everything from events to classes.",
      image: "event-1.png",
    },
    {
      title: "Plan your day in minutes",
      description:
        "Get personalized itineraries, real time, booking, and explore destinations with ease.",
      image: "event-2.png",
    },
    {
      title: "Beyond travel",
      description:
        "Every travel experience, tools and explore with like via our all-in-one platform.",
      image: "event-3.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-16 text-center">
          What's so special about us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* Feature Image */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          <button className="w-3 h-3 rounded-full border-2 border-gray-400 hover:bg-gray-400 transition" />
          <button className="w-3 h-3 rounded-full bg-gray-800" />
        </div>
      </div>
    </section>
  );
}
