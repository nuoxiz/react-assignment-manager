import Button from "./Button";
const Header = ({ title, textColor, onClickAddTask, showTaskForm }) => {
  return (
    <div className="header">
      <h2 style={{ color: textColor }}>{title}</h2>
      {/* {shouldShowTaskForm ? <Button text={`Task`} color={"green"} /> : ""} */}
      {showTaskForm ? (
        <Button
          text={"Close"}
          color={"red"}
          onClickAddTask={onClickAddTask}
        />
      ) : (
        <Button text={`Task`} color={"green"} onClickAddTask={onClickAddTask} />
      )}
    </div>
  );
};

export default Header;
