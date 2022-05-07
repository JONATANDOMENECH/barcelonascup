import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        The Official website of Barcelona's Cup. 
The competition for the newest trophy in international pollution
        </p>
        <a
          className="App-link"
          href="https://americascup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          America's Cup
        </a>
      </header>
    </div>
  );
}

export default App;
