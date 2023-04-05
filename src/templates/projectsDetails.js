import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { qraphql } from "gatsby";

const ProjectsDetails = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-red-500 text-2xl">Title</h1>
                <h3>Stack</h3>
                <p>blabla lorem lorem paolem</p>
            </div>
        </Layout>
    );
};

// export const query = graphql``;

export const Head = () => <Seo title="" />;

export default ProjectsDetails;
