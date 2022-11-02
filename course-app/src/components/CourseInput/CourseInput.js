import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";

const CourseInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setValid] = useState(true);
  const InputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    //send value to list items
    if (inputValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddItem(inputValue);
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{ borderColor: !isValid ? "red" : "#8b005d" }}
          type="text"
          onChange={InputChange}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
