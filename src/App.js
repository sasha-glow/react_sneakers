import React from "react";
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

  React.useEffect(() => {
    fetch('https://686fbc5f91e85fac42a2531d.mockapi.io/items')
      .then(response => response.json())
      .then(json => setItems(json));
  }, []);
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer 
          onClose={() => setCartOpened(false)}
          items={cartItems} 
        />
      }
      <Header
        onClickCart={() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className="">Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex cards">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={() => console.log("Нажали на плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
