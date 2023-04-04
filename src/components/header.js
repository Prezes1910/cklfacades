import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const HandleMenu = () => {
        setMenu(!showMenu);
    };

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <header
            className="
                    z-50 mx-auto sticky top-0 text-center
            "
        >
            <div
                className={
                    "realtive bg-transparent transition-colors duration-200 w-full"
                }
            >
                <div className={"absolute bg-black/40 h-full w-full"} />
                <div
                    className={
                        !navbar
                            ? "h-full w-full py-1 absolute top-0 -z-10 transition-colors duration-300"
                            : "h-full w-full py-1 bg-black/20 absolute top-0 -z-10 backdrop-blur-md transition-colors duration-500"
                    }
                ></div>
                <nav
                    className={
                        showMenu
                            ? "max-w-screen-2xl mx-auto px-4 py-2 md:py-4 flex items-center justify-between w-full navTextColor bg-black/90 transition-colors duration-200"
                            : "max-w-screen-2xl mx-auto px-4 py-2 md:py-2 flex items-center justify-between lg:px-[15%] w-full navTextColor transition-colors duration-200"
                    }
                >
                    <Link
                        to="/"
                        className="flex lg:static items-center justify-center"
                        aria-label="logo"
                    >
                        <StaticImage
                            loading="eager"
                            className="h-auto w-44"
                            alt="logo"
                            src="../assets/logo.png"
                        />
                    </Link>
                    <button
                        aria-label="Menu"
                        onClick={HandleMenu}
                        className="bg-slate-200/80 group hover:bg-slate-100/90 lg:hidden p-2.5 transition-colors duration-200 z-50 rounded-lg"
                    >
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 rounded-lg"
                                    : "w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 translate-y-2 rotate-45 rounded-lg"
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-3 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 rounded-lg"
                                    : "w-3 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 opacity-0"
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 rounded-lg"
                                    : "w-5 h-1 group-hover:bg-gray-700 transition-all duration-200 bg-gray-600 m-1 -translate-y-2 -rotate-45 rounded-lg"
                            }
                        />
                    </button>
                    <ul
                        className={
                            showMenu
                                ? "absolute text-lg top-full left-0 pb-4 flex flex-col lg:static text-main text-center w-full bg-black/90 opacity-100 transition duration-200 -translate-x-0 -z-10"
                                : "absolute top-full left-0 py-2 flex flex-col lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:top-0 lg:translate-x-0 lg:py-0 text-main text-center w-full opacity-0 -translate-x-full transition duration-100 -z-10 lg:z-10 lg:ml-8"
                        }
                    >
                        <li className="mx-2 my-2 px-2 py-3" >
                            <Link
                                aria-label="Strona Główna"
                                className="hover:text-orange-400 transition-colors duration-200"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="mx-2 my-2 px-2 py-3" >
                            <Link
                                aria-label="O Nas"
                                className="hover:text-orange-400 transition-colors duration-200"
                                to="/oNas"
                            >
                                O Nas
                            </Link>
                        </li>
                        <li className="mx-2 my-2 px-2 py-3" >
                            <Link
                                aria-label="Oferta"
                                className="hover:text-orange-400 transition-colors duration-200"
                                to="/oferta"
                            >
                                Oferta
                            </Link>
                        </li>
                        <li className="mx-2 my-2 px-2 py-3" >
                            <Link
                                aria-label="Fakty i Mity"
                                className="hover:text-orange-400 transition-colors duration-200"
                                to="/faktyMity"
                            >
                                Fakty & Mity
                            </Link>
                        </li>
                        <li className="mx-2 my-2 px-2 py-3" >
                            <Link
                                aria-label="Kontakt"
                                className="hover:text-orange-400 transition-colors duration-200"
                                to="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
