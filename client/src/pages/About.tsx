import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, Shield, Target, Users, Zap, Globe, Lightbulb, Factory, Activity, Microscope } from "lucide-react";
import partnersImage from "@assets/image_1767179513500.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const statistics = [
  { label: "Years of Experience", value: "17+" },
  { label: "Projects Delivered", value: "500+" },
  { label: "Industries Served", value: "6+" },
  { label: "Growth Y-o-Y", value: "50%" },
];

const highlights = [
  {
    title: "Strategic Engagement",
    desc: "A systematic process for engaging customers from business development to the entire project life cycle.",
    icon: <Users className="w-6 h-6 text-primary" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Precision Design",
    desc: "Utilizing DFMEA, Health & Safety Risk Analysis, and 3D Virtual Machines for ergonomics and aesthetics.",
    icon: <Target className="w-6 h-6 text-primary" />,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Quality Assurance",
    desc: "Experience in understanding and maintaining global standardization with CE and UL certified machines.",
    icon: <Shield className="w-6 h-6 text-primary" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Innovation Hub",
    desc: "Reshaping industrial challenges into productive and unique high-performance automated systems.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    color: "bg-amber-50 text-amber-600"
  },
];

const industrySectors = [
  { name: "Automotive", icon: <Factory className="w-5 h-5" /> },
  { name: "Pharmaceutical", icon: <Microscope className="w-5 h-5" /> },
  { name: "Defence", icon: <Shield className="w-5 h-5" /> },
  { name: "Electronics", icon: <Zap className="w-5 h-5" /> },
  { name: "EV Mobility", icon: <Activity className="w-5 h-5" /> },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management" },
  { name: "ISO 14001:2015", desc: "Environmental Management" },
  { name: "ISO 45001:2018", desc: "Occupational Safety" },
  { name: "ISO/IEC 17025:2017", desc: "Laboratory Excellence" },
  { name: "2006/42/EC", desc: "Machine Directive" },
];

export default function About() {
  return (
    <Layout>
      <div className="bg-white min-h-screen selection:bg-primary/10">
        {/* Floating Header Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-slate-900 border-b border-white/5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="container-padding relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial="initial"
                animate="animate"
                variants={fadeIn}
                className="lg:col-span-7 space-y-8"
              >
                <Badge variant="outline" className="border-primary/50 text-primary uppercase tracking-[0.2em] px-4 py-1.5 bg-primary/5">
                  Our Legacy & Vision
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Precision in <br />
                  <span className="text-primary italic">Every Motion.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                  Established in 2008, Mikro Innotech has been a pioneer in world-class automation, serving mission-critical industries for over 17 years.
                </p>
                
                <div className="flex flex-wrap gap-8 pt-4">
                  {statistics.map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-white/10 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                    alt="Mikro Innotech Engineering"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                      <div className="text-primary font-bold mb-1">Our Mission</div>
                      <div className="text-white text-sm leading-relaxed">Reshaping industrial challenges into unique high-performance automated systems.</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dynamic Capability Grid */}
        <section className="py-32">
          <div className="container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-slate-900">Proven Expertise <br />Across Horizons</h2>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Over 17 years, we have mastered a wide range of laser applications and assembly solutions. From laser cutting to motor assembly, our horizontal breadth is our greatest strength.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {industrySectors.map((sector, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
                        {sector.icon}
                      </div>
                      <span className="font-bold text-slate-800 tracking-wide">{sector.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12">
                {highlights.map((item, i) => (
                  <div key={i} className={`p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-all hover:-translate-y-2 group ${i % 2 === 1 ? 'sm:mt-8' : ''}`}>
                    <div className="mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners Horizontal Scroll Placeholder */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container-padding">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">Global Reach</Badge>
                <h2 className="text-4xl font-bold text-slate-900">The Power of Partnership</h2>
                <p className="text-slate-500 leading-relaxed">We collaborate with global leaders to deliver superior automation solutions that set new industry benchmarks.</p>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
            >
              <img 
                src={partnersImage} 
                alt="Mikro Innotech Trusted Partners" 
                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </section>

        {/* Certifications - Modern List */}
        <section className="py-32">
          <div className="container-padding">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 space-y-6">
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">Commitment to <br /><span className="text-primary">Global Excellence</span></h2>
                <p className="text-slate-500 leading-relaxed">Our certifications are a testament to our unwavering dedication to quality, safety, and operational excellence.</p>
                <div className="pt-8">
                  <div className="flex items-center gap-4 text-slate-900 font-bold text-lg border-l-4 border-primary pl-6">
                    ISO 9001:2015 Certified
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="group flex items-center justify-between p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-slate-50/50 transition-all">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{cert.name}</div>
                      <div className="text-slate-500 text-sm">{cert.desc}</div>
                    </div>
                    <Award className="w-8 h-8 text-slate-200 group-hover:text-primary/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialized CTA */}
        <section className="py-12 pb-32">
          <div className="container-padding">
            <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full" />
              <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Wide Your Horizon with Our Expertise?</h2>
                <p className="text-xl text-white/80">Connect with our engineering team to explore custom solutions for your industry.</p>
                <div className="pt-4">
                  <a href="/contact">
                    <button className="bg-white text-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
                      Begin Consultation
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
