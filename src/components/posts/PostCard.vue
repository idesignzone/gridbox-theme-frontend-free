<template>

    <div>
        <div class="single-news">

            <!-- News Image -->
            <div class="uk-card uk-card-default uk-card-small uk-border-rounded">
                <div class="uk-card-media-top news-image uk-inline uk-transition-toggle">
                    <g-image class="uk-transition-scale-up uk-transition-opaque"
                    v-if="post.featuredImage"
                    :src="post.featuredImage.node.mediaItemUrl"
                    :alt="post.featuredImage.node.altText"
                  />
                  <div class="news-date uk-position-small uk-position-top-left uk-padding-small uk-overlay-default uk-text-center">
                      <badge-date :date="post.date"></badge-date>
                  </div>
                 <div v-if="post.author" class="meta-details">
              
                         <!-- <g-image src="#" alt="#"> -->
                         <span>{{ post.author.node.name }}</span>
              
                 </div>
                </div>

                <div class="uk-card-body uk-text-left">

                  <!-- <g-link :to="node.uri" v-for="{ node } in post.categories.edges" :key="node.id" class="uk-link-text">
                    {{ node.name }}
                  </g-link> -->
            

                  <g-link :to="post.uri">
                    <h3 class="uk-text-bold uk-margin-small-top">{{post.title}}</h3>
                  </g-link>
                    <div :inner-html.prop="post.content | truncate(160)"></div>
                </div>

                <div class="uk-card-footer uk-flex uk-flex-between">
                    <g-link :to="post.uri" class="uk-button uk-button-text">Read more</g-link>
                    <div class="uk-text-small uk-text-meta">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" class="uk-margin-small-right uk-margin-small-left">
                            <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM128 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/>
                        </svg>
                        <span v-if="post.commentCount != null">{{ post.commentCount }} comments</span>
                        <span v-else>No comments</span>
                    </div>
                </div>

            </div>
      </div>
   </div>

</template>

<script>
import BadgeDate from "~/components/posts/BadgeDate";
export default {
  name: "PostCard",
  components: { BadgeDate },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    truncate(string, value) {
      return string.substring(0, value) + '…';
    }
  }
}
</script>