import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Shield,
  Users,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  Calendar,
  Target,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Home() {
  const highlights = [
    {
      icon: <Landmark className="h-8 w-8" />,
      title: "Banking-Exzellenz",
      description:
        "Umfassende Banklösungen mit Schweizer Präzision und Zuverlässigkeit für Ihre finanziellen Bedürfnisse.",
      features: ["Private Banking", "Vermögensverwaltung", "Anlageberatung"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Versicherungsschutz",
      description:
        "Massgeschneiderte Versicherungsdeckung zum Schutz dessen, was Ihnen am wichtigsten ist.",
      features: [
        "Lebensversicherung",
        "Unternehmensversicherung",
        "Altersvorsorge",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Persönlicher Service",
      description:
        "Engagierte Berater bieten personalisierte Finanzberatung mit Schweizer Qualitätsstandards.",
      features: [
        "24/7 Support",
        "Persönliche Beratung",
        "Maßgeschneiderte Lösungen",
      ],
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Kostenlose Beratung",
      description: "Wir analysieren Ihre Situation und verstehen Ihre Ziele.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: "2",
      title: "Maßgeschneiderte Strategie",
      description: "Entwicklung einer personalisierten Finanzstrategie.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      step: "3",
      title: "Professionelle Umsetzung",
      description: "Implementierung mit kontinuierlicher Überwachung.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      step: "4",
      title: "Laufende Betreuung",
      description: "Regelmäßige Reviews und Optimierungen.",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  const stats = [
    { number: "2000+", label: "Zufriedene Kunden" },
    { number: "20+", label: "Jahre Erfahrung" },
    { number: "50+", label: "Partnerunternehmen" },
    { number: "98%", label: "Kundenzufriedenheit" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <HeroSection onCtaClick={() => (window.location.href = "/contact")} />

      {/* Statistics Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-red-600 mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Enhanced Service Highlights */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-red-50 text-red-700 border-red-200 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Schweizer Finanzexpertise
            </Badge>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Warum HSB Swiss wählen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir kombinieren Schweizer Finanzexpertise mit persönlichem Service,
            um aussergewöhnliche Ergebnisse für unsere Kunden zu erzielen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full text-center border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <motion.div
                    className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-red-600">{highlight.icon}</div>
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base">
                    {highlight.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {highlight.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center justify-center text-sm text-gray-500"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1,
                        }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg"
          >
            <Link to="/services" className="flex items-center">
              Unsere Dienstleistungen entdecken{" "}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* How We Work Process */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wie wir arbeiten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unser bewährter 4-Schritte-Prozess für Ihren finanziellen Erfolg
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.step}
                  </motion.div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <div className="text-red-600">{step.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-red-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Enhanced About Preview */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                <Clock className="w-3 h-3 mr-1" />
                Seit 2000
              </Badge>
              <Badge className="bg-green-50 text-green-700 border-green-200">
                <Globe className="w-3 h-3 mr-1" />
                Schweizweit
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Über 20 Jahre Exzellenz
            </h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              HSB Swiss ist seit über zwei Jahrzehnten ein vertrauensvoller
              Partner in der Schweizer Finanzlandschaft. Unser Engagement für
              Exzellenz und persönlichen Service hat uns zur bevorzugten Wahl
              für Privatpersonen und Unternehmen gemacht, die umfassende
              Finanzlösungen suchen.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Wir kombinieren traditionelle Schweizer Bankwerte mit modernen
              Finanzinnovationen, um unseren Kunden das Beste aus beiden Welten
              zu bieten.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Zertifizierte Finanzberater",
                "Schweizer Qualitätsstandards",
                "Persönliche Betreuung",
                "Umfassende Finanzlösungen",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-6"
              >
                <Link to="/about" className="flex items-center">
                  Mehr über uns erfahren <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 px-6 py-6"
              >
                <Link to="/contact" className="flex items-center">
                  Beratung anfragen <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700&q=80"
                alt="Swiss financial district"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">Kundenzufriedenheit</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Zertifiziert
                    </p>
                    <p className="text-xs text-gray-600">Schweizer Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500" />
          </div>
          <div className="relative z-10">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Kostenlose Erstberatung
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bereit, Ihre Finanzreise zu beginnen?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Kontaktieren Sie noch heute unser Expertenteam für eine kostenlose
              Beratung und entdecken Sie, wie wir Ihnen helfen können, Ihre
              finanziellen Ziele zu erreichen.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <Link to="/contact" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenlose Beratung
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
              >
                <a href="tel:+41441234567" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  +41 44 123 45 67
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
              >
                <a
                  href="mailto:info@hsbswiss.com"
                  className="flex items-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail senden
                </a>
              </Button>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Keine Verpflichtungen</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Antwort innerhalb 24h</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
