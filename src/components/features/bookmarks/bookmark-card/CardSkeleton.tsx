const CardSkeleton = () => {
  return (
    <div className="h-39.5 w-94 rounded-md bg-[#1a1a1a] border border-neutral-800 flex flex-col gap-5 p-5">
      <div className="h-6.5 w-2/5 rounded-md bg-neutral-800"></div>
      <div className="mt-1 h-5.5 w-3/5 rounded-md bg-[#202020]"></div>
    </div>
  );
};

export default CardSkeleton;
