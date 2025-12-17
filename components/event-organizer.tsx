"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EventOrganizer() {
  return (
    <motion.section
      id="events"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2
              className="
                font-bricolage
                font-[700]
                text-[54px]
                leading-[72px]
                tracking-[0]
                text-[#3A5F94]
                mb-4
              "
            >
              Are you an Event Organizer?
            </h2>

            {/* Subheading */}
            <p
              className="
                font-albert
                font-[500]
                text-[28px]
                leading-[1]
                tracking-[0.0015em]
                text-[#3A5F94]
                mb-6
              "
            >
              Reach Thousands of Excited Travelers!
            </p>

            {/* Description */}
            <p
              className="
                font-albert
                font-[400]
                text-[18px]
                leading-[24px]
                tracking-[0]
                text-[#333333]
                mb-8
              "
            >
              Baatasari isn&apos;t just for travelers—it&apos;s for creators like
              you! Showcase your events, connect with a wider audience, manage
              bookings seamlessly, and grow your business—all in one place.
            </p>

            {/* CTA */}
            <button
              className="
                font-albert
                font-[500]
                text-[18px]
                leading-[24px]
                tracking-[0]
                text-[#F6F6F6]
                bg-[#0C1D37]
                hover:bg-gray-800
                px-8
                py-3
                rounded-full
                transition
              "
            >
              Join as our Vendor Partner
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="event-org.png"
                alt="Event Organizer Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
