import React, { useState } from "react";
import { AlertTriangle, X, MapPin, Phone } from "lucide-react";

const EmergencySOS: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* SOS Button (Desktop) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-neon-yellow text-primary-black h-16 px-6 rounded-full flex items-center justify-center shadow-lg pulse font-bold"
        >
          <AlertTriangle className="w-5 h-5 mr-2" />
          Emergency SOS
        </button>
      </div>

      {/* SOS Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="relative bg-dark-gray rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
          <div className="bg-deep-green p-4 flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-neon-yellow mr-2" />
              <h3 className="text-xl font-bold text-white">Emergency SOS</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-neon-yellow transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <p className="text-gray-300 mb-6">
              Need immediate assistance? Our emergency team is ready to help you
              24/7. Share your location and we'll dispatch the nearest mechanic
              to your location.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Location
                </label>
                <div className="relative">
                  <MapPin
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter your location"
                    className="w-full pl-10 pr-4 py-3 bg-primary-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                  />
                </div>
                <button className="text-neon-yellow text-sm mt-1 hover:underline">
                  Use current location
                </button>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Your Phone Number
                </label>
                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full pl-10 pr-4 py-3 bg-primary-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="issue"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Describe Your Issue
                </label>
                <select
                  id="issue"
                  className="w-full px-4 py-3 bg-primary-black border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                >
                  <option value="">Select an issue</option>
                  <option value="battery">Battery Problem</option>
                  <option value="tire">Flat Tire</option>
                  <option value="engine">Engine Won't Start</option>
                  <option value="accident">Accident/Collision</option>
                  <option value="other">Other Issue</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              <button className="w-full bg-neon-yellow text-primary-black py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Send SOS Alert
              </button>
              <button className="w-full bg-deep-green text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200">
                Call Emergency Hotline
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              By sending an SOS alert, you agree to share your location with our
              service providers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencySOS;