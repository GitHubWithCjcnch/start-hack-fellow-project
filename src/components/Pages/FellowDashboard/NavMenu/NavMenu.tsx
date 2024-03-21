import React from "react";
import {BiHomeAlt, BiSupport, BiDollarCircl, BiUserCircle, BiUser} from "react-icons/bi";
import white_FS_svg from '../../../../assets/white_FS_svg.svg'

type NavItemProps = {
    to: string;
    Icon: () => any;
    children: string;
  };
  
  const NavItem: React.FC<NavItemProps> = ({ to, Icon, children }) => (
    <li className="mb-6 flex items-center text-lg hover:text-gray-300">
      <Icon className="mr-4" />
      <a href={to}>{children.toUpperCase()}</a>
    </li>
  );

  const NavMenu: React.FC = () => {
    return (
      <div className="w-64 min-h-screen p-6 flex flex-col justify-between text-white" style={{backgroundColor: '#191919'}}>
          <img src={white_FS_svg} alt="fellow_logo"/>
          <hr className="my-4 border-t-2 border-white" />
        <ul>
          <NavItem to="#dashboard" Icon={BiHomeAlt}>Dashboard</NavItem>
          <NavItem to="#request" Icon={BiSupport}>Request</NavItem>
          <NavItem to="#startups" Icon={BiDollarCircl}>Startups</NavItem>
          <NavItem to="#mentors" Icon={BiUserCircle}>Mentors</NavItem>
        </ul>
        <a href="#profile" className="flex items-center text-lg hover:text-gray-300">
          <BiUser className="mr-4" />
          Profile
        </a>
      </div>
    );
  };
  
  export default NavMenu;