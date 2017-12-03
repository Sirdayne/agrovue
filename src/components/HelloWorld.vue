<template>
  <div class="hello">
    <div class="field" v-for="f in fields">{{ f.newName }}</div>
    <div v-for="i in items">{{ i.name }}</div>
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
      fields: 'fields',
      items: [
        { name: 'steve' },
        { name: 'max' },
        { name: 'ben' }
      ]
    }
  },
  created () {
    http.get('/fields/1').then(d => { this.fields = d.data })
    this.items.push({ name: 'yahiko' })
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
</style>
