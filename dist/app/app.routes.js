System.register(['@angular/router', './components/patients/patients', './components/treatments/treatments', './components/diagnose/diagnose', './components/doctors/doctors', './components/documents/documents', './components/agenda/agenda', './components/dashboard/dashboard', './components/gallery/gallery.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, patients_1, treatments_1, diagnose_1, doctors_1, documents_1, agenda_1, dashboard_1, gallery_routes_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
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
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (gallery_routes_1_1) {
                gallery_routes_1 = gallery_routes_1_1;
            }],
        execute: function() {
            routes = [
                ...gallery_routes_1.galleryRoutes,
                { path: 'patients', component: patients_1.PatientsComponent },
                //   { path: 'patient/:id/gallery',  component: GalleryComponent },
                { path: 'patient/:owner/:id/treatments', component: treatments_1.TreatmentsComponent },
                { path: 'doctor/:owner/:id/treatments', component: treatments_1.TreatmentsComponent },
                { path: 'diagnoses', component: diagnose_1.DiagnoseComponent },
                { path: 'doctors', component: doctors_1.DoctorsComponent },
                { path: 'documents', component: documents_1.DocumentsComponent },
                { path: 'agenda', component: agenda_1.AgendaComponent },
                //   { path: 'login',  component: AuthComponent },
                { path: 'dashboard', component: dashboard_1.Dashboard },
                { path: '*', component: dashboard_1.Dashboard },
                { path: '', component: dashboard_1.Dashboard }
            ];
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQWdCTSxNQUFNLEVBaUJDLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWpCM0IsTUFBTSxHQUFpQjtnQkFDekIsR0FBRyw4QkFBYTtnQkFDaEIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFHLFNBQVMsRUFBRSw0QkFBaUIsRUFBRTtnQkFDdkQsbUVBQW1FO2dCQUNoRSxFQUFFLElBQUksRUFBRSwrQkFBK0IsRUFBRSxTQUFTLEVBQUUsZ0NBQW1CLEVBQUU7Z0JBQ3pFLEVBQUUsSUFBSSxFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRSxnQ0FBbUIsRUFBRTtnQkFDeEUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFHLFNBQVMsRUFBRSw0QkFBaUIsRUFBRTtnQkFDcEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFHLFNBQVMsRUFBRSwwQkFBZ0IsRUFBRTtnQkFDakQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFHLFNBQVMsRUFBRSw4QkFBa0IsRUFBRTtnQkFDckQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRSx3QkFBZSxFQUFFO2dCQUNsRCxrREFBa0Q7Z0JBQy9DLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRyxTQUFTLEVBQUUscUJBQVMsRUFBRTtnQkFDNUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxxQkFBUyxFQUFFO2dCQUNuQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHFCQUFTLEVBQUU7YUFFcEMsQ0FBQztZQUVXLGtDQUFBLG9CQUFvQixHQUFHO2dCQUNsQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQzthQUN0QixDQUFBLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIsIFJvdXRlckNvbmZpZyB9ICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgUGF0aWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50cyc7XHJcbmltcG9ydCB7IERpYWdub3NlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlJztcclxuaW1wb3J0IHtEb2N0b3JzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzJztcclxuaW1wb3J0IHtEb2N1bWVudHNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzJztcclxuaW1wb3J0IHtBZ2VuZGFDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhJztcclxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50JztcclxuaW1wb3J0IHtEYXNoYm9hcmR9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnknO1xyXG5pbXBvcnQgeyBHYWxsZXJ5UHJldmlldyB9ICAgICBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LXByZXZpZXcnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5VXBsb2FkIH0gICBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LXVwbG9hZCc7XHJcbmltcG9ydCB7IGdhbGxlcnlSb3V0ZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LnJvdXRlcyc7XHJcbmNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xyXG4gICAgLi4uZ2FsbGVyeVJvdXRlcyxcclxuICAgIHsgcGF0aDogJ3BhdGllbnRzJywgIGNvbXBvbmVudDogUGF0aWVudHNDb21wb25lbnQgfSxcclxuLy8gICB7IHBhdGg6ICdwYXRpZW50LzppZC9nYWxsZXJ5JywgIGNvbXBvbmVudDogR2FsbGVyeUNvbXBvbmVudCB9LFxyXG4gICB7IHBhdGg6ICdwYXRpZW50Lzpvd25lci86aWQvdHJlYXRtZW50cycsIGNvbXBvbmVudDogVHJlYXRtZW50c0NvbXBvbmVudCB9LFxyXG4gICB7IHBhdGg6ICdkb2N0b3IvOm93bmVyLzppZC90cmVhdG1lbnRzJywgY29tcG9uZW50OiBUcmVhdG1lbnRzQ29tcG9uZW50IH0sXHJcbiAgIHsgcGF0aDogJ2RpYWdub3NlcycsICBjb21wb25lbnQ6IERpYWdub3NlQ29tcG9uZW50IH0sXHJcbiAgIHsgcGF0aDogJ2RvY3RvcnMnLCAgY29tcG9uZW50OiBEb2N0b3JzQ29tcG9uZW50IH0sXHJcbiAgIHsgcGF0aDogJ2RvY3VtZW50cycsICBjb21wb25lbnQ6IERvY3VtZW50c0NvbXBvbmVudCB9LFxyXG4gICB7IHBhdGg6ICdhZ2VuZGEnLCAgY29tcG9uZW50OiBBZ2VuZGFDb21wb25lbnQgfSxcclxuLy8gICB7IHBhdGg6ICdsb2dpbicsICBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcclxuICAgeyBwYXRoOiAnZGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkIH0sXHJcbiAgIHsgcGF0aDogJyonLCBjb21wb25lbnQ6IERhc2hib2FyZCB9LFxyXG4gICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IERhc2hib2FyZCB9XHJcbiAgXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUl9QUk9WSURFUlMgPSBbXHJcbiAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXHJcbl07XHJcblxyXG4gIFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
