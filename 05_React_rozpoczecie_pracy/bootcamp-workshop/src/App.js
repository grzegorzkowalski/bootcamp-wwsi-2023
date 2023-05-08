import Calculator from "./components/Calculator";
import artist from './data/artist';
import fruits from "./data/fruits";
import './App.css';

function App() {
  // const numberA = parseInt(prompt("Podaj liczbę A?"));
  // const numberB = parseInt(prompt("Podaj liczbę B?"));
  // const birthYear = parseInt(prompt("Podaj rok urodzenia?"));
    const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
  return (
    <div className="App">
      <div className="App-header">
        {/*<h1>{ numberA + numberB }</h1>*/}
        {/*<h1>Twój wiek to: {new Date().getFullYear() - birthYear}</h1>*/}
        <ul>
            <li>{artist.firstName}</li>
            <li>{artist.nickname}</li>
            <li>{artist.lastName}</li>
            <li>Wiek artysty to : {artist.age}</li>
        </ul>
          <img src={imageUrl} alt="samochód" />
        <Calculator />
        <p>Owoce: {fruits.length}</p>
        <p>{fruits.join("-")}</p>
      </div>
    </div>
  );
}

export default App;
