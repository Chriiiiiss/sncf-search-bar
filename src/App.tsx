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
        <div className="cardWrapper flex gap-6 flex-wrap">
          <Card
            imgUrl="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2023-03/bp_jeunespx.jpg?itok=iP1cDgW_"
            title={"Activez le mode dernière minute"}
            description={
              "A vos billets, prêts, feu, partez ! Il est encore temps de réserver vos billets pour partir ce printemps !"
            }
            ctaLabel={"Foncer"}
          />
          <Card
            imgUrl="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2023-04/bp_300x300.jpg?itok=FQ8Lq8iI"
            title={"Vos billets pour l'été sont toujours disponibles !"}
            description={
              "On voit,on voit...qu''il est temps d'organiser vos vacances d'été ! Réservez dès maintenant vos billets de train aux meilleurs prix !"
            }
            ctaLabel={"Foncer"}
          />
          <Card
            imgUrl="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2023-04/bp_cartes.jpg?itok=iVoEKOnh"
            title={"Utilisez les cartes budget mobilité"}
            description={
              "Payez vos trajets, mais pas de votre poche ! Utilisez les cartes ALD Move, Betterway, RoadMate, Swile ou Worklife pour régler vos déplacements domicile-travail."
            }
            ctaLabel={"S'informer"}
          />
          <Card
            imgUrl="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2023-04/bp.jpg?itok=xtYSf-j1"
            title={"Emmenez-le partout avec vous"}
            description={
              "Dès 7€, voyagez avec votre animal de compagnie et profitez ensemble lors de vos prochaines escapades"
            }
            ctaLabel={"En savoir plus"}
          />
        </div>
      </section>
    </>
  );
}

export default App;
