import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import MobileFeature from "./components/MobileFeature";
import ProductLineup from "./components/ProductLineup";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MobileFeature />
      <ProductLineup />
    </div>
  );
}

export default App;
