import { NavLink } from "react-router-dom";
import FooterNav from "./FooterNav";

const Footer = () =>{
    return (
        <footer className='footer'>
            <img className='footer-img' src='https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png' />
            <FooterNav />
            
        </footer>
    )
}

export default Footer