import { DomainPageTemplate } from "@/components/DomainPageTemplate";

export default function HighSpeedAutomation() {
  return (
    <DomainPageTemplate
      title="High-Speed Automation"
      description="Rapid assembly and processing systems designed for maximum throughput. Ideal for FMCG, consumer electronics, and high-volume manufacturing."
      // conveyor belt factory high speed motion blur
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
      features={[
        "Rotary Indexing Machines",
        "Continuous Motion Assembly",
        "High-Speed Labeling",
        "Automatic Feeding Systems",
        "Vision-Guided Sorting",
        "Flexible Feeding Solutions"
      ]}
    />
  );
}
