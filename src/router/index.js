import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BodiesView from "../views/BodiesView.vue";
import ConceptView from "../views/ConceptView.vue";
import BodyComponent from "@/components/BodyComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/your-bodies",
      name: "Your Bodies",
      component: BodiesView,
    },
    {
      path: "/your-bodies/:id",
      name: "yourBody",
      component: BodyComponent,
      props: true
    },
    {
      path: "/concept",
      name: "Concept",
      component: ConceptView,
    }
  ],
});

export default router;
