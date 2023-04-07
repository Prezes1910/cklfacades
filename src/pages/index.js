import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
    const {
        allDatoCmsHeroTitle,
        allDatoCmsAbout,
        allDatoCmsAboutArticle,
        allDatoCmsChooseAPlan,
        allDatoCmsPlanCard,
        allDatoCmsArticle,
    } = data;
    return (
        <Layout>
            <section className="relative flex items-center min-h-[16rem] justify-center w-full overflow-hidden">
                <div className=" -mt-8 w-full -z-20">
                    <StaticImage
                        className="h-full w-[230%] md:w-full"
                        quality={100}
                        src="../assets/hero.png"
                        placeholder="blurred"
                    />
                </div>

                <div className="absolute flex flex-col items-center justify-cente">
                    {allDatoCmsHeroTitle.edges.map(({ node }) => (
                        <h1 className="text-xl md:w-[70%] mt-12 sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl lg:pt-12 xl:py-0 font-bold text-gray-100 text-center lg:w-[60%] px-6">
                            {node.heroTitle}
                        </h1>
                    ))}
                    <Link
                        to="/"
                        className="mt-2 lg:mt-6 hover:bg-black transition-colors duration-200 text-white bg-zinc-800/20 border py-2 px-3"
                    >
                        Show More
                    </Link>
                </div>

                <div className="text-gray-300 hidden md:flex text-sm absolute left-2 flex-col items-center justify-center uppercase -my-3">
                    {["L", "I", "N", "K", "E", "D", "I", "N"].map(
                        (letter, index) => (
                            <p key={index}>{letter}</p>
                        )
                    )}
                    <div className="h-8 w-[2px] my-4 bg-gray-600 rounded-3xl" />
                    <a
                        href="https://www.linkedin.com/company/ckl-facades/?fbclid=IwAR2BI5yn7XTImJnXJ9Pl0OmsGPAA8fFKzTba0CPcDrkQxkUtcQJtEX_CIMQ"
                        target="_blank"
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
                    </a>
                </div>
            </section>

            <section id="about" className="scroll-m-10 mt-10">
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
                            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
                                <Link
                                    to="/"
                                    className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400 text-sm">
                                        {node.date}
                                    </span>

                                    <h2 className="text-gray-800 w-[70%] text-xl font-bold">
                                        <Link
                                            to="/"
                                            className="hoverLink  active:text-indigo-600 transition duration-100"
                                        >
                                            {node.header}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-500 w-[70%]">
                                        {node.description}
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
                                    to="/"
                                    className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                >
                                    Get the {node.title2}
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
                                    to="/"
                                    className="block bg-indigo-200 bg-opacity-50 hover:bg-[#1d7cac] active:bg-[#168585] focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                >
                                    Get the {node.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-screen-xl my-6 md:my-24 px-3 mx-auto">
                <section className="mb-32 text-gray-800">
                    <div className="block rounded-lg shadow-lg bg-white">
                        {allDatoCmsArticle.edges.map(({ node }) => (
                            <div className="flex flex-wrap items-center">
                                <div className="relative grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                    <GatsbyImage
                                        className="lg:w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.img.alt}
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
                                        <button
                                            type="button"
                                            className="btn w-full md:w-auto"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Contact Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
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
        allDatoCmsAboutArticle {
            edges {
                node {
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
