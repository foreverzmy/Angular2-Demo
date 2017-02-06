# AngularJS2 TypeScript 环境配置

## 创建配置文件

Angular 项目需要以下几个配置文件：
* package.json 标记本项目所需的 npm 依赖包。
* tsconfig.json 定义了 TypeScript 编译器如何从项目源文件生成 JavaScript 代码。
* typings.json为那些 TypeScript 编译器无法识别的库提供了额外的定义文件。
* systemjs.config.js 为模块加载器提供了该到哪里查找应用模块的信息，并注册了所有必备的依赖包。 它还包括文档中后面的例子需要用到的包。

## 创建应用

用 NgModules 把 Angular 应用组织成了一些功能相关的代码块。
Angular 本身是被拆成一些独立的 Angular 模块，这样我们在应用中只需要导入需要的 Angular 部分。
每个 Angular 应用至少需要一个root module(根模块) ，实例中为 AppModule 。
接下来我们在 angular-quickstart 目录下创建 app 目录;

然后在 app 目录下创建 app.module.ts 文件;
由于这是一个运行在浏览器中的 Web 应用，所以根模块需要从 @angular/platform-browser 中导入 BrowserModule 并添加到 imports 数组中。

### 创建组件并添加到应用中

每个 Angular 应用都至少有一个根组件， 实例中为 AppComponent；

代码解析：
* AppComponent从 angular2/core 引入了 Component 包。
* @Component 是 Angular 2 的装饰器 ，它会把一份元数据关联到 AppComponent 组件类上。
* my-app 是一个 CSS 选择器，可用在 HTML 标签中，作为一个组件使用。
* @view 包含了一个 template ，告诉 Angular 如何渲染该组件的视图。
* export 指定了组件可以再文件外使用。

### 启动应用

接下来需要告诉 Angular 如何启动应用。
在 angular-quickstart/app 目录下创建 main.ts 文件；初始化平台，让代码可以运行，然后在该平台上启动 AppModule。

### 定义该应用的宿主页面

在 angular-quickstart 目录下创建 index.html 文件；

* JavaScript 库： core-js 是为老式浏览器提供的填充库， zone.js 和 reflect-metadata 库是 Angular 需要的，而 SystemJS 库是用来做模块加载的。
* SystemJS 的配置文件和脚本，可以导入并运行了我们刚刚在 main 文件中写的 app 模块。
* `<my-app>` 标签是应用载入的地方