import React from "react";

const PersonalData = () => {
  return (
    <div className="bg-white px-4">
      
      {/* Header */}
      <div className="mb-3">
        <h1 className="text-2xl md:text-3xl font-bold">
          Hafizur Rahman
        </h1>
        <p className="text-sm text-slate-600 font-medium">
          Full Stack Web Developer
        </p>
      </div>

      {/* Divider */}
      <div className="border-t my-4"></div>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed">
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