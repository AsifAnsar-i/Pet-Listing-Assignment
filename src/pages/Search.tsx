import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/SearchContext";
import * as apiClient from "../services/api-client";
import { useState } from "react";
import SearchResultsCard from "../components/SearchResultsCard";
import Pagination from "../components/Pagination";
import PetTypesFilter from "../components/PetTypesFilter";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";

const ITEMS_PER_PAGE = 2;

const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { showToast } = useAppContext();

  const searchParams = {
    animal: search.animal,
    location: search.location,
    breed: search.breed,
  };

  const filterParams = {
    animal: selectedType || "",
  };

  const { data: petData, isLoading } = useQuery(
    ["searchPets", selectedType ? filterParams : searchParams],
    () => apiClient.searchPets(selectedType ? filterParams : searchParams),
    {
      keepPreviousData: true,
      onError: () => {
        showToast({ message: "Error Fetching Pet Data", type: "ERROR" });
      },
    }
  );

  const allPets = petData?.pets || [];
  const numberOfResults = allPets.length;
  const pages = Math.ceil(numberOfResults / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pets = allPets.slice(startIndex, endIndex);

  const handleTypeChange = (selectedType: string) => {
    setSelectedType(selectedType);
    setPage(1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div className="rounded-lg lg:border lg:border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5 -z-10 lg:block hidden">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>

          <PetTypesFilter
            selectedPetTypes={selectedType ? [selectedType] : []}
            onChange={handleTypeChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 z-50">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {numberOfResults > 0 && numberOfResults}{" "}
            {numberOfResults > 0 && "Pets found"}
            {search.location ? ` in ${search.location}` : ""}
          </span>
        </div>
        <div>{isLoading && <Loader />}</div>
        {pets.length > 0 ? (
          pets.map((pet, index) => <SearchResultsCard key={index} pet={pet} />)
        ) : (
          <p>No results found.</p>
        )}
        <div>
          <Pagination
            page={page}
            pages={pages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
