import { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map((p) => (
          <li key={p.id}>
            <h1>{p.id}</h1>
            <h1>{p.body}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
