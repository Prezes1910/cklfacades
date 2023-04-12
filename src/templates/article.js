import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const ArticleTemplate = ({
    pageContext: { slug },
    data: { datoCmsAboutArticle },
}) => {
    return (
        <Layout>
            <section className="relative object-bottom flex items-center min-h-[16rem] overflow-hidden h-24 justify-center w-full">
                <div className="w-full -mt-4 -z-20">
                    <StaticImage
                        className="object-bottom w-[220%] md:w-full"
                        quality={100}
                        src="../assets/hero.png"
                        placeholder="blurred"
                    />
                </div>
            </section>
            <section className="h-[40vh] w-full flex flex-col items-center justify-center">
                <div
                    className="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                >
                    <GatsbyImage
                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                        image={getImage(datoCmsAboutArticle.img.gatsbyImageData)}
                        alt={datoCmsAboutArticle.img.alt}
                    />
                </div>
                <h1
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-duration="600"
                    data-sal-easing="ease"
                    className="text-3xl text-black"
                >
                    {datoCmsAboutArticle.header}
                </h1>
                <p
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="600"
                    data-sal-easing="ease"
                    className="text-3xl text-black mb-10"
                >
                    {datoCmsAboutArticle.description}
                </p>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="ArticleTemplate" />;

export default ArticleTemplate;

export const query = graphql`
    query MyQuery($slug: String) {
        datoCmsAboutArticle(slug: { eq: $slug }) {
            header
            description
            date
            img {
                gatsbyImageData
                alt
            }
        }
    }
`;
