import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <section>
        <img src="https://www.sncf-connect.com/assets/media/2023-04/hp_1440x420_desktop_green-carte_0.jpg" />
      </section>
      <div className="flex justify-center gap-10 items-center flex-col p-6">
        <h1 className="text-center text-4xl font-bold text-white">
          Recherchez vos voyages, trajets courts et bien plus encore...
        </h1>
        <SearchBar />
      </div>
      <section className=" ">
        <h1 className="text-4xl font-bold text-white">
          Découvrer l'univers sncf
        </h1>
      </section>
    </>
  );
}

export default App;
