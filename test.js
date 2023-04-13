export const query = graphql`
    query MyQuery {
        allDatoCmsNumberSection {
            edges {
                node {
                    number1
                    number2
                    number3
                    number4
                    word1
                    word2
                    word3
                    word4
                }
            }
        }
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