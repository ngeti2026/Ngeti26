import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NGETI 2026 - International Conference on Next Generation Engineering and Technology Innovations</title>
        <meta name="description" content="Join NGETI 2026 at Viswajyothi College, Kerala. IEEE co-sponsored conference on AI, Computing, Communication, Power, and Sustainable Infrastructure. December 4-5, 2026." />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutSection />
      </Layout>
    </>
  );
};

export default Index;
