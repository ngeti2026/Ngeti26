import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, ExternalLink, Info, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { indianRegistrationFees, foreignRegistrationFees, submissionGuidelines } from "@/data/conferenceData";

const RegistrationFees = () => {
  return (
    <>
      <Helmet>
        <title>Registration Fees - NGETI 2026</title>
        <meta name="description" content="Register for NGETI 2026. View registration fees for Indian and foreign authors, students, faculty, and industry delegates." />
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
                Conference Registration
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Registration Fees
              </h1>
              <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto">
                Secure your spot at NGETI 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Indian Authors */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Indian Authors"
                subtitle="Registration fees for authors from India (in INR)"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-md overflow-x-auto"
              >
                <table className="w-full min-w-[600px]">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-center font-semibold">IEEE Members</th>
                      <th className="px-6 py-4 text-center font-semibold">Non-IEEE Members</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {indianRegistrationFees.map((fee, index) => (
                      <tr key={index} className="hover:bg-secondary/50 transition-colors">
                        <td className="px-6 py-4 text-foreground font-medium">{fee.category}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center gap-1 text-accent font-bold">
                            {fee.ieee}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-muted-foreground font-semibold">{fee.nonIeee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Foreign Authors */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader
                title="Foreign Authors"
                subtitle="Registration fees for authors from outside India (in USD)"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-md overflow-x-auto"
              >
                <table className="w-full min-w-[600px]">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-center font-semibold">IEEE Members</th>
                      <th className="px-6 py-4 text-center font-semibold">Non-IEEE Members</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {foreignRegistrationFees.map((fee, index) => (
                      <tr key={index} className="hover:bg-secondary/50 transition-colors">
                        <td className="px-6 py-4 text-foreground font-medium">{fee.category}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center gap-1 text-accent font-bold">
                            {fee.ieee}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-muted-foreground font-semibold">{fee.nonIeee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Notes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader title="Registration Guidelines" />

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold">Extra Page Charges</h3>
                  </div>
                  <p className="text-muted-foreground text-justify">
                    Maximum page limit: <strong>{submissionGuidelines.maxPages} pages</strong> in IEEE format.
                    Papers exceeding {submissionGuidelines.maxPages} pages (max {submissionGuidelines.maxPagesAllowed} pages)
                    should pay <strong>{submissionGuidelines.extraPageFee.indian}</strong> (Indian) /
                    <strong> {submissionGuidelines.extraPageFee.foreign}</strong> (Foreign) per extra page.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Check className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold">Registration Includes</h3>
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      Conference kit and proceedings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      Lunch and refreshments
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                      Certificate of participation
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card border border-border rounded-xl p-6 md:col-span-2"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold">Registration Requirements</h3>
                  </div>
                  <ul className="text-muted-foreground space-y-4">
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">At least one author must register per accepted paper</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">Registered author must present the paper at the conference</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">IEEE membership must be valid at the time of registration</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">Registration fee is non-refundable</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">Each author registration is valid for one paper.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">If more than one author of an accepted paper wishes to attend the conference, each author must register separately by paying the applicable registration fee.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">Faculty members and students registering under the respective faculty/student categories must bring a valid faculty or student ID card to the conference.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">Please retain a copy of the transaction ID for future reference and to track your payment and registration</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">NGETI 2026, the organizing institute (VJCET), its Organizing Committee, the IEEE India Council, and the IEEE Kerala Section shall not be held responsible for any loss, financial or otherwise, arising from improper online transactions.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Register Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10 text-center"
              >
                <a
                  href="https://forms.gle/3yeYSSKTHnhdbNSz7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-accent to-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  Register
                </a>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  <Info className="w-4 h-4 inline-block mr-1 align-text-bottom" />
                  Please go through the guidelines given on registration page before registration.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


      </Layout>
    </>
  );
};

export default RegistrationFees;
