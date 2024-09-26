import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} className="py-2 px-4 border-b border-gray-200">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col, i) => (
              <td key={i} className="py-2 px-4 border-b border-gray-200">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
