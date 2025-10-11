import Image from "next/image";
import TitleHero from "../components/TitleHero";
import LineScroll from "../components/LineScroll";
import TicketNav from "../components/Archived/TicketNav";
import StartSection from "../components/StartSection";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pt-0 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="w-1/1 h-20" />
        <TitleHero></TitleHero>

        <StartSection />
        
        <div className="w-1/1 h-20" />
        <LineScroll></LineScroll>

      </main>
      <footer>
      </footer>
    </div>
  );
}