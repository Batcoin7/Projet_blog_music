import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import AlbumForm from "./components/albumForm";
import Albums from "./components/albums";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to={"/"}>
                Home
              </NavLink>
              <NavLink
                className="nav-link active"
                aria-current="page"
                to={"/create-ablbum"}
              >
                Création d'album
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-container">
        <Routes>
          <Route path={"/"} element={<Albums />} />
          <Route path={"/create-ablbum"} element={<AlbumForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
