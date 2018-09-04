<template>
    <nav class="nav has-shadow">
        <div class="container">
            <router-link to="/">
                <img src="http://bit.ly/vue-img"
                     alt="Vue SPA" />
            </router-link>
            <router-link to="/"class="navbar-item is-tab" exact>
                Home
            </router-link>
            <router-link to="/login" class="navbar-item is-tab">
                Login
            </router-link>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style scoped>

</style>