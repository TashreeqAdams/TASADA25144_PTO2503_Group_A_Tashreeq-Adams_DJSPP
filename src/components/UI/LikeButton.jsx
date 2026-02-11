import React, { useState, useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";

export default function LikeButton({
  episodeId,
  showId,
  seasonNumber,
  episode,
}) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const { addFavourite } = useContext(FavouritesContext);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }

    addFavourite({
      showId,
      seasonNumber,
      episodeId,
      title: episode.title,
      description: episode.description,
      image: episode.image,
    });
  };

  return (
    <div>
      <div>
        <button onClick={handleLike}>{isLiked ? "❤️" : "🤍"}</button>
      </div>
    </div>
  );
}
