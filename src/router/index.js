import _applyMeta from "./applyMeta";

export const applyMeta = _applyMeta;

const camelToTitleCase = (str) => str.replace(/[A-Z]/g, (l) => ` ${l}`);

export const loadViews = (o) =>
  Object.entries(o).map(([component_name, Component]) => {
    const route = {
      name: component_name.toLowerCase(),
      path: `/${component_name.toLowerCase()}`,
      component: Component,
      meta: {},
    };
    Object.assign(route, Component.__route);
    if (!route.meta.title) {
      route.meta.title = camelToTitleCase(component_name);
    }
    return route;
  });
