<template>
  <div>
    <div class="l-header-wrapper">
      <transition name="fade">
        <header-component :id="id" v-if="showHeader"/>
      </transition>
    </div>

    <a name="contentStart"></a>
    <transition name="component-fade" mode="in-out">
      <nuxt/>
    </transition>
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header'
import { mapState } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'showHeader'
    ]),
    id() {
      if(this.$route.name != 'index') {
        return this.$store.getters.getSectionId(this.$route.name)
      } else {
        return null
      }
    }
  },
  components: {
    HeaderComponent
  },
}
</script>

<style lang="sass">
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0

.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .5s

.component-fade-enter, .component-fade-leave-to
  opacity: 0
</style>
