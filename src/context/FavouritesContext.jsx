import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (fav) => {
    setFavourites((prev) => [...prev, fav]);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}
