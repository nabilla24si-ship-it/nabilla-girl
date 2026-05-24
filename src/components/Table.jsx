export default function Table({ headers = [], children }) {
  return (
    <div className="overflow-x-auto w-full rounded-xl border border-gray-100">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="p-4 text-gray-400 font-semibold text-xs uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 bg-white">
          {children}
        </tbody>
      </table>
    </div>
  );
}