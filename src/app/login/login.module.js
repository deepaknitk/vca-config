"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var forms_1 = require("@angular/forms");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var create_account_component_1 = require("./create-account/create-account.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild([{
                    path: 'login',
                    component: login_component_1.LoginComponent
                }])
        ],
        declarations: [login_component_1.LoginComponent, forgot_password_component_1.ForgotPasswordComponent, create_account_component_1.CreateAccountComponent],
        exports: [router_1.RouterModule]
    })
], LoginModule);
exports.LoginModule = LoginModule;
