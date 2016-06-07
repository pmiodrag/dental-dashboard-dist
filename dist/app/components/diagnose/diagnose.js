System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", "./diagnose-list"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, index_1, diagnose_list_1;
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
            }],
        execute: function() {
            //import {DiagnoseListComponent} from "./diagnose-header"
            //import {DiagnoseFormComponent} from "./diagnose-form"
            DiagnoseComponent = (function () {
                function DiagnoseComponent(routeSegment) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQSx5REFBeUQ7WUFDekQsdURBQXVEO1lBT3ZEO2dCQU1JLDJCQUFZLFlBQTBCO2dCQUV0QyxDQUFDO2dCQUVELG9DQUFRLEdBQVI7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQW5CTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsdUNBQXVDO3dCQUNwRCxTQUFTLEVBQUcsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDbkMsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwyQkFBbUIsRUFBRSxxQ0FBcUIsRUFBRSwwQkFBaUIsQ0FBQztxQkFDN0YsQ0FBQzs7cUNBQUE7Z0JBZUYsd0JBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELGlEQWNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kaWFnbm9zZS9kaWFnbm9zZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vaW1wb3J0IHsgUm91dGVyTGluaywgUm91dGVQYXJhbXMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG4vL2ltcG9ydCB7IERpYWdub3NlU2VydmljZSwgRGlhZ25vc2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kaWFnbm9zZVNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGF0aWVudFNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG4vL2ltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtEaWFnbm9zZUxpc3RDb21wb25lbnR9IGZyb20gXCIuL2RpYWdub3NlLWxpc3RcIlxyXG4vL2ltcG9ydCB7RGlhZ25vc2VMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi9kaWFnbm9zZS1oZWFkZXJcIlxyXG4vL2ltcG9ydCB7RGlhZ25vc2VGb3JtQ29tcG9uZW50fSBmcm9tIFwiLi9kaWFnbm9zZS1mb3JtXCJcclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAnZGlhZ25vc2VzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLmh0bWwnLFxyXG4gIHN0eWxlVXJscyA6IFsnc3R5bGVzL2RpYWdub3NlLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIERpYWdub3NlTGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFnbm9zZUNvbXBvbmVudCB7XHJcbiAgICBpZDpzdHJpbmc7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlU2VnbWVudDogUm91dGVTZWdtZW50KSB7XHJcbiAgICAgICAgXHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXQgRGlhZ25vc2VzQ29tcG9uZW50XCIpO1xyXG4gICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
