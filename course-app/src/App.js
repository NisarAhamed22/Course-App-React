//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseInput/CourseInput";
import CourseList from "./components/CourseGoalList/CourseList";

function App() {
  const [listData, setListData] = useState([
    { id: "1", text: "Do Exercise" },
    { id: "2", text: "Finish the Course" },
  ]);
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  const deleteItem = (id) => {
    const deletelist = listData.filter((items) => items.id !== id);
    setListData(deletelist);
  };
  if (listData.length > 0) {
    content = (
      <CourseList items={listData} onDeleteItem={deleteItem}></CourseList>
    );
  }
  const addItem = (prevValue) => {
    const updateList = [...listData];
    updateList.push({ id: Math.random().toString(), text: prevValue });
    console.log(updateList);
    setListData(updateList);
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddItem={addItem}></CourseInput>
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
