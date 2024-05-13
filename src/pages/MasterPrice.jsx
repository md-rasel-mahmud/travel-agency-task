import { useEffect } from "react";
import ComponentHeading from "../components/ComponentHeading";
import FilterActionBar from "../components/master-price/FilterActionBar";
import FilterInputBar from "../components/master-price/FilterInputBar";
import TopButtonGroup from "../components/master-price/TopButtonGroup";
import { useState } from "react";

const MasterPrice = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // HANDLE FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    // GET FORM TARGET
    const { target } = e;

    // GET FORM DATA
    const data = {
      extraOption: target.extraOption.checked,
      environment: target.environment.value,
      departure: target.departure.value,
      dayMinus: target.dayMinus.value,
      dayPlus: target.dayPlus.value,
      time: target.time.value,
      adt: target.adt.value,
      passengerCount: target.passengerCount.value,
    };

    console.log(data);
  };

  useEffect(() => {
    // FETCH DATA FROM TEXT FILE IN DATA FOLDER AND PARSE IT TO JSON
    const fetchAndParseData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/LHR_CDG_ADT1_TYPE_1.txt");
        const jsonData = await response.json();

        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    // CALL FUNCTION
    fetchAndParseData();
  }, []);

  console.log(data);

  return (
    <div>
      <ComponentHeading heading="Master Price" />
      {/* TOP BUTTON GROUP */}
      <TopButtonGroup />
      {/* FILTER BAR */}
      <form onSubmit={handleSubmit}>
        <FilterInputBar />
        <FilterActionBar />
      </form>
      {/* LOADING */}
      {isLoading && (
        <h3 className="text-xl font-bold inline py-1 animate-pulse">
          Loading...
        </h3>
      )}

      {/* DATA */}
      {data?.code == "200" && (
        <div>
          <ComponentHeading heading={data.message} />
        </div>
      )}
    </div>
  );
};

export default MasterPrice;
