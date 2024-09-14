import logo from "../../../assets/asset 4.svg";

const Footer = () => {
  return (
    <div className="px-[192px] py-[20px]">
      <ul className="flex items-center  list-none px-[149px] gap-4 font-semibold">
        <li className="text-[12px] text-gray-900">
          <img src={logo} alt="logo" className="w-[56px] h-[14x]" />
        </li>
        <li className="text-[12px] text-gray-900">© 2024</li>
        <li className="text-[12px] text-gray-900">User Agreement</li>
        <li className="text-[12px] text-gray-900">Privacy Policy</li>
        <li className="text-[12px] text-gray-900">Community Guidelines</li>
        <li className="text-[12px] text-gray-900">Cookie Policy</li>
        <li className="text-[12px] text-gray-900">Copyright Policy</li>
        <li className="text-[12px] text-gray-900">Send Feedback</li>
        <li className="text-[12px] text-gray-900">Langauge</li>
      </ul>
    </div>
  );
};

export default Footer;
