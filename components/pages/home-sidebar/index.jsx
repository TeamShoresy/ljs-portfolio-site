import React, {useEffect} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {useState} from "react";
import Sidebar from "../../header/Sidebar";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Portfolio from "../../portfolio/Portfolio";
import Blog from "../../blog/Blog";
import HeaderMobile from "../../header/HeaderMobile";

const EdinaHomeSidebar = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.querySelector("body").classList.remove("rtl");
    }, []);

    const handleLabelClick = () => {
        if (isDark) {
            localStorage.setItem("theme-color", "theme-light");
            document.querySelector("body").classList.add("theme-light");
            document.querySelector("body").classList.remove("theme-dark");
            setIsDark(false);
        } else {
            localStorage.setItem("theme-color", "theme-dark");
            document.querySelector("body").classList.add("theme-dark");
            document.querySelector("body").classList.remove("theme-light");
            setIsDark(true);
        }
    };

    return (
        <div
            className={`home-light edina_tm_mainpart ${isDark ? "theme-dark" : ""}`}
        >
            {/* Start Dark & Light Mode Swicher  */}
            <label
                className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
            >
                <input
                    type="checkbox"
                    onClick={handleLabelClick}
                    className="theme-switcher"
                />
                <div className="switch-handle">
                    <i className="light-text" title="Switch to Dark">
                        <FaMoon/>
                    </i>
                    <i className="dark-text" title="Switch to Light">
                        <FaSun/>
                    </i>
                </div>
            </label>
            {/* End Dark & Light Mode Swicher  */}

            <header className="header-area">
                <div className="header-inner">
                    <HeaderMobile/>
                </div>
            </header>
            {/* End mobile-header */}

            <Sidebar/>
            {/* End Header */}
            <Hero/>
            {/* End Hero */}
            <About/>
            {/* End Hero */}
            <div className="edina_tm_portfolio" id="portfolio">
                <div className="container">
                    <div className="edina_tm_title">
                        <h3>Portfolio</h3>
                        <p>
                            Data scientist experienced in supply chain and real estate, leading impactful machine
                            learning projects, mentoring Black professionals in data, and exploring insights on race,
                            place, and food.
                        </p>
                    </div>
                    {/* End edian_tm_title */}
                    <Portfolio/>
                </div>
            </div>
            {/* End Portfolio */}
            <div className="edina_tm_news" id="blog">
                <div className="container">
                    <div className="edina_tm_title">
                        <h3>Blog</h3>
                        <p>
                            Exploring and sharing topics of interest, learning journey, and project insights.
                        </p>
                    </div>
                    {/* End edian_tm_title */}
                    <Blog/>
                </div>
            </div>
            {/* End Blog */}
        </div>
    )
        ;
};

export default EdinaHomeSidebar;
