import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-neon-yellow font-bold text-2xl">
                MechFix
              </span>
              <span className="text-deep-green font-bold ml-1">Pro</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional vehicle repair services at your fingertips. Fast,
              reliable, and transparent solutions for all your automotive needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center text-gray-300 hover:bg-deep-green hover:text-white transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center text-gray-300 hover:bg-deep-green hover:text-white transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center text-gray-300 hover:bg-deep-green hover:text-white transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-dark-gray flex items-center justify-center text-gray-300 hover:bg-deep-green hover:text-white transition-colors duration-200"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#find-mechanic"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Find Mechanic
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Battery Jumpstart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Tire Change
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Engine Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Oil Change
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Brake Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neon-yellow transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  General Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-neon-yellow mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Repair Street, Automotive City, AC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-neon-yellow mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-neon-yellow mr-3 flex-shrink-0" />
                <span className="text-gray-400">support@mechfixpro.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium text-gray-300 mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 bg-dark-gray border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                />
                <button className="bg-neon-yellow text-primary-black px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 MechFixPro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-neon-yellow text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-neon-yellow text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-neon-yellow text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;