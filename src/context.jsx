import React, { useContext, useState, useEffect } from "react";
import axios from "axios";


const AppContext = React.createContext();

let allComicsURL =
  "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=77d641ef486d595c2229540b3e3f89b8&hash=03335fa399059a1a7de7457b1ee3c78b";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(1)

  const [showModal, setshowModal] = useState(false);
  const [selectedComic, setselectedComic] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const fetchComics = async (url) => {
    setLoading(true);
    try {
      const response = await axios(url);
      const result = response.data.data.results;
      console.log(result);
      if (result) {
        setComics(result);
      } else {
        setComics([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const selectComic = (id, favoriteComic) => {
    console.log(id);
    let comic;
    comic = comics.find((comic) => comic.id === id);
    setselectedComic(comic);
    setshowModal(true);
  };

  const closeModal = () => {
    setshowModal(false);
  };

  const addToFavorites = (id) => {

    const alreadyFavorite = favorites.find((comic) => comic.id === id);
    if (alreadyFavorite) return;
    const comic = comics.find((comic) => comic.id === id);
    const updatedFavorites = [...favorites, comic];
    setFavorites(updatedFavorites);
  };
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((comic) => comic.id !== id);
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      fetchComics(`${allComicsURL}`);
    } else {
      fetchComics(`${allComicsURL}&titleStartsWith=${searchTerm}`);
    }
  }, [searchTerm, pageNumber]);
  return (
    <AppContext.Provider
      value={{
        loading,
        comics,
        setSearchTerm,
        showModal,
        selectedComic,
        selectComic,
        closeModal,
        addToFavorites,
        removeFromFavorites,
        favorites,
        setPageNumber
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
