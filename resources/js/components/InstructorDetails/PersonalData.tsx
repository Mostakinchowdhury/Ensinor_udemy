import React from "react";

const PersonalData = () => {
  return (
    <div className="bg-white px-4">
      
      {/* Header */}
      <div className="mb-3">
        <h1 className="text-2xl md:text-[32px] text-[#000000] font-semibold">
          Hafizur Rahman
        </h1>
        <p className="text-[16px] text-text50 font-medium">
          Full Stack Web Developer
        </p>
      </div>

      {/* Description */}
      <p className="text-[#606060] mt-8 text-[16px] leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quasi atque, asperiores neque, ipsam inventore culpa maxime
        facilis vel reprehenderit accusamus, voluptates consequuntur
        fuga iste! Fugiat distinctio a aliquam iure, soluta quis
        repellat dolorem dolor sapiente? Eveniet, nesciunt
        repudiandae? Similique nisi officia ipsam quos fugit
        excepturi veritatis culpa dolores delectus est.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempore, harum. Non, modi? Officiis neque non ratione in
        voluptates? Voluptatum, reiciendis.
      </p>
    </div>
  );
};

export default PersonalData;