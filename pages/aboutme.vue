<template>
<div class="l-aboutme">
  <div class="specialization">
    <div class="skills">
      <h3>Layout:</h3>
      <ul class="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS/SCSS</li>
        <li>Bootstrap</li>
        <li>CSS Grid/Flexbox</li>
      </ul>

      <h3>Frontend Development:</h3>
      <ul class="skills-list">
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>AJAX</li>
        <li>Vue.js</li>
        <li>Nuxt.js</li>
        <li>Anime.js</li>
      </ul>

      <h3>Backend (Basics*)</h3>
      <ul class="skills-list">
        <li>PHP</li>
        <li>Yii 2</li>
        <li>SQL</li>
        <li>Node.js</li>
      </ul>
    </div>

    <div class="splitter"></div>

    <div class="description">
      <h1>What is my specialization?</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, ducimus necessitatibus excepturi maiores libero odit quidem sunt, ad doloremque aut delectus totam, dolorum laudantium sit labore debitis <b>explicabo</b> optio repellat animi
        reprehenderit sint molestiae. Iusto facere repudiandae accusantium perspiciatis fugit voluptate porro voluptas. Doloremque exercitationem veniam omnis qui odio nesciunt!</p>
      <p><i class="ps"><b>*Backend Basics</b> - Languages and technologies that I am familiar with just to have a general understanding of what happens on Backend or to code small pieces of code using it (not to develop whole apps).</i></p>
    </div>
  </div>

  <div class="project-types">
    <h2>Project types</h2>
    <h5>There are 3 types of project that I specialize in:</h5>
    <div class="types-wrapper">
      <div class="item">
        <img src="@/assets/logo.png">
        <h3>VueJS Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestiae porro enim, in error assumenda perferendis quod laudantium, eius reiciendis.</p>
      </div>
      <div class="item">
        <img src="@/assets/logo.png">
        <h3>VueJS Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ipsa quibusdam labore recusandae minima, accusamus quos dicta cum perferendis voluptatibus!</p>
      </div>
      <div class="item">
        <img src="@/assets/logo.png">
        <h3>VueJS Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni expedita accusamus recusandae labore odio, asperiores debitis illum harum voluptatibus temporibus.</p>
      </div>
    </div>

    <br>
    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ex.</h5>
  </div>
  <div class="contact">
    <h1>Need more details?</h1>
    <h5>Or willing to discuss your project?</h5>
    <a class="button reverse" @click="reloadHeader()">
        Contact me
    </a>
  </div>
</div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: 'Kimeev About Me'
    }
  },
  methods: {
    reloadHeader() {
      this.$store.commit('toggleHeader')

      this.$router.push('/contact')

      setTimeout(() => {
        this.$store.commit('toggleHeader')
      }, 300)
    },
  },
  components: {

  },
}
</script>

<style lang="sass">
@import '@/assets/sass/_media.sass'

.l-aboutme
  width: 100%
  .specialization
    padding: 50px 30px
    width: 100%
    display: -webkit-flex
    display: -ms-flex
    display: flex
    -ms-align-items: flex-start
    align-items: flex-start
    @include respond-to(lg)
      font-size: 15px
    @include respond-to(md)
      -webkit-flex-direction: column
      -ms-flex-direction: column
      flex-direction: column
      padding-bottom: 15px
      padding-top: 30px
      font-size: 14px
    .splitter
      align-self: stretch
      flex: 5px 0 0
      background-color: #222
      @include respond-to(md)
        display: none
    .skills
      padding: 30px
      flex: 400px 0 0.2
      @include respond-to(lg)
        flex: 320px 1 .2
        padding-left: 0
      @include respond-to(md)
        width: 100%
        flex: 100% 1 1
        padding: 15px 0
      h3
        font-size: 1.4em
        font-weight: 800
        text-transform: uppercase
        margin-bottom: 0
        margin-top: 30px
        text-align: center
        @include respond-to(md)
          margin-top: 10px
        &:first-child
          margin-top: 0
      .skills-list
        padding: 0
        list-style-type: none
        display: -webkit-flex
        display: -ms-flex
        display: flex
        justify-content: center
        flex-wrap: wrap
        margin-top: 0
        @include respond-to(md)
          margin-bottom: 10px
          justify-content: center
        li
          text-align: center
          box-sizing: border-box
          padding: 5px 20px
          font-size: 1.2em
          font-weight: 400
        @include respond-to(lg)
          padding: 5px

    .description
      flex: 800px 0 1
      padding: 30px
      margin: auto
      @include respond-to(lg)
        padding-right: 0
        flex: 80% 1 1
      @include respond-to(md)
        padding: 0
        order: -1
        flex: 100% 1 1
      h1
        margin-top: 0
        font-size: 4em
        @include respond-to(lg)
          font-size: 3.2em
        @include respond-to(md)
          font-size: 3em
        @include respond-to(sm)
          font-size: 2.2em
      p
        font-size: 1.2em

  .project-types
    padding: 50px 30px
    background-color: #000
    color: #fff
    h2
      font-weight: 800
      text-align: center
      margin-bottom: 0
    h5
      text-transform: uppercase
      color: #888
      text-align: center
      margin-top: 5px
      font-size: 1.2em
      @include respond-to(sm)
        font-size: 1em
    .types-wrapper
      margin-top: 50px
      margin-bottom: 30px
      display: -webkit-flex
      display: -ms-flex
      display: flex
      @include respond-to(lg)
        font-size: 15px
      @include respond-to(md)
        -webkit-flex-direction: column
        -ms-flex-direction: column
        flex-direction: column
        -ms-align-items: center
        align-items: center
        margin-top: 30px
      .item
        padding: 0 15px
        flex: 33.3333% 0 1
        display: -webkit-flex
        display: -ms-flex
        display: flex
        -webkit-flex-direction: column
        -ms-flex-direction: column
        flex-direction: column
        -ms-align-items: center
        align-items: center
        text-align: center
        @include respond-to(md)
          padding: 0
          flex: unset
          max-width: 400px
        img
          max-width: 120px
        h3
          font-weight: 600
          margin-bottom: 10px
          text-transform: uppercase
          font-weight: 700
        p
          font-size: 1.1em
          margin-top: 0px
          color: #ccc

  .contact
    padding: 120px 30px
    display: -webkit-flex
    display: -ms-flex
    display: flex
    -ms-align-items: center
    align-items: center
    -webkit-flex-direction: column
    -ms-flex-direction: column
    flex-direction: column
    @include respond-to(sm)
      padding: 70px 15px
    h1
      text-align: center
      margin-bottom: 0
      margin-top: 0
    h5
      text-transform: uppercase
      color: #666
      text-align: center
      margin-top: 5px
      font-size: 1.2em
      margin-bottom: 30px
    .button
      border-color: #222
      &::before
        background-color: #222
</style>
