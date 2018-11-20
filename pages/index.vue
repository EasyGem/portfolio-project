<template>
  <div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {auth} from '~/plugins/firebase'

export default {
  layout: 'default',
  data() {
    return {
      email: 'san4es-ag@ya.ru',
      password: 'tolela11',
    }
  },
  head() {
    return {
      title: 'Alexander Kimeev'
    }
  },
  created() {
    auth.onIdTokenChanged((user) => {
      this.checkUserUpdated(user)
    })


  },
  methods: {
    ...mapActions(['login', 'logout', 'checkUserUpdated']),

    // signIn () {
    //   auth.signInWithEmailAndPassword(this.email, this.password).then((firebaseUser) => {
    //     return this.login(firebaseUser)
    //   }).then(() => {
    //     this.$router.push('/contact')
    //   }).catch((error) => {
    //   })
    // },
  },
  components: {

  },
}
</script>

<style lang="sass">

</style>
