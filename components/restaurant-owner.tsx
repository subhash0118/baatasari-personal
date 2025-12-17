import Image from "next/image";

export default function RestaurantOwner() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Are you a Restaurant / Cafe Owner?
            </h2>

            <p className="text-2xl text-gray-700 mb-6 font-medium">
              Attract a Thriving Crowd of Food Lovers!
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Baatasari isn't just for places—it's for passionate foodies like
              you! Showcase your restaurants, connect with a larger foodie
              audience, manage bookings effortlessly, and elevate your
              restaurant—all in one platform.
            </p>

            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition">
              Showcase our Restaurant Details
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="bro.png"
                alt="Restaurant Owner Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
