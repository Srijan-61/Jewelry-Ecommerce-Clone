import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";
import pendent from "../../assets/pendent1.png";

// Fade-in variant
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 1.2, // fade duration
      ease: "easeOut",
      delay, // stagger per element
    },
  }),
};

function ExclusiveCollection() {
  return (
    <ParallaxProvider>
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 h-full md:h-[100vh] px-6 md:px-16 py-10">
        {/* Left Image */}
        <div className="flex-1 overflow-hidden">
          {/* Mobile Image */}
          <div className="md:hidden">
            <img src={pendent} alt="Pendent" className="w-full object-cover" />
          </div>

          {/* Desktop Parallax Image */}
          <div className="hidden md:block h-full w-auto">
            <Parallax speed={-40}>
              <div
                className="h-[100vh] w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${pendent})` }}
              ></div>
            </Parallax>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
          {/* Heading */}
          <motion.h1
            className="text-responsive-2xl font-display font-medium"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
          >
            EXCLUSIVE <br /> COLLECTION
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-responsive-lg font-body"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.2}
          >
            Limited Edition Pieces
          </motion.p>

          {/* Button */}
          <motion.button
            className="bg-gray-800 text-white px-6 py-3 md:px-8 md:py-3 text-responsive font-body font-medium border border-black hover:bg-transparent hover:text-black self-center md:self-start transition duration-300"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.4}
          >
            Explore Collection
          </motion.button>
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default ExclusiveCollection;
