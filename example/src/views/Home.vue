<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <account-book-filled width="60" height="60" original></account-book-filled>
    <account-book-filled width="30" height="30"></account-book-filled>
    <account-book-outlined width="60" height="60" original></account-book-outlined>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { AccountBookFilled, AccountBookOutlined } from '../../../src'

@Component({
  components: {
    HelloWorld,
    AccountBookFilled,
    AccountBookOutlined
  }
})
export default class Home extends Vue {}
</script>
