import "@css/searchBar.css";
import { useEffect, useRef, useState } from "react";
import SearchModal from "./searchModal";

function SearchBar() {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (searchBarRef.current) {
      const offsetTop = searchBarRef.current.offsetTop;
      const offsetY = 30;

      window.scrollTo({
        top: offsetTop - offsetY,
        behavior: "smooth",
      });
    }
    setOpenSearchModal(true);
  };

  useEffect(() => {
    console.log(openSearchModal);
  }, [openSearchModal]);

  return (
    <div ref={searchBarRef} onClick={handleClick} className="searchBar w-full">
      <input
        type="text"
        className="w-full h-10 rounded-full inputSearchBar z-20 relative"
        placeholder="Une destination, demande..."
      ></input>
      {openSearchModal ? (
        <SearchModal setOpenModalState={setOpenSearchModal} />
      ) : null}
    </div>
  );
}

export default SearchBar;
