import { DomainPageTemplate } from "@/components/DomainPageTemplate";

export default function ElectricVehicles() {
  return (
    <DomainPageTemplate
      title="Electric Vehicles (EV)"
      description="Advanced assembly and testing lines for the EV revolution. From battery pack assembly to motor testing, we power the future of mobility."
      // electric vehicle chassis battery manufacturing
      heroImage="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920"
      features={[
        "Battery Pack Assembly Lines",
        "Motor Winding Automation",
        "End-of-Line (EOL) Testing",
        "BMS Integration Systems",
        "High-Voltage Safety Testing",
        "EV Charger Assembly Stations"
      ]}
    />
  );
}
