import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const AboutUs = ({ data: { allDatoCmsShowmore } }) => {
    return (
        <Layout>
            <section className="relative object-bottom flex items-center min-h-[16rem] overflow-hidden h-24 justify-center w-full">
                <div className="w-full -mt-4 -z-20">
                    <StaticImage
                        className=" object-bottom w-[220%] md:w-full"
                        quality={100}
                        alt="fasades"
                        src="../assets/hero.png"
                        placeholder="blurred"
                    />
                </div>
            </section>

            {allDatoCmsShowmore.edges.map(({ node }) => (
                <div class="container -mt-24 mb-36 lg:mb-48 px-6 mx-auto max-w-screen-lg">
                    <section class="mb-20 text-gray-800">
                        <GatsbyImage
                            className="w-full h-96 shadow-lg rounded-lg mb-6"
                            loading="eager"
                            image={getImage(node.img.gatsbyImageData)}
                            alt={node.img.alt || "Facades"}
                        />

                        <h1 class="font-bold text-3xl mb-6">{node.title}</h1>

                        <p>{node.description}</p>
                    </section>
                </div>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsShowmore(sort: {meta: {firstPublishedAt: DESC}}) {
            edges {
                node {
                    description
                    img {
                        alt
                        gatsbyImageData
                    }
                    title
                }
            }
        }
    }
`;

export const Head = () => <Seo title="About Us" />;

export default AboutUs;
