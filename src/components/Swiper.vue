<template>
  <van-swipe class="swipe" :autoplay="3000" indicator-color="#1baeae">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.carouselUrl" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    list: Array
  }
}

</script>

<style lang="less" scoped>
.swipe {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>