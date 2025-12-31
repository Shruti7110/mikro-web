import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Shield, Target, Users, Zap, Globe, Lightbulb } from "lucide-react";
import partnersImage from "@assets/image_1767179513500.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const whyChooseUs = [
  {
    title: "Systematic Engagement",
    desc: "A systematic process for engaging customers from business development to the entire project life cycle.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Robust Design Processes",
    desc: "Utilizing DFMEA, Health & Safety Risk Analysis, and 3D Virtual Machines for ergonomics and aesthetics.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Project Management",
    desc: "Dedicated project management systems ensuring on-time delivery of machines and systems.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Customer Support",
    desc: "Dedicated service team for after-sales support, AMC, spare management, and production ramp-up.",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    title: "Global Standards",
    desc: "Experience in understanding and maintaining global standardization across various assembly lines.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
  {
    title: "Innovation Focus",
    desc: "Reshaping industrial challenges into productive and unique high-performance automated systems.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
  },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System" },
  { name: "ISO 14001:2015", desc: "Environmental Management System" },
  { name: "ISO 45001:2018", desc: "Occupational Health & Safety" },
  { name: "ISO/IEC 17025:2017", desc: "Testing & Calibration Laboratories" },
  { name: "Machine Directive 2006/42/EC", desc: "European Safety Standards" },
];

export default function About() {
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
              <Badge className="mb-4 bg-primary text-white border-none uppercase tracking-widest px-4 py-1">
                Engineering Excellence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-primary">Mikro Innotech</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Established in 2008 to deliver world-class automation solutions customized to Indian and International markets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900">Innovation & Growth</h2>
                <div className="h-1 w-20 bg-primary"></div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                  <p>
                    Mikro has experienced business growth exceeding 50 percent year-over-year through innovation and a focus on customer success. We enjoy the challenge of reshaping industrial challenges and converting them into more productive systems.
                  </p>
                  <p>
                    We leverage our in-depth knowledge and proven design & implementation experiences to meet complex automation system needs in healthcare, automobiles, electronics, and consumer products.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern Manufacturing" 
                  className="rounded-xl shadow-2xl border border-slate-200"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-50">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Mikro</h2>
              <div className="h-1 w-20 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, idx) => (
                <Card key={idx} className="bg-white border-none shadow-sm hover-elevate transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg w-fit">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners */}
        <section className="py-20 bg-white">
          <div className="container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Trusted Partners</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We collaborate with global leaders across various industries to deliver superior automation solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <img 
                src={partnersImage} 
                alt="Our Trusted Partners" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Technical Excellence & Certifications</h2>
              <div className="h-1 w-20 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                    <p className="text-slate-400 text-sm">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
