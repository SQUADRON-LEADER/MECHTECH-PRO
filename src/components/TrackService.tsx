import React, { useState } from "react";
import { Search, Clock, CheckCircle, Truck, PenTool as Tool, ThumbsUp, ChevronRight, Phone, MessageSquare } from "lucide-react";

const TrackService: React.FC = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = () => {
    if (trackingId.trim()) {
      setIsTracking(true);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Request Received",
      description: "Your service request has been received and is being processed.",
      icon: <CheckCircle className="w-6 h-6" />,
      time: "10:30 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Mechanic Assigned",
      description: "Alex Johnson has been assigned to your service request.",
      icon: <Tool className="w-6 h-6" />,
      time: "10:45 AM",
      completed: true,
    },
    {
      id: 3,
      title: "En Route",
      description: "Your mechanic is on the way to your location.",
      icon: <Truck className="w-6 h-6" />,
      time: "11:15 AM",
      completed: true,
      current: true,
    },
    {
      id: 4,
      title: "Service in Progress",
      description: "Your vehicle is being serviced.",
      icon: <Tool className="w-6 h-6" />,
      time: "Estimated: 11:45 AM",
      completed: false,
    },
    {
      id: 5,
      title: "Service Completed",
      description: "Your vehicle has been serviced and is ready.",
      icon: <ThumbsUp className="w-6 h-6" />,
      time: "Estimated: 12:30 PM",
      completed: false,
    },
  ];

  return (
    <section id="track-service" className="py-20 bg-primary-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track Your <span className="text-neon-yellow">Service</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated on the status of your vehicle repair service in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-gray rounded-lg p-6 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Enter your tracking ID"
                  className="w-full pl-4 pr-10 py-3 bg-primary-black border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-yellow text-gray-200"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <button
                onClick={handleTrack}
                className="bg-neon-yellow text-primary-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center glow"
              >
                <Search size={20} className="mr-2" />
                Track Service
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Enter the tracking ID sent to your email or phone
            </p>
          </div>

          {isTracking && (
            <div className="bg-dark-gray rounded-lg p-6 shadow-lg slide-in">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-700">
                <div>
                  <h3 className="text-xl font-bold">Service #MFP-2025-8742</h3>
                  <p className="text-gray-400">Battery Jumpstart Service</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center bg-deep-green/20 px-3 py-1 rounded-md">
                  <Clock className="w-4 h-4 text-neon-yellow mr-2" />
                  <span className="text-sm text-gray-300">
                    ETA: <span className="font-medium">30 minutes</span>
                  </span>
                </div>
              </div>

              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-700"></div>

                {/* Steps */}
                <div className="space-y-8">
                  {steps.map((step) => (
                    <div key={step.id} className="relative flex items-start">
                      <div
                        className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full mr-4 ${
                          step.completed
                            ? "bg-deep-green text-white"
                            : step.current
                            ? "bg-neon-yellow text-primary-black"
                            : "bg-gray-700 text-gray-400"
                        } ${step.current ? "ring-2 ring-neon-yellow ring-opacity-50" : ""}`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <h4 className="text-lg font-medium">{step.title}</h4>
                          <span className="text-sm text-gray-400 md:ml-4">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-gray-400 mt-1">{step.description}</p>

                        {step.current && (
                          <div className="mt-3 bg-primary-black rounded-lg p-4 border border-deep-green">
                            <div className="flex items-start">
                              <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                                alt="Mechanic"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                              />
                              <div>
                                <h5 className="font-medium">Alex Johnson</h5>
                                <p className="text-sm text-gray-400">
                                  Engine Specialist • 4.9 ★
                                </p>
                                <div className="flex mt-2 space-x-3">
                                  <button className="text-neon-yellow text-sm hover:underline flex items-center">
                                    <Phone className="w-4 h-4 mr-1" />
                                    Call
                                  </button>
                                  <button className="text-neon-yellow text-sm hover:underline flex items-center">
                                    <MessageSquare className="w-4 h-4 mr-1" />
                                    Message
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-300 mb-4 md:mb-0">
                  Need help with your service?
                </p>
                <button className="bg-deep-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 flex items-center">
                  Contact Support
                  <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {!isTracking && (
            <div className="bg-dark-gray/50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neon-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Enter your tracking ID to get started
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                You can find your tracking ID in the confirmation email or SMS
                sent to you when you booked your service.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackService;