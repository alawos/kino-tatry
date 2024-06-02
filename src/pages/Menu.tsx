import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {
    return (
        <ul className="Menu">
            <li>
                <Link to="/buy-ticket">KUP BILET</Link>
            </li>
            <li>
                <Link to="#">REPERTUAR</Link>
            </li>
            <li>
                <a href="https://kinotatrylodz.pl/" target="_blank">STRONA INTERNETOWA</a>
            </li>
            <li>
                <a href="https://kinotatrylodz.pl/wynajmij-tatry/" target="_blank">WYNAJMIJ TATRY</a>
            </li>
        </ul>
    )
}

export default Menu;