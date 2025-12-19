import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Target, Users, BookOpen, Award, Globe, Lightbulb } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import { conferenceInfo, importantDates, submissionGuidelines, institutionInfo } from "@/data/conferenceData";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About NGETI 2026 - Conference Theme & Scope</title>
        <meta name="description" content="Learn about NGETI 2026 conference theme, scope, and objectives. Next-generation technologies for a smarter, safer, and sustainable world." />
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
                About the Conference
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Discover the vision, theme, and scope of NGETI 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* About NGETI */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  About NGETI <span className="font-sans">2026</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                  The <strong>International Conference on Next Generation Engineering and Technology
                    Innovations (NGETI 2026)</strong> is a premier event organized by the IEEE Kerala Section
                  and IEEE Kochi Subsection in collaboration with Viswajyothi College of Engineering and Technology.
                  It brings together global experts, researchers, and practitioners to explore the latest
                  advancements and emerging trends in interconnected engineering domains.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  NGETI 2026 aims to address challenges and opportunities presented by the integration
                  of technologies across sectors such as industry, healthcare, transportation, and energy.
                  The conference focuses on showcasing innovations, promoting interdisciplinary collaboration,
                  addressing global challenges like sustainable energy and smart infrastructure, and
                  enhancing education and training.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Viswajyothi */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  About Viswajyothi
                </h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed max-w-none text-justify">
                  {institutionInfo.description}
                  <div className="mt-4 grid sm:grid-cols-2 gap-4 not-prose">
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-primary mb-1">Accreditation</h4>
                      <p className="text-sm">NAAC {institutionInfo.accreditations.naac}</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-primary mb-1">Ranking</h4>
                      <p className="text-sm">{institutionInfo.ranking}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About IEEE Kerala Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  About IEEE Kerala Section
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                  The IEEE Kerala Section is a prominent and active section of the Institute of Electrical and Electronics Engineers (IEEE),
                  dedicated to advancing technology for the benefit of humanity within the Kerala region of India. It is recognized as one
                  of the most vibrant IEEE sections globally. Formed as a Subsection in 1975 and approved as a full Section in 1983, it
                  now boasts over 15,000 members. The section organizes high-quality technical events, comprises 2 Sub-Sections
                  (Malabar and Kochi), and hosts numerous Student Branches and Society Chapters.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The section is known for its dynamic activities and significant contributions to the IEEE community, organizing
                  international conferences, workshops, and initiatives that have both local and global impact. Its vision focuses on
                  advancing professionalism, member engagement, and societal impact through technical excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About IEEE Kochi Subsection */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  About IEEE Kochi Subsection
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                  The IEEE Kochi Subsection is the second subsection under the IEEE Kerala Section, inaugurated in April 2012. It covers
                  IEEE members from five districts: Ernakulam, Kottayam, Idukki, Alappuzha, and Thrissur. Kochi, being the commercial
                  and technical capital of Kerala, provides a strong base for technical activities.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  The subsection aims to leverage this strength towards 'Advancing Technology for Humanity' through various events,
                  competitions, and technical sessions. It actively engages engineering professionals, researchers, and students
                  through its diverse range of activities and executive committee initiatives.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Conference Scope"
              subtitle="NGETI 2026 covers a broad spectrum of engineering and technology domains"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <Lightbulb className="w-6 h-6" />, title: "Artificial Intelligence", desc: "AI, machine learning, quantum computing, and autonomous systems" },
                { icon: <Globe className="w-6 h-6" />, title: "Smart Infrastructure", desc: "IoT, smart cities, digital twins, and cyber-physical systems" },
                { icon: <Target className="w-6 h-6" />, title: "Communication Systems", desc: "Next-gen wireless, VLSI, embedded systems, and network technologies" },
                { icon: <Award className="w-6 h-6" />, title: "Power & Automation", desc: "Renewable energy, smart grids, EVs, and industrial automation" },
                { icon: <Users className="w-6 h-6" />, title: "Advanced Materials", desc: "Nanotechnology, smart manufacturing, and material sciences" },
                { icon: <BookOpen className="w-6 h-6" />, title: "Sustainable Systems", desc: "Green architecture, environmental management, and urban planning" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <InfoCard icon={item.icon} title={item.title}>
                    <p className="text-sm">{item.desc}</p>
                  </InfoCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




      </Layout>
    </>
  );
};

export default About;
