<script>
import HeaderComponent from "@/components/structure/HeaderComponent.vue";
import FooterComponent from "@/components/structure/FooterComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent }
}

</script>

<template>
  <HeaderComponent></HeaderComponent>

  <router-view></router-view>

  <FooterComponent></FooterComponent>
</template>
