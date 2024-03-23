import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLifeRing,
  faDollarSign,
  faUsers,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import white_FS_svg from "../../../../assets/white_FS_svg.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import HomeSVG from "@/SVGs/HomeSVG";
import MessageSVG from "@/SVGs/MessageSVG";
import StockSVG from "@/SVGs/StockSVG";
import EducationSVG from "@/SVGs/EducationSVG";

type NavItemProps = {
  to: string;
  svg: any;
  children: string;
};

const NavItem: React.FC<NavItemProps> = ({ to, svg, children }) => {
  const location = useLocation(); // Get current location
  const isActive = location.pathname === to; // Check if the item's route matches the current location

  // Conditional class based on active state
  const linkClass = isActive ? "text-green-500" : "hover:text-gray-300"; // Example: green for active, gray on hover for others

  return (
    <li className={`mb-6 flex items-center text-lg ${linkClass}`}>
      <div className="mr-4">{svg}</div>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const NavMenu: React.FC = () => {
  return (
    <div
      className="w-56 min-h-screen p-6 flex flex-col justify-between text-white sticky top-0 left-0 z-50"
      style={{ backgroundColor: "#191919" }}
    >
      <div className="grid gap-5 grid-cols-1">
        <img src={white_FS_svg} alt="fellow_logo" className="mb-2 w-40" />
        <hr className="my-2 border-t-2 rounded border-[#999]" />
        <ul className="mt-2 font-bold">
          <NavItem to="/dashboards#dashboard" svg={<HomeSVG />}>
            Dashboard
          </NavItem>
          <NavItem to="#request" svg={<MessageSVG />}>
            Request
          </NavItem>
          <NavItem to="/dashboards#startups" svg={<StockSVG />}>
            Startups
          </NavItem>
          <NavItem to="#mentors" svg={<EducationSVG />}>
            Mentors
          </NavItem>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <hr className="my-2 border-t-2 rounded border-[#999]" />
        <div className="flex items-center text-lg hover:text-gray-300">
          <div className="mr-4">
            <FontAwesomeIcon icon={faUser} size="sm" color="#999" />
          </div>
          <a href="#profile" className="font-bold">
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
