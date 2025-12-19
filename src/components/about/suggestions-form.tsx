export default function SuggestionsForm() {
  const inputClass =
    "w-full px-5 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40";

  const labelClass =
    "font-albert font-[500] text-[16px] leading-[24px] tracking-[0] text-white mb-[14px] block";

  return (
    <section className="py-20 bg-[#284878]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="
              font-bricolage
              font-[600]
              text-[48px]
              leading-[60px]
              tracking-[-0.02em]
              text-white
              mb-4
            "
          >
            Have Something to Share!
          </h2>

          <p
            className="
              font-bricolage
              font-[600]
              text-[48px]
              leading-[60px]
              tracking-[-0.02em]
              text-white
              mb-6
            "
          >
            We are open to suggestions
          </p>

          <p
            className="
              font-albert
              font-[500]
              text-[20px]
              leading-[24px]
              tracking-[0]
              text-white
              max-w-3xl
              mx-auto
              mb-5
            "
          >
            At Baatasari we aim to give you the best experience in your locality.
            We are open to your suggestions and include what makes your day
            better.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Top row */}
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className={labelClass}>Event Name</label>
              <input
                type="text"
                placeholder="Ex: Prom Night"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Location</label>
              <input
                type="text"
                placeholder="Select Location"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Category</label>
              <input
                type="text"
                placeholder="Select Category"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Month</label>
              <input
                type="text"
                placeholder="Select Month"
                className={inputClass}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={labelClass}>Describe your suggestion.</label>
            <textarea
              rows={4}
              placeholder="Ex: I would like to have an art event at RK Beach..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <div className="pt-8 flex justify-center">
            <button
              type="submit"
              className="
                w-[480px]
                h-[60px]
                px-5
                py-[18px]
                rounded-full
                bg-[#0C1D37]
                border
                border-[#0C1D37]
                text-white
                font-inter
                font-[600]
                text-[16px]
                leading-[24px]
                tracking-[0]
                flex
                items-center
                justify-center
                transition
                hover:bg-[#0C1D37]/90
              "
            >
              Let&apos;s Create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
