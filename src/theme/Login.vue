<template>
    <div class="content">
        <div v-if="isAuthenticated">
            Usuario identificado
            <button v-on:click="logout()" class="button is-primary">
                Logout
            </button>
        </div>
        <div v-else>
            <h2>Login</h2>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Username</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input v-model="username" class="input" type="text"
                                   placeholder="Your username">
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Password</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input v-model="password" class="input" type="password"
                                   placeholder="Your password">
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label">
                    <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button v-on:click="login()" class="button is-primary">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // import eventBus from '../event-bus'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Login',
    data () {
      return {
        username: '', // bill
        password: '' // vuejs
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
    methods: {
      login () {
        console.log('asd')
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
          .then(() => {
            this.username = ''
            this.password = ''
          })
      },
      ...mapActions({
        logout: 'logout'
      })
    }

  }
</script>

<style scoped>

</style>