# Angular2 解析

Angular 应用的 8个主要构造块：

* 模块modules
* 组件components
* 模板template
* 元数据metadata
* 数据绑定data binding
* 指令directive
* 服务services
* 依赖注入dependency injection

## 模块

angular 应用是模块化的，有自己的模块系统，叫做NgModules。

angular 应用至少有一个模块（根模块），称为 AppModule。
下面是一个简单的根模块：

```javascript
// app.module.ts
import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @NgModle 装饰器函数，接受一个对象，对象有几个属性
@NgModule({
 imports:   [ BrowserModule ],
 providers:  [ Logger ],
 declarations: [ AppComponent ],
 exports:   [ AppComponent ],
 bootstrap:  [ AppComponent ]
})
// AppComponent 的 export 语句导出，根模块不需要导出，其他组件不需导入根模块。
export class AppModule { }
```

大多数应用都有很多其它的 特性模块，它们由一组领域类、工作流、或紧密相关的功能聚合形成。
angular的所有模块都是一个带有 @NgModule 装饰器的类。
NgModule 是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。属性有：
* declarations（声明）：本模块中拥有的视图类。angular 有三种视图类：组件、指令、管道。
* exports：declarations的子集，可用于其它模块中的组件模板。
* imports：本模块组件模板中需要由其他模板导出的类。
* providers：服务的创建者。本模块把它们加入全局的服务表中，让他们在应用中的任何部分都可被访问到。
* bootstrap：标识出应用的主视图（根组件）。只有根模块才可设置此属性。

引导根模块来启动应用。在 main.ts 文件中引导 AppModule：

```javascript
// app/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 从app.module 文件导入了 AppModule
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
```
此时，项目只有 app/app.module.ts 文件和 app/main.ts ，前者定义了应用的根模块，后者引用它来启动应用。

## 模块库

Angular 库的名字都以 `@angular` 前缀，可以使用 npm 包管理工具安装，并如上面的 import 语句可以访问它们中的对象。
这点很好理解，Angular 本来就是依托于JS实现的单页面框架，所以它本身还是需要丰富的JS库的。
比如，从 @angular/core 库导入 Component 装饰器：

```javascript
import { Component } from '@angular/core';
```

使用JavaScript导入语句从Angular 库中导入 Angular 的某些模块。

```javascript
import { BrowserModule } from '@angular/platform-browser';
```

在上面根模块的代码中，应用模块需要 `BrowserModule` 的某些素材，所以把它加入 `@NgModule` 元数据的 `imports` 中;

我们看看基本的@angular库中有哪些JS模块：
* common
* compiler
* core
* forms
* http
* platform-browser
* platform-browser-dynamic
* router
* upgrade

## 组件

组件负责控制屏幕上的一小块地方，就是视图。
在类中定义组件的应用逻辑（被用来为视图提供支持）。组件通过一些由属性和方法组成的API与视图交互。所以说组件是联系视图的。

## 模板

通过组件自带的模板来定义视图。模板是以HTML形式存在的，它告诉 Angular 如何渲染组件（视图）。

看一个组件文件的模板：

```HTML
<!--app/hero-list.component.html-->
<h2>Hero List</h2>
<p><i>Pick a hero from the list</i></p>
<ul>
 <li *ngFor="let hero of heroes" (click)="selectHero(hero)">
  {{hero.name}}
 </li>
</ul>
<hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
```

模板看起来就是标准 HTML，它里面有一些非标准HTML的语法。`*ngFor`、`{{hero.name}}`、`{click}`、`[hero]` 和 `<hero-derail>` ，它们是 Angular 的模板语法。
所以说，Angular 是通过这种方式来处理 HTML的。

## 元数据

元数据告诉Angular如何处理一个类。
之前 export 的类里有一些方法和属性，但是怎么处理这个类？
只要把元数据附加到这个类，就意味着这个类是个组件。
在 TypeScript 中，我们用装饰器（decorator）来附加元数据。
分析下面的元数据：

```
// app/hero-list.component.ts
@Component({
 moduleId: module.id,
 selector:  'hero-list',
 templateUrl: 'hero-list.component.html',
 providers: [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```

`@Component`装饰器把紧随其后的类标记成了组件类。
装饰器里的配置项：
`moduleId`：为与模块相关的URL提供基地址。
`selector`：CSS 选择器，它告诉 Angular 在父级HTML寻找一个标签，然后创建组件实例并插入标签中。实现HTML的显示。
`templateUrl`：组件HTML模板的模块相对地址。HTML模板的设置位置。
`providers`：数组，包含组件所依赖的服务所需要的依赖注入提供商。告诉Angular该组件的构造函数需要服务，组件可以从服务获取数据。
某些数据的传递通过服务进行，否则，其他的视图只能控制静态的展示。

