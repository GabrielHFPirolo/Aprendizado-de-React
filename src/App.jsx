import { useState } from "react";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "My first task",
      description: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "My Second task",
      description: "Learn ....",
      isCompleted: false,
    },
    {
      id: 3,
      title: "My third task",
      description: "Study ....",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      }

      return tasks;
    });

    setTasks(newTasks);
  }
  //  State -> variável alterada que atualiza interface -> resposta interação user
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tasks Manager
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
