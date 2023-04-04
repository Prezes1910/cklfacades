// Logic exports
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <Layout>
            <div className="relative flex items-center min-h-[16rem] justify-center w-full">
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
                    Technical and design services to the building envelope and
                    facade industry
                </h1>
                <Link to="/" className="mt-2 xl:mt-6 hover:bg-black transition-colors duration-200 text-white bg-zinc-800/20 border py-2 px-3">Show More</Link>
                </div>
            </div>

            <div className="h-[200vh]"></div>
        </Layout>
    );
};

export const Head = () => <Seo title="CKL Facades" />;

export default IndexPage;
