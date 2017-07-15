var path = require('path');
var AddText2BundlePlugin = require('../src/add-text-to-bundle-plugin.js');

module.exports = {
  entry: './js/a.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new AddText2BundlePlugin({
        text:"var i=0;"
    })
  ]
};