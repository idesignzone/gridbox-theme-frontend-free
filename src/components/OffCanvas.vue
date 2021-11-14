<template>
  <ClientOnly>
    <div>
      <div id="offcanvas" data-uk-offcanvas="mode: slide; overlay: true; flip: false;" >
          <div class="uk-offcanvas-bar">

              <!-- <button class="uk-offcanvas-close uk-margin-small-top uk-hidden@s" type="button" data-uk-close></button> -->

              <!-- <div class="uk-hidden@s">
                  <input type="text">
              </div> -->

              <!-- Off-canvas Navigation Menu-->
              <div class="uk-margin-small-top uk-hidden@m">
                  <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                      <li :class="{ 'uk-parent' : node.childItems.edges.length != 0 }" v-for="{ node } in $static.WordPress.menuItems.edges" :key="node.id" >
                          <g-link :to="node.path">{{ node.label }}</g-link>
                          <ul class="uk-nav-sub" v-if="node.childItems.edges.length != 0">
                              <li v-for="{ node } in node.childItems.edges" :key="node.id" :class="$route.path === node.path ? 'uk-active' : 'inactive'">
                                <g-link :to="node.path">{{ node.label }}</g-link>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>

          </div>
      </div>
    </div>
  </ClientOnly>
</template>

<static-query>
    query {
      WordPress {
        menuItems(where: { location: OFFCANVAS_MENU, parentDatabaseId: 0 }) {
          edges {
            node {
              id
              databaseId
              parentDatabaseId
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
      }
    }
</static-query>

<script>
    export default {
        name: "OffCanvas",
        methods: {
          offCanvasClose: function(event) {
            UIkit.offcanvas('#offcanvas').hide();
          },
          destroy: function () {
            this.offCanvasClose();
          }
        }
    }
</script>