import React, {useState} from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";
import Image from "next/image";
import logo from "../../public/img/logo/dark.png";
import logo2 from "../../public/img/logo/light.png";

const Sidebar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                    <div className={click ? "active" : ""}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
            {/* End Mobile Header */}

            <div
                className={click ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
            >
                <div className="sidebar_inner">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                width={92}
                                height={37}
                                className="logo_light"
                                src={logo}
                                alt="brand"
                            />
                            <Image
                                width={92}
                                height={37}
                                className="logo_dark"
                                src={logo2}
                                alt="brand"
                            />
                        </Link>
                    </div>
                    {/* End .logo */}

                    <div className="menu">
                        <ScrollspyNav
                            scrollTargetIds={[
                                "home",
                                "about",
                                "portfolio",
                                "blog",
                            ]}
                            activeNavClass="active"
                            offset={0}
                            scrollDuration="100"
                        >
                            <ul className="anchor_nav">
                                {sidebarContent.map((val, i) => (
                                    <li key={i}>
                                        <div className="list_inner">
                                            <a
                                                href={val.itemRoute}
                                                className={val.activeClass}
                                                onClick={handleClick}
                                            >
                                                <Image
                                                    width={18}
                                                    height={18}
                                                    className="svg custom"
                                                    src={`img/svg/${val.icon}.svg`}
                                                    alt="icon"
                                                />
                                                {val.itemName}
                                            </a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ScrollspyNav>
                    </div>
                    {/* End .menu */}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
