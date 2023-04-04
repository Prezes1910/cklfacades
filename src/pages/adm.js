import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Admin = () => (
    <Layout>
        <section className="h-[80vh] w-full flex flex-col items-center justify-center relative">
            <div className="absolute opacity-100 max-w-[2000px] -z-30 min-h-[40rem] w-full h-full max-h-[55rem]">
                <StaticImage
                    className="absolute opacity-90 top-0 -z-30 min-h-[40rem] h-full w-full object-center object-cover"
                    placeholder="blurred"
                    src="../assets/bgAboutUs.png"
                    alt="tło dokumenty"
                />
            </div>
            <p
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="text-3xl text-white"
            >
                Panel Administracyjny
            </p>
            <p className="text-3xl text-white mb-10"></p>
            <div
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="w-full md:w-2/3 lg:w-1/2 flex flex-col md:flex-row items-stretch justify-center"
            >
                <Link
                    to="https://nazoltej-5289.admin.datocms.com/editor"
                    className="btn text-center mx-4 mb-4 md:mb-0"
                >
                    CMS Edytor
                </Link>
                <Link
                    to="https://app.netlify.com/sites/nazoltej/forms/64176fc97213720008dbcb5f"
                    className="btn text-center mx-4 mb-4 md:mb-0"
                >
                    Wiadomości
                </Link>
            </div>
        </section>
    </Layout>
);

export default Admin;
