System.register(['@angular/platform-browser-dynamic', '@angular/core', "@angular/common", './app.routes', '@angular/http', 'angular2-jwt/angular2-jwt', './app', "ng2-material/index", './services/notificationService', './services/AuthService', './services/PatientBackendService', './components/state/PatientStore', './services/DoctorBackendService', './components/state/DoctorStore', './components/state/GalleryStore', './services/GalleryBackendService', './services/TreatmentBackendService', './services/AgendaBackendService', './services/DiagnoseBackendService', './components/state/TreatmentStore', './components/state/DiagnoseStore', './components/state/AgendaStore', './components/state/UiStateStore'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, core_1, common_1, app_routes_1, http_1, angular2_jwt_1, app_1, index_1, notificationService_1, AuthService_1, PatientBackendService_1, PatientStore_1, DoctorBackendService_1, DoctorStore_1, GalleryStore_1, GalleryBackendService_1, TreatmentBackendService_1, AgendaBackendService_1, DiagnoseBackendService_1, TreatmentStore_1, DiagnoseStore_1, AgendaStore_1, UiStateStore_1;
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
            function (AgendaBackendService_1_1) {
                AgendaBackendService_1 = AgendaBackendService_1_1;
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
            function (AgendaStore_1_1) {
                AgendaStore_1 = AgendaStore_1_1;
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
                AgendaStore_1.AgendaStore,
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
                AgendaBackendService_1.AgendaBackendService,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQSxvQ0FBUyxDQUFDLGtCQUFZLEVBQUU7Z0JBQ3BCLG1CQUFtQjtnQkFDbkIsaUNBQW9CO2dCQUNwQiwyQkFBWTtnQkFDWix5QkFBVztnQkFDWCwrQkFBYztnQkFDZCw2QkFBYTtnQkFDYiwyQkFBWTtnQkFDWix5QkFBVztnQkFDWCwyQkFBWTtnQkFDWix1QkFBYztnQkFDZCxxQkFBYztnQkFDbEIsOEJBQThCO2dCQUMxQiwwQkFBa0I7Z0JBQ2xCLHlCQUFXO2dCQUNYLHlDQUFtQjtnQkFDbkIsNkNBQXFCO2dCQUNyQiw2Q0FBcUI7Z0JBQ3JCLDJDQUFvQjtnQkFDcEIsaURBQXVCO2dCQUN2QiwrQ0FBc0I7Z0JBQ3RCLDJDQUFvQjtnQkFDcEIsY0FBTyxDQUFDLHVCQUFRLEVBQUU7b0JBQ2hCLFVBQVUsRUFBRSxDQUFDLElBQUk7d0JBQ2YsTUFBTSxDQUFDLElBQUksdUJBQVEsQ0FBQyxJQUFJLHlCQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUMsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7aUJBQ2IsQ0FBQztnQkFDRCxjQUFPLENBQUMsc0JBQWEsRUFBRSxFQUFDLFFBQVEsRUFBRyxHQUFHLEVBQUUsQ0FBQztnQkFDMUMsV0FBSSxDQUFDLHlCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUFvQixDQUFDO2FBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQ0gsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsRUFDcEQsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQ2hFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSAgICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5pbXBvcnQgeyBiaW5kLCBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fUFJPVklERVJTLCBBUFBfQkFTRV9IUkVGLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbi8vaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFQUF9ST1VURVJfUFJPVklERVJTIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuLy9pbXBvcnQge0VMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHtBdXRoSHR0cCwgQXV0aENvbmZpZ30gZnJvbSAnYW5ndWxhcjItand0L2FuZ3VsYXIyLWp3dCc7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwJztcclxuaW1wb3J0IHtNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvQXV0aFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXRpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IFBhdGllbnRTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBEb2N0b3JCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvRG9jdG9yQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEb2N0b3JTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9Eb2N0b3JTdG9yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9HYWxsZXJ5U3RvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0dhbGxlcnlCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9UcmVhdG1lbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IEFnZW5kYUJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9BZ2VuZGFCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IERpYWdub3NlQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0RpYWdub3NlQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTdG9yZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0ZS9UcmVhdG1lbnRTdG9yZSc7XHJcbmltcG9ydCB7IERpYWdub3NlU3RvcmUgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGUvRGlhZ25vc2VTdG9yZSc7XHJcbmltcG9ydCB7IEFnZW5kYVN0b3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRlL0FnZW5kYVN0b3JlJztcclxuaW1wb3J0IHsgVWlTdGF0ZVN0b3JlIH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXRlL1VpU3RhdGVTdG9yZSc7XHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcclxuICAgIC8vUk9VVEVSX1BST1ZJREVSUyxcclxuICAgIEFQUF9ST1VURVJfUFJPVklERVJTLFxyXG4gICAgUGF0aWVudFN0b3JlLFxyXG4gICAgRG9jdG9yU3RvcmUsXHJcbiAgICBUcmVhdG1lbnRTdG9yZSxcclxuICAgIERpYWdub3NlU3RvcmUsXHJcbiAgICBHYWxsZXJ5U3RvcmUsXHJcbiAgICBBZ2VuZGFTdG9yZSxcclxuICAgIFVpU3RhdGVTdG9yZSxcclxuICAgIEZPUk1fUFJPVklERVJTLFxyXG4gICAgSFRUUF9QUk9WSURFUlMsXHJcbi8vICAgIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxyXG4gICAgTUFURVJJQUxfUFJPVklERVJTLFxyXG4gICAgQXV0aFNlcnZpY2UsXHJcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgUGF0aWVudEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgR2FsbGVyeUJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgRG9jdG9yQmFja2VuZFNlcnZpY2UsXHJcbiAgICBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSxcclxuICAgIERpYWdub3NlQmFja2VuZFNlcnZpY2UsXHJcbiAgICBBZ2VuZGFCYWNrZW5kU2VydmljZSxcclxuICAgIHByb3ZpZGUoQXV0aEh0dHAsIHtcclxuICAgICAgdXNlRmFjdG9yeTogKGh0dHApID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dGhIdHRwKG5ldyBBdXRoQ29uZmlnKCksIGh0dHApO1xyXG4gICAgICB9LFxyXG4gICAgICBkZXBzOiBbSHR0cF1cclxuICAgIH0pLFxyXG4gICAgIHByb3ZpZGUoQVBQX0JBU0VfSFJFRiwge3VzZVZhbHVlIDogJy8nIH0pLFxyXG4gICAgYmluZChMb2NhdGlvblN0cmF0ZWd5KS50b0NsYXNzKFBhdGhMb2NhdGlvblN0cmF0ZWd5KVxyXG5dKS50aGVuKFxyXG4gICAgc3VjY2VzcyA9PiBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50IGJvb3RzdHJhcHBlZCEnKSxcclxuICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdBcHBDb21wb25lbnQgTk9UIGJvb3RzdHJhcHBlZCEnLCBlcnJvcilcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
