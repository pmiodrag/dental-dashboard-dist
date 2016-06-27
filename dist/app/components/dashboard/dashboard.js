System.register(['@angular/core', '@angular/router', '../state/DiagnoseStore', '../state/PatientStore', '../../shared/constants/app.constants', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, router_1, DiagnoseStore_1, PatientStore_1, app_constants_1, AuthService_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (DiagnoseStore_1_1) {
                DiagnoseStore_1 = DiagnoseStore_1_1;
            },
            function (PatientStore_1_1) {
                PatientStore_1 = PatientStore_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            let Dashboard = class Dashboard {
                constructor(authService, diagnoseStore, patientStore) {
                    this.authService = authService;
                    this.diagnoseStore = diagnoseStore;
                    this.patientStore = patientStore;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    console.log("authService.isAdmin()", authService.isAdmin());
                }
            };
            Dashboard = __decorate([
                core_1.Component({
                    selector: 'dashboard',
                    templateUrl: 'app/components/dashboard/dashboard.html',
                    styleUrls: ['styles/dashboard.css'],
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService, DiagnoseStore_1.DiagnoseStore, PatientStore_1.PatientStore])
            ], Dashboard);
            exports_1("Dashboard", Dashboard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUlJLFlBQW1CLFdBQXdCLEVBQVUsYUFBNEIsRUFBVSxZQUEwQjtvQkFBbEcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBRnJILGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUc1QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO1lBQ0wsQ0FBQztZQWJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFdBQVcsRUFBRSx5Q0FBeUM7b0JBQ3RELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUNuQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztpQkFDaEMsQ0FBQzs7eUJBQUE7WUFDRixpQ0FPQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERpYWdub3NlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9EaWFnbm9zZVN0b3JlJztcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3R5bGVzL2Rhc2hib2FyZC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQge1xyXG4gICAgZGlhZ25vc2VzU2l6ZSA6IG51bWJlciA7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgZGlhZ25vc2VTdG9yZTogRGlhZ25vc2VTdG9yZSwgcHJpdmF0ZSBwYXRpZW50U3RvcmU6IFBhdGllbnRTdG9yZSkge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJhdXRoU2VydmljZS5pc0FkbWluKClcIiwgYXV0aFNlcnZpY2UuaXNBZG1pbigpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
