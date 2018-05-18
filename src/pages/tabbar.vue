<!--suppress CssUnknownTarget -->
<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <router-view></router-view>
      <tabbar slot="bottom">

        <tabbar-item show-dot link="/mining" >
          <img slot="icon" src="~@/assets/logo.png"/>
          <span slot="label">挖矿</span>
        </tabbar-item>
        <tabbar-item  link="/my" badge="2">
          <img slot="icon" src="~@/assets/logo.png"/>
          <span slot="label">我的</span>
        </tabbar-item>

      </tabbar>
    </view-box>
  </div>
</template>

<script>


  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>
