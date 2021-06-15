import store from "./store";
import Component from "./Component.vue";

store.Component = Component;

export default {
  install(app) {
    app.config.globalProperties.$ui = store;
    app.component("UnrestUi", Component);
  },
  ...store,
};
