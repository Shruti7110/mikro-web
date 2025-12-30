import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const mutation = useCreateContactMessage();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-slate-900 text-white py-20">
          <div className="container-padding text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Discuss Your Next Project</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We request you to fill in the form, stating your enquiry in specific so that our engineering team can revert to you...
            </p>
          </div>
        </div>

        <div className="container-padding py-16 -mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="text-primary w-5 h-5" /> Our Locations
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Factory & Office (Pune):</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Mikro Innotech India Pvt. Ltd.,<br />
                      225, Sasewadi, Taluka Bhor, Off Pune Bangalore Expressway,<br />
                      Pune 412 205, Maharashtra State, India.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Bengaluru:</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      #7/8, 5th Main, 3rd Phase,<br />
                      Peenya Industrial Area,<br />
                      Bangalore, India – 560058
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Mail className="text-primary w-5 h-5" /> Email
                </h3>
                <div className="space-y-2">
                  <a href="mailto:mikroinnotech@gmail.com" className="block text-primary hover:underline">mikroinnotech@gmail.com</a>
                  <a href="mailto:sales@mikroindia.com" className="block text-primary hover:underline">sales@mikroindia.com</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Phone className="text-primary w-5 h-5" /> Phone
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Contact No:</p>
                    <p className="text-primary">+91 8308802310</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Landline:</p>
                    <p className="text-primary">+91-20-20240556</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Mobile:</p>
                    <p className="text-primary">+91 8956019217</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-100">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter subject" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type your message here...</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your requirements..." 
                              className="min-h-[150px] resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full md:w-auto px-12 py-6 text-lg h-auto"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-500">Interactive Map View</p>
                  <Button variant="outline" className="mt-4" onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=225,%20Sasewadi%20Tal-%20Bhor,%20Pune%20Banglore%20Expressway,%20Sasewadi,%20Maharashtra%20412205,%20India', '_blank')}>
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
