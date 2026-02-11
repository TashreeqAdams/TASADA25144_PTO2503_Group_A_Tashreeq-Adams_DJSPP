import { useState, useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import styles from "../components/Podcasts/PodcastDetail.module.css";

export default function FavouritesPage({ podcast, genres }) {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const { favourites } = useContext(FavouritesContext);

  if (!favourites.length) return <p>No favourites yet</p>;
  if (!podcast || !podcast.seasons?.length)
    return <p>Loading podcast data...</p>;

  const season = podcast.seasons[selectedSeasonIndex];
  if (!season || !season.episodes?.length)
    return <p>No episodes in this season</p>;

  const favouriteEpisodes = season.episodes.filter(
    (ep) => favourites.includes(ep.episode) // adjust based on how favourites are stored
  );

  return (
    <div>
      <h2>Your Favourite Episodes</h2>
      <div className={styles.episodeList}>
        {favouriteEpisodes.map((ep, index) => {
          return (
            <div key={ep.episode} className={styles.episodeCard}>
              <img className={styles.episodeCover} src={ep.image} alt="" />
              <div className={styles.episodeInfo}>
                <p className={styles.episodeTitle}>
                  Episode {index + 1}: {ep.title}
                </p>
                <p className={styles.episodeDesc}>{ep.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
