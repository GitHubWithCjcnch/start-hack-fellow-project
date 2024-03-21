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
        <div className="flex flex-col items-center justify-center flex-grow break-all h-screen overflow-auto bg-black text-white">
            <span className="text-white text-4xl font-bold uppercase my-12">HI Paul!</span>
            <Element />
        </div>
    )
}

export default Main;