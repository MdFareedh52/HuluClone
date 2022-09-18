import './Navbar.css';
import request from '../../Helper/Request';
const Navbar  = ({setSelectedoption}) => {
    return(
        <div className = "nav">
            <h2 onClick={()=>setSelectedoption(request.fetchTrending)}>Trending</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchTopRated)}>Top Rated</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchActionMovies)}>Action</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchMystery)}>Mystery</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchWestern)}>Western</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchAnimation)}>Animation</h2>
            <h2 onClick = {()=>setSelectedoption(request.fetchTv)}>Movies</h2>
        </div>

    )
}
export default Navbar;