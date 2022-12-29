const rules = require('./webpack.rules');
const { VueLoaderPlugin } = require('vue-loader')

rules.push({
  test: /\.(sa|sc|c)ss$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {loader: 'postcss-loader'}],
});

rules.push({
  test: /\.vue$/,
  use: [{ loader: 'vue-loader' }],
});

rules.push({
  test: /\.(jpg?g|png)$/i,
  use: [{ loader: 'file-loader'}],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins:[ new VueLoaderPlugin()]
};
