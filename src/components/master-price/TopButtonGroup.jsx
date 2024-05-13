const TopButtonGroup = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-1 text-sm font-medium text-gray-900 bg-transparent border border-blue-900 rounded-s-sm hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          Round Trip
        </button>
        <button
          type="button"
          className="px-4 py-1 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-blue-900 hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          One Way
        </button>
        <button
          type="button"
          className="px-4 py-1 text-sm font-medium text-gray-900 bg-transparent border border-blue-900 rounded-e-sm hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
        >
          Multi City
        </button>
      </div>
    </div>
  );
};

export default TopButtonGroup;
