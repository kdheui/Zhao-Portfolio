# Zhaolin Hu Portfolio

静态作品集，不需要安装依赖或构建。

## 工程结构

- `index.html`：页面结构与内容（首页、Ask、Work、About、Contact）。
- `styles.css`：布局、字体、主题色、响应式样式及动画。
- `app.js`：滚动转场、卡片吸附、鼠标互动、键盘、问答、导航与语言切换。
- `intro.js`：在页面绘制前决定是否播放开屏动画。
- `assets/images/`：首页背景与个人照片。
- `backups/`：历史版本；不参与当前页面运行。

## 本地预览

在这个目录运行：

```sh
python3 -m http.server 8001 --bind 127.0.0.1
```

浏览器访问 `http://127.0.0.1:8001/`。如已有预览服务器，无需重复启动。

开屏默认每个标签页会话播放一次。要重播，在地址后添加 `?intro=replay`。

## 修改位置

编辑内容和项目卡片：`index.html`。
调整视觉和动画：`styles.css`。
调整交互行为：`app.js`。
开屏播放规则：`intro.js`。

问答目前使用本地预设回复；联系邮箱和简历仍待更新。
字体搭配：Michroma 用于 Hero 大标题与导航，DM Mono 用于辅助文字，Manrope 用于正文。字体在 `assets/fonts/` 本地加载，无需请求 Google Fonts。

部署时保留上述运行文件及 `assets` 的相对目录；`backups` 可不部署。

## HOVR 项目

首页第一张卡片链接到 `hovr.html`。详情页根据 Figma 节点 `3:412` 与历史版本恢复，样式在 `hovr.css`，图片在 `assets/hovr/`。页面包含项目背景、模式、手势、流程、原型说明和 Figma 演示入口。
