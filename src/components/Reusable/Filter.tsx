import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

interface FilterProps {
  batches: string[];
  industries: string[];
}

const Filter: React.FC<FilterProps> = ({ batches, industries }) => {
  const [selectedBatches, setSelectedBatches] = useState<string[]>([]);
  const [allBatchesSelected, setAllBatchesSelected] = useState<boolean>(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [allIndustriesSelected, setAllIndustriesSelected] =
    useState<boolean>(false);

  const handleBatchChange = (batch: string, checked: boolean) => {
    setAllBatchesSelected(false);
    setSelectedBatches((prevState) =>
      checked
        ? [...prevState, batch]
        : prevState.filter((option) => option !== batch)
    );
  };

  const handleAllBatchesChange = (checked: CheckedState) => {
    const isChecked = checked === true;
    setAllBatchesSelected(isChecked);
    if (isChecked) {
      setSelectedBatches([]);
    }
  };

  const handleIndustryChange = (industry: string, checked: boolean) => {
    setAllIndustriesSelected(false);
    setSelectedIndustries((prevState) =>
      checked
        ? [...prevState, industry]
        : prevState.filter((option) => option !== industry)
    );
  };

  const handleAllIndustriesChange = (checked: CheckedState) => {
    const isChecked = checked === true;
    setAllIndustriesSelected(isChecked);
    if (isChecked) {
      setSelectedIndustries([]);
    }
  };

  return (
    <div className="w-64 flex gap-6 flex-col bg-[#191919] px-5 py-4 rounded-lg">
      <h2 className="text-lg base text-white font-semibold">Filter</h2>
      {/* Batches */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-white font-semibold">Batches</p>
        <label className="flex items-center">
          <Checkbox
            className="h-5 w-5 border-[#999999] border-2"
            checked={allBatchesSelected}
            onCheckedChange={handleAllBatchesChange}
          />
          <span className="ml-2.5 text-white">All batches</span>
        </label>
        {batches.map((batch) => (
          <label className="flex items-center" key={batch}>
            <Checkbox
              className="h-5 w-5 border-[#999999] border-2"
              checked={selectedBatches.includes(batch) && !allBatchesSelected}
              onCheckedChange={(checked: CheckedState) =>
                handleBatchChange(batch, checked === true)
              }
            />
            <span className="ml-2.5 text-white">{batch}</span>
          </label>
        ))}
      </div>
      {/* Industries */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-white font-semibold">Industries</p>
        <label className="flex items-center">
          <Checkbox
            className="h-5 w-5 border-[#999999] border-2"
            checked={allIndustriesSelected}
            onCheckedChange={handleAllIndustriesChange}
          />
          <span className="ml-2.5 text-white">All industries</span>
        </label>
        {industries.map((industry) => (
          <label className="flex items-center" key={industry}>
            <Checkbox
              className="h-5 w-5 border-[#999999] border-2"
              checked={
                selectedIndustries.includes(industry) && !allIndustriesSelected
              }
              onCheckedChange={(checked: CheckedState) =>
                handleIndustryChange(industry, checked === true)
              }
            />
            <span className="ml-2.5 text-white">{industry}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
