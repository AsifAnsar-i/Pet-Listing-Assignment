import React, { useContext, useState } from "react";

type SearchContext = {
  animal: string;
  location: string;
  breed: string;
  saveSearchValues: (animal: string, location: string, breed: string) => void;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [animal, setAnimal] = useState<string>(
    () => sessionStorage.getItem("type") || ""
  );
  const [location, setLocation] = useState<string>(
    () => sessionStorage.getItem("location") || ""
  );
  const [breed, setBreed] = useState<string>(
    () => sessionStorage.getItem("breed") || ""
  );

  const saveSearchValues = (animal: string, location: string, breed: string) => {
    setAnimal(animal);
    setLocation(location);
    setBreed(breed);

    sessionStorage.setItem("animal", animal);
    sessionStorage.setItem("location", location);
    sessionStorage.setItem("breed", breed);
  };

  return (
    <SearchContext.Provider
      value={{
        animal,
        location,
        breed,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context as SearchContext;
};
