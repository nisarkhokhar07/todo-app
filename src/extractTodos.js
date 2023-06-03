import { useEffect, useState } from "react";
const ExtractTodos = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

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
  }, []);
  return { data, error };
};

export default ExtractTodos;
