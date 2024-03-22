import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import CheckSVG from "@/SVGs/CheckSVG";

const BadgeProgressTracker = () => {
  const totalParticipants = 32;
  const badgeStartDate = new Date("2024-01-01");
  const badgeEndDate = new Date("2024-04-30");

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const startDateFormatted = badgeStartDate.toLocaleDateString();
  const endDateFormatted = badgeEndDate.toLocaleDateString();

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

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
    }
  }, []);

  return (
    <div className="flex flex-col rounded-lg bg-[#191919] p-6 text-white gap-8">
      <div className="flex flex-col">
        <div className="font-bold text-lg mb-4 flex items-center gap-3">
          <FontAwesomeIcon icon={faUsers} />
          <span className="mr-2">Active Badge - START UP 24</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-[#FF6100]">
            <p className="font-medium text-white text-base">{`${startDateFormatted} - ${endDateFormatted}`}</p>
            <div className="w-2 h-2 rounded-full bg-[#FF6100]"></div>
            <p className="font-medium text-white text-base">
              {totalParticipants} participants
            </p>
          </div>
          <Link
            to="/dashboards#startups"
            className="font-bold text-[#FE8902] hover:text-[#ff8f42]"
          >
            View all participants
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 mb-10">
        <div
          ref={containerRef}
          className="flex flex-row bg-[#999999] h-4 items-center w-full justify-between rounded-full z-0"
        >
          <div
            className="absolute bg-[#FF6100] h-4 items-center justify-between rounded-full z-10"
            style={{
              width: `${
                stageIndex * (containerWidth / Object.keys(stages).length) + 70
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
                  index <= stageIndex ? "text-white" : "text-[#999999]"
                }`}
              >
                {stages[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BadgeProgressTracker;
