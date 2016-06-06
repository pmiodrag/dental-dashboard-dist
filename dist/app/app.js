System.register(['@angular/core', '@angular/common', '@angular/router', './components/patients/patients', './components/treatments/treatments', './components/diagnose/diagnose', './components/auth/auth.component', './components/dashboard/dashboard'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, patients_1, treatments_1, diagnose_1, auth_component_1, dashboard_1;
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
            function (auth_component_1_1) {
                auth_component_1 = auth_component_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    //  public appRoutes: RouteDefinition[];
                    this.mobileView = 992;
                    this.toggle = false;
                    this.attachEvents();
                    //    this.appRoutes = APP_ROUTES;
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
                        //    // these are our two routes
                        //    { path: '/', component: HomeComponent }, // , useAsDefault: true}, // coming soon
                        //    { path: '/about', component: AboutComponent }
                        { path: '/patients', component: patients_1.PatientsComponent },
                        //    { path: '/patient/:id/:firstname/:lastname/treatments', component: TreatmentsComponent },
                        { path: '/patient/:id/treatments', component: treatments_1.TreatmentsComponent },
                        { path: '/diagnoses', component: diagnose_1.DiagnoseComponent },
                        //    { path: '/patient/:id/treatments', component: TreatmentsComponent },
                        //     { path: '/treatments', component: TreatmentsComponent },
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

//# sourceMappingURL=data:application/json;base64,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REMsSUFBQTtZQWxERCx1Q0FrREMsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVzLCBSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlRGVmaW5pdGlvbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQge0FQUF9ST1VURVN9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCB7IFBhdGllbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnRzJztcclxuaW1wb3J0IHsgVHJlYXRtZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFnbm9zZS9kaWFnbm9zZSc7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGFzaGJvYXJkfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250YWluZXInLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIEF1dGhDb21wb25lbnQsIFBhdGllbnRzQ29tcG9uZW50LCBEYXNoYm9hcmRdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmh0bWwnIFxyXG59KVxyXG5cclxuLy9AUm91dGVDb25maWcoQVBQX1JPVVRFUylcclxuQFJvdXRlcyhbXHJcbi8vICAgIC8vIHRoZXNlIGFyZSBvdXIgdHdvIHJvdXRlc1xyXG4vLyAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sIC8vICwgdXNlQXNEZWZhdWx0OiB0cnVlfSwgLy8gY29taW5nIHNvb25cclxuLy8gICAgeyBwYXRoOiAnL2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9XHJcbiAgICAgeyBwYXRoOiAnL3BhdGllbnRzJywgIGNvbXBvbmVudDogUGF0aWVudHNDb21wb25lbnQgfSxcclxuLy8gICAgeyBwYXRoOiAnL3BhdGllbnQvOmlkLzpmaXJzdG5hbWUvOmxhc3RuYW1lL3RyZWF0bWVudHMnLCBjb21wb25lbnQ6IFRyZWF0bWVudHNDb21wb25lbnQgfSxcclxuICAgICB7IHBhdGg6ICcvcGF0aWVudC86aWQvdHJlYXRtZW50cycsIGNvbXBvbmVudDogVHJlYXRtZW50c0NvbXBvbmVudCB9LFxyXG4gICAgIHsgcGF0aDogJy9kaWFnbm9zZXMnLCAgY29tcG9uZW50OiBEaWFnbm9zZUNvbXBvbmVudCB9LFxyXG4vLyAgICB7IHBhdGg6ICcvcGF0aWVudC86aWQvdHJlYXRtZW50cycsIGNvbXBvbmVudDogVHJlYXRtZW50c0NvbXBvbmVudCB9LFxyXG4vLyAgICAgeyBwYXRoOiAnL3RyZWF0bWVudHMnLCBjb21wb25lbnQ6IFRyZWF0bWVudHNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9sb2dpbicsICBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcclxuICAgICB7cGF0aDogJy9kYXNoYm9hcmQnLCAgY29tcG9uZW50OiBEYXNoYm9hcmQgfSxcclxuICAgICAge3BhdGg6ICcvKicsICAgICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZCB9LFxyXG4gICAgICAge3BhdGg6ICcvJywgICAgICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZCB9LFxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuLy8gIHB1YmxpYyBhcHBSb3V0ZXM6IFJvdXRlRGVmaW5pdGlvbltdO1xyXG4gIG1vYmlsZVZpZXc6bnVtYmVyID0gOTkyO1xyXG4gIHRvZ2dsZTpib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvZmlsZTogc3RyaW5nO1xyXG4gIHBhY2llbnREaXNwbGF5TW9kZUVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgaWQ6c3RyaW5nO1xyXG4gIGZpcnN0bmFtZTpzdHJpbmc7XHJcbiAgbGFzdG5hbWU6c3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcclxuLy8gICAgdGhpcy5hcHBSb3V0ZXMgPSBBUFBfUk9VVEVTO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7ICAgXHJcbiAgICB0aGlzLnBhY2llbnREaXNwbGF5TW9kZUVuYWJsZWQgPSB0cnVlOyAgXHJcbiAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgYXBwJyk7XHJcbiAgfVxyXG4gIFxyXG4vLyAgcm91dGVyT25BY3RpdmF0ZShjdXJyOiBSb3V0ZVNlZ21lbnQpIHtcclxuLy8gICAgdGhpcy5pZCA9IGN1cnIuZ2V0UGFyYW0oJ2lkJyk7XHJcbi8vICAgIHRoaXMuZmlyc3RuYW1lID0gY3Vyci5nZXRQYXJhbSgnZmlyc3RuYW1lJyk7XHJcbi8vICAgIHRoaXMubGFzdG5hbWUgPSBjdXJyLmdldFBhcmFtKCdsYXN0bmFtZScpO1xyXG4vLyAgICBjb25zb2xlLmxvZyhcInJvdXRlck9uQWN0aXZhdGVcIiwgdGhpcy5maXJzdG5hbWUpO1xyXG4vLyAgfVxyXG5cclxuICBcclxuICBhdHRhY2hFdmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKT0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0V2lkdGgoKSA+PSB0aGlzLm1vYmlsZVZpZXcpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZScpKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSA9ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlJykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgdGhpcy50b2dnbGUgPSAhdGhpcy50b2dnbGU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9nZ2xlJywgdGhpcy50b2dnbGUudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
