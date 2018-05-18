<template>
  <div class="hello">
    <x-header  slot="header"
               :right-options="{showMore: true}"
               @on-click-more="showMenus = true"
               style="width:100%;position:absolute;left:0;top:0;z-index:100;" title="关于我们"></x-header>
    <h1>{{ countFilter }}
      <p>hello word </p>
    </h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapGetters(['countFilter'])
    }
  }
</script>

