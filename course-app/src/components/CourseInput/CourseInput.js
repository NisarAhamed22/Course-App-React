import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";

const CourseInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const InputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    //send value to list items
    props.onAddItem(inputValue);
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={InputChange} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
