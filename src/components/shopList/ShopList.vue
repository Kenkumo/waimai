<template>
  <div id="ShopList">
    <section class="shoplist-title">推荐商家</section>
    <!-- <dropdown-menu>
      <dropdown-item v-model="value" :options="option" />
      <dropdown-item title="距离最远" v-model="value1" />
      <dropdown-item title="销量最高" v-model="value2" />
      <dropdown-item title="筛选" >
        <button block type="info" @click="onConfirm">确认</button>
      </dropdown-item>
    </dropdown-menu>-->
    <Sticky>
      <div class="filter">
        <div class="filter-header">
          <a href="javascript:" class="filter-nav active">
            <span>综合排序</span>
            <span class="iconfont iconicon-up-copy"></span>
          </a>
          <a href="javascript:" class="filter-nav">
            <span>距离最近</span>
          </a>
          <a href="javascript:" class="filter-nav">
            <span>销量最高</span>
          </a>
          <a href="javascript:" class="filter-nav">
            <span>筛选</span>
            <span class="iconfont icon-"></span>
          </a>

          <!-- 隐藏下拉列表 -->
          <section class="filter-extend filter-sort">
            <ul>
              <li>
                <span>综合排序</span>
                <img />
              </li>
              <li>
                <span>好评优先</span>
                <img />
              </li>
              <li>
                <span>起送价最低</span>
                <img />
              </li>
              <li>
                <span>配送最快</span>
                <img />
              </li>
              <li>
                <span>配送费最低</span>
                <img />
              </li>
              <li>
                <span>人均由低到高</span>
                <img />
              </li>
              <li>
                <span>人均由高到低</span>
                <img />
              </li>
              <li>
                <span>通用排序</span>
                <img src="../../assets/img/gou.png" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Sticky>
  </div>
</template>

<script>
// import { DropdownMenu, DropdownItem } from 'vant';
import { Sticky } from 'vant';
export default {
  data () {
    return {
      value: 0,
      value1: '距离最远',
      value2: '销量最高',
      option: [
        { text: '综合排序', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '配送最快', value: 2 },
        { text: '配送费最低', value: 3 },
        { text: '人均从低到高', value: 4 },
        { text: '人均从高到低', value: 5 },
        { text: '通用排序', value: 6 },
      ],
    };
  },
  methods: {
    onConfirm () {
      this.$refs.item.toggle();
    },
  },
  components: {
    // DropdownMenu, DropdownItem
    Sticky,
  }

}
</script>

<style lang="scss">
#ShopList {
  .shoplist-title {
    display: flex;
    align-items: center;
    justify-content: center;
    // text-align: center;
    height: 72px;
    // line-height: 72px;
    font-size: 30px;
    color: #000;
    margin-top: 30px;
  }

  .shoplist-title::after,
  .shoplist-title::before {
    display: block;
    content: '';
    width: 5.333333vw;
    height: 0.266667vw;
    background-color: #999;
  }

  .shoplist-title:after {
    margin-left: 3.466667vw;
  }
  .shoplist-title:before {
    margin-right: 3.466667vw;
  }

  // .van-dropdown-menu__bar {
  //   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  // }

  // .van-dropdown-menu__title::after {
  //   position: absolute;
  //   top: 50%;
  //   right: -4px;
  //   margin-top: -5px;
  //   border: 3px solid;
  //   border-color: transparent transparent #dcdee0 #dcdee0;
  //   -webkit-transform: rotate(-45deg);
  //   transform: rotate(-45deg);
  //   opacity: 0.5;
  //   content: '';
  // }

  // 商品下拉列表
  .home-filter {
    position: sticky;
    top: 1.333rem;
    z-index: 100;
  }
  .filter {
    position: relative;
    line-height: 10.4vw;
    z-index: 101;
    height: 10.666667vw;
  }
  .filter-header {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 10.533333vw;
    display: flex;
    z-index: 4;
    background-color: #fff;
  }
  .filter-nav {
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: 28px;
    z-index: 101;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .icon- {
      font-size: 26px;
    }
  }
  .filter-nav.active {
    color: #333;
    font-weight: 700;
  }

  // 隐藏下拉列表
  .filter-sort {
    padding-top: 2.133333vw;
    padding-bottom: 3.2vw;
    font-size: 0.373333rem;
    color: #333;

    li.active {
      color: #3190e8;
      font-weight: 700;
    }
  }

  .filter-extend {
    left: 0;
    right: 0;
    top: 10.533333vw;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 4;
  }
  .filter-extend.open {
    opacity: 1;
    visibility: visible;
    max-height: 1500%;
  }
}
</style>