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
            let PatientsComponent = class PatientsComponent {
                // @Output() openForm = new EventEmitter<string>();
                // formAction : string;
                constructor(notificationService) {
                    this.notificationService = notificationService;
                }
            };
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
            exports_1("PatientsComponent", PatientsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBTUcsbURBQW1EO2dCQUNuRCx1QkFBdUI7Z0JBQ3RCLFlBQXFCLG1CQUF3QztvQkFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtnQkFBSyxDQUFDO1lBV3ZFLENBQUM7WUFoQkc7Z0JBQUMsWUFBSyxFQUFFOzsrREFBQTtZQVpaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFdBQVcsRUFBRSx1Q0FBdUM7b0JBQ3BELElBQUksRUFBRSxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUM7b0JBQzVCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUUsZ0RBQXNCLEVBQUUsa0NBQWUsRUFBRSwwQkFBVyxFQUFFLHVDQUFzQixFQUFFLG1DQUFvQixFQUFFLDJCQUFtQixDQUFDO29CQUN6SyxLQUFLLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9CQUFRLENBQUM7aUJBQ2xDLENBQUM7O2lDQUFBO1lBR0YsaURBbUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFRyZWF0bWVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmVhdG1lbnRTZXJ2aWNlJztcclxuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NvcnRlcic7XHJcbmltcG9ydCB7IEZpbHRlclRleHRib3hDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlclRleHRib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydEJ5RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2RpcmVjdGl2ZXMvc29ydGJ5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUucGlwZSc7XHJcbmltcG9ydCB7IFRyaW1QaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3RyaW0ucGlwZSc7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQgeyBQYXRpZW50Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vcGF0aWVudC1mb3JtJ1xyXG5pbXBvcnQgeyBQYXRpZW50TGlzdCB9IGZyb20gJy4vcGF0aWVudC1saXN0J1xyXG5pbXBvcnQgeyBQYXRpZW50SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wYXRpZW50LWhlYWRlcidcclxuaW1wb3J0IHsgUGF0aWVudCxQYXRpZW50QmFja2VuZFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ3BhdGllbnRzJywgXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5odG1sJyxcclxuICBob3N0OiB7J1toaWRkZW5dJzogJ2hpZGRlbid9LFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50LCBTb3J0QnlEaXJlY3RpdmUsIFBhdGllbnRMaXN0LCBQYXRpZW50SGVhZGVyQ29tcG9uZW50LCBQYXRpZW50Rm9ybUNvbXBvbmVudCwgTUFURVJJQUxfRElSRUNUSVZFU10sXHJcbiAgcGlwZXM6IFtDYXBpdGFsaXplUGlwZSwgVHJpbVBpcGVdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnRzQ29tcG9uZW50IHtcclxuICAgIHNlbGVjdGVkUGF0aWVudDogUGF0aWVudDtcclxuICAgIHN1YnNjcmlwdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgcGF0aWVudHM6IFBhdGllbnRbXTtcclxuICAgIFxyXG4gICAgXHJcbiAgIC8vIEBPdXRwdXQoKSBvcGVuRm9ybSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gICAvLyBmb3JtQWN0aW9uIDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSApIHsgfVxyXG4vLyAgICBuZ09uSW5pdCgpIHtcclxuLy8gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmdldEZvcm1BY3Rpb25DaGFuZ2VFbWl0dGVyKClcclxuLy8gICAgICAgICAgLnN1YnNjcmliZShmb3JtQWN0aW9uID0+IHRoaXMub25Gb3JtQWN0aW9uQ2hhbmdlKGZvcm1BY3Rpb24pKTtcclxuLy8gICAgfVxyXG4vLyAgICBvbkZvcm1BY3Rpb25DaGFuZ2UoaXRlbTogc3RyaW5nKSB7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkTmF2SXRlbSBwYXRpZW50IGNvbXBvbmVudCBpdGVtID0gXCIsIGl0ZW0sIFwic2VsZWN0ZWRQYXRpZW50XCIsIHRoaXMuc2VsZWN0ZWRQYXRpZW50KTtcclxuLy8gICAgfVxyXG4vLyAgICBuZ09uRGVzdHJveSgpIHtcclxuLy8gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbi8vICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
