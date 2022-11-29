import { Outlet, NavLink } from "react-router-dom";

const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <NavLink end to="/">Principal</NavLink>
          </li>
          <li>
            <NavLink to="/about">Más</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Extra</NavLink>
          </li>
          <li>
            <NavLink end to="/products">Referentes &#128526;</NavLink>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;