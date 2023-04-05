import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Admin = () => (
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
        </section>
        <section className="h-[10vh] mb-[50vh] w-full flex flex-col items-center justify-center">
            <p
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="text-3xl text-white font-bold"
            >
                Panel Admin:
            </p>
            <Link
                to="https://cklfacades.admin.datocms.com/editor"
                className="btn mt-12"
            >
                Panel CMS
            </Link>
        </section>
    </Layout>
);

export default Admin;
