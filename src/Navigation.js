import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { nav } from "./data";
import "./scss/Navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import { links } from "./data";
import { FaInstagram } from "react-icons/fa";
import { MintButton } from "./MintButton";
const Navigation = ({ }) => {
    const [navToggler, setNavToggler] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [target, setTarget] = useState(false);
    const [length, setLength] = useState(null);
    const [lio, setlio] = useState(null);
    function mobilenav() {
        if (window.innerWidth > 991) {
            return "greater";
        }
    }
    mobilenav();

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setScroll(true);
        } else {
            setScroll(false);
        }
        if (window.scrollY >= 70) {
            setNavColor(true);
        } else {
            setNavColor(false);
            setNavToggler(false);
        }
    });

    function barBtn() {
        setNavToggler(!navToggler);
        setNavColor(!navColor);
    }
    // - Whitepaper(links to https://docs.adoptablebabes.com/introduction/overview)
    //     - FAQ(links to https://docs.adoptablebabes.com/support/faqs)
    //         - Twitter Logo(links to https://twitter.com/adoptablebabes)
    //             - Discord Logo(links to https://discord.com/invite/DcrwzT9WnD)
    return (
        <>
            <header className={navToggler ? "nav__active" : ""}>
                <div className="outer">
                    <div className="container">
                        <div className="nav__grid">
                            <div className="logo">
                                <NavLink to={'/'}>
                                    <img src={"/images/mobile-logo.png"} alt="" />
                                </NavLink>
                            </div>
                            <nav style={{ right: navToggler ? 0 : "-100%" }}>
                                <ul>
                                    <li>
                                        <NavLink to={"/"}>Home</NavLink>
                                    </li>
                                    {nav.map((ite, ind) => {
                                        return (
                                            <li key={ind}>
                                                <a href={ite.path} target={"_blank"}>
                                                    {ite.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                            <div className="nav__btns">
                                <a href="https://twitter.com/adoptablebabes" target={"_blank"}>
                                    <div className="btn">
                                        <AiOutlineTwitter />
                                        TWITTER
                                    </div>
                                </a>
                                <a
                                    href={"https://discord.com/invite/DcrwzT9WnD"}
                                    target={"_blank"}
                                >
                                    <div className="btn">
                                        <FaDiscord />
                                        DISCORD
                                    </div>
                                </a>
                                <div onClick={() => barBtn()}>
                                    <span
                                        style={{
                                            transform: navToggler
                                                ? "translateY(15px) rotate(45deg)"
                                                : "unset",
                                        }}
                                    ></span>
                                    <span
                                        style={{
                                            display: navToggler ? "none " : "unset",
                                        }}
                                    ></span>
                                    <span
                                        style={{
                                            transform: navToggler
                                                ? "translateY(-6px) rotate(-45deg) "
                                                : "unset",
                                        }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div
                onClick={() => window.scroll(0, 0)}
                className="auto_scroll"
                style={scroll ? { transform: "scale(1)" } : {}}
            >
                <i className="fa fa-chevron-up"></i>
            </div>
        </>
    );
};

export default Navigation;
