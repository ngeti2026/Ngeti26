import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, User, MapPin, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { conferenceInfo, committeeMembers } from "@/data/conferenceData";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - NGETI 2026</title>
        <meta name="description" content="Contact the NGETI 2026 organizing committee. Get in touch for inquiries about paper submission, registration, and conference details." />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="page-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-copper-300 text-sm font-medium rounded-full mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto">
                Have questions? We're here to help
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Cards */}
                <div className="space-y-6">
                  <SectionHeader title="Contact Information" centered={false} />

                  {/* Organizing Chair */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">Organizing Chair</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <User className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{committeeMembers.organizingChair.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-accent" />
                        <a
                          href={`mailto:${committeeMembers.organizingChair.email}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {committeeMembers.organizingChair.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-accent" />
                        <a
                          href={`tel:+91${committeeMembers.organizingChair.phone}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          +91 {committeeMembers.organizingChair.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* General Chair */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">General Chair</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <User className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">{committeeMembers.generalChairs[0].name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-accent" />
                        <a
                          href={`mailto:${committeeMembers.generalChairs[0].email}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {committeeMembers.generalChairs[0].email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-accent" />
                        <a
                          href={`tel:+91${committeeMembers.generalChairs[0].phone}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          +91 {committeeMembers.generalChairs[0].phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Conference Address */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">Conference Address</h3>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p className="font-medium text-foreground">{conferenceInfo.venue}</p>
                        <p>Vazhakulam, Muvattupuzha</p>
                        <p>Ernakulam District, Kerala</p>
                        <p>India - 686670</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <SectionHeader title="Send us a Message" centered={false} />
                  <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <form className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                          placeholder="Inquiry subject"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow resize-none"
                          placeholder="Your message..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-copper-600 transition-colors"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Find Us"
              subtitle="Conference venue location"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="h-[400px] rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3513893454897!2d76.56775517489387!3d9.999621590126377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d1e1de20ed57%3A0x9b5c4dcf3ce9d5f9!2sViswajyothi%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1702886400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Conference Venue Map"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-4">General Inquiries</h2>
              <p className="text-primary-foreground/75 mb-6">
                For quick questions about the conference
              </p>
              <a
                href="mailto:ngeti2026@gmail.com"
                className="btn-hero-primary inline-flex"
              >
                <Mail className="w-5 h-5" />
                Email Us Directly
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
