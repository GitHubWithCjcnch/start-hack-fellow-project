import { FC } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FellowSummitWhiteLogo from "../../../assets/white_FS_svg.svg";
import "./Header.css";

const Header: FC = () => {
  return (
    <header className="relative text-white p-4 flex justify-between items-center z-50">
      <img
        className="p-2"
        src={FellowSummitWhiteLogo}
        alt="logo_fellow_summit w-32"
      />
      <div className="space-x-4 p-2 mr-8">
        {/* <Link className={buttonVariants({ variant: "secondary", className: 'font-bold' })} to={''}>APPLY</Link> */}
        <Link className="hover-effect font-bold" to={"login"}>
          LOGIN
        </Link>
      </div>
    </header>
  );
};

export default Header;
