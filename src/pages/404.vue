<template>
  <Layout>
    <div class="uk-inline uk-background-cover uk-flex uk-flex-middle hero uk-dark" data-uk-parallax="fade: 10" data-uk-height-viewport>
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-large" style="padding-top: 120px; padding-bottom: 120px;">
          <div class="uk-child-width-1-2@m uk-flex-middle uk-flex-center uk-flex-between uk-grid uk-grid-stack" data-uk-grid>
              <div class="hero-content uk-position-relative uk-flex-first uk-first-column" data-uk-scrollspy="cls: uk-animation-slide-bottom-small;target: .animation-item; delay: 200">
                  <h5 class="uk-h5 animation-item uk-margin-remove-bottom uk-scrollspy-inview uk-animation-slide-bottom-small">NOT FOUND</h5>
                  <h1 class="uk-h1 animation-item hero-title uk-margin-remove-top uk-scrollspy-inview uk-animation-slide-bottom-small">Oh no, something went <mark>wrong</mark></h1>
                  <p class="animation-item uk-margin-small-top uk-margin-medium-bottom uk-scrollspy-inview uk-animation-slide-bottom-small">It looks like nothing was found at this location. Maybe try one of the links or search for what you are looking for?</p>
                  
                  <a href="/" class="animation-item uk-button uk-margin-small-bottom button-default uk-button-primary uk-border-rounded uk-scrollspy-inview uk-animation-slide-bottom-small">
                      Back to home                                    
                  </a>
              </div>
          </div>
        </div>
      </div>
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
      }
    }
    generalSettings {
      language
    }
  }
}
</page-query>

<script>
  export default {
    name: "404",
    metaInfo () {
      return {
        title: this.$page.WordPress.nodeByUri.title,
        htmlAttrs: {
          lang: this.$page.WordPress.generalSettings.language
        }
      }
    }
  }
</script>
