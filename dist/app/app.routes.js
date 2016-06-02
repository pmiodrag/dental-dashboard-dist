System.register(['./components/patients/patients', './components/treatments/treatments', './components/auth/auth.component', './components/dashboard/dashboard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var patients_1, treatments_1, auth_component_1, dashboard_1;
    var APP_ROUTES;
    return {
        setters:[
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
            exports_1("APP_ROUTES", APP_ROUTES = [
                { path: '/patients', name: 'Patients', component: patients_1.PatientsComponent },
                { path: '/patient/:id/:firstname/:lastname/treatments', name: 'Treatments', component: treatments_1.TreatmentsComponent },
                { path: '/patient/:id/treatments', name: 'TreatmentList', component: treatments_1.TreatmentsComponent },
                { path: '/login', name: 'Auth', component: auth_component_1.AuthComponent },
                { path: '/dashboard', component: dashboard_1.Dashboard, name: 'Dashboard', useAsDefault: true }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU1XLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBVix3QkFBQSxVQUFVLEdBQXNCO2dCQUN2QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNEJBQWlCLEVBQUU7Z0JBQ3JFLEVBQUUsSUFBSSxFQUFFLDhDQUE4QyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGdDQUFtQixFQUFFO2dCQUM1RyxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQ0FBbUIsRUFBRTtnQkFDMUYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Z0JBQ3pELEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRyxTQUFTLEVBQUUscUJBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7YUFDdkYsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlRGVmaW5pdGlvbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHsgUGF0aWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMnO1xuaW1wb3J0IHsgVHJlYXRtZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMnO1xuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7RGFzaGJvYXJkfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XG5cbmV4cG9ydCB2YXIgQVBQX1JPVVRFUzogUm91dGVEZWZpbml0aW9uW10gPSBbXG4gICAgeyBwYXRoOiAnL3BhdGllbnRzJywgbmFtZTogJ1BhdGllbnRzJywgY29tcG9uZW50OiBQYXRpZW50c0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9wYXRpZW50LzppZC86Zmlyc3RuYW1lLzpsYXN0bmFtZS90cmVhdG1lbnRzJywgbmFtZTogJ1RyZWF0bWVudHMnLCBjb21wb25lbnQ6IFRyZWF0bWVudHNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvcGF0aWVudC86aWQvdHJlYXRtZW50cycsIG5hbWU6ICdUcmVhdG1lbnRMaXN0JywgY29tcG9uZW50OiBUcmVhdG1lbnRzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2xvZ2luJywgbmFtZTogJ0F1dGgnLCBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQgfSxcbiAgICAge3BhdGg6ICcvZGFzaGJvYXJkJywgIGNvbXBvbmVudDogRGFzaGJvYXJkLCBuYW1lOiAnRGFzaGJvYXJkJywgdXNlQXNEZWZhdWx0OiB0cnVlIH1cbl07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
