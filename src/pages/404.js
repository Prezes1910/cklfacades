import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <section className="h-[80vh] w-full flex flex-col items-center justify-center">
            <h1
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="text-3xl text-white"
            >
                Coś poszło nie tak
            </h1>
            <p
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="600"
                data-sal-easing="ease"
                className="text-3xl text-white mb-10"
            >
                Bład 404 :(
            </p>
            <Link to="/" className="btn text-end">
                Powrót
            </Link>
        </section>
    </Layout>
);

export const Head = () => <Seo title="Upss 404: Bład Ładowania Strony" />;

export default NotFoundPage;
