System.register(['@angular/core', '@angular/common', '@angular/router', './components/patients/patients', './components/auth/auth.component', './components/dashboard/dashboard'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, patients_1, auth_component_1, dashboard_1;
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
            function (auth_component_1_1) {
                auth_component_1 = auth_component_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.mobileView = 992;
                    this.toggle = false;
                    this.attachEvents();
                }
                ngOnInit() {
                    this.pacientDisplayModeEnabled = true;
                    console.log('ngOnInit app');
                }
                //  routerOnActivate(curr: RouteSegment) {
                //    this.id = curr.getParam('id');
                //    this.firstname = curr.getParam('firstname');
                //    this.lastname = curr.getParam('lastname');
                //    console.log("routerOnActivate", this.firstname);
                //  }
                attachEvents() {
                    window.onresize = () => {
                        if (this.getWidth() >= this.mobileView) {
                            if (localStorage.getItem('toggle')) {
                                this.toggle = !localStorage.getItem('toggle') ? false : true;
                            }
                            else {
                                this.toggle = true;
                            }
                        }
                        else {
                            this.toggle = false;
                        }
                    };
                }
                getWidth() {
                    return window.innerWidth;
                }
                toggleSidebar() {
                    this.toggle = !this.toggle;
                    localStorage.setItem('toggle', this.toggle.toString());
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app-container',
                    directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, auth_component_1.AuthComponent, patients_1.PatientsComponent, dashboard_1.Dashboard],
                    templateUrl: 'app/app.html'
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFRRTtvQkFQQSxlQUFVLEdBQVUsR0FBRyxDQUFDO29CQUN4QixXQUFNLEdBQVcsS0FBSyxDQUFDO29CQU9yQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsUUFBUTtvQkFDTixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO29CQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVILDBDQUEwQztnQkFDMUMsb0NBQW9DO2dCQUNwQyxrREFBa0Q7Z0JBQ2xELGdEQUFnRDtnQkFDaEQsc0RBQXNEO2dCQUN0RCxLQUFLO2dCQUdILFlBQVk7b0JBQ1YsTUFBTSxDQUFDLFFBQVEsR0FBRzt3QkFDaEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDL0QsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDckIsQ0FBQzt3QkFDSCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixDQUFDO29CQUNILENBQUMsQ0FBQTtnQkFDSCxDQUFDO2dCQUVELFFBQVE7b0JBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsYUFBYTtvQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDM0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO1lBRUgsQ0FBQztZQXBFRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx3QkFBZSxFQUFFLDhCQUFhLEVBQUUsNEJBQWlCLEVBQUUscUJBQVMsQ0FBQztvQkFDN0YsV0FBVyxFQUFFLGNBQWM7aUJBQzlCLENBQUM7OzRCQUFBO1lBZ0JGLHVDQWdEQyxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50cyc7XHJcbmltcG9ydCB7IERpYWdub3NlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlJztcclxuaW1wb3J0IHtEb2N0b3JzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzJztcclxuaW1wb3J0IHtEb2N1bWVudHNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzJztcclxuaW1wb3J0IHtBZ2VuZGFDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhJztcclxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50JztcclxuaW1wb3J0IHtEYXNoYm9hcmR9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnknO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtNRF9TSURFTkFWX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9zaWRlbmF2JztcclxuQENvbXBvbmVudCh7IFxyXG4gICAgc2VsZWN0b3I6ICdhcHAtY29udGFpbmVyJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBBdXRoQ29tcG9uZW50LCBQYXRpZW50c0NvbXBvbmVudCwgRGFzaGJvYXJkXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2FwcC5odG1sJyBcclxufSlcclxuXHJcbi8vQFJvdXRlcyhbXHJcbi8vICAgIHsgcGF0aDogJy9wYXRpZW50cycsICBjb21wb25lbnQ6IFBhdGllbnRzQ29tcG9uZW50IH0sXHJcbi8vICAgIHsgcGF0aDogJy9wYXRpZW50LzppZC9nYWxsZXJ5JywgIGNvbXBvbmVudDogR2FsbGVyeUNvbXBvbmVudCB9LFxyXG4vLyAgICB7IHBhdGg6ICcvcGF0aWVudC86b3duZXIvOmlkL3RyZWF0bWVudHMnLCBjb21wb25lbnQ6IFRyZWF0bWVudHNDb21wb25lbnQgfSxcclxuLy8gICAgeyBwYXRoOiAnL2RvY3Rvci86b3duZXIvOmlkL3RyZWF0bWVudHMnLCBjb21wb25lbnQ6IFRyZWF0bWVudHNDb21wb25lbnQgfSxcclxuLy8gICAgeyBwYXRoOiAnL2RpYWdub3NlcycsICBjb21wb25lbnQ6IERpYWdub3NlQ29tcG9uZW50IH0sXHJcbi8vICAgIHsgcGF0aDogJy9kb2N0b3JzJywgIGNvbXBvbmVudDogRG9jdG9yc0NvbXBvbmVudCB9LFxyXG4vLyAgICB7IHBhdGg6ICcvZG9jdW1lbnRzJywgIGNvbXBvbmVudDogRG9jdW1lbnRzQ29tcG9uZW50IH0sXHJcbi8vICAgIHsgcGF0aDogJy9hZ2VuZGEnLCAgY29tcG9uZW50OiBBZ2VuZGFDb21wb25lbnQgfSxcclxuLy8gICAgeyBwYXRoOiAnL2xvZ2luJywgIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxyXG4vLyAgICB7IHBhdGg6ICcvZGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbi8vICAgIHsgcGF0aDogJy8qJywgY29tcG9uZW50OiBEYXNoYm9hcmQgfSxcclxuLy8gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbi8vXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgbW9iaWxlVmlldzpudW1iZXIgPSA5OTI7XHJcbiAgdG9nZ2xlOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm9maWxlOiBzdHJpbmc7XHJcbiAgcGFjaWVudERpc3BsYXlNb2RlRW5hYmxlZDogYm9vbGVhbjtcclxuICBpZDpzdHJpbmc7XHJcbiAgZmlyc3RuYW1lOnN0cmluZztcclxuICBsYXN0bmFtZTpzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7ICAgXHJcbiAgICB0aGlzLnBhY2llbnREaXNwbGF5TW9kZUVuYWJsZWQgPSB0cnVlOyAgXHJcbiAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgYXBwJyk7XHJcbiAgfVxyXG4gIFxyXG4vLyAgcm91dGVyT25BY3RpdmF0ZShjdXJyOiBSb3V0ZVNlZ21lbnQpIHtcclxuLy8gICAgdGhpcy5pZCA9IGN1cnIuZ2V0UGFyYW0oJ2lkJyk7XHJcbi8vICAgIHRoaXMuZmlyc3RuYW1lID0gY3Vyci5nZXRQYXJhbSgnZmlyc3RuYW1lJyk7XHJcbi8vICAgIHRoaXMubGFzdG5hbWUgPSBjdXJyLmdldFBhcmFtKCdsYXN0bmFtZScpO1xyXG4vLyAgICBjb25zb2xlLmxvZyhcInJvdXRlck9uQWN0aXZhdGVcIiwgdGhpcy5maXJzdG5hbWUpO1xyXG4vLyAgfVxyXG5cclxuICBcclxuICBhdHRhY2hFdmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKT0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0V2lkdGgoKSA+PSB0aGlzLm1vYmlsZVZpZXcpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZScpKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSA9ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlJykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgdGhpcy50b2dnbGUgPSAhdGhpcy50b2dnbGU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9nZ2xlJywgdGhpcy50b2dnbGUudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
