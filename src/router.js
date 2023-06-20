import Vue from "vue";
import Router from "vue-router";
import DesktopFull from "./components/DesktopFull";
import { desktopFullData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: DesktopFull,
      props: { ...desktopFullData },
    },
  ],
});
