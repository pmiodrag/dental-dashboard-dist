/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
System.register(['@angular/platform-browser-dynamic', '@angular/core', "@angular/common", '@angular/router', '@angular/http', '@angular/platform-browser', 'angular2-jwt/angular2-jwt', './app', "ng2-material/index", './services/notificationService', './services/PatientBackendService', './components/state/PatientStore', './services/TreatmentBackendService', './components/state/TreatmentStore', './components/state/UiStateStore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, common_1, router_1, http_1, platform_browser_1, angular2_jwt_1, app_1, index_1, notificationService_1, PatientBackendService_1, PatientStore_1, TreatmentBackendService_1, TreatmentStore_1, UiStateStore_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            },
            function (PatientBackendService_1_1) {
                PatientBackendService_1 = PatientBackendService_1_1;
            },
            function (PatientStore_1_1) {
                PatientStore_1 = PatientStore_1_1;
            },
            function (TreatmentBackendService_1_1) {
                TreatmentBackendService_1 = TreatmentBackendService_1_1;
            },
            function (TreatmentStore_1_1) {
                TreatmentStore_1 = TreatmentStore_1_1;
            },
            function (UiStateStore_1_1) {
                UiStateStore_1 = UiStateStore_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                //    ROUTER_BINDINGS,
                PatientStore_1.PatientStore,
                TreatmentStore_1.TreatmentStore,
                UiStateStore_1.UiStateStore,
                common_1.FORM_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                platform_browser_1.ELEMENT_PROBE_PROVIDERS,
                index_1.MATERIAL_PROVIDERS,
                notificationService_1.NotificationService,
                //    PatientService,
                PatientBackendService_1.PatientBackendService,
                TreatmentBackendService_1.TreatmentBackendService,
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (http) {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig(), http);
                    },
                    deps: [http_1.Http]
                }),
                core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.bind(common_1.LocationStrategy).toClass(common_1.PathLocationStrategy)
            ]).then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log('AppComponent NOT bootstrapped!', error); });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCNUUsb0NBQVMsQ0FBQyxrQkFBWSxFQUFFO2dCQUNwQix5QkFBZ0I7Z0JBQ3BCLHNCQUFzQjtnQkFDbEIsMkJBQVk7Z0JBQ1osK0JBQWM7Z0JBQ2QsMkJBQVk7Z0JBQ1osdUJBQWM7Z0JBQ2QscUJBQWM7Z0JBQ2QsMENBQXVCO2dCQUN2QiwwQkFBa0I7Z0JBQ2xCLHlDQUFtQjtnQkFDdkIscUJBQXFCO2dCQUNqQiw2Q0FBcUI7Z0JBQ3JCLGlEQUF1QjtnQkFDdkIsY0FBTyxDQUFDLHVCQUFRLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxVQUFDLElBQUk7d0JBQ2YsTUFBTSxDQUFDLElBQUksdUJBQVEsQ0FBQyxJQUFJLHlCQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7aUJBQ2IsQ0FBQztnQkFDRCxjQUFPLENBQUMsc0JBQWEsRUFBRSxFQUFDLFFBQVEsRUFBRyxHQUFHLEVBQUUsQ0FBQztnQkFDMUMsV0FBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUFvQixDQUFDO2FBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQXpDLENBQXlDLEVBQ3BELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsRUFBcEQsQ0FBb0QsQ0FDaEUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHsgYmluZCwgcHJvdmlkZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX1BST1ZJREVSUywgQVBQX0JBU0VfSFJFRiwgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtFTEVNRU5UX1BST0JFX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWd9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCB7TUFURVJJQUxfUFJPVklERVJTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuLy9pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcGF0aWVudFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXRpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IFBhdGllbnRTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvVHJlYXRtZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9UcmVhdG1lbnRTdG9yZSc7XHJcbmltcG9ydCB7IFVpU3RhdGVTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXHJcbiAgICBST1VURVJfUFJPVklERVJTLFxyXG4vLyAgICBST1VURVJfQklORElOR1MsXHJcbiAgICBQYXRpZW50U3RvcmUsXHJcbiAgICBUcmVhdG1lbnRTdG9yZSxcclxuICAgIFVpU3RhdGVTdG9yZSxcclxuICAgIEZPUk1fUFJPVklERVJTLFxyXG4gICAgSFRUUF9QUk9WSURFUlMsXHJcbiAgICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcclxuICAgIE1BVEVSSUFMX1BST1ZJREVSUyxcclxuICAgIE5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbi8vICAgIFBhdGllbnRTZXJ2aWNlLFxyXG4gICAgUGF0aWVudEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgVHJlYXRtZW50QmFja2VuZFNlcnZpY2UsXHJcbiAgICBwcm92aWRlKEF1dGhIdHRwLCB7XHJcbiAgICAgIHVzZUZhY3Rvcnk6IChodHRwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoSHR0cChuZXcgQXV0aENvbmZpZygpLCBodHRwKTtcclxuICAgICAgfSxcclxuICAgICAgZGVwczogW0h0dHBdXHJcbiAgICB9KSxcclxuICAgICBwcm92aWRlKEFQUF9CQVNFX0hSRUYsIHt1c2VWYWx1ZSA6ICcvJyB9KSxcclxuICAgIGJpbmQoTG9jYXRpb25TdHJhdGVneSkudG9DbGFzcyhQYXRoTG9jYXRpb25TdHJhdGVneSlcclxuXSkudGhlbihcclxuICAgIHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coJ0FwcENvbXBvbmVudCBib290c3RyYXBwZWQhJyksXHJcbiAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50IE5PVCBib290c3RyYXBwZWQhJywgZXJyb3IpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
