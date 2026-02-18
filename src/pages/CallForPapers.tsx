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

              <div className="flex justify-center">
                <a
                  href="#submission"
                  className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FileText className="w-5 h-5" />
                  Submit Paper
                </a>
              </div>

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
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                  The <strong>International Conference on Next Generation Engineering and Technology
                    Innovations (NGETI 2026)</strong> invites researchers, academicians, industry professionals,
                  and students worldwide to submit their original and unpublished research papers
                  for consideration.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  Under the theme <em>"{conferenceInfo.theme}"</em>, we welcome submissions that
                  address innovative solutions, theoretical advancements, and practical applications
                  across the following six tracks.
                </p>


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

        {/* Submit Section */}
        <section id="submission" className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to Submit?</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Submit your paper via Microsoft CMT. Please ensure you have read the submission guidelines below before proceeding.
              </p>
              <a
                href="https://cmt3.research.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FileText className="w-5 h-5" />
                Submit via Microsoft CMT*
              </a>
              <p className="mt-6 text-sm text-primary-foreground/70 italic max-w-3xl mx-auto">
                * The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </motion.div>
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


              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CallForPapers;
