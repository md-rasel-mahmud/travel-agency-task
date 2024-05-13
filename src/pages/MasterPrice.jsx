import ComponentHeading from "../components/ComponentHeading";
import FilterActionBar from "../components/master-price/FilterActionBar";
import FilterInputBar from "../components/master-price/FilterInputBar";
import TopButtonGroup from "../components/master-price/TopButtonGroup";

const MasterPrice = () => {
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

  return (
    <div>
      <ComponentHeading heading="Master Price" />

      <TopButtonGroup />

      <form onSubmit={handleSubmit}>
        <FilterInputBar />
        <FilterActionBar />
      </form>
    </div>
  );
};

export default MasterPrice;
