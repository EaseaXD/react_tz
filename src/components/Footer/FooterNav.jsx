import { NavLink } from "react-router-dom";
const FooterNav = () =>{
    return(
        <nav className="footer__nav">
            <NavLink className="nav__link" to="/*">На главную</NavLink>
            <NavLink className="nav__link" to="/news">Новости</NavLink>
            <NavLink className="nav__link" to="/profile">Профиль</NavLink>
        </nav>
    )
}
export default FooterNav