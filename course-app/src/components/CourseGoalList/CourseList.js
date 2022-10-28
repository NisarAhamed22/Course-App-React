import CourseItem from "../CourseItem/CourseItem";
import "./CourseList.css";

const CourseList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((listItem) => (
        <CourseItem key={listItem.id} id={listItem.id} item={listItem.text} />
      ))}
    </ul>
  );
};

export default CourseList;
