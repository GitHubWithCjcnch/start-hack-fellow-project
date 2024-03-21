import { FC } from "react";
import NavMenu from "./NavMenu/NavMenu";
import Main from "./Main/Main";

const GlobalTeamDashboard: FC = () => {
    return (
        <div className="flex">
          <div className="w-64 bg-gray-900 text-white min-h-screen">
              <NavMenu />
          </div>
          <div className="flex-grow bg-gray-100 min-h-screen">
              <Main />
          </div>
      </div>
    )
}

export default GlobalTeamDashboard;