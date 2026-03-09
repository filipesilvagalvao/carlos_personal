import About from "./components/about/About";
import FAQ from "./components/faq/FAQ";
import Feedback_list from "./components/feedback__list/Feedback_list";
import Hero from "./components/hero/Hero";
import Prices from "./components/prices/Prices";
import Results from "./components/results/Results";
import Services from "./components/services/Services";
import Zap from "./components/zap/Zap";

export default function Home() {
  return (
    <main>
      <Hero/>  
      <Services/>
      <Prices/>
      <Feedback_list/>
      <About/>
      <Results/>
      <FAQ/>
      <Zap/>
    </main>
  );
}
