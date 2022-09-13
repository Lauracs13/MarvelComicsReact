
import { useGlobalContext } from "../context";
import {AiOutlineHeart} from 'react-icons/ai'

export const Comics = () => {
    const {comics, loading, selectComic, addToFavorites} = useGlobalContext()
   
if(loading){
    return <section className="section">
    <h4>Loading...</h4>
    </section>
}
if(comics.length < 1){
    return <section className="section">
    <h4>No matches found. Please try a different search.</h4>
    </section>
}
  return (
    
    <section className="section-center">
    {comics.map((comic)=>{
      

return <article key={comic.id} className="single-comic">
    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className="img" onClick={()=>selectComic(comic.id)}/>
    <footer>
        <h5>{comic.title}</h5>
        <button className="like-btn" onClick={()=> addToFavorites(comic.id)}><AiOutlineHeart/></button>
    </footer>
</article>
    })}
    </section>
  )
}
