<template>
  <div class="hello">
    <div class="auth" v-if="!token">
      <h2>Authorization</h2>
      <input type="text" placeholder="Пользователь" v-model="form.username">
      <input type="text" placeholder="Пароль" v-model="form.password">
      <button @click="login()">Войти</button>
      <p>{{data}}</p>
    </div>
    <div class="field" v-if="fields" v-for="f in fields">{{ f.newName }}</div>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>

import http from '../lib/httpQuery'

export default {
  name: 'HelloWorld',
  data () {
    return {
      fields: null,
      items: [
        { name: 'steve' },
        { name: 'max' },
        { name: 'ben' }
      ],
      form: {
        username: null,
        password: null
      },
      data: null,
      token: null
    }
  },
  created () {
    http.get('/fields/1').then(d => { this.fields = d.data })
    this.items.push({ name: 'yahiko' })

    this.token = localStorage.getItem('token')
  },
  methods: {
    login () {
      let endpoint = 'token'
      let data = `userName=${encodeURIComponent(this.form.username)}&password=${encodeURIComponent(this.form.password)}&grant_type=password`
      http.postToken(endpoint, data).then(d => {
        this.data = d.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.field{
  display: inline-block;
  width: auto;
  padding: 8px;
  margin: 3px;
  font-size: 13px;
  border: 1px solid #323232;
}
.auth{
  margin: 25px 0px;
}
.auth input, .auth button{
  padding: 5px
}
</style>
