import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/sasha-glow/react_sneakers/sneakers"
      )
      .then((response) => {
        setItems(response.data);
      });
    axios
      .get("https://686fbc5f91e85fac42a2531d.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);
      });
    axios
      .get("https://686fbc5f91e85fac42a2531d.mockapi.io/favorite")
      .then((response) => {
        setFavorites(response.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://686fbc5f91e85fac42a2531d.mockapi.io/cart", obj);
    const itemExist = cartItems.some((item) => item.title === obj.title);
    if (!itemExist) setCartItems((prev) => [...prev, obj]);
  };

  const removeFromCart = (id) => {
    axios.delete(`https://686fbc5f91e85fac42a2531d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const oninputSeacrh = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://686fbc5f91e85fac42a2531d.mockapi.io/favorite", obj);
    const itemExist = favorites.some((item) => item.title === obj.title);
    if (!itemExist) setFavorites((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemove={(obj) => removeFromCart(obj)}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              oninputSeacrh={oninputSeacrh}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route 
          path="/favorites" 
          exact  
          element={
          <Favorites
            items={favorites}
            onAddToFavorite={onAddToFavorite}
          />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;