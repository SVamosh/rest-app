
import "./style.css";
import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import vk from "./img/vk.svg";
import youtube from "./img/youtube.svg";
import facebook from "./img/facebook.svg";

function Footer() {

    const links = [telegram, instagram, vk, youtube, facebook];

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="social">
                    <div className="social-links">
                        <h3 className="social-links__header">visit our social networks: </h3>
                        <ul className="social-links__list">
                            {links.map((link, index) => {
                                return <li className="social-link" key={index}>
                                    <a href="/#">
                                        <img className="social-link__image" src={link} alt="social network" />
                                    </a>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="address">
                        <h3 className="address__header">visit us: </h3>
                        <div className="address__text">
                            <p>Owlerton Sheffield</p>  
                            <p>South Yorkshire England</p>
                        </div>
                    </div>

                    <div className="work-time">
                        <h3 className="work-time__header">opening hours: </h3>
                        <div className="work-time__text">
                            <p>
                                <span>Monday-Friday</span> 10.00-21.00
                            </p>
                            <p>
                            <span>Saturday-Sunday</span> 10.00-23.00
                            </p>
                        </div>
                    </div>
                </div>
     
                <p className="copyright">© 2025 Stefan Vamosh dev</p>
            </div>
        </footer>
    );
}

export { Footer };