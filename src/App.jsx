import { useState } from "react";

function App() {
  //  State -> variável alterada que atualiza interface -> resposta interação user
  const [message, setMessage] = useState("Hello World!");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("World Hello!");
        }}
      >
        Change Message
      </button>
    </div>
  );
}

export default App;
