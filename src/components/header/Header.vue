<template>
  <div>
    <!-- 顶部地址 -->
    <NavBar>
      <template #left>
        <span class="iconfont iconweizhi1"></span>
        <span class="position">{{position.name}}</span>
        <span class="iconfont iconxiala"></span>
      </template>
    </NavBar>

    <!-- 固定搜索框 -->
    <Sticky>
      <Search input-align="center" v-model="inputKey" placeholder="搜索商家/商品名称" />
    </Sticky>
  </div>
</template>

<script>
import { NavBar, Search, Sticky } from 'vant'
export default {
  data () {
    return {
      inputKey: '',
    }
  },
  props: {
    position: {
      type: Object,
      default () {
        return { name: '定位失败' }
      }
    }
  },
  components: {
    NavBar,
    Search,
    Sticky
  }
}
</script>

<style lang="scss" scoped>
// 地址栏
.van-nav-bar {
  height: 89px;
  line-height: 89px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}

.van-hairline--bottom::after {
  border-bottom-width: 0;
}
.iconweizhi1 {
  font-size: 31px;
  color: #fff;
}
.position {
  color: #fff;
  font-weight: 700;
  font-size: 34px;
  text-align: left;
  max-width: 333px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.iconxiala {
  font-size: 12px;
  color: #fff;
}

// 搜索框
.van-search {
  width: 100%;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
</style>