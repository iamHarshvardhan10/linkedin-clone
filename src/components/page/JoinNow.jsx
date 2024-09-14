import { Link } from "react-router-dom";
import logo from "../../assets/asset 4.svg";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const JoinNow = () => {
  return (
    <div>
      <div className="px-[32px] pt-[32px]">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-[102px] h-[25px]" />
        </Link>
      </div>
      <h1 className="text-center text-[32px] py-[24px]">
        Make the most of your professional life
      </h1>
      <div className="flex items-center justify-center flex-col">
        <form className="w-[400px] h-[540px] border px-[24px] py-[8px] shadow-lg rounded-lg">
          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-[24px]">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password (6+ characters)</Label>
              <Input type="password" id="password" />
            </div>
            <div className="flex items-center space-x-2 my-[16px]">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Keep me in logged in
              </label>
            </div>
            <p className="text-center text-[12px]">
              By clicking Agree & Join or Continue, you agree to the LinkedIn{" "}
              <span className="text-blue-800 font-semibold">
                User Agreement, Privacy Policy,
              </span>{" "}
              and{" "}
              <span className="text-blue-800 font-semibold">
                Cookie Policy.
              </span>
            </p>
          </div>
          <Button
            className={
              "w-full mt-[16px] px-[24px] py-[24px] rounded-full text-[16px]"
            }
          >
            Agree & Join
          </Button>
          <div className="divider flex items-center text-center my-[16px]">
            <span className="whitespace-nowrap text-[14px] text-[#666]">
              or
            </span>
          </div>
         <div className="w-full flex flex-col gap-3">
          <Button className={"px-[24px] py-[24px] rounded-full"}>Continue with google</Button>
          <Button className={"px-[24px] py-[24px] rounded-full"}>Sign in with Apple</Button>
         </div>
         <div>
         <p className="my-[16px] text-center">
          Already Have Account?{" "}
          <Link to={"/join-now"} className="text-blue-800 font-semibold">
            Sign In
          </Link>
        </p>
         </div>
        </form>
        <p className="my-[12px] text-sm">
          Looking to create a page for a business? <span className="text-blue-800 font-semibold">Get help</span> 
        </p>
      </div>
    </div>
  );
};

export default JoinNow;
