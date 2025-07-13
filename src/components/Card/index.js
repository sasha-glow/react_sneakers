import React from "react";
import styles from "./Card.module.scss";

function Card({ title, price, imageUrl, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/heart-liked.svg" : "img/heart-unliked.svg"}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="In Cart ?"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
