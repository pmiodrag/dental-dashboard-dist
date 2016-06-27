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
                router_1.Routes([
                    { path: '/patients', component: patients_1.PatientsComponent },
                    { path: '/patient/: owner/:id/treatments', component: treatments_1.TreatmentsComponent },
                    { path: '/diagnoses', component: diagnose_1.DiagnoseComponent },
                    { path: '/doctors', component: doctors_1.DoctorsComponent },
                    { path: '/doctor/:owner/:id/treatments', component: treatments_1.TreatmentsComponent },
                    { path: '/documents', component: documents_1.DocumentsComponent },
                    { path: '/agenda', component: agenda_1.AgendaComponent },
                    { path: '/login', component: auth_component_1.AuthComponent },
                    { path: '/dashboard', component: dashboard_1.Dashboard },
                    { path: '/*', component: dashboard_1.Dashboard },
                    { path: '/', component: dashboard_1.Dashboard },
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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SUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUscUJBQVMsRUFBRTtpQkFDdEMsQ0FBQzs7NEJBQUE7WUFDRix1Q0FnREMsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVzLCBSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhdGllbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnRzJztcclxuaW1wb3J0IHsgVHJlYXRtZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFnbm9zZS9kaWFnbm9zZSc7XHJcbmltcG9ydCB7RG9jdG9yc0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2RvY3RvcnMvZG9jdG9ycyc7XHJcbmltcG9ydCB7RG9jdW1lbnRzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZG9jdW1lbnRzL2RvY3VtZW50cyc7XHJcbmltcG9ydCB7QWdlbmRhQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYWdlbmRhL2FnZW5kYSc7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGFzaGJvYXJkfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge01EX1NJREVOQVZfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3NpZGVuYXYnO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jb250YWluZXInLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIEF1dGhDb21wb25lbnQsIFBhdGllbnRzQ29tcG9uZW50LCBEYXNoYm9hcmRdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmh0bWwnIFxyXG59KVxyXG5cclxuQFJvdXRlcyhbXHJcbiAgICB7IHBhdGg6ICcvcGF0aWVudHMnLCAgY29tcG9uZW50OiBQYXRpZW50c0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL3BhdGllbnQvOiBvd25lci86aWQvdHJlYXRtZW50cycsIGNvbXBvbmVudDogVHJlYXRtZW50c0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2RpYWdub3NlcycsICBjb21wb25lbnQ6IERpYWdub3NlQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvZG9jdG9ycycsICBjb21wb25lbnQ6IERvY3RvcnNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9kb2N0b3IvOm93bmVyLzppZC90cmVhdG1lbnRzJywgY29tcG9uZW50OiBUcmVhdG1lbnRzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvZG9jdW1lbnRzJywgIGNvbXBvbmVudDogRG9jdW1lbnRzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvYWdlbmRhJywgIGNvbXBvbmVudDogQWdlbmRhQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvbG9naW4nLCAgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvZGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbiAgICB7IHBhdGg6ICcvKicsIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBEYXNoYm9hcmQgfSxcclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgbW9iaWxlVmlldzpudW1iZXIgPSA5OTI7XHJcbiAgdG9nZ2xlOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm9maWxlOiBzdHJpbmc7XHJcbiAgcGFjaWVudERpc3BsYXlNb2RlRW5hYmxlZDogYm9vbGVhbjtcclxuICBpZDpzdHJpbmc7XHJcbiAgZmlyc3RuYW1lOnN0cmluZztcclxuICBsYXN0bmFtZTpzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7ICAgXHJcbiAgICB0aGlzLnBhY2llbnREaXNwbGF5TW9kZUVuYWJsZWQgPSB0cnVlOyAgXHJcbiAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgYXBwJyk7XHJcbiAgfVxyXG4gIFxyXG4vLyAgcm91dGVyT25BY3RpdmF0ZShjdXJyOiBSb3V0ZVNlZ21lbnQpIHtcclxuLy8gICAgdGhpcy5pZCA9IGN1cnIuZ2V0UGFyYW0oJ2lkJyk7XHJcbi8vICAgIHRoaXMuZmlyc3RuYW1lID0gY3Vyci5nZXRQYXJhbSgnZmlyc3RuYW1lJyk7XHJcbi8vICAgIHRoaXMubGFzdG5hbWUgPSBjdXJyLmdldFBhcmFtKCdsYXN0bmFtZScpO1xyXG4vLyAgICBjb25zb2xlLmxvZyhcInJvdXRlck9uQWN0aXZhdGVcIiwgdGhpcy5maXJzdG5hbWUpO1xyXG4vLyAgfVxyXG5cclxuICBcclxuICBhdHRhY2hFdmVudHMoKSB7XHJcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKT0+IHtcclxuICAgICAgaWYgKHRoaXMuZ2V0V2lkdGgoKSA+PSB0aGlzLm1vYmlsZVZpZXcpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZ2dsZScpKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZSA9ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9nZ2xlJykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaWRlYmFyKCkge1xyXG4gICAgdGhpcy50b2dnbGUgPSAhdGhpcy50b2dnbGU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9nZ2xlJywgdGhpcy50b2dnbGUudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
