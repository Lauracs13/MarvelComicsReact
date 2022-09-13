import { useGlobalContext } from "../context";

export const Favorites = () => {
  const { favorites, selectComic, removeFromFavorites } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item)=>{
            return <div key={item.id} className="favorite-item"> 
             <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} className="img favorites-img" />
            <button className="remove-btn" onClick={()=> removeFromFavorites(item.id)}>
              Remove
            </button>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};
