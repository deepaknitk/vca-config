"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CreateAccountComponent = (function () {
    function CreateAccountComponent(appService) {
        this.appService = appService;
    }
    CreateAccountComponent.prototype.ngOnInit = function () {
    };
    CreateAccountComponent.prototype.createAccount = function () {
        if (this.Password === this.ConfirmPassword) {
            this.appService.createAccount(this.Username, this.Password);
        }
        else {
            alert("Password not matched!");
            return;
        }
    };
    return CreateAccountComponent;
}());
CreateAccountComponent = __decorate([
    core_1.Component({
        selector: 'create-account',
        templateUrl: './create-account.component.html',
        styleUrls: ['./create-account.component.css', '../login.component.css']
    })
], CreateAccountComponent);
exports.CreateAccountComponent = CreateAccountComponent;
