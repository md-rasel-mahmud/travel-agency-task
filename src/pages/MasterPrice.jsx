import ComponentHeading from "../components/ComponentHeading";
import FilterActionBar from "../components/master-price/FilterActionBar";
import FilterInputBar from "../components/master-price/FilterInputBar";
import ButtonGroup from "../components/master-price/TopButtonGroup";
import { useState } from "react";
import Table from "../components/Table";
import { tableColumns } from "../helpers/master-price/tableColumns";

const MasterPrice = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // GET FORM TARGET
    const { target } = e;

    // GET FORM DATA
    const formData = {
      extraOption: target.extraOption.checked,
      environment: target.environment.value,
      departure: target.departure.value,
      dayMinus: target.dayMinus.value,
      dayPlus: target.dayPlus.value,
      time: target.time.value,
      adt: target.adt.value,
      passengerCount: target.passengerCount.value,
    };

    try {
      setIsLoading(true);
      const response = await fetch("/data/LHR_CDG_ADT1_TYPE_1.txt");
      const jsonData = await response.json();

      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);

      // SET ERROR DATA
      setData({
        code: "500",
        error: "Error fetching data",
        data: [],
        message: error.message,
      });
    }

    console.log("formData", formData);
  };

  // BUTTON DATA
  const buttonData = [
    {
      title: "Round Trip",
      onClick: () => console.log("Round Trip"),
    },
    {
      title: "One Way",
      onClick: () => console.log("One Way"),
    },
    {
      title: "Multi City",
      onClick: () => console.log("Multi City"),
    },
  ];

  return (
    <div>
      {/* COMPONENT HEADING */}
      <ComponentHeading heading="Master Price" />

      {/* TOP TAB BUTTON GROUP */}
      <ButtonGroup buttonData={buttonData} />

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

      {/* SHOW MESSAGE TO UI */}
      {data?.code == "200" ? (
        <>
          <ComponentHeading heading={data.message} />

          {/* TABLE */}
          <Table data={data?.flightOffer || []} columns={tableColumns} />
        </>
      ) : (
        // SHOW ERROR MESSAGE TO UI
        <div>
          <h2 className="text-xl font-bold text-red-600">{data.error}</h2>
          <p className="text-sm text-red-800">{data.message}</p>
        </div>
      )}
    </div>
  );
};

export default MasterPrice;
