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
    const quaryArticlesPL = await graphql(`
        {
            allDatoCmsAboutArticleCopy1 {
                nodes {
                    slug
                }
            }
        }
    `);
    const queryProjectsPL = await graphql(`
        {
            allDatoCmsProjectArticleCopy1 {
                nodes {
                    slug
                }
            }
        }
    `);

    const articleTemplatePL = path.resolve(`./src/templates/articlePL.js`);

    quaryArticlesPL.data.allDatoCmsAboutArticleCopy1.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path:`/pl/` + slug,
            component: articleTemplatePL,
            context: {
                slug,
            },
        });
    });

    const projectTemplatePL = path.resolve(`./src/templates/projectPL.js`);

    queryProjectsPL.data.allDatoCmsProjectArticleCopy1.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path:`/pl/` + slug,
            component: projectTemplatePL,
            context: {
                slug,
            },
        });
    });
};
