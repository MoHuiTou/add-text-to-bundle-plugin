let pluginOptions={};
function AddText2Bundle(options) {
    pluginOptions.text = options.text||"";
    pluginOptions.isBanner = options.isBanner||false;
}

AddText2Bundle.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {

    // 检查所有编译好的资源文件：
    // 为每个文件名新增一行
    for (var filename in compilation.assets) {
        let content = pluginOptions.text + "\r\n" + compilation.assets[filename].source();
      compilation.assets[filename] = {
          source:function(){
              return content;
          },
          size:function(){
              return content.length;
          }
      }
    }

    callback();
  });
};

module.exports = AddText2Bundle;