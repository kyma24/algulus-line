import Image from "next/image";
import TitleHero from "./components/TitleHero";
import LineScroll from "./components/LineScroll";
import TicketNav from "./components/TicketNav";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pt-0 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TicketNav></TicketNav>

        <div className="w-1/1 h-20" />
        <TitleHero></TitleHero>

        <div className="absolute top-[85vh] left-1/2 -translate-x-1/2 w-1/2 max-w-[450px] aspect-2/1 bg-[#bdc2cb] rounded-[10px]  opacity-30 z-1" />
        <div className="absolute top-[87.5vh] left-1/2 -translate-x-1/2 w-7/12 max-w-[525px] aspect-2/1 bg-[#bdc2cb] rounded-[10px]  opacity-50 z-1" />
        <div className="absolute top-[90vh] left-1/2 -translate-x-1/2 w-2/3 max-w-[600px] aspect-2/1 bg-[#bdc2cb] rounded-[10px] z-1">
        </div>
        
        <div className="w-1/1 h-20" />
        <LineScroll></LineScroll>

      </main>
      <footer>
      </footer>
    </div>
  );
}