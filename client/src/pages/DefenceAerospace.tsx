import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Award, CheckCircle2, PlayCircle } from "lucide-react";
import defenceAsset from "@assets/image_1767169841746.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const capabilities = [
  "Precision Assembly Jigs",
  "Component Testing Rigs",
  "Special Purpose Machines (SPM)",
  "Composite Material Processing",
  "Safety-Critical Bonding",
  "Ordnance Handling Systems"
];

export default function DefenceAerospace() {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container-padding relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-3xl"
            >
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">DEFENCE AUTOMATION</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Mission-critical manufacturing solutions meeting stringent global defence standards. We deliver precision, reliability, and security for high-stakes environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-2">
                  <Shield className="w-5 h-5" /> Precision Engineering
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Advanced Manufacturing Solutions</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our expertise in Defence and Aerospace automation encompasses the design and integration of special-purpose machinery that adheres to the highest levels of accuracy and security. We bridge the gap between complex engineering concepts and reliable manufacturing reality.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                  <img 
                    src={defenceAsset} 
                    alt="Defence Automation Technology" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
              </motion.div>
            </div>

            {/* Video Showcase Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-12"
            >
              <div className="text-center max-w-3xl mx-auto">                
                
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Demonstration</h2>              
                </div>

              <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video relative group">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/U5yYMFiDLIQ"
                  title="Defence Automation Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications & Trust */}
        <section className="py-20 bg-slate-100">
          <div className="container-padding">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-sm hover-elevate transition-all">
                <CardContent className="pt-6">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">ISO Certified</h3>
                  <p className="text-slate-600 text-sm">Adhering to ISO 9001:2015 standards for quality management systems.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm hover-elevate transition-all">
                <CardContent className="pt-6">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">High Security</h3>
                  <p className="text-slate-600 text-sm">Strict confidentiality and data security protocols for sensitive projects.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm hover-elevate transition-all">
                <CardContent className="pt-6">
                  <Target className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Precision Scale</h3>
                  <p className="text-slate-600 text-sm">Micron-level accuracy for complex defence components.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
