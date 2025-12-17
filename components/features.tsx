"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Inclusive events in seconds!",
    description:
      "Discover hidden gems, unique experiences, and trending events tailored to your interests with just a click.",
    image: "event-1.png",
  },
  {
    title: "Plan your day in minutes",
    description:
      "Get customized itineraries, real-time updates, and explore stress-free!",
    image: "event-2.png",
  },
  {
    title: "Beyond travel!",
    description:
      "Enjoy special discounts, deals and explore with like-minded people!",
    image: "event-3.png",
  },
];

export default function Features() {
  const [active, setActive] = useState(1);
  const isLocked = useRef(false);

  const prev = () =>
    setActive((i) => (i === 0 ? features.length - 1 : i - 1));

  const next = () =>
    setActive((i) => (i === features.length - 1 ? 0 : i + 1));

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

    e.preventDefault();

    if (isLocked.current) return;
    if (Math.abs(e.deltaX) < 40) return;

    isLocked.current = true;
    e.deltaX > 0 ? next() : prev();

    setTimeout(() => {
      isLocked.current = false;
    }, 600);
  };

  return (
    <section id="features" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative">
        {/* Section Heading */}
        <h2
          className="
            font-bricolage
            font-[700]
            text-[54px]
            leading-[64px]
            tracking-[0]
            text-[#174B91]
            mb-16
          "
        >
          What&apos;s so special about us?
        </h2>

        {/* Animated carousel */}
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
          className="relative h-[540px] flex items-center justify-center"
          style={{
            overscrollBehavior: "contain",
            touchAction: "pan-x",
          }}
        >
          {features.map((item, index) => {
            const offset = index - active;
            const isActive = offset === 0;

            return (
              <motion.div
                key={index}
                animate={{
                  x: offset * 420,
                  scale: isActive ? 1 : 0.88,
                  opacity: isActive ? 1 : 0.35,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute pointer-events-none"
              >
                <motion.div
                  onClick={() => {
                    if (!isActive) setActive(index);
                  }}
                  whileHover={
                    isActive
                      ? {
                          y: -8,
                          boxShadow:
                            "0 25px 60px rgba(37,99,235,0.35)",
                        }
                      : {}
                  }
                  className={`
                    pointer-events-auto
                    cursor-pointer
                    w-[380px] h-[470px]
                    rounded-2xl bg-white border
                    ${
                      isActive
                        ? "border-blue-400 cursor-default"
                        : "border-gray-200"
                    }
                  `}
                >
                  {/* Image */}
                  <div className="relative w-full h-60 rounded-t-2xl overflow-hidden">
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
                    <h3
                      className="
                        font-albert
                        font-[700]
                        text-[24px]
                        leading-[32px]
                        tracking-[0]
                        text-[#3D3D3D]
                        mb-2
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        font-albert
                        font-[500]
                        text-[16px]
                        leading-[24px]
                        tracking-[0.005em]
                        text-[#454545]
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

        {/* Arrows */}
        <div className="absolute right-4 bottom-4 flex gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-200 transition bg-white"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-[#0C1D37] border border-[#0C1D37] text-white flex items-center justify-center transition hover:bg-[#0C1D37]/90"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
