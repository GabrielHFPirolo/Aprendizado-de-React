import { useEffect, useState } from "react";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import "./index.css";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  // Executa a função sempre que um valor da lista for Alterado -> Hook UseEffects
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*
  //Exemplo para chamada de API utilizando REACT e UseEffect
  useEffect(() => {
    async function fetchTasksAPI() {
      //Chamar API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );

      //Pegar os dados da API
      const data = await response.json();

      //Persistir esses dados dentro do state
      setTasks(data);
    }
    fetchTasksAPI();
  }, []); //chama o useEffects apenas 1 vez -> usuário acessa a aplicação
  */

  function onTaskClick(taskId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      }

      return tasks;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((tasks) => tasks.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  //  State -> variável alterada que atualiza interface -> resposta interação user
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tasks Manager
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      </div>
    </div>
  );
}

export default App;
