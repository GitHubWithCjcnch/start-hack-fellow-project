import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "./globals.css";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import GlobalTeamDashboard from "./components/Pages/GlobalTeamDashboard/GlobalTeamDashboard";
import MentorDashboard from "./components/Pages/MentorDashboard/MentorDashboard";
import FellowDashboard from "./components/Pages/FellowDashboard/FellowDashboard";
import { StartupDetailed } from "./components/Reusable/StartupDetailed";

function App() {
  const isGlobalTeam = true;
  const isFellow = false;
  const isMentorship = false;

  let Dashboard: any;
  if (isFellow) {
    Dashboard = FellowDashboard;
  } else if (isGlobalTeam) {
    Dashboard = GlobalTeamDashboard;
  } else if (isMentorship) {
    Dashboard = MentorDashboard;
  }

  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboards",
          element: <Dashboard />,
        },
        {
          path: "/startup/:startupname",
          element: <StartupDetailed />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
