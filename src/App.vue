<template>
  <v-app>
      <v-content v-if="!this.$store.getters.token">
          <Login/>
      </v-content>

    <core-filter v-if="this.$store.getters.token" />

    <core-toolbar v-if="this.$store.getters.token" />

    <core-drawer v-if="this.$store.getters.token"/>

    <core-view v-if="this.$store.getters.token"/>
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
<script>
    import Login from "./views/Login.vue";
    export default {
        components: {Login},
        data() {
            return {
                authenticated:false,
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>
