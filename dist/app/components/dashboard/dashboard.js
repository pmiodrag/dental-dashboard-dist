System.register(['@angular/core', '@angular/router', '../state/DiagnoseStore', '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, router_1, DiagnoseStore_1, app_constants_1;
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
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard(diagnoseStore) {
                    this.diagnoseStore = diagnoseStore;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    console.log("this._diagnoses", diagnoseStore.diagnosesSubject);
                    //      let diagnoses = diagnoseStore.diagnosesSubject.getValue();
                    //      console.log("diagnoses", diagnoses.size)
                }
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/components/dashboard/dashboard.html',
                        styleUrls: ['styles/dashboard.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [DiagnoseStore_1.DiagnoseStore])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUlJLG1CQUFvQixhQUE0QjtvQkFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBRmhELGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUc1QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUN0RSxrRUFBa0U7b0JBQ2xFLGdEQUFnRDtnQkFDNUMsQ0FBQztnQkFkTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDbkMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2hDLENBQUM7OzZCQUFBO2dCQVVGLGdCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFURCxpQ0FTQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERpYWdub3NlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9EaWFnbm9zZVN0b3JlJztcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydzdHlsZXMvZGFzaGJvYXJkLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCB7XHJcbiAgICBkaWFnbm9zZXNTaXplIDogbnVtYmVyIDtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFnbm9zZVN0b3JlOiBEaWFnbm9zZVN0b3JlKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuX2RpYWdub3Nlc1wiLCBkaWFnbm9zZVN0b3JlLmRpYWdub3Nlc1N1YmplY3QpO1xyXG4vLyAgICAgIGxldCBkaWFnbm9zZXMgPSBkaWFnbm9zZVN0b3JlLmRpYWdub3Nlc1N1YmplY3QuZ2V0VmFsdWUoKTtcclxuLy8gICAgICBjb25zb2xlLmxvZyhcImRpYWdub3Nlc1wiLCBkaWFnbm9zZXMuc2l6ZSlcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
