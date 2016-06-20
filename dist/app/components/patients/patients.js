System.register(['@angular/core', '@angular/common', '@angular/router', './filterTextbox.component', '../../shared/directives/sortby.directive', '../../shared/pipes/capitalize.pipe', '../../shared/pipes/trim.pipe', "ng2-material/index", './patient-form', './patient-list', './patient-header', '../../services/notificationService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, index_1, patient_form_1, patient_list_1, patient_header_1, notificationService_1;
    var PatientsComponent;
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
            function (filterTextbox_component_1_1) {
                filterTextbox_component_1 = filterTextbox_component_1_1;
            },
            function (sortby_directive_1_1) {
                sortby_directive_1 = sortby_directive_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (trim_pipe_1_1) {
                trim_pipe_1 = trim_pipe_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (patient_form_1_1) {
                patient_form_1 = patient_form_1_1;
            },
            function (patient_list_1_1) {
                patient_list_1 = patient_list_1_1;
            },
            function (patient_header_1_1) {
                patient_header_1 = patient_header_1_1;
            },
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            }],
        execute: function() {
            PatientsComponent = (function () {
                // @Output() openForm = new EventEmitter<string>();
                // formAction : string;
                function PatientsComponent(notificationService) {
                    this.notificationService = notificationService;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], PatientsComponent.prototype, "patients", void 0);
                PatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'patients',
                        templateUrl: 'app/components/patients/patients.html',
                        host: { '[hidden]': 'hidden' },
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, filterTextbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective, patient_list_1.PatientList, patient_header_1.PatientHeaderComponent, patient_form_1.PatientFormComponent, index_1.MATERIAL_DIRECTIVES],
                        pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe]
                    }), 
                    __metadata('design:paramtypes', [notificationService_1.NotificationService])
                ], PatientsComponent);
                return PatientsComponent;
            }());
            exports_1("PatientsComponent", PatientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBTUcsbURBQW1EO2dCQUNuRCx1QkFBdUI7Z0JBQ3RCLDJCQUFxQixtQkFBd0M7b0JBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7Z0JBQUssQ0FBQztnQkFMbkU7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFaWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixXQUFXLEVBQUUsdUNBQXVDO3dCQUNwRCxJQUFJLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDO3dCQUM1QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFFLGdEQUFzQixFQUFFLGtDQUFlLEVBQUUsMEJBQVcsRUFBRSx1Q0FBc0IsRUFBRSxtQ0FBb0IsRUFBRSwyQkFBbUIsQ0FBQzt3QkFDekssS0FBSyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxvQkFBUSxDQUFDO3FCQUNsQyxDQUFDOztxQ0FBQTtnQkF3QkYsd0JBQUM7WUFBRCxDQXJCQSxBQXFCQyxJQUFBO1lBckJELGlEQXFCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJlYXRtZW50U2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgUGF0aWVudEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3BhdGllbnQtZm9ybSdcclxuaW1wb3J0IHsgUGF0aWVudExpc3QgfSBmcm9tICcuL3BhdGllbnQtbGlzdCdcclxuaW1wb3J0IHsgUGF0aWVudEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vcGF0aWVudC1oZWFkZXInXHJcbmltcG9ydCB7IFBhdGllbnQsUGF0aWVudEJhY2tlbmRTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdwYXRpZW50cycsIFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMuaHRtbCcsXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgRmlsdGVyVGV4dGJveENvbXBvbmVudCwgU29ydEJ5RGlyZWN0aXZlLCBQYXRpZW50TGlzdCwgUGF0aWVudEhlYWRlckNvbXBvbmVudCwgUGF0aWVudEZvcm1Db21wb25lbnQsIE1BVEVSSUFMX0RJUkVDVElWRVNdLFxyXG4gIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGUsIFRyaW1QaXBlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50c0NvbXBvbmVudCB7XHJcbiAgICBzZWxlY3RlZFBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRzOiBQYXRpZW50W107XHJcbiAgICBcclxuICAgIFxyXG4gICAvLyBAT3V0cHV0KCkgb3BlbkZvcm0gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgLy8gZm9ybUFjdGlvbiA6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgKSB7IH1cclxuLy8gICAgbmdPbkluaXQoKSB7XHJcbi8vICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbi8vICAgICAgICAgIC5zdWJzY3JpYmUoZm9ybUFjdGlvbiA9PiB0aGlzLm9uRm9ybUFjdGlvbkNoYW5nZShmb3JtQWN0aW9uKSk7XHJcbi8vICAgIH1cclxuLy8gICAgb25Gb3JtQWN0aW9uQ2hhbmdlKGl0ZW06IHN0cmluZykge1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZE5hdkl0ZW0gcGF0aWVudCBjb21wb25lbnQgaXRlbSA9IFwiLCBpdGVtLCBcInNlbGVjdGVkUGF0aWVudFwiLCB0aGlzLnNlbGVjdGVkUGF0aWVudCk7XHJcbi8vICAgIH1cclxuLy8gICAgbmdPbkRlc3Ryb3koKSB7XHJcbi8vICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4vLyAgICB9XHJcbiAgICBcclxuICBcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
