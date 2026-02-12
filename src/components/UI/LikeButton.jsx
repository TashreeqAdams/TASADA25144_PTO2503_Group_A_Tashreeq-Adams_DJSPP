import React, { useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";

export default function LikeButton({
  episodeId,
  showId,
  seasonNumber,
  episode,
  seasonImage,
}) {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

  // Derive directly from the global list
  const isLiked = favourites.some(
    (fav) =>
      String(fav.showId) === String(showId) &&
      String(fav.seasonNumber) === String(seasonNumber) &&
      String(fav.episodeId) === String(episodeId)
  );

  const handleLike = () => {
    if (isLiked) {
      // Pass everything needed to identify this exact episode
      removeFavourite(showId, seasonNumber, episodeId);
    } else {
      addFavourite({
        showId,
        seasonNumber,
        episodeId,
        title: episode.title,
        description: episode.description || "No description",
        image: seasonImage,
        episodeNum: episode.episode,
      });
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleLike}>{isLiked ? "❤️" : "🤍"}</button>
      </div>
    </div>
  );
}
