import { useGlobalContext } from "./context";

import {Favorites}  from "./components/Favorites";
import  {Comics}  from "./components/Comics";
import {Modal} from "./components/Modal";
import {Search} from "./components/Search";
import './styles.css';

export const MarvelApp = () => {
  const {showModal} = useGlobalContext()
  return (
    <div>
      <Search />
      <Favorites />
      <Comics />
     {showModal && <Modal />} 
    </div>
  );
};
