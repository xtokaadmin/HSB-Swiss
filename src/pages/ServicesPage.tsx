import React from "react";
import { motion } from "framer-motion";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Star,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

const ServicesPage = () => {
  const processSteps = [
    {
      step: "1",
      title: "Kostenlose Beratung",
      description:
        "Wir analysieren Ihre aktuelle finanzielle Situation und verstehen Ihre Ziele.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: "2",
      title: "Maßgeschneiderte Strategie",
      description:
        "Entwicklung einer personalisierten Finanzstrategie basierend auf Ihren Bedürfnissen.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      step: "3",
      title: "Umsetzung & Überwachung",
      description:
        "Professionelle Umsetzung Ihrer Strategie mit kontinuierlicher Überwachung.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      step: "4",
      title: "Laufende Betreuung",
      description:
        "Regelmäßige Reviews und Anpassungen für optimale Ergebnisse.",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "20+ Jahre Erfahrung",
      description: "Bewährte Expertise im Schweizer Finanzmarkt",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "2000+ Zufriedene Kunden",
      description: "Vertrauen von Privatpersonen und Unternehmen",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Schweizer Qualität",
      description: "Höchste Standards in Beratung und Service",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Persönliche Betreuung",
      description: "Individuelle Lösungen für jeden Kunden",
      icon: <Star className="h-8 w-8" />,
    },
  ];

  const serviceDetails = [
    {
      category: "Bankdienstleistungen",
      description:
        "Umfassende Banklösungen, die auf Ihre finanziellen Bedürfnisse zugeschnitten sind",
      services: [
        {
          name: "Private Banking",
          description:
            "Exklusive Bankdienstleistungen für vermögende Privatpersonen mit dedizierten Beziehungsmanagern.",
          features: [
            "Personalisierte Anlagestrategien",
            "Vermögenserhaltungsplanung",
            "Nachlassplanungsdienstleistungen",
            "Steueroptimierung",
          ],
        },
        {
          name: "Vermögensverwaltung",
          description:
            "Professionelle Portfolioverwaltung und Anlageberatungsdienstleistungen.",
          features: [
            "Vermögensallokation",
            "Risikomanagement",
            "Performance-Überwachung",
            "Regelmäßige Portfolio-Reviews",
          ],
        },
        {
          name: "Anlageberatung",
          description:
            "Expertenberatung zu Anlagemöglichkeiten auf globalen Märkten.",
          features: [
            "Marktanalyse",
            "Anlageforschung",
            "Portfolio-Diversifikation",
            "Strategische Planung",
          ],
        },
      ],
    },
    {
      category: "Versicherungsdienstleistungen",
      description:
        "Umfassende Versicherungslösungen zum Schutz dessen, was am wichtigsten ist",
      services: [
        {
          name: "Lebensversicherung",
          description:
            "Schützen Sie die finanzielle Zukunft Ihrer Familie mit umfassender Lebensversicherung.",
          features: [
            "Risikolebensversicherung",
            "Kapitallebensversicherung",
            "Universelle Lebensversicherung",
            "Integration der Nachlassplanung",
          ],
        },
        {
          name: "Unternehmensversicherung",
          description:
            "Umfassender Schutz für Ihre Geschäftstätigkeiten und Vermögenswerte.",
          features: [
            "Allgemeine Haftpflicht",
            "Berufshaftpflicht",
            "Sachversicherung",
            "Betriebsunterbrechung",
          ],
        },
        {
          name: "Altersvorsorge",
          description:
            "Strategische Planung für eine sichere und komfortable Rente.",
          features: [
            "Rentenplanung",
            "Altersvorsorgestrategien",
            "Sozialversicherungsoptimierung",
            "Gesundheitsplanung",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                Schweizer Finanzexpertise seit 2000
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Unsere Dienstleistungen
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Umfassende Finanzlösungen, die auf Ihre individuellen Bedürfnisse
              zugeschnitten sind – von Private Banking bis hin zu
              Versicherungsschutz
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <Link to="/contact" className="flex items-center">
                  Kostenlose Beratung <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
              >
                <a href="#services" className="flex items-center">
                  Services entdecken <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Warum HSB Swiss wählen?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere Expertise und unser Engagement machen den Unterschied
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-red-600">{item.icon}</div>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Service Overview */}
      <section
        id="services"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Kerndienstleistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professionelle Finanzlösungen für jeden Bedarf
          </p>
        </motion.div>
        <ServiceSection />
      </section>

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

      {/* Detailed Services */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detaillierte Servicebereiche
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere umfassenden Finanzlösungen im Detail
          </p>
        </motion.div>
        <div className="space-y-20">
          {serviceDetails.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="text-center mb-12">
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {category.category}
                </motion.h3>
                <motion.p
                  className="text-gray-600 max-w-2xl mx-auto text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {category.description}
                </motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="h-full"
                  >
                    <Card className="h-full bg-white shadow-sm hover:shadow-xl border-2 border-gray-100 hover:border-red-200 transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-700 border-red-200"
                          >
                            Premium Service
                          </Badge>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          </motion.div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-4 text-gray-900 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-red-600" />
                          Hauptmerkmale:
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: featureIndex * 0.1,
                              }}
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <Button
                            asChild
                            variant="outline"
                            className="w-full border-red-600 text-red-600 hover:bg-red-50 group-hover:bg-red-600 group-hover:text-white transition-all"
                          >
                            <Link
                              to="/contact"
                              className="flex items-center justify-center"
                            >
                              Mehr erfahren{" "}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
          </div>
          <div className="relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bereit für Ihren finanziellen Erfolg?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kontaktieren Sie unser Expertenteam für eine kostenlose Beratung
              und entdecken Sie, wie wir Ihnen helfen können, Ihre finanziellen
              Ziele zu erreichen.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
