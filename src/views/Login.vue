<template>
        <div>
            <v-img
                    class="absolute anlge-bg"
                    src="https://app.socialdeepfox.com/static/homepage.jpg"
            >
                <v-layout
                        align-center
                        justify-center
                        row
                        fill-height>
                    <v-flex xs12 sm8 md6>
                        <Log/>
                    </v-flex>
                </v-layout>
            </v-img>
        </div>
</template>
    <script>
import Log from '../components/core/Log.vue'

    export default {
        name: "Login",
        components: {Log}
    }
</script>

<style scoped>
    .absolute {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
</style>
