<template>
    <v-card  class="elevation-12">
        <v-card-title>
        <!--ToolBar Login-->
        <v-toolbar dark color="orange">
            <v-toolbar-title>Login</v-toolbar-title>
            <!--Seleciona Entre Login e Registro-->
        </v-toolbar>
        </v-card-title>
        <!--Se o LOGIN estiver setado ele chama o componente de login-->
        <template>
            <v-card-text>
                <v-form>
                    <v-text-field v-model="email" prepend-icon="mdi-account" name="login" label="Login"
                                  type="text">
                    </v-text-field>
                    <v-text-field  v-model="senha" id="password"
                                   prepend-icon="mdi-lock"
                                   name="password" label="Password" type="password">
                    </v-text-field>
                </v-form>
            </v-card-text>
            <!--Chama a função login-->
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login" color="primary">Login</v-btn>
            </v-card-actions>
        </template>
    </v-card>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Log',
        data() {
            return {
                    email: '',
                    senha: ''
            }
        },
        methods: {
            login() {
                this.$store.commit('SET_EMAIL', this.email);
                this.$store.commit('SET_SENHA', this.senha);
                const form = new FormData();
                form.append('email', this.email);
                form.append('password', this.senha);
                //set your api
                axios.post('https://apigenerica/api/login', form)
                    .then((Response) => {
                        const token = Response.data.success.token;
                        this.$store.commit('SET_TOKEN', /* Set token */true);
                            this.$router.replace({ name:'dashboard'});
                        //console.log(Response);
                    })
            }
        },
    }
</script>

<style scoped>

</style>
