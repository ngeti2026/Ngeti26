import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import CommitteeCard from "@/components/ui/CommitteeCard";
import { committeeMembers } from "@/data/conferenceData";

const Committee = () => {
  return (
    <>
      <Helmet>
        <title>Organizing Committee - NGETI 2026</title>
        <meta name="description" content="Meet the organizing committee of NGETI 2026 including General Chairs, TPC Chairs, Publication Chairs, and Advisory Committee." />
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
                Our Team
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Organizing Committee
              </h1>
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto">
                Meet the dedicated team behind NGETI 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* General Chairs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader title="General Chairs" />
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {committeeMembers.generalChairs.map((member, index) => (
                <motion.div
                  key={index}
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

        {/* Organizing Chair */}


        {/* TPC Chairs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Technical Program Committee Chairs"
              subtitle="Leading the technical review and program development"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {committeeMembers.tpcChairs.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CommitteeCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Chairs */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Publication & Technical Program Chairs */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <SectionHeader title="Publication Chair" centered={false} />
                  {committeeMembers.publicationChairs.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <CommitteeCard member={member} className="h-full" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <SectionHeader title="Technical Program Chair" centered={false} />
                  {committeeMembers.technicalProgramChairs.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <CommitteeCard member={member} className="h-full" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Publicity & Finance Chairs */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <SectionHeader title="Publicity Chair" centered={false} />
                  {committeeMembers.publicityChairs.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <CommitteeCard member={member} className="h-full" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <SectionHeader title="Finance Chair" centered={false} />
                  {committeeMembers.financeChairs.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <CommitteeCard member={member} className="h-full" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Organizing Chair */}
              <div className="mt-16">
                <SectionHeader title="Organizing Chair" />
                <div className="max-w-md mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <CommitteeCard member={committeeMembers.organizingChair} className="h-full" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Committee;
