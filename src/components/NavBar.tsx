import "./css/NavBar.css";

function NavBar() {
  return (
    <nav className="flex header w-full">
      <div className="flex items-center md:justify-around w-screen insideNav">
        <img
          src="https://presse.vous.sncf-connect.com/wp-content/uploads/2021/11/1637260546_logo-sncf-connect.png"
          alt="logo"
          width={145}
        />
        <ul className="hidden md:flex gap-x-24 text-white h-full">
          <li className="h-full flex items-center relative group">
            <span>Voyager</span>
            <span className="absolute bottom-0 left-1/2 w-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full borderHover"></span>
          </li>
          <li className="h-full flex items-center relative group">
            <span>Billets</span>
            <span className="absolute bottom-0 left-1/2 w-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full borderHover"></span>
          </li>
          <li className="h-full flex items-center relative group">
            <span>Offres</span>
            <span className="absolute bottom-0 left-1/2 w-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full borderHover"></span>
          </li>
          <li className="h-full flex items-center relative group">
            <span>Compte</span>
            <span className="absolute bottom-0 left-1/2 w-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full borderHover"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
