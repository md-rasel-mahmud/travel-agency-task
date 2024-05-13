import PropTypes from "prop-types";

/**
 *
 * @param {Array} data
 * @param {Array} columns
 * @returns {JSX.Element}
 * @constructor
 * @description Table component to render table with data and columns
 * @example
 * const data = [
 * { id: 1, name: 'John Doe', email: 'demo@mail.com' },
 * ]
 * const columns = [
 * { name: 'ID', accessor: 'id' },
 * { name: 'Name', accessor: 'name' },
 * { name: 'Email', accessor: 'email' },
 * ]
 * <Table data={data} columns={columns} />
 */
const Table = ({ data = [], columns }) => {
  return (
    <div>
      <div className="relative overflow-x-auto border rounded">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {/* RENDER TABLE COLUMN */}
              {columns.map((column, i) => (
                <th key={i} scope="col" className="px-6 py-3">
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* RENDER TABLE CELL MATCHED OF TABLE COLUMN DATA */}
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex} className="bg-white border-b">
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className="px-6 py-4 whitespace-nowrap "
                  >
                    {column.cell ? column.cell(row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default Table;
