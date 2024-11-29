import React from "react";
// import FinancialModeling from '../components/FinancialModeling';
import { HeroSection } from "@/components/ui/hero-section";
import GreenSection from "./GreenSection";
import CardSection from "./CardSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GreenSection />
      <CardSection />
    </main>
  );
}
