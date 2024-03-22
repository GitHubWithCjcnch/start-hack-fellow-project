import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface StartupPreviewProps {
  startupName: string;
  location: string;
  logo: string;
  description: string;
  industrials: string[];
  stage: string;
  badge: string;
}

const StartupPreview: React.FC<StartupPreviewProps> = ({
  startupName,
  location,
  logo,
  description,
  industrials,
  stage,
  badge,
}) => {
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
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/startup/${startupName}`)}
      className="w-full flex-row flex bg-[#333333] px-6 py-4 rounded-md justify-between items-center gap-10 cursor-pointer hover:bg-[#444444] transition-colors duration-200"
    >
      <div className="flex flex-row gap-3">
        <img
          className="w-24 object-contain"
          src={logo}
          alt={`${startupName} logo`}
        />
        <div className="flex flex-col gap-0.5">
          <div className="flex flex-row gap-2 items-center">
            <h2 className="font-bold text-white text-lg">{startupName}</h2>
            <p className="font-medium text-[#CDCDCD] text-xs">{location}</p>
          </div>
          <p className="font-medium text-white text-sm">{description}</p>
          <div className="flex flex-row flex-wrap gap-2 py-1">
            <span className="px-1.5 py-1 bg-[#460004] font-medium text-white text-xs rounded-[5px]">
              {badge}
            </span>
            {industrials.map((industrial, index) => (
              <span
                key={index}
                className="px-1.5 py-1 bg-[#444444] font-medium text-white text-xs rounded-[5px]"
              >
                {industrial.industry.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-end">
        <div className="flex flex-row bg-[#999999] h-2 items-center w-36 justify-between rounded-full z-0">
          <div
            className="absolute bg-[#FF6100] h-2 items-center justify-between rounded-full z-10"
            style={{
              width: `${stageIndex * (144 / Object.keys(stages).length)}px`,
            }}
          ></div>
          {Object.keys(stages).map((key, index) => (
            <div
              key={key}
              className={`bg-[#333333] border-2 border-[#666666] h-2 items-center 
            }  justify-center flex rounded-full z-20 ${
              index === stageIndex ? "w-6 h-6" : "w-3.5 h-3.5"
            }`}
            >
              <p className="font-medium text-[#FF6100] z-20 text-xs">
                {index === stageIndex ? stageIndex + 1 : ""}
              </p>
            </div>
          ))}
        </div>
        <p className="font-semibold text-white text-sm">
          {stages[stage as keyof typeof stages]}
        </p>
      </div>
    </div>
  );
};

export default StartupPreview;
