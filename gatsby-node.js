const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const quaryArticles = await graphql(`
        {
            allDatoCmsAboutArticle {
                nodes {
                    slug
                }
            }
        }
    `);
    const queryProjects = await graphql(`
        {
            allDatoCmsProjectArticle {
                nodes {
                    slug
                }
            }
        }
    `);

    const articleTemplate = path.resolve(`./src/templates/article.js`);

    quaryArticles.data.allDatoCmsAboutArticle.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: articleTemplate,
            context: {
                slug,
            },
        });
    });

    const projectTemplate = path.resolve(`./src/templates/project.js`);

    queryProjects.data.allDatoCmsProjectArticle.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: projectTemplate,
            context: {
                slug,
            },
        });
    });
};
