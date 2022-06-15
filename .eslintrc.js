module.exports = {
  "ignorePatterns": ["*.scss"],
  extends: '@unrest',
  rules: {
    // TODO need to research how this will impact existing packages
    // Possibly add a warning
    "vue/no-deprecated-v-is": "off",
  }
}
