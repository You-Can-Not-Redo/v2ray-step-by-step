(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{235:function(a,r,t){"use strict";t.r(r);var v=t(2),s=Object(v.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"v2ray-配置指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-配置指南","aria-hidden":"true"}},[a._v("#")]),a._v(" V2Ray 配置指南")]),a._v(" "),t("h2",{attrs:{id:"声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明","aria-hidden":"true"}},[a._v("#")]),a._v(" 声明")]),a._v(" "),t("p",[a._v("感谢 ToutyRater 最初撰写了这份指南，帮助了无数人跨越长城走向世界。")]),a._v(" "),t("p",[a._v("现在 "),t("a",{attrs:{href:"https://github.com/ToutyRater/v2ray-guide",target:"_blank",rel:"noopener noreferrer"}},[a._v("原始指南"),t("OutboundLink")],1),a._v(" 将交由v2fly社区继续维护，欢迎任何形式贡献，分享你的经验和配置或者是勘误/翻译等等。")]),a._v(" "),t("p",[a._v("目前指南使用 "),t("a",{attrs:{href:"%60LICENSE.md%60"}},[a._v("BY-CC 4.0")]),a._v(" 授权协议")]),a._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("V2Ray 是 Project V 下的一个工具。Project V 是一个包含一系列构建特定网络环境工具的项目，而 V2Ray 属于最核心的一个。 官方中介绍"),t("code",[a._v("Project V 提供了单一的内核和多种界面操作方式。内核（V2Ray）用于实际的网络交互、路由等针对网络数据的处理，而外围的用户界面程序提供了方便直接的操作流程。")]),a._v("不过从时间上来说，先有 V2Ray 才有 Project V。\n如果还是不理解，那么简单地说，V2Ray 是一个与 Shadowsocks 类似的代理软件，可以用来科学上网（翻墙）学习国外先进科学技术。")]),a._v(" "),t("p",[a._v("V2Ray 用户手册：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.v2ray.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.v2ray.com"),t("OutboundLink")],1),a._v("（已被墙）")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://v2fly.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://v2fly.org"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("V2Ray 项目地址："),t("a",{attrs:{href:"https://github.com/v2ray/v2ray-core",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/v2ray/v2ray-core"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("V2Ray Telegram 使用群链接："),t("a",{attrs:{href:"https://t.me/v2fly_chat",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://t.me/projectv2ray"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"常见问题：q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题：q-a","aria-hidden":"true"}},[a._v("#")]),a._v(" 常见问题：Q&A")]),a._v(" "),t("h4",{attrs:{id:"v2ray-跟-shadowsocks-有什么区别？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-跟-shadowsocks-有什么区别？","aria-hidden":"true"}},[a._v("#")]),a._v(" V2Ray 跟 Shadowsocks 有什么区别？")]),a._v(" "),t("p",[a._v("Shadowsocks 是一个纯粹的代理工具，而 V2Ray 定位为一个平台，任何开发者都可以利用 V2Ray 提供的模块开发出新的代理软件。")]),a._v(" "),t("p",[a._v("了解 Shadowsocks 历史的同学都知道，Shadowsocks 是 clowwindy 开发的自用的软件，开发的初衷只是为了让自己能够简单高效地科学上网，自己使用了很长一段时间后觉得不错才共享出来的。V2Ray 是 clowwindy 被喝茶之后 V2Ray 项目组为表示抗议开发的，一开始就致力于让大家更好更快的科学上网。")]),a._v(" "),t("p",[a._v("由于出生时的历史背景不同，导致了它们性格特点的差异。")]),a._v(" "),t("p",[a._v("简单来说，Shadowsocks 功能单一，V2Ray 功能强大。听起来似乎有点贬低 Shadowsocks 呢？当然不！换一个角度来看，Shadowsocks 简单好上手，V2Ray 复杂配置多。")]),a._v(" "),t("h4",{attrs:{id:"既然-v2ray-复杂，为什么要用它？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#既然-v2ray-复杂，为什么要用它？","aria-hidden":"true"}},[a._v("#")]),a._v(" 既然 V2Ray 复杂，为什么要用它？")]),a._v(" "),t("p",[a._v("童鞋，某事物的优点和缺点总是相生相随的。相对来说，V2Ray 有以下优势：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("更完善的协议:")]),a._v(" V2Ray 使用了新的自行研发的 VMess 协议，改正了 Shadowsocks 一些已有的缺点，更难被墙检测到")]),a._v(" "),t("li",[t("strong",[a._v("更强大的性能:")]),a._v(" 网络性能更好，具体数据可以看 "),t("a",{attrs:{href:"https://steemit.com/cn/@v2ray/3cjiux",target:"_blank",rel:"noopener noreferrer"}},[a._v("V2Ray 官方博客"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("strong",[a._v("更丰富的功能:")]),a._v(" 以下是部分 V2Ray 的功能\n"),t("ul",[t("li",[a._v("mKCP: KCP 协议在 V2Ray 上的实现，不必另行安装 kcptun")]),a._v(" "),t("li",[a._v("动态端口：动态改变通信的端口，对抗对长时间大流量端口的限速封锁")]),a._v(" "),t("li",[a._v("路由功能：可以随意设定指定数据包的流向，去广告、反跟踪都可以")]),a._v(" "),t("li",[a._v("传出代理：也可称为链式代理，通过不断接力加强隐蔽性")]),a._v(" "),t("li",[a._v("数据包伪装：类似于 Shadowsocks-rss 的混淆，另外对于 mKCP 的数据包也可伪装，伪装常见流量，令识别更困难")]),a._v(" "),t("li",[a._v("WebSocket 协议：可以单独使用 WebSocket 代理。也可以通过它使用 CDN 中转，抗封锁效果更好")]),a._v(" "),t("li",[a._v("Mux:多路复用，进一步提高科学上网的并发性能")])])])]),a._v(" "),t("h4",{attrs:{id:"哪有十全十美的东西？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哪有十全十美的东西？","aria-hidden":"true"}},[a._v("#")]),a._v(" 哪有十全十美的东西？")]),a._v(" "),t("p",[a._v("少年悟性很高啊！当然没有！目前来说，V2Ray 有下面的缺点：")]),a._v(" "),t("ul",[t("li",[a._v("配置复杂")]),a._v(" "),t("li",[a._v("产业链不成熟")])]),a._v(" "),t("h4",{attrs:{id:"听你说了这么多，好像-v2ray-还不错的样子。但我只是要翻翻墙而已，不想花太多时间怎么办？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#听你说了这么多，好像-v2ray-还不错的样子。但我只是要翻翻墙而已，不想花太多时间怎么办？","aria-hidden":"true"}},[a._v("#")]),a._v(" 听你说了这么多，好像 V2Ray 还不错的样子。但我只是要翻翻墙而已，不想花太多时间怎么办？")]),a._v(" "),t("p",[a._v("无论做什么都是有代价的，付出不一定有收获，但是不付出肯定没有收获。")]),a._v(" "),t("h4",{attrs:{id:"我决定尝试一下-v2ray，那么我该如何使用这个指南？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#我决定尝试一下-v2ray，那么我该如何使用这个指南？","aria-hidden":"true"}},[a._v("#")]),a._v(" 我决定尝试一下 V2Ray，那么我该如何使用这个指南？")]),a._v(" "),t("p",[a._v("V2Ray 的用户手册非常详细地解释了 V2Ray，本指南主要以实际可用的配置从易到难来讲解 V2Ray 的功能特性，力求降低新手使用 V2Ray 的难度。")]),a._v(" "),t("p",[t("strong",[a._v("本指南的目标用户是有一定的 Linux 操作基础，像怎么注册 VPS，怎么用 SSH 登录 VPS，怎么使用 nano（或 vim） 编辑一个文本以及一些 Linux 基本命令的使用件网上有一大堆的指南，没必要重复造轮子再写一篇教程，如果这些你不会，强烈建议你去学会了再来尝试搭建 V2Ray。")])]),a._v(" "),t("p",[a._v("本指南可以看作 V2Ray 用户手册的简易版本，也可以看作 V2Ray 的实践指导。")]),a._v(" "),t("p",[a._v("你可以在不参考用户手册的情况下按照本指南的指导去搭建配置 V2Ray ，但我并不建议你这么做。因为本指南只是引导大家如何理解和配置 V2Ray，相较于用户手册来说有一定的取舍，会忽略一部分东西。所以我希望大家也花时间去阅读 V2Ray 用户手册。")]),a._v(" "),t("h4",{attrs:{id:"刚开始使用-v2ray，有什么需要注意的吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刚开始使用-v2ray，有什么需要注意的吗？","aria-hidden":"true"}},[a._v("#")]),a._v(" 刚开始使用 V2Ray，有什么需要注意的吗？")]),a._v(" "),t("p",[a._v("由于许多 V2Ray 用户都有使用过 Shadowsocks 的经验，基本上可以按照使用 Shadowsocks 那样使用。但是 V2Ray 还是和 Shadowsocks 不太一样，所以我大概说一下使用上的差异。请注意，差异不代表好坏或优劣，如果一个事物必须拥有其他同类所拥有的东西，那么它也就没有了存在的意义。")]),a._v(" "),t("ul",[t("li",[a._v("客户端：V2Ray 本身只是一个内核，V2Ray 上的图形客户端大多是调用 V2Ray 内核套一个图形界面的外壳，类似于 Linux 内核和 Linux 操作系统的关系；而 Shadowsocks 的客户端都是自己重新实现了一遍 Shadowsocks 协议。本文的内容短期内不涉及图形客户端的使用。")]),a._v(" "),t("li",[a._v("分流：也许大家第一反应是 PAC，实际上无论是 Shadowsocks (特指 Shadowsocks-libev) 还是 V2Ray 本身不支持 PAC，都是客户端加进来的；Shadowsocks 的分流使用 ACL，V2Ray 使用自己实现的路由功能，孰优孰劣只是仁者智者的问题。")]),a._v(" "),t("li",[a._v("分享链接/二维码：V2Ray 不像 Shadowsocks 那样有统一规定的 URL 格式，所以各个 V2Ray 图形客户端的分享链接/二维码不一定通用。")]),a._v(" "),t("li",[a._v("加密方式：V2Ray (特指 VMess 协议) 不像 Shadowsocks 那样看重对加密方式的选择，并且 VMess 的加密方式是由客户端指定的，服务器自适应。")]),a._v(" "),t("li",[a._v("时间：使用 V2Ray 要保证时间准确，因为这是为了安全设计的。")]),a._v(" "),t("li",[a._v("密码：V2Ray(VMesss) 只有 id（使用 UUID 的格式），作用类似于 Shadowsocks 的密码，但随机性远好于 Shadowsocks 的密码，只是不太方便记忆(安全和方便的矛盾)。")]),a._v(" "),t("li",[a._v("UDP 转发：VMess 是基于 TCP 的协议，对于 UDP 包 V2Ray 会转成 TCP 再传输的，即 UDP over TCP。要 UDP 转发功能在客户端的 socks 协议中开启 UDP 即可。")]),a._v(" "),t("li",[a._v("路由器翻墙：实际上它们并没有什么区别，不要以为没有插件就不能在路由器上用，看事物请看本质。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);