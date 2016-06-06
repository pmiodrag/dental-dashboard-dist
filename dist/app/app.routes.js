System.register(['./components/patients/patients', './components/treatments/treatments', './components/diagnose/diagnose', './components/auth/auth.component', './components/dashboard/dashboard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var patients_1, treatments_1, diagnose_1, auth_component_1, dashboard_1;
    var APP_ROUTES;
    return {
        setters:[
            function (patients_1_1) {
                patients_1 = patients_1_1;
            },
            function (treatments_1_1) {
                treatments_1 = treatments_1_1;
            },
            function (diagnose_1_1) {
                diagnose_1 = diagnose_1_1;
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
                { path: '/diagnoses', name: 'Diagnoses', component: diagnose_1.DiagnoseComponent },
                { path: '/login', name: 'Auth', component: auth_component_1.AuthComponent },
                { path: '/dashboard', component: dashboard_1.Dashboard, name: 'Dashboard', useAsDefault: true }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU9XLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBVix3QkFBQSxVQUFVLEdBQXNCO2dCQUN2QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsNEJBQWlCLEVBQUU7Z0JBQ3JFLEVBQUUsSUFBSSxFQUFFLDhDQUE4QyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGdDQUFtQixFQUFFO2dCQUM1RyxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQ0FBbUIsRUFBRTtnQkFDMUYsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDRCQUFpQixFQUFFO2dCQUN2RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtnQkFDekQsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFHLFNBQVMsRUFBRSxxQkFBUyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTthQUN2RixDQUFBLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVEZWZpbml0aW9ufSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7IFBhdGllbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnRzJztcclxuaW1wb3J0IHsgVHJlYXRtZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFnbm9zZS9kaWFnbm9zZSc7XHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGFzaGJvYXJkfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZCc7XHJcblxyXG5leHBvcnQgdmFyIEFQUF9ST1VURVM6IFJvdXRlRGVmaW5pdGlvbltdID0gW1xyXG4gICAgeyBwYXRoOiAnL3BhdGllbnRzJywgbmFtZTogJ1BhdGllbnRzJywgY29tcG9uZW50OiBQYXRpZW50c0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL3BhdGllbnQvOmlkLzpmaXJzdG5hbWUvOmxhc3RuYW1lL3RyZWF0bWVudHMnLCBuYW1lOiAnVHJlYXRtZW50cycsIGNvbXBvbmVudDogVHJlYXRtZW50c0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL3BhdGllbnQvOmlkL3RyZWF0bWVudHMnLCBuYW1lOiAnVHJlYXRtZW50TGlzdCcsIGNvbXBvbmVudDogVHJlYXRtZW50c0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2RpYWdub3NlcycsIG5hbWU6ICdEaWFnbm9zZXMnLCBjb21wb25lbnQ6IERpYWdub3NlQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvbG9naW4nLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aENvbXBvbmVudCB9LFxyXG4gICAgIHtwYXRoOiAnL2Rhc2hib2FyZCcsICBjb21wb25lbnQ6IERhc2hib2FyZCwgbmFtZTogJ0Rhc2hib2FyZCcsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
