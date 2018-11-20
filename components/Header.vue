<template>
<div class="l-header" :class="{ blackBg: sectionMode }" ref="header">
  <div class="mask" :class="{ active: sectionMode }" ref="mask"></div>
  <div class="l-header-bar">
    <div class="bar-logo" @click="reloadHeader()" :class="{ active: sectionMode }">
      <i class="fa fa-angle-left" :class="{ active: sectionMode }"></i>
    </div>
    <div class="bar-menu" :class="{ active: sectionMode }">
      <!-- Menu
      <i class="fa fa-navicon"></i> -->

    </div>
  </div>

  <div class="l-header-content" :class="{ fdr: sectionMode }">
    <div class="greetings" ref="greetings" :class="{ active: sectionMode }">
      <h1 v-if="sectionMode">{{ getSection.title }}</h1>
      <h1 v-else>Alexander Kimeev</h1>

      <h5 v-if="sectionMode">
        {{ getSection.desc }}
      </h5>
      <h5 v-else>
        Front-end developer and Freelancer
      </h5>
      <a class="button" href="#contentStart" :class="{ reverse: buttonReverse }" v-if="sectionMode">
        {{ getSection.headerButton }}</a>
    </div>

    <div class="floating-image" ref="floatingImage" style="transform: translateX(50px)" :class="{ active: sectionMode }">
      <img :src="floatingImg" />
    </div>

    <div class="header-nav" v-if="!sectionMode">
      <ul>

        <router-link tag="li" to="/aboutMe" replace>
          <span @click="showSection(0)">
            About me
          </span>
        </router-link>

        <router-link tag="li" to="/portfolio" replace>
          <span @click="showSection(1)">
            Portfolio
          </span>
        </router-link>

        <!-- <router-link tag="li" to="/reviews" replace>
          <span @click="showSection(2)">
            Reviews
          </span>
        </router-link> -->

        <router-link tag="li" to="/contact" replace>
          <span @click="showSection(3)">
            Contact
          </span>
        </router-link>

      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
import {
  mapGetters
} from 'vuex'

export default {
  data() {
    return {
      sectionMode: false,
      buttonReverse: false,
      floatingImg: ''
    }
  },
  created() {

  },
  mounted() {

    if (this.id !== null) {
      this.enableSection(this.id)
    }

  },
  computed: {
    ...mapGetters([
      'getSection'
    ])
  },
  methods: {
    ...mapMutations([
      'setSection'
    ]),
    reloadHeader() {
      this.$store.commit('toggleHeader')
      this.$router.push('/')
      setTimeout(() => {
        this.$store.commit('toggleHeader')
      }, 300)
    },
    enableSection(id) {
      this.setSection(id)
      this.sectionMode = true

      if (id === 0) {
        this.floatingImg = 'techs.jpg'
        anime({
          targets: '.greetings',
          duration: 0,
          easing: 'easeOutQuad',
          opacity: 0,
          translateY: '0px',
          translateX: '-50px'
        })

        let changeTheme = anime.timeline({
          targets: '.l-header',
          duration: 0,
          easing: 'easeOutQuad',
          backgroundColor: this.getSection.colors.bg,
          color: this.getSection.colors.text
        }).add({
          targets: '.greetings',
          duration: 1000,
          opacity: 1,
          easing: 'easeOutQuad',
          translateX: '-0px',
        }).add({
          targets: '.floating-image',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          translateX: '-0px',
          offset: '-=700'
        }).add({
          targets: '.bar-menu, .bar-logo .fa',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          offset: 200
        })
      } else if (id === 1) {
        anime({
          targets: '.greetings',
          duration: 0,
          easing: 'easeOutQuad',
          opacity: 0,
          translateY: '0px',
          translateX: '-50px',
          complete: () => {
            this.$refs.floatingImage.style.display = 'none'
            this.$refs.greetings.style.textAlign = 'center'
          },
        })

        let changeTheme = anime.timeline({
          targets: '.l-header',
          duration: 0,
          easing: 'easeOutQuad',
          backgroundColor: this.getSection.colors.bg,
          color: this.getSection.colors.text,
          before: () => {
            this.buttonReverse = true
          }
        }).add({
          targets: '.greetings',
          duration: 1000,
          opacity: 1,
          easing: 'easeOutQuad',
          translateX: '-0px',
        }).add({
          targets: '.bar-menu, .bar-logo .fa',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          offset: 200
        })
      } else if (id == 2) {
        this.floatingImg = 'reviews.png'

        anime({
          targets: '.greetings',
          duration: 0,
          easing: 'easeOutQuad',
          opacity: 0,
          translateY: '0px',
          translateX: '-50px'
        })

        let changeTheme = anime.timeline({
          targets: '.l-header',
          duration: 0,
          easing: 'easeOutQuad',
          backgroundColor: this.getSection.colors.bg,
          color: this.getSection.colors.text,
          before: () => {
            this.buttonReverse = true
          }
        }).add({
          targets: '.greetings',
          duration: 1000,
          opacity: 1,
          easing: 'easeOutQuad',
          translateX: '-0px',
        }).add({
          targets: '.floating-image',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          translateX: '-0px',
          offset: '-=700'
        }).add({
          targets: '.bar-menu, .bar-logo .fa',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          offset: 200
        })
      } else if (id === 3) {
        anime({
          targets: '.greetings',
          duration: 0,
          easing: 'easeOutQuad',
          opacity: 0,
          translateY: '0px',
          translateX: '-50px'
        })

        let changeTheme = anime.timeline({
          targets: '.l-header',
          duration: 500,
          color: this.getSection.colors.text
        }).add({
          targets: '.bar-menu, .bar-logo .fa',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          offset: 1000
        })
      }
    },
    showSection(id) {
      this.setSection(id)
      let changeTheme = anime.timeline({
        targets: '.l-header .mask',
        backgroundColor: {
          value: this.getSection.colors.bg,
          duration: 0
        },
        scale: 9999,
        duration: 10000,
        easing: 'easeOutQuad'
      }).add({
        targets: '.greetings',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutQuad',
        translateY: '-50px',
        offset: 0
      }).add({
        targets: '.header-nav',
        duration: 1000,
        easing: 'easeOutQuad',
        translateY: '-50px',
        opacity: 0,
        offset: 200,
        complete: () => {
          this.sectionMode = true
        }
      }).add({
        targets: '.greetings',
        duration: 0,
        easing: 'easeOutQuad',
        translateY: '0px',
        translateX: '-50px'
      })

      if (id === 0) {
        this.floatingImg = 'techs.jpg'
        changeTheme.add({
          targets: '.l-header',
          duration: 0,
          easing: 'easeOutQuad',
          backgroundColor: this.getSection.colors.bg,
          color: this.getSection.colors.text
        }).add({
          targets: '.l-header .mask',
          opacity: 0,
          duration: 1000,
          complete: () => {
            if (this.$refs.mask)
              this.$refs.mask.style.transform = 'unset'
          }
        }).add({
          targets: '.greetings',
          duration: 0,
          opacity: 0,
        }).add({
          targets: '.greetings',
          duration: 1000,
          opacity: 1,
          easing: 'easeOutQuad',
          translateX: '-0px',
          color: this.getSection.colors.text,
          offset: "-=1000"
        }).add({
          targets: '.floating-image',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          translateX: '-0px',
          offset: '-=700'
        }).add({
          targets: '.bar-menu, .bar-logo .fa',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          offset: 1000
        })
      } else if (id === 1) {
          changeTheme.add({
            targets: '.l-header',
            duration: 0,
            easing: 'easeOutQuad',
            backgroundColor: this.getSection.colors.bg,
          }).add({
            targets: '.l-header',
            duration: 500,
            color: this.getSection.colors.text
          }).add({
            targets: '.l-header .mask',
            opacity: 0,
            duration: 1000,
            complete: () => {
              if (this.$refs.mask)
                this.$refs.mask.style.transform = 'unset'
            }
          }).add({
            targets: '.greetings',
            duration: 0,
            opacity: 0,
          }).add({
            targets: '.greetings',
            duration: 1000,
            opacity: 1,
            easing: 'easeOutQuad',
            translateX: '-0px',
            offset: "-=1000",
            before: () => {
              this.buttonReverse = true
              this.$refs.floatingImage.style.display = 'none'
              this.$refs.greetings.style.textAlign = 'center'
            }
          }).add({
            targets: '.bar-menu, .bar-logo .fa',
            duration: 1000,
            easing: 'easeOutQuad',
            opacity: 1,
            offset: 1000
          })
      } else if (id === 2) {
        this.floatingImg = 'reviews.png'
        changeTheme.add({
          targets: '.l-header',
          duration: 0,
          easing: 'easeOutQuad',
          backgroundColor: this.getSection.colors.bg,
        }).add({
          targets: '.l-header',
          duration: 500,
          color: this.getSection.colors.text
        }).add({
          targets: '.l-header .mask',
          opacity: 0,
          duration: 1000,
          complete: () => {
            if (this.$refs.mask)
              this.$refs.mask.style.transform = 'unset'
          }
        }).add({
          targets: '.greetings',
          duration: 0,
          opacity: 0,
        }).add({
          targets: '.greetings',
          duration: 1000,
          opacity: 1,
          easing: 'easeOutQuad',
          translateX: '-0px',
          offset: "-=1000",
          before: () => {
            this.buttonReverse = true
          }
        }).add({
          targets: '.floating-image',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          translateX: '-0px',
          offset: '-=700',
        }).add({
          targets: '.bar-menu, .bar-logo .fa',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          offset: 1000
        })
      } else if (id === 3) {

        changeTheme.add({
          targets: '.l-header',
          duration: 500,
          color: this.getSection.colors.text
        }).add({
          targets: '.l-header .mask',
          opacity: 0,
          duration: 1000,
          complete: () => {
            if (this.$refs.mask)
              this.$refs.mask.style.transform = 'unset'
          }
        }).add({
          targets: '.bar-menu, .bar-logo .fa',
          duration: 1000,
          easing: 'easeOutQuad',
          opacity: 1,
          offset: 1000
        })
      }
    }
  },
  props: [
    'id'
  ]
}
</script>

<style lang="sass">
</style>
