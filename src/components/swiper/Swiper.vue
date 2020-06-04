<template>
  <div id="swiper">
    <!-- 轮播图 -->
    <swipe class="my-swipe" indicator-color="#0085ff">
      <swipe-item v-for="(items,i) in foodTypes" :key="i">
        <grid :column-num="4" :border="false" icon-size="45px">
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
import { Swipe, SwipeItem, Grid, GridItem } from 'vant'

export default {
  props: {
    foodTypes: {
      type: Array,
      required: true
    }
  },
  components: {
    Swipe, SwipeItem, Grid, GridItem
  }
}
</script>

<style lang="scss">
#swiper {
  // 轮播图
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 354px;
    // line-height: 150px;
    text-align: center;
    .van-icon,
    .van-grid-item__icon {
      width: 90px;
    }
    .van-grid-item__content {
      padding: 0;
    }

    // Grid
    .van-icon__image {
      width: 90px;
    }
  }
}
</style>