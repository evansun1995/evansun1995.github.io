(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{401:function(t,a,s){"use strict";s.r(a);var e=s(54),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"前端缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端缓存"}},[t._v("#")]),t._v(" 前端缓存")]),t._v(" "),s("p",[s("strong",[t._v("参考文章：")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844903747357769742",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂前端缓存"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844903737538920462",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端缓存最佳实践"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"存储方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储方式"}},[t._v("#")]),t._v(" 存储方式")]),t._v(" "),s("p",[t._v("当浏览器使用缓存时，会按照以下顺序"),s("strong",[t._v("依次")]),t._v("获取资源缓存：")]),t._v(" "),s("ol",[s("li",[t._v("Service Worker：基于"),s("code",[t._v("Web Worker")]),t._v("的原生对象，在其基础上增加了缓存能力，使得用户可以主动发起资源缓存。")]),t._v(" "),s("li",[t._v("Memory Cache：内存缓存，只对当前 Tab 生效。几乎所有加载的资源都会被缓存到"),s("code",[t._v("Memory Cache")]),t._v("中。当分配的内存空间不足时，浏览器会自动清除部分缓存。")]),t._v(" "),s("li",[t._v("Disk Cache：硬盘缓存，持久存储。浏览器会根据"),s("code",[t._v("Expires")]),t._v("和"),s("code",[t._v("Cache-control")]),t._v("字段判断资源是否需要加入缓存，绝大部分的缓存都来自于此。同"),s("code",[t._v("Memory Cache")]),t._v("，浏览器会按策略自动清除可能过期的资源。")])]),t._v(" "),s("h2",{attrs:{id:"缓存分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存分类"}},[t._v("#")]),t._v(" 缓存分类")]),t._v(" "),s("h3",{attrs:{id:"强制缓存-强缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存-强缓存"}},[t._v("#")]),t._v(" 强制缓存（强缓存）")]),t._v(" "),s("p",[t._v("强缓存如果命中将直接使用本地缓存，不会发起 HTTP 请求。"),s("br"),t._v("\n大致过程是：")]),t._v(" "),s("ol",[s("li",[t._v("首先判断资源是否有缓存，如果没有，直接直接发起请求，并进行缓存。")]),t._v(" "),s("li",[t._v("如果有缓存，根据资源的"),s("code",[t._v("Expires")]),t._v("和"),s("code",[t._v("Cache-control")]),t._v("判断资源是否过期")]),t._v(" "),s("li",[t._v("如果过期会继续发起请求")])]),t._v(" "),s("h3",{attrs:{id:"对比缓存-协商缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比缓存-协商缓存"}},[t._v("#")]),t._v(" 对比缓存（协商缓存）")]),t._v(" "),s("p",[t._v("对比缓存是当强制缓存没有命中时执行的逻辑，会发起HTTP请求。"),s("br"),t._v("\n对比缓存主要由两组字段控制：")]),t._v(" "),s("h4",{attrs:{id:"_1-last-modified-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-last-modified-if-modified-since"}},[t._v("#")]),t._v(" 1. Last-Modified & If-Modified-Since")]),t._v(" "),s("p",[t._v("前者是首次请求缓存时保留的修改时间，后者是第二次发起请求时，浏览器请求头中的字段，用来传递缓存资源的"),s("code",[t._v("Last-Modified")]),t._v("给服务端做对比。如果相等，则表示未修改，响应 304；反之，则表示修改了，响应 200，并返回数据。")]),t._v(" "),s("p",[t._v("但是该方法有如下缺陷：")]),t._v(" "),s("ul",[s("li",[t._v("如果资源更新的速度是秒以下单位，那么该缓存是不能被使用的，因为它的时间单位最低是秒。")]),t._v(" "),s("li",[t._v("如果文件是通过服务器动态生成的，那么该方法的更新时间永远是生成的时间，尽管文件可能没有变化，所以起不到缓存的作用。")])]),t._v(" "),s("h4",{attrs:{id:"_2-etag-if-none-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-etag-if-none-match"}},[t._v("#")]),t._v(" 2. Etag & If-None-Match")]),t._v(" "),s("p",[t._v("为了解决上面的缺陷，设计出了"),s("code",[t._v("Etag")]),t._v("和"),s("code",[t._v("If-None-Match")]),t._v("两个字段。\n"),s("code",[t._v("Etag")]),t._v("存储的是文件的特殊标识(一般都是 hash 生成的)，服务器存储着文件的"),s("code",[t._v("Etag")]),t._v("字段。之后的流程和上述类似，首次请求缓存保留资源的"),s("code",[t._v("Etag")]),t._v("，第二次请求时将保存的"),s("code",[t._v("Etag")]),t._v("的值存放在"),s("code",[t._v("If-None-Match")]),t._v("字段中给服务器对比当前"),s("code",[t._v("Etag")]),t._v("，如果相等返回 304，否则返回新资源和 200。")]),t._v(" "),s("h2",{attrs:{id:"缓存配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存配置"}},[t._v("#")]),t._v(" 缓存配置")]),t._v(" "),s("p",[t._v("简述一下前端和后端可以对缓存的操作：")]),t._v(" "),s("h3",{attrs:{id:"前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),s("p",[t._v("前端能处理的空间很小，只有当服务端没有设置缓存头时才会生效。方式是通过"),s("code",[t._v("meta")]),t._v("标签设置"),s("code",[t._v("http-equiv")]),t._v("和"),s("code",[t._v("content")]),t._v("字段配置"),s("strong",[t._v("该html文件")]),t._v("的缓存策略：")]),t._v(" "),s("ol",[s("li",[t._v("禁止缓存："),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Pragma"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cache-Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Expires"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("设置有效时间3600s："),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cache-Control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("max-age=2000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[t._v("#")]),t._v(" 后端")]),t._v(" "),s("p",[t._v("大部分缓存的配置都在服务端完成，这里就不展开阐述，随便举个例子：")]),t._v(" "),s("h4",{attrs:{id:"nginx禁止缓存html文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx禁止缓存html文件"}},[t._v("#")]),t._v(" nginx禁止缓存html文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("location ~.*\\.(html)$\n{\n   add_header 'Cache-Control' 'private,no-store,no-cache,must-revalidate,proxy-revalidate';\n}\n")])])]),s("h2",{attrs:{id:"缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[t._v("#")]),t._v(" 缓存策略")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("vue 项目：由于我们脚手架中集成了 webpack，打包时默认资源文件名会加上hash，每次打包生成的资源名称都是不同的（publick文件夹中资源除外）。因此比较合理的缓存方式是：")]),t._v(" "),s("ul",[s("li",[t._v("HTML：使用协商缓存。")]),t._v(" "),s("li",[t._v("CSS&JS&图片：使用强缓存，文件命名带上 hash 值。")])])]),t._v(" "),s("li",[s("p",[t._v("传统项目：如果没有使用类似 webpack、gulp 的打包工具，如果非必要，"),s("strong",[t._v("不建议使用随机数给资源去缓存")]),t._v("。一般的策略是：")]),t._v(" "),s("ul",[s("li",[t._v("不常变化的资源：建议给资源手动添加版本号，配置"),s("code",[t._v("max-age=31536000")]),t._v("给一个很大的值（一年），当需要更新时手动修改版本号即可。")]),t._v(" "),s("li",[t._v("经常变化的资源：建议设置"),s("code",[t._v("Cache-Control: no-cache")]),t._v("，结合协商缓存验证是否更新。")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);