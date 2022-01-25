import './App.css';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Map = () => {

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Faraway Facts
        </h1>
        <p>
          Far and away the best geo-learning app
        </p>

        <ComposableMap>
          <Geographies geography={geoUrl}>
            {( { geographies } ) =>
              geographies.map( geo => <Geography key={geo.rsmKey} geography={geo} /> )
            }
          </Geographies>
        </ComposableMap>

      </header>
    </div>
  );
}

export default Map;