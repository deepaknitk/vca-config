"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(appService, fb) {
        this.appService = appService;
        this.fb = fb;
        this.generateForm();
    }
    ForgotPasswordComponent.prototype.generateForm = function () {
        this.forgotPasswordForm = this.fb.group({
            Username: ['', forms_1.Validators.required]
        });
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        this.appService.forgotPassword(this.forgotPasswordForm.value.Username);
        console.log(this.forgotPasswordForm.status);
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forgot-password',
        templateUrl: './forgot-password.component.html',
        styleUrls: ['./forgot-password.component.css', '../login.component.css']
    })
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
