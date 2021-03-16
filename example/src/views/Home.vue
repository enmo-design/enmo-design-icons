<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <icon-add-outlined width="60" height="60" :rotate="30" spin></icon-add-outlined>
    <icon-approval-outlined width="30" height="30"></icon-approval-outlined>
    <icon-alarm-outlined width="60" height="60"></icon-alarm-outlined>
    <icon :component="iconData" @click="clickHandler" height="60" width="60" spin></icon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Icon, { IconAddOutlined, IconAlarmOutlined, IconApprovalOutlined } from '../../../src'
import SvgData from '../../../svg/filled/icon-compression.svg'

@Component({
  components: {
    HelloWorld,
    IconAddOutlined,
    IconAlarmOutlined,
    IconApprovalOutlined,
    Icon
  }
})
export default class Home extends Vue {
  iconData = SvgData

  clickHandler () {
    console.error(111)
  }
}
</script>
