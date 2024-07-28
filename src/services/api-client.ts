const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export type PetDataType = {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: PetType[];
};

export type PetType = {
  id: number;
  animal: string;
  breed: string;
  city: string;
  description: string;
  images: string[];
  name: string;
  state: string;
};

export const fetchPets = async (): Promise<PetDataType> => {
  const response = await fetch(`${API_BASE_URL}/pets`);
  if (!response.ok) {
    throw new Error("Error fetching pets");
  }
  return response.json();
};

export const fetchPetById = async (petId: string): Promise<PetDataType> => {
  const response = await fetch(`${API_BASE_URL}/pets?id=${petId}`);
  if (!response.ok) {
    throw new Error("Error fetching pets");
  }

  return response.json();
};

export type SearchParams = {
  animal?: string;
  location?: string;
  breed?: string;
  page?: string;
  types?: string[];
};


export const searchPets = async (
  searchParams: SearchParams
): Promise<PetDataType> => {
  const queryParams = new URLSearchParams();
  queryParams.append("animal", searchParams.animal || "");
  queryParams.append("location", searchParams.location || "");
  queryParams.append("breed", searchParams.breed || "");
  const response = await fetch(`${API_BASE_URL}/pets?${queryParams}`);

  if (!response.ok) {
    throw new Error("Error fetching pets");
  }

  return response.json();
};
