import { Badge } from "../ui/badge";
import image from "../../assets/asset 0.svg";
import Navbar from "./Home/Navbar";
import { Link } from "react-router-dom";
import Footer from "./Home/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="w-[100%] flex items-center justify-center  gap-4">
        <div className="flex flex-col items-center justify-center px-[192px]">
          <div className="flex flex-col">
            <h1 className="text-[48px] text-gray-500">
              Welcome to your professional community
            </h1>
            <Badge
              variant={"outline"}
              className={
                "w-[80%] flex items-center justify-center gap-8 px-6 py-2 rounded-full hover:border-2 border-black mt-4 text-[14px] cursor-pointer"
              }
            >
              Continue with Google
            </Badge>
            <Link to={"/sign-in"}>
              <Badge
                variant={"outline"}
                className={
                  "w-[80%] flex items-center justify-center gap-8 px-6 py-2 rounded-full border-black mt-6 text-[14px] cursor-pointer"
                }
              >
                Sign in with email
              </Badge>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="w-[70%] text-[12px] mt-6 mr-24 text-center">
              By clicking Continue to join or sign in, you agree to LinkedIns{" "}
              <span className="text-blue-900 font-semibold">
                User Agreement, Privacy Policy,
              </span>{" "}
              and{" "}
              <span className="text-blue-900 font-semibold">
                Cookie Policy.
              </span>
            </p>
            <p className="text-center mt-8 mr-24">
              New to Linkdin?{" "}
              <Link to={"/join-now"}>
                <span className="text-blue-700 font-semibold">Join Now</span>
              </Link>
            </p>
          </div>
        </div>
        <img src={image} alt="" className="w-[600px] h-[550px]" />
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;
