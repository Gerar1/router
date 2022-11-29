import {NavLink} from "react-router-dom";
const Product = () =>{
 return <nav>
        <ul>
          <li>
            <NavLink to="/products/ 1- Marck creo Facebook.">Marck Zukenberg</NavLink>
          </li>
          <li>
            <NavLink to="/products/2- Bill creador de la industria del Sofware.">Bill Gates</NavLink>
          </li>
          <li>
            <NavLink to="/products/3- Ada la primera MUJER en Programar.">Ada Lovelace</NavLink>
          </li>
          <li>
            <NavLink to="/products/4- Grace el primer compilador.">Grace Hopper</NavLink>
          </li>
          <li>
            <NavLink to="/products/5- Linus creador de Linux y GIT.">Linus Torvalds</NavLink>
          </li>
        </ul>
    </nav>;
}

export default Product;