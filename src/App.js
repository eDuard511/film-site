
import './styles/App.css'
import { useContext } from 'react'
import { globalContext } from './Context/Context'
import MovieCard from './Components/MovieCard'
import FilterMovie from './Components/FilterMovie';
import Favorite from './Components/Favorite';

function App() {
  const {setSearch,searchArray} = useContext(globalContext);
    return (<div className='container-main'>
      <div className='container-main2'>
        <form>
      <input type='text' onChange={(e)=>{setSearch(e.target.value)}}></input>
    </form>
    { searchArray === 0 ? <MovieCard /> : <FilterMovie />}
    </div>
    <div>
      <h1>YOUR FAV MOVIES :</h1>
    <Favorite />
    </div>
      </div>)
    

}

export default App;
