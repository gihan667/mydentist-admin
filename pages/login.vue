<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-4">

                    <div class="has-text-centered">
                        <img src="~assets/logo.png" />
                    </div>

                    <br />
                    <br />
        
                    <Notification :message="error" v-if="error"/>
        
                    <form method="post" @submit.prevent="login">
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                            <input
                                type="email"
                                class="input"
                                name="email"
                                v-model="email"
                            />
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                            <input
                                type="password"
                                class="input"
                                name="password"
                                v-model="password"
                            />
                            </div>
                        </div>
                        <div class="control">
                            <button type="submit" class="button is-dark is-fullwidth">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  </template>
  
  <script>
  import Notification from '~/components/Notification'
  
  export default {
    components: {
      Notification,
    },
  
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    layout: 'login',
    middleware: 'guest',
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })
  
          this.$router.push('/')
        } catch (e) {
          this.error = e.response.data.message
        }
      }
    }
  }
  </script>