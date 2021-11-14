<template>
    <div>
        <ul class="uk-flex">
            <li>
                <facebook-button :url="$page.WordPress.post.link" :description="$page.WordPress.post.title" v-bind:isBlank="false" class="share-button--circle share-button--outline" btnText ></facebook-button>
            </li>
            <li>
                <twitter-button :shareUrl="$page.WordPress.post.link" :shareDescription="$page.WordPress.post.title" v-bind:isBlank="false" class="share-button--circle share-button--outline" btnText ></twitter-button>
            </li>
            <li>
                <vkontakte-button :url="$page.WordPress.post.link" :description="$page.WordPress.post.title" v-bind:isBlank="false" class="share-button--circle share-button--outline" btnText></vkontakte-button>
            </li>
        </ul>
    </div>
</template>

<script>
    import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
    import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
    import VkontakteButton from "vue-share-buttons/src/components/VkontakteButton";
    export default {
        name: "SocialShare",
        components: { TwitterButton, FacebookButton, VkontakteButton }
    }
</script>