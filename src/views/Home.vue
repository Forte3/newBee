<template>
  <div>
    <header class="home-header" :class="{ 'active': headerScroll }">
      <router-link tag="i" to="./category"><i class="nbicon nbmenu2"></i></router-link>
      <div class="header-search">
        <span class="app-name">NewBee</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./product-list?from=home">热爱生活，好好努力</router-link>
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manager-o"></van-icon>
      </router-link>
    </header>
    <!-- 轮播图 -->
    <swiper :list="swiperList"></swiper>

    <nav-bar></nav-bar>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
import navBar from '@/components/NavBar.vue'
import swiper from '@/components/Swiper.vue'
import { getHome } from '@/service/home'
import { Toast } from 'vant'
export default {
  setup() {
    const state = reactive({
      swiperList: [],
      isLogin: false,
      headerScroll: false,
      hots: [],
      newGoodses: [],
      recommends: [],
      categoryList: [],
      loading: true
    })

    onMounted(async () => {

      Toast.loading({
        message: '加载中',
        forbidClick: true
      })

      const { data } = await getHome()
      state.swiperList = data.carousels

      Toast.clear()
    })

    return {
      ...toRefs(state)
    }

  },
  components: {
    navBar,
    swiper
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

.home-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 50px);
  .fj();
  line-height: 50px;
  padding: 0 15px;
  .boxSizing();
  font-size: 15px;
  color: #fff;
  z-index: 1000;
  // background: @primary;

  .nbmenu2 {
    color: @primary;
  }

  &.active {
    background: @primary;

    .nbmenu2 {
      color: #fff;
    }

    .login {
      color: #fff;
    }
  }

  .header-search {
    display: flex;
    .wh(74%, 20px);
    line-height: 20px;
    margin: 10px 0;
    padding: 5px 0;
    color: #232326;
    background: rgba(255, 255, 255, .7);
    border-radius: 20px;

    .app-name {
      padding: 0 10px;
      color: @primary;
      font-size: 20px;
      font-weight: bold;
      border-right: 1px solid #666;
    }

    .icon-search {
      padding: 0 10px;
      font-size: 17px;
    }

    .search-title {
      font-size: 12px;
      color: #666;
      line-height: 21px;
    }
  }
}
</style>