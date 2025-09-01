import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import MobileFeature from "./components/MobileFeature";
import ProductLineup from "./components/ProductLineup";
import PromotionalSection from "./components/PromotionalSection";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductLineup />
      <MobileFeature />
      <PromotionalSection/>
    </div>
  );
}

export default App;
