<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide><carsList height="820px" /></swiper-slide>
        <swiper-slide><carsList /></swiper-slide>
        <swiper-slide><carsList /></swiper-slide>
        <swiper-slide><carsList /></swiper-slide>
      </swiper>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </div>
    <!-- <span @click="userss">汽车列表</span> -->
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import carsList from "../../components/carsList/index.vue";
export default {
  name: "Cars",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
    carsList,
  },
  methods: {
    userss() {
      this.$router.push({ name: "User" });
    },
  },
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
