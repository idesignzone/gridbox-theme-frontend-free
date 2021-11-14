<template>
  <Layout>
    <div>

      <div class="uk-section title-area uk-dark uk-background-muted">
          <div class="uk-container uk-container-large uk-margin-large-top">
              <div class="uk-grid-medium uk-flex-bottom uk-flex-between uk-text-center" data-uk-grid>

                    <!-- Breadcrumb Headings -->
                    <div class="uk-width-1-1"
                         data-uk-scrollspy="cls: uk-animation-slide-bottom-small;target: .animation-item; delay: 200"
                    >
                        <h5 class="animation-item">CATEGORY</h5>
                        <h1 class="animation-item uk-margin-small-top" v-if="$page.WordPress.category.name != null">{{ $page.WordPress.category.name }}</h1>
                        <hr class="animation-item uk-divider-small uk-text-primary">
                        <div class="animation-item uk-margin-small-top" v-if="$page.WordPress.category.description != null" v-html="$page.WordPress.category.description"></div>
                    </div>

                    <!-- Breadcrumb Nav --> 
                    <div class="uk-margin-medium-top breadcrumb">
                        <ul class="uk-breadcrumb">
                            <li>
                              <g-link to="/">Home</g-link>
                            </li>
                            <li>
                              <g-link to="/category">Category</g-link>
                            </li>
                            <li>{{ $page.WordPress.category.name }}</li>
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
                            <div v-for="{ node } in $page.WordPress.category.posts.edges" :key="node.id">
                                <Post :post="node"></Post>
                            </div>
                        </div>
                        <div class="pagination center">
<!--                            <Pager :info="$static.WordPress.posts.pageInfo" class="pagination-list"></Pager>-->
                        </div>
                    </div>
                    <div class="uk-width-1-3@m">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  WordPress {
    category (id: $id) {
      id
      name
      description
      posts {
        edges {
          node {
            id
            title
            excerpt
            featuredImage {
              node {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
    generalSettings {
      language
    }
  }
}
</page-query>

<script>
// import { Pager } from 'gridsome'
import Post from '../../components/posts/PostCard.vue'
import Sidebar from "../../components/sidebars/BlogSidebar";

export default {
  components: {
    Sidebar,
    Post
  },
  metaInfo () {
    return {
      title: this.$page.WordPress.category.name,
      htmlAttrs: {
        lang: this.$page.WordPress.generalSettings.language
      }
    }
  }
}
</script>
