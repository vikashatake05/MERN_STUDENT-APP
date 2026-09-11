import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <h2>Student Task Portal</h2>
            <div className="nav-links">
                <span>dashboard</span>
                <span>Tasks</span>
            </div>

        </nav>
    );    
}
export default Navbar;
