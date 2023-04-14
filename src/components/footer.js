import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
    <div className="bg-gray-900 text-gray-400">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                <div className="col-span-full lg:col-span-2">
                    <div className="mb-4 lg:-mt-2">
                        <Link
                            to="/"
                            className="flex-col hover:scale-105 transition-all duration-300 flex h-auto w-20 mx-12 items-center justify-center"
                            aria-label="logo"
                        >
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                placeholder="blurred"
                                src="../assets/logoBrowser.png"
                            />
                            <p className="font-bold text-gray-300 transition-all duration-200 text-2xl w-max -mt-1">
                                CKL Facades
                            </p>
                        </Link>
                    </div>

                    <p className="mb-6  sm:pr-8">
                        Technical and design services to the building envelope
                        and facade industry
                    </p>

                    <div className="flex">
                        <Link
                            to="https://www.linkedin.com/company/ckl-facades/?fbclid=IwAR2BI5yn7XTImJnXJ9Pl0OmsGPAA8fFKzTba0CPcDrkQxkUtcQJtEX_CIMQ"
                            className=" transition duration-100 hover:text-gray-500 "
                        >
                            <svg
                                className="h-5 w-5"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                        Quick Links
                    </div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <Link
                                to="/"
                                className=" transition duration-100 hoverLink"
                            >
                                Home
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/#about"
                                className=" transition duration-100 hoverLink"
                            >
                                About
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/#services"
                                className=" transition duration-100 hoverLink"
                            >
                                Services
                            </Link>
                        </div>
                    </nav>
                </div>

                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                        Company
                    </div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <Link
                                to="/projects"
                                className=" transition duration-100 hoverLink"
                            >
                                Projects
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="https://www.linkedin.com/company/ckl-facades/jobs/"
                                className=" transition duration-100 hoverLink"
                            >
                                Jobs
                            </Link>
                        </div>
                    </nav>
                </div>

                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                        Support
                    </div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <Link
                                to="/#contact"
                                className=" transition duration-100 hoverLink"
                            >
                                Contact
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/#contact"
                                className=" transition duration-100 hoverLink"
                            >
                                Chat
                            </Link>
                        </div>
                    </nav>
                </div>

                <div>
                    <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                        Legal
                    </div>

                    <nav className="flex flex-col gap-4">
                        <div>
                            <Link
                                to="/privacy-policy"
                                className=" transition duration-100 hoverLink"
                            >
                                Privacy Policy
                            </Link>
                        </div>

                        <div>
                            <Link
                                to="/cookies"
                                className=" transition duration-100 hoverLink"
                            >
                                Cookies
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="border-t border-gray-800 py-8 text-center text-sm ">
                © 2023 - Design by{" "}
                <Link className="text-gray-300" to="https://seovileo.pl/">
                    @Seovileo.pl
                </Link>{" "}
                / All rights reserved.
            </div>
        </footer>
    </div>
);

export default Footer;
