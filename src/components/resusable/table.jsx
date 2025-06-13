const GlobalTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto grid grid-cols-1 rounded-md">
      <table className="min-w-full border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col, j) => (
                <td key={j} className="whitespace-nowrap px-4 py-5 text-sm text-gray-800 dark:text-gray-100">
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalTable;
