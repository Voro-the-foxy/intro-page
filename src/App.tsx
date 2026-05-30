import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { WhyMicroLearning } from "./sections/WhyMicroLearning";
import { CTA } from "./sections/CTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <WhyMicroLearning />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
