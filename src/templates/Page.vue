<template>
    <Layout>
      <div>
          <!-- Title Area -->
          <div id="title-area" v-if="$page.WordPress.page.pageOptions.pageTitleArea.showTitleArea != null" class="title-area uk-inline uk-flex uk-background-cover uk-section"
            :class="$page.WordPress.page.pageOptions.pageTitleArea.layout.height +' '+ $page.WordPress.page.pageOptions.pageTitleArea.layout.theme"
            :style="[$page.WordPress.page.pageOptions.pageTitleArea.background.image ? {'background-image': 'url(' + $page.WordPress.page.pageOptions.pageTitleArea.background.image.mediaItemUrl + ')'} : {'background-color': $page.WordPress.page.pageOptions.pageTitleArea.background.color}]" 
          >

              <div v-show="$page.WordPress.page.pageOptions.pageTitleArea.background.overlay != null" class="uk-position-cover" :class="$page.WordPress.page.pageOptions.pageTitleArea.background.overlay"></div>

              <div class="uk-width-1-1 uk-position-z-index">
                  <div class="uk-container uk-container-large uk-margin-large-top">
                      <div class="uk-grid-medium uk-flex-bottom uk-flex-between" :class="$page.WordPress.page.pageOptions.pageTitleArea.layout.contentAlignment" data-uk-grid>

                          <!-- Title Area Headings -->
                          <div :class="'uk-width-1-' + $page.WordPress.page.pageOptions.pageTitleArea.layout.contentGrid + '@m'" data-uk-scrollspy="cls: uk-animation-slide-bottom-small;target: .animation-item; delay: 200">

                            <h5 v-show="$page.WordPress.page.pageOptions.pageTitleArea.headings.subtitle != null" class="animation-item">{{$page.WordPress.page.pageOptions.pageTitleArea.headings.subtitle}}</h5>
                            <h1 v-if="$page.WordPress.page.pageOptions.pageTitleArea.headings.title" class="animation-item uk-margin-small-top">{{$page.WordPress.page.pageOptions.pageTitleArea.headings.title}}</h1>
                            <h1 v-else class="animation-item uk-margin-small-top">{{$page.WordPress.page.title}}</h1>
                            <hr class="animation-item uk-divider-small uk-text-primary">
                            <div class="animation-item uk-margin-small-top uk-margin-small-bottom" v-show="$page.WordPress.page.pageOptions.pageTitleArea.headings.description != null" v-html="$page.WordPress.page.pageOptions.pageTitleArea.headings.description"></div>


                          </div>

                          <!-- Breadcrumb Nav --> 
                          <div v-show="$page.WordPress.page.pageOptions.pageTitleArea.showBreadcrumb == true" class="uk-margin-small-top breadcrumb uk-position-z-index">
                              <ul class="uk-breadcrumb uk-margin-medium-bottom">
                                <li>
                                  <g-link to="/">Home</g-link>
                                  </li>
                                <li v-if="$page.WordPress.page.pageOptions.pageTitleArea.headings.title">{{$page.WordPress.page.pageOptions.pageTitleArea.headings.title}}</li>
                                <li v-else>{{$page.WordPress.page.title}}</li>
                              </ul>
                          </div>

                      </div>
                  </div>
              </div>

          </div>

          <!-- Posts page -->
          <Blog v-if="$page.WordPress.page.isPostsPage === true"></Blog>

          <!-- Page -->
          <div v-else>

            <!-- Page with no sidebar -->
            <div v-if="$page.WordPress.page.template.templateName === 'Default'" class="uk-width-expand@m" v-html="$page.WordPress.page.content"></div>

            <!-- Page with sidebar -->
            <div class="uk-section" v-else>
              <div class="uk-container uk-container-large">
                <div class="uk-grid-medium" data-uk-grid>
                    <Sidebar class="uk-width-1-3@m" v-if="$page.WordPress.page.template.templateName === 'LeftSidebar'"></Sidebar>
                    <div class="uk-width-expand@m" v-html="$page.WordPress.page.content"></div>
                    <Sidebar class="uk-width-1-3@m" v-if="$page.WordPress.page.template.templateName === 'RightSidebar'"></Sidebar>
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
    page (id: $id) {
      id
      uri
      title
      content
      isPostsPage
      isFrontPage
      template {
        templateName
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaItemUrl
        }
      }
        pageOptions {
          customCss
          pageSidebar
          pageHeader {
            headerTheme
            transparentHeader
          }
          pageTitleArea {
            showTitleArea
            showBreadcrumb
            layout {
              contentAlignment
              contentGrid
              height
              theme
            }
            headings {
              description
              subtitle
              title
            }
            background {
              color
              overlay
              image {
                mediaItemUrl
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
    import Blog from "../components/posts/ThemeBlog";
    import Sidebar from "../components/sidebars/PrimarySidebar";
    export default {
      name: "Page",
      components: { Sidebar, Blog },
      metaInfo () {
        return {
          title: this.$page.WordPress.page.title,
          htmlAttrs: {
            lang: this.$page.WordPress.generalSettings.language,
          },
          bodyAttrs: {
            class: this.$page.WordPress.page.pageOptions.pageHeader.headerTheme
          },
          style: [
            { cssText: this.$page.WordPress.page.pageOptions.customCss, type: 'text/css' }
          ]
        }
      }
    }
</script>