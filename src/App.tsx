import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FindMechanic from "./components/FindMechanic";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import TrackService from "./components/TrackService";
import Footer from "./components/Footer";
import EmergencySOS from "./components/EmergencySOS";
import Chatbot from "./components/Chatbot";


function App() {
  return (
    <div className="min-h-screen bg-primary-black text-white relative">
      
      <Navbar />
      <HeroSection />
      <FindMechanic />
      <Services />
      <TrackService />
      <Pricing />
      <Footer />
      <EmergencySOS />
      <Chatbot />
    </div>
  );
}

export default App;