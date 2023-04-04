// Logic exports
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
    const { allDatoCmsS1, allDatoCmsS2, allDatoCmsS3, allDatoCmsS4 } = data;

    return (
        <Layout>
            <section className="relative min-h-[20rem] h-[35rem] z-0 mx-auto">
                <div className="absolute -z-30 h-full w-full">
                    <StaticImage
                        className="absolute top-0 -z-30 h-full w-full"
                        placeholder="blurred"
                        loading="eager"
                        src="../assets/hero.png"
                        alt="samochód retro z otwarta maską"
                    />
                </div>

                <div className="flex flex-col max-w-screen-2xl mx-auto items-center justify-center h-full w-full text-center">
                    <h1
                        data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className=" tshadow text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
                    >
                        REJESTRACJA POJAZÓW
                    </h1>
                    <h2
                        data-sal="slide-right"
                        data-sal-delay="600"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className=" tshadow text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-[20%] font-semibold mb-12 text-amber-300"
                    >
                        na żółte tablice
                    </h2>
                    <div
                        data-sal="slide-left"
                        data-sal-delay="900"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                    >
                        <Link
                            aria-label="Kontakt"
                            to="/kontakt"
                            className="btn  text-end mr-8 "
                        >
                            Kontakt
                        </Link>
                        <Link
                            aria-label="Oferta"
                            to="/oferta"
                            className="btn text-end "
                        >
                            Oferta
                        </Link>
                    </div>
                </div>
            </section>
            {allDatoCmsS1.edges.map(({ node }) => (
                <section className="relative md:py-16 lg:py-24">
                    <div className="absolute top-0 opacity-100 max-w-[2000px] -z-30 min-h-[40rem] w-full h-full max-h-[55rem]">
                        <StaticImage
                            className="absolute opacity-90 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                            placeholder="blurred"
                            src="../assets/bgAboutUs.png"
                            alt="tło dokumenty"
                        />
                    </div>
                    <div className="py-6 md:pb-8 lg:pb-12 flex items-center justify-center">
                        <h3
                            data-sal="slide-up"
                            data-sal-delay="200"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className=" tracking-wider text-amber-300 text-3xl md:text-4xl lg:text-5xl text-center font-semibold"
                        >
                            {node.naglowek}
                        </h3>
                    </div>
                    <div className="flex items-center justify-center flex-col lg:flex-row">
                        <div className="lg:w-[20%] mb-6 lg:mb-0 flex flex-row items-center lg:items-start text-center justify-center lg:justify-start flex-wrap lg:flex-col">
                            <div
                                data-sal="slide-up"
                                data-sal-delay="0"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="mr-2 w-[15rem] px-4 h-[8rem]"
                            >
                                <p className="text-amber-400 shadowScale text-5xl lg:text-7xl font-semibold">
                                    {node.liczby}
                                </p>
                                <p className="text-white text-md font-semibold">
                                    {node.tekstPodLiczbami}
                                </p>
                            </div>
                            <div
                                data-sal="slide-up"
                                data-sal-delay="200"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="mr-2 w-[15rem] px-4 h-[8rem]"
                            >
                                <p className="text-amber-400 shadowScale text-5xl lg:text-7xl font-semibold">
                                    {node.liczbyCopy1}
                                </p>
                                <p className="text-white text-md font-semibold">
                                    {node.tekstPodLiczbamiCopy1}
                                </p>
                            </div>
                            <div
                                data-sal="slide-up"
                                data-sal-delay="500"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="mr-2 w-[15rem] px-4 h-[8rem]"
                            >
                                <p className="text-amber-400 shadowScale text-5xl lg:text-7xl font-semibold">
                                    {node.liczbyCopy2}
                                </p>
                                <p className="text-white text-md font-semibold">
                                    {node.tekstPodLiczbamiCopy2}
                                </p>
                            </div>
                        </div>
                        <div
                            data-sal="slide-right"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className="lg:w-1/5 w-[80%] flex items-center justify-center flex-col"
                        >
                            <p className="text-white mb-3">
                                {node.opisNaRodku}
                            </p>
                        </div>
                        <div className="lg:w-1/5"></div>
                        <div
                            data-sal="slide-left"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className="absolute opacity-50 -z-10 lg:right-[15%] lg:w-[40%]"
                        >
                            <StaticImage
                                placeholder="blurred"
                                className="h-full w-full -z-10"
                                alt="czarno biały samochód"
                                src="../assets/carRemoveBg.png"
                            />
                        </div>
                    </div>
                </section>
            ))}
            {allDatoCmsS2.edges.map(({ node }) => (
                <section className="pt-6 md:pt-8 lg:pt-24">
                    <h3
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className=" tracking-wider pb-12 text-amber-300 text-3xl md:text-4xl lg:text-5xl text-center font-semibold"
                    >
                        {node.naglowek}
                    </h3>
                    <div className="flex items-center justify-center flex-col lg:flex-row">
                        <div
                            data-sal="slide-left"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            className=" lg:order-1 w-full lg:w-1/4 h-auto object-contain origin-center mb-4"
                        >
                            <StaticImage
                                className="w-full h-full"
                                alt="lampa samochodu czerwonego"
                                src="../assets/circleCar.png"
                            />
                        </div>
                        <div className="w-full lg:w-1/3 px-2 text-white ml-4">
                            <h4
                                data-sal="slide-up"
                                data-sal-delay="0"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="text-xl lg:text-2xl uppercase text-amber-300 font-semibold mb-2"
                            >
                                {node.tytulOpisu}
                            </h4>
                            <p
                                data-sal="slide-up"
                                data-sal-delay="200"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="mb-6 w-[90%]"
                            >
                                {node.opis}
                            </p>
                            <div
                                data-sal="slide-right"
                                data-sal-delay="400"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="w-[80%] h-auto object-contain origin-center"
                            >
                                <p>{node.nazwaLinii1}</p>
                                <div className=" rounded-sm mb-2 bg-zinc-200 w-full h-8 relative">
                                    {" "}
                                    <div className="z-20 animLoading h-full absolute w-full top-0" />{" "}
                                </div>
                                <p>{node.nazwaLinii1Copy1}</p>

                                <div className=" rounded-sm mb-2 bg-zinc-200 w-full h-8 relative">
                                    {" "}
                                    <div className="z-20 animLoading1 h-full absolute w-full top-0" />{" "}
                                </div>
                                <p>{node.nazwaLinii1Copy2}</p>

                                <div className=" rounded-sm mb-2 bg-zinc-200 w-full h-8 relative">
                                    {" "}
                                    <div className="z-20 animLoading2 h-full absolute w-full top-0" />{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {allDatoCmsS3.edges.map(({ node }) => (
                <section className="relative py-6 md:py-8 lg:py-24">
                    <div className="absolute opacity-100 max-w-[2000px] -z-30 min-h-[40rem] w-full h-full max-h-[55rem]">
                        <StaticImage
                            className="absolute opacity-90 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                            placeholder="blurred"
                            src="../assets/bgAboutUs.png"
                            alt="tło dokumenty"
                        />
                    </div>
                    <div className="flex items-center justify-center flex-col lg:flex-row">
                        <div className="w-full py-6 md:py-8 lg:py-24 lg:w-1/4 h-auto object-contain origin-center mb-4 relative">
                            <StaticImage
                                className="w-full h-full"
                                alt="lampa samochodu czerwonego"
                                src="../assets/carRedAndYellow.png"
                            />
                        </div>
                        <div className="w-full lg:w-1/3 px-2 text-white ml-4">
                            <h4
                                data-sal="slide-down"
                                data-sal-delay="0"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="text-xl lg:text-2xl uppercase text-amber-300 font-semibold mb-2"
                            >
                                {node.naglowek1}
                            </h4>
                            <p
                                data-sal="slide-down"
                                data-sal-delay="200"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="mb-6"
                            >
                                {node.opis1}
                            </p>
                            <h4
                                data-sal="slide-down"
                                data-sal-delay="400"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="text-xl lg:text-2xl uppercase text-amber-300 font-semibold mb-2"
                            >
                                {node.naglowek2}
                            </h4>
                            <p
                                data-sal="slide-down"
                                data-sal-delay="600"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                className="mb-4"
                            >
                                {node.opis2}
                            </p>
                            <div>
                                <div className="mr-4 flex items-center mb-4">
                                    {" "}
                                    <StaticImage src="../assets/handshake.png" />
                                    <p className="ml-4">{node.textDoIkony1}</p>
                                </div>
                                <div className=" flex items-center">
                                    <StaticImage src="../assets/clock.png" />
                                    <p className="ml-4">{node.textDoIkony2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            {allDatoCmsS4.edges.map(({ node }) => (
                <section>
                    <div class="max-w-screen-xl bg-gradient-to-tr from-[#161616ee] via-[#17171173] to-[#242323ee] border border-white/20 shadow-sm shadow-white rounded-sm  px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <div class="grid max-w-screen-md gap-8 mx-auto text-amber-600 sm:grid-cols-3">
                            <div
                                data-sal="slide-up"
                                data-sal-delay="0"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                class="flex flex-col items-center justify-center"
                            >
                                <p class="mb-2 text-3xl md:text-4xl lg:text-5xl font-extrabold">
                                    {node.znaki1}
                                </p>
                                <p class="font-light text-white">
                                    {node.textPodZnakiem1}
                                </p>
                            </div>
                            <div
                                data-sal="slide-up"
                                data-sal-delay="200"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                class="flex flex-col items-center justify-center"
                            >
                                <p class="mb-2 text-3xl md:text-4xl lg:text-5xl font-extrabold">
                                    {node.znaki1Copy1}
                                </p>
                                <p class="font-light text-white">
                                    {node.textPodZnakiem1Copy1}
                                </p>
                            </div>
                            <div
                                data-sal="slide-up"
                                data-sal-delay="600"
                                data-sal-duration="600"
                                data-sal-easing="ease"
                                class="flex flex-col items-center justify-center"
                            >
                                <p class="mb-2 text-3xl md:text-4xl lg:text-5xl font-extrabold">
                                    {node.znaki1Copy2}
                                </p>
                                <p class="font-light text-white">
                                    {node.textPodZnakiem1Copy2}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            <section class=" px-12 py-6 md:py-8 lg:py-24">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-7">
                        <h4
                            data-sal="slide-down"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            class="max-w-2xl mb-4 text-3xl text-white font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl"
                        >
                            Zobacz Nas Na Social Media
                        </h4>
                        <p
                            data-sal="slide-down"
                            data-sal-delay="0"
                            data-sal-duration="600"
                            data-sal-easing="ease"
                            class="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl"
                        >
                            Rejestracja pojazdów na „żółte” tablice. Pełna
                            dokumentacja, opinie rzeczoznawcy. Zapraszamy
                        </p>
                        <Link
                            to="https://www.facebook.com/rejestracjanazolte"
                            className="inline-flex items-center justify-center btn"
                        >
                            FACEBOOK
                            <svg
                                class="w-3 h-3 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                        <Link
                            to="https://www.instagram.com/nazoltej.pl/"
                            className="inline-flex items-center justify-center ml-3 btn"
                        >
                            INSTAGRAM
                            <svg
                                class="w-3 h-3 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                    <div
                        data-sal="slide-down"
                        data-sal-delay="0"
                        data-sal-duration="600"
                        data-sal-easing="ease"
                        className="lg:mt-0 lg:col-span-5 lg:flex relative"
                    >
                        <StaticImage
                            className="w-full h-full"
                            alt="dwa iphone 12 pro z otwarta strona internetową nażółtej"
                            src="../assets/iPhone12.png"
                        />
                        <div className="absolute w-44 h-44 bg-green-600 bgBluredCHangeColor top-0 left-1/3 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsS1 {
            edges {
                node {
                    liczby
                    liczbyCopy1
                    liczbyCopy2
                    naglowek
                    opisNaRodku
                    tekstPodLiczbami
                    tekstPodLiczbamiCopy1
                    tekstPodLiczbamiCopy2
                }
            }
        }
        allDatoCmsS2 {
            edges {
                node {
                    naglowek
                    nazwaLinii1
                    nazwaLinii1Copy1
                    nazwaLinii1Copy2
                    opis
                    tytulOpisu
                }
            }
        }
        allDatoCmsS3 {
            edges {
                node {
                    naglowek1
                    naglowek2
                    opis1
                    opis2
                    textDoIkony1
                    textDoIkony2
                }
            }
        }
        allDatoCmsS4 {
            edges {
                node {
                    textPodZnakiem1
                    textPodZnakiem1Copy1
                    textPodZnakiem1Copy2
                    znaki1
                    znaki1Copy1
                    znaki1Copy2
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Nażółtej" />;

export default IndexPage;
