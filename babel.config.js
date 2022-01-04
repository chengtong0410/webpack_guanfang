module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
  ],
  plugins: [
    //   'transform-vue-jsx',
    "@babel/plugin-syntax-dynamic-import",
    //   ['@babel/plugin-transform-runtime', { 'absoluteRuntime': false, 'corejs': 2, 'version': '^7.9.2' }],
    //   ['@babel/plugin-proposal-object-rest-spread', { 'useBuiltIns': true }],
  ],
};
