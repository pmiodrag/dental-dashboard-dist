System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../handlers/control-messages', '../../shared/services/validation.service', 'ng2-bootstrap/ng2-bootstrap', 'ng2-file-upload/ng2-file-upload', '../../shared/pipes/capitalize.pipe', '../state/PatientStore', '../state/UiStateStore', '@angular2-material/input', '@angular2-material/radio', '@angular2-material/radio/radio_dispatcher', '@angular2-material/toolbar', "ng2-material/index", '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, control_messages_1, validation_service_1, ng2_bootstrap_1, ng2_file_upload_1, capitalize_pipe_1, PatientStore_1, UiStateStore_1, input_1, radio_1, radio_dispatcher_1, toolbar_1, index_1, app_constants_1;
    var PatientFormComponent;
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
            function (PatientBackendService_1_1) {
                PatientBackendService_1 = PatientBackendService_1_1;
            },
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            },
            function (control_messages_1_1) {
                control_messages_1 = control_messages_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (PatientStore_1_1) {
                PatientStore_1 = PatientStore_1_1;
            },
            function (UiStateStore_1_1) {
                UiStateStore_1 = UiStateStore_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (radio_1_1) {
                radio_1 = radio_1_1;
            },
            function (radio_dispatcher_1_1) {
                radio_dispatcher_1 = radio_dispatcher_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            PatientFormComponent = (function () {
                function PatientFormComponent(fb, patientStore, uiStateStore, patientService, notificationService) {
                    this.patientStore = patientStore;
                    this.uiStateStore = uiStateStore;
                    this.patientService = patientService;
                    this.notificationService = notificationService;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
                    this.hasBaseDropZoneOver = false;
                    this.hasAnotherDropZoneOver = false;
                    this.hidden = true;
                    this.submitted = false;
                    this.data = {
                        group1: 'Banana',
                        group2: '2',
                        group3: 'avatar-1'
                    };
                    this.avatarData = [{
                            id: 'assets/images/m.png',
                            title: 'Male',
                            value: 'M',
                            color: 'md-primary'
                        }, {
                            id: 'assets/images/f.png',
                            title: 'Female',
                            value: 'F',
                            color: 'md-warn'
                        }];
                    this.patientForm = fb.group({
                        'firstname': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(30)])],
                        'lastname': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(30)
                            ])],
                        'email': ['', validation_service_1.ValidationService.emailValidator]
                    });
                }
                PatientFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.patient = new PatientBackendService_1.Patient(0, '', '', '', 'M', '', '', new Date(), '', '', '');
                    this.subscription = this.notificationService.getFormActionChangeEmitter()
                        .subscribe(function (patient) { return _this.onFormActionChange(patient); });
                };
                PatientFormComponent.prototype.onFormActionChange = function (patient) {
                    console.log("onFormActionChange patient", patient);
                    this.patient = patient;
                    if (patient.id == -1) {
                        this.formTitle = "Add Patient";
                        this.submitAction = 'add';
                    }
                    else {
                        this.formTitle = "Edit Patient";
                        this.submitAction = 'edit';
                    }
                };
                PatientFormComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                PatientFormComponent.prototype.addPatient = function (patient) {
                    this.patientStore.addPatient(patient);
                    this.goBack();
                };
                PatientFormComponent.prototype.updatePatient = function (patient) {
                    var _this = this;
                    this.patientStore.updatePatient(patient)
                        .subscribe(function (res) { }, function (err) {
                        _this.uiStateStore.endBackendAction();
                    });
                    this.goBack();
                };
                PatientFormComponent.prototype.goBack = function () {
                    this.hidden = true;
                    this.patientheader.hidden = false;
                    this.patientlist.hidden = false;
                };
                PatientFormComponent.prototype.onSubmit = function (patient) {
                    // patient.birthdate.setHours(12);
                    if (this.submitAction == 'add') {
                        this.addPatient(patient);
                    }
                    else {
                        this.updatePatient(patient);
                    }
                    this.submitted = true;
                    this.goBack();
                };
                PatientFormComponent.prototype.fileOverBase = function (e) {
                    this.hasBaseDropZoneOver = e;
                };
                PatientFormComponent.prototype.fileOverAnother = function (e) {
                    this.hasAnotherDropZoneOver = e;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', PatientBackendService_1.Patient)
                ], PatientFormComponent.prototype, "patient", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PatientFormComponent.prototype, "hidden", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientFormComponent.prototype, "patientheader", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientFormComponent.prototype, "patientlist", void 0);
                PatientFormComponent = __decorate([
                    core_1.Component({
                        selector: 'patient-form',
                        templateUrl: 'app/components/patients/patient-form.html',
                        //  providers: [PatientBackendService],
                        providers: [radio_dispatcher_1.MdRadioDispatcher],
                        host: { '[hidden]': 'hidden' },
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES,
                            radio_1.MdRadioGroup, radio_1.MdRadioButton, toolbar_1.MdToolbar, control_messages_1.ControlMessages, index_1.MATERIAL_DIRECTIVES, ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES],
                        pipes: [capitalize_pipe_1.CapitalizePipe]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, PatientStore_1.PatientStore, UiStateStore_1.UiStateStore, PatientBackendService_1.PatientBackendService, notificationService_1.NotificationService])
                ], PatientFormComponent);
                return PatientFormComponent;
            }());
            exports_1("PatientFormComponent", PatientFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQStCRSw4QkFBWSxFQUFlLEVBQVUsWUFBMEIsRUFBVSxZQUEwQixFQUFVLGNBQXFDLEVBQVUsbUJBQXdDO29CQUEvSixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7b0JBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkE5QmxNLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUN4QixhQUFRLEdBQWdCLElBQUksOEJBQVksQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO29CQUNyRCx3QkFBbUIsR0FBVyxLQUFLLENBQUM7b0JBQ3BDLDJCQUFzQixHQUFXLEtBQUssQ0FBQztvQkFHckMsV0FBTSxHQUFXLElBQUksQ0FBQztvQkFNL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztvQkFFbEIsU0FBSSxHQUFRO3dCQUNSLE1BQU0sRUFBRSxRQUFRO3dCQUNoQixNQUFNLEVBQUUsR0FBRzt3QkFDWCxNQUFNLEVBQUUsVUFBVTtxQkFDbkIsQ0FBQztvQkFDSixlQUFVLEdBQVUsQ0FBQzs0QkFDakIsRUFBRSxFQUFFLHFCQUFxQjs0QkFDekIsS0FBSyxFQUFFLE1BQU07NEJBQ2IsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsS0FBSyxFQUFDLFlBQVk7eUJBQ3JCLEVBQUU7NEJBQ0MsRUFBRSxFQUFFLHFCQUFxQjs0QkFDekIsS0FBSyxFQUFFLFFBQVE7NEJBQ2YsS0FBSyxFQUFFLEdBQUc7NEJBQ1QsS0FBSyxFQUFDLFNBQVM7eUJBQ25CLENBQUMsQ0FBQztvQkFHSCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUs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Q0FBYyxDQUFDO3FCQUN4QixDQUFDOzt3Q0FBQTtnQkFpSEYsMkJBQUM7WUFBRCxDQTlHQSxBQThHQyxJQUFBO1lBOUdELHVEQThHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnRyb2xNZXNzYWdlc30gZnJvbSAnLi4vaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RBVEVQSUNLRVJfRElSRUNUSVZFU30gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBGaWxlVXBsb2FkZXJ9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBQYXRpZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWRSYWRpb0dyb3VwLCBNZFJhZGlvQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQge01kUmFkaW9EaXNwYXRjaGVyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8vcmFkaW9fZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TWRQYXR0ZXJuVmFsaWRhdG9yLFxyXG4gIE1kTWluVmFsdWVWYWxpZGF0b3IsXHJcbiAgTWROdW1iZXJSZXF1aXJlZFZhbGlkYXRvcixcclxuICBNZE1heFZhbHVlVmFsaWRhdG9yLCBNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuXHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ3BhdGllbnQtZm9ybScsIFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLmh0bWwnLFxyXG4vLyAgcHJvdmlkZXJzOiBbUGF0aWVudEJhY2tlbmRTZXJ2aWNlXSxcclxuICBwcm92aWRlcnM6IFtNZFJhZGlvRGlzcGF0Y2hlcl0sXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVMsXHJcbiAgICAgICAgICAgIE1kUmFkaW9Hcm91cCwgTWRSYWRpb0J1dHRvbiwgTWRUb29sYmFyLCBDb250cm9sTWVzc2FnZXMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIEZJTEVfVVBMT0FEX0RJUkVDVElWRVNdLFxyXG4gIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGVdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnRGb3JtQ29tcG9uZW50IHtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIHB1YmxpYyB1cGxvYWRlcjpGaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHt1cmw6IFVSTH0pO1xyXG4gICAgcHVibGljIGhhc0Jhc2VEcm9wWm9uZU92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGhhc0Fub3RoZXJEcm9wWm9uZU92ZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcGF0aWVudEZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIEBJbnB1dCgpIHBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQgKCkgcGF0aWVudGhlYWRlcjogYW55O1xyXG4gICAgQElucHV0ICgpIHBhdGllbnRsaXN0OiBhbnk7XHJcbiAgICBmb3JtVGl0bGU6IHN0cmluZztcclxuICAgIHN1Ym1pdEFjdGlvbjogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgZGF0YTogYW55ID0ge1xyXG4gICAgICAgIGdyb3VwMTogJ0JhbmFuYScsXHJcbiAgICAgICAgZ3JvdXAyOiAnMicsXHJcbiAgICAgICAgZ3JvdXAzOiAnYXZhdGFyLTEnXHJcbiAgICAgIH07XHJcbiAgICBhdmF0YXJEYXRhOiBhbnlbXSA9IFt7XHJcbiAgICAgICAgaWQ6ICdhc3NldHMvaW1hZ2VzL20ucG5nJyxcclxuICAgICAgICB0aXRsZTogJ01hbGUnLFxyXG4gICAgICAgIHZhbHVlOiAnTScsXHJcbiAgICAgICAgY29sb3I6J21kLXByaW1hcnknXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6ICdhc3NldHMvaW1hZ2VzL2YucG5nJyxcclxuICAgICAgICB0aXRsZTogJ0ZlbWFsZScsXHJcbiAgICAgICAgdmFsdWU6ICdGJyxcclxuICAgICAgICAgY29sb3I6J21kLXdhcm4nXHJcbiAgICB9XTtcclxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcGF0aWVudFN0b3JlOiBQYXRpZW50U3RvcmUsIHByaXZhdGUgdWlTdGF0ZVN0b3JlOiBVaVN0YXRlU3RvcmUsIHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlICkge1xyXG4gICAgXHJcbiAgICB0aGlzLnBhdGllbnRGb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAnZmlyc3RuYW1lJzogWycnLCAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgJ2xhc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgIF0pXSxcclxuICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhdGllbnQgPSBuZXcgUGF0aWVudCgwLCAnJywgJycsICcnLCAnTScsICcnLCAnJywgbmV3IERhdGUoKSwgJycsICcnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0Rm9ybUFjdGlvbkNoYW5nZUVtaXR0ZXIoKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShwYXRpZW50ID0+IHRoaXMub25Gb3JtQWN0aW9uQ2hhbmdlKHBhdGllbnQpKTsgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25Gb3JtQWN0aW9uQ2hhbmdlKHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uRm9ybUFjdGlvbkNoYW5nZSBwYXRpZW50XCIsIHBhdGllbnQpO1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IHBhdGllbnQ7XHJcbiAgICAgICAgaWYgKHBhdGllbnQuaWQgPT0gLTEpIHsgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiQWRkIFBhdGllbnRcIjtcclxuICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2FkZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkVkaXQgUGF0aWVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEFjdGlvbiA9ICdlZGl0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRQYXRpZW50KHBhdGllbnQpIHsgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuYWRkUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZVBhdGllbnQocGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLnVwZGF0ZVBhdGllbnQocGF0aWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIGdvQmFjaygpIHsgICAgIFxyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRoZWFkZXIuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50bGlzdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25TdWJtaXQocGF0aWVudCkgeyBcclxuICAgICAgIC8vIHBhdGllbnQuYmlydGhkYXRlLnNldEhvdXJzKDEyKTtcclxuICAgICAgICBpZiAodGhpcy5zdWJtaXRBY3Rpb24gPT0gJ2FkZCcpIHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWRkUGF0aWVudCAocGF0aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyBcclxuICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcHVibGljIGZpbGVPdmVyQmFzZShlOmFueSk6dm9pZCB7XHJcbiAgICAgIHRoaXMuaGFzQmFzZURyb3Bab25lT3ZlciA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbGVPdmVyQW5vdGhlcihlOmFueSk6dm9pZCB7XHJcbiAgICAgIHRoaXMuaGFzQW5vdGhlckRyb3Bab25lT3ZlciA9IGU7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
