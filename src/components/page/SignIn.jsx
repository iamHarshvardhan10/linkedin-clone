import { Link } from "react-router-dom";
import logo from "../../assets/asset 4.svg";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SignIn = () => {
  return (
    <div>
      <div className="px-[32px] pt-[32px]">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-[102px] h-[25px]" />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col">
        <form className="w-[325px] h-[540px] border px-[24px] py-[24px] shadow-lg rounded-lg">
          <h1 className="text-[32px] font-semibold">Sign in</h1>
          <Badge
            className={
              "mt-[11px] mb-[12px]  px-[75px] py-[12px]  w-full rounded-full"
            }
          >
            Continue with Google
          </Badge>
          <Badge
            className={
              "mt-[11px] mb-[32px] px-[75px] py-[12px]  w-full rounded-full"
            }
          >
            Sign in with Apple
          </Badge>
          <div className="divider flex items-center text-center">
            <span className="whitespace-nowrap text-[14px] text-[#666]">
              or
            </span>
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              className={
                "h-[52px] mt-[24px] border-black placeholder:text-[18px] "
              }
            />
            <Input
              type="password"
              placeholder="Password"
              className={
                "h-[52px] mt-[24px] border-black placeholder:text-[18px] "
              }
            />
            <p className="my-[16px] ">
              <Link
                to={"/forgot-password"}
                className="px-[10px] text-blue-800 font-semibold hover:border hover:border-black hover:py-[8px] hover:rounded-md hover:bg-slate-300"
              >
                Forgot password?
              </Link>
            </p>
          </div>
          <Button
            className={
              "w-full mt-[16px] px-[24px] py-[24px] rounded-full text-[16px]"
            }
          >
            Sign in
          </Button>
        </form>
        <p className="my-[32px]">
          New to LinkedIn?{" "}
          <Link to={"/join-now"} className="text-blue-800 font-semibold">
            Join Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
