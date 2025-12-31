import { DomainPageTemplate } from "@/components/DomainPageTemplate";

export default function DefenceAerospace() {
  return (
    <DomainPageTemplate
      title="Defence Automation Solutions"
      description="Mission-critical manufacturing solutions meeting stringent defence standards. We deliver precision, reliability, and security."
      // aerospace engineering jet engine turbine
      heroImage="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1920"
      features={[
        "Precision Assembly Jigs",
        "Component Testing Rigs",
        "Special Purpose Machines (SPM)",
        "Composite Material Processing",
        "Safety-Critical Bonding",
        "Ordnance Handling Systems"
      ]}
    />
  );
}
