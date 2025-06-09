import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HelpCircle,
  Search,
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  Clock,
  Users,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const supportStats = [
    {
      icon: <Clock className="h-6 w-6" />,
      number: "<24h",
      label: "Antwortzeit",
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "98%",
      label: "Zufriedenheit",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      number: "500+",
      label: "Gelöste Fragen",
    },
    { icon: <Award className="h-6 w-6" />, number: "24/7", label: "Support" },
  ];

  const popularQuestions = [
    {
      question: "Wie kann ich eine kostenlose Beratung vereinbaren?",
      answer:
        "Sie können eine Beratung über unser Kontaktformular, per Telefon unter +41 44 123 45 67 oder per E-Mail vereinbaren. Wir antworten innerhalb von 24 Stunden.",
      category: "Beratung",
    },
    {
      question: "Was ist die Mindestanlagesumme für Private Banking?",
      answer:
        "Für Private Banking beginnen wir in der Regel bei CHF 500.000, während unsere Anlageberatung bereits ab CHF 100.000 verfügbar ist.",
      category: "Banking",
    },
    {
      question: "Welche Versicherungen bieten Sie an?",
      answer:
        "Wir bieten Lebensversicherung, Unternehmensversicherung, Altersvorsorge und weitere maßgeschneiderte Versicherungslösungen.",
      category: "Versicherung",
    },
  ];

  const contactOptions = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefonische Beratung",
      description: "Sofortige Hilfe von unseren Experten",
      action: "Jetzt anrufen",
      link: "tel:+41441234567",
      highlight: "+41 44 123 45 67",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-Mail Support",
      description: "Detaillierte Antworten innerhalb 24h",
      action: "E-Mail senden",
      link: "mailto:info@hsbswiss.com",
      highlight: "info@hsbswiss.com",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Persönliche Beratung",
      description: "Kostenlose Erstberatung vor Ort",
      action: "Termin buchen",
      link: "/contact",
      highlight: "Kostenlos",
    },
  ];

  const faqs = [
    {
      question: "Wie kann ich eine Beratung vereinbaren?",
      answer: "Sie können eine Beratung über unser Kontaktformular, per Telefon unter +41 56 427 25 15 oder per E-Mail vereinbaren. Wir antworten innerhalb von 24 Stunden.",
      category: "contact",
    },
    {
      question: "Welche Versicherungen bieten Sie an?",
      answer: "Wir bieten ein umfassendes Portfolio an Versicherungslösungen, darunter Krankenversicherung, Privathaftpflicht, Rechtsschutz, Autoversicherung und viele mehr. Jede Versicherung wird individuell auf Ihre Bedürfnisse zugeschnitten.",
      category: "services",
    },
    {
      question: "Wie lange dauert die Bearbeitung meiner Anfrage?",
      answer: "Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten. Bei dringenden Angelegenheiten können Sie uns auch direkt telefonisch kontaktieren.",
      category: "general",
    },
    {
      question: "Bieten Sie auch Online-Beratungen an?",
      answer: "Ja, wir bieten sowohl persönliche Beratungen in unserem Büro als auch Online-Beratungen per Videoanruf an. Dies ermöglicht es uns, Kunden in der ganzen Schweiz und darüber hinaus zu betreuen.",
      category: "services",
    },
    {
      question: "Welche Unterlagen benötige ich für die Beratung?",
      answer: "Für eine effektive Beratung bringen Sie bitte aktuelle Finanzunterlagen, Versicherungspolicen und Informationen über Ihre finanziellen Ziele mit. Wir senden Ihnen vorab eine Checkliste zu.",
      category: "general",
    },
    {
      question: "Wie kann ich meine Versicherungspolice ändern?",
      answer: "Änderungen an Ihrer Versicherungspolice können Sie telefonisch, per E-Mail oder persönlich in unserem Büro vornehmen. Wir beraten Sie gerne zu den verschiedenen Optionen.",
      category: "services",
    },
    {
      question: "Was passiert im Schadensfall?",
      answer: "Im Schadensfall stehen wir Ihnen rund um die Uhr zur Verfügung. Sie können den Schaden telefonisch oder über unser Online-Portal melden. Wir kümmern uns um die schnelle und faire Abwicklung.",
      category: "services",
    },
    {
      question: "Wie sicher sind meine Daten bei Ihnen?",
      answer: "Der Schutz Ihrer Daten hat bei uns höchste Priorität. Wir arbeiten nach den strengsten Schweizer Datenschutzstandards und verwenden modernste Sicherheitstechnologien.",
      category: "general",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setExpandedFaqs((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: "all", name: "Alle Fragen", icon: <MessageCircle className="h-5 w-5" /> },
    { id: "general", name: "Allgemein", icon: <Shield className="h-5 w-5" /> },
    { id: "services", name: "Dienstleistungen", icon: <Star className="h-5 w-5" /> },
    { id: "contact", name: "Kontakt", icon: <Users className="h-5 w-5" /> },
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefonische Beratung",
      description: "Sofortige Hilfe von unseren Finanzexperten",
      details: "Rufen Sie uns an",
      availability: "Mo-Do: 09:00-12:00, 13:30-17:30, Fr: 09:00-12:00, 13:30-16:00",
      response: "Sofort",
      link: "tel:+41564272515",
      highlight: "+41 56 427 25 15",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "E-Mail Support",
      description: "Detaillierte Antworten auf Ihre Fragen",
      details: "Schreiben Sie uns",
      availability: "Rund um die Uhr",
      response: "Innerhalb 24h",
      link: "mailto:info@hsb-swiss.ch",
      highlight: "info@hsb-swiss.ch",
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
                <HelpCircle className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Schnelle Antworten auf Ihre Fragen
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Wie können wir Ihnen helfen?
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Finden Sie schnell Antworten auf Ihre Fragen zu unseren Dienstleistungen
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Support Statistics */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {supportStats.map((stat, index) => (
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

      {/* Popular Questions */}
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
              Meistgestellte Fragen
            </Badge>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Schnelle Antworten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Die häufigsten Fragen unserer Kunden – schnell und einfach
            beantwortet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {popularQuestions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="outline"
                      className="bg-red-50 text-red-700 border-red-200"
                    >
                      {faq.category}
                    </Badge>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="h-5 w-5 text-yellow-500" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-red-600 transition-colors leading-tight">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Search and Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Suchen Sie nach Ihrer Frage..."
              className="pl-12 h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "hover:bg-red-50"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`border-2 transition-all duration-300 ${
                  expandedFaqs.includes(index)
                    ? "border-red-200 shadow-lg"
                    : "border-gray-100 hover:border-red-100"
                }`}
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </CardTitle>
                    {expandedFaqs.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-red-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaqs.includes(index) && (
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-red-100 text-red-600 px-4 py-1.5 mb-4 text-sm font-medium">
              Kontakt
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Haben Sie noch Fragen?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unser Expertenteam steht Ihnen mit verschiedenen Kontaktmöglichkeiten zur Verfügung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-red-100">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">Telefon</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href="tel:+41564272515"
                    className="text-lg text-gray-600 hover:text-red-600 transition-colors font-medium"
                  >
                    +41 56 427 25 15
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Mo-Do: 09:00-12:00, 13:30-17:30
                    <br />
                    Fr: 09:00-12:00, 13:30-16:00
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-red-100">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">E-Mail</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href="mailto:info@hsb-swiss.ch"
                    className="text-lg text-gray-600 hover:text-red-600 transition-colors font-medium"
                  >
                    info@hsb-swiss.ch
                  </a>
                  <p className="text-sm text-gray-500 mt-2">
                    Antwort innerhalb von 24 Stunden
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-red-100">
                <CardHeader className="text-center pb-2">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">Besuchen Sie uns</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 font-medium">
                    Landstrasse 78
                    <br />
                    5430 Wettingen
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Termine nach Vereinbarung
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
              size="lg"
            >
              Jetzt Beratungstermin vereinbaren
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
