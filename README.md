# Angular2 使用总结

## 模板表达式&插值表达式
插值表达式&插值表达式的语法格式为：{{ ... }}。
插值表达式&插值表达式可以把计算的字符串插入HTML中，也可以作为属性值来使用。

```JavaScript
<h3>
  {{title}}
  <img src="{{imageUrl}}" style="height:30px">
</h3>
```

## 属性绑定

模板的属性绑定可以把视图元素的属性设置为模板表达式。最常用的属性绑定是把元素的属性设置为组件中属性的值。

imageUrl 属性上：

```JavaScript
<img [src]="imageUrl">
```

当组件为 isUnchanged( 未改变 ) 时禁用一个按钮：

```HTML
<button [disabled]="isUnchanged">按钮是禁用的</button>
```

设置一个自定义组件的属性（这是父子组件间通讯的重要途径）：

```HTML
<user-detail [user]="currentUser"></user-detail>
```

## HTML 属性(Attribute)、 class 和 style 绑定

### 属性(Attribute)、绑定

当元素没有属性可绑的时候，使用HTML标签属性(Attribute)绑定。
HTML标签特性绑定在语法上类似于属性绑定，但中括号中的部分不是一个元素的属性名，而是由一个attr.的前缀和HTML标签属性的名称组成，然后通过一个能求值为字符串的表达式来设置HTML标签属性的值。如：

```HTML
<table border=1>
  <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
  <tr><td>Five</td><td>Six</td></tr>
</table>
```

### css类绑定

借助 CSS 类绑定 ，我们可以从元素的 class 属性上添加和移除 CSS 类名。
CSS 类绑定在语法上类似于属性绑定。但方括号中的部分不是一个元素的属性名，而是包括一个 class 前缀，紧跟着一个点 (.) ，再跟着 CSS 类的名字组成。 其中后两部分是可选的。例如： [class.class-name] 。

```HTML
<!-- 标准HTML样式类设置 -->
<div class="bad curly special">Bad curly special</div>
<!-- 通过绑定重设或覆盖样式类  -->
<div class="bad curly special" [class]="badCurly">Bad curly</div>
<!-- 通过一个属性值来添加或移除special样式类 -->
<div [class.special]="isSpecial">这个样式比较特殊</div>
```

### style样式绑定

通过样式绑定，可以设置内联样式。样式绑定语法上类似于属性绑定，但中括号里面的部分不是一个元素的属性名，样式绑定包括一个style.，紧跟着css样式的属性名，例如：[style.style-property]。

```HTML
<button [style.color] = "isSpecial ? 'red': 'green'">红色</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'" >保存</button>
 
<!-- 带有单位的样式绑定 -->
<button [style.font-size.em]="isSpecial ? 3 : 1" >大</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >小</button>
```

## 事件绑定

在事件绑定中，Angular通过监听用户动作，比如键盘事件、鼠标事件、触屏事件等来响应相对应的数据流向-从视图目标到数据源。
事件绑定的语法是由等号左侧小括号内的**目标事件**和右侧引号中的**模板声明**组成。

```HTML
<button (click)="onSave()">保存</button>
```

也可以使用on-前缀的形式：

```HTML
<button on-click="onSave()">On Save</button>
```

## 使用 NgModel 进行双向数据绑定

当开发数据输入表单时，期望的结果是既能将组件的数据显示到表单上，也能在用户修改时更新组件的数据。

```HTML
<input [(ngModel)]="currentUser.firstName">
```
[]实现了数据流从组件到模板，()实现了数据流从模板到组件，两者一结合`[()]`就实现了双向绑定。

也可以使用前缀形式的语法：

```HTML
<input bindon-ngModel="currentUser.firstName">
```

## 内置指令

Angular 的内置指令有 NgClass、NgStyle、NgIf、NgFor、NgSwitch等。

### 通过绑定到`NgClass`动态添加或删除 CSS 类。

```HTML
<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'" >
  这个div是大号的。
</div>
```

### NgStyle 通过把它绑定到一个key:value控制对象的形式，可以让我们同时设置很多内联样式。

```JavaScript
setStyles() {
  let styles = {
    // CSS属性名
    'font-style': this.canSave ? 'italic' : 'normal',  // italic
    'font-weight': !this.isUnchanged ? 'bold' : 'normal', // normal
    'font-size': this.isSpecial ? '24px' : '8px', // 24px
  };
  return styles;
}
```

通过添加一个NgStyle属性绑定，让它调用setStyles，并据此来设置元素的样式：

```HTML
<div [ngStyle]="setStyles()">
    这个div的样式是italic, normal weight, 和extra large (24px)。
</div>
```

### 通过把NgIf指令绑定到一个真值表达式，可以把一个元素及其子元素添加到DOM树上。

```HTML
<div *ngIf="currentUser">Hello,{{currentUser.firstName}}</div>
```

### 当需要从一组可能的元素树中根据条件显示其中一个时，就需要NgSwitch了。

三个相互合作的指令：
* ngSwitch：绑定到一个返回开关值的表达式
* ngSwitchCase：绑定到一个返回匹配值的表达式
* ngSwitchDefault：一个用于标记默认元素的属性 注意：不要再ngSwitch前使用*，而应该用属性绑定，但ngSwitchCase和ngSwitchDefault前面要放*。

### NgFor:当需要展示一个由多个条目组成的列表时就需要这个指令了;

```HTML
<div *ngFor="let user of users">{{user.fullName}}</div>
```

### NgForTrackBy

ngFor 指令有时候会性能较差，特别是在大型列表中。 对一个条目的一点小更改、移除或添加，都会导致级联的 DOM 操作。
比如，当通过重新从服务器来刷新通讯录，刷新后的列表可能包含很多（如果不是全部的话）以前显示过的联系人。但在Angular看来，它不知道哪些是以前就存在过的，只能清理旧列表、舍弃那些DOM元素，并用新的DOM元素来重建一个新列表。

解决这个问题，可以通过追踪函数来避免这种折腾。追踪函数会告诉Angular：我们知道两个具有相同user.id的对象是同一个联系人。如：

```JavaScript
trackByUsers(index: number, user: User){return user.id}
```

然后，把NgForTrackBy指令设置为那个追踪函数：

```HTML
<div *ngFor="let user of users; trackBy:trackByUsers">({{user.id}}) {{user.fullName}}</div>
```

追踪函数不会排除所有DOM更改。如果用来判断是否为同一个联系人的属性变化了，就会更新DOM元素，反之就会留下这个DOM元素。列表界面就会变得比较更加平滑，具有更好的响应效果。

### 模板引用变量

模板引用变量是模板中对 DOM 元素或指令的引用。
它能在原生 DOM 元素中使用，也能用于 Angular 组件——实际上，它可以和任何自定义 Web 组件协同工作。
我们可以在同一元素、兄弟元素或任何子元素中引用模板引用变量。
这里是关于创建和使用模板引用变量的两个例子：

```HTML
<!-- phone 引用了 input 元素，并将 `value` 传递给事件句柄 -->
<input #phone placeholder="phone number">
<button (click)="callPhone(phone.value)">Call</button>
 
<!-- fax 引用了 input 元素，并将  `value` 传递给事件句柄  -->
<input ref-fax placeholder="fax number">
<button (click)="callFax(fax.value)">Fax</button>
```