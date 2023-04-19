import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
    const {
        allDatoCmsHeroTitle,
        allDatoCmsAbout,
        allDatoCmsAboutArticle,
        allDatoCmsInfoSection,
        allDatoCmsAdvantage,
        allDatoCmsProjectHeader,
        allDatoCmsProjectArticle,
        allDatoCmsChooseAPlan,
        allDatoCmsPlanCard,
        allDatoCmsArticle,
        allDatoCmsNumberSection,
        allDatoCmsBadgesHeader,
        allDatoCmsBadgesPotin,
    } = data;

    const [changeLanguage, setLanguage] = useState(false);
    const HandleLanguage = () => {
        setLanguage(!changeLanguage);
    };
    return (
        <Layout>
            <section className="relative flex items-center min-h-[16rem] justify-center w-full overflow-hidden">
//                 <button
//                     onClick={HandleLanguage}
//                     className="absolute flex items-center justify-center top-[2.2vh] sm:top-[1.5vh] lg:top-10 z-[99] right-20 lg:right-12 p-2 rounded-full bg-gray-800 transition-all duration-100"
//                 >
//                     <StaticImage
//                         height={20}
//                         width={20}
//                         alt="uk"
//                         placeholder="blurred"
//                         src="../assets/language/uk.png"
//                     />
//                     <div
//                         className={
//                             changeLanguage
//                                 ? "absolute flex flex-col items-center justify-start rounded-lg mt-3 text-gray-100 top-full bg-gray-800 py-3 scale-100 transition-transform duration-50"
//                                 : "absolute rounded-lg mt-3 text-gray-100 top-full bg-gray-800 py-3 scale-0 transition-transform duration-50"
//                         }
//                     >
//                         <Link
//                             to="/"
//                             className="flex items-center justify-start px-6 w-full hover:bg-gray-700"
//                         >
//                             <StaticImage
//                                 height={12}
//                                 width={12}
//                                 layout="fixed"
//                                 alt="uk"
//                                 placeholder="blurred"
//                                 src="../assets/language/uk.png"
//                             />
//                             <p className="ml-2">English</p>
//                         </Link>
//                         <Link
//                             to="/pl"
//                             className="flex items-center justify-start px-6 mt-3 w-full hover:bg-gray-700"
//                         >
//                             <StaticImage
//                                 height={12}
//                                 width={12}
//                                 layout="fixed"
//                                 placeholder="blurred"
//                                 alt="poland"
//                                 src="../assets/language/poland.png"
//                             />
//                             <p className="ml-2">Polish</p>
//                         </Link>
//                     </div>
//                 </button>
                <div className="relative -mt-8 w-full -z-20">
                    <StaticImage
                        className="h-full w-[230%] md:w-full"
                        quality={100}
                        src="../assets/hero.png"
                        loading="eager"
                        alt="Facades project"
                        placeholder="blurred"
                    />
                </div>

                <div className="absolute flex flex-col items-center justify-cente">
                    {allDatoCmsHeroTitle.edges.map(({ node }) => (
                        <h1 className="text-xl md:w-[70%] mt-12 sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl lg:pt-12 xl:py-0 font-bold text-gray-100 text-center lg:w-[70%] px-6">
                            {node.heroTitle}
                        </h1>
                    ))}
                    <Link
                        to="/about-us"
                        className="mt-2 lg:mt-6 hover:bg-black transition-colors duration-200 text-white bg-zinc-800/20 border py-2 px-3"
                    >
                        Show More
                    </Link>
                </div>

                <div className="text-gray-300 hidden lg:flex text-sm absolute left-2 flex-col items-center justify-center uppercase -my-3">
                    {["L", "I", "N", "K", "E", "D", "I", "N"].map(
                        (letter, index) => (
                            <p key={index}>{letter}</p>
                        )
                    )}
                    <div className="h-8 w-[2px] my-4 bg-gray-600 rounded-3xl" />
                    <Link
                        to="https://www.linkedin.com/company/ckl-facades/?fbclid=IwAR2BI5yn7XTImJnXJ9Pl0OmsGPAA8fFKzTba0CPcDrkQxkUtcQJtEX_CIMQ"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className="h-4 w-4"
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

            <section id="about" className="scroll-m-16 mt-10 mb-6 md:mb-16">
                <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                            About Us
                        </h2>

                        {allDatoCmsAbout.edges.map(({ node }) => (
                            <p className="max-w-screen-md text-gray-500 w-[70%] md:text-lg text-center mx-auto">
                                {node.aboutUs}
                            </p>
                        ))}
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        {allDatoCmsAboutArticle.edges.map(({ node }) => (
                            <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-6">
                                <Link
                                    to={node.slug}
                                    className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        loading="eager"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt || "Facades"}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm">
                                        {node.date}
                                    </span>

                                    <h2 className="text-gray-800 w-[93%] lg:w-[70%] text-xl font-bold">
                                        <Link
                                            to="/"
                                            className="hoverLink  active:text-gray-900 transition duration-100"
                                        >
                                            {node.header}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-500 w-[93%] lg:w-[70%]">
                                        {node.description}
                                    </p>

                                    <div>
                                        <Link
                                            to={node.slug}
                                            className="linkColor hoverLink active:text-gray-900 font-semibold transition duration-100"
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    {allDatoCmsInfoSection.edges.map(({ node }) => (
                        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                            <div className="order-1">
                                <div className="max-h-[35rem] overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                                    <GatsbyImage
                                        className="h-full w-full object-cover object-center"
                                        loading="lazy"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt || "Facades"}
                                    />
                                </div>
                            </div>

                            <div className="md:pt-8 ">
                                <p className="text-center font-bold text-[#168585] md:text-left">
                                    {node.smallHeader}
                                </p>

                                <h1 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:mb-6 md:text-left">
                                    {node.header1}
                                </h1>

                                <p className="mb-6 text-gray-600 md:mb-8">
                                    {node.description1}
                                </p>

                                <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                                    {node.header2}
                                </h2>

                                <p className=" text-gray-600 md:mb-8">
                                    {node.description2}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="pt-6 lg:pt-16">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {allDatoCmsAdvantage.edges.map(({ node }) => (
                        <div className="rounded-lg bg-gray-100 shadow-md px-4 py-6 md:py-8 lg:py-12">
                            <p className="mb-2 text-center font-semibold text-[#1d7cac] md:mb-3 lg:text-lg">
                                {node.smallHeader}
                            </p>

                            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                                {node.header}
                            </h2>

                            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                                {node.description}
                            </p>
                            <div className="w-full overflow-hidden rounded-lg border bg-gray-50 shadow-sm lg:block max-w-screen-xl mx-auto mt-4 xl:mt-8">
                                <div className="mx-auto flex flex-col lg:flex-row max-w-screen-lg items-center gap-8 p-8">
                                    <div className="grid w-2/3 grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group flex-col md:flex-row flex gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1d7cac] text-white shadow-lg transition duration-100 group-active:bg-[#168585] md:h-12 md:w-12">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                                    />
                                                </svg>
                                            </div>

                                            <div>
                                                <div className="mb-1 font-semibold">
                                                    {node.pointx1}
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {node.descriptionPointx1}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="group flex-col md:flex-row flex gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1d7cac] text-white shadow-lg transition duration-100 group-active:bg-[#168585] md:h-12 md:w-12">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                    />
                                                </svg>
                                            </div>

                                            <div>
                                                <div className="mb-1 font-semibold">
                                                    {node.pointx2}
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {node.descriptionPointx2}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="group flex-col md:flex-row flex gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1d7cac] text-white shadow-lg transition duration-100 group-active:bg-[#168585] md:h-12 md:w-12">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                                    />
                                                </svg>
                                            </div>

                                            <div>
                                                <div className="mb-1 font-semibold">
                                                    {node.pointx3}
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {node.descriptionPointx3}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="group flex-col md:flex-row flex gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1d7cac] text-white shadow-lg transition duration-100 group-active:bg-[#168585] md:h-12 md:w-12">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                                </svg>
                                            </div>

                                            <div>
                                                <div className="mb-1 font-semibold">
                                                    {node.pointx4}
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {node.descriptionPointx4}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 lg:w-1/3 overflow-hidden rounded-lg border">
                                        <div className="h-48 bg-gray-100">
                                            <GatsbyImage
                                                className="h-full w-full object-cover object-center"
                                                loading="lazy"
                                                image={getImage(
                                                    node.img.gatsbyImageData
                                                )}
                                                alt={node.img.alt || "Facades"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-screen-xl mt-12 px-6 lg:px-12 mx-auto">
                <div className="lg:mb-20 text-gray-800 text-center lg:text-left">
                    {allDatoCmsProjectHeader.edges.map(({ node }) => (
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            {node.header}
                        </h2>
                    ))}

                    <div
                        id="projects"
                        className="grid scroll-m-20 lg:grid-cols-3 gap-x-6 lg:gap-x-12"
                    >
                        {allDatoCmsProjectArticle.edges.map(({ node }) => (
                            <div
                                className="bg-white block group rounded-lg  shadow-lg mb-6 lg:mb-0"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                <div className="relative overflow-hidden bg-no-repeat bg-cover">
                                    <GatsbyImage
                                        className="w-full rounded-t-lg h-52"
                                        loading="lazy"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt || "Facades"}
                                    />
                                    <Link to={node.slug}>
                                        <div className="absolute group-hover:translate-y-0 flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed group-hover:opacity-100 translate-y-full transition duration-300 ease-in-out bg-gradient-to-tr from-black to-gray-800/70">
                                            <p className="text-white font-bold tracking-widest">
                                                {node.header}
                                            </p>
                                        </div>
                                    </Link>
                                    <svg
                                        className="absolute"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1440 320"
                                    >
                                        <path
                                            fill="#fff"
                                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-3">
                                        {node.header}
                                    </h3>
                                    <p className="mb-4 pb-2">
                                        {node.description}
                                    </p>
                                    <Link
                                        to={node.slug}
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className="btn"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        ))}
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

                        {allDatoCmsChooseAPlan.edges.map(({ node }) => (
                            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                                {node.chooseAPlan}
                            </p>
                        ))}
                    </div>

                    {allDatoCmsPlanCard.edges.map(({ node }) => (
                        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
                            <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
                                <div className="mb-4">
                                    <h3 className="text-gray-100 text-2xl sm:text-3xl font-semibold">
                                        {node.title2}
                                    </h3>
                                    <p className="text-gray-300">
                                        {node.smallHeader2}
                                    </p>
                                </div>

                                <div className="space-x-2 mb-4">
                                    <span className="text-gray-100 text-4xl font-bold">
                                        {node.price2}
                                    </span>
                                    <span className="text-gray-300 text-2xl line-through">
                                        {node.priceDeleted2}
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

                                        <span>{node.pointc1}</span>
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

                                        <span>{node.pointc2}</span>
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

                                        <span>{node.pointc3}</span>
                                    </li>
                                </ul>

                                <Link
                                    to="/#contact"
                                    className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                >
                                    Contact for {node.title2}
                                </Link>
                            </div>

                            <div className="w-full sm:w-1/2 bg-gradient-to-tr from-[#168585] to-gray-900 rounded-lg shadow-xl p-6 sm:p-8">
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-white text-2xl sm:text-3xl font-semibold">
                                            {node.title}
                                        </h3>
                                        <p className="text-indigo-100">
                                            {node.smallHeader}
                                        </p>
                                    </div>

                                    <span className="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                                        {node.promo}
                                    </span>
                                </div>

                                <div className="space-x-2 mb-4">
                                    <span className="text-white text-4xl font-bold">
                                        {node.price}
                                    </span>
                                    <span className="text-indigo-100 text-2xl line-through">
                                        {node.priceDeleted}
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

                                        <span>{node.pointx1}</span>
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

                                        <span>{node.pointx2}</span>
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

                                        <span>{node.pointx3}</span>
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

                                        <span>{node.pointx4}</span>
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

                                        <span>{node.pointx5}</span>
                                    </li>
                                </ul>

                                <Link
                                    to="/#contact"
                                    className="block bg-indigo-200 bg-opacity-50 hover:bg-[#27b5b9] active:bg-[#168585] focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                >
                                    Contact for {node.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-screen-xl my-6 md:my-24 px-3 mx-auto">
                <section className="text-gray-800">
                    <div className="block rounded-lg bg-white">
                        {allDatoCmsArticle.edges.map(({ node }) => (
                            <div className="flex flex-wrap items-center">
                                <div className="relative grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                    <GatsbyImage
                                        className="lg:w-full sm:max-h-[10rem] lg:max-h-[44rem] rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt || "Facades"}
                                    />
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                    <div className="px-6 my-4 md:py-12 md:px-12">
                                        <h2 className="text-3xl font-bold mb-6 pb-2">
                                            {node.header}
                                        </h2>
                                        <p className="text-gray-500 mb-6 pb-2">
                                            {node.description}
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
                                                    {node.pointx1}
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
                                                    {node.pointx2}
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
                                                    {node.pointx3}
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
                                                    {node.pointx4}
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
                                                    {node.pointx5}
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
                                                    {node.pointx6}
                                                </p>
                                            </div>
                                        </div>
                                        <Link
                                            to="/#contact"
                                            type="button"
                                            className="btn w-full md:w-auto"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Contact Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>

            <section className="relative h-96 overflow-hidden max-w-[2000px] flex flex-col items-center justify-center">
                <div className="absolute w-full h-full bg-gradient-to-t from-black/90 to-gray-800/90 top-0 left-0 z-20" />
                <StaticImage
                    quality={60}
                    src="https://images.unsplash.com/photo-1486149266845-b44cb2835667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Facades Project"
                    className="w-full h-full "
                />
                {allDatoCmsNumberSection.edges.map(({ node }) => (
                    <div className="text-white absolute w-full z-30 text-center">
                        <div class="container  px-12 py-24 mx-auto">
                            <div class="flex flex-wrap -m-4 text-center">
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium lg:text-5xl sm:text-4xl text-3xl text-white">
                                        {node.number1}
                                    </h2>
                                    <p class="leading-relaxed">{node.word1}</p>
                                </div>
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium lg:text-5xl sm:text-4xl text-3xl text-white">
                                        {node.number2}
                                    </h2>
                                    <p class="leading-relaxed">{node.word2}</p>
                                </div>
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium lg:text-5xl sm:text-4xl text-3xl text-white">
                                        {node.number3}
                                    </h2>
                                    <p class="leading-relaxed">{node.word3}</p>
                                </div>
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium lg:text-5xl sm:text-4xl text-3xl text-white">
                                        {node.number4}
                                    </h2>
                                    <p class="leading-relaxed">{node.word4}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="text-gray-600 body-font">
                <div className="container py-6 md:py-12 px-5 pt-10 mx-auto">
                    {allDatoCmsBadgesHeader.edges.map(({ node }) => (
                        <div className="text-center mb-6 lg:mb-20">
                            <h4 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
                                {node.header}
                            </h4>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                {node.description}
                            </p>
                        </div>
                    ))}

                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {allDatoCmsBadgesPotin.edges.map(({ node }) => (
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="3"
                                        className="text-[#27b5b9] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        {node.smallDescription}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="contact"
                className="text-gray-600 body-font relative bg-white"
            >
                <div className="container px-5 py-12 md:py-24 mx-auto flex md:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameborder="0"
                            title="map"
                            marginheight="0"
                            marginwidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.3521304770245!2d-2.032411982954312!3d52.67323369185885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709fc4e084cc95%3A0x40b694cb9a80fb0!2sCannock%20WS11%200GS%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1681474121631!5m2!1spl!2spl"
                            style={{
                                filter: "grayscale(1) contrast(1.2) opacity(0.6)",
                            }}
                        ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    Cannock, Staffordshire WS11 0GS, GB
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <Link
                                    to="mailto:cezary.lenart@cklfacades.com"
                                    className="text-[#168585] leading-relaxed"
                                >
                                    cezary.lenart@cklfacades.com
                                </Link>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <Link
                                    to="tel:+447546677411"
                                    className="leading-relaxed"
                                >
                                    +447546677411
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-2xl">
                        <h2 className="text-[#168585] font-bold text-lg mb-1 title-font">
                        Form
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Write to us, we will reply within 24 hours
                        </p>
                        <div className="relative mb-2">
                            <label
                                htmlFor="name"
                                for="name"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-2">
                            <label
                                htmlFor="phone"
                                for="phone"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Tel
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="email"
                                for="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                for="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-[#168585] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="btn border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                            Send Message
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled
                            brook viral artisan.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsHeroTitle {
            edges {
                node {
                    heroTitle
                }
            }
        }
        allDatoCmsAbout {
            edges {
                node {
                    aboutUs
                }
            }
        }
        allDatoCmsAboutArticle(limit: 4, sort: { date: DESC }) {
            edges {
                node {
                    slug
                    img {
                        alt
                        gatsbyImageData
                    }
                    header
                    description
                    date
                }
            }
        }
        allDatoCmsInfoSection {
            edges {
                node {
                    description1
                    description2
                    header1
                    header2
                    img {
                        alt
                        gatsbyImageData
                    }
                    smallHeader
                }
            }
        }
        allDatoCmsAdvantage {
            edges {
                node {
                    description
                    descriptionPointx1
                    descriptionPointx2
                    descriptionPointx3
                    descriptionPointx4
                    header
                    img {
                        alt
                        gatsbyImageData
                    }
                    pointx1
                    pointx2
                    pointx3
                    pointx4
                    smallHeader
                }
            }
        }
        allDatoCmsProjectHeader {
            edges {
                node {
                    header
                }
            }
        }
        allDatoCmsProjectArticle(
            limit: 3
            sort: { meta: { firstPublishedAt: DESC } }
        ) {
            edges {
                node {
                    description
                    header
                    img {
                        alt
                        gatsbyImageData
                    }
                    slug
                }
            }
        }
        allDatoCmsNumberSection {
            edges {
                node {
                    number1
                    number2
                    number3
                    number4
                    word1
                    word2
                    word3
                    word4
                }
            }
        }
        allDatoCmsBadgesHeader {
            edges {
                node {
                    description
                    header
                }
            }
        }
        allDatoCmsBadgesPotin(sort: { meta: { firstPublishedAt: DESC } }) {
            edges {
                node {
                    smallDescription
                }
            }
        }
        allDatoCmsChooseAPlan {
            edges {
                node {
                    chooseAPlan
                }
            }
        }
        allDatoCmsPlanCard {
            edges {
                node {
                    pointc1
                    pointc2
                    pointc3
                    pointx1
                    pointx2
                    pointx3
                    pointx4
                    pointx5
                    price
                    price2
                    priceDeleted
                    priceDeleted2
                    promo
                    title
                    title2
                    smallHeader
                    smallHeader2
                }
            }
        }
        allDatoCmsArticle {
            edges {
                node {
                    description
                    header
                    img {
                        alt
                        gatsbyImageData
                    }
                    pointx1
                    pointx2
                    pointx3
                    pointx4
                    pointx5
                    pointx6
                }
            }
        }
    }
`;

export const Head = () => <Seo title="CKL Facades" />;

export default IndexPage;
