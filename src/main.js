// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import Global CSS
require("~/main.css")

// Import Main Layout
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {

  // Add Fonts
  head.link.push({
    rel: "stylesheet",
    href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap'
  })

  // Add External Scripts
  head.script.push({ src: '/assets/js/pace.min.js' })

  Vue.component('Layout', DefaultLayout)
  
}
