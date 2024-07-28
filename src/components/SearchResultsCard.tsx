import { Link } from "react-router-dom";
import { PetType } from "../services/api-client";

type Props = {
  pet: PetType;
};

const SearchResultsCard = ({ pet }: Props) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg w-full max-w-[810px] mx-auto">
      <div className="relative">
        <img
          src={pet.images[0]}
          alt={pet.name}
          className="w-full h-[300px] object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-3 sm:p-4">
          <h2 className="text-xl sm:text-2xl font-bold">{pet.name}</h2>
          <p className="text-base sm:text-lg">{pet.breed}</p>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <span className="text-xs sm:text-sm text-gray-500">
            {pet.city}, {pet.state}
          </span>
          <span className="text-xs sm:text-sm text-gray-500">{pet.animal}</span>
        </div>
        <p className="line-clamp-3 mb-4 text-gray-700 text-sm sm:text-base">{pet.description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <span className="text-lg sm:text-xl font-bold">Adoption Status: Available</span>
          </div>
          <Link
            to={`/detail/${pet.id}`}
            className="bg-[#60269e] text-white py-2 px-4 font-bold text-base sm:text-lg rounded hover:bg-[#5a1f8a] text-center w-full sm:w-auto mt-4 sm:mt-0"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
