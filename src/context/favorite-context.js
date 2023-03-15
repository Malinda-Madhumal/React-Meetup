import React, { createContext } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  isFavorite: (meetUpId) => {},
});

export const FavoriteContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = React.useState([]);

  function addFavorite(favoriteMeetup) {
    setUserFavorites((prevFavorite) => {
      return prevFavorite.concat(favoriteMeetup);
    });
  }

  function removeFavoriteMeetUp(meetUpId) {
    setUserFavorites((prevFavorite) => {
      return prevFavorite.filter((meetUp) => meetUp.id !== meetUpId);
    });
  }

  function isFavorite(meetUpId) {
    return userFavorites.some((meetUp) => meetUp.id === meetUpId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavorite,
    removeFavorite: removeFavoriteMeetUp,
    isFavorite: isFavorite,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
