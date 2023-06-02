import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <span> | </span>
			<NavLink to="/server-list">Server List</NavLink>
            <span> | </span>
            <NavLink to="/server-card">Servers cards</NavLink>
			
        </div>
    );
}

export default Menu;
