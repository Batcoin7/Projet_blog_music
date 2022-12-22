import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import AlbumForm from './components/albumForm';
import Albums from './components/albums'

function App() {
  return (
 <BrowserRouter>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">App</a> 
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <NavLink class="nav-link active" aria-current="page"to={'/'}>Home</NavLink>
        <NavLink class="nav-link active" aria-current="page"to={'/create-ablbum'}>Création d'album</NavLink>

      </div>
    </div>
  </div>
</nav>
<main className="flex-container">
  <Routes>
    <Route path={'/'} element={ <Albums /> } />
    <Route path={'/create-ablbum'} element={ <AlbumForm /> } />
  </Routes>
</main>
 </BrowserRouter>
    
  );
}

export default App;
