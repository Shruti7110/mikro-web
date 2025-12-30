import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Zap,
  Activity,
  Shield,
  Plane,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import coverVideo from "/assets/cover.mp4";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const expertiseItems = [
  {
    title: "Laser Systems",
    id: "laser-systems",
    icon: <Zap className="w-10 h-10 text-primary mb-4" />,
    desc: "Precision laser cutting, welding, and marking solutions for industrial applications.",
    path: "/laser-systems",
  },
  {
    title: "Electric Vehicles",
    id: "electric-vehicles",
    icon: <Zap className="w-10 h-10 text-primary mb-4" />,
    desc: "Advanced assembly and testing lines for EV battery packs and motors.",
    path: "/electric-vehicles",
  },
  {
    title: "High-Speed Automation",
    id: "high-speed-automation",
    icon: <Factory className="w-10 h-10 text-primary mb-4" />,
    desc: "Rapid assembly lines maximizing throughput without compromising quality.",
    path: "/high-speed-automation",
  },
  {
    title: "Defence Automation",
    id: "defence-aerospace",
    icon: <Shield className="w-10 h-10 text-primary mb-4" />,
    desc: "Mission-critical manufacturing solutions meeting stringent defence standards.",
    path: "/defence-aerospace",
  },
  {
    title: "Export Solutions",
    id: "export-solutions",
    icon: <Globe className="w-10 h-10 text-primary mb-4" />,
    desc: "Global standard machinery compliant with international safety norms.",
    path: "/export-solutions",
  },
  {
    title: "Pharma Automation",
    id: "pharma-automation",
    icon: <Activity className="w-10 h-10 text-primary mb-4" />,
    desc: "Hygiene-compliant automation for pharmaceutical packaging and processing.",
    path: "/pharma-automation",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Full Width Video */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-slate-900">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-90"
        >
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay gradient for better transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/100 to-transparent opacity-20 pointer-events-none" />
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section-padding bg-slate-50">
        <div className="container-padding">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Expertise & Industries We Serve
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {expertiseItems.map((item) => (
              <motion.div key={item.id} variants={fadeIn}>
                <Link href={item.path}>
                  <div className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20 h-full flex flex-col cursor-pointer transform hover:-translate-y-1">
                    <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">{item.desc}</p>
                    <div className="flex items-center text-primary font-semibold text-sm uppercase tracking-wide group-hover:underline">
                      Explore Solution <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Engineering Excellence Since Inception
              </h2>
              <div className="h-1 w-20 bg-primary mb-8"></div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Mikro Innotech is a premier provider of automated assembly
                  lines, special purpose machines, and robotic integration
                  systems. We bridge the gap between concept and reality with
                  precision engineering.
                </p>
                <p>
                  Our dedicated team of engineers and technicians work
                  tirelessly to ensure that every machine we build meets global
                  standards of quality, safety, and efficiency.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "ISO 9001:2015 Certified",
                  "24/7 Support Network",
                  "Custom Engineering",
                  "Global Export Compliance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Using Unsplash image for About Section representation */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                {/* industrial automation robot arm factory */}
                <img
                  src="https://pixabay.com/get/g88d147cef8e859045f549bdd85f1b10145e98dcca6336e898b4404bd4296d6e83ccaa6b6f1084f434d00f7a6a32d28cb4aa18671fe43077c5ebce17f405924e0_1280.jpg"
                  alt="Advanced Automation Facility"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl rounded-lg border border-slate-100 hidden md:block max-w-xs">
                <div className="text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-slate-600 font-medium">
                  Projects Delivered Successfully Worldwide
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
