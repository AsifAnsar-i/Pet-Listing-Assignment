import { Link } from "react-router-dom";
import { PetType } from "../services/api-client";

type Props = {
  pet: PetType;
};

const LatestSearchPetsCard = ({ pet }: Props) => {
  return (
    <Link
      to={`/detail/${pet.id}`}
      className="relative block overflow-hidden rounded-lg shadow-md"
    >
      <div className="relative h-[300px]">
        <img
          src={pet.images[0]}
          alt={pet.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
          <div>
            <h2 className="text-white text-2xl font-semibold">{pet.name}</h2>
            <p className="text-white text-sm">
              {pet.breed} - {pet.animal}
            </p>
            <p className="text-white text-sm">
              {pet.city}, {pet.state}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestSearchPetsCard;
