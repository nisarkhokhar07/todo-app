import React, { useState } from "react";

export const AddTodo = ({ setReload, reload }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    const todos = { title };

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todos),
    })
      .then((response) => {
        if (!response.ok) {
          alert("Link not working");
          throw new Error("Response from URL is not OK!");
        }
        setTitle("");
      })
      .catch((e) => {
        alert(e);
      });

    setReload(!reload);
  };

  return (
    <div className="todo-form">
      <form>
        <label>Add a Todo Title:</label>
        <input
          type="text"
          value={title}
          id="input-field"
          required
          onChange={(e) => setTitle(e.target.value)}
          style={{
            marginTop: "5px",
            height: "30px",
            width: "100%",
            fontSize: "18px",
          }}
        />
        <button onClick={handleSubmit} className="add-btn ">
          Add
        </button>
      </form>
    </div>
  );
};
