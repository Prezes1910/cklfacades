const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryResults = await graphql(`
        {
            allDatoCmsAboutArticle {
                nodes {
                    slug
                    header
                    description
                    img {
                        gatsbyImageData
                        alt
                    }
                    date
                }
            }
        }
    `);
    {
    }

    const articleTemplate = path.resolve(`./src/templates/article.js`);

    queryResults.data.allDatoCmsAboutArticle.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: articleTemplate,
            context: {
                slug,
            },
        });
    });
};

