"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type Performer = {
  title: string;
  description: string;
  image: string;
};

const performers: Performer[] = [
  {
    title: "Dancers",
    description: "Enchant your audience with your energizing moves",
    image: "per-1.png",
  },
  {
    title: "Singers!",
    description: "Captivate the crowd and let your voice be heard.",
    image: "per-2.png",
  },
  {
    title: "Artists",
    description: "Showcase your creativity and connect with your audience",
    image: "per-3.png",
  },
];

export default function Performers() {
  const [active, setActive] = useState(1);
  const isLocked = useRef(false);

  const prev = () =>
    setActive((i) => (i === 0 ? performers.length - 1 : i - 1));

  const next = () =>
    setActive((i) => (i === performers.length - 1 ? 0 : i + 1));

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
    e.preventDefault();

    if (isLocked.current || Math.abs(e.deltaX) < 40) return;

    isLocked.current = true;
    e.deltaX > 0 ? next() : prev();

    setTimeout(() => (isLocked.current = false), 600);
  };

  return (
    <section id="performers" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <h2
          className="
            font-bricolage
            font-[700]
            text-[54px]
            leading-[72px]
            tracking-[0]
            text-[#3A5F94]
            mb-20
          "
        >
          Calling All Performers!
        </h2>

        {/* Carousel */}
        <motion.div
          onWheel={onWheel}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) next();
            if (info.offset.x > 80) prev();
          }}
          className="relative h-[520px] flex items-center justify-center"
        >
          {performers.map((item, index) => {
            const offset = index - active;
            const isActive = offset === 0;

            return (
              <motion.div
                key={index}
                animate={{
                  x: offset * 420,
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.15,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute pointer-events-none"
              >
                <motion.div
                  onClick={() => !isActive && setActive(index)}
                  className={`
                    pointer-events-auto
                    cursor-pointer
                    w-[380px] h-[470px]
                    rounded-2xl
                    bg-white
                    border
                    ${
                      isActive
                        ? "border-[#6FA3FF]"
                        : "border-gray-200"
                    }
                  `}
                >
                  {/* Image */}
                  <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      priority={isActive}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Card Title */}
                    <h3
                      className="
                        font-albert
                        font-[500]
                        text-[24px]
                        leading-[32px]
                        tracking-[0.0015em]
                        text-[#141414]
                        mb-2
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p
                      className="
                        font-albert
                        font-[400]
                        text-[16px]
                        leading-[24px]
                        tracking-[0.005em]
                        text-[#141414]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation Arrows */}
        <div className="absolute right-6 bottom-24 flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-100 transition"
          >
            &lt;
          </button>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-[#0C1D37] text-white flex items-center justify-center hover:bg-[#0C1D37]/90 transition"
          >
            &gt;
          </button>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button
            className="
              font-albert
              font-[500]
              text-[18px]
              leading-[24px]
              tracking-[0]
              text-[#F6F6F6]
              px-10
              py-4
              rounded-full
              bg-[#0C1D37]
              hover:bg-[#0C1D37]/90
              transition
            "
          >
            Showcase your Talent
          </button>
        </div>
      </div>
    </section>
  );
}
