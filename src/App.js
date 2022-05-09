import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        The Official website of Barcelona's Cup. The competition for the newest trophy in international pollution
        </p>
        <iframe
        width="620" height="350" src="https://www.youtube.com/embed/I3DrIJv4r60"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
        <a
          className="App-link"
          href="https://americascup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Barcelona 37th America's Cup
        </a>
      </header>
    </div>
  );
}

export default App;
