import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Target, 
  Shield, 
  Scissors, 
  Droplets, 
  Flame, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import laserProcessImg from "@assets/image_1767375992103.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const applications = [
  {
    title: "Laser Cutting",
    desc: "High-speed precision cutting for diverse materials from sheet metal to complex alloys.",
    icon: <Scissors className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Laser Welding",
    desc: "Deep penetration and conduction welding for automotive and aerospace components.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Laser Marking",
    desc: "Permanent, high-contrast identification for traceability and branding.",
    icon: <Target className="w-6 h-6" />,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Laser Drilling",
    desc: "Micro-hole drilling with extreme accuracy for pharmaceutical and filtration needs.",
    icon: <Droplets className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Laser Cladding",
    desc: "Additive process to improve surface properties and repair high-value components.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Laser Hardening",
    desc: "Localized heat treatment for superior wear resistance without distortion.",
    icon: <Flame className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Laser Cleaning",
    desc: "Eco-friendly removal of rust, paint, and contaminants without chemicals.",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-slate-50 text-slate-600"
  }
];

const processes = [
  "Metal Welding",
  "Cladding",
  "Brazing",
  "Hardening",
  "Plastic Welding"
];

export default function LaserSystems() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="container-padding relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-3xl space-y-6"
            >              
              <Badge className="mb-4 bg-green-600 text-white border-none uppercase tracking-widest px-4 py-1">
                Advanced Laser Technology
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                 <span className="text-primary italic">Laser Solutions</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Mikro Innotech provides a comprehensive portfolio of laser-based applications, integrating world-class laser sources with custom automation to solve complex manufacturing challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24">
          <div className="container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-slate-900">Comprehensive Application Portfolio</h2>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Our expertise spans across all major industrial laser processes, enabling us to provide turnkey systems for any material or precision requirement.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {applications.map((app, i) => (
                    <Card key={i} className="border-none shadow-sm bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
                      <CardContent className="p-6 space-y-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.color}`}>
                          {app.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{app.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{app.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-8 sticky top-32">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100"
                >
                  <img 
                    src={laserProcessImg} 
                    alt="Mikro Laser Processes" 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Target className="text-primary" /> Specialized Processes
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {processes.map((process, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{process}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Features Checklist */}
        <section className="py-24 bg-slate-50">
          <div className="container-padding text-center space-y-16">
            <h2 className="text-4xl font-bold text-slate-900">Why Choose Mikro Laser Systems?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Custom Integration", desc: "Tailored automation cells designed for your specific production workflow." },
                { title: "Global Standards", desc: "CE and UL certified systems meeting international safety and quality benchmarks." },
                { title: "High Throughput", desc: "Optimized cycle times with robotic integration and high-speed processing." }
              ].map((feature, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-slate-100">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <ArrowRight className="text-primary w-5 h-5" /> {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
