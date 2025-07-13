import React from "react";

const FilterSidebar = ({ search, setSearch, status, setStatus, date, setDate }) => {
  return (
    <aside className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xs mb-8 lg:mb-0 lg:mr-8">
      <h2 className="text-xl font-bold mb-4 text-gray-900">Filter IPOs</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Search Company</label>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Type company name..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Closed">Closed</option>
          <option value="Listed">Listed</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Open Date</label>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </aside>
  );
};

export default FilterSidebar; 