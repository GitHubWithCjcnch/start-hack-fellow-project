import { FC } from "react";
import NavMenu from "./NavMenu/NavMenu";
import Main from "./Main/Main";
import { useLocation } from "react-router-dom";

const GlobalTeamDashboard: FC = () => {
  const location = useLocation();
  let Element: any;

  if (location.hash === "#dashboard") {
    Element = () => <Main page="dashboard" />;
  } else if (location.hash === "#request") {
    Element = () => <Main page="request" />;
  } else if (location.hash === "#startups") {
    Element = () => <Main page="startups" />;
  } else if (location.hash === "#mentors") {
    Element = () => <Main page="mentors" />;
  } else {
    Element = () => <Main page="dashboard" />;
  }

  return (
    <div className="flex">
      <div className="w-64 bg-gray-900 text-white min-h-screen">
        <NavMenu />
      </div>
      <div className="flex-grow bg-black min-h-screen">
        <Element />
      </div>
    </div>
  );
};

export default GlobalTeamDashboard;
