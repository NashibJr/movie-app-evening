import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await (
        await fetch("https://api.sampleapis.com/movies/horror")
      ).json();
      setMovies(response);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
