
import './style.css';
import logo from './img/header_logo.png';
import phone from './img/phone.svg';
import { Navbar } from '../Navbar';

function Header() {
    return (
        <header className="header">
            <div className="header__line">
                <div className="header-logo">
                    <img className="header-logo__image" src={logo} alt="logo" />
                </div>

                <Navbar />

                <div className="phone">
                    <div className="phone__holder">
                        <div className="phone__img">
                            <img src={phone} alt="phone" />
                        </div>
                        <div className="phone-number">
                            <a href="/#" className="phone-number__link">+79991112233</a>
                        </div>
                    </div>
                    <div className="phone-number__text">Contact us for<br />booking</div>
                </div>
            </div>
        </header>
    );
}

export { Header };