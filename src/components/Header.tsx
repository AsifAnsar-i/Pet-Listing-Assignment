import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#d6bfdd] py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-[#60269e] font-bold tracking-tight">
          <Link to="/">PetFinder.com</Link>
        </span>

        <FaPaw color="#60269e" size={32} />
      </div>
    </div>
  );
};

export default Header;
