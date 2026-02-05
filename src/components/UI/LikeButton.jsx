import React, { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
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
