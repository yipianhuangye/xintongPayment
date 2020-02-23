<template>
  <!-- element-ui -->
  <el-container>
    <div class="header">
      <div class="user-name">张三</div>
      <div class="nav-left">
        <img class="nav-logo" src="../../assets/logo.png" alt />
      </div>
      <div class="nav-center">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link class="nav-text" :to="{path:'Merchant'}">{{$t('nav.shanghu')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-text" :to="{path:'Admin'}">{{$t('nav.admin')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-text" :to="{path:'Integral'}">{{$t('nav.integral')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-text" :to="{path:'Member'}">{{$t('nav.member')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-text" :to="{path:'Carousel'}">{{$t('nav.carousel')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-text" :to="{path:'Prefix'}">{{$t('nav.prefix')}}</router-link>
          </li>
        </ul>
      </div>
      <div
        class="nav-right"
        @click="$i18n.locale = $i18n.locale === 'zh'?'en':'zh';"
      >当前语言:中文/ English</div>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "LuffyHeader",
  data() {
    return {
      isShow: false
    };
  },
  methods: {}
};
</script>
<style >
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
.user-name {
  width: 120px;
  height: 60px;
  background: #b72735;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
}
.nav-logo {
  width: 150px;
  height: auto;
}
.nav-center {
  flex: 1;
  height: 100%;
}
.nav-list {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: center;
}
.nav-item {
  margin-right: 50px;
}
.nav-text {
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #fff;
}
.nav-right {
  width: 167px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 5px;
  margin-right: 100px;
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.nav-center ul li a.is-active {
  color: #277cda;
}
</style>