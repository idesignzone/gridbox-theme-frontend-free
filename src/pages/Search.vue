<template>
    <Layout>
          <div>
            <div class="uk-section">
                <div class="uk-container">
                    <input type="text" name="search" id="search" placeholder="Type something..." v-model="search">

                    <div v-if="searchResults.length > 0">
                        <article v-for="post in searchResults" :key="post.node.id">
                            <h1>
                              <g-link :to="post.node.path">{{ post.node.title }}</g-link>
                              </h1>
                            <div v-if="post.node.excerpt != null" v-html="post.node.excerpt"></div>
                            <div>{{ post.node.date }}</div>
                        </article>
                    </div>

                    <div v-else>
                        <p>Your search didn't return any results. Please try again.</p>
                    </div>
                </div>
            </div>
          </div>
    </layout>
</template>

<static-query>
query {
  WordPress {
    posts {
      edges {
        node {
          id
          title
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
              }
            }
          }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
        }
      }
    }
  }
}
</static-query>

<script>
    export default {
        name: "Search",
        data() {
          return {
            search: ''
          }
        },
        computed: {
          searchResults() {
            return this.$static.WordPress.posts.edges.filter(post => {
                return post.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
            })
          }
        }
    }
</script>