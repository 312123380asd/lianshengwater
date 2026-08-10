# 辽宁联盛工业水处理官网

这是一个标准的 Next.js App Router 项目，使用 React、TypeScript 和 Tailwind CSS，支持中文、英文和俄语路由，可直接部署到 Vercel。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- 多语言路由：`/zh`、`/en`、`/ru`

## 本地运行

请先安装 Node.js 20 或更高版本，然后运行：

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000`，网站会自动进入英文首页。

## 生产构建

```bash
npm run build
npm run start
```

## 环境变量

复制 `.env.example` 为 `.env.local`，将网址改成您的正式域名：

```env
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
```

该变量用于 canonical、Open Graph、robots.txt 和 sitemap.xml。部署到 Vercel 时，也需要在项目的 Environment Variables 中配置同名变量。

## 上传到 GitHub

### 方法一：使用 GitHub 网页

1. 登录 GitHub，点击右上角 `+`，选择 `New repository`。
2. 输入仓库名称，例如 `liaoning-liansheng-website`。
3. 不要勾选自动创建 README、`.gitignore` 或 License。
4. 创建仓库后，在本项目文件夹中运行：

```bash
git init
git add .
git commit -m "Initial website release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

将 `YOUR_USERNAME` 和 `YOUR_REPOSITORY` 替换为您的 GitHub 用户名和仓库名。

### 方法二：使用 GitHub Desktop

1. 打开 GitHub Desktop，选择 `Add an Existing Repository from your Hard Drive`。
2. 选择本项目文件夹；如提示尚未创建仓库，选择创建仓库。
3. 提交全部文件，点击 `Publish repository`。

## 部署到 Vercel

1. 登录 Vercel，点击 `Add New` → `Project`。
2. 导入刚创建的 GitHub 仓库。
3. Framework Preset 保持 `Next.js`，其他构建设置保持默认。
4. 添加环境变量 `NEXT_PUBLIC_SITE_URL`。首次部署可先填写 Vercel 分配的网址，绑定正式域名后再修改。
5. 点击 `Deploy`。

以后只要向 GitHub 的 `main` 分支推送代码，Vercel 就会自动重新部署。

## 主要目录

```text
app/          页面、路由、SEO、全局样式
components/   导航、页脚和公共页面组件
lib/          多语言公共内容和网站配置
public/       图片、图标和PDF技术资料
```
