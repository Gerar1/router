import { Outlet, NavLink } from "react-router-dom";

const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <NavLink end to="/">Inicio.</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre Nosotros.</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Extra.</NavLink>
          </li>
          <li>
            <NavLink end to="/products">Lista de Tareas.</NavLink>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;