import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import MobileFeature from "./components/MobileFeature";
import ProductLineup from "./components/ProductLineup";
import PromotionalSection from "./components/PromotionalSection";
import TestimonialSection from "./components/TestimonialSection";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductLineup />
      <MobileFeature />
      <PromotionalSection/>
      <TestimonialSection/>
    </div>
  );
}

export default App;
