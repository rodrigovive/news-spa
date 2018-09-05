<template>
    <nav class="nav has-shadow">
        <div class="container">
            <router-link to="/">
                <img src="http://bit.ly/vue-img"
                     alt="Vue SPA" />
            </router-link>
            <router-link to="/category/front-end"class="navbar-item is-tab" exact>
                Front-end
            </router-link>
            <router-link :to="{name: 'category', params: { id: 'mobile' }}" class="navbar-item is-tab" exact>
                Mobile
            </router-link>
            <router-link to="/login" class="navbar-item is-tab" exact>
                <span v-if="isAuthenticated">Logout</span><span v-else>Login</span>
            </router-link>
        </div>
    </nav>
</template>

<script>
  import eventBus from '../event-bus'

  export default {
    name: 'AppHeader',
    data () {
      return {
        isAuthenticated: false
      }
    },
    created () {
      eventBus.$on('authStatusUpdate', isAuthenticated => {
        this.isAuthenticated = isAuthenticated
      })
    }
  }
</script>

<style scoped>

</style>