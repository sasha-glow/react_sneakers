import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// const arr = [
//   {
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 12999,
//     "imageUrl": "img/sneakers/01.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Air Max 270",
//     "price": 15999,
//     "imageUrl": "img/sneakers/02.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 8499,
//     "imageUrl": "img/sneakers/03.jpg"
//   },
//   {
//     "title": "Кроссовки Puma X Aka Boku Future Rider",
//     "price": 9999,
//     "imageUrl": "img/sneakers/04.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Under Armour Curry 8",
//     "price": 15199,
//     "imageUrl": "img/sneakers/05.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Kyrie 7",
//     "price": 11299,
//     "imageUrl": "img/sneakers/06.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Jordan Air Jordan 11",
//     "price": 10799,
//     "imageUrl": "img/sneakers/07.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike LeBron XVIII",
//     "price": 16499,
//     "imageUrl": "img/sneakers/08.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Lebron XVIII Low",
//     "price": 13999,
//     "imageUrl": "img/sneakers/09.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 8499,
//     "imageUrl": "img/sneakers/03.jpg"
//   },
//   {
//     "title": "Кроссовки Puma X Aka Boku Future Rider",
//     "price": 9999,
//     "imageUrl": "img/sneakers/04.jpg"
//   },
//   {
//     "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//     "price": 11299,
//     "imageUrl": "img/sneakers/10.jpg"
//   }
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://686fbc5f91e85fac42a2531d.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });
    axios
      .get("https://686fbc5f91e85fac42a2531d.mockapi.io/cart")
      .then((response) => {
        setCartItems(response.data);
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
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кросовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="cu-p clear"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            )}
            <input
              onChange={oninputSeacrh}
              type="text"
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex cards">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
