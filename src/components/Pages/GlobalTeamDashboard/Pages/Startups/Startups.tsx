import Filter from "@/components/Reusable/Filter";
import SearchBar from "@/components/Reusable/SearchBar";
import StartupPreview from "@/components/Reusable/StartupPreview";
import React from "react";

const Startups: React.FC = () => {
  return (
    <div className="flex flex-col p-16 gap-14">
      <h1 className="font-bold text-white text-4xl">STARTUPS</h1>
      <div className="flex flex-row gap-10">
        <Filter batches={["Hola", "No"]} industries={["Hola", "No"]} />
        <div className="w-full flex flex-col gap-10">
          <SearchBar onSearch={() => console.log("hello")} />
          <div className="w-full flex gap-2 flex-col bg-[#191919] px-5 py-4 rounded-lg">
            <p className="font-regular text-white text-sm">
              Showing 3 of 1000+ companies
            </p>
            {/* Mapping the startups */}
            <StartupPreview
              startupName={"Product Ltd."}
              location={"London, UK"}
              logo={"./Productlogo.png"}
              description={"We make a product out of your idea rapidly."}
              industrials={["B2B", "ENGINEERING, PRODUCT AND DESIGN"]}
              stage={"SeriesB"}
              badge="S23"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
