# AngularJS2 JavaScript 环境配置

## 安装依赖

见`package.json`;

## 创建 Angular 组件

`app/app.component.js`解析：
通过链式调用全局Angular core命名空间ng.core中的Component和Class方法创建了一个名为AppComponent的可视化组件。
Component方法接受一个包含两个属性的配置对象，Class方法是实现组件本身的地方，在Class方法中给组件添加属性和方法，它们会绑定到相应的视图和行为。

### 模块

Angular应用都是模块化的，ES5没有内置的模块化系统，可以使用第三方模块系统，然后我们为应用创建独立的命名空间 app，文件代码可以包裹在 IIFE（立即执行函数表达式）中：

```JavaScript
(function(app) {
})(window.app || (window.app = {}));
```
将全局app命名空间对象传入IIFE中，如果不存在就用一个空对象初始化它。
大部分应用文件通过在app命名空间上添加东西来输出代码，在app.component.js文件中输出了AppComponent。

```JavaScript
app.AppComponent =
```

### Class定义对象

```JavaScript
.Class({
	constructor: function() {}
});
```

本实例中AppComponent类只有一个空的构造函数:当我们要创建一个是有实际意义的应用时，我们可以使用属性和应用逻辑来扩展这个对象。

### Component 定义对象

`ng.core.Component()`告诉Angular这个类定义对象是一个Angular组件。传递给`ng.core.Component()`的配置对象有两个字段：`selector`和`template`。

```JavaScript
ng.core.Component({
    selector: 'my-app',
    template: '<h1>我的第一个 Angular 应用</h1>'
})
```
* `selector` 为一个宿主HTML元素定义了一个简单的CSS选择器`my-app`。当Angular在宿主HTML中遇到一个my-app元素时它创建并显示一个AppComponent实例。
* `template` 属性容纳着组建的模板。

## 添加 NgModule

Angular 应用由 Angular 模块组成，该模块包含了 Angular 应用所需要的组件及其他任何东西。
接下来创建 app/app.module.js 文件;

## 启动应用

添加 app/main.js 文件;

需要两样东西来启动应用：
Angular 的 `platformBrowserDynamic().bootstrapModule` 函数。
上文中提到的应用根模块 `AppModule`。

执行过程为：当 Angular 在 main.js 中调用 bootstrapModule 函数时，它读取 AppModule 的元数据，在启动组件中找到 AppComponent 并找到 my-app 选择器，定位到一个名字为 my-app 的元素，然后再这个标签之间的载入内容。