import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";

const CourseInput = (props) => {
  return (
    <form>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
