"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var permissions_component_1 = require("./permissions.component");
describe('PermissionsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [permissions_component_1.PermissionsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(permissions_component_1.PermissionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
