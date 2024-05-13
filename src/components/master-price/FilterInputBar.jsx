const FilterInputBar = () => {
  return (
    <div className="flex gap-2 items-center flex-wrap py-3 mt-5 border-t border-b border-blue-500">
      <input
        type="text"
        id="lhr"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500 w-32"
        placeholder="LHR"
      />
      <input
        type="text"
        id="cdg"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500 w-32"
        placeholder="CDG"
      />
      <input
        type="date"
        id="departure"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-blue-500"
      />

      <select className="bg-gray-50 border border-gray-300 w-20 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  p-2.5 outline-blue-500">
        <option selected="">Day - </option>
        <option value="">1</option>
        <option value="">2</option>
      </select>

      <select className="bg-gray-50 border border-gray-300 w-20 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500  p-2.5 outline-blue-500">
        <option selected="">Day + </option>
        <option value="">1</option>
        <option value="">2</option>
      </select>

      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-32 p-2.5 outline-blue-500">
        <option selected="">Any Time</option>
        <option value="">1</option>
        <option value="">2</option>
      </select>

      <button className="font-bold text-xl">+</button>

      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-28  p-2.5 outline-blue-500">
        <option selected="">ADT</option>
        <option value="">1</option>
        <option value="">2</option>
      </select>

      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 p-2.5 w-28 outline-blue-500">
        <option selected="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>

      <button className="font-bold text-xl">+</button>
    </div>
  );
};

export default FilterInputBar;
