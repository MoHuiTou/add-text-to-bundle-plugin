# 在编译文件中添加文字
webpack的插件，用于为编译后的文件添加字符串。

## 安装
```
npm i add-text-to-bundle-plugin --save-dev
```

## 使用
```js
const AddText2BundlePlugin = require('add-text-to-bundle-plugin')

// webpack config
{
  plugins: [
    new AddText2BundlePlugin({
        text:"var i=0;"
    })
  ]
}
```

## 输出
```js
var i=0;
/******/ (function(modules) { // webpackBootstrap
...
```
