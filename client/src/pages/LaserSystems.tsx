import { DomainPageTemplate } from "@/components/DomainPageTemplate";

export default function LaserSystems() {
  return (
    <DomainPageTemplate
      title="Laser Systems"
      description="High-precision laser cutting, welding, and marking solutions tailored for industrial manufacturing. We integrate world-class laser sources with robust automation."
      // industrial laser cutting machine metal sparks
      heroImage="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45f7?auto=format&fit=crop&q=80&w=1920"
      features={[
        "Fiber Laser Cutting Systems",
        "Precision Laser Welding Cells",
        "3D Laser Processing",
        "Automated Laser Marking Stations",
        "Tube & Pipe Cutting Solutions",
        "Robotic Laser Integration"
      ]}
    />
  );
}
