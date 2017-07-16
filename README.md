# 在编译文件中添加文字

[![License][ico-license]][link-license]
[![NPM][ico-npm]][link-npm]
[![Contributors][ico-contributors]][link-contributors]

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

[ico-npm]: https://img.shields.io/npm/v/add-text-to-bundle-plugin.svg
[ico-license]: https://img.shields.io/npm/l/add-text-to-bundle-plugin.svg
[ico-contributors]: https://img.shields.io/github/contributors/MoHuiTou/add-text-to-bundle-plugin.svg


[link-license]:./LISENCE
[link-npm]: https://www.npmjs.com/package/add-text-to-bundle-plugin
[link-contributors]: https://github.com/MoHuiTou/add-text-to-bundle-plugin/graphs/contributors
