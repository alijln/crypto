import { useReducer } from "react";
import FavoritesContext from "../../context/FavoritesContext";
import FavoriteReducer from "../../../reducers/FavoriteReducer";

const FavoriteProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(FavoriteReducer, []);

  const addItem = (data) => {
    dispatch({
      type: "ADD_ITEM",
      payload: data,
    });
  };

  const removeItem = (data) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: data,
    });
  };

  return (
    <>
      <FavoritesContext.Provider
        value={{
          favorites,
          addItem,
          removeItem,
        }}
      >
        {children}
      </FavoritesContext.Provider>
    </>
  );
};

export default FavoriteProvider;
