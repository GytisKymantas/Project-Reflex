import React from "react";
import { Box } from "components";
import { AboutSection } from "./sections/AboutSection";
import { LandingSection } from "./sections/LandingSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
const Landing: React.FC = () => {
  return (
    <Box>
      <LandingSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
    </Box>
  );
};

export default Landing;
