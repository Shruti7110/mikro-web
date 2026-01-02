import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Target, 
  Shield, 
  Scissors, 
  Droplets, 
  Flame, 
  Sparkles,
  ArrowRight,
  Play
} from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const applications = [
  {
    title: "Laser Cutting",
    desc: "High-speed precision cutting for diverse materials from sheet metal to complex alloys. Our systems ensure minimal heat-affected zones and superior edge quality.",
    icon: <Scissors className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45f7?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Laser Welding",
    desc: "Deep penetration and conduction welding for automotive and aerospace components. Offers high strength, minimal distortion, and high processing speeds.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-indigo-50 text-indigo-600",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Laser Marking",
    desc: "Permanent, high-contrast identification for traceability and branding. Suitable for a wide range of materials including metals, plastics, and ceramics.",
    icon: <Target className="w-6 h-6" />,
    color: "bg-cyan-50 text-cyan-600",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Laser Drilling",
    desc: "Micro-hole drilling with extreme accuracy for pharmaceutical and filtration needs. Capable of producing holes with high aspect ratios and complex geometries.",
    icon: <Droplets className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Laser Cladding",
    desc: "Additive process to improve surface properties and repair high-value components. Enhances wear resistance, corrosion protection, and thermal stability.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "bg-amber-50 text-amber-600",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Laser Hardening",
    desc: "Localized heat treatment for superior wear resistance without distortion. Precisely controls the hardened depth and surface area.",
    icon: <Flame className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Laser Cleaning",
    desc: "Eco-friendly removal of rust, paint, and contaminants without chemicals. A non-contact process that preserves the integrity of the base material.",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-slate-50 text-slate-600",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600"
  }
];

export default function LaserSystems() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="container-padding relative z-10 text-center max-w-4xl mx-auto">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="space-y-6"
            >
              <Badge variant="outline" className="border-primary/50 text-primary uppercase tracking-[0.2em] px-4 py-1.5 bg-primary/5">
                Advanced Laser Technology
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Precision <span className="text-primary italic">Laser Solutions</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Mikro Innotech provides a comprehensive portfolio of laser-based applications, integrating world-class laser sources with custom automation to solve complex manufacturing challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Application Portfolio */}
        <section className="py-24">
          <div className="container-padding">
            <div className="space-y-32">
              {applications.map((app, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 space-y-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${app.color}`}>
                      {app.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{app.title}</h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                      {app.desc}
                    </p>
                    <div className="pt-4">
                      <Link href="/contact">
                        <Button variant="outline" className="group">
                          Inquire about {app.title}
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
                      <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Glimpse - Video Section */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="container-padding">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <Badge className="bg-primary hover:bg-primary/90">Product Showcase</Badge>
                <h2 className="text-4xl font-bold">Innovation in Action</h2>
                <p className="text-slate-400">Watch our high-precision laser systems delivering world-class results on the manufacturing floor.</p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/2uoQCAk_N68"
                  title="Mikro Innotech Laser System Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container-padding text-center">
            <div className="max-w-3xl mx-auto space-y-8 bg-slate-50 p-12 md:p-20 rounded-[3rem] border border-slate-100">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">Ready to Advance Your Manufacturing?</h2>
              <p className="text-lg text-slate-500">Connect with our engineering experts to discuss your custom laser system requirements.</p>
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="px-12 py-7 rounded-full text-lg font-bold uppercase tracking-widest shadow-xl shadow-primary/20">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
