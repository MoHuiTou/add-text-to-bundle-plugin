var path = require('path');
var AddText2BundlePlugin = require('add-text-to-bundle-plugin');

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