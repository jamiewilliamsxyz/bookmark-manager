import CardSkeleton from "./bookmark-card/CardSkeleton";

const CardsContainerSkeleton = () => {
  return (
    <div className="flex animate-pulse">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>

      {/* Scrollbar skeleton */}
      <div className="h-128.5 w-8 bg-[#1e1e1e] rounded-full">
        <div className="h-36 w-full bg-neutral-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default CardsContainerSkeleton;
