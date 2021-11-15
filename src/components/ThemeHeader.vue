<template>
  <ClientOnly>
    <header id="header" class="uk-position-top">

      <div data-uk-sticky="self-target: .uk-navbar-container; cls-active: uk-background-default uk-box-shadow-small uk-navbar-sticky; top: 50vh; animation: uk-animation-slide-top-small">
          <nav class="uk-container uk-container-expand uk-navbar-container" data-uk-navbar>
              <div class="uk-navbar-left">
                  <g-link to="/" class="uk-navbar-item uk-logo uk-padding-remove">

                      <!-- <img data-uk-img v-if="$static.WordPress.siteLogo.mediaItemUrl" :src="$static.WordPress.siteLogo.mediaItemUrl" 
                      width="auto"
                      :alt="$static.WordPress.allSettings.generalSettingsTitle" /> -->
                      <span v-if="$static.WordPress.allSettings.generalSettingsTitle" v-html="$static.WordPress.allSettings.generalSettingsTitle"></span>
                  </g-link>

              </div>

              <!-- Header Navigation Menu -->
              <div class="nav-overlay uk-navbar-center uk-visible@m">
                  <div class="uk-navbar-center uk-visible@m">
                      <ul class="uk-navbar-nav uk-visible@s">
                          <li v-for="{ node } in $static.WordPress.menuItems.edges" :key="node.id" :class="$route.path === node.path ? 'uk-active' : 'inactive'">
                              <g-link :to="node.path">{{ node.label }}</g-link>
                              <ul class="uk-navbar-dropdown uk-nav-sub uk-navbar-dropdown-bottom-left" v-if="node.childItems.edges.length != 0">
                                  <li v-for="{ node } in node.childItems.edges" :key="node.id" :class="$route.path === node.path ? 'uk-active' : 'inactive'">
                                      <g-link :to="node.path" class="uk-navbar-dropdown-close">{{ node.label }}</g-link>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>

                <!-- Header Search -->
                <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
                    <div class="uk-navbar-item uk-width-expand">

                        <!-- Search Form -->
                        <form class="uk-search uk-search-navbar uk-width-1-1 searchform" role="search" method="get" action="#" autocomplete="off">
                          <input type="text" name="search" id="search" placeholder="Type something..." v-model="search">

                            <div data-uk-dropdown="mode: click">
                                <div v-if="searchResults.length > 0">
                                    <div v-for="post in searchResults" :key="post.node.id">

                                        <div class="uk-flex uk-grid-small uk-margin-small uk-flex-middle">
                                            <div>
                                                <g-image v-if="post.node.featuredImage" :src="post.node.featuredImage.node.mediaItemUrl" class="uk-border-rounded" alt="" width="80" />
                                            </div>
                                            <div>
                                                <g-link :to="post.node.uri"><p class="uk-margin-remove-bottom uk-text-bold">{{ post.node.title }}</p></g-link>
                                                <div :inner-html.prop="post.node.content | truncate(180)"></div>
                                                <formated-date :date="post.node.date" class="uk-text-meta"></formated-date>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-else>
                                    <p>Your search didn't return any results. Please try again.</p>
                                </div>
                            </div>
                        </form>

                    </div>
                    <a href="#" class="uk-navbar-toggle search-close-toggle" data-uk-close data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade"></a>
                </div>

              <!-- Header Right -->
              <div class="uk-navbar-right">

                <div class="uk-navbar-item">

                    <!-- Header Search Icon -->
                    <g-link class="uk-navbar-toggle uk-visible@m nav-overlay" data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20">
                        <path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"/>
                      </svg>
                    </g-link>

                </div> 

                <!-- Header off-canvas Icon -->
                <g-link href="#" class="uk-navbar-toggle uk-padding-remove-right" data-uk-toggle="target: #offcanvas">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24">
                    <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"/>
                  </svg>
                </g-link>

              </div>
          </nav>
      </div>

  </header>
  </ClientOnly>
</template>

<static-query>
    query {
      WordPress {

        posts(first: 3) {
          edges {
            node {
              id
              title
              uri
              content
              date
              excerpt
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
        menuItems(where: { location: HEADER_MENU, parentDatabaseId: 0 }) {
          edges {
            node {
              id
              databaseId
              label
              path
              parentId
              childItems {
                edges {
                  node {
                    id
                    label
                    path
                  }
                }
              }
            }
          }
        }
        allSettings {
          generalSettingsTitle
        }
      }
    }
</static-query>

<script>
    import FormatedDate from "./posts/FormatedDate";
    export default {
        name: "ThemeHeader",
        components: {
          FormatedDate
          },
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
        },
        filters: {
          truncate(string, value) {
            return string.substring(0, value) + '…';
          }
        }
    }
</script>