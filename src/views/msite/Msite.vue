<template>
  <div id="msite">
    <!-- 顶部地址 -->
    <NavBar>
      <template #left>
        <span class="iconfont iconweizhi1"></span>
        <span class="position">{{position.name}}</span>
        <span class="iconfont iconxiala"></span>
      </template>
    </NavBar>

    <!-- 固定搜索框 -->
    <Search input-align="center" v-model="inputKey" placeholder="搜索商家/商品名称" />

    <!-- 轮播图 -->
    <swipe class="my-swipe" indicator-color="#0085ff">
      <swipe-item v-for="(items,i) in foodTypes" :key="i">
        <grid :column-num="4" :border="false">
          <grid-item
            v-for="item in items"
            :key="item.id"
            :icon="'https://fuss10.elemecdn.com' + item.image_url"
            :text="item.title"
          />
        </grid>
      </swipe-item>
    </swipe>
  </div>
</template>

<script>
import { getPosition, msiteFoodTypes } from '../../api/data'
import { NavBar, Search, Swipe, SwipeItem, Grid, GridItem } from 'vant'

export default {
  data () {
    return {
      position: '',
      inputKey: '',
      foodTypes: [],
    }
  },
  components: {
    NavBar,
    Search,
    Swipe,
    SwipeItem,
    Grid,
    GridItem
  },
  created () {
    getPosition().then(res => {
      this.position = res
    }),
      // 获取食物分类
      msiteFoodTypes().then(res => {
        let newRes = [];
        for (let i = 0, j = 0; i <= res.length; i += 8, j++) {
          newRes[j] = res.splice(0, 8);
        }
        this.foodTypes = newRes;
      })
  },
  mounted () {


  }
}
</script>

<style lang="scss">
#msite {
  // 地址栏
  .van-nav-bar {
    line-height: 0.89rem;
    background-image: linear-gradient(90deg, #0af, #0085ff);
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0;
  }
  .iconweizhi1 {
    font-size: 20px;
    color: #fff;
  }
  .position {
    color: #fff;
    font-weight: 700;
    width: 200px;
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

  // 轮播图
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>>
