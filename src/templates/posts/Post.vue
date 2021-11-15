<template>
  <Layout>
    <div>
      <div class="uk-section title-area uk-dark uk-background-muted">
          <div class="uk-container uk-container-large uk-margin-large-top">
              <div class="uk-grid-medium uk-flex-bottom uk-flex-between uk-text-center" data-uk-grid>

                  <!-- Breadcrumb Headings -->
                  <div class="uk-width-1-1" data-uk-scrollspy="cls: uk-animation-slide-bottom-small;target: .animation-item; delay: 200">
                      <h5 class="animation-item">BLOG</h5>
                      <h1 class="animation-item uk-margin-small-top"> {{ $page.WordPress.post.title }}</h1>
                      <hr class="animation-item uk-divider-small uk-text-primary">
                      <div class="animation-item uk-margin-small-top" v-html="$page.WordPress.post.excerpt"></div>
                  </div>

                  <!-- Breadcrumb Nav -->
                      <div class="uk-margin-medium-top breadcrumb">
                          <ul class="uk-breadcrumb">
                              <li>
                                <g-link to="/">Home</g-link>
                                </li>
                              <li>
                                <g-link to="/blog">Blog</g-link>
                                </li>
                              <li>{{$page.WordPress.post.title}}</li>
                          </ul>
                      </div>

              </div>

          </div>
      </div>

      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <div class="uk-flex-center uk-grid-medium" data-uk-grid>

            <div class="uk-width-2-3@m">
              <div class="uk-inline news-image">
                <g-image
                  v-if="$page.WordPress.post.featuredImage"
                  :src="$page.WordPress.post.featuredImage.node.sourceUrl"
                  :alt="$page.WordPress.post.featuredImage.node.altText"
                />
                <div class="news-date uk-position-small uk-position-top-left uk-padding-small uk-overlay-default uk-text-center">
                  <badge-date :date="$page.WordPress.post.date"></badge-date>
                </div>
              </div>

              <div class="uk-width-1-1">
                <div>
                  <h1 class="uk-margin-medium-top">{{ $page.WordPress.post.title }}</h1>

                  <ul class="uk-margin-small-top uk-flex">
                      <li class="uk-margin-medium-right">
                        <div class="uk-flex">
                          <i class="lni lni-calendar"></i>
                          <p class="uk-text-bold">Posted on:  </p>   
                          <div class="uk-flex">
                            <formated-date :date="$page.WordPress.post.date" class="uk-margin-small-left"></formated-date>
                          </div>
                        </div>
                      </li>
                      <!-- <li>
                        <div><i class="lni lni-eye"></i>55 View</div>
                      </li> -->
                  </ul>

                  <div class="uk-margin-medium-top" v-html="$page.WordPress.post.content"></div>

                    <div class="uk-margin-medium-top" v-if="$page.WordPress.post.categories.edges.length">
                        <div class="uk-flex uk-flex-middle uk-flex-wrap">
                            <h5 class="uk-margin-medium-right uk-margin-small-top uk-margin-remove-bottom">Related Categories</h5>
                            <div class="uk-margin-small-top">
                              <g-link :to="node.uri" v-for="{ node } in $page.WordPress.post.categories.edges" :key="node.id" class="uk-button uk-button-default uk-button-small uk-border-rounded">{{ node.name }}</g-link>
                            </div>
                        </div>
                    </div>

                  <div>

                      <!-- Social Share -->
                      <ul class="uk-margin-medium-top uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">

                          <li class="uk-margin-small-top uk-text-meta">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" class="uk-margin-small-right uk-margin-small-left">
                                  <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM128 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/>
                              </svg>
                              <span v-if="$page.WordPress.post.commentCount != null">{{ $page.WordPress.post.commentCount }} comments</span>
                              <span v-else>No comments</span>
                          </li>

                      </ul>

                  </div>
                </div>

                <!-- Author Info -->
                <div class="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-border-rounded">
                    <div class="uk-flex uk-flex-middle director">
                        <div>
                            <g-image v-if="$page.WordPress.post.author.node.avatar" :src="$page.WordPress.post.author.node.avatar.url" :alt="$page.WordPress.post.author.node.name" />
                        </div>
                        <div>
                            <h4>Written by {{ $page.WordPress.post.author.node.name }}</h4>
                            <div class="uk-margin-small-bottom uk-text-italic uk-inline" v-show="$page.WordPress.post.author.node.description !== null">{{$page.WordPress.post.author.node.description}}</div>
                        </div>
                    </div>
                </div>

                <!-- Posts Navigation -->
                <div class="recent-nav">
                    <div class="uk-flex uk-flex-between">
                        <div class="uk-width-2-4">
                            <div class="prev-project">
                                <a href="#" rel="prev" class="nav-link">
                                  <span><i class="uk-visible@s fas fa-arrow-left"></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="uk-width-1-4">
                            <div class="middle-grid">
                                <g-link href="#" data-uk-icon="icon: grid"></g-link>
                            </div>
                        </div>
                        <div class="uk-width-2-4">
                            <div class="next-project">
                                <a href="#" rel="next" class="nav-link">
                                  <span><i class="uk-visible@s fas fa-arrow-right"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Posts Comments -->
                <div v-if="$page.WordPress.allSettings.discussionSettingsDefaultCommentStatus === 'open'">
                  <h3 class="comments-title uk-margin-medium-top">{{ $page.WordPress.post.commentCount }} thoughts on "{{ $page.WordPress.post.title }}"</h3>
                  <ul class="uk-comment-list uk-margin-medium-top">
                      <li v-for="{ node } in $page.WordPress.post.comments.edges" :key="node.id" v-show="node.parentDatabaseId === 0" class="uk-margin-medium-top">
                          <article class="uk-comment uk-comment-primary uk-visible-toggle uk-border-rounded" tabindex="-1">
                              <header class="uk-comment-header uk-position-relative">
                                  <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                      <div class="uk-width-auto">
                                          <g-image class="uk-comment-avatar uk-border-circle" src="~/assets/images/avatar.jpg" :alt="node.author.node.name" width="60" height="60"></g-image>
                                      </div>
                                      <div class="uk-width-expand">
                                          <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{node.author.node.name}}</a></h4>
                                          <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                              <li><a href="#">{{ node.date }}</a></li>
                                              <li><g-link :to="$page.WordPress.allSettings.generalSettingsUrl + '/wp-admin/comment.php?action=editcomment&c=' + node.databaseId">Edit</g-link></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="uk-position-top-right uk-position-small uk-hidden-hover"><a class="uk-link-muted" href="#">Reply</a></div>
                              </header>
                              <div class="uk-comment-body">
                                <div v-html="node.content"></div>
                              </div>
                          </article>
                          <ul v-if="node.replies.edges.length != 0" class="uk-margin-medium-top">
                              <li v-for="{ node } in node.replies.edges" :key="node.id">
                                  <article class="uk-comment uk-comment-primary uk-visible-toggle uk-border-rounded" tabindex="-1">
                                      <header class="uk-comment-header uk-position-relative">
                                          <div class="uk-grid-medium uk-flex-middle" uk-grid>
                                            <div class="uk-width-auto">
                                                <g-image class="uk-comment-avatar uk-border-circle" src="~/assets/images/avatar.jpg" :alt="node.author.node.name" width="60" height="60"></g-image>
                                            </div>
                                            <div class="uk-width-expand">
                                                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{node.author.node.name}}</a></h4>
                                                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                                    <li><a href="#">{{ node.date }}</a></li>
                                                    <li><g-link :to="$page.WordPress.allSettings.generalSettingsUrl + '/wp-admin/comment.php?action=editcomment&c=' + node.databaseId">Edit</g-link></li>
                                                </ul>
                                            </div>
                                          </div>
                                          <div class="uk-position-top-right uk-position-small uk-hidden-hover"><a class="uk-link-muted" href="#">Reply</a></div>
                                      </header>
                                      <div class="uk-comment-body">
                                          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                      </div>
                                  </article>
                              </li>
                          </ul>
                      </li>
                  </ul>

                  <!-- Comments Form -->
                  <div>
                    <h3 class="comment-reply-title uk-margin-medium-top">Leave a Reply</h3>
                    <form action="" class="comment-form" @submit.prevent="addComment" id="commentform">
                        <!-- <div class="logged-in-as">
                            <a href="#" aria-label="Logged in as Ali. Edit your profile.">Logged in as Ali</a>.
                            <a href="#">Log out?</a>
                        </div> -->
                        <div>
                            <label>Comment</label>
                            <textarea class="uk-textarea uk-margin-small-top uk-margin-small-bottom uk-border-rounded" rows="4" v-model="content" placeholder="Type your comment here..."></textarea>
                        </div>
                        <button name="submit" type="submit" class="uk-button uk-button-primary uk-margin-small-top uk-border-rounded" value="Post Comment">SUBMIT</button>
                    </form>
                  </div>

                </div>

                <div v-else>
                  
                  <h2>Comments are closed</h2>

                </div>

              </div>
            </div> 

            <div class="uk-width-1-3@m">
                <Sidebar></Sidebar>
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
    post (id: $id) {
      id
      title
      content
      date
      commentCount
      link
      excerpt
      author {
        node {
          id
          name
          description
        avatar {
          url
        }
        }
      }
      categories {
        edges {
          node {
            id
            name
            uri
          }
        }
      }
      tags {
        edges {
          node {
            name
            id
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
          }
        }
      }
    comments(where: {order: ASC}) {
       edges {
         node {
            id
            content
            date
            parentDatabaseId
            databaseId
            commentedOn {
              node {
                id
              }
            }
           author {
             node {
               name

             }
           }
           replies {
             edges {
               node {
                databaseId
                 author {
                   node {
                     name
                     id
                   }
                 }
                 content
                 date
                 parentDatabaseId
               }
             }
           }
         }
       }
     }
    }
    posts {
      nodes {
        id
        date
      }
    }
    allSettings {
      generalSettingsUrl
      discussionSettingsDefaultCommentStatus
      generalSettingsLanguage
    }
  }
}
</page-query>

<script>
import FormatedDate from "~/components/posts/FormatedDate";
import BadgeDate from "~/components/posts/BadgeDate";
import Sidebar from "~/components/sidebars/BlogSidebar";
import axios from "axios"

export default {
  data(){
    return {
      id: '',
      content: '',
      author: ''
    }
  },
  components: { 
    FormatedDate, 
    BadgeDate, 
    Sidebar
  },
  methods: {
    addComment() {
      axios({
      url: 'https://gridbox-admin.idesignzone.com',
      method: 'post',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      data: {
        query: `mutation CREATE_COMMENT {
                createComment(input: {
                  commentOn: 329, 
                  content: "hey", 
                  author: "Jason"
                }) {
                  success
                  comment {
                    id
                    content
                    author {
                      node {
                        name
                      }
                    }
                  }
                }
              }`
            }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
    }
  },
  metaInfo () {
    return {
      title: this.$page.WordPress.post.title,
      htmlAttrs: {
        lang: this.$page.WordPress.allSettings.generalSettingsLanguage
      }
    }
  }
}
</script>
