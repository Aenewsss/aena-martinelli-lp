import Navbar from "@/components/Navbar"
import Portfolio from "@/components/Portfolio"
import Top from "@/components/Top"

export default function Home() {
  return (
    <main >
      <div className="bg-top">
        <Navbar />
        <Top />
      </div>
      <Portfolio />
    </main>
  )
}
