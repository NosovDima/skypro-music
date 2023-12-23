import "./App.css";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer"; 
import MainNav from "./components/MainNav/MainNav";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Content from "./components/Content/Content";
import SideBarPersonal from "./components/SideBarPersonal/SideBarPersonal";
import SideBarBlock from "./components/SideBarBlock/SideBarBlock";

function App() {
  return (
    
    <> <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <Content />
          </div>
          <div className="main__sidebar sidebar">
           <SideBarPersonal />
           <SideBarBlock />
            
          </div>
        </main>
        <MediaPlayer />
        <footer className="footer"></footer>
      </div>
    </div>
    </>
  );
}
export default App;
