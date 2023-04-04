// Logic exports
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
    return (
        <Layout>
            <h1> hello</h1>
            <div className="h-[200vh]"></div>
        </Layout>
    );
};


export const Head = () => <Seo title="CKL Facades" />;

export default IndexPage;
