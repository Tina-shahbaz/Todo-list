import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title) return;
    setTodos([...todos, title]);
    setTitle("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const moveTodo = (index, direction) => {
    const newTodos = [...todos];
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= todos.length) return; 

    [newTodos[index], newTodos[newIndex]] = [newTodos[newIndex], newTodos[index]];
    setTodos(newTodos);
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 320,
        margin: "40px auto",
        backgroundColor: "pink",
        borderRadius: 8,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "white" }}>Todos List</h1>
      <form onSubmit={addTodo} style={{ display: "flex", gap: "10px" }}>
        <input
          value={title}
          placeholder="Enter"
          onChange={(e) => setTitle(e.target.value)}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: 20 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              backgroundColor: "#fff",
              borderRadius: 4,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              marginBottom: 8,
            }}
          >
            <span>{todo}</span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button
                onClick={() => moveTodo(index, -1)}
                style={{
                  backgroundColor: "hotpink",
                  color: "white",
                  border: "none",
                  padding: "6px 8px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                UP
              </button>
              <button
                onClick={() => moveTodo(index, 1)}
                style={{
                  backgroundColor: "skyblue",
                  color: "white",
                  border: "none",
                  padding: "6px 8px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                DOWN
              </button>
              <button
                onClick={() => deleteTodo(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}