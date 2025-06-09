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
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Warum HSB Swiss vertrauen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mit jahrzehntelanger Erfahrung im Finanzsektor haben wir unseren Ruf
            auf Vertrauen, Expertise und aussergewöhnlichem Kundenservice
            aufgebaut. Unsere Zertifizierungen spiegeln unser Engagement für
            Exzellenz wider.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Unsere Zertifizierungen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-red-600">{cert.icon}</div>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
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
