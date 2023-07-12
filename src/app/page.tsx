import About from "@/components/About"
import Feedbacks from "@/components/Feedbacks"
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
    </main>
  )
}
