import Card from './components/Card';

function App() {
  return (
    <div className="wrapper clear">

      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between align-center mb-30">
            Корзина
            <img
              className="removeBtn cu-p"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </h2>

          <div className="cartItems">
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/01.jpg"
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="/img/sneakers/01.jpg"
                alt="Sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="/img/btn-arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.png" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.png" alt="user" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className="">Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/02.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src="/img/plus.png" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/03.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src="/img/plus.png" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/04.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src="/img/plus.png" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
