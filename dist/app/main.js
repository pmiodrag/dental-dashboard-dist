/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
System.register(['@angular/platform-browser-dynamic', '@angular/core', "@angular/common", '@angular/router', '@angular/http', '@angular/platform-browser', 'angular2-jwt/angular2-jwt', './app', "ng2-material/index", './services/notificationService', './services/PatientBackendService', './components/state/PatientStore', './services/DoctorBackendService', './components/state/DoctorStore', './services/TreatmentBackendService', './services/DiagnoseBackendService', './components/state/TreatmentStore', './components/state/DiagnoseStore', './components/state/UiStateStore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, common_1, router_1, http_1, platform_browser_1, angular2_jwt_1, app_1, index_1, notificationService_1, PatientBackendService_1, PatientStore_1, DoctorBackendService_1, DoctorStore_1, TreatmentBackendService_1, DiagnoseBackendService_1, TreatmentStore_1, DiagnoseStore_1, UiStateStore_1;
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
            function (DoctorBackendService_1_1) {
                DoctorBackendService_1 = DoctorBackendService_1_1;
            },
            function (DoctorStore_1_1) {
                DoctorStore_1 = DoctorStore_1_1;
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
                DoctorStore_1.DoctorStore,
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
                DoctorBackendService_1.DoctorBackendService,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCNUUsb0NBQVMsQ0FBQyxrQkFBWSxFQUFFO2dCQUNwQix5QkFBZ0I7Z0JBQ3BCLHNCQUFzQjtnQkFDbEIsMkJBQVk7Z0JBQ1oseUJBQVc7Z0JBQ1gsK0JBQWM7Z0JBQ2QsNkJBQWE7Z0JBQ2IsMkJBQVk7Z0JBQ1osdUJBQWM7Z0JBQ2QscUJBQWM7Z0JBQ2QsMENBQXVCO2dCQUN2QiwwQkFBa0I7Z0JBQ2xCLHlDQUFtQjtnQkFDdkIscUJBQXFCO2dCQUNqQiw2Q0FBcUI7Z0JBQ3JCLDJDQUFvQjtnQkFDcEIsaURBQXVCO2dCQUN2QiwrQ0FBc0I7Z0JBQ3RCLGNBQU8sQ0FBQyx1QkFBUSxFQUFFO29CQUNoQixVQUFVLEVBQUUsVUFBQyxJQUFJO3dCQUNmLE1BQU0sQ0FBQyxJQUFJLHVCQUFRLENBQUMsSUFBSSx5QkFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzlDLENBQUM7b0JBQ0QsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO2lCQUNiLENBQUM7Z0JBQ0QsY0FBTyxDQUFDLHNCQUFhLEVBQUUsRUFBQyxRQUFRLEVBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQzFDLFdBQUksQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBb0IsQ0FBQzthQUN2RCxDQUFDLENBQUMsSUFBSSxDQUNILFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxFQUF6QyxDQUF5QyxFQUNwRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLEVBQXBELENBQW9ELENBQ2hFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7IGJpbmQsIHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRk9STV9QUk9WSURFUlMsIEFQUF9CQVNFX0hSRUYsIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7RUxFTUVOVF9QUk9CRV9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0F1dGhIdHRwLCBBdXRoQ29uZmlnfSBmcm9tICdhbmd1bGFyMi1qd3QvYW5ndWxhcjItand0JztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQge01BVEVSSUFMX1BST1ZJREVSU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbi8vaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3BhdGllbnRTZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXRpZW50U3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHsgRG9jdG9yQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0RvY3RvckJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9jdG9yU3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvRG9jdG9yU3RvcmUnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvVHJlYXRtZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9EaWFnbm9zZUJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJlYXRtZW50U3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvVHJlYXRtZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZVN0b3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRlL0RpYWdub3NlU3RvcmUnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvVWlTdGF0ZVN0b3JlJztcclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcclxuLy8gICAgUk9VVEVSX0JJTkRJTkdTLFxyXG4gICAgUGF0aWVudFN0b3JlLFxyXG4gICAgRG9jdG9yU3RvcmUsXHJcbiAgICBUcmVhdG1lbnRTdG9yZSxcclxuICAgIERpYWdub3NlU3RvcmUsXHJcbiAgICBVaVN0YXRlU3RvcmUsXHJcbiAgICBGT1JNX1BST1ZJREVSUyxcclxuICAgIEhUVFBfUFJPVklERVJTLFxyXG4gICAgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlMsXHJcbiAgICBNQVRFUklBTF9QUk9WSURFUlMsXHJcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4vLyAgICBQYXRpZW50U2VydmljZSxcclxuICAgIFBhdGllbnRCYWNrZW5kU2VydmljZSxcclxuICAgIERvY3RvckJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgVHJlYXRtZW50QmFja2VuZFNlcnZpY2UsXHJcbiAgICBEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgcHJvdmlkZShBdXRoSHR0cCwge1xyXG4gICAgICB1c2VGYWN0b3J5OiAoaHR0cCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXV0aEh0dHAobmV3IEF1dGhDb25maWcoKSwgaHR0cCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGRlcHM6IFtIdHRwXVxyXG4gICAgfSksXHJcbiAgICAgcHJvdmlkZShBUFBfQkFTRV9IUkVGLCB7dXNlVmFsdWUgOiAnLycgfSksXHJcbiAgICBiaW5kKExvY2F0aW9uU3RyYXRlZ3kpLnRvQ2xhc3MoUGF0aExvY2F0aW9uU3RyYXRlZ3kpXHJcbl0pLnRoZW4oXHJcbiAgICBzdWNjZXNzID0+IGNvbnNvbGUubG9nKCdBcHBDb21wb25lbnQgYm9vdHN0cmFwcGVkIScpLFxyXG4gICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0FwcENvbXBvbmVudCBOT1QgYm9vdHN0cmFwcGVkIScsIGVycm9yKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
