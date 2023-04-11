import * as React from "react";
import Layout from "../../components/pl/layoutPL";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <section className="relative object-bottom flex items-center min-h-[16rem] overflow-hidden h-24 justify-center w-full">
            <div className="w-full -mt-4 -z-20">
                <StaticImage
                    className=" object-bottom w-[220%] md:w-full"
                    quality={100}
                    src="../../assets/hero.png"
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
                Coś poszło nie tak
            </h1>
            <p
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="text-3xl text-black mb-10"
            >
                Bład 404 :(
            </p>
            <Link to="/pl" className="btn text-end">
                Powrót
            </Link>
        </section>
    </Layout>
);

export const Head = () => <Seo title="Upss 404: Bład Ładowania Strony" />;

export default NotFoundPage;
