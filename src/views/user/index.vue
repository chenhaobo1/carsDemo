<template>
  <div class="user-container">
      <div class="user-info">
        <img src="@/assets/logo.png">
        <div class="meta">
          <h4 class="name">3518998239@qq.com</h4>
          <span>文明驾驶分&nbsp;&nbsp;<strong>0</strong></span>
        </div>
      </div>
      <ul class="group-links">
        <router-link to="aa" tag="a">
          <i class="icon icon-yuanshen-1"></i>
          我的账户
          <div class="arrow"></div>
        </router-link>
        <router-link to="aa" tag="a">
          <i class="icon icon-yuanshen-2"></i>
          租车订单
          <div class="arrow"></div>
        </router-link>
        <router-link to="aa" tag="a">
          <i class="icon icon-yuanshen-3"></i>
          实名认证
          <div class="arrow"></div>
        </router-link>
        <router-link to="/safe" tag="a">
          <i class="icon icon-yuanshen-4"></i>
          安全设置
          <div class="arrow"></div>
        </router-link>
        <router-link to="aa" tag="a">
          <i class="icon icon-yuanshen-5"></i>
          帮助中心
          <div class="arrow"></div>
        </router-link>
      </ul>
      <button class="logout">登出</button>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import './index.scss';
.logout{
  position: absolute;
  left: 50%;
  @include webkit(transform,translate(-50%));
  bottom: 60px;
  width: 165px;
  height: 58px;
  background-color: #2d3339;
  border-radius: 100px;
  text-align: center;
  line-height: 58px;
  color: #fff;
  font-size: 18px;
  border: none;
  outline: none;
}
</style>