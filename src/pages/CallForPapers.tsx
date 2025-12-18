import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import TrackAccordion from "@/components/ui/TrackAccordion";
import { conferenceInfo, submissionGuidelines } from "@/data/conferenceData";

const CallForPapers = () => {
  return (
    <>
      <Helmet>
        <title>Call for Papers - NGETI 2026 | Submit Your Research</title>
        <meta name="description" content="Submit your research to NGETI 2026. Explore 6 tracks covering AI, Computing, Communication, Power, Materials, and Sustainable Infrastructure." />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Call for Papers
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                We invite researchers to submit original research papers in the following tracks
              </p>
              <button className="btn-hero-primary">
                <Download className="w-5 h-5" />
                Download CFP PDF
              </button>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The <strong>International Conference on Next Generation Engineering and Technology 
                  Innovations (NGETI 2026)</strong> invites researchers, academicians, industry professionals, 
                  and students worldwide to submit their original and unpublished research papers 
                  for consideration.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Under the theme <em>"{conferenceInfo.theme}"</em>, we welcome submissions that 
                  address innovative solutions, theoretical advancements, and practical applications 
                  across the following six tracks.
                </p>

                {/* Quick Info Cards */}
                <div className="grid sm:grid-cols-3 gap-4 mb-12">
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-accent">{submissionGuidelines.maxPages}</p>
                    <p className="text-sm text-muted-foreground">Max Pages</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-accent">{submissionGuidelines.targetAcceptanceRate}</p>
                    <p className="text-sm text-muted-foreground">Acceptance Rate</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-accent">IEEE</p>
                    <p className="text-sm text-muted-foreground">Xplore Indexed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tracks */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Conference Tracks"
              subtitle="Click on each track to view the detailed list of topics"
            />
            <div className="max-w-4xl mx-auto">
              <TrackAccordion />
            </div>
          </div>
        </section>

        {/* Submission Guidelines Preview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader 
                title="Submission Guidelines"
                subtitle="Key requirements for paper submission"
              />
              
              <div className="bg-card border border-border rounded-xl p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Papers must be written in English and formatted in <strong>{submissionGuidelines.paperFormat}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Maximum paper length: <strong>{submissionGuidelines.maxPages} pages</strong> (up to {submissionGuidelines.maxPagesAllowed} pages with extra fee)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      All papers undergo <strong>{submissionGuidelines.reviewType}</strong> by {submissionGuidelines.reviewers}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Plagiarism check using <strong>{submissionGuidelines.plagiarismTool}</strong>
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4">
                  <Link 
                    to="/paper-submission"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    View Full Guidelines
                  </Link>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                    <Download className="w-4 h-4" />
                    Download CFP PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CallForPapers;
