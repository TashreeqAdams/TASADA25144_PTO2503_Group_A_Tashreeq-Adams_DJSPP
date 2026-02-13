import { useContext, useState } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import styles from "./Favourites.module.css";

export default function FavouritesPage() {
  const { favourites } = useContext(FavouritesContext);

  // === Filter / Sort state ===
  const [showSort, setShowSort] = useState("A-Z"); // "A-Z" | "Z-A"
  const [dateSort, setDateSort] = useState("newest"); // "newest" | "oldest"

  if (!favourites || favourites.length === 0) {
    return <p>No favourites yet! Go like some episodes. ❤️</p>;
  }

  // === Group by show title ===
  const groupedFavourites = favourites.reduce((acc, fav) => {
    const showName = fav.title;
    if (!acc[showName]) acc[showName] = [];
    acc[showName].push(fav);
    return acc;
  }, {});

  // === Sort episodes within a show by the date they were added to favourites ===
  const sortEpisodesByAddedDate = (episodes) => {
    return [...episodes].sort((a, b) => {
      const dateA = new Date(a.addedAt);
      const dateB = new Date(b.addedAt);

      if (dateSort === "newest") return dateB - dateA;
      if (dateSort === "oldest") return dateA - dateB;

      return 0;
    });
  };

  // === Sort show titles A-Z / Z-A ===
  const sortedShowEntries = Object.entries(groupedFavourites).sort(
    ([a], [b]) => {
      if (showSort === "A-Z") return a.localeCompare(b);
      if (showSort === "Z-A") return b.localeCompare(a);
      return 0;
    }
  );

  return (
    <div className={styles.favouritesContainer}>
      <h1>My Favourites</h1>

      {/* === Filters === */}
      <div className={styles.filters}>
        <label>
          Sort Shows:
          <select
            value={showSort}
            onChange={(e) => setShowSort(e.target.value)}
          >
            <option value="A-Z">A–Z</option>
            <option value="Z-A">Z–A</option>
          </select>
        </label>

        <label>
          Sort Episodes by Date Added:
          <select
            value={dateSort}
            onChange={(e) => setDateSort(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </label>
      </div>

      {/* === Favourites List === */}
      <div className={styles.favDetails}>
        {sortedShowEntries.map(([showTitle, episodes]) => {
          const sortedEpisodes = sortEpisodesByAddedDate(episodes);

          return (
            <div key={showTitle} className={styles.showGroup}>
              <h2 className={styles.showTitle}>{showTitle}</h2>
              <div className={styles.favourites}>
                {sortedEpisodes.map((fav) => (
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
          );
        })}
      </div>
    </div>
  );
}
