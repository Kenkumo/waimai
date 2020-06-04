<template>
  <div>
    <!-- 头部 -->
    <Header :position="position"></Header>
    <!-- 轮播图 -->
    <Swiper :foodTypes="foodTypes"></Swiper>
    <!-- 广告 -->
    <Ads></Ads>
    <!-- 食物类型 -->
    <ShopList></ShopList>

  </div>
</template>

<script>
import { getPosition, msiteFoodTypes } from '../../api/data'
import { Swipe, SwipeItem, Grid, GridItem } from 'vant'
import Header from '../../components/header/Header'
import Swiper from '../../components/swiper/Swiper'
import Ads from '../../components/ads/Ads'
import ShopList from '../../components/shopList/ShopList'

export default {
  data () {
    return {
      position: {},
      foodTypes: [],
    }
  },
  components: {
    Header,
    Swiper,
    Ads,
    ShopList
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

<style lang="scss" scoped>
</style>>
