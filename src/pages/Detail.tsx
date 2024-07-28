import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../services/api-client";
import DetailCard from "../components/DetailCard";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";

const Detail = () => {
  const { petId } = useParams();
  const { showToast } = useAppContext();

  const { data: petData } = useQuery(
    "fetchPetById",
    () => apiClient.fetchPetById(petId || ""),
    {
      enabled: !!petId,
      onSuccess: () => {},
      onError: () => {
        showToast({ message: "Error Fetching Pet Data", type: "ERROR" });
      },
    }
  );

  const pet = petData?.pets?.[0];

  console.log(pet);

  if (!pet) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <DetailCard pet={pet} />;
};

export default Detail;
