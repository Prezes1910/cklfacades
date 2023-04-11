import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="text-base max-w-[2000px] mx-auto">
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <main className="w-full overflow-hidden">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
