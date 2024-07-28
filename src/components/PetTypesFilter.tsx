import React from "react";

const petType = ["dog", "cat","bird", "reptile", "rabbit"];

type Props = {
  selectedPetTypes: string[];
  onChange: (selectedType: string) => void;
};

const PetTypesFilter = ({ selectedPetTypes, onChange }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = event.target.value;
    onChange(selectedType);
  };

  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Pet Type</h4>
      {petType.map((type, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            className="rounded"
            value={type}
            checked={selectedPetTypes.includes(type)}
            onChange={handleChange}
          />
          <span>{type}</span>
        </label>
      ))}
    </div>
  );
};

export default PetTypesFilter;
