import { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("my_favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("my_favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Add a liked episode

  const addFavourite = (episode) => {
    setFavourites((prev) => {
      const isAlreadyAdded = prev.some(
        (item) =>
          item.episodeId === episode.episodeId &&
          item.showId === episode.showId &&
          item.seasonNumber === episode.seasonNumber
      );
      if (isAlreadyAdded) return prev;
      return [...prev, episode];
    });
  };

  // Remove a liked episode

  const removeFavourite = (showId, seasonNumber, episodeId) => {
    setFavourites((prev) =>
      prev.filter(
        (item) =>
          !(
            String(item.showId) === String(showId) &&
            String(item.seasonNumber) === String(seasonNumber) &&
            String(item.episodeId) === String(episodeId)
          )
      )
    );
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
