import React from 'react'
import './Footer.css'
import { FaFacebookF, FaYoutube, FaGooglePlay } from "react-icons/fa";


function Footer() {
    return (
        <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>SoloGameCell</h3>
                        <ul>
                            <li><a href="#social">Release exciting games and apps and bring the latest gaming trends.</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Features</h3>
                        <ul>
                            <li><a href="#games">Games</a></li>
                            <li><a href="#games">Apps</a></li>
                            <li><a href="#subscribe">Gaming Trends</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Quick Contact</h3>
                        <ul>
                            <li><a href='mailto:janreydohinog@gmail.com'>contact@sologamecell.com</a></li>
                        </ul>
                    </div>
                    <div id="social" class="col-lg-3 item social">
                        <a href="#social">
                            <FaFacebookF id="fb"/></a>
                            <a href="#social"><FaYoutube id="yt"/></a>
                            <a href="https://play.google.com/store/apps/dev?id=7866894378418542456" target="_blank"><FaGooglePlay id="gp"/></a>
                        <p class="copyright">SoloGameCell © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    )
}

export default Footer