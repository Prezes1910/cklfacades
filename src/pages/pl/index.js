// Logic exports
import * as React from "react";
import Layout from "../../components/pl/layoutPL";
import Seo from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <Layout>
            <section className="relative flex items-center min-h-[16rem] justify-center w-full overflow-hidden">
                <div className=" -mt-8 w-full -z-20">
                    <StaticImage
                        className="h-full w-[230%] md:w-full"
                        quality={100}
                        src="../../assets/hero.png"
                        placeholder="blurred"
                    />
                </div>

                <div className="absolute flex flex-col items-center justify-cente">
                    <h1 className="text-xl md:w-[70%] mt-12 sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl lg:pt-12 xl:py-0 font-bold text-gray-100 text-center lg:w-[60%] px-6">
                        Usługi techniczne i projektowe do przegród budowlanych i
                        branży fasadowej
                    </h1>
                    <Link
                        to="/"
                        className="mt-2 lg:mt-6 hover:bg-black transition-colors duration-200 text-white bg-zinc-800/20 border py-2 px-3"
                    >
                        Show More
                    </Link>
                </div>

                <div className="text-gray-300 text-sm absolute left-2 flex flex-col items-center justify-center uppercase -my-3">
                    <p>L</p>
                    <p>I</p>
                    <p>N</p>
                    <p>K</p>
                    <p>E</p>
                    <p>D</p>
                    <p>I</p>
                    <p>N</p>
                    <div className="h-8 w-[2px] my-4 bg-gray-600 rounded-3xl" />
                    <Link to="https://www.linkedin.com/company/ckl-facades/?fbclid=IwAR2BI5yn7XTImJnXJ9Pl0OmsGPAA8fFKzTba0CPcDrkQxkUtcQJtEX_CIMQ">
                        <svg
                            class="h-4 w-4"
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
            </section>

            <section id="about" className="scroll-m-10 mt-10">
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

            <section
                id="services"
                className="bg-white py-6 sm:py-8 lg:py-16 mt-8 sm:mt-12 lg:mt-24"
            >
                <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                            Choose a Plan
                        </h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
                        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
                            <div className="mb-4">
                                <h3 className="text-gray-100 text-2xl sm:text-3xl font-semibold">
                                    Basic Bundle
                                </h3>
                                <p className="text-gray-300">Ebook</p>
                            </div>

                            <div className="space-x-2 mb-4">
                                <span className="text-gray-100 text-4xl font-bold">
                                    $29
                                </span>
                                <span className="text-gray-300 text-2xl line-through">
                                    $49
                                </span>
                            </div>

                            <ul className="text-gray-300 space-y-2 mb-6">
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                            <Link
                                to="/"
                                className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                            >
                                Get the Basic Bundle
                            </Link>
                        </div>

                        <div className="w-full sm:w-1/2 bg-gradient-to-tr from-[#168585] to-gray-900 rounded-lg shadow-xl p-6 sm:p-8">
                            <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
                                <div>
                                    <h3 className="text-white text-2xl sm:text-3xl font-semibold">
                                        Pro Bundle
                                    </h3>
                                    <p className="text-indigo-100">
                                        Ebook + Video course
                                    </p>
                                </div>

                                <span className="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                                    Best value
                                </span>
                            </div>

                            <div className="space-x-2 mb-4">
                                <span className="text-white text-4xl font-bold">
                                    $49
                                </span>
                                <span className="text-indigo-100 text-2xl line-through">
                                    $89
                                </span>
                            </div>

                            <ul className="text-indigo-100 space-y-2 mb-6">
                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                                <li className="flex items-center gap-1.5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0"
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

                            <Link
                                to="/"
                                className="block bg-indigo-200 bg-opacity-50 hover:bg-[#1d7cac] active:bg-[#168585] focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                            >
                                Get the Pro Bundle
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-screen-xl my-6 md:my-24 px-3 mx-auto">
                <section className="mb-32 text-gray-800">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                <StaticImage
                                    placeholder="blurred"
                                    src="https://images.unsplash.com/photo-1615634364452-8daf3851f2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                                    alt="Trendy Pants and Shoes"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                <div className="px-6 my-4 md:py-12 md:px-12">
                                    <h2 className="text-3xl font-bold mb-6 pb-2">
                                        Lorem ipsum dolor sit amet
                                    </h2>
                                    <p className="text-gray-500 mb-6 pb-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. A soluta corporis
                                        voluptate ab error quam dolores
                                        doloremque, quae consectetur.
                                    </p>
                                    <div className="flex flex-wrap mb-6">
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-green-600"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                    ></path>
                                                </svg>
                                                Support 24/7
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-green-600"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                    ></path>
                                                </svg>
                                                Analytics
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-green-600"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                    ></path>
                                                </svg>
                                                Components
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-green-600"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                    ></path>
                                                </svg>
                                                Updates
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-green-600"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                    ></path>
                                                </svg>
                                                Reports
                                            </p>
                                        </div>
                                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2 text-green-600"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                                                    ></path>
                                                </svg>
                                                Mobile
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="inline-block px-7 py-3 bgLogoColor text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Contact Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="text-gray-600 body-font relative bg-white w-full">
                    <div className="px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                Contact Us
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                Whatever cardigan tote bag tumblr hexagon
                                brooklyn asymmetrical gentrify.
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            for="name"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-800 focus:bg-white focus:ring-2 focus:ring-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label
                                            for="email"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label
                                            for="message"
                                            className="leading-7 text-sm text-gray-600"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bgLogoColor border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg">
                                        Send
                                    </button>
                                </div>
                                <div className="p-2 w-full pt-2 mt-2 border-t border-gray-200 text-center">
                                    <Link to="mailto:example@email.com" className="linkColor hoverLink">
                                        example@email.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="CKL Facades" />;

export default IndexPage;
