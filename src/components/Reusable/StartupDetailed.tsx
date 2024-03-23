import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavMenu from "../Pages/GlobalTeamDashboard/NavMenu/NavMenu";
import productLogo from "../../../public/logos/Logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import personPhoto from "../../../public/Person.jpeg";
import CheckSVG from "@/SVGs/CheckSVG";

async function getByNameStartups(startupName: any) {
  try {
    const res = await axios.post(
      "http://3.75.226.182:8080/api/appuser/getStartups"
    );
    console.log(res);
    const startups = res.status === 200 ? res.data.startups.rows : [];
    const startup = startups.find(
      (startup: any) => startup.name === startupName
    );
    console.log(startup);
    return startup;
  } catch (err) {
    console.error(err);
  }
}

export const StartupDetailed = () => {
  const { startupname } = useParams();
  const [startup, setStartup] = useState(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
    }
  });

  useEffect(() => {
    getByNameStartups(startupname).then((data) => setStartup(data));
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
    }
  }, [startupname]);

  const stage = "SeriesA";

  const stages = {
    Idea: "Idea Stage",
    PreSeed: "Pre-seed Stage",
    Seed: "Seed Stage",
    SeriesA: "Series A Stage",
    SeriesB: "Series B Stage",
    SeriesC: "Series C Stage",
    Exit: "Exit Stage",
  };

  const stageIndex = Object.keys(stages).indexOf(stage);

  return (
    <div className="flex">
      <div className="w-64 bg-black text-white min-h-screen">
        <NavMenu />
      </div>
      <div className="flex-grow bg-black min-h-screen">
        {startup && (
          <div className="h-full flex flex-col p-12 gap-14">
            <div className="flex flex-row">
              <Link to="/dashboards#startups">
                <h1 className="font-bold text-white text-4xl mr-3">
                  {"STARTUPS "}{" "}
                </h1>
              </Link>
              <h1 className="font-bold text-white text-4xl">
                {" "}
                {">"} {startup.name}
              </h1>
            </div>
            <div className="bg-[#191919] text-white py-9 px-10 flex flex-col rounded-lg">
              <div className="flex flex-row space-x-10 mb-4">
                <img
                  className="w-32 h-2/6 object-contain"
                  src={productLogo}
                  alt={`${startup.name} logo`}
                />
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row space-x-3 items-center">
                    <h1 className="text-3xl font-bold">{startup.name}</h1>
                    <h3 className="text-sm font-medium">{startup.region}</h3>
                  </div>
                  <p>{startup.description}</p>
                  <div className="flex flex-row flex-wrap gap-2 py-1">
                    {startup.badge && (
                      <span className="px-1.5 py-1 bg-[#460004] font-medium text-white text-xs rounded-[5px]">
                        {startup.badge}
                      </span>
                    )}

                    {startup.startup_industries.map((industrial, index) => (
                      <span
                        key={index}
                        className="px-1.5 py-1 bg-[#444444] font-medium text-white text-xs rounded-[5px]"
                      >
                        {industrial.industry.name}
                      </span>
                    ))}
                  </div>
                  {/*   <a href="download-link" download className="text-blue-500">
                    Download Link
                  </a> */}
                </div>

                <div className="flex w-3/5 flex-col space-y-3">
                  <div className="flex w-full flex-col bg-[#333333] py-2 pb-5 px-1 space-y-3 rounded-lg">
                    <img
                      className="w-40 h-4/5 object-contain"
                      src={productLogo}
                      alt={`${startup.name} logo`}
                    />
                    <div className="px-5 space-y-3">
                      <div className="flex justify-between">
                        <p className="font-semibold">Founded in:</p>
                        <p className="font-medium">{startup.foundedYear}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-semibold">Company Size:</p>
                        <p className="font-medium">{startup.foundedYear}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-semibold">Founded at: </p>
                        <p className="font-medium">{startup.region}</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#FF6100] px-5 py-2 text-white font-bold rounded-lg">
                    Schedule Meeting
                  </button>
                </div>
              </div>
              <hr className="border-[#999] border-t-0.5 my-3 mb-2 rounded-full" />{" "}
              {/* Thin white line */}
              <div className="py-4">
                <p>{startup.description}</p>
              </div>
              <div className="py-4 space-y-2">
                <p className="font-bold text-lg">Target Market</p>
                <p>{startup.fellowReason}</p>
              </div>
              <div className="py-4 space-y-2">
                <div className="flex flex-row space-x-4 items-center">
                  <FontAwesomeIcon icon={faArrowTrendUp} size="1x" />
                  <p className="font-bold text-lg">Startup Progress</p>
                </div>
                <div className="flex flex-col gap-4 mb-10 py-4 pb-12">
                  <div
                    ref={containerRef}
                    className="flex flex-row bg-[#999999] h-4 items-center w-full justify-between rounded-full z-0"
                  >
                    <div
                      className="absolute bg-[#FF6100] h-4 items-center justify-between rounded-full z-10"
                      style={{
                        width: `${
                          stageIndex *
                            (containerWidth / Object.keys(stages).length) +
                          70
                        }px`,
                      }}
                    ></div>
                    {Object.keys(stages).map((key, index) => (
                      <div className="flex-col flex mt-[30px] items-center gap-2">
                        <div
                          key={key}
                          className={`bg-[#333333] border-2 border-[#666666] h-2 items-center 
              }  justify-center flex rounded-full z-20 w-7 h-7 ${
                index <= stageIndex ? "text-[#FF6100]" : ""
              }`}
                        >
                          <p className="font-medium  z-20 text-xs">
                            {index < stageIndex ? (
                              <CheckSVG className="stroke-[#FF6100]" />
                            ) : (
                              index + 1
                            )}
                          </p>
                        </div>
                        <p
                          className={`font-semibold text-sm ${
                            index <= stageIndex
                              ? "text-white"
                              : "text-[#999999]"
                          }`}
                        >
                          {stages[key]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-4 space-y-2">
                <div className="flex flex-row space-x-4 items-center">
                  <FontAwesomeIcon icon={faUsers} size="1x" />
                  <p className="font-bold text-lg">Founders</p>
                </div>
                {[...Array(startup.founders)].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center space-x-4"
                  >
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      src={personPhoto}
                      alt={`John Belmere`}
                    />
                    <div>
                      <h3 className="font-bold">John Belmere</h3>
                      <p>CEO</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
