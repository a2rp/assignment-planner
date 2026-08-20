import React from "react";
import {
    FiCode,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="content">
                <div className="brand">
                    <div className="brandIcon">AP</div>

                    <div className="brandText">
                        <strong>Assignment Planner</strong>

                        <p>Plan work, track deadlines, and stay organized.</p>
                    </div>
                </div>

                <div className="links">
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Portfolio"
                    >
                        <FiGlobe />
                        <span>Portfolio</span>
                    </a>

                    <a
                        href="https://github.com/a2rp"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FiGithub />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://codepen.io/ash1198"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="CodePen"
                    >
                        <FiCode />
                        <span>CodePen</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aashishranjan"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <FiLinkedin />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://www.facebook.com/theash.ashish/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                    >
                        <FiFacebook />
                        <span>Facebook</span>
                    </a>

                    <a
                        href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="YouTube"
                    >
                        <FiYoutube />
                        <span>YouTube</span>
                    </a>

                    <a href="mailto:ash.ranjan09@gmail.com" title="Email">
                        <FiMail />
                        <span>Email</span>
                    </a>
                </div>

                <div className="supportLinks">
                    <a
                        href="https://a2rp-donation-page.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Support my work"
                    >
                        <FiHeart />
                        <span>Support</span>
                    </a>

                    <a
                        href="https://buymeacoffee.com/a2rp"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Buy Me A Coffee"
                    >
                        <FiCoffee />
                        <span>Buy Me A Coffee</span>
                    </a>

                    <a
                        href="https://patreon.com/a2rp"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Patreon"
                    >
                        <FiHeart />
                        <span>Patreon</span>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <p>© {currentYear} Assignment Planner. All rights reserved.</p>

                <p>
                    Developed by{" "}
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </p>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
