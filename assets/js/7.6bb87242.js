(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{337:function(e,a,t){e.exports=t.p+"assets/img/compilation.bed02be7.png"},411:function(e,a,t){"use strict";t.r(a);var o=t(54),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"webpack-学习笔记"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webpack-学习笔记"}},[e._v("#")]),e._v(" webpack 学习笔记")]),e._v(" "),o("h2",{attrs:{id:"前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),o("p",[e._v("普及一些关于 vue-cli 的知识：")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("我们创建项目使用的是 vue-cli 4.x，是 vue 提供的脚手架")])]),e._v(" "),o("li",[o("p",[e._v("一切代码编译的环境是基于 nodejs，nodejs 使用 js 语法开发，node 的模块化基于 CommonJS。注意区别，nodejs 是个服务器软件，软件本身是用 C++ 开发的，之所以支持 js 是因为内置了 V8 引擎，可以像浏览器一样对 js 代码进行解析。")])]),e._v(" "),o("li",[o("p",[e._v("安装依赖是基于 npm（node package manager），因此会有一个 package.json，package.json 是一个 JSON 格式标准文件，yarn 也能读取。里面的配置项有多种，有 npm 的依赖，npm 发布的配置项，插件的配置也可以写在里面（如 eslint、babel 等）。"),o("br"),e._v("\n提问：")]),e._v(" "),o("ol",[o("li",[e._v("package.json 文件和 webpack 有什么关系？")]),e._v(" "),o("li",[o("code",[e._v("devDependencies")]),e._v("和"),o("code",[e._v("dependencies")]),e._v("有什么区别？")]),e._v(" "),o("li",[e._v("dependencies 中"),o("code",[e._v("^3.2.0")]),e._v("前面的"),o("code",[e._v("^")]),e._v("是什么，去掉会怎样？")])])]),e._v(" "),o("li",[o("p",[e._v("此外还有个 package-lock.json，用于锁定 npm 依赖的版本（如 element-ui 版本），由于插件不同版本代码会有一定区别，对于协同开发以及使用 jenkins 打包发布时很重要，建议在 git 提交时一并提交到项目中。值得注意的是，只有"),o("code",[e._v("npm install")]),e._v("会产生该文件，cnpm 不会生成。")])]),e._v(" "),o("li",[o("p",[e._v("如果想在命令行中使用"),o("code",[e._v("webpack xxxx")]),e._v("这样的命令（类似"),o("code",[e._v("npm xxx")]),e._v("），webpack4.0+ 版本需要安装 webpack-cli")])]),e._v(" "),o("li",[o("p",[e._v("当我们使用"),o("code",[e._v("npm run serve")]),e._v("构建的时候：")]),e._v(" "),o("ol",[o("li",[e._v("npm 会在 package.json 的 script 对象中找到 serve 的值（如果不存在会报错）")]),e._v(" "),o("li",[e._v("接下来 npm 会将这段字符串放在 cmd 中运行，但是如果我们直接在 cmd 中运行 script 中配置的命令，cmd是不支持的，因此再执行命令前，npm会在项目的目录下找到 node_modules 文件夹下的 .bin 目录，把此目录添到系统的 path 环境变量下，执行完之后再把环境变量下的目录删除。")]),e._v(" "),o("li",[e._v("打开 .bin 文件夹可以看到一个文件：vue-cli-service，这其实是一个 link 快捷方式，它指向 '@vue/cli-service/bin/vue-cli-service.js' 这个文件。")]),e._v(" "),o("li",[e._v("在这个文件中我们可以看到引用了一些列处理的代码文件，里面包括 webpack 编译、启动 webpack-dev-server（proxy 就是其内置功能）等，最终打开项目。")])])]),e._v(" "),o("li",[o("p",[e._v("同理，当我们使用"),o("code",[e._v("npm run build")]),e._v("打包项目的时候，大致的流程和上述相同，内部打包处理逻辑的区别是 vue 内部自行处理的，相比之下，打包时少了起服务的步骤，多了删除 dist 文件、输出 dist 文件等过程。（其实"),o("code",[e._v("npm run serve")]),e._v("命令也会用到 webpack 打包，只不过不用输出到 dist 文件夹）")])])]),e._v(" "),o("h2",{attrs:{id:"基本概念"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),o("p",[e._v("引用"),o("a",{attrs:{href:"https://www.webpackjs.com/concepts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),o("OutboundLink")],1),e._v("文档开头的一句话：")]),e._v(" "),o("blockquote",[o("p",[e._v("本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。")])]),e._v(" "),o("p",[e._v("在webpack中有四个核心概念：")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("入口（entry）")]),e._v("：entry属性可以配置成一个或多个，它是webpack开始构建的出发点，进入入口后，webpack会找出有哪些模块和库是入口起点依赖的，再以此递归的去进行依赖收集。vue-cli的多页面配置项pages，就是根据entry和下面要说的output进行二次封装的。")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("输出（output）")]),e._v("：output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ‘./dist’。")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("loader")]),e._v("：loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("插件（plugins）")]),e._v("：loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。")])])]),e._v(" "),o("h2",{attrs:{id:"构建流程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#构建流程"}},[e._v("#")]),e._v(" 构建流程")]),e._v(" "),o("ol",[o("li",[e._v("准备阶段：从入口进入，webpack 在构建过程中会创建的 compiler 对象，compiler 编译时会生成 compilation 对象")]),e._v(" "),o("li",[e._v("modules 解析和 chunks 生成阶段，这个阶段的主要内容是：\n"),o("ol",[o("li",[e._v("先解析项目依赖的所有 modules，再根据 modules 生成 chunks。")]),e._v(" "),o("li",[e._v("module 解析，包含了三个主要步骤：创建实例、loaders 应用以及依赖收集。loader 如：html-loader、css-loader、file-loader、url-loader。")])])]),e._v(" "),o("li",[e._v("chunks 生成，主要步骤是找到 chunk 所需要包含的 modules。")]),e._v(" "),o("li",[e._v("文件生成阶段")])]),e._v(" "),o("h2",{attrs:{id:"compiler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiler"}},[e._v("#")]),e._v(" Compiler")]),e._v(" "),o("p",[e._v("webpack 负责编译的 Compiler 和创建 Bundle 的 Compilation 都是继承自 "),o("a",{attrs:{href:"https://github.com/webpack/tapable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tapable"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("p",[e._v("Tapable 的原理和 EventEmitter 类似，但是功能更强大，支持多种类型事件，webpack 构建过程中会触发对应的钩子（Hook），webpack 的插件就是在各种钩子上进行注册，在触发时执行。")]),e._v(" "),o("p",[o("strong",[e._v("总结")]),e._v("：Compiler 是每次 webpack 全部生命周期的对象，而 Compilation 是 webpack 中每次构建过程的生命周期对象，Compilation 是通过 Compiler 创建的实例。两个类都有自己生命周期，即有自己不同的 Hook，通过添加对应 Hook 事件，可以拿到各自生命周期关键数据和对象。Compilation 有个很重要的对象是 Stats 对象，通过这个对象可以得到 webpack 打包后的所有 module、chunk 和 assets 信息，通过分析 Stats对象可以得到很多有用的信息，比如 webpack-bundle-analyzer 这类分析打包结果的插件都是通过分析 Stats 对象来得到分析报告的。")]),e._v(" "),o("p",[e._v("参考文档："),o("a",{attrs:{href:"https://blog.csdn.net/weixin_42614080/article/details/110507675",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack 工程化实践总结"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"compilation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compilation"}},[e._v("#")]),e._v(" Compilation")]),e._v(" "),o("p",[e._v("想知道 compilation 长啥样，有两种方法，一个是看源码，还有一个是通过nodejs，在插件中将 compilation JSON 序列化存在文件中。需要注意的是 compilation 内存在 对象循环引用 以及 Bigint 类型，因此序列化时需要特殊判断一下。")]),e._v(" "),o("p",[e._v("循环引用报错："),o("code",[e._v("Uncaught TypeError: Converting circular structure to JSON")]),o("br"),e._v("\nBigint 报错："),o("code",[e._v("TypeError: Do not know how to serialize a BigInt")]),e._v("。")]),e._v(" "),o("p",[e._v("处理方法可以参考："),o("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1470722",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack 的 stats 、Compilation、compiler 对象里都有啥"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("compilation 在 "),o("a",{attrs:{href:"https://webpack.docschina.org/api/compiler-hooks/#emit",target:"_blank",rel:"noopener noreferrer"}},[e._v("emit"),o("OutboundLink")],1),e._v(" 钩子中打印结果部分截图如下：")]),e._v(" "),o("p",[o("img",{attrs:{src:t(337),alt:"compilation",title:"compilation"}})]),e._v(" "),o("p",[e._v("其中的 assets 对象包括了输出前所有的资源对象，我们在此处修改assets 对象中的文件，会直接影响到 webpack 的输出结果，很多webpack插件都是在这里处理的。")]),e._v(" "),o("h2",{attrs:{id:"webpack模块化"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webpack模块化"}},[e._v("#")]),e._v(" webpack模块化")]),e._v(" "),o("p",[e._v("webpack支持的模块化引入方式有：")]),e._v(" "),o("ul",[o("li",[e._v("ES Module")]),e._v(" "),o("li",[e._v("CommonJS")]),e._v(" "),o("li",[e._v("AMD")])]),e._v(" "),o("p",[e._v("Q：UMD是什么？")]),e._v(" "),o("h2",{attrs:{id:"总结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),o("p",[e._v("在前端自动化、工程化的大背景下，适当学习 webpack 还是很有必要的。但 webpack 本质上来说只是一个运行于 nodejs 环境的静态模块打包器，相比于 gulp 和 grunt，webpack 会从入口开始对项目依赖进行解析和依赖收集，将代码按照引用关系打包成不同的模块，这对我们项目本身的语法规范会有一定的要求，需要视情况而定，后面会再分享一篇关于使用 gulp 打包jq项目笔记。")])])}),[],!1,null,null,null);a.default=r.exports}}]);