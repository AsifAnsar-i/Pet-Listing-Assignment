import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";

import { useNavigate } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [animal, setAnimal] = useState<string>(search.animal);
  const [location, setLocation] = useState<string>(search.location);
  const [breed, setBreed] = useState<string>(search.breed);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(animal, location, breed);
    navigate("/search");
  };

  const handleClear = () => {
    setAnimal("");
    setLocation("");
    setBreed("");

    search.saveSearchValues("", "", "");
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap p-3 -mt-10   bg-[#d6bfdd] shadow-md gap-4 w-full"
    >
      <div className="flex flex-col md:flex-row gap-3 mx-auto">
      <div className="flex items-center flex-1  bg-white p-2">
        <FaPaw color="#d6bfdd" size={25} />
        <input
          placeholder="animal"
          className="text-md w-full  focus:outline-none ml-2 font-medium"
          value={animal}
          onChange={(event) => setAnimal(event.target.value)}
        />
      </div>
      <div className="flex items-center flex-1 bg-white p-2">
        <FaPaw color="#d6bfdd" size={25} />
        <input
          placeholder="location"
          className="text-md w-full focus:outline-none ml-2 font-medium"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <div className="flex items-center flex-1 bg-white p-2">
        <FaPaw color="#d6bfdd" size={25} />
        <input
          placeholder="breed"
          className="text-md w-full focus:outline-none ml-2 font-medium"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />
      </div>
      </div>
      

      <div className="flex w-full gap-1 mt-2">
        <button
          type="submit"
          className="flex-1 bg-[#60269e] text-white p-2 font-bold text-xl hover:opacity-85"
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="flex-1 bg-red-600 text-white p-2 font-bold text-xl hover:bg-red-500"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
