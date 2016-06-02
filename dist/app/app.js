System.register(['@angular/core', '@angular/common', '@angular/router', './components/patients/patients', './components/treatments/treatments', './components/auth/auth.component', './components/dashboard/dashboard'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, patients_1, treatments_1, auth_component_1, dashboard_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStCQTtnQkFTRTtvQkFSRix3Q0FBd0M7b0JBQ3RDLGVBQVUsR0FBVSxHQUFHLENBQUM7b0JBQ3hCLFdBQU0sR0FBVyxLQUFLLENBQUM7b0JBT3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDeEIsa0NBQWtDO2dCQUNoQyxDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFSCwwQ0FBMEM7Z0JBQzFDLG9DQUFvQztnQkFDcEMsa0RBQWtEO2dCQUNsRCxnREFBZ0Q7Z0JBQ2hELHNEQUFzRDtnQkFDdEQsS0FBSztnQkFHSCxtQ0FBWSxHQUFaO29CQUFBLGlCQVlDO29CQVhDLE1BQU0sQ0FBQyxRQUFRLEdBQUc7d0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDdkMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ25DLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7NEJBQy9ELENBQUM7NEJBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ04sS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ3JCLENBQUM7d0JBQ0gsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsQ0FBQztvQkFDSCxDQUFDLENBQUE7Z0JBQ0gsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELG9DQUFhLEdBQWI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzNCLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFyRUg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsd0JBQWUsRUFBRSw4QkFBYSxFQUFFLDRCQUFpQixFQUFFLHFCQUFTLENBQUM7d0JBQzdGLFdBQVcsRUFBRSxjQUFjO3FCQUM5QixDQUFDO29CQUdELGVBQU0sQ0FBQzt3QkFDUixpQ0FBaUM7d0JBQ2pDLHVGQUF1Rjt3QkFDdkYsbURBQW1EO3dCQUM5QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUcsU0FBUyxFQUFFLDRCQUFpQixFQUFFO3dCQUN6RCwrRkFBK0Y7d0JBQzFGLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLFNBQVMsRUFBRSxnQ0FBbUIsRUFBRTt3QkFDeEUsMEVBQTBFO3dCQUMxRSwrREFBK0Q7d0JBQzNELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRyxTQUFTLEVBQUUsOEJBQWEsRUFBRTt3QkFDNUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFHLFNBQVMsRUFBRSxxQkFBUyxFQUFFO3dCQUMzQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQVksU0FBUyxFQUFFLHFCQUFTLEVBQUU7d0JBQzVDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBYSxTQUFTLEVBQUUscUJBQVMsRUFBRTtxQkFDbkQsQ0FBQzs7Z0NBQUE7Z0JBbURGLG1CQUFDO1lBQUQsQ0FsREEsQUFrREMsSUFBQTtZQWxERCx1Q0FrREMsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVzLCBSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vaW1wb3J0IHsgUm91dGVDb25maWcsIFJvdXRlRGVmaW5pdGlvbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5pbXBvcnQge0FQUF9ST1VURVN9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCB7IFBhdGllbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnRzJztcclxuaW1wb3J0IHsgVHJlYXRtZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMnO1xyXG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Rhc2hib2FyZH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuQENvbXBvbmVudCh7IFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGFpbmVyJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBBdXRoQ29tcG9uZW50LCBQYXRpZW50c0NvbXBvbmVudCwgRGFzaGJvYXJkXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2FwcC5odG1sJyBcclxufSlcclxuXHJcbi8vQFJvdXRlQ29uZmlnKEFQUF9ST1VURVMpXHJcbkBSb3V0ZXMoW1xyXG4vLyAgICAvLyB0aGVzZSBhcmUgb3VyIHR3byByb3V0ZXNcclxuLy8gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LCAvLyAsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sIC8vIGNvbWluZyBzb29uXHJcbi8vICAgIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfVxyXG4gICAgIHsgcGF0aDogJy9wYXRpZW50cycsICBjb21wb25lbnQ6IFBhdGllbnRzQ29tcG9uZW50IH0sXHJcbi8vICAgIHsgcGF0aDogJy9wYXRpZW50LzppZC86Zmlyc3RuYW1lLzpsYXN0bmFtZS90cmVhdG1lbnRzJywgY29tcG9uZW50OiBUcmVhdG1lbnRzQ29tcG9uZW50IH0sXHJcbiAgICAgeyBwYXRoOiAnL3BhdGllbnQvOmlkL3RyZWF0bWVudHMnLCBjb21wb25lbnQ6IFRyZWF0bWVudHNDb21wb25lbnQgfSxcclxuLy8gICAgeyBwYXRoOiAnL3BhdGllbnQvOmlkL3RyZWF0bWVudHMnLCBjb21wb25lbnQ6IFRyZWF0bWVudHNDb21wb25lbnQgfSxcclxuLy8gICAgIHsgcGF0aDogJy90cmVhdG1lbnRzJywgY29tcG9uZW50OiBUcmVhdG1lbnRzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvbG9naW4nLCAgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXHJcbiAgICAge3BhdGg6ICcvZGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbiAgICAgIHtwYXRoOiAnLyonLCAgICAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmQgfSxcclxuICAgICAgIHtwYXRoOiAnLycsICAgICAgICAgICAgY29tcG9uZW50OiBEYXNoYm9hcmQgfSxcclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbi8vICBwdWJsaWMgYXBwUm91dGVzOiBSb3V0ZURlZmluaXRpb25bXTtcclxuICBtb2JpbGVWaWV3Om51bWJlciA9IDk5MjtcclxuICB0b2dnbGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb2ZpbGU6IHN0cmluZztcclxuICBwYWNpZW50RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG4gIGlkOnN0cmluZztcclxuICBmaXJzdG5hbWU6c3RyaW5nO1xyXG4gIGxhc3RuYW1lOnN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcbi8vICAgIHRoaXMuYXBwUm91dGVzID0gQVBQX1JPVVRFUztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgIFxyXG4gICAgdGhpcy5wYWNpZW50RGlzcGxheU1vZGVFbmFibGVkID0gdHJ1ZTsgIFxyXG4gICAgY29uc29sZS5sb2coJ25nT25Jbml0IGFwcCcpO1xyXG4gIH1cclxuICBcclxuLy8gIHJvdXRlck9uQWN0aXZhdGUoY3VycjogUm91dGVTZWdtZW50KSB7XHJcbi8vICAgIHRoaXMuaWQgPSBjdXJyLmdldFBhcmFtKCdpZCcpO1xyXG4vLyAgICB0aGlzLmZpcnN0bmFtZSA9IGN1cnIuZ2V0UGFyYW0oJ2ZpcnN0bmFtZScpO1xyXG4vLyAgICB0aGlzLmxhc3RuYW1lID0gY3Vyci5nZXRQYXJhbSgnbGFzdG5hbWUnKTtcclxuLy8gICAgY29uc29sZS5sb2coXCJyb3V0ZXJPbkFjdGl2YXRlXCIsIHRoaXMuZmlyc3RuYW1lKTtcclxuLy8gIH1cclxuXHJcbiAgXHJcbiAgYXR0YWNoRXZlbnRzKCkge1xyXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCk9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldFdpZHRoKCkgPj0gdGhpcy5tb2JpbGVWaWV3KSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2dnbGUnKSkge1xyXG4gICAgICAgICAgdGhpcy50b2dnbGUgPSAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZScpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2lkZWJhcigpIHtcclxuICAgIHRoaXMudG9nZ2xlID0gIXRoaXMudG9nZ2xlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZ2dsZScsIHRoaXMudG9nZ2xlLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
