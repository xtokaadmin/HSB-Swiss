import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Shield, Award, Building2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

interface Certification {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface TrustSectionProps {
  certifications?: Certification[];
}

const TrustSection = ({
  certifications = [
    {
      id: "1",
      name: "Schweizer Finanzaufsicht",
      icon: <Shield className="h-8 w-8" />,
      description: "Zertifizierter Finanzberater",
    },
    {
      id: "2",
      name: "Internationale Versicherungsstandards",
      icon: <Award className="h-8 w-8" />,
      description: "Zertifizierter Versicherungsmakler",
    },
    {
      id: "3",
      name: "Schweizerische Bankiervereinigung",
      icon: <Building2 className="h-8 w-8" />,
      description: "Registrierter Bankberater",
    },
  ],
}: TrustSectionProps) => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Warum HSB Swiss vertrauen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mit jahrzehntelanger Erfahrung im Finanzsektor haben wir unseren Ruf
            auf Vertrauen, Expertise und aussergewöhnlichem Kundenservice
            aufgebaut. Unsere Zertifizierungen spiegeln unser Engagement für
            Exzellenz wider.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-10 text-center">
            Unsere Zertifizierungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <div className="text-red-600">{cert.icon}</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
