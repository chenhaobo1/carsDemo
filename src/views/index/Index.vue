<template>
  <div>
    <!-- cars data渲染 -->
    <!-- <Cars /> -->
    <!-- 地图 -->
    <!-- <Map></Map> -->
    <!-- 导航 -->
    <Navbar/>
    <div id="children-user" :class="{open:show}">
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
  mounted(){
    document.addEventListener('mouseup',(e) => {
      const userCon = document.getElementById('children-user');
      if(userCon && !userCon.contains(e.target)){
          this.$router.push({
            name:"Index"
          })
        }
    })
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
#children-user {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 101;
  width: 420px;
  background-color: #34393f;
  @include webkit(transition,all .4s ease-out);
  @include webkit(box-shadow ,-5px 0 38px 0 rgba(0,0,0,.4));
  &.open{
    right:0
  }
}
</style>
