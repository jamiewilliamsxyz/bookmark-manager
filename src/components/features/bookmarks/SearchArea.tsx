import FilterSelect from "./filter/FilterSelect";
import SearchBar from "./SearchBar";

const SearchArea = () => {
  return (
    <div className="flex gap-5 items-center">
      <SearchBar />
      <FilterSelect />
    </div>
  );
};

export default SearchArea;
