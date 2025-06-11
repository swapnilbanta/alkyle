import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://alkye-test-422384984803.us-central1.run.app/myapp/list/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="text">
          <h1>TEST</h1>
          <h1 className="bold">alkye</h1>
          <p>The easiest test you will ever do</p>
        </div>
      </div>

      <div className="secondary-container">
        {data.map((element) => (
          <div key={element.id} className="card">
            <img src={element.image_url} alt={element.title} className="card-image" />
            <div className="card-overlay">
              <button className="tag-button">Photography</button>
              <h3 className="card-title">{element.title}</h3>
              <p className="card-description">{element.short_description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
