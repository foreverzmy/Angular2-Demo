"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var fruit_model_1 = require("./fruit.model");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Fruits';
        this.fruits = [
            new fruit_model_1.Fruit(1, 'Apple'),
            new fruit_model_1.Fruit(2, 'Orange'),
            new fruit_model_1.Fruit(3, 'Banana'),
            new fruit_model_1.Fruit(4, 'Pear'),
        ];
        this.myLike = this.fruits[0];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>I like {{myLike}}</h2>\n    <p>list</p>\n    <ul>\n      <li *ngFor='let fruit of fruits'>{{fruit.name}}</li>\n    </ul>\n    <p *ngIf=\"fruits.length > 3\">\u4F60\u6709\u5F88\u591A\u4E2A\u559C\u6B22\u7684\u6C34\u679C!</p>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map