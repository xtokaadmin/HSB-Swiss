import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Award,
  ArrowRight,
  Globe,
  HeadphonesIcon,
  Video,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
const DefaultIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactPage = () => {
  useEffect(() => {
    // Ensure Leaflet CSS is loaded
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
    link.crossOrigin = "";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const contactStats = [
    {
      icon: <Clock className="h-6 w-6" />,
      number: "<24h",
      label: "Antwortzeit",
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "98%",
      label: "Kundenzufriedenheit",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      number: "2000+",
      label: "Beratungen pro Jahr",
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "24/7",
      label: "Erreichbarkeit",
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefonische Beratung",
      description: "Sofortige Hilfe von unseren Finanzexperten",
      details: "+41 56 427 25 15",
      availability: "Mo-Do: 09:00-12:00, 13:30-17:30, Fr: 09:00-12:00, 13:30-16:00",
      response: "Sofort",
      link: "tel:+41564272515",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-Mail Support",
      description: "Detaillierte Antworten auf Ihre Fragen",
      details: "info@hsb-swiss.ch",
      availability: "Rund um die Uhr",
      response: "Innerhalb 24h",
      link: "mailto:info@hsb-swiss.ch",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video-Beratung",
      description: "Persönliche Beratung von überall aus",
      details: "Online Meeting",
      availability: "Nach Terminvereinbarung",
      response: "Flexible Termine",
      link: "/contact",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Persönlicher Besuch",
      description: "Beratung in unserem Büro in Wettingen",
      details: "Landstrasse 78, 5430 Wettingen",
      availability: "Mo-Do: 09:00-12:00, 13:30-17:30, Fr: 09:00-12:00, 13:30-16:00",
      response: "Terminvereinbarung",
      link: "#map",
      color: "bg-red-100 text-red-600",
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      details: ["Landstrasse 78", "5430 Wettingen, Schweiz"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      details: ["+41 56 427 25 15"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail",
      details: ["info@hsb-swiss.ch"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Öffnungszeiten",
      details: [
        "Montag - Donnerstag: 09:00 - 12:00, 13:30 - 17:30",
        "Freitag: 09:00 - 12:00, 13:30 - 16:00",
        "Samstag: Termin auf Anfrage",
      ],
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const whyContactUs = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Kostenlose Erstberatung",
      description: "Keine versteckten Kosten oder Verpflichtungen",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Erfahrene Berater",
      description: "20+ Jahre Expertise im Schweizer Finanzmarkt",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Schnelle Antworten",
      description: "Garantierte Antwort innerhalb von 24 Stunden",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Flexible Beratung",
      description: "Vor Ort, telefonisch oder per Video-Call",
    },
  ];

  const locationBenefits = [
    {
      title: "Zentrale Lage",
      description: "Einfach erreichbar aus Zürich und Umgebung",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: "Parkplätze verfügbar",
      description: "Kostenlose Parkplätze direkt vor dem Büro",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      title: "ÖV-Anbindung",
      description: "Nur 5 Minuten vom Bahnhof Wettingen",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Barrierefreier Zugang",
      description: "Unser Büro ist für alle zugänglich",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000" />
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
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <HeadphonesIcon className="w-4 h-4 mr-2" />
                Kostenlose Erstberatung verfügbar
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kontaktieren Sie uns
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Unser Expertenteam steht Ihnen mit verschiedenen Kontaktoptionen
              zur Verfügung – wählen Sie die für Sie passende Art der Beratung
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <a href="tel:+41564272515" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Jetzt anrufen
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
              >
                <a href="#contact-form" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Termin vereinbaren
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Statistics */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-red-600">{stat.icon}</div>
              </motion.div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-red-600 mb-2"
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

      {/* Why Contact Us Section */}
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
              <Star className="w-4 h-4 mr-2" />
              Warum HSB Swiss kontaktieren?
            </Badge>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ihre Vorteile bei uns
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie, warum sich Tausende von Kunden für HSB Swiss
            entscheiden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyContactUs.map((benefit, index) => (
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
                <div className="text-red-600">{benefit.icon}</div>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Enhanced Contact Methods */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wählen Sie Ihre bevorzugte Kontaktart
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir bieten verschiedene Möglichkeiten, um mit unserem Expertenteam
            in Kontakt zu treten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {method.icon}
                    </motion.div>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      {method.response}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                    {method.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="font-medium text-gray-900">
                        {method.details}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-gray-600">
                        {method.availability}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 group-hover:bg-red-700 transition-all mt-4"
                  >
                    {method.link.startsWith("/") ||
                    method.link.startsWith("#") ? (
                      <a
                        href={method.link}
                        className="flex items-center justify-center"
                      >
                        Kontakt aufnehmen{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    ) : (
                      <a
                        href={method.link}
                        className="flex items-center justify-center"
                      >
                        Kontakt aufnehmen{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Enhanced Contact Information */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Kontaktdaten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Alle wichtigen Informationen für Ihren Kontakt zu HSB Swiss
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center border-2 border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Enhanced Contact Form Section */}
      <section
        id="contact-form"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50"
      >
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
              <Calendar className="w-4 h-4 mr-2" />
              Kostenlose Beratung
            </Badge>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beratungstermin vereinbaren
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Füllen Sie das Formular aus und wir melden uns innerhalb von 24
            Stunden bei Ihnen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Warum HSB Swiss wählen?
                </h3>
                <div className="space-y-4">
                  {[
                    "Über 20 Jahre Erfahrung im Schweizer Finanzmarkt",
                    "Persönliche Betreuung durch zertifizierte Berater",
                    "Umfassende Bank- und Versicherungslösungen",
                    "Vertrauensvolle Partnerschaften mit führenden Instituten",
                    "Kostenlose und unverbindliche Erstberatung",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Was Sie erwarten können:
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      icon: <Clock className="h-4 w-4" />,
                      text: "Antwort innerhalb von 24 Stunden",
                    },
                    {
                      icon: <Calendar className="h-4 w-4" />,
                      text: "Flexible Terminvereinbarung",
                    },
                    {
                      icon: <Users className="h-4 w-4" />,
                      text: "Persönliche Beratung durch Experten",
                    },
                    {
                      icon: <Shield className="h-4 w-4" />,
                      text: "Maßgeschneiderte Finanzlösungen",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="text-red-600 mr-3">{item.icon}</div>
                      {item.text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Location Benefits */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unser Standort in Wettingen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategisch gelegen für optimale Erreichbarkeit aus der ganzen
            Region
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {locationBenefits.map((benefit, index) => (
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
                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-600">{benefit.icon}</div>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section
        id="map"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50"
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Besuchen Sie unser Büro
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir freuen uns auf Ihren Besuch in unserem modernen Büro in
            Wettingen
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-96 relative">
            <MapContainer
              center={[47.4667, 8.3167]} // Coordinates for Wettingen, Switzerland
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%", zIndex: 1 }}
              className="rounded-t-2xl"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={19}
              />
              <Marker position={[47.4667, 8.3167]} icon={DefaultIcon}>
                <Popup>
                  <div className="text-center p-2">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      HSB Swiss Büro
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Landstrasse 78
                      <br />
                      5430 Wettingen, Schweiz
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500">
                      <Phone className="h-3 w-3 mr-1" />
                      +41 56 427 25 15
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="p-6 bg-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-gray-900 mb-1">
                  HSB Swiss Finanzberatung
                </h3>
                <p className="text-gray-600 text-sm">
                  Landstrasse 78, 5430 Wettingen, Schweiz
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  <a
                    href="https://maps.google.com/?q=Landstrasse+78,+5430+Wettingen,+Switzerland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Google Maps
                  </a>
                </Button>
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a href="tel:+41564272515" className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Anrufen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
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
                <Zap className="w-4 h-4 mr-2" />
                Schnelle Antwort garantiert
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bereit für Ihre finanzielle Zukunft?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Kontaktieren Sie uns noch heute und lassen Sie sich von unseren
              Experten beraten. Wir finden gemeinsam die beste Lösung für Ihre
              finanziellen Ziele.
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
                <a href="tel:+41564272515" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Sofort anrufen
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-red-600 hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
              >
                <a
                  href="mailto:info@hsb-swiss.ch"
                  className="flex items-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail senden
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-red-600 hover:bg-white hover:text-red-600 px-8 py-6 text-lg"
              >
                <a href="#contact-form" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Termin buchen
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
                <span>Antwort innerhalb 24h</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Keine Verpflichtungen</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
