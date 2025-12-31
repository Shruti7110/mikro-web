import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const newsItems = [
  {
    id: 1,
    title: "Mikro Presence in IMTEX Bangalore 2026",
    date: "January 2026",
    category: "Events",
    excerpt: "Mikro Innotech is proud to announce its participation in IMTEX 2026, showcasing the latest innovations in laser systems and industrial automation.",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
  },
];

export default function News() {
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
                Latest Updates
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                News & <span className="text-primary">Events</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Stay updated with Mikro Innotech's latest innovations, exhibition presence, and corporate milestones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20">
          <div className="container-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <Card className="bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 backdrop-blur-sm text-white border-none">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
