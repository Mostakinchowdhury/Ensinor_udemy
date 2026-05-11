import { Plus, X } from "lucide-react";
import React, { useState } from "react";

type AccordionProps = {
  title: string;
  description: string;
  defaultOpen?: boolean;
};

const QNAccordion = ({
  title,
  description,
  defaultOpen = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full rounded-2xl bg-[#F3F6F7] py-3 px-4 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        
        <h1 className="text-md md:text-[18px] font-semibold text-[#303030]">
          {title}
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center bg-[#FFFFFF] text-yellow-500 justify-center rounded-full  transition hover:scale-105"
        >
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </button>
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-sm md:text-[16px] leading-relaxed text-text50">
          {description}
        </p>
      </div>
    </div>
  );
};

export default QNAccordion;