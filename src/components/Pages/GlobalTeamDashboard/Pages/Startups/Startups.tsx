import Filter from "@/components/Reusable/Filter";
import SearchBar from "@/components/Reusable/SearchBar";
import StartupPreview from "@/components/Reusable/StartupPreview";
import React, { useEffect, useState } from "react";

import axios from "axios";

/* import authHeader from "@/credentials/auth-header"; */

const Startups: React.FC = () => {
  let [batches, setBatches] = useState([]);
  let [industries, setIndustries] = useState([]);
  let [startups, setStartups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBatches, setSelectedBatches] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  useEffect(() => {
    getBatches();
    getIndustries();
    getStartups();
  }, []);

  useEffect(() => {
    getStartups();
  }, [selectedBatches, selectedIndustries, searchTerm]);

  const getBatches = () => {
    setIsLoading(true);
    axios
      .post(
        "http://3.75.226.182:8080/api/appuser/getEnums",
        {},
        { /* headers: authHeader(), */ withCredentials: true }
      )
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
          setBatches(response.data.batch);
        } else {
          console.log(response);
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              response.data.message
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        if (error?.response?.status == 403) {
          window.location.assign("/");
        }
        if (error.response) {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.response.data.message
          );
        } else if (error.request) {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.request
          );
        } else {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.message
          );
        }
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  const getIndustries = () => {
    setIsLoading(true);
    axios
      .post(
        "http://3.75.226.182:8080/api/industry/get",
        {},
        { /* headers: authHeader(), */ withCredentials: true }
      )
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
          setIndustries(
            response.data.industries.map(
              (industry: { name: string }) => industry.name
            )
          );
        } else {
          console.log(response);
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              response.data.message
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        if (error?.response?.status == 403) {
          window.location.assign("/");
        }
        if (error.response) {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.response.data.message
          );
        } else if (error.request) {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.request
          );
        } else {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.message
          );
        }
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  const getStartups = () => {
    setIsLoading(true);
    axios
      .post(
        "http://3.75.226.182:8080/api/appuser/getStartups",
        {
          filter: {
            nameFilter: searchTerm,
            industryfilter: selectedIndustries,
            batchFilter: selectedBatches,
          },
        },
        { /* headers: authHeader(), */ withCredentials: true }
      )
      .then((response) => {
        if (response.status == 200) {
          console.log(
            response.data.startups.rows,
            searchTerm,
            selectedBatches,
            selectedIndustries
          );
          setStartups(response.data.startups.rows);
        } else {
          console.log(response);
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              response.data.message
          );
        }
        setIsLoading(false);
      })
      .catch((error) => {
        if (error?.response?.status == 403) {
          window.location.assign("/");
        }
        if (error.response) {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.response.data.message
          );
        } else if (error.request) {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.request
          );
        } else {
          setError(
            "Etwas ist schief gelaufen! Folgender Fehler ist aufgetreten: " +
              error.message
          );
        }
        setIsLoading(false);
      });
    setIsLoading(false);
  };
  return (
    <div className="h-full flex flex-col p-12 gap-14">
      <h1 className="font-bold text-white text-4xl">STARTUPS</h1>
      <div className="flex flex-row gap-10">
        <Filter
          batches={batches}
          industries={industries}
          onBatchesChange={setSelectedBatches}
          onIndustriesChange={setSelectedIndustries}
        />
        <div className="w-full flex flex-col gap-10">
          <SearchBar onSearch={(searchTerm) => setSearchTerm(searchTerm)} />
          <div className="w-full flex gap-4 flex-col bg-[#191919] px-5 py-4 rounded-lg">
            <p className="font-regular text-white text-sm">
              Showing {startups.length} of 1000+ companies
            </p>
            {startups.map((startup, index) => (
              <StartupPreview
                key={index}
                startupName={startup.name}
                location={startup.region}
                logo={"./Productlogo.png"}
                description={startup.description}
                industrials={startup.startup_industries}
                stage={startup.status}
                badge={startup.batch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
