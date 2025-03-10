import React, { useState } from "react";
import { Battery, Gauge, Wrench, File as Oil, Cog, AlertTriangle, Check, ChevronRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Battery Jumpstart",
      description:
        "Quick and reliable battery jumpstart service to get you back on the road when your vehicle won't start.",
      icon: <Battery className="w-10 h-10 text-neon-yellow" />,
      features: [
        "24/7 emergency service",
        "Professional equipment",
        "Battery health check",
        "Charging system diagnosis",
      ],
    },
    {
      id: 2,
      title: "Tire Change",
      description:
        "Fast tire change and repair services for flat tires, blowouts, or tire damage on the road.",
      icon: <Gauge className="w-10 h-10 text-neon-yellow" />,
      features: [
        "Spare tire installation",
        "Tire pressure check",
        "Wheel balancing",
        "Tire rotation",
      ],
    },
    {
      id: 3,
      title: "Engine Repair",
      description:
        "Comprehensive engine diagnostics and repair services to address performance issues and mechanical failures.",
      icon: <Wrench className="w-10 h-10 text-neon-yellow" />,
      features: [
        "Computer diagnostics",
        "Engine performance tuning",
        "Cooling system repair",
        "Belt and hose replacement",
      ],
    },
    {
      id: 4,
      title: "Oil Change",
      description:
        "Professional oil change service using high-quality oils and filters to keep your engine running smoothly.",
      icon: <Oil className="w-10 h-10 text-neon-yellow" />,
      features: [
        "Synthetic oil options",
        "Filter replacement",
        "Fluid level check",
        "Multi-point inspection",
      ],
    },
    {
      id: 5,
      title: "Brake Service",
      description:
        "Expert brake inspection, repair, and replacement services to ensure your vehicle stops safely and effectively.",
      icon: <AlertTriangle className="w-10 h-10 text-neon-yellow" />,
      features: [
        "Brake pad replacement",
        "Rotor resurfacing",
        "Brake fluid flush",
        "ABS system diagnosis",
      ],
    },
    {
      id: 6,
      title: "General Maintenance",
      description:
        "Regular maintenance services to keep your vehicle in optimal condition and prevent costly repairs.",
      icon: <Cog className="w-10 h-10 text-neon-yellow" />,
      features: [
        "Scheduled maintenance",
        "Fluid checks and top-ups",
        "Filter replacements",
        "System inspections",
      ],
    },
  ];

  const toggleService = (id: number) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <section id="services" className="py-20 bg-primary-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-neon-yellow">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of vehicle repair and maintenance
            services to keep your car running at its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-dark-gray rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                activeService === service.id
                  ? "ring-2 ring-neon-yellow shadow-neon"
                  : "hover:shadow-neon hover-scale"
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-neon-yellow transition-transform duration-300 ${
                      activeService === service.id ? "rotate-90" : ""
                    }`}
                  />
                </div>
                <p className="mt-4 text-gray-300">{service.description}</p>

                <div
                  className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
                    activeService === service.id ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="font-medium text-neon-yellow mb-2">
                      Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            className="w-5 h-5 text-deep-green mr-2 flex-shrink-0"
                            strokeWidth={3}
                          />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full mt-4 bg-neon-yellow text-primary-black py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Need a service not listed here? We can help with that too!
          </p>
          <button className="bg-deep-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 glow">
            Request Custom Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;