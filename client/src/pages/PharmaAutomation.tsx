import { DomainPageTemplate } from "@/components/DomainPageTemplate";

export default function PharmaAutomation() {
  return (
    <DomainPageTemplate
      title="Pharmaceutical Automation"
      description="GMP-compliant automation solutions ensuring hygiene, precision, and traceability. We help pharmaceutical companies scale production safely."
      // pharmaceutical laboratory automation sterile
      heroImage="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1920"
      features={[
        "Blister Packaging Lines",
        "Vial Filling & Capping",
        "Inspection Systems (Vision)",
        "Serialization & Track/Trace",
        "Clean Room Conveyors",
        "Robotic Pick & Place"
      ]}
    />
  );
}
