<template>
  <div class="user-container">
    <Back column="安全设置"/>
    <ul class="group-links">
      <router-link to="/password" tag="a">
        修改登录密码
        <div class="arrow"></div>
      </router-link>
      <router-link to="aa" tag="a">
        设置资金密码
        <div class="arrow"></div>
      </router-link>
      <router-link to="aa" tag="a">
        绑定手机号
        <div class="arrow"></div>
      </router-link>
      <router-link to="aa" tag="a">
        绑定银行卡
        <div class="arrow"></div>
      </router-link>
    </ul>
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
@import '../user/index.scss'
</style>
