<template>

    <div>
      <div class="uk-section title-area uk-dark uk-background-muted">
          <div class="uk-container uk-container-large uk-margin-large-top">
              <div class="uk-grid-medium uk-flex-bottom uk-flex-between uk-text-center" data-uk-grid>

                    <!-- Breadcrumb Headings -->
                    <div class="uk-width-1-1"
                         data-uk-scrollspy="cls: uk-animation-slide-bottom-small;target: .animation-item; delay: 200"
                    >
                        <h5 class="animation-item">BLOG</h5>
                        <h1 class="animation-item uk-margin-small-top" v-if="$static.WordPress.allSettings.generalSettingsDescription != null">{{$static.WordPress.allSettings.generalSettingsDescription}}</h1>
                        <hr class="animation-item uk-divider-small uk-text-primary">
                        <div class="animation-item uk-margin-small-top"></div>
                    </div>

                    <!-- Breadcrumb Nav -->
                    <div class="uk-margin-medium-top breadcrumb">
                        <ul class="uk-breadcrumb">
                            <li>
                              <g-link to="/">Home</g-link> 
                              </li>
                            <li>Blog</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
        <div class="uk-section">
            <div class="uk-container uk-container-large">
                <div class="uk-grid-medium" data-uk-grid>
                    <div class="uk-width-expand@m">
                        <div class="uk-grid-medium uk-child-width-1-2@m" data-uk-grid="masonry: true">
                            <div v-for="{ node } in $static.WordPress.posts.edges" :key="node.id">
                                <Post :post="node"></Post>
                            </div>
                        </div>
                        <div class="pagination center">

                        </div>
                    </div>
                    <div class="uk-width-1-3@m">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<static-query>
    query GetAllPosts ($first: Int, $last: Int, $endCursor: String, $startCursor: String) {
      WordPress {
        posts (first:$first last:$last after:$endCursor before:$startCursor) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
          edges {
            cursor
            node {
              id
              title
              content
              commentCount
              uri
              date
              excerpt
              author {
                node {
                  id
                  name
                }
              }
              categories {
                edges {
                  node {
                    id
                    name
                    uri
                  }
                }
              }
              featuredImage {
                node {
                  mediaItemUrl 
                  altText
                }
              }
            }
          }
        }
        allSettings {
          generalSettingsDescription
        }
      }
    }
</static-query>

<script>
    import Post from "./PostCard";
    import Sidebar from "../sidebars/BlogSidebar";
    import Pagination from "./BlogPagination";
    export default {
        name: "ThemeBlog",
        components: {Sidebar, Post, Pagination}
    }
</script>