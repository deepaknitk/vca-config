"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var auth_gaurd_service_1 = require("../auth-gaurd.service");
var project_card_component_1 = require("./projects/project-card/project-card.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var roles_component_1 = require("./roles/roles.component");
var did_component_1 = require("./did/did.component");
var permissions_component_1 = require("./permissions/permissions.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                {
                    path: 'roles',
                    canActivate: [auth_gaurd_service_1.AuthGaurd],
                    component: roles_component_1.RolesComponent
                },
                {
                    path: 'permissions',
                    canActivate: [auth_gaurd_service_1.AuthGaurd],
                    component: permissions_component_1.PermissionsComponent
                },
                {
                    path: 'did',
                    canActivate: [auth_gaurd_service_1.AuthGaurd],
                    component: did_component_1.DidComponent
                }
            ])
        ],
        declarations: [
            project_card_component_1.ProjectCardComponent,
            nav_bar_component_1.NavBarComponent,
            roles_component_1.RolesComponent,
            did_component_1.DidComponent,
            permissions_component_1.PermissionsComponent
        ],
        exports: [router_1.RouterModule]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
