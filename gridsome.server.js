// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      WordPress {
          posts {
            edges {
              node {
                id
                uri
              }
            }
          } 
          categories {
            edges {
              node {
                id
                uri
              }
            }
          } 
          tags {
            edges {
              node {
                id
                uri
              }
            }
          } 
          pages( first: 50 ) {
            edges {
              node {
                id
                uri
              }
            }
          }
       }
    }`)

    // Create Wordpress pages
    let pages = data.WordPress.pages.edges.map(edge => edge.node)
    pages.forEach((node) => {
      createPage({
        path: `${node.uri}`,
        component: "./src/templates/Page.vue",
        context: {
          id: node.id,
          uri: node.uri
        },
      });
    });

    // Create Post pages
    let posts = data.WordPress.posts.edges.map(edge => edge.node)
    posts.forEach((node) => {
      createPage({
        path: `${node.uri}`,
        component: "./src/templates/posts/Post.vue",
        context: {
          id: node.id,
          uri: node.uri
        },
      });
    });

    // Create Post Category pages
    let postCategories = data.WordPress.categories.edges.map(edge => edge.node)
    postCategories.forEach((node) => {
      createPage({
        path: `${node.uri}`,
        component: "./src/templates/posts/PostCategory.vue",
        context: {
          id: node.id,
          uri: node.uri
        },
      });
    });

    // Create Post Tag pages
    let postTags = data.WordPress.tags.edges.map(edge => edge.node)
    postTags.forEach((node) => {
      createPage({
        path: `${node.uri}`,
        component: "./src/templates/posts/PostTag.vue",
        context: {
          id: node.id,
          uri: node.uri
        },
      });
    });

  });

};
