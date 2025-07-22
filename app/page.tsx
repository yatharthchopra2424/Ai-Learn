import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import IntroSection from "@/components/IntroSection"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <Testimonials />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </div>
  )
}
