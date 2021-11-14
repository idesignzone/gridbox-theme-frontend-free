<template>
    <Layout>
        <div>
          <div v-if="$page.WordPress.nodeByUri.isFrontPage === true" v-html="$page.WordPress.nodeByUri.content"></div>
          <blog v-else-if="$page.WordPress.nodeByUri.isPostsPage === true"></blog>
          <div v-else>Setup your homepage displays in WordPress settings/reading</div>
        </div>
    </Layout>
</template>

<page-query>
query {
  WordPress {
    nodeByUri(uri: "/") {
      __typename
      ... on WordPress_ContentType {
        id
        name
        isPostsPage
      }
      ... on WordPress_Page {
        id
        content
        isFrontPage
        pageOptions {
          customCss
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
  import Blog from "../components/posts/ThemeBlog";
  export default {
      name: "Home",
    components: { Blog },
    metaInfo () {
      return {
        title: this.$page.WordPress.nodeByUri.title,
        htmlAttrs: {
          lang: this.$page.WordPress.generalSettings.language
        },
        style: [
          { cssText: this.$page.WordPress.nodeByUri.pageOptions.customCss, type: 'text/css' }
        ]
      }
    }
    
  }
</script>
