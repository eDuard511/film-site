import { useEffect, useState , createContext } from "react";


export const globalContext = createContext(null)
const Context = ({children}) => {
    const [data, setData] = useState([]);
    const [search,setSearch] = useState('')
    const [searchArray,setSearchArray] = useState([]);
    const [favorites, setFavorites] = useState([]);
  
    useEffect(()=>{
      const filteredArray = data.filter(word => word.title.toLowerCase().includes(search.toLowerCase()));
      setSearchArray(filteredArray)
    },[search,data])
  
    useEffect(() => {
  
      const fetchData = async () => {
        try {
          const response = await fetch("data.json");
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  fetchData();
  
    },[data]);
    
    const addToFavorites = (movie) => {
      if (!favorites.includes(movie)) {
        setFavorites([...favorites, movie]);
      }
    };
    
    const removeFromFavorites = (movie) => {
      const updatedFavorites = favorites.filter((favMovie) => favMovie.id !== movie.id);
      setFavorites(updatedFavorites);
    };


   
    const contextValue = {favorites,addToFavorites,removeFromFavorites,data,setData,search,setSearch,searchArray,setSearchArray}
  
      return (
        <globalContext.Provider value={contextValue}>
            {children}
        </globalContext.Provider>
      )
      
  
  }
  
  export default Context;
  