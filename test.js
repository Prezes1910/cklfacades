export const query = graphql`
    query MyQuery {

        allDatoCmsBadgesHeader {
            edges {
                node {
                    description
                    header
                }
            }
        }
        allDatoCmsBadgesPotin(sort: { meta: { firstPublishedAt: DESC } }) {
            edges {
                node {
                    smallDescription
                }
            }
        }
`;