const FilterInputBar = () => {
  return (
    <div className="flex gap-2 items-center flex-wrap py-3 mt-5 border-t border-b border-blue-500">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500 w-32"
        placeholder="LHR"
        name="lhr"
      />
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500 w-32"
        placeholder="CDG"
        name="cdg"
      />
      <input
        type="date"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500"
        name="departure"
      />

      <select
        name="dayMinus"
        className="bg-gray-50 border border-gray-300 w-20 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 outline-blue-500"
      >
        <option value="">Day - </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <select
        name="dayPlus"
        className="bg-gray-50 border border-gray-300 w-20 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  p-2.5 outline-blue-500"
      >
        <option value="">Day + </option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <select
        name="time"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-32 p-2.5 outline-blue-500"
      >
        <option value="">Any Time</option>
        <option value="1.00">1.00</option>
        <option value="2.00">2.00</option>
      </select>

      <button className="font-bold text-xl">+</button>

      <select
        name="adt"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-28  p-2.5 outline-blue-500"
      >
        <option value="">ADT</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>

      <select
        name="passengerCount"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 w-28 outline-blue-500"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button className="font-bold text-xl">+</button>
    </div>
  );
};

export default FilterInputBar;
