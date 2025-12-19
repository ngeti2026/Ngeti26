import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { authorGuidelines, submissionGuidelines, conferenceInfo } from "@/data/conferenceData";

const AuthorGuidelines = () => {
  return (
    <>
      <Helmet>
        <title>Author Guidelines - NGETI 2026</title>
        <meta name="description" content="Paper submission guidelines for NGETI 2026. IEEE format requirements, page limits, review process, and submission instructions." />
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
                Conference Guidelines
              </span>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                The <strong>International Conference on Next Generation Engineering and Technology
                  Innovations (NGETI 2026)</strong> invites researchers, academicians, industry professionals,
                and students worldwide to submit their original and unpublished research papers
                for consideration.
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Author Guidelines
              </h1>
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto">
                Everything you need to know about preparing and submitting your paper
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { label: "Paper Format", value: "IEEE 2-Column" },
                { label: "Max Pages", value: `${submissionGuidelines.maxPages} Pages` },
                { label: "Review Type", value: "Blind Peer Review" },
                { label: "Acceptance Rate", value: submissionGuidelines.targetAcceptanceRate },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <p className="text-2xl font-bold text-accent mb-1">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guidelines Sections */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Submission Guidelines"
              subtitle="Please follow these guidelines carefully when preparing your paper"
            />

            <div className="max-w-4xl mx-auto space-y-8">
              {authorGuidelines.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-accent/10 border border-accent/20 rounded-xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Important Notes</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• All accepted papers must be presented at the conference for inclusion in IEEE Xplore</li>
                      <li>• At least one author must register before the camera-ready submission deadline</li>
                      <li>• Papers not presented at the conference will not be published</li>
                      <li>• Plagiarism above threshold will result in immediate rejection</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Ready to Submit?</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  Under the theme <em>"{conferenceInfo.theme}"</em>, we welcome submissions that
                  address innovative solutions, theoretical advancements, and practical applications
                  across the following six tracks.
                </p>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Submit your paper through the {submissionGuidelines.submissionTool}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Your Paper
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout >
    </>
  );
};

export default AuthorGuidelines;
