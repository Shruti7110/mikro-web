import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Factory, Cpu, Battery, Activity } from "lucide-react";
import image1 from "@assets/image_1767168498022.png";
import image2 from "@assets/image_1767168569919.png";
import image3 from "@assets/image_1767168589638.png";
import image4 from "@assets/image_1767168595960.png";
import image5 from "@assets/image_1767172755853.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const automationItems = [
  {
    title: "Cell to Module Assembly Line",
    icon: <Battery className="w-8 h-8 text-primary" />,
    description:
      "Mikro constructs and installs Cell to Module Assembly Line to be integrated into a manufacturing facility. Installation is very fast and production can begin immediately with your customized modules to suit specific production scales.",
    image: image1,
    features: ["Rapid Installation", "Scalable Design", "Customized Modules"],
  },
  {
    title: "Battery Pack Assembly (Cylindrical & Prismatic)",
    icon: <Factory className="w-8 h-8 text-primary" />,
    description:
      "Advanced assembly lines for Cylindrical and Prismatic cell battery packs. Our systems are designed for high throughput and precision, ensuring the highest safety standards for EV energy storage.",
        image: image4,
        features: ["Cylindrical Cells", "Prismatic Cells", "Automated Testing"],
      },
      {
        title: "BDU & Inverter Assembly Line",
        icon: <Cpu className="w-8 h-8 text-primary" />,
        description:
          "Precision manufacturing lines for both AC–DC and DC–DC inverters. We specialize in the complex assembly of Battery Disconnect Units (BDUs) with integrated safety systems.",
            image: image5,
            features: ["High Precision", "Integrated QC", "Component Traceability"],
          },
          {
            title: "Motor & Rotor Assembly Line",
            icon: <Zap className="w-8 h-8 text-primary" />,
            description:
              "End-to-end solutions for Motor and Rotor Assembly Lines. Supporting AC Induction, BLDC, PMSM, and Interior Permanent Magnet Motors with automated winding and testing.",
                  image: image3,
                  features: ["Automated Winding", "Rotor Balancing", "Performance Validation"],
                },
              ];
export default function ElectricVehicles() {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container-padding relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-3xl"
            >
              <Badge className="mb-4 bg-green-600 text-white border-none uppercase tracking-widest px-4 py-1">
                Industry 4.0 Ready
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">EV Automation Lines</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Empowering the future of mobility with high-speed, precision-engineered assembly lines for battery packs, motors, and power electronics.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Assembly Lines Section */}
        <section className="py-20">
          <div className="container-padding">
            <div className="space-y-24">
              {automationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                >
                  <div className="flex-1 space-y-6">                    
                    <h2 className="text-3xl font-bold text-slate-900">{item.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white p-4 border border-slate-200 group">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
           </section>
        {/* Battery Cyclers Partner Section */}
              <section className="py-20 bg-white">
                <div className="container-padding">
                  <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                      <div className="p-12 space-y-8">
                        <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                          <Activity className="w-5 h-5" /> Authorized Partner
                        </div>
                        <h2 className="text-4xl font-bold text-white">Neware Battery Cyclers</h2>
                        <p className="text-lg text-slate-300">
                          Mikro Innotech is the official India partner for Neware Technology Limited, providing comprehensive sales, service, and calibration for high-precision battery testing systems.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 text-slate-200">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            <span>Full Installation & Commissioning</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-200">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            <span>Annual Calibration Services</span>
                          </div>
                          <div className="flex items-center gap-3 text-slate-200">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            <span>Local Technical Support</span>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-full min-h-[400px]">
                        <img 
                          src={image2} 
                          alt="Neware Battery Cycler" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Call to Action */}
              <section className="py-20 bg-slate-200 text-white text-center">
                <div className="container-padding">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Automate Your EV Production?</h2>
                  <p className="text-xl mb-10 text-slate-900 max-w-2xl mx-auto">
                    Consult with our engineering experts to design a customized assembly line tailored to your specific module and scale requirements.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="/contact">
                      <button className="bg-white text-primary px-8 py-4 rounded-none font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
                        Request a Quote
                      </button>
                    </a>                    
                  </div>
                </div>
              </section>
            </div>
          </Layout>
        );
}