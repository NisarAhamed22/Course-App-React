import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type} className="button">
      Add Goal
    </button>
  );
};

export default Button;
