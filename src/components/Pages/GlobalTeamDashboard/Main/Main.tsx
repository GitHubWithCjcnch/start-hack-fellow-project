import { FC } from "react";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Startups from "../Pages/Startups/Startups";
import Mentors from "../Pages/Mentors/Mentors";
import Request from "../Pages/Request/Request";

interface MainProps {
    page: any;
}

const Main: FC<MainProps> = ({ page }) => {
    let Element: any;

    if (page === "dashboard") {
        Element = () => <Dashboard />
    } else if (page === "startups") {
        Element = () => <Startups />
    } else if (page === "mentors") {
        Element = () => <Mentors />
    } else if (page === "request") {
        Element = () => <Request />
    }
    
    return (
        <div className="flex-grow break-all overflow-auto">
            <Element />
        </div>
    )
}

export default Main;