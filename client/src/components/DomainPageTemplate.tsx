import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { ContactForm } from "@/components/ContactForm";

interface DomainPageProps {
  title: string;
  description: string;
  heroImage: string;
  features: string[];
  children?: React.ReactNode;
}

export function DomainPageTemplate({ title, description, heroImage, features, children }: DomainPageProps) {
  return (
    <Layout>
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>
        
        <div className="container-padding relative z-20">
          <Link href="/">
            <Button variant="ghost" className="text-slate-300 hover:text-white pl-0 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="container-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Features List */}
            <div className="bg-white rounded-lg p-8 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Key Capabilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Placeholder */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">System Overview</h3>
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                <div className="text-center p-6">
                  <p className="text-slate-500 font-medium">Demonstration Video Placeholder</p>
                  <p className="text-sm text-slate-400 mt-2">Video content for {title} will be loaded here</p>
                </div>
              </div>
            </div>

            {/* Additional Text Content */}
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Detailed Specifications</h3>
              <p>
                Our {title} solutions are engineered to deliver maximum efficiency and reliability. 
                Built with premium components and cutting-edge technology, these systems ensure high OEE (Overall Equipment Effectiveness) 
                and low maintenance requirements.
              </p>
              <p>
                We provide complete turnkey solutions including design, manufacturing, installation, and after-sales support.
                Our team works closely with your project managers to ensure seamless integration into your existing production lines.
              </p>
              {children}
            </div>

            {/* Image Gallery Placeholder */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="aspect-[4/3] bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                    <p className="text-slate-400 text-sm">System Image {i}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/10 mb-8">
                <h4 className="font-bold text-lg mb-2 text-primary">Need a Custom Solution?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Every production line is unique. Talk to our engineers about your specific requirements.
                </p>
                <Button className="w-full bg-primary" onClick={() => document.getElementById('contact-form-sidebar')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact Sales
                </Button>
              </div>

              <div id="contact-form-sidebar">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
