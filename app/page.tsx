"use client";
import { HeroSection } from "@/components/landing/HeroSection";
import { EntryExperienceSection } from "@/components/landing/EntryExperienceSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { CTASection } from "@/components/landing/CTASection";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)", minHeight: "100vh" }}>
      <HeroSection />
      <EntryExperienceSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      <DownloadSection />
      <LandingFooter />
    </div>
  );
}
