import SearchBar from "./components/SearchBar.tsx";
import NavBar from "./components/NavBar";
import DiscoverNavBar from "./components/DiscoverNavBar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <NavBar />
      <section>
        <img src="https://www.sncf-connect.com/assets/media/2023-04/hp_1440x420_desktop_green-carte_0.jpg" />
      </section>
      <div className="flex justify-center gap-7 items-center flex-col p-6 searchBarWrapper">
        <h1 className="text-center text-4xl font-bold text-white achemineFont">
          Recherchez vos voyages, trajets courts et bien plus encore...
        </h1>
        <SearchBar />
      </div>
      <section className="discover pb-20">
        <DiscoverNavBar />
      </section>
      <section className="explore px-6">
        <h1 className="text-2xl font-bold pb-6">
          Explorez l'univers SNCF Connect
        </h1>
        <div className="cardWrapper flex gap-x-6">
          <Card />
        </div>
      </section>
    </>
  );
}

export default App;
