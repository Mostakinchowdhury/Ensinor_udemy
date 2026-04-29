import React from "react";
import CourseCard from "./CourseCard";
import PageChange from "./PageChange";

const CourseListContainer = () => {
  return (
    <div className="my-10 px-4 max-w-6xl mx-auto">
      
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">Course List</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <PageChange />
      </div>
    </div>
  );
};

export default CourseListContainer;