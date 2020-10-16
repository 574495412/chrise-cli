<!--
 * @Descripttion: 
 * @Author: xiaodong
 * @Date: 2020-10-15 13:57:53
-->
<template>
  <div id="app">
    <div id="nav">
      <div> index 别跟我撒娇也别叫我宝贝', '就算我一个人也不会后退</div>
      |
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
