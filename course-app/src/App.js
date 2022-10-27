//import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseInput/CourseInput";

function App() {
  return (
    <div>
      <section id="goal-form">
        <CourseInput></CourseInput>
      </section>
    </div>
  );
}

export default App;
