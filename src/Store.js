export default modules => {
  const store = {
    list: [],
    install: (app, _options) => {
      app.config.globalProperties.$store = store
      store.list.forEach(m => m.init?.())
    },
    register: (name, module) => {
      store[name] = module({ store })
      store.list.push(store[name])
    },
  }

  Object.entries(modules).forEach(([name, module]) => store.register(name, module))
  return store
}
