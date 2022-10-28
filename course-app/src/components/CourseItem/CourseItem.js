import React, { useState } from "react";
import "./CourseItem.css";

const CourseItem = (props) => {
  //const [deleteItem]
  const getId = () => {
    props.ondelete(props.id);
  };
  return (
    <li className="goal-item" onClick={getId}>
      {props.item}
    </li>
  );
};
export default CourseItem;
