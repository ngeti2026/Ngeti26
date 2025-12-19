import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/ui/Timeline";
import { importantDates } from "@/data/conferenceData";

const ImportantDates = () => {
  return (
    <>
      <Helmet>
        <title>Important Dates - NGETI 2026</title>
        <meta name="description" content="Key deadlines for NGETI 2026: Paper submission deadline July 31, 2026. Conference dates December 4-5, 2026." />
      </Helmet>
      <Layout>
        <section className="page-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-copper-300 text-sm font-medium rounded-full mb-4">Key Deadlines</span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Important Dates</h1>
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto">Mark your calendar with these key deadlines</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeader title="Conference Timeline" subtitle="All dates are tentative and subject to change" />
              <Timeline items={importantDates} />
            </div>
          </div>
        </section>


      </Layout>
    </>
  );
};

export default ImportantDates;
