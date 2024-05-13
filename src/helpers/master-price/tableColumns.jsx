import Button from "../../components/Button";
import MultipleCell from "../../components/MultipleCell";

export const tableColumns = [
  {
    name: "Flight",
    cell: (row) => {
      const flight = row?.itineraries[0].segments;

      return <MultipleCell cell={flight} keys={["carrierCode", "aircraft"]} />;
    },
  },
  {
    name: "Aircraft",
    cell: (row) => {
      const aircraft = row?.itineraries[0].segments;

      return <MultipleCell cell={aircraft} keys={["aircraft"]} />;
    },
  },
  {
    name: "class",
    cell: (row) => {
      const classType = row?.class[0];

      return <MultipleCell cell={classType} />;
    },
  },
  {
    name: "fare",
    cell: (row) => {
      const fareBasis = row?.fareBasis[0];

      return <MultipleCell cell={fareBasis} />;
    },
  },
  {
    name: "route",
    cell: (row) => {
      // GET ROUTES FROM SEGMENTS ARRAY AND MAP THEM TO DEPARTURE AND ARRIVAL IATA CODES
      const routes = row?.itineraries[0].segments.map(
        ({ departure, arrival }) => ({
          departure: departure.iataCode,
          arrival: arrival.iataCode,
        })
      );

      return (
        <MultipleCell
          cell={routes}
          keys={["departure", "arrival"]}
          divider="-"
        />
      );
    },
  },
  {
    name: "departure",
    cell: (row) => {
      // GET DEPARTURE FROM SEGMENTS ARRAY AND MAP THEM TO DEPARTURE AND ARRIVAL AT
      const departure = row?.itineraries[0].segments.map(
        ({ departure, arrival }) => ({
          departure: departure.at,
          arrival: arrival.at,
        })
      );

      return (
        <MultipleCell
          cell={departure}
          keys={["departure", "arrival"]}
          divider={<span className="px-2"></span>}
        />
      );
    },
  },
  {
    name: "arrival",
    cell: () => {
      return <>----</>;
    },
  },
  {
    name: "duration",
    cell: (row) => {
      // GET DURATION FROM ITINERARIES ARRAY
      const duration = row?.itineraries[0].duration;

      return <>{duration}</>;
    },
  },
  {
    name: "price",
    cell: ({ price }) => {
      return (
        <div className="flex flex-col gap-2 justify-center items-center">
          {price}
          <Button type="button" onClick={() => console.log("flight selected")}>
            Select
          </Button>
        </div>
      );
    },
  },
];
