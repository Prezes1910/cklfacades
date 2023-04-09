import * as React from "react";
import Layout from "../../components/pl/layoutPL";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Adminpl = () => (
    <Layout>
        <section className="relative flex items-center min-h-[16rem] justify-center w-full">
            <div className="w-full -mt-4 -z-20">
                <StaticImage
                    className="h-full w-[220%] md:w-full"
                    quality={100}
                    src="../../assets/hero.png"
                    placeholder="blurred"
                />
            </div>
            <p
                className="absolute text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl capitalize text-white font-bold"
            >
                Panel Administracyjny:
            </p>
        </section>
        <section className="mb-24 w-full flex flex-col items-center justify-center">
            <Link
                to="https://cklfacades.admin.datocms.com/editor"
                className="btn shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 mt-12"
            >
                Panel CMS
            </Link>
        </section>
    </Layout>
);

export default Adminpl;
