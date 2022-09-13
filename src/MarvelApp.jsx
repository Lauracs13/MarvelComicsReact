import { useGlobalContext } from "./context";
import {Favorites}  from "./components/Favorites";
import  {Comics}  from "./components/Comics";
import {Modal} from "./components/Modal";
import {Search} from "./components/Search";
import './styles.css';


export const MarvelApp = () => {
  const {showModal, favorites} = useGlobalContext()
  return (
    <div>
      <Search />
     {favorites.length > 0 && <Favorites />}  
      <Comics />
     {showModal && <Modal />} 
    </div>
  );
};
