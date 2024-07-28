import { useQuery } from "react-query";
import * as apiClient from "../services/api-client";
import LatestSearchPetsCard from "../components/LatestSearchPetsCard";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";

const Home = () => {
  const { showToast } = useAppContext();
  const { data: petData, isLoading } = useQuery("fetchQuery", () =>
    apiClient.fetchPets(), {
      onSuccess: () => {
        showToast({ message: "Pet Data Fetched", type: "SUCCESS" });
      },
      onError: () => {
        showToast({ message: "Error Fetching Pet Data", type: "ERROR" });
      },
    }
  );

  const pets = petData?.pets;
  const topRowPets = pets?.slice(0, 2) || [];
  const bottomRowPets = pets?.slice(2) || [];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="space-y-3 p-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Meet Our Latest Pets
      </h2>
      <p className="text-sm sm:text-base text-gray-600">
        Explore the newest additions to our pet adoption listings. Find the
        perfect companion today!
      </p>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topRowPets.map((pet, index) => (
            <LatestSearchPetsCard key={index} pet={pet} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bottomRowPets.map((pet, index) => (
            <LatestSearchPetsCard key={index} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
