import LineScroll from "../components/LineScroll";
import StartSection from "../components/StartSection";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <MainNav />
        
        <div className="w-1/1 h-20" />
        <div className="h-[30vh]" />

        <StartSection />
        
        <div className="w-1/1 h-20" />
        <LineScroll />

        <Footer />
      </main>
      <footer>
      </footer>
    </div>
  );
}