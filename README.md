# 个人网站

这是一个基于Figma设计的个人网站，展示基本情况和工作经验。网站支持Web和移动端，可在Cloudflare Pages上部署。

## 文件结构

```
/
├── index.html         # 主HTML文件
├── style.css          # 样式文件
├── script.js          # JavaScript交互功能
├── _headers           # Cloudflare HTTP响应头设置
├── _redirects         # Cloudflare URL重定向规则
├── robots.txt         # 搜索引擎爬虫设置
├── sitemap.xml        # 站点地图
└── images/            # 图片文件夹
    ├── profile-photo.png      # 个人照片
    ├── location-icon.png      # 位置图标
    ├── wechat-qr.png          # 微信二维码
    ├── company-logo-1.png     # 公司图标1
    ├── company-logo-2.png     # 公司图标2
    ├── company-logo-3.png     # 公司图标3
    ├── company-logo-4.png     # 公司图标4
    └── company-logo-5.png     # 公司图标5
```

## 功能特点

1. 静态页面展示个人信息和工作经验
2. 微信二维码悬浮显示功能（鼠标悬停/触摸设备点击"加微信"按钮时显示）
3. 邮件直接发送功能（点击"发邮件"按钮）
4. 完全响应式设计，适配PC端和移动端设备
5. 针对性能和加载速度进行优化
6. 支持Cloudflare Pages部署

## 使用说明

1. 将您的个人照片替换 `images/profile-photo.png`
2. 将您的微信二维码图片替换 `images/wechat-qr.png`
3. 将公司logo替换对应的图片文件
4. 如有需要，可以修改 `index.html` 中的个人信息文本

## 本地运行

有两种方式可以本地预览网站：

1. 直接在浏览器中打开 `index.html` 文件
2. 使用Python内置的HTTP服务器（推荐，可以更好地模拟真实环境）：
   ```
   python3 -m http.server 8000
   ```
   然后在浏览器中访问 `http://localhost:8000`

## 测试功能

网站包含内置的测试和调试功能：

1. 按下 `Shift + D` 键可以打开调试面板，面板中包含：
   - 设备尺寸模拟器
   - 当前屏幕尺寸显示
   - 调试模式开关

2. 网站在加载时会自动在控制台输出测试信息，包括：
   - 环境信息 (浏览器、设备类型等)
   - 关键元素加载状态
   - 响应式布局检测
   - 微信按钮功能测试

## Cloudflare Pages部署步骤

1. 注册或登录 [Cloudflare账户](https://dash.cloudflare.com/)
2. 进入Cloudflare Pages部分
3. 点击"创建项目"
4. 连接您的Git仓库（GitHub、GitLab等）
5. 选择包含此网站代码的仓库
6. 配置如下设置:
   - 生产分支: `main`（或您的主分支名称）
   - 构建命令: 留空（静态站点无需构建）
   - 构建输出目录: 留空（使用根目录）
7. 点击"保存并部署"

部署完成后，Cloudflare Pages将提供一个类似 `https://your-project-name.pages.dev` 的URL。您可以在项目设置中为其配置自定义域名。

## 性能优化

此网站在以下方面进行了性能优化：

1. 资源预加载
2. 响应式图片加载
3. CSS和JavaScript优化
4. 触摸设备交互优化
5. Cloudflare缓存配置
6. 安全响应头设置

## 问题排查

如果遇到显示问题：

1. 检查控制台是否有错误信息（F12或右键检查）
2. 确认所有图片文件已正确放置在images目录
3. 尝试使用不同的浏览器测试
4. 检查CSS是否被正确加载

如果二维码不显示：
1. 桌面端：检查鼠标悬停功能
2. 移动端：确认点击功能是否正常 