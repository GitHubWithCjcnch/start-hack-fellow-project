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

type NavItemProps = {
  to: string;
  Icon: any;
  children: string;
};

const NavItem: React.FC<NavItemProps> = ({ to, Icon, children }) => (
  <li className="mb-6 flex items-center text-lg hover:text-gray-300">
    <div className="mr-4">
      <FontAwesomeIcon icon={Icon} size="1x" />
    </div>
    <a href={to}>{children.toUpperCase()}</a>
  </li>
);

const NavMenu: React.FC = () => {
  return (
    <div
      className="w-64 min-h-screen p-6 flex flex-col justify-between text-white"
      style={{ backgroundColor: "#191919" }}
    >
      <div className="grid gap-5 grid-cols-1">
        <img src={white_FS_svg} alt="fellow_logo" className="mb-2" />
        <hr className="my-2 border-t-2 border-white" />
        <ul className="mt-2 font-bold">
          <NavItem to="#dashboard" Icon={faHome}>
            Dashboard
          </NavItem>
          <NavItem to="#request" Icon={faLifeRing}>
            Request
          </NavItem>
          <NavItem to="#startups" Icon={faDollarSign}>
            Startups
          </NavItem>
          <NavItem to="#mentors" Icon={faUsers}>
            Mentors
          </NavItem>
        </ul>
      </div>
      <div className="flex items-center text-lg hover:text-gray-300">
        <div className="mr-4">
          <FontAwesomeIcon icon={faUser} size="1x" />
        </div>
        <a href="#profile">Profile</a>
      </div>
    </div>
  );
};

export default NavMenu;
