<template>
<div class="l-portfolio">

  <a class="item" href="#" :style="{backgroundImage: `url(./works/p${i.id}.jpg)`}" v-for="i in works"
  :key="i.id">
    <div class="icons">
      <div v-if="i.tech.length > 0" class="icons-item">
        <i class="fa fa-cogs"></i>
        {{ i.tech }}
      </div>

      <div class="icons-item">
        <i v-if="i.hours.length > 0" class="fa fa-clock-o"></i>
        {{ i.hours }} hours
      </div>
    </div>
    <div class="wrapper">

      <h4>{{ i.title }}</h4>
      <h5>{{ i.type }}</h5>
      <p>{{ i.desc }}</p>
    </div>
  </a>

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
import {db} from '~/plugins/firebase'

export default {
  layout: 'default',
  head() {
    return {
      title: 'Portfolio'
    }
  },
  async asyncData() {
    return db.ref('/works/').once('value').then(function(snapshot) {
      return {
        works: snapshot.val()
      }

    })
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

.l-portfolio
  display: -webkit-flex
  display: -ms-flex
  display: flex
  justify-content: flex-start
  -ms-align-items: flex-start
  align-items: flex-start
  flex-wrap: wrap
  -ms-align-items: stretch
  align-items: stretch
  .item
    border: 5px solid #fff
    position: relative
    box-sizing: border-box
    text-decoration: none
    -webkit-background-size: cover
    background-size: cover
    background-position: center top
    transition: 1s ease
    &:hover
      opacity: 1
      background-position: center bottom
      .wrapper
        opacity: 1
        transform: unset
      &::before
        opacity: .75
    &:nth-child(1n)
      flex: 33.3333% 1 0
    &:nth-child(2n)
      flex: 33.3333% 1 0
    &:nth-child(3n)
      flex: 33.3333% 1 0
    &:nth-child(4n)
      flex: 50% 1 0
    &:nth-child(5n)
      flex: 50% 1 0
    @include respond-to(lg)
      &:nth-child(1n)
        flex: 50% 1 0
      &:nth-child(2n)
        flex: 50% 1 0
      &:nth-child(3n)
        flex: 50% 1 0
      &:nth-child(4n)
        flex: 50% 1 0
      &:nth-child(5n)
        flex: 50% 1 0
    @include respond-to(sm)
      &:nth-child(n)
        flex: 100% 1 1
    &::before
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: #000
      opacity: 0
      -webkit-transition: .5s ease
      -o-transition: .5s ease
      transition: .5s ease
    .wrapper
      color: #fff
      -webkit-flex-direction: column
      -ms-flex-direction: column
      flex-direction: column
      -ms-align-items: center
      align-items: center
      justify-content: center
      position: relative
      min-height: 300px
      height: 100%
      padding: 30px
      display: -webkit-flex
      display: -ms-flex
      display: flex
      opacity: 0
      transform: scale(0.75)
      overflow: hidden
      transition: .5s ease
    h4
      font-size: 2em
      font-weight: 700
      text-align: center
      margin: 0
    h5
      font-size: 1.2em
      text-transform: uppercase
      text-align: center
      margin: 0 0 15px 0
    p
      text-align: center
      font-size: 1em
      margin: 0
    .icons
      position: absolute
      top: 15px
      right: 15px
      .icons-item
        background-color: rgba(255,255,255,0.75)
        color: #000
        border-radius: 5px
        padding: 4px 7px
        cursor: default
        display: inline-block

  .contact
    width: 100%
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
