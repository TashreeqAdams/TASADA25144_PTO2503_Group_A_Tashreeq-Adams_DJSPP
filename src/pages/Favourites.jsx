import { useState, useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import styles from "./Favourites.module.css";

export default function FavouritesPage() {
  const { favourites } = useContext(FavouritesContext);

  if (!favourites || favourites.length === 0) {
    return <p>No favourites yet! Go like some episodes. ❤️</p>;
  }

  return (
    <div className={styles.favourites}>
      <h1>My Favourites</h1>
      <div>
        {favourites.map((fav) => (
          <div
            key={fav.episodeId}
            style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}
          >
            {fav.image && <img src={fav.image} alt={fav.title} width="100" />}

            <h3>{fav.title}</h3>
            <p>
              <strong>Show ID:</strong> {fav.showId}
            </p>
            <p>
              <strong>Season:</strong> {fav.seasonNumber}
            </p>
            <p>
              <strong>Description:</strong> {fav.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
