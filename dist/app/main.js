/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
System.register(['@angular/platform-browser-dynamic', '@angular/core', "@angular/common", '@angular/router', '@angular/http', '@angular/platform-browser', 'angular2-jwt/angular2-jwt', './app', "ng2-material/index", './services/notificationService', './services/PatientBackendService', './components/state/PatientStore', './services/TreatmentBackendService', './services/DiagnoseBackendService', './components/state/TreatmentStore', './components/state/DiagnoseStore', './components/state/UiStateStore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, common_1, router_1, http_1, platform_browser_1, angular2_jwt_1, app_1, index_1, notificationService_1, PatientBackendService_1, PatientStore_1, TreatmentBackendService_1, DiagnoseBackendService_1, TreatmentStore_1, DiagnoseStore_1, UiStateStore_1;
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
            function (DiagnoseBackendService_1_1) {
                DiagnoseBackendService_1 = DiagnoseBackendService_1_1;
            },
            function (TreatmentStore_1_1) {
                TreatmentStore_1 = TreatmentStore_1_1;
            },
            function (DiagnoseStore_1_1) {
                DiagnoseStore_1 = DiagnoseStore_1_1;
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
                DiagnoseStore_1.DiagnoseStore,
                UiStateStore_1.UiStateStore,
                common_1.FORM_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                platform_browser_1.ELEMENT_PROBE_PROVIDERS,
                index_1.MATERIAL_PROVIDERS,
                notificationService_1.NotificationService,
                //    PatientService,
                PatientBackendService_1.PatientBackendService,
                TreatmentBackendService_1.TreatmentBackendService,
                DiagnoseBackendService_1.DiagnoseBackendService,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CNUUsb0NBQVMsQ0FBQyxrQkFBWSxFQUFFO2dCQUNwQix5QkFBZ0I7Z0JBQ3BCLHNCQUFzQjtnQkFDbEIsMkJBQVk7Z0JBQ1osK0JBQWM7Z0JBQ2QsNkJBQWE7Z0JBQ2IsMkJBQVk7Z0JBQ1osdUJBQWM7Z0JBQ2QscUJBQWM7Z0JBQ2QsMENBQXVCO2dCQUN2QiwwQkFBa0I7Z0JBQ2xCLHlDQUFtQjtnQkFDdkIscUJBQXFCO2dCQUNqQiw2Q0FBcUI7Z0JBQ3JCLGlEQUF1QjtnQkFDdkIsK0NBQXNCO2dCQUN0QixjQUFPLENBQUMsdUJBQVEsRUFBRTtvQkFDaEIsVUFBVSxFQUFFLFVBQUMsSUFBSTt3QkFDZixNQUFNLENBQUMsSUFBSSx1QkFBUSxDQUFDLElBQUkseUJBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM5QyxDQUFDO29CQUNELElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQztpQkFDYixDQUFDO2dCQUNELGNBQU8sQ0FBQyxzQkFBYSxFQUFFLEVBQUMsUUFBUSxFQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUMxQyxXQUFJLENBQUMseUJBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQW9CLENBQUM7YUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsRUFBekMsQ0FBeUMsRUFDcEQsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxFQUFwRCxDQUFvRCxDQUNoRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5pbXBvcnQgeyBiaW5kLCBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fUFJPVklERVJTLCBBUFBfQkFTRV9IUkVGLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0VMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHtBdXRoSHR0cCwgQXV0aENvbmZpZ30gZnJvbSAnYW5ndWxhcjItand0L2FuZ3VsYXIyLWp3dCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwJztcclxuaW1wb3J0IHtNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wYXRpZW50U2VydmljZSc7XHJcbmltcG9ydCB7IFBhdGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRlL1BhdGllbnRTdG9yZSc7XHJcbmltcG9ydCB7IFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9UcmVhdG1lbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IERpYWdub3NlQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0RpYWdub3NlQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9UcmVhdG1lbnRTdG9yZSc7XHJcbmltcG9ydCB7IERpYWdub3NlU3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvRGlhZ25vc2VTdG9yZSc7XHJcbmltcG9ydCB7IFVpU3RhdGVTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXHJcbiAgICBST1VURVJfUFJPVklERVJTLFxyXG4vLyAgICBST1VURVJfQklORElOR1MsXHJcbiAgICBQYXRpZW50U3RvcmUsXHJcbiAgICBUcmVhdG1lbnRTdG9yZSxcclxuICAgIERpYWdub3NlU3RvcmUsXHJcbiAgICBVaVN0YXRlU3RvcmUsXHJcbiAgICBGT1JNX1BST1ZJREVSUyxcclxuICAgIEhUVFBfUFJPVklERVJTLFxyXG4gICAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXHJcbiAgICBNQVRFUklBTF9QUk9WSURFUlMsXHJcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4vLyAgICBQYXRpZW50U2VydmljZSxcclxuICAgIFBhdGllbnRCYWNrZW5kU2VydmljZSxcclxuICAgIFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgRGlhZ25vc2VCYWNrZW5kU2VydmljZSxcclxuICAgIHByb3ZpZGUoQXV0aEh0dHAsIHtcclxuICAgICAgdXNlRmFjdG9yeTogKGh0dHApID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dGhIdHRwKG5ldyBBdXRoQ29uZmlnKCksIGh0dHApO1xyXG4gICAgICB9LFxyXG4gICAgICBkZXBzOiBbSHR0cF1cclxuICAgIH0pLFxyXG4gICAgIHByb3ZpZGUoQVBQX0JBU0VfSFJFRiwge3VzZVZhbHVlIDogJy8nIH0pLFxyXG4gICAgYmluZChMb2NhdGlvblN0cmF0ZWd5KS50b0NsYXNzKFBhdGhMb2NhdGlvblN0cmF0ZWd5KVxyXG5dKS50aGVuKFxyXG4gICAgc3VjY2VzcyA9PiBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50IGJvb3RzdHJhcHBlZCEnKSxcclxuICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdBcHBDb21wb25lbnQgTk9UIGJvb3RzdHJhcHBlZCEnLCBlcnJvcilcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
