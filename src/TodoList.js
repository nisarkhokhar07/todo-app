import React, { useCallback } from "react";
import { useState, useEffect } from "react";

export const TodoList = ({ reload, setReload }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleDelete = useCallback(
    (id) => {
      fetch("http://localhost:8000/todos/" + id, {
        method: "DELETE",
      }).then(() => {
        setReload(!reload);
      });
    },
    [reload, setReload]
  );

  useEffect(() => {
    console.log("API CALLED GET");
    fetch("http://localhost:8000/todos")
      .then((response) => {
        if (!response.ok) {
          alert("Link destroyed while fetching");
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [reload, handleDelete]);

  // const datakeys = Object.keys(data);
  return (
    <div>
      {/* datakeys.map((key) => (<li key={key.id}>{data[key].title}</li>)) */}
      {error && <div>{error.message}</div>}
      {data &&
        data.map((item) => (
          <li
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="list-of-todos"
            key={item.id}
          >
            {item.title}
            {isHovering && (
              <button
                onClick={() => handleDelete(item.id)}
                className="todo-del-btn"
              >
                Delete
              </button>
            )}
          </li>
        ))}
    </div>
  );
};
