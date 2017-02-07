# 使用Angular material2

## 安装

```npm
npm install --save @angular/material
```
## 引入框架

在 `src/app/app.module.ts` 中引入框架

```typescript
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [
    MaterialModule.forRoot()
    ...
  ]
})
export class AppModule { }
```

## 主题

用 Angular CLI 可以添加下面一行到 src/style.css:

```css
@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';
```

或者在html下添加：

```html
<link href="node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css" rel="stylesheet">
```
`deeppurple-amber` 主题颜色是可变的，有以下几个选择：
* deeppurple-amber
* indigo-pink
* pink-bluegrey
* purple-green

另外，框架中 `md-slide-toggle` 和 `md-slider` 两个组件依赖外部第三方组件 `HammerJS` 需要额外的配置。

先去命令行工具运行 `npm i --save-dev @types/hammerjs`

然后编辑 `tsconfig.json` 文件将 `hammerjs` 添加到 `types` 下

```json
"types": [
  "jasmine", "hammerjs"
]
```

如果需要字体图标可以在 src/index.html 中引入

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```