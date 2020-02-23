<template>
  <div id="app">
    <!-- 导航区域 -->
    <LuffyHeader />
    <router-view />
  </div>
</template>

<script>
import LuffyHeader from "@/components/Common/LuffyHeader";
export default {
  name: "App",
  components: {
    LuffyHeader
  }
};
</script>
<style>
#app {
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("./assets/content-bg.png");
}
</style>