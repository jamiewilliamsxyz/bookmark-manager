const Home = () => {
  return (
    <div className="flex min-h-screen justify-start items-center p-14 flex-col gap-14">
      <header className="flex flex-col items-center text-center gap-6">
        <h1 className="text-7xl font-semibold">
          <span className="text-sky-400">Bookmark</span> Manager
        </h1>
        <h2 className="font-medium text-xl max-w-100">
          A simple bookmark manager to keep track of important links
        </h2>
      </header>
    </div>
  );
};

export default Home;
