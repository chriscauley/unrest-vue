module.exports = {
  configureWebpack: {
    externals: {
      "@popperjs/core": {
        root: "Popper",
        commonjs: "@popperjs/core",
        commonjs2: "@popperjs/core",
      },
    },
  },
};
