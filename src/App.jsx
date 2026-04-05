import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import "./index.css";

function App() {
  //  State -> variável alterada que atualiza interface -> resposta interação user
  return (
    <div>
      <h1 className="text-red-500">Tasks Manager</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
