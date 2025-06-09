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
} from "lucide-react";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const faqData = [
    {
      category: "Allgemeine Fragen",
      id: "general",
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          question:
            "Was ist HSB Swiss und welche Dienstleistungen bieten Sie an?",
          answer:
            "HSB Swiss ist ein führender Finanzdienstleister in der Schweiz, der sich auf Bank- und Versicherungsmaklerdienstleistungen spezialisiert hat. Wir bieten umfassende Lösungen in den Bereichen Private Banking, Vermögensverwaltung, Anlageberatung, Lebensversicherung, Unternehmensversicherung und Altersvorsorge.",
        },
        {
          question: "Wie lange ist HSB Swiss bereits im Geschäft?",
          answer:
            "HSB Swiss ist seit über 20 Jahren in der Schweizer Finanzlandschaft tätig und hat sich als vertrauensvoller Partner für Privatpersonen und Unternehmen etabliert.",
        },
        {
          question: "Wo befindet sich Ihr Hauptsitz?",
          answer:
            "Unser Hauptsitz befindet sich in Wettingen, Schweiz, an der Country Road 78, 5430 Wettingen. Wir sind von Montag bis Freitag von 8:00 bis 18:00 Uhr und samstags von 9:00 bis 14:00 Uhr für Sie da.",
        },
        {
          question: "Sind Sie reguliert und lizenziert?",
          answer:
            "Ja, HSB Swiss ist vollständig reguliert und lizenziert durch die Schweizer Finanzaufsichtsbehörden. Wir halten alle erforderlichen Zertifizierungen und befolgen strenge Compliance-Standards.",
        },
      ],
    },
    {
      category: "Bankdienstleistungen",
      id: "banking",
      icon: <TrendingUp className="h-5 w-5" />,
      questions: [
        {
          question: "Was umfasst Ihr Private Banking Service?",
          answer:
            "Unser Private Banking Service bietet exklusive Bankdienstleistungen für vermögende Privatpersonen mit dedizierten Beziehungsmanagern. Dazu gehören personalisierte Anlagestrategien, Vermögenserhaltungsplanung, Nachlassplanungsdienstleistungen und Steueroptimierung.",
        },
        {
          question: "Wie funktioniert Ihre Vermögensverwaltung?",
          answer:
            "Unsere professionelle Vermögensverwaltung umfasst Vermögensallokation, Risikomanagement, Performance-Überwachung und regelmäßige Portfolio-Reviews. Wir arbeiten eng mit Ihnen zusammen, um eine auf Ihre Ziele abgestimmte Anlagestrategie zu entwickeln.",
        },
        {
          question:
            "Welche Mindestanlagesumme ist für Ihre Dienstleistungen erforderlich?",
          answer:
            "Die Mindestanlagesumme variiert je nach gewähltem Service. Für Private Banking beginnen wir in der Regel bei CHF 500.000, während unsere Anlageberatung bereits ab CHF 100.000 verfügbar ist. Kontaktieren Sie uns für eine individuelle Beratung.",
        },
        {
          question: "Welche Anlageprodukte bieten Sie an?",
          answer:
            "Wir bieten eine breite Palette von Anlageprodukten an, darunter Aktien, Anleihen, Investmentfonds, ETFs, strukturierte Produkte und alternative Anlagen. Alle Produkte werden sorgfältig ausgewählt und auf Ihre Risikotoleranz abgestimmt.",
        },
      ],
    },
    {
      category: "Versicherungsdienstleistungen",
      id: "insurance",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          question: "Welche Arten von Lebensversicherungen bieten Sie an?",
          answer:
            "Wir bieten verschiedene Arten von Lebensversicherungen an, darunter Risikolebensversicherung, Kapitallebensversicherung, universelle Lebensversicherung und integrierte Nachlassplanung. Jede Police wird individuell auf Ihre Bedürfnisse zugeschnitten.",
        },
        {
          question: "Was ist in der Unternehmensversicherung enthalten?",
          answer:
            "Unsere Unternehmensversicherung bietet umfassenden Schutz für Ihre Geschäftstätigkeiten und umfasst allgemeine Haftpflicht, Berufshaftpflicht, Sachversicherung und Betriebsunterbrechungsversicherung.",
        },
        {
          question: "Wie kann ich meine Altersvorsorge optimieren?",
          answer:
            "Wir entwickeln strategische Pläne für eine sichere und komfortable Rente, einschließlich Rentenplanung, Altersvorsorgestrategien, Sozialversicherungsoptimierung und Gesundheitsplanung. Unser Team hilft Ihnen dabei, die beste Lösung für Ihre individuellen Umstände zu finden.",
        },
        {
          question: "Kann ich bestehende Versicherungen übertragen?",
          answer:
            "Ja, wir können Ihnen bei der Übertragung bestehender Versicherungen helfen und diese in Ihre Gesamtstrategie integrieren. Wir analysieren Ihre aktuellen Policen und empfehlen Optimierungen.",
        },
      ],
    },
    {
      category: "Beratung und Kontakt",
      id: "consultation",
      icon: <MessageCircle className="h-5 w-5" />,
      questions: [
        {
          question: "Wie kann ich eine Beratung vereinbaren?",
          answer:
            "Sie können eine Beratung über unser Kontaktformular auf der Website, per Telefon unter +41 44 123 45 67 oder per E-Mail an info@hsbswiss.com vereinbaren. Wir antworten in der Regel innerhalb von 24 Stunden.",
        },
        {
          question: "Ist die erste Beratung kostenlos?",
          answer:
            "Ja, wir bieten eine kostenlose Erstberatung an, in der wir Ihre finanziellen Ziele besprechen und Ihnen einen Überblick über unsere Dienstleistungen geben. Dies hilft uns, die beste Lösung für Ihre Bedürfnisse zu finden.",
        },
        {
          question:
            "Wie lange dauert es, bis ich eine Antwort auf meine Anfrage erhalte?",
          answer:
            "Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten. Bei dringenden Angelegenheiten können Sie uns auch direkt telefonisch kontaktieren.",
        },
        {
          question: "Bieten Sie auch Online-Beratungen an?",
          answer:
            "Ja, wir bieten sowohl persönliche Beratungen in unserem Büro als auch Online-Beratungen per Videoanruf an. Dies ermöglicht es uns, Kunden in der ganzen Schweiz und darüber hinaus zu betreuen.",
        },
        {
          question: "Welche Unterlagen benötige ich für die Beratung?",
          answer:
            "Für eine effektive Beratung bringen Sie bitte aktuelle Finanzunterlagen, Versicherungspolicen und Informationen über Ihre finanziellen Ziele mit. Wir senden Ihnen vorab eine Checkliste zu.",
        },
      ],
    },
  ];

  const filteredFAQs = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter(
      (category) =>
        selectedCategory === "all" || category.id === selectedCategory,
    )
    .filter((category) => category.questions.length > 0);

  const categories = [
    {
      id: "all",
      name: "Alle Kategorien",
      icon: <HelpCircle className="h-4 w-4" />,
    },
    {
      id: "general",
      name: "Allgemein",
      icon: <HelpCircle className="h-4 w-4" />,
    },
    {
      id: "banking",
      name: "Banking",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      id: "insurance",
      name: "Versicherung",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      id: "consultation",
      name: "Beratung",
      icon: <MessageCircle className="h-4 w-4" />,
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
              Häufig gestellte Fragen
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Finden Sie schnell Antworten auf die häufigsten Fragen zu unseren
              Finanzdienstleistungen und Services
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

      {/* Enhanced Search and Filter Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Alle Fragen & Antworten
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Durchsuchen Sie unsere umfassende FAQ-Datenbank oder filtern Sie
            nach Kategorien
          </p>

          {/* Search Bar */}
          <motion.div
            className="relative max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Suchen Sie nach Stichwörtern..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-red-500 rounded-xl"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Content */}
        <div className="space-y-12">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <div className="text-red-600">{category.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                    <p className="text-gray-600">
                      {category.questions.length} Frage
                      {category.questions.length !== 1 ? "n" : ""}
                    </p>
                  </div>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                    >
                      <AccordionItem
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-2 border-gray-100 rounded-xl px-6 bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group"
                      >
                        <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600 transition-colors py-6 group-hover:no-underline">
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-lg">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-6 text-base">
                          <div className="pl-8">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Keine Ergebnisse gefunden
              </h3>
              <p className="text-gray-600 mb-6">
                Versuchen Sie andere Suchbegriffe oder wählen Sie eine andere
                Kategorie.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                Filter zurücksetzen
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      {/* Enhanced Contact Options */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Haben Sie noch Fragen?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unser Expertenteam steht Ihnen mit verschiedenen
            Kontaktmöglichkeiten zur Verfügung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full text-center border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group bg-white">
                <CardHeader className="pb-4">
                  <motion.div
                    className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-red-600">{option.icon}</div>
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                    {option.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="text-lg font-semibold text-red-600">
                    {option.highlight}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 group-hover:bg-red-700 transition-all"
                  >
                    {option.link.startsWith("/") ? (
                      <Link
                        to={option.link}
                        className="flex items-center justify-center"
                      >
                        {option.action} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <a
                        href={option.link}
                        className="flex items-center justify-center"
                      >
                        {option.action} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                <span>Antwort innerhalb 24h</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                <span>Keine Verpflichtungen</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
