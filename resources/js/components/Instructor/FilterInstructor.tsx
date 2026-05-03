import { Search } from "lucide-react";
import React, { useState } from "react";

const FilterInstructor = () => {
  // ✅ Proper state naming
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  // ✅ Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      search,
      category,
      sort,
    };

    console.log("Filter Data:", formData);

    // 👉 Here you can call API / filter logic
  };

  return (
    <div className="w-full flex text-black justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl p-4 md:p-6">
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3 w-full"
        >
          
          {/* Search with icon */}
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            
            <input
              type="search"
              placeholder="Search instructor..."
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              className="w-full pl-10 pr-4 py-3 border border-text50 bg-[#F3F6F7] rounded-xl 
              focus:outline-none 
              transition"
            />
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setCategory(e.target.value)
            }
            className="w-full md:flex-1 px-4 py-3 border  rounded-xl 
            focus:outline-none border-text50 bg-[#F3F6F7]
            transition"
          >
            <option value="">Category</option>
            <option value="web">Web Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="business">Business</option>
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSort(e.target.value)
            }
            className="w-full md:flex-1 px-4 py-3 border  rounded-xl 
            focus:outline-none border-text50 bg-[#F3F6F7]
            transition"
          >
            <option value="">Sort by</option>
            <option value="views">Most Viewed</option>
            <option value="recent">Recently Searched</option>
            <option value="rating">Top Rated</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 font-medium bg-loginbg text-text26 rounded-xl hover:bg-loginbg/80 transition"
          >
            Filter results
          </button>

        </form>

      </div>
    </div>
  );
};

export default FilterInstructor;