import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddForm from "./components/AddForm";
import Footer from "./components/Footer";
function App() {
  const [tasks, setTasks] = useState("");
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  console.log(showAddTaskForm);
  useEffect(() => {
    const getTasksFromServer = async () => {
      const dataFromServer = await fetchTasks();
      setTasks(dataFromServer);
      console.log(dataFromServer);
    };
    getTasksFromServer();
  }, []);

  const addFormController = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5001/tasks");
    const data = await res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5001/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };
  const toggleReminder = async (id) => {
    const taskToUpdate = await fetchTask(id);
    const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder };
    //PUT = update
    //DELETE = delete
    //POST = create
    //GET = request data
    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    /**
     * fetch() return the updated data because method:"PUT"
     *
     */
    const data = await res.json();
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, reminder: data.reminder };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="container">
      <Header
        title="Assignment Manager"
        textColor={"black"}
        onClickAddTask={addFormController}
        showTaskForm={showAddTaskForm}
      />
      {showAddTaskForm && <AddForm onAddTask={addTask} />}
      {tasks.length === 0 ? (
        "No Assignments"
      ) : (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggleReminder={toggleReminder}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
