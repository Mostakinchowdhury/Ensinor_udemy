import { Search } from "lucide-react";
import React from "react";

const FilterInstructor = () => {
  return (
    <div className="w-full flex text-black justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl p-4 md:p-6">
        
        <form className="flex flex-col md:flex-row gap-3 w-full">
          
          {/* Search with icon */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            
            <input
              type="search"
              placeholder="Search instructor..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-loginbg focus:border-loginbg
              transition"
            />
          </div>

          {/* Category */}
          <select
            className="w-full md:flex-1 px-4 py-3 border border-slate-300 rounded-xl 
            focus:outline-none focus:ring-2 focus:ring-loginbg focus:border-loginbg
            transition"
          >
            <option>Category</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Business</option>
          </select>

          {/* Sort */}
          <select
            className="w-full md:flex-1 px-4 py-3 border border-slate-300 rounded-xl 
            focus:outline-none focus:ring-2 focus:ring-loginbg focus:border-loginbg
            transition"
          >
            <option>Sort by</option>
            <option>Most Viewed</option>
            <option>Recently Searched</option>
            <option>Top Rated</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 font-semibold bg-loginbg text-black rounded-xl hover:bg-loginbg/80 transition"
          >
            Filter results
          </button>

        </form>

      </div>
    </div>
  );
};

export default FilterInstructor;