import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  oninputSeacrh,
  onAddToFavorite,
  onAddToCart
}) {
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кросовки"}
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
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
