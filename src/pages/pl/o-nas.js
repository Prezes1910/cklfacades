import * as React from "react";
import Layout from "../../components/pl/layoutPL";
import Seo from "../../components/pl/seoPL";
import { StaticImage } from "gatsby-plugin-image";


const AboutUsPL = () => (
    <Layout>
        <section className="relative object-bottom flex items-center min-h-[16rem] overflow-hidden h-24 justify-center w-full">
            <div className="w-full -mt-4 -z-20">
                <StaticImage
                    className=" object-bottom w-[220%] md:w-full"
                    quality={100}
                    alt="fasades"
                    src="../../assets/hero.png"
                    placeholder="blurred"
                />
            </div>
        </section>
        <section className="h-[40vh] w-full flex flex-col items-center justify-center">
            
        </section>
    </Layout>
);

export const Head = () => <Seo titlePL="O Nas" />;

export default AboutUsPL;
