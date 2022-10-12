import React, { useState } from "react";
import { AboutSection } from "./sections/AboutSection";
import { LandingSection } from "./sections/LandingSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
const Landing: React.FC = () => {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Landing;
