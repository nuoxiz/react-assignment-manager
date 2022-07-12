import { useState } from "react";

const AddForm = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [module, setModule] = useState("");
  const [reminder, setReminder] = useState(false);
  //   const getTodayDate = () => {
  //     const today = new Date();
  //     let str = "";
  //     str += today.getFullYear() + "-";
  //     let month = (today.getMonth() + 1).toString();
  //     month = "0" + month + "-";
  //     str += month;
  //     str += today.getDate();
  //     return str;
  //   };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Assignment must have a name");
      return;
    } else if (day === "") {
      setDay("No Deadline Specified");
    } else if (module === undefined) {
      setModule("No Module Specified");
    }
    onAddTask({ text, module, day, reminder });
    setText("");
    setDay("");
    setReminder("");
    setModule("");
  };
  return (
    <form action="" className="task-form" onSubmit={onSubmit}>
      <label htmlFor="assignment">
        <b>Assignment:</b>
      </label>
      <br />
      <input
        type="text"
        name="assignment"
        placeholder="Brief Description..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />

      <label htmlFor="module">
        <b>Module:</b>
      </label>
      <br />
      <select
        name="module"
        id="module"
        value={module}
        onChange={(e) => {
          setModule(e.currentTarget.value);
          console.log(module);
        }}
      >
        <option value="">Please select a module</option>
        <option value="Intro to Programming">Intro to Programming</option>
        <option value="Intro to Computing">Intro to Computing</option>
      </select>
      <br />
      <label htmlFor="due-date">
        <b>Due: </b>
      </label>
      <br />
      <input
        type="date"
        name="due-date"
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
          console.log(day);
        }}
      />
      <br />
      <div className="form-check">
        <label htmlFor="reminder">
          <b>Set Reminder:</b>
        </label>
        <input
          type="checkbox"
          name="reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <button
        type="submit"
        className="btn submit-btn"
        style={{ backgroundColor: "green", fontSize: "15px" }}
      >
        Add Assignment
      </button>
    </form>
  );
};

export default AddForm;
