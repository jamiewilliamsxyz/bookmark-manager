import Link from "next/link";

const Home = () => {
  return (
    <div className="flex-1 flex justify-center">
      <div className="w-[800px] flex flex-col justify-center items-center gap-12">
        <header className="flex gap-6 flex-col items-center text-center">
          <h1 className="text-6xl">
            Save, tag and search your links all in one place
          </h1>
          <h2 className="text-lg max-w-1/2">
            Stop losing important links. Save, tag and search them in a
            lightweight, streamlined interface.
          </h2>
        </header>

        <div className="flex gap-9.5 flex-col items-center">
          <div className="bg-neutral-200 rounded-md shadow h-[360px] w-[640px] text-neutral-800">
            placeholder video
          </div>
          <Link href="/signup">
            <button className="bg-neutral-100 px-5.5 py-2 text-lg rounded-md text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity">
              Start organising
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
