import { Link } from "react-router-dom";
import logo from "../../assets/asset 4.svg";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Footer from "../core/Home/Footer";
const ForgotPassword = () => {
  return (
    <div>
      <div className="px-[120px] py-[10px] flex items-center justify-between">
        <img src={logo} alt="logo" className="w-[102px] h-[25px]" />
        <div className="flex gap-4 ">
          <Badge
            variant={"secondary"}
            className={
              "text-[16px] rounded-full px-[16px] py-[8px] border-black"
            }
          >
            Sign in
          </Badge>
          <Badge
            variant={"outline"}
            className={
              "text-[16px] rounded-full px-[16px] py-[8px] border-black"
            }
          >
            Join now
          </Badge>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <form className="w-[352px] h-[380px] flex flex-col my-[110px] px-[24px] py-[24px] border shadow-xl">
          <h1 className="text-[28px] font-semibold mb-[32px]">
            Forgot password
          </h1>
          <Input
            type={"email"}
            placeholder={"Email or Phone"}
            className={"w-full h-[52px]"}
          />
          <span className="text-[12px] mt-[24px]">
            We’ll send a verification code to this email or phone number if it
            matches an existing LinkedIn account.
          </span>
          <Button className={"w-full h-[52px]  rounded-full mt-[24px]"}>
            Next
          </Button>
          <span className="text-center mt-[12px]">
            <Link to={"/sign-in"}>Back</Link>
          </span>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ForgotPassword;
