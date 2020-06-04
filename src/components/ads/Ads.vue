<template>
  <div>
    <div class="ads">
      <section>
        <h2>品质早餐</h2>
        <p class="p1">搭配齐全吃得好</p>
        <p class="p2">立即抢购></p>
      </section>
      <img
        src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
      />
    </div>

    <!-- 会员广告 -->
    <div class="vipAd">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconwangguan-" />
        </svg>
        <span class="sp1">超级会员</span>
        <span class="sp2">·每月领20元红包</span>
      </div>
      <div>
        <p>立即开通 ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// 广告
.ads {
  display: flex;
  width: 710px;
  margin: 0 auto;
  background-color: #f6f6f6;
  section {
    flex: 1;
    padding: 24px 0px 0px 30px;
    height: 220px;
    h2 {
      font-size: 36px;
      font-weight: 700;
    }
    .p1 {
      font-size: 26px;
      color: #777;
    }
    .p2 {
      font-size: 24px;
      color: #af8260;
    }
  }
  img {
    flex: 1;
    width: 282px;
    height: 188px;
  }
}

// 会员广告
.vipAd {
  display: flex;
  width: 710px;
  height: 80px;
  background-color: #f7e3ab;
  margin: 4px auto;
  div {
    flex: 1;
    line-height: 80px;
    padding: 0 20px 0 20px;
    color: #644f1b;
    .icon {
      width: 34px;
      height: 34px;
    }
    .sp1 {
      font-size: 28px;
      font-weight: 700;
    }
    .sp2 {
      font-size: 22px;
    }
    p {
      flex: 1;
      line-height: 80px;
      float: right;
      font-size: 22px;
    }
  }
}
</style>