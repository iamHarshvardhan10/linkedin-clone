import { Link } from "react-router-dom";
import logo from "../../../assets/asset 4.svg";

const Navbar = () => {
  return (
    <nav className="px-[192px] mt-[24px]  flex items-center justify-between">
      <img src={logo} alt="logo" className="w-[102px] h-[25px]" />
      <div className="flex items-center gap-1">
        <Link to={"/sign-in"}>
          <button className="px-[24px] py-[12px] border-blue-700 border rounded-full text-blue-900 font-semibold">
            Sign in
          </button>
        </Link>
        <Link to={"/join-now"}>
          <button className="px-[24px] py-[12px] border-blue-700 border rounded-full bg-blue-600 text-white font-semibold">
            {" "}
            Join Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
