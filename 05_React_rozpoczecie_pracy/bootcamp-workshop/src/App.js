import Search from "./components/Chapter04/Search";
import LikeBox from "./components/Chapter04/LikeBox";
import Menu from "./components/Chapter04/Menu";
import Hello from "./components/Chapter05/Hello";
import AddNumbers from "./components/Chapter05/AddNumbers";
import Sum from "./components/Chapter05/Sum";
import CurrencyConverter from "./components/Chapter05/CurrencyConverter";
import menuList from "./data/menu";
import './App.css';
import ParentComponent from "./components/Chapter06/ParentComponent";
import ShopItem from "./components/Chapter06/ShopItem";
import ShopList from "./components/Chapter06/ShopList";
import shopItem from "./data/shopItem";
import shopItems from "./data/shopItems";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/*<Search />*/}
        {/*<LikeBox likes={500} />*/}
        {/*<Menu list={menuList} />*/}
        {/*<Hello name="Grzegorz" surname="Kowalski" nickname="Kowal" />*/}
        {/*<AddNumbers numberA={4} numberB={5} />*/}
        {/*<Sum tab={[1,2,3,4,5,6,7]} />*/}
        {/*<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />*/}
        {/*<CurrencyConverter from="EUR" to="PLN" value={200} rate={4.5} />*/}
        {/*<CurrencyConverter from="EUR" to="CHF" value={200} rate={1.3} />*/}
        <ParentComponent />
        <ShopItem item={shopItem} />
        <ShopList items={shopItems} />
      </div>
    </div>
  );
}

export default App;
