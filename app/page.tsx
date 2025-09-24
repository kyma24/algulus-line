import Image from "next/image";
import Link from "next/link";
import TrainAnimation from "./components/TrainAnimation";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-head font-extrabold text-6xl transform -translate-y-1/1 z-1001">Algulus Line</h1>
        <TrainAnimation></TrainAnimation>
      </main>
      <footer>
      </footer>
    </div>
  );
}