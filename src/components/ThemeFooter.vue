<template>
  <ClientOnly>
    <div>
      <footer class="footer uk-background-cover uk-light uk-background-secondary">
        <div class="footer-middle uk-section">
            <div class="uk-container uk-container-large">
                <div class="uk-flex uk-border-rounded uk-grid-medium widgets">
                  
                  <div v-for="{ node } in $static.WordPress.sidebar.widgets.edges" :key="node.id" style="flex-grow: 1;flex-basis: 0;">
                    <Widget :widget="node" ></Widget>
                  </div>
                 
                </div>
            </div>
        </div>
 
        <div class="footer-bottom">
            <div class="uk-container uk-container-large">
                <div class="inner"> 
                    <div class="uk-flex uk-flex-between copyright">
                        <div class="uk-margin-small-bottom ">
                            <div>Copyright</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </footer>
    </div>
  </ClientOnly>
</template>

<static-query>
query {
  WordPress {
   sidebar(sidebar: FOOTER) {
     id
     name
     widgets {
       edges {
         node {
           id
           html
         }
       }
     }
   }
  }
}
</static-query>

<script>
    import Widget from "./ThemeWidget";
    export default {
        name: "ThemeFooter",
        components: {Widget}
    }
</script>