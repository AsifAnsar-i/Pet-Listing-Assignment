import { PetType } from "../services/api-client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaPaw } from "react-icons/fa";

export type Props = {
  pet: PetType;
};

const DetailCard = ({ pet }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
  };

  const imgCnt = pet.images.length;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
        {pet.name} - {pet.breed}
      </h1>

      <div className="mb-6 text-lg text-gray-700">
        <p>
          <strong>City:</strong> {pet.city}
        </p>
        <p>
          <strong>State:</strong> {pet.state}
        </p>
        <p>
          <strong>Animal:</strong> {pet.animal}
        </p>
      </div>

      {imgCnt === 1 ? (
        <div>
          <img
            src={pet.images[0]}
            alt="pet"
            className="object-cover rounded-xl shadow-lg w-full h-[400px] max-w-full "
          />
          <p className="flex mx-auto justify-center text-2xl font-extrabold opacity-65">
            .
          </p>
        </div>
      ) : (
        <Slider {...settings} className="w-full mb-6">
          {pet.images.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-xl"
            >
              <img
                src={image}
                alt={`${pet.name} image ${index + 1}`}
                className="object-cover rounded-xl shadow-lg w-full h-[400px] max-w-full "
              />
            </div>
          ))}
        </Slider>
      )}

      <div className="text-lg text-gray-700">
        <p>
          <strong>Description:</strong>
        </p>
        <p>{pet.description}</p>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <FaPaw color="#d6bfdd" size={32} />

        <p className="text-gray-800 text-lg font-medium">
          Ready to find a new home!
        </p>
      </div>
    </div>
  );
};

export default DetailCard;
