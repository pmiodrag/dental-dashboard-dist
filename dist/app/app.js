System.register(['@angular/core', '@angular/common', '@angular/router', './components/patients/patients', './components/treatments/treatments', './components/diagnose/diagnose', './components/doctors/doctors', './components/documents/documents', './components/agenda/agenda', './components/auth/auth.component', './components/dashboard/dashboard'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, patients_1, treatments_1, diagnose_1, doctors_1, documents_1, agenda_1, auth_component_1, dashboard_1;
    var AppComponent;
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
            function (patients_1_1) {
                patients_1 = patients_1_1;
            },
            function (treatments_1_1) {
                treatments_1 = treatments_1_1;
            },
            function (diagnose_1_1) {
                diagnose_1 = diagnose_1_1;
            },
            function (doctors_1_1) {
                doctors_1 = doctors_1_1;
            },
            function (documents_1_1) {
                documents_1 = documents_1_1;
            },
            function (agenda_1_1) {
                agenda_1 = agenda_1_1;
            },
            function (auth_component_1_1) {
                auth_component_1 = auth_component_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.mobileView = 992;
                    this.toggle = false;
                    this.attachEvents();
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.pacientDisplayModeEnabled = true;
                    console.log('ngOnInit app');
                };
                //  routerOnActivate(curr: RouteSegment) {
                //    this.id = curr.getParam('id');
                //    this.firstname = curr.getParam('firstname');
                //    this.lastname = curr.getParam('lastname');
                //    console.log("routerOnActivate", this.firstname);
                //  }
                AppComponent.prototype.attachEvents = function () {
                    var _this = this;
                    window.onresize = function () {
                        if (_this.getWidth() >= _this.mobileView) {
                            if (localStorage.getItem('toggle')) {
                                _this.toggle = !localStorage.getItem('toggle') ? false : true;
                            }
                            else {
                                _this.toggle = true;
                            }
                        }
                        else {
                            _this.toggle = false;
                        }
                    };
                };
                AppComponent.prototype.getWidth = function () {
                    return window.innerWidth;
                };
                AppComponent.prototype.toggleSidebar = function () {
                    this.toggle = !this.toggle;
                    localStorage.setItem('toggle', this.toggle.toString());
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-container',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, auth_component_1.AuthComponent, patients_1.PatientsComponent, dashboard_1.Dashboard],
                        templateUrl: 'app/app.html'
                    }),
                    router_1.Routes([
                        { path: '/patients', component: patients_1.PatientsComponent },
                        { path: '/patient/:id/treatments', component: treatments_1.TreatmentsComponent },
                        { path: '/diagnoses', component: diagnose_1.DiagnoseComponent },
                        { path: '/doctors', component: doctors_1.DoctorsComponent },
                        { path: '/documents', component: documents_1.DocumentsComponent },
                        { path: '/agenda', component: agenda_1.AgendaComponent },
                        { path: '/login', component: auth_component_1.AuthComponent },
                        { path: '/dashboard', component: dashboard_1.Dashboard },
                        { path: '/*', component: dashboard_1.Dashboard },
                        { path: '/', component: dashboard_1.Dashboard },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThCQTtnQkFRRTtvQkFQQSxlQUFVLEdBQVUsR0FBRyxDQUFDO29CQUN4QixXQUFNLEdBQVcsS0FBSyxDQUFDO29CQU9yQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO29CQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVILDBDQUEwQztnQkFDMUMsb0NBQW9DO2dCQUNwQyxrREFBa0Q7Z0JBQ2xELGdEQUFnRDtnQkFDaEQsc0RBQXNEO2dCQUN0RCxLQUFLO2dCQUdILG1DQUFZLEdBQVo7b0JBQUEsaUJBWUM7b0JBWEMsTUFBTSxDQUFDLFFBQVEsR0FBRzt3QkFDaEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDL0QsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDTixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDckIsQ0FBQzt3QkFDSCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixDQUFDO29CQUNILENBQUMsQ0FBQTtnQkFDSCxDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsb0NBQWEsR0FBYjtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDM0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQWhFSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx3QkFBZSxFQUFFLDhCQUFhLEVBQUUsNEJBQWlCLEVBQUUscUJBQVMsQ0FBQzt3QkFDN0YsV0FBVyxFQUFFLGNBQWM7cUJBQzlCLENBQUM7b0JBRUQsZUFBTSxDQUFDO3dCQUNKLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRyxTQUFTLEVBQUUsNEJBQWlCLEVBQUU7d0JBQ3BELEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLFNBQVMsRUFBRSxnQ0FBbUIsRUFBRTt3QkFDbkUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFHLFNBQVMsRUFBRSw0QkFBaUIsRUFBRTt3QkFDckQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFHLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRTt3QkFDbEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFHLFNBQVMsRUFBRSw4QkFBa0IsRUFBRTt3QkFDdEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFHLFNBQVMsRUFBRSx3QkFBZSxFQUFFO3dCQUNoRCxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUcsU0FBUyxFQUFFLDhCQUFhLEVBQUU7d0JBQzdDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRyxTQUFTLEVBQUUscUJBQVMsRUFBRTt3QkFDN0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxxQkFBUyxFQUFFO3dCQUNwQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHFCQUFTLEVBQUU7cUJBQ3RDLENBQUM7O2dDQUFBO2dCQWlERixtQkFBQztZQUFELENBaERBLEFBZ0RDLElBQUE7WUFoREQsdUNBZ0RDLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcywgUm91dGVTZWdtZW50fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXRpZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cyc7XHJcbmltcG9ydCB7IFRyZWF0bWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnRzJztcclxuaW1wb3J0IHsgRGlhZ25vc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UnO1xyXG5pbXBvcnQge0RvY3RvcnNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kb2N0b3JzL2RvY3RvcnMnO1xyXG5pbXBvcnQge0RvY3VtZW50c0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RvY3VtZW50cy9kb2N1bWVudHMnO1xyXG5pbXBvcnQge0FnZW5kYUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEnO1xyXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Rhc2hib2FyZH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuQENvbXBvbmVudCh7IFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGFpbmVyJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBBdXRoQ29tcG9uZW50LCBQYXRpZW50c0NvbXBvbmVudCwgRGFzaGJvYXJkXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2FwcC5odG1sJyBcclxufSlcclxuXHJcbkBSb3V0ZXMoW1xyXG4gICAgeyBwYXRoOiAnL3BhdGllbnRzJywgIGNvbXBvbmVudDogUGF0aWVudHNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9wYXRpZW50LzppZC90cmVhdG1lbnRzJywgY29tcG9uZW50OiBUcmVhdG1lbnRzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvZGlhZ25vc2VzJywgIGNvbXBvbmVudDogRGlhZ25vc2VDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9kb2N0b3JzJywgIGNvbXBvbmVudDogRG9jdG9yc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2RvY3VtZW50cycsICBjb21wb25lbnQ6IERvY3VtZW50c0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2FnZW5kYScsICBjb21wb25lbnQ6IEFnZW5kYUNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2xvZ2luJywgIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2Rhc2hib2FyZCcsICBjb21wb25lbnQ6IERhc2hib2FyZCB9LFxyXG4gICAgeyBwYXRoOiAnLyonLCBjb21wb25lbnQ6IERhc2hib2FyZCB9LFxyXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIG1vYmlsZVZpZXc6bnVtYmVyID0gOTkyO1xyXG4gIHRvZ2dsZTpib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvZmlsZTogc3RyaW5nO1xyXG4gIHBhY2llbnREaXNwbGF5TW9kZUVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgaWQ6c3RyaW5nO1xyXG4gIGZpcnN0bmFtZTpzdHJpbmc7XHJcbiAgbGFzdG5hbWU6c3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgIFxyXG4gICAgdGhpcy5wYWNpZW50RGlzcGxheU1vZGVFbmFibGVkID0gdHJ1ZTsgIFxyXG4gICAgY29uc29sZS5sb2coJ25nT25Jbml0IGFwcCcpO1xyXG4gIH1cclxuICBcclxuLy8gIHJvdXRlck9uQWN0aXZhdGUoY3VycjogUm91dGVTZWdtZW50KSB7XHJcbi8vICAgIHRoaXMuaWQgPSBjdXJyLmdldFBhcmFtKCdpZCcpO1xyXG4vLyAgICB0aGlzLmZpcnN0bmFtZSA9IGN1cnIuZ2V0UGFyYW0oJ2ZpcnN0bmFtZScpO1xyXG4vLyAgICB0aGlzLmxhc3RuYW1lID0gY3Vyci5nZXRQYXJhbSgnbGFzdG5hbWUnKTtcclxuLy8gICAgY29uc29sZS5sb2coXCJyb3V0ZXJPbkFjdGl2YXRlXCIsIHRoaXMuZmlyc3RuYW1lKTtcclxuLy8gIH1cclxuXHJcbiAgXHJcbiAgYXR0YWNoRXZlbnRzKCkge1xyXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCk9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldFdpZHRoKCkgPj0gdGhpcy5tb2JpbGVWaWV3KSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2dnbGUnKSkge1xyXG4gICAgICAgICAgdGhpcy50b2dnbGUgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZScpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgIHRoaXMudG9nZ2xlID0gIXRoaXMudG9nZ2xlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZ2dsZScsIHRoaXMudG9nZ2xlLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
