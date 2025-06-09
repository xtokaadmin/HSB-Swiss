import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Landmark,
  Shield,
  Wallet,
  CreditCard,
  Briefcase,
  LineChart,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link = "#",
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-2">
          <motion.div
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-50 text-red-600 mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="p-0 h-auto text-red-600 hover:text-red-800 hover:bg-transparent"
            asChild
          >
            <a href={link} className="flex items-center gap-1">
              Mehr erfahren <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ServiceSection = () => {
  const bankingServices = [
    {
      title: "Private Banking",
      description:
        "Personalisierte Finanzlösungen, die auf Ihre individuellen Bedürfnisse und Ziele zugeschnitten sind, mit engagierter Beraterunterstützung.",
      icon: <Landmark className="h-6 w-6" />,
      link: "/contact",
    },
    {
      title: "Vermögensverwaltung",
      description:
        "Umfassende Strategien zur Erhaltung und Vermehrung Ihres Vermögens mit Fokus auf langfristige finanzielle Sicherheit.",
      icon: <Wallet className="h-6 w-6" />,
      link: "/contact",
    },
    {
      title: "Anlageberatung",
      description:
        "Expertenberatung zu Anlagemöglichkeiten auf globalen Märkten zur Optimierung Ihrer Portfolio-Performance.",
      icon: <LineChart className="h-6 w-6" />,
      link: "/contact",
    },
  ];

  const insuranceServices = [
    {
      title: "Lebensversicherung",
      description:
        "Schützen Sie die finanzielle Zukunft Ihrer Familie mit massgeschneiderten Lebensversicherungslösungen von vertrauenswürdigen Schweizer Anbietern.",
      icon: <Shield className="h-6 w-6" />,
      link: "/contact",
    },
    {
      title: "Unternehmensversicherung",
      description:
        "Umfassende Deckungsoptionen zum Schutz Ihrer Unternehmensanlagen, Betriebsabläufe und Haftungsrisiken.",
      icon: <Briefcase className="h-6 w-6" />,
      link: "/contact",
    },
    {
      title: "Altersvorsorge",
      description:
        "Strategische Planung für eine sichere Rente mit Pensionslösungen und langfristiger finanzieller Sicherheit.",
      icon: <CreditCard className="h-6 w-6" />,
      link: "/contact",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unsere Dienstleistungen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            HSB Swiss bietet umfassende Finanzlösungen durch unsere Bank- und
            Versicherungsmaklerdienstleistungen, die auf Ihre spezifischen
            Bedürfnisse zugeschnitten sind.
          </p>
        </div>

        <div className="mb-16">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Bankdienstleistungen
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bankingServices.map((service, index) => (
              <motion.div
                key={`banking-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Versicherungsdienstleistungen
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceServices.map((service, index) => (
              <motion.div
                key={`insurance-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
