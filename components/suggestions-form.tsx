export default function SuggestionsForm() {
  const inputClass =
    "w-full px-5 py-4 rounded-[25px] bg-white/15 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40";

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Have Something to Share!
          </h2>
          <p className="text-xl text-white mb-2">
            We are open to suggestions
          </p>
          <p className="text-blue-100 max-w-2xl mx-auto">
            At Baatasari, we aim to give you the best experience in your
            locality. We are open to suggestions and include that makes your day
            better.
          </p>
        </div>

        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input type="text" placeholder="Full Name" className={inputClass} />
            <input type="email" placeholder="Email Address" className={inputClass} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input type="tel" placeholder="Phone" className={inputClass} />
            <input type="text" placeholder="Place Name" className={inputClass} />
          </div>

          <textarea
            placeholder="Describe what you need to showcase or the event..."
            rows={5}
            className={`${inputClass} resize-none`}
          />

          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-white text-blue-900 px-12 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              Let&apos;s Create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
