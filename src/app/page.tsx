import About from "@/components/About"
import Contact from "@/components/Contact"
import Feedbacks from "@/components/Feedbacks"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Portfolio from "@/components/Portfolio"
import Top from "@/components/Top"
import Youtube from "@/components/Youtube"

export default function Home() {
  return (
    <main >
      <div className="bg-top">
        <Navbar />
        <Top />
      </div>
      <Portfolio />
      <About />
      <Feedbacks />
      <Youtube />
      <Contact />
      <Footer />
    </main>
  )
}