`@Component` 里的元数据会告诉 Angular 如何取得你为组件设定的元数据。
模板、元数据和组件共同描绘出这个视图。组件就是视图，模板提供HTML的结构性。

## 数据绑定

Angular 框架实现数据绑定，一种让模板各部分与组件的各部分相互联系的机制。在模板HTML中添加绑定标记，Angular 会连接模板和组件。
意味着，我们刻意自动实现视图数据的更新，因为它绑定了组件，可以实现数据的关联。

```HTML
// app/hero-list.component.ts
<li>{{hero.name}}</li>
<hero-detail [hero]="selectedHero"></hero-detail>
<li (click)="selectHero(hero)"></li>
```

观察到在这个模板HTML里，有一些非标准HTML的字符。
* `{{hero.name}}` 插值表达式：在元素中显示组件的 hero.name属性的值。 
* `[hero]` 属性绑定：把父组件的值传到子组件的 hero 属性中。 
* `(click)` 事件绑定：当用户点击元素时调用方法。

## 指令

Angular 模板是动态的。当 Angular 渲染它们时，它会根据指令对DOM进行修改。

就是说解析模板HTML的时候，会解析其中的指令。指令是一个带有指令元数据的类。
在TypeScript中，要通过 @Directive 装饰器把元数据附加到类上。
和之前的类的元数据一样，通过 @Component 装饰器把元数据附加到后面的类，编程组件类。这个就是通过 @Directive 装饰器把一些元数据附加到后面的指令类。
* 结构型指令：通过在DOM中添加、移除、替换元素修改布局。`ngFor` 、 `ngIf`。
* 属性指令：修改现有元素的外观或行为。`ngModel`;

## 服务

服务分很多种，值、函数、应用所需的特性。
几乎任何东西都可以是一个服务。典型的服务是一个类。

组件是最大的服务消费者。
组件的一些操作需要服务提供一些数据。
示例，把日志记录显示到浏览器控制台：

```javascript
// app/logger.service.ts
export class Logger {
 log(msg: any)  { console.log(msg); }
 error(msg: any) { console.error(msg); }
 warn(msg: any) { console.warn(msg); }
}
```
这些服务使得组件不用去服务器获取数据、进行验证……，这一切都可以通过服务完成。
组件的任务就是提供用户体验，仅此而已！
它介于视图（由模板渲染）和应用逻辑（包括模型）之间。
设计良好的组件为数据绑定提供属性和方法，对它们不重要的事情委托给服务。

## 依赖注入

依赖注入是提供类的新实例的一种方式，负责处理好类所需的全部依赖（服务）。
Angular 使用依赖注入提供我们需要的组件及组件所需的服务。
Angular 能通过查看构造函数的参数类型，来的值组件所需的服务。

```javascript
// app/hero-list.component.ts
constructor(private service: HeroService) { }
```
构造函数的参数提到了一个服务。
当 Angular 创建组件时，会先为组件所需的服务找一个注入器（Injector）。
注入器是一个维护服务实例的容器，存放着以前创建的实例。如果容器中还没有所请求的服务实例，注入器就会创建一个服务实例，并且添加到容器中，然后把这个服务返回给 Angular。当所有服务都被解析完并返回， Angular 会以这些服务为参数去调用组件的构造函数，这就是依赖注入。
也就是说服务是先于组件被执行的。它先处理所有的服务到一个仓库，然后再处理组件，组件需要哪个服务就从仓库取出来给你。

```javascript
// app/app.module.ts
providers: [
 BackendService,
 HeroService,
 Logger
],
```

提供商是确定处理组件之前必须存在所依赖的组件
也可以把它注册到组件层：

```javascript
// app/hero-list.component.ts
@Component({
 moduleId: module.id,
 selector:  'hero-list',
 templateUrl: 'hero-list.component.html',
 providers: [ HeroService ]
})
```
添加到装饰器元数据的属性中。
依赖注入的要点：
1、依赖注入渗透在整个Angular框架中
2、注入器是机制的核心 
  * 注入器负责维护一个容器，存放创建过的服务实例
  * 注入器能使用提供商创建一个新的服务实例
3、提供商是一个用于创建服务的配方。
4、把提供商注册到注入器。