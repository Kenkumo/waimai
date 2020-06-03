<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/css/common.scss';
@import './assets/css/iconfont.css';

.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
