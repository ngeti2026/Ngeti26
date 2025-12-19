import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Building, Award, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { conferenceInfo, institutionInfo } from "@/data/conferenceData";

const Venue = () => {
  return (
    <>
      <Helmet>
        <title>Venue - NGETI 2026</title>
        <meta name="description" content="NGETI 2026 venue: Viswajyothi College of Engineering and Technology, Vazhakulam, Ernakulam, Kerala." />
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
                Conference Location
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Venue</h1>
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto">
                {conferenceInfo.venue}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Venue Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <SectionHeader title="Conference Venue" centered={false} />
                <div className="bg-card border border-border rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{conferenceInfo.venue}</h3>
                      <p className="text-muted-foreground">Vazhakulam, Muvattupuzha<br />Ernakulam District<br />Kerala, India - 686670</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <h4 className="font-semibold text-foreground">Conference Facilities</h4>
                  <ul className="space-y-2">
                    {["Auditorium for plenary sessions", "Mini auditorium for keynotes", "Multiple seminar halls for parallel tracks", "Modern AV equipment"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="h-[400px] rounded-xl overflow-hidden border border-border">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.793344689266!2d76.63062599999999!3d9.951145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd2f387bbce7%3A0x33c9780276b797b6!2sViswajyothi%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1766062682768!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Venue Map" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Institution */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader title="About the Institution" subtitle="Organizing Institution" />
            <div className="max-w-4xl mx-auto">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-muted-foreground leading-relaxed mb-8 text-justify">
                {institutionInfo.description}
              </motion.p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Building className="w-5 h-5" />, label: "Established", value: institutionInfo.established },
                  { icon: <Users className="w-5 h-5" />, label: "Students", value: `${institutionInfo.studentStrength}+` },
                  { icon: <Award className="w-5 h-5" />, label: "NAAC Grade", value: "A" },
                  { icon: <Users className="w-5 h-5" />, label: "Faculty", value: `${institutionInfo.facultyStrength}+` },
                ].map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-5 text-center">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">{stat.icon}</div>
                    <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Venue;
