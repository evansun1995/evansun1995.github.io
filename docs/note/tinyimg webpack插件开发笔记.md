# tinyimg webpack插件开发笔记
### 参考文章：
[嗯，手搓一个TinyPng压缩图片的WebpackPlugin也SoEasy啦](https://juejin.cn/post/6882551009219575815)

## 前言
在前端性能优化方面，可以选择的方案有很多，常见的优化点有：  
减少http请求、缓存资源、压缩代码、图片压缩、懒加载、style标签放置头部、script标签放置尾部、减少使用DataUrl、减少Dom操作等。

其中，图片压缩是性能提升最为明显的一种，有人说**无论怎样对代码做最好的优化也不及对一张图片做一次压缩好**。在实际开发过程中，一张3mb的图片，经过工具压缩后，能至少减少50%以上的大小，而前端的代码无论怎么压缩优化、可能最终在内存大小上，可能也就只能优化几十kb，所以压缩图片是前端开发过程中必不可少的一样过程。

市面上的图片压缩工具、网站有很多，这里不做赘述，目前最好用的（没有之一）的是tinyPNG（/TinyJPG）

![tinypng](../.vuepress/public/images/tinypng.gif 'tinypng')  

## 使用
官方提供的使用方法有两种：
1. 打开[官方网站](https://tinypng.com)，手动上传、压缩、下载，每次最多压缩20张，体积不能超过5mb，超出数量需要开通vip.
2. 使用[Tinify API](https://tinypng.com/developers/reference/nodejs)，可以通过nodejs自动调用，需要注册账号获取api key，与手动上传相同有数量和体积的限制，且每个账号每个月限制最多上传500张。

对于我们程序员来说，能交给程序去处理的事情，肯定比手动解决的要好，而对于数量上的限制，总结了一下大致有两种解决方法：
1. 通过代码主动调用官网手动上传图片的api进行上传，通过伪造请求ip的方式绕过接口的数量限制
2. 注册多个账号，通过代码自动读取api key，通过tinify api压缩

本文我们先采取方法一作为切入点，简单了解一下webpack plugin的开发流程（方法二后面会继续整理出来）

## 为什么是Plugin
我们在面试中提到webpack，经常会被问到的问题是，loader和plugin有什么区别，简单总结一下：

### loader：
对于loader，官方的解释是

> webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 [模块](https://webpack.docschina.org/concepts/modules)，以供应用程序使用，以及被添加到依赖图中。

因此，loader是专门用来处理文件的，本质是一个函数。loader具有单一职责原则，一个loader只处理一件事（一种类型文件）。

[loader开发官方教程](https://www.webpackjs.com/contribute/writing-a-loader/)

### plugin
plugin官方的介绍是：
>loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。

plugin本质是一个类，是对于loader的补充，功能十分强大， 在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。webpack本身内置了很多好用的plugin。

[plugin开发官方教程](https://www.webpackjs.com/contribute/writing-a-plugin/)

---

综上所述，我们的需求使用plugin更为合适。


## plugin执行时机
本次开发的插件是对项目中的所有图片进行压缩，所以选在的 webpack 钩子应该能获取到所有输出前的图片。从[Webpack Compiler Hooks API文档](https://www.webpackjs.com/api/compiler-hooks/)中可发现，emit 是在生成资源到 output 目录之前执行的钩子，emit在生成资源到输出目录前执行，此刻可获取所有图片文件的数据和输出路径。

## 解决数量限制问题
>由于大多数Web架构很少会将应用服务器直接对外提供服务，一般都会设置一层Nginx作为代理和负载均衡，有的甚至可能有多层代理。鉴于大多数Web架构都是使用Nginx作为反向代理，用户请求不是直接请求应用服务器的，而是通过Nginx设置的统一接入层将用户请求转发到服务器的，所以可通过设置HTTP请求头字段X-Forwarded-For来伪造IP。  
>X-Forwarded-For指用来识别通过代理或负载均衡的方式连接到Web服务器的客户端最原始的IP地址的HTTP请求头字段。当然，这个IP也不是一成不变的，每次请求都需随机更换IP，骗过应用服务器。若应用服务器增加了伪造IP识别，那可能就无法继续使用随机IP了。

补充：因为Nginx转发之后，接口服务器无法直接获取请求客户端的ip地址（获取到发起请求的ip是Nginx服务器的），因此需要Nginx设置`X-Forwarded-For`请求头，里面携带了实际请求客户端的ip地址（其实还有个`X-Real-Ip`字段，本文中tinyPng的服务器应该是没有使用该字段）


## 插件工作流程
1. 选择一个合适的钩子注册事件
2. 在回调函数中，获取所有图片文件，回调函数compiler参数部分截图如下：
![compilation](../.vuepress/public/images/compilation.png 'compilation')  

1. `compilation`参数部分截图
2. 循环图片文件，伪造随机ip发起上传请求
3. 下载压缩后的图片
4. 获取图片压缩数据用于输出日志
5. 保存压缩后的图片到`assets`对象，替换原图片
6. 输出日志

## 目录结构
* src
  * index.js -- 入口文件
  * schema.json -- 参数校验
* study -- 参考及学习文件
* test -- 测试用例
* util
  * constant.js -- 常量集合
  * index.js -- 处理函数集合
* .gitignore
* .npmgnore
* package.json
* readme.md

## 开发流程
1. npm init 初始化项目，创建package.json文件，`entry point`设置成`src/index.js`
2. 创建目录结构，安装依赖（一定记得区分`dependencies`和`devDependencies`，npm发布中会补充）
3. 编写代码
4. 发布npm

## 后续升级
经过上述流程后，一个基础的 TinyImg 插件已经初步完成了，但如果直接应用到项目中，还是有一些问题。在实际开发中，每次打包时对所有图片进行上传、压缩然后下载，如果项目中的图片很多，这是十分耗时且重复的一步操作，因此我们需要对已压缩的图片进行缓存。
大致的处理流程是：
1. 在调用接口压缩图片后，在根目录下的 TINY_IMG_CACHE 目录中，将文件以图片的文件流生成32位哈希值拼上文件后缀作为文件名保存。
2. 在处理图片文件时，用上述处理方式生成的文件名在 TINY_IMG_CACHE 目录中寻找是否存在，如果存在直接使用缓存文件，否则走上述1中的逻辑。

**注意**：处理缓存文件时，因为统一放在一个文件夹中，如果图片内容完全相同，处理出来的32位哈希值也会是相同的，因此处理时后处理的文件会走缓存逻辑，个人认为这样没问题，可以合理使用缓存。如果想避免这种情况，可以给文件名拼接上一些文件信息，如文件夹路径。另外因为我们使用MD5加密的方式处理出来的32位哈希值，理论上是有可能重复的，比较严谨的方法也是可以拼上一些文件信息。

**补充：为什么不直接替换assets中的源文件？**  
开始时有考虑过这个问题，最终考虑到我们的项目是使用jenkins发版，打包是在jenkins服务器中，打包后改变的只是服务器中的文件，每次发版时文件又会被重置，相当于没有缓存。而如果我们在本地压缩完图片后再上传，那本质上我们应该开发的是一个nodejs脚本，脱离了开发webpack插件的初衷，毕竟webpack是一个打包工具，插件是在打包时才去执行的。

## 发布npm
整体代码开发完成后，为了方便项目的使用以及版本的管理，我们需要将插件发布到npm上。

1. 确保 node 和 npm 版本
我们要确保node版本在 14.18.0 及以上，且安装最新版本 npm ，否则 npm 在登录时会报`426 Upgrade Required`。
原因：2021年10月4日后，npm 网站和 npm registry 必须使用 TLS 安全套接层 1.2 版本，所以需要升级对应版本。
这里推荐大家使用 nvm 管理 node 版本，切换 node 版本后，执行`cnpm install -g npm@latest`安装最新版本 npm，记得**不要使用**npm 去升级自身，会报错。  

    参考：[关于npm版本问题](https://blog.csdn.net/weixin_41697143/article/details/120650358)

2. package.json配置
确保填写好正确的`name`（npm包名）、`version`（版本号，尽量小一些）、`main`（入口文件）、`repository`（git管理地址，非必填），`private`需要设置为`false`（表明是公开项目），此外还要确保依赖安装时位置是否正确。

    **重点：**
    我们在开发过程中使用的依赖，如果是插件运行过程中使用的，必须安装到`dependencies`中，否则发布后，项目引入后，插件的相关依赖不会被 npm 安装（执行时会报依赖找不到）。
    如果是如本地测试的代码用到的依赖，则最好安装在`devDependencies`中，这样在项目使用时这些用不到的依赖不会被安装。

3. 发布:  
`npm login` （登录）  
`npm publish` （发布）  

    补充：
如果使用cnpm安装依赖，当`npm publish`发布依赖后，如果 cnpm 没有同步，常见于多次发版后，解决方法：
点击进入[cnpm官网](https://developer.aliyun.com/mirror/NPM?from=tnpm)
搜索包名，点击下图所示 SYNC 按钮，手动进行同步。
![cnpmsync](../.vuepress/public/images/cnpm-sync.png 'cnpm sync')

4. 在项目中引入:
```shell
// 安装依赖
npm install tinyimg-webpack-plugin-no-key -D
```

```js
// vue.config.js 配置
const TinyimgWebpackPlugin = require('tinyimg-webpack-plugin-no-key');  

module.exports = {
  // ....
  configureWebpack: (config) => {
    // ....
    config.plugins.push(new TinyimgWebpackPlugin({
      // enabled:Boolean，默认true,
     // logged:Boolean，默认true
    }}))
  }
}
```

**补充**：如果使用了多个插件，关于 webpack 插件的执行顺序，首先肯定是不同钩子的执行顺序是固定的，可以看文档，而相同钩子内的执行顺序是钩子本身决定的。比如`emit`钩子是一个`AsyncSeriesHook`（异步串行钩子），会根据 plugin 插入的顺序从上向下执行，因此如果你用了比如`compression-webpack-plugin`，我们需要将该插件放最后，当图片压缩完成后，再处理 gzip 之类的逻辑。

项目源码：[EvanSun/tinyimg-webpack-plugin](https://gitee.com/evan-sun/tinyimg-webpack-plugin)