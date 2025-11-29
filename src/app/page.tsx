import Link from "next/link";
import { MoveRight } from "lucide-react";
import FloatingIcons from "@/components/FloatingIcons";

const Home = () => {
  return (
    <div className="flex-1 flex justify-center">
      <FloatingIcons />

      <div className="w-[800px] flex flex-col justify-center items-center gap-12 py-12">
        <header className="flex gap-6 flex-col items-center text-center">
          <h1 className="text-6xl bg-linear-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent!">
            Save, tag and search your links all in one place
          </h1>
          <h2 className="max-w-2/3 text-neutral-400">
            Stop losing important links. Save, tag and search them in a
            lightweight, streamlined interface.
          </h2>
        </header>

        <div className="flex gap-9.5 flex-col items-center">
          <div className="bg-neutral-200 rounded-md h-[360px] w-[640px] text-neutral-800 shadow-[0_0_58px_rgba(255,255,255,0.13)]">
            placeholder video
          </div>
          <Link
            href="/signup"
            className="flex px-5.5 gap-5 items-center bg-neutral-100 shadow py-2 rounded-md text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity"
          >
            Start organising
            <MoveRight strokeWidth={1.75} color="#171717" size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
