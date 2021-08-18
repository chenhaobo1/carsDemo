<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/logo.png" alt="2019kua" />
          <span class="name">2019款</span>
        </h4>
        <p class="cars-attr">新能源汽车 5座</p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="car-number">粤 8745N8</h4>
            <div>
              <ul class="car-electric active-li-7">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance">
                <sub>约</sub>
                <strong>600</strong>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/logo.png" alt="2019" />
      </div>
      <footer>
        <a href="javascript:void(0)" class="parking-link">停车场</a>
      </footer>
    </section>
    <section class="cars-item cars-detailed" :style="'height:' + height">
      <div class="scroll">
        <h4 class="column">
          停车场
          <i class="close"></i>
        </h4>
        <header>
          <h4 class="cars-logo">
            <img src="../../assets/logo.png" alt="2019kua" />
            <span class="name">2019款</span>
          </h4>
          <p class="cars-attr">新能源汽车 5座</p>
        </header>
        <img src="../../assets/logo.png" alt="2019kua" width="50%" />
        <div class="clearfix">
          <div class="car-number pull-left">粤 8745N8</div>
          <p class="distance pull-right">
            <sub>约</sub>
            <strong>600</strong>
            <sub>KM</sub>
          </p>
        </div>
        <div class="cars-electric-box">
          <div class="p-r">
            <span class="e-high" style="width: 85%"></span>
            <span class="e-bg"></span>
          </div>
        </div>
        <p class="info color-main text-center">
          取车约支付12.0元停车费，实际补贴12.0元
        </p>
        <ul class="cars-type-list">
          <li class="current">
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
        </ul>
        <div class="clause-doc">
          <span class="pull-left" style="font-size: 18px"
            >参保《全面保障服务》用车更放心</span
          >
          <i class="current"></i>
        </div>
      </div>
      <a href="javascript:void(0)" class="select-car-btn">预约用车</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "carsList",
  props: {
    height: {
      type: String,
      default: "257px",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
