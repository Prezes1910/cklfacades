const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const queryResults = await graphql(`
        query MyQuery {
            allDatoCmsAboutArticle {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    {
    }
    const articleTemplate = path.resolve(`./src/templates/article.js`);
    queryResults.data.allDatoCmsAboutArticle.edges.forEach((node) => {
        console.log(node);
        createPage({
            path: `${node.slug}`,
            component: articleTemplate,
            context: {
                product: node,
            },
        });
    });
};
