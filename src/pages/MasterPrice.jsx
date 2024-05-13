import ComponentHeading from "../components/ComponentHeading";
import FilterActionBar from "../components/master-price/FilterActionBar";
import FilterInputBar from "../components/master-price/FilterInputBar";
import TopButtonGroup from "../components/master-price/TopButtonGroup";

const MasterPrice = () => {
  return (
    <div>
      <ComponentHeading heading="Master Price" />

      <TopButtonGroup />

      <FilterInputBar />

      <FilterActionBar />
    </div>
  );
};

export default MasterPrice;
