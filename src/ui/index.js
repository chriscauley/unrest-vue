import store from "./store";
import Component from "./Component";

store.Component = Component;

export default {
  install(app) {
    app.config.globalProperties.$ui = store
    app.component('unrest-ui', Component)
  }
}

