import React, { useState } from "react";
import {
  Check,
  X,
  CreditCard,
  Smartphone,
  DollarSign,
  Shield,
  Clock,
} from "lucide-react";

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: { text: string; included: boolean }[];
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Basic",
      price: billingCycle === "monthly" ? "$19.99" : "$199.99",
      description: "Essential coverage for occasional drivers",
      features: [
        { text: "Basic roadside assistance", included: true },
        { text: "Tire change service", included: true },
        { text: "Battery jumpstart", included: true },
        { text: "Fuel delivery", included: true },
        { text: "24/7 phone support", included: true },
        { text: "Priority service", included: false },
        { text: "Free towing (up to 10 miles)", included: false },
        { text: "Discounted repairs", included: false },
      ],
    },
    {
      id: 2,
      name: "Premium",
      price: billingCycle === "monthly" ? "$39.99" : "$399.99",
      description: "Complete coverage for regular drivers",
      features: [
        { text: "Basic roadside assistance", included: true },
        { text: "Tire change service", included: true },
        { text: "Battery jumpstart", included: true },
        { text: "Fuel delivery", included: true },
        { text: "24/7 phone support", included: true },
        { text: "Priority service", included: true },
        { text: "Free towing (up to 10 miles)", included: true },
        { text: "Discounted repairs", included: true },
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Family",
      price: billingCycle === "monthly" ? "$59.99" : "$599.99",
      description: "Complete coverage for multiple vehicles",
      features: [
        { text: "Basic roadside assistance", included: true },
        { text: "Tire change service", included: true },
        { text: "Battery jumpstart", included: true },
        { text: "Fuel delivery", included: true },
        { text: "24/7 phone support", included: true },
        { text: "Priority service", included: true },
        { text: "Free towing (up to 25 miles)", included: true },
        { text: "Discounted repairs", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent <span className="text-neon-yellow">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs with our straightforward
            pricing. No hidden fees, just reliable service when you need it.
          </p>

          <div className="flex justify-center mt-8">
            <div className="bg-primary-black p-1 rounded-lg inline-flex">
              <button
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "bg-deep-green text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  billingCycle === "yearly"
                    ? "bg-deep-green text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly{" "}
                <span className="text-xs text-neon-yellow font-medium">
                  (Save 15%)
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-primary-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover-scale ${
                plan.popular
                  ? "ring-2 ring-neon-yellow transform scale-105 md:scale-105 z-10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-neon-yellow text-primary-black text-center py-1 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-gray-400">
                    /{billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>
                <p className="mt-2 text-gray-400">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <Check
                          className="w-5 h-5 text-neon-yellow mr-2 flex-shrink-0"
                          strokeWidth={3}
                        />
                      ) : (
                        <X
                          className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0"
                          strokeWidth={3}
                        />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-300" : "text-gray-500"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full mt-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? "bg-neon-yellow text-primary-black glow"
                      : "bg-deep-green text-white hover:bg-opacity-90"
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-black rounded-lg p-6 md:p-8 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">
            Payment <span className="text-neon-yellow">Options</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-dark-gray p-4 rounded-lg flex items-center">
              <CreditCard className="w-8 h-8 text-neon-yellow mr-3" />
              <div>
                <h4 className="font-medium">Credit Card</h4>
                <p className="text-sm text-gray-400">
                  Visa, Mastercard, Amex
                </p>
              </div>
            </div>
            <div className="bg-dark-gray p-4 rounded-lg flex items-center">
              <Smartphone className="w-8 h-8 text-neon-yellow mr-3" />
              <div>
                <h4 className="font-medium">Mobile Payment</h4>
                <p className="text-sm text-gray-400">
                  Apple Pay, Google Pay
                </p>
              </div>
            </div>
            <div className="bg-dark-gray p-4 rounded-lg flex items-center">
              <DollarSign className="w-8 h-8 text-neon-yellow mr-3" />
              <div>
                <h4 className="font-medium">Pay on Arrival</h4>
                <p className="text-sm text-gray-400">Cash, Card accepted</p>
              </div>
            </div>
            <div className="bg-dark-gray p-4 rounded-lg flex items-center">
              <Shield className="w-8 h-8 text-neon-yellow mr-3" />
              <div>
                <h4 className="font-medium">Secure Payments</h4>
                <p className="text-sm text-gray-400">256-bit encryption</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between p-4 bg-deep-green/20 rounded-lg border border-deep-green">
            <div className="flex items-center mb-4 md:mb-0">
              <Clock className="w-6 h-6 text-neon-yellow mr-3" />
              <p className="text-gray-300">
                <span className="font-medium">Limited Time Offer:</span> Get your
                first month free with annual subscription
              </p>
            </div>
            <button className="bg-neon-yellow text-primary-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200 whitespace-nowrap">
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;