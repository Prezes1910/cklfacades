import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <section className="relative object-bottom flex items-center min-h-[16rem] overflow-hidden h-24 justify-center w-full">
            <div className="w-full -mt-4 -z-20">
                <StaticImage
                    className=" object-bottom w-[220%] md:w-full"
                    quality={100}
                    src="../assets/hero.png"
                    placeholder="blurred"
                />
            </div>
        </section>
        <section className="h-[40vh] w-full flex flex-col items-center justify-center">
            <h1
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="text-3xl text-black"
            >
                Coming Soon
            </h1>
            <Link to="/pl" className="btn text-end">
                Back
            </Link>
        </section>
    </Layout>
);

export const Head = () => <Seo title="Projects" />;

export default NotFoundPage;
