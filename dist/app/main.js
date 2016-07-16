System.register(['@angular/platform-browser-dynamic', '@angular/core', "@angular/common", './app.routes', '@angular/http', 'angular2-jwt/angular2-jwt', './app', "ng2-material/index", './services/notificationService', './services/AuthService', './services/PatientBackendService', './components/state/PatientStore', './services/DoctorBackendService', './components/state/DoctorStore', './components/state/GalleryStore', './services/GalleryBackendService', './services/TreatmentBackendService', './services/DiagnoseBackendService', './components/state/TreatmentStore', './components/state/DiagnoseStore', './components/state/UiStateStore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, common_1, app_routes_1, http_1, angular2_jwt_1, app_1, index_1, notificationService_1, AuthService_1, PatientBackendService_1, PatientStore_1, DoctorBackendService_1, DoctorStore_1, GalleryStore_1, GalleryBackendService_1, TreatmentBackendService_1, DiagnoseBackendService_1, TreatmentStore_1, DiagnoseStore_1, UiStateStore_1;
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
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
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
            function (GalleryStore_1_1) {
                GalleryStore_1 = GalleryStore_1_1;
            },
            function (GalleryBackendService_1_1) {
                GalleryBackendService_1 = GalleryBackendService_1_1;
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
                //ROUTER_PROVIDERS,
                app_routes_1.APP_ROUTER_PROVIDERS,
                PatientStore_1.PatientStore,
                DoctorStore_1.DoctorStore,
                TreatmentStore_1.TreatmentStore,
                DiagnoseStore_1.DiagnoseStore,
                GalleryStore_1.GalleryStore,
                UiStateStore_1.UiStateStore,
                common_1.FORM_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                //    ELEMENT_PROBE_PROVIDERS,
                index_1.MATERIAL_PROVIDERS,
                AuthService_1.AuthService,
                notificationService_1.NotificationService,
                PatientBackendService_1.PatientBackendService,
                GalleryBackendService_1.GalleryBackendService,
                DoctorBackendService_1.DoctorBackendService,
                TreatmentBackendService_1.TreatmentBackendService,
                DiagnoseBackendService_1.DiagnoseBackendService,
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: (http) => {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig(), http);
                    },
                    deps: [http_1.Http]
                }),
                core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
                core_1.bind(common_1.LocationStrategy).toClass(common_1.PathLocationStrategy)
            ]).then(success => console.log('AppComponent bootstrapped!'), error => console.log('AppComponent NOT bootstrapped!', error));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQSxvQ0FBUyxDQUFDLGtCQUFZLEVBQUU7Z0JBQ3BCLG1CQUFtQjtnQkFDbkIsaUNBQW9CO2dCQUNwQiwyQkFBWTtnQkFDWix5QkFBVztnQkFDWCwrQkFBYztnQkFDZCw2QkFBYTtnQkFDYiwyQkFBWTtnQkFDWiwyQkFBWTtnQkFDWix1QkFBYztnQkFDZCxxQkFBYztnQkFDbEIsOEJBQThCO2dCQUMxQiwwQkFBa0I7Z0JBQ2xCLHlCQUFXO2dCQUNYLHlDQUFtQjtnQkFDbkIsNkNBQXFCO2dCQUNyQiw2Q0FBcUI7Z0JBQ3JCLDJDQUFvQjtnQkFDcEIsaURBQXVCO2dCQUN2QiwrQ0FBc0I7Z0JBQ3RCLGNBQU8sQ0FBQyx1QkFBUSxFQUFFO29CQUNoQixVQUFVLEVBQUUsQ0FBQyxJQUFJO3dCQUNmLE1BQU0sQ0FBQyxJQUFJLHVCQUFRLENBQUMsSUFBSSx5QkFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzlDLENBQUM7b0JBQ0QsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO2lCQUNiLENBQUM7Z0JBQ0QsY0FBTyxDQUFDLHNCQUFhLEVBQUUsRUFBQyxRQUFRLEVBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQzFDLFdBQUksQ0FBQyx5QkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBb0IsQ0FBQzthQUN2RCxDQUFDLENBQUMsSUFBSSxDQUNILE9BQU8sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQ3BELEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxDQUNoRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHsgYmluZCwgcHJvdmlkZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX1BST1ZJREVSUywgQVBQX0JBU0VfSFJFRiwgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG4vL2ltcG9ydCB7IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBUFBfUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbi8vaW1wb3J0IHtFTEVNRU5UX1BST0JFX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWd9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCB7TUFURVJJQUxfUFJPVklERVJTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXRpZW50U3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHsgRG9jdG9yQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0RvY3RvckJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9jdG9yU3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvRG9jdG9yU3RvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvR2FsbGVyeVN0b3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeUJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9HYWxsZXJ5QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvVHJlYXRtZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9EaWFnbm9zZUJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJlYXRtZW50U3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvVHJlYXRtZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZVN0b3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRlL0RpYWdub3NlU3RvcmUnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvVWlTdGF0ZVN0b3JlJztcclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgLy9ST1VURVJfUFJPVklERVJTLFxyXG4gICAgQVBQX1JPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBQYXRpZW50U3RvcmUsXHJcbiAgICBEb2N0b3JTdG9yZSxcclxuICAgIFRyZWF0bWVudFN0b3JlLFxyXG4gICAgRGlhZ25vc2VTdG9yZSxcclxuICAgIEdhbGxlcnlTdG9yZSxcclxuICAgIFVpU3RhdGVTdG9yZSxcclxuICAgIEZPUk1fUFJPVklERVJTLFxyXG4gICAgSFRUUF9QUk9WSURFUlMsXHJcbi8vICAgIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxyXG4gICAgTUFURVJJQUxfUFJPVklERVJTLFxyXG4gICAgQXV0aFNlcnZpY2UsXHJcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgUGF0aWVudEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgR2FsbGVyeUJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgRG9jdG9yQmFja2VuZFNlcnZpY2UsXHJcbiAgICBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSxcclxuICAgIERpYWdub3NlQmFja2VuZFNlcnZpY2UsXHJcbiAgICBwcm92aWRlKEF1dGhIdHRwLCB7XHJcbiAgICAgIHVzZUZhY3Rvcnk6IChodHRwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoSHR0cChuZXcgQXV0aENvbmZpZygpLCBodHRwKTtcclxuICAgICAgfSxcclxuICAgICAgZGVwczogW0h0dHBdXHJcbiAgICB9KSxcclxuICAgICBwcm92aWRlKEFQUF9CQVNFX0hSRUYsIHt1c2VWYWx1ZSA6ICcvJyB9KSxcclxuICAgIGJpbmQoTG9jYXRpb25TdHJhdGVneSkudG9DbGFzcyhQYXRoTG9jYXRpb25TdHJhdGVneSlcclxuXSkudGhlbihcclxuICAgIHN1Y2Nlc3MgPT4gY29uc29sZS5sb2coJ0FwcENvbXBvbmVudCBib290c3RyYXBwZWQhJyksXHJcbiAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50IE5PVCBib290c3RyYXBwZWQhJywgZXJyb3IpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
