import { DomainPageTemplate } from "@/components/DomainPageTemplate";

export default function ExportSolutions() {
  return (
    <DomainPageTemplate
      title="Export Solutions"
      description="Global standard machinery compliant with CE, UL, and other international safety norms. We support clients worldwide with robust export logistics."
      // cargo ship container port crane
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920"
      features={[
        "CE/UL Certified Machines",
        "Seaworthy Packaging",
        "International Logistics Support",
        "Remote Diagnostics & Support",
        "Multi-language HMI Systems",
        "Global Commissioning Teams"
      ]}
    />
  );
}
