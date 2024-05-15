import { useState } from "react";
import "./App.css";
import { getUsers } from "../network/api";

function App() {
  const [content, setContent] = useState("");

  async function getApiUsers() {
    const users = await getUsers();
    setContent(JSON.stringify(users, null, 2));
  }

  return (
    <>
      <h1>REST API Demo</h1>
      <div className="card">
        <button onClick={getApiUsers}>Get Users</button>
      </div>
      <pre>{content}</pre>
    </>
  );
}

export default App;
