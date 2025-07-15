import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="mb-40 d-flex align-center justify-between">
        <h1>My favorites</h1>
      </div>

      <div className="d-flex cards">
        {items
          .map((item) => (
            <Card
              key={item.id}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
