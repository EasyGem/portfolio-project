<template>
  <div class="l-contact" ref="lContact">
    <div class="l-contact-form-wrapper">
      <form class="form">

        <div class="field-wrapper">
          <input type="text" placeholder="Name"
            name="name" v-model="name.value"
            :class="{ active: name.valid}" />
          <div class="hint">{{ name.error }}</div>
        </div>

        <div class="field-wrapper">
          <input type="text" placeholder="Email"
            name="email" v-model="email.value"
            :class="{ active: email.valid}" />
          <div class="hint">{{ email.error }}</div>
        </div>

        <div class="field-wrapper">
          <textarea placeholder="Message"
            name="message" v-model="message.value"
            :class="{ active: message.valid}"></textarea>
          <div class="hint">{{ message.error }}</div>
        </div>

        <a class="button" :class="{ active: ready }"
          @click="sendForm()">Send</a>

      </form>
    </div>
    <div class="l-contact-text-wrapper">
      <h2>Get in touch <br> with me!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div class="contact-links">
        <a href="mailto:san4es-ag@ya.ru" target="_blank">
          <div class="icon"><i class="fa fa-envelope"></i></div>
          san4es-ag@ya.ru
        </a>

        <a href="https://vk.com" target="_blank">
          <div class="icon"><i class="fa fa-vk"></i></div>
          @sitesmaker
        </a>

        <a href="https://instagram.com" target="_blank">
          <div class="icon"><i class="fa fa-instagram"></i></div>
          @kimeevalex
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  // middleware: 'serverAuth',
  head() {
    return {
      title: 'Contact'
    }
  },
  data() {
    return {
        name: {
          value: '',
          min: 3,
          valid: false,
          error: '',
        },
        email: {
          value: '',
          valid: false,
          expression: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
          error: '',
        },
        message: {
          value: '',
          min: 20,
          valid: false,
          error: '',
        },
    }
  },
  watch: {
    'name.value': function(newVal, oldVal) {
      this.name.error = (newVal.length < this.name.min) ?
      `Must be ${this.name.min} charachters at least.` : ''

        this.name.valid = (this.name.error.length === 0)
    },

    'email.value': function(newVal, oldVal) {
      this.email.error = !(this.email.expression.test(newVal)) ?
      `Invalid email.` : ''

      this.email.valid = (this.email.error.length === 0)
    },

    'message.value': function(newVal, oldVal) {
      this.message.error = (newVal.length < this.message.min) ?
      `Must be ${this.message.min} charachters at least.` : ''

        this.message.valid = (this.message.error.length === 0)
    }
  },
  computed: {
    ready() {
      if(this.name.valid && this.email.valid && this.message.valid)
        return true

      return false
    }
  },
  methods: {
    sendForm() {
      if(!this.ready)
        return false

      console.log('Sending Form...');
    }
  },
  components: {

  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/_media.sass'

.l
  &-contact
    position: absolute
    width: 100%
    min-height: 100vh
    background-color: #000
    top: 0
    left: 0
    overflow-y: auto
    color: #fff
    padding: 100px 30px 70px 30px
    display: -webkit-flex
    display: -ms-flex
    display: flex
    justify-content: center
    align-items: flex-start
    overflow-y: auto
    align-items: centers
    @include respond-to(md)
      flex-wrap: wrap
    &-form-wrapper
      flex: 380px 0 0.5
      @include respond-to(md)
        flex: 500px 0 1
        margin-top: 15px
      h5
        font-size: 2rem
        margin-bottom: 10px
        text-align: center
      .form
        margin-top: 105px
        display: -webkit-flex
        display: -ms-flex
        display: flex
        flex-direction: column
        align-items: flex-end
        @include respond-to(lg)
          margin-top: 95px
        @include respond-to(md)
          margin-top: 15px
        .button
          opacity: .5
          pointer-events: none
          margin-top: 15px
          &.active
            opacity: 1
            pointer-events: all
        .field-wrapper
          width: 100%
          .hint
            color: #888
            font-weight: 300
            padding: 2px 5px
          textarea
            height: 142px
          input, textarea
            width: 100%
            resize: vertical
            margin-top: 15px
            border-color: #888
            &:focus
              border-color: #ccc
            &.active
              border-color: #fff
    &-text-wrapper
      flex: 600px 0 1
      padding: 0 0 0 50px
      @include respond-to(lg)
        font-size: 14px
      @include respond-to(md)
        flex: 500px 0 1
        order: -1
        padding: 0
      h2
        font-weight: 800
        font-size: 3em
        margin-top: 0
      p
        font-size: 1.2em
        line-height: 1.2
      .contact-links
        a
          margin-bottom: 15px
          font-weight: 400
          font-size: 1.2rem
          text-decoration: none
          display: block
          .icon
            display: inline-block
            width: 40px
            text-align: center
            margin-right: 10px
          .fa
            font-size: 2.2rem
            vertical-align: sub
</style>
