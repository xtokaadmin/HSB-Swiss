import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Users } from "lucide-react";

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
    <div className="relative w-full h-[700px] bg-background overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Sicher & Zuverlässig</span>
            </div>
            <div className="h-4 w-px bg-white/30" />
            <div className="flex items-center gap-2 text-white/90">
              <Star className="h-5 w-5" />
              <span className="text-sm font-medium">Seit 1995</span>
            </div>
            <div className="h-4 w-px bg-white/30" />
            <div className="flex items-center gap-2 text-white/90">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">1000+ Kunden</span>
            </div>
          </motion.div>

          {/* Hero text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={onCtaClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-7 h-auto text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-medium px-10 py-7 h-auto text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Mehr erfahren
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>100% Schweizer Qualität</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Swiss-inspired decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-red-600 via-white to-red-600 opacity-90" />
      </div>
    </div>
  );
};

export default HeroSection;
