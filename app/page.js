import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import ValueProp from "../components/ValueProp/ValueProp";
import Comparison from "../components/Comparison/Comparison";
import Testimonials from "../components/Testimonials/Testimonials";
import Booking from "../components/Booking/Booking";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <ValueProp />
      <Comparison />
      <Testimonials />
      <Booking />
      <FAQ />
      <Footer />
    </main>
  );
}
