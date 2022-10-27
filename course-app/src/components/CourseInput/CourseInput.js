import React, { useState } from "react";
import "./CourseInput.css";

const CourseInput = (props) => {
  return (
    <form>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" />
      </div>
      <button>Add Goal</button>
    </form>
  );
};

export default CourseInput;
