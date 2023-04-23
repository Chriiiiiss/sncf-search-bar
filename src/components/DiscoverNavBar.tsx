/// <reference types="vite-plugin-svgr/client" />
import "@css/DiscoverNavBar.css";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";

function DiscoverNavBar() {
  return (
    <nav className="flex justify-center bg-white">
      <ul className="flex discoverWrapper">
        <li className="lg:p-4 lg:mx-7 p-1 mx-3 text-sm flex items-center gap-x-2">
          <span>Train</span>
          <ArrowSvg className="transform rotate-90 h-4 hidden lg:block" />
        </li>
        <li className="py-4 lg:mx-7 mx-3 text-sm flex items-center gap-x-2">
          <span>Bus & covoiturage</span>
          <ArrowSvg className="transform rotate-90 h-4 hidden lg:block" />
        </li>
        <li className="py-4 lg:mx-7 mx-3 text-sm flex items-center gap-x-2">
          <span>Location de voiture</span>
          <ArrowSvg className="transform rotate-90 h-4 hidden lg:block" />
        </li>
        <li className="py-4 lg:mx-7 mx-3 text-sm flex items-center gap-x-2">
          <span>Taxi & VTC</span>
          <ArrowSvg className="transform rotate-90 h-4 hidden lg:block" />
        </li>
        <li className="py-4 lg:mx-7 mx-3 text-sm flex items-center gap-x-2">
          <span>Transports en commun</span>
          <ArrowSvg className="transform rotate-90 h-4 hidden lg:block" />
        </li>
      </ul>
    </nav>
  );
}

export default DiscoverNavBar;
