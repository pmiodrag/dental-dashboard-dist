System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", "./diagnose-list", "./diagnose-form"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, index_1, diagnose_list_1, diagnose_form_1;
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
            function (diagnose_form_1_1) {
                diagnose_form_1 = diagnose_form_1_1;
            }],
        execute: function() {
            DiagnoseComponent = (function () {
                function DiagnoseComponent(routeSegment) {
                    this.id = routeSegment.getParam('id');
                    console.log("DiagnosesComponent routerOnActivate id", this.id);
                }
                DiagnoseComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit DiagnosesComponent");
                };
                DiagnoseComponent = __decorate([
                    core_1.Component({
                        selector: 'diagnoses',
                        templateUrl: 'app/components/diagnose/diagnose.html',
                        styleUrls: ['styles/selectable_usage.css'],
                        directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, diagnose_list_1.DiagnoseListComponent, diagnose_form_1.DiagnoseFormComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteSegment])
                ], DiagnoseComponent);
                return DiagnoseComponent;
            }());
            exports_1("DiagnoseComponent", DiagnoseComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBTUksMkJBQVksWUFBMEI7b0JBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ25FLENBQUM7Z0JBRUQsb0NBQVEsR0FBUjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBRS9DLENBQUM7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSx1Q0FBdUM7d0JBQ3BELFNBQVMsRUFBRyxDQUFDLDZCQUE2QixDQUFDO3dCQUMzQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLHFDQUFxQixFQUFFLHFDQUFxQixFQUFFLDBCQUFpQixDQUFDO3FCQUNwSCxDQUFDOztxQ0FBQTtnQkFnQkYsd0JBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELGlEQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kaWFnbm9zZS9kaWFnbm9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vaW1wb3J0IHsgUm91dGVyTGluaywgUm91dGVQYXJhbXMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG4vL2ltcG9ydCB7IERpYWdub3NlU2VydmljZSwgRGlhZ25vc2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kaWFnbm9zZVNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGF0aWVudFNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG4vL2ltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtEaWFnbm9zZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL2RpYWdub3NlLWxpc3RcIlxyXG5pbXBvcnQge0RpYWdub3NlRm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vZGlhZ25vc2UtZm9ybVwiXHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ2RpYWdub3NlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kaWFnbm9zZS9kaWFnbm9zZS5odG1sJyxcclxuICBzdHlsZVVybHMgOiBbJ3N0eWxlcy9zZWxlY3RhYmxlX3VzYWdlLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIERpYWdub3NlTGlzdENvbXBvbmVudCwgRGlhZ25vc2VGb3JtQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdub3NlQ29tcG9uZW50IHtcclxuICBpZDpzdHJpbmc7XHJcbiAgbmFtZTpzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246c3RyaW5nO1xyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Iocm91dGVTZWdtZW50OiBSb3V0ZVNlZ21lbnQpIHtcclxuICAgICAgICB0aGlzLmlkID0gcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhZ25vc2VzQ29tcG9uZW50IHJvdXRlck9uQWN0aXZhdGUgaWRcIiwgdGhpcy5pZCk7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXQgRGlhZ25vc2VzQ29tcG9uZW50XCIpO1xyXG4gICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
