import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const HandleMenu = () => {
        setMenu(!showMenu);
    };
    const falseMenu = () => {
        setMenu(false);
    };

    const [changeLanguage, setLanguage] = useState(false);
    const HandleLanguage = () => {
        setLanguage(!changeLanguage);
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
                    "absolute top-0 bg-transparent transition-colors duration-200 w-full"
                }
            >
                <div
                    className={
                        !navbar
                            ? "h-full w-full py-1 absolute top-0 -z-10 transition-colors duration-300"
                            : "h-full w-full py-1 bg-white absolute top-0 -z-10 backdrop-blur-md transition-colors duration-500"
                    }
                ></div>
                <nav
                    className={
                        showMenu
                            ? "max-w-screen-2xl mx-auto px-4 py-2 md:py-4 flex items-center justify-between w-full navTextColor bg-gray-800 transition-colors duration-100 z-50"
                            : "max-w-screen-2xl mx-auto px-4 py-2 md:py-2 flex items-center justify-between lg:px-[15%] w-full navTextColor transition-colors duration-100 z-50"
                    }
                >
                    <Link
                        to="/"
                        className="flex lg:hidden items-center justify-center"
                        aria-label="logo"
                    >
                        <div className="h-auto w-12 ">
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                src="../assets/logoBrowser.png"
                            />
                        </div>
                        <p
                            className={
                                showMenu
                                    ? "text-gray-100 font-bold"
                                    : "text-gray-500 hoverLink font-bold"
                            }
                        >
                            CKL Facades
                        </p>
                    </Link>
                    <button
                        aria-label="Menu"
                        onClick={HandleMenu}
                        className="group lg:hidden bg-gray-100 p-2.5 transition-colors duration-200 z-50 rounded-lg"
                    >
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 transition-all duration-200 bgLogoColor m-1 rounded-lg"
                                    : "w-5 h-1 transition-all duration-200 bgLogoColor m-1 translate-y-2 rotate-45 rounded-lg"
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-3 h-1 transition-all duration-200 bgLogoColor m-1 rounded-lg"
                                    : "w-3 h-1 transition-all duration-200 bgLogoColor m-1 opacity-0"
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 transition-all duration-200 bgLogoColor m-1 rounded-lg"
                                    : "w-5 h-1 transition-all duration-200 bgLogoColor m-1 -translate-y-2 -rotate-45 rounded-lg"
                            }
                        />
                    </button>
                    <ul
                        className={
                            showMenu
                                ? "absolute text-lg top-full left-0 pb-4 flex flex-col lg:static text-main text-center w-full bg-gray-800 opacity-100 transition duration-200 -translate-y-0 -z-10"
                                : "absolute top-full left-0 py-2 flex flex-col lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-center lg:top-0 lg:translate-y-0 lg:py-0 text-main text-center w-full opacity-0 -translate-y-full transition duration-100 -z-10 lg:z-10 lg:ml-8"
                        }
                    >
                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="Home"
                                className={
                                    navbar
                                        ? "font-bold text-gray-500 hoverLink transition-colors duration-200"
                                        : "font-bold text-gray-300 hoverLink transition-colors duration-200"
                                }
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="About Us"
                                className={
                                    navbar
                                        ? "font-bold text-gray-500 hoverLink transition-colors duration-200"
                                        : "font-bold text-gray-300 hoverLink transition-colors duration-200"
                                }
                                to="/#about"
                            >
                                About
                            </Link>
                        </li>
                        <Link
                            onClick={falseMenu}
                            to="/"
                            className={
                                navbar
                                    ? "flex-col hidden hover:scale-105 transition-all duration-300 lg:flex h-auto w-16 mx-8 items-center justify-center"
                                    : "flex-col hidden hover:scale-105 transition-all duration-300 lg:flex h-auto w-20 mx-12 items-center justify-center"
                            }
                            aria-label="logo"
                        >
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                placeholder="blurred"
                                src="../assets/logoBrowser.png"
                            />
                            <p
                                className={
                                    navbar
                                        ? "hidden transition-all duration-200"
                                        : "font-bold text-gray-300 transition-all duration-200 text-2xl w-max -mt-1"
                                }
                            >
                                CKL Facades
                            </p>
                        </Link>
                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="Services"
                                className={
                                    navbar
                                        ? "font-bold text-gray-500 hoverLink transition-colors duration-200"
                                        : "font-bold text-gray-300 hoverLink transition-colors duration-200"
                                }
                                to="/#services"
                            >
                                Services
                            </Link>
                        </li>
                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="Contakt"
                                className={
                                    navbar
                                        ? "font-bold text-gray-500 hoverLink transition-colors duration-200"
                                        : "font-bold text-gray-300 hoverLink transition-colors duration-200"
                                }
                                to="/#contact"
                            >
                                Contakt
                            </Link>
                        </li>
                    </ul>
                    <button
                        onClick={HandleLanguage}
                        className={!navbar ? "absolute flex items-center justify-center right-20 lg:right-12 p-2 rounded-full bg-gray-800 transition-all duration-100" : "hidden"}
                    >
                        <StaticImage
                            height={20}
                            width={20}
                            placeholder="blurred"
                            src="../assets/language/uk.png"
                        />
                        <div
                            className={
                                changeLanguage
                                    ? "absolute flex flex-col items-center justify-start rounded-lg mt-3 text-gray-100 top-full bg-gray-800 py-3 scale-100 transition-transform duration-50"
                                    : "absolute rounded-lg mt-3 text-gray-100 top-full bg-gray-800 py-3 scale-0 transition-transform duration-50"
                            }
                        >
                            <Link
                                to="/"
                                className="flex items-center justify-start px-6 w-full hover:bg-gray-700"
                            >
                                <StaticImage
                                    height={12}
                                    width={12}
                                    layout="fixed"
                                    placeholder="blurred"
                                    src="../assets/language/uk.png"
                                />
                                <p className="ml-2">English</p>
                            </Link>
                            <Link
                                to="/pl"
                                className="flex items-center justify-start px-6 mt-3 w-full hover:bg-gray-700"
                            >
                                <StaticImage
                                    height={12}
                                    width={12}
                                    layout="fixed"
                                    placeholder="blurred"
                                    src="../assets/language/poland.png"
                                />
                                <p className="ml-2">Polish</p>
                            </Link>
                        </div>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
