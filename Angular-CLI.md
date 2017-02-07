# Angular-CLI使用总结

Angular2的环境设置是一大门槛，所以Angular-CLI诞生了，使用Angular-CLI可以帮助我们更好更快的开发Angular2项目。

## 安装

```npm
npm install -g angular-cli
```

##　命令

###　创建项目命令

*　ng new project-name - 创建一个新项目，置为默认设置
* ng build - 构建/编译应用
* ng test - 运行单元测试
* ng e2e - 运行端到端（end-to-end）测试
* ng serve - 启动一个小型web服务器，用于托管应用
* ng deploy - 即开即用，部署到Github Pages或者Firebase

### 构建应用

* ng generate component my-new-component  - 生成一个新组建
* ng generate directive my-directive - 生成一个新指令
* ng generate pipe my-pipe - 生成一个新管道
* ng generate service my-service - 生成一个新服务
* ng generate route my-route - 生成一个新路由
* ng generate class my-class - 生成一个简易的模型类

对于每个生成命令，所产生的文件会根据官方Angular样式指南的规定，放置在正确的位置。