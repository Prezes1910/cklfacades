// Logic exports
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <Layout>
            <section className="relative flex items-center min-h-[16rem] justify-center w-full">
                <div className="absolute w-full -z-20">
                    <StaticImage
                        className="h-full w-[220%] md:w-full"
                        quality={100}
                        src="../assets/hero.png"
                        placeholder="blurred"
                    />
                </div>
                <div className="flex flex-col items-center justify-cente mt-6">
                    <h1 className="text-xl md:w-[70%] mt-12 sm:text-3xl sm:mt-48 md:mt-12 md:text-3xl lg:text-4xl xl:text-5xl lg:py-12 xl:py-0 font-bold text-gray-100 text-center lg:w-[50%] xl:mt-48 px-6">
                        Technical and design services to the building envelope
                        and facade industry
                    </h1>
                    <Link
                        to="/"
                        className="mt-2 xl:mt-6 hover:bg-black transition-colors duration-200 text-white bg-zinc-800/20 border py-2 px-3"
                    >
                        Show More
                    </Link>
                </div>
            </section>

            <section className="mt-24 sm:mt-36 md:mt-16 xl:mt-28">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                            About Us
                        </h2>

                        <p className="max-w-screen-md text-gray-500 w-[70%] md:text-lg text-center mx-auto">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
                            <Link
                                to="/"
                                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <StaticImage
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                    loading="lazy"
                                    placeholder="blurred"
                                    alt="Photo by Minh Pham"
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                />
                            </Link>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-sm">
                                    July 19, 2021
                                </span>

                                <h2 className="text-gray-800 text-xl font-bold">
                                    <Link
                                        to="/"
                                        className="hoverLink active:text-indigo-600 transition duration-100"
                                    >
                                        New trends in Tech
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-[70%]">
                                    This is a section of some simple filler
                                    text, also known as placeholder text.
                                </p>

                                <div>
                                    <Link
                                        to="/"
                                        className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
                            <Link
                                to="/"
                                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <StaticImage
                                    src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80"
                                    loading="lazy"
                                    placeholder="blurred"
                                    alt="Photo by Lorenzo Herrera"
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                />
                            </Link>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-sm">
                                    April 07, 2021
                                </span>

                                <h2 className="text-gray-800 text-xl font-bold">
                                    <Link
                                        to="/"
                                        className="hoverLink active:text-indigo-600 transition duration-100"
                                    >
                                        Working with legacy stacks
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-[70%]">
                                    This is a section of some simple filler
                                    text, also known as placeholder text.
                                </p>

                                <div>
                                    <Link
                                        to="/"
                                        className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
                            <Link
                                to="/"
                                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <StaticImage
                                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                                    loading="lazy"
                                    placeholder="blurred"
                                    alt="Photo by Magicle"
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                />
                            </Link>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-sm">
                                    March 15, 2021
                                </span>

                                <h2 className="text-gray-800 text-xl font-bold">
                                    <Link
                                        to="/"
                                        className="hoverLink active:text-indigo-600 transition duration-100"
                                    >
                                        10 best smartphones for devs
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-[70%]">
                                    This is a section of some simple filler
                                    text, also known as placeholder text.
                                </p>

                                <div>
                                    <Link
                                        to="/"
                                        className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
                            <Link
                                to="/"
                                className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <StaticImage
                                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                    loading="lazy"
                                    placeholder="blurred"
                                    alt="Photo by Martin Sanchez"
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                />
                            </Link>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-sm">
                                    January 27, 2021
                                </span>

                                <h2 className="text-gray-800 text-xl font-bold">
                                    <Link
                                        to="/"
                                        className="hoverLink active:text-indigo-600 transition duration-100"
                                    >
                                        8 High performance Notebooks
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-[70%]">
                                    This is a section of some simple filler
                                    text, also known as placeholder text.
                                </p>

                                <div>
                                    <Link
                                        to="/"
                                        className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-white py-6 sm:py-8 lg:py-16 mt-8 sm:mt-12 lg:mt-24">
                <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div class="mb-10 md:mb-16">
                        <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                            Choose a Plan
                        </h2>

                        <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
                        <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
                            <div class="mb-4">
                                <h3 class="text-gray-100 text-2xl sm:text-3xl font-semibold">
                                    Basic Bundle
                                </h3>
                                <p class="text-gray-300">Ebook</p>
                            </div>

                            <div class="space-x-2 mb-4">
                                <span class="text-gray-100 text-4xl font-bold">
                                    $29
                                </span>
                                <span class="text-gray-300 text-2xl line-through">
                                    $49
                                </span>
                            </div>

                            <ul class="text-gray-300 space-y-2 mb-6">
                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Ebook</span>
                                </li>

                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Multiple examples</span>
                                </li>

                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Basic support</span>
                                </li>
                            </ul>

                            <a
                                href="#"
                                class="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                            >
                                Get the Basic Bundle
                            </a>
                        </div>

                        <div class="w-full sm:w-1/2 bg-gradient-to-tr from-[#168585] to-gray-900 rounded-lg shadow-xl p-6 sm:p-8">
                            <div class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
                                <div>
                                    <h3 class="text-white text-2xl sm:text-3xl font-semibold">
                                        Pro Bundle
                                    </h3>
                                    <p class="text-indigo-100">
                                        Ebook + Video course
                                    </p>
                                </div>

                                <span class="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                                    Best value
                                </span>
                            </div>

                            <div class="space-x-2 mb-4">
                                <span class="text-white text-4xl font-bold">
                                    $49
                                </span>
                                <span class="text-indigo-100 text-2xl line-through">
                                    $89
                                </span>
                            </div>

                            <ul class="text-indigo-100 space-y-2 mb-6">
                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Ebook</span>
                                </li>

                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Video course</span>
                                </li>

                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Multiple examples</span>
                                </li>

                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Work sheets</span>
                                </li>

                                <li class="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 shrink-0"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    <span>Premium support</span>
                                </li>
                            </ul>

                            <a
                                href="#"
                                class="block bg-indigo-200 bg-opacity-50 hover:bg-[#1d7cac] active:bg-[#168585] focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                            >
                                Get the Pro Bundle
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="CKL Facades" />;

export default IndexPage;
