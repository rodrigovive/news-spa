<template>
    <div id="app">
        <app-header></app-header>
        <section class="main-section section">
            <div class="container content">
                <router-view />
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import AppFooter from './AppFooter.vue'
  import AppHeader from './AppHeader.vue'
  export default {
    name: 'Layout',
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  }
</script>
<style lang="scss">
    $primary: green;
    @import "~bulma";
    .columns {
        flex-wrap: wrap;
    }
</style>