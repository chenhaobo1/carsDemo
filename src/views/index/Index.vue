<template>
  <div>
    <!-- cars data渲染 -->
    <Cars />
    <!-- 地图 -->
    <!-- <Map></Map> -->
    <!-- 导航 -->
    <Navbar/>
    <div class="children-user" :class="{open:show}">
      <!-- 会员 -->
       <router-view />
    </div> 
  </div>
</template>
<script>
import Map from "../amap";
import Cars from "../cars";
import Navbar from "@c/navbar";
export default {
  name: "Index",
  data() {
    return {};
  },
  computed:{
    show(){
      const router = this.$route
      return  router.name === "Index" ? false : true
    }
  },
  watch: {},
  components: {
    Map,
    Cars,
    Navbar
  },
};
</script>
<style lang="scss">
.children-user {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 101;
  width: 410px;
  background-color: #34393f;
  -webkit-transition: all .4s ease-out;
  transition: all .4s ease-out;
  &.open{
    right:0
  }
}
</style>
