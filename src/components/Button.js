const Button = ({ text, color, onClickAddTask }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={onClickAddTask}
      >
        <h3>
          {text}
          
        </h3>
      </button>
    </div>
  );
};

export default Button;
