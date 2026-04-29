import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const PageChange = () => {
  return (
    <div className="flex items-center gap-2">
      
      {/* Previous */}
      <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-100 transition">
        <ArrowLeft size={18} />
      </button>

      {/* Pages */}
      <button className="w-9 h-9 rounded-lg bg-loginbg text-black font-medium">
        1
      </button>
      <button className="w-9 h-9 rounded-lg border border-slate-300 hover:bg-slate-100 transition">
        2
      </button>
      <button className="w-9 h-9 rounded-lg border border-slate-300 hover:bg-slate-100 transition">
        3
      </button>

      <button className="w-9 h-9 rounded-lg border border-slate-300 hover:bg-slate-100 transition">
        ..
      </button>

      <button className="w-9 h-9 rounded-lg border border-slate-300 hover:bg-slate-100 transition">
        10
      </button>

      {/* Next */}
      <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-100 transition">
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default PageChange;