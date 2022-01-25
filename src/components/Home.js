import './App.css';
import world_globe from '../img/world_globe.png';

const Home = ( { handleClick } ) => {


  return (
    <div className="App">

      <header >

        <h1>
          Faraway Facts
        </h1>
        <p>
          Far and away the best geo-learning app
        </p>

        <img src={world_globe} alt="Globe" />
        <br />
        <button onClick={handleClick}>Start Learning</button>

      </header>

    </div>
  );
}

export default Home;