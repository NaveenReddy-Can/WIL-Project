import React from "react";
import "./css/Courses.css";
import Quiz1 from "./Quizzes/Quiz1";
import Quiz2 from "./Quizzes/Quiz2";
import Quiz3 from "./Quizzes/Quiz3";
import Quiz4 from "./Quizzes/Quiz4";
import React1, { useState } from "react";
import Buttons from "./Quizzes/Buttons";
import CourseDisplay from "./CoursesDisplay";
import CourseModule1 from "./CourseModule1";
import CardComponent from "./CourseListCards";
import CourseModule2 from "./Courses/CourseModule2";
import CourseModule3 from "./Courses/CourseModule4";
import CourseModule4 from "./Courses/CoursesModule3";

const Courses = () => {
  return (
    <div className="OutGrid">
      <h2>Courses On Trending </h2>
      <CardComponent />
    </div>
  );
};

export default Courses;
