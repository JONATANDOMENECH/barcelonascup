import logo from './logo.png';
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet'

function App() {
  return (
    <div className="App">

      <MapContainer 
      center={[38.58, -9.44]} 
      minZoom={8} maxZoom={11} zoom={11} 
      scrollWheelZoom={false}>

           <TileLayer
            attribution='&copy; <a href="https://www.esa.int/">EuropeanSpaceAgency</a> contributors'
            url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
            //"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
           <TileLayer
            attribution='&copy; <a href="https://www.who.int/news/item/13-07-2021-who-launches-guidelines-for-recreational-water-quality-as-summer-heats-up">WorldHealthOrganization</a> contributors'
            url="https://test-tileserver.s3.eu-central-1.amazonaws.com/CDOM/{z}/{x}/{y}.png"
          />
      </MapContainer>
      
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
