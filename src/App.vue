<script>
import HeaderComponent from "@/components/structure/HeaderComponent.vue";
import FooterComponent from "@/components/structure/FooterComponent.vue";
import ProductComponent from "@/components/ProductComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
import BodyCardComponent from "@/components/BodyCardComponent.vue";

export default {
  components: { HeaderComponent, ProductComponent, FooterComponent, BodyComponent, BodyCardComponent, }
}

</script>

<template>
  <HeaderComponent></HeaderComponent>

  <router-view></router-view>

  <FooterComponent></FooterComponent>
</template>
