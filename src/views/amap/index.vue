<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      class="amap-demo"
      :events="events"
    ></el-amap>
  </div>
</template>
<script>
import { AmapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  data() {
    return {
      map:null,
      zoom: 10,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: [114.59996, 31.197646],
        zoom:this.zoom //初始化地图层级
      });
    });
  },
};
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>
