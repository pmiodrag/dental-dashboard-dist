System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", "./diagnose-list", '../../shared/constants/app.constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, index_1, diagnose_list_1, app_constants_1;
    var DiagnoseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (diagnose_list_1_1) {
                diagnose_list_1 = diagnose_list_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            DiagnoseComponent = (function () {
                function DiagnoseComponent(routeSegment) {
                    this.iconClass = app_constants_1.ICON_CLASS;
                }
                DiagnoseComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit DiagnosesComponent");
                };
                DiagnoseComponent = __decorate([
                    core_1.Component({
                        selector: 'diagnoses',
                        templateUrl: 'app/components/diagnose/diagnose.html',
                        styleUrls: ['styles/diagnose.css'],
                        directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, diagnose_list_1.DiagnoseListComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteSegment])
                ], DiagnoseComponent);
                return DiagnoseComponent;
            }());
            exports_1("DiagnoseComponent", DiagnoseComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFNSSwyQkFBWSxZQUEwQjtvQkFGdEMsY0FBUyxHQUFXLDBCQUFVLENBQUM7Z0JBSS9CLENBQUM7Z0JBRUQsb0NBQVEsR0FBUjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBRS9DLENBQUM7Z0JBbkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSx1Q0FBdUM7d0JBQ3BELFNBQVMsRUFBRyxDQUFDLHFCQUFxQixDQUFDO3dCQUNuQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLHFDQUFxQixFQUFFLDBCQUFpQixDQUFDO3FCQUM3RixDQUFDOztxQ0FBQTtnQkFlRix3QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsaURBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlU2VnbWVudH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7RGlhZ25vc2VMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9kaWFnbm9zZS1saXN0XCJcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5cclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAnZGlhZ25vc2VzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLmh0bWwnLFxyXG4gIHN0eWxlVXJscyA6IFsnc3R5bGVzL2RpYWdub3NlLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIERpYWdub3NlTGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFnbm9zZUNvbXBvbmVudCB7XHJcbiAgICBpZDpzdHJpbmc7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Iocm91dGVTZWdtZW50OiBSb3V0ZVNlZ21lbnQpIHtcclxuICAgICAgICBcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdCBEaWFnbm9zZXNDb21wb25lbnRcIik7XHJcbiAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
