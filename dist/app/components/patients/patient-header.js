System.register(['@angular/core', '@angular/common', '../../services/notificationService', '../../services/PatientBackendService', '@angular2-material/toolbar', "ng2-material/index"], function(exports_1, context_1) {
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
    var core_1, common_1, notificationService_1, PatientBackendService_1, toolbar_1, index_1;
    var PatientHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            },
            function (PatientBackendService_1_1) {
                PatientBackendService_1 = PatientBackendService_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            PatientHeaderComponent = (function () {
                function PatientHeaderComponent(notificationService) {
                    this.notificationService = notificationService;
                    this.hidden = false;
                }
                PatientHeaderComponent.prototype.addPatient = function () {
                    this.hidden = true;
                    this.patientlist.hidden = true;
                    this.patientform.hidden = false;
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '');
                    this.formAction(this.patient);
                };
                PatientHeaderComponent.prototype.formAction = function (patient) {
                    console.log('PatientHeaderComponent formAction patient', patient);
                    this.notificationService.emitFormActionChangeEvent(patient);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PatientHeaderComponent.prototype, "hidden", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientHeaderComponent.prototype, "patientform", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientHeaderComponent.prototype, "patientlist", void 0);
                PatientHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'patient-header',
                        templateUrl: 'app/components/patients/patient-header.html',
                        host: { '[hidden]': 'hidden' },
                        directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar],
                    }), 
                    __metadata('design:paramtypes', [notificationService_1.NotificationService])
                ], PatientHeaderComponent);
                return PatientHeaderComponent;
            }());
            exports_1("PatientHeaderComponent", PatientHeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFNSSxnQ0FBcUIsbUJBQXdDO29CQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUxwRCxXQUFNLEdBQVcsS0FBSyxDQUFDO2dCQUtnQyxDQUFDO2dCQUlqRSwyQ0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLCtCQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCwyQ0FBVSxHQUFWLFVBQVcsT0FBZ0I7b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFuQkQ7b0JBQUMsWUFBSyxFQUFFOztzRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUc7OzJFQUFBO2dCQUNUO29CQUFDLFlBQUssRUFBRzs7MkVBQUE7Z0JBVGI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsNkNBQTZDO3dCQUMxRCxJQUFJLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDO3dCQUM1QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLG1CQUFTLENBQUM7cUJBQzlELENBQUM7OzBDQUFBO2dCQXNCRiw2QkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsMkRBcUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYXRpZW50LWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWhlYWRlci5odG1sJyxcclxuICBob3N0OiB7J1toaWRkZW5dJzogJ2hpZGRlbid9LFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhcl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGhpZGRlbjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQgKCkgcGF0aWVudGZvcm06IGFueTtcclxuICAgIEBJbnB1dCAoKSBwYXRpZW50bGlzdDogYW55OyAgXHJcbiAgICBwYXRpZW50OiBQYXRpZW50O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7fVxyXG5cclxuICAgIFxyXG5cclxuICAgIGFkZFBhdGllbnQgKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRsaXN0LmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50Zm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdGllbnQgPSBuZXcgUGF0aWVudCgtMSwgJycsICcnLCAnJywgJ00nLCAnJywgJycsIG5ldyBEYXRlKCksICcnLCAnJywgJycpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLnBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgZm9ybUFjdGlvbihwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BhdGllbnRIZWFkZXJDb21wb25lbnQgZm9ybUFjdGlvbiBwYXRpZW50JywgcGF0aWVudCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQocGF0aWVudCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
