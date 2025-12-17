import Image from "next/image";

export default function EventOrganizer() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Are you an Event Organizer?
            </h2>

            <p className="text-2xl text-gray-700 mb-6 font-medium">
              Reach Thousands of Excited Travelers!
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Baatasari isn't just for travelers—it's for explorers like you!
              Showcase your events, connect with a wider audience, manage
              bookings effortlessly, and grow your business—all in one place.
            </p>

            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition">
              Add to our Vendor Portfolio
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 w-full">
                      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src="event-org.png"
                          alt="Event Organizer Illustration"
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
