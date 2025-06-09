import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Professionelle Finanzlösungen für Ihre Zukunft",
  subtitle = "HSB Swiss bietet massgeschneiderte Bank- und Versicherungsdienstleistungen mit Schweizer Präzision und Zuverlässigkeit",
  ctaText = "Beratung anfragen",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1400&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-background overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Hero text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
            {subtitle}
          </p>

          {/* CTA button */}
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 h-auto text-lg"
          >
            {ctaText}
          </Button>
        </motion.div>

        {/* Swiss-inspired decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-red-600 via-white to-red-600" />
      </div>
    </div>
  );
};

export default HeroSection;
