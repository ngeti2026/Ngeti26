import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import CommitteeCard from "@/components/ui/CommitteeCard";
import { advisoryCommittee } from "@/data/conferenceData";

const AdvisoryCommittee = () => {
  return (
    <>
      <Helmet>
        <title>Advisory Committee - NGETI 2026</title>
        <meta name="description" content="Meet the advisory committee of NGETI 2026, comprising distinguished experts guiding the conference." />
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
                Expert Guidance
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Advisory Committee
              </h1>
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto">
                Distinguished experts providing strategic guidance for NGETI 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Advisory Members */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Advisory Committee Members"
              subtitle="Renowned academics and industry leaders shaping the vision of NGETI 2026"
            />
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {advisoryCommittee.map((member, index) => (
                <motion.div
                  key={`advisory-${index}`}
                  className="w-72 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CommitteeCard member={member} className="h-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AdvisoryCommittee;
//comment
