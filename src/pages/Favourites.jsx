import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import styles from "./Favourites.module.css";

export default function FavouritesPage() {
  const { favourites } = useContext(FavouritesContext);

  if (!favourites || favourites.length === 0) {
    return <p>No favourites yet! Go like some episodes. ❤️</p>;
  }

  // 1. Sort the entire list first (optional but helps)
  const sortedFavourites = [...favourites].sort((a, b) => {
    if (a.title !== b.title) return a.title.localeCompare(b.title); // Alphabetical by show
    if (a.seasonNumber !== b.seasonNumber)
      return a.seasonNumber - b.seasonNumber; // Then Season
    return a.episodeId - b.episodeId; // Then Episode
  });

  // 2. Group by show title
  const groupedFavourites = sortedFavourites.reduce((acc, fav) => {
    const showName = fav.title; // Using the show title you saved in addFavourite
    if (!acc[showName]) {
      acc[showName] = [];
    }
    acc[showName].push(fav);
    return acc;
  }, {});

  return (
    <div className={styles.favouritesContainer}>
      <h1>My Favourites</h1>
      <div className={styles.favDetails}>
        {Object.entries(groupedFavourites).map(([showTitle, episodes]) => (
          <div key={showTitle} className={styles.showGroup}>
            {/* Show Title Heading */}
            <h2 className={styles.showTitle}>{showTitle}</h2>

            {/* Episodes under that show */}
            <div className={styles.favourites}>
              {episodes.map((fav) => (
                <div key={fav.episodeId} className={styles.favEpisode}>
                  <div className={styles.episodeImage}>
                    {fav.image && (
                      <img src={fav.image} alt={fav.title} width="100" />
                    )}
                  </div>

                  <div className={styles.episodeDetails}>
                    <p>
                      <strong>Season:</strong> {fav.seasonNumber}
                    </p>
                    <p>
                      <strong>Episode:</strong> {fav.episodeNum}
                    </p>
                    <p>
                      <strong>Description:</strong> {fav.description}
                    </p>

                    <p className={styles.addedDate}>
                      <strong>Added: </strong>
                      {new Date(fav.addedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
