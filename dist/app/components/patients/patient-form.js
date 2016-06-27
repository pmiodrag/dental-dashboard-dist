System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../handlers/control-messages', '../../shared/services/validation.service', 'ng2-bootstrap/ng2-bootstrap', 'ng2-file-upload/ng2-file-upload', '../../shared/pipes/capitalize.pipe', '../state/PatientStore', '../state/UiStateStore', '@angular2-material/input', '@angular2-material/radio', '@angular2-material/radio/radio_dispatcher', '@angular2-material/toolbar', '@angular2-material/progress-bar', "ng2-material/index", '../../shared/constants/app.constants', '@angular2-material/core/overlay/overlay', '@angular2-material/icon/icon'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, control_messages_1, validation_service_1, ng2_bootstrap_1, ng2_file_upload_1, capitalize_pipe_1, PatientStore_1, UiStateStore_1, input_1, radio_1, radio_dispatcher_1, toolbar_1, progress_bar_1, index_1, app_constants_1, overlay_1, icon_1;
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
            function (progress_bar_1_1) {
                progress_bar_1 = progress_bar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            },
            function (overlay_1_1) {
                overlay_1 = overlay_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            }],
        execute: function() {
            //import * as moment from 'moment';
            let PatientFormComponent = class PatientFormComponent {
                constructor(fb, mdIconRegistry, patientStore, uiStateStore, patientService, notificationService) {
                    this.patientStore = patientStore;
                    this.uiStateStore = uiStateStore;
                    this.patientService = patientService;
                    this.notificationService = notificationService;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: '/patient/upload' });
                    this.hidden = true;
                    this.submitted = false;
                    this.avatarData = [{
                            id: 'M',
                            title: 'M',
                            value: 'M',
                            color: 'md-primary'
                        }, {
                            id: 'F',
                            title: 'F',
                            value: 'F',
                            color: 'md-warn'
                        }];
                    //   console.log("uploader", this.uploader);
                    mdIconRegistry.addSvgIcon('F', 'assets/images/svg/human-female.svg');
                    mdIconRegistry.addSvgIcon('M', 'assets/images/svg/human-male.svg');
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
                ngOnInit() {
                    this.patient = new PatientBackendService_1.Patient(0, '', '', '', 'M', '', '', new Date(), '', '', '', '');
                    this.subscription = this.notificationService.getFormActionChangeEmitter()
                        .subscribe(patient => this.onFormActionChange(patient));
                }
                onFormActionChange(patient) {
                    this.patient = patient;
                    if (patient.id == -1) {
                        this.formTitle = "Add Patient";
                        this.submitAction = 'add';
                    }
                    else {
                        this.formTitle = "Edit Patient";
                        this.submitAction = 'edit';
                    }
                }
                ngOnDestroy() {
                    this.subscription.unsubscribe();
                }
                addPatient(patient) {
                    if (this.uploader.queue && this.uploader.queue.length > 0) {
                        console.log("Upload photo url", this.uploader.queue[0].file.name);
                        patient.photo = this.uploader.queue[0].file.name;
                    }
                    else {
                        patient.photo = "";
                    }
                    this.patientStore.addPatient(patient);
                    this.goBack();
                }
                updatePatient(patient) {
                    if (this.uploader.queue && this.uploader.queue.length > 0) {
                        console.log("Upload photo url", this.uploader.queue[0].file.name);
                        patient.photo = this.uploader.queue[0].file.name;
                    }
                    else {
                        patient.photo = "";
                    }
                    this.patientStore.updatePatient(patient)
                        .subscribe(res => { }, err => {
                        this.uiStateStore.endBackendAction();
                    });
                    this.goBack();
                }
                goBack() {
                    this.hidden = true;
                    this.patientheader.hidden = false;
                    this.patientlist.hidden = false;
                }
                onSubmit(patient) {
                    // patient.birthdate.setHours(12);
                    if (this.submitAction == 'add') {
                        this.addPatient(patient);
                    }
                    else {
                        this.updatePatient(patient);
                    }
                    this.submitted = true;
                    this.goBack();
                }
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
                    providers: [radio_dispatcher_1.MdRadioDispatcher, icon_1.MdIconRegistry, overlay_1.OVERLAY_PROVIDERS],
                    host: { '[hidden]': 'hidden' },
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES,
                        radio_1.MdRadioGroup, radio_1.MdRadioButton, icon_1.MdIcon, toolbar_1.MdToolbar, control_messages_1.ControlMessages, index_1.MATERIAL_DIRECTIVES, ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES, progress_bar_1.MdProgressBar],
                    pipes: [capitalize_pipe_1.CapitalizePipe]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, icon_1.MdIconRegistry, PatientStore_1.PatientStore, UiStateStore_1.UiStateStore, PatientBackendService_1.PatientBackendService, notificationService_1.NotificationService])
            ], PatientFormComponent);
            exports_1("PatientFormComponent", PatientFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBLG1DQUFtQztZQVluQztnQkEyQkksWUFBWSxFQUFlLEVBQUUsY0FBOEIsRUFBVSxZQUEwQixFQUFVLFlBQTBCLEVBQVUsY0FBcUMsRUFBVSxtQkFBd0M7b0JBQS9KLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtvQkFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQTFCcE8sY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBRXhCLGFBQVEsR0FBaUIsSUFBSSw4QkFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztvQkFJcEUsV0FBTSxHQUFZLElBQUksQ0FBQztvQkFNaEMsY0FBUyxHQUFHLEtBQUssQ0FBQztvQkFFbEIsZUFBVSxHQUFVLENBQUM7NEJBQ2pCLEVBQUUsRUFBRSxHQUFHOzRCQUNQLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxZQUFZO3lCQUN0QixFQUFFOzRCQUNLLEVBQUUsRUFBRSxHQUFHOzRCQUNQLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxTQUFTO3lCQUNuQixDQUFDLENBQUM7b0JBR0gsNENBQTRDO29CQUM1QyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO29CQUNyRSxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUs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SSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixDQUFDO1lBR0wsQ0FBQztZQTdHRztnQkFBQyxZQUFLLEVBQUU7O2lFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztnRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7dUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O3FFQUFBO1lBcEJaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFdBQVcsRUFBRSwyQ0FBMkM7b0JBQ3hELFNBQVMsRUFBRSxDQUFDLG9DQUFpQixFQUFFLHFCQUFjLEVBQUUsMkJBQWlCLENBQUM7b0JBQ2pFLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7b0JBQzlCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUUscUNBQXFCLEVBQUUsd0JBQWUsRUFBRSwyQkFBbUI7d0JBQ3hHLG9CQUFZLEVBQUUscUJBQWEsRUFBRSxhQUFNLEVBQUUsbUJBQVMsRUFBRSxrQ0FBZSxFQUFFLDJCQUFtQixFQUFFLHdDQUFzQixFQUFFLDRCQUFhLENBQUM7b0JBQ2hJLEtBQUssRUFBRSxDQUFDLGdDQUFjLENBQUM7aUJBQzFCLENBQUM7O29DQUFBO1lBR0YsdURBbUhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhdGllbnQsIFBhdGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7Q29udHJvbE1lc3NhZ2VzfSBmcm9tICcuLi9oYW5kbGVycy9jb250cm9sLW1lc3NhZ2VzJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7REFURVBJQ0tFUl9ESVJFQ1RJVkVTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQge0ZJTEVfVVBMT0FEX0RJUkVDVElWRVMsIEZpbGVVcGxvYWRlcn0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUucGlwZSc7XHJcbmltcG9ydCB7IFBhdGllbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1BhdGllbnRTdG9yZSc7XHJcbmltcG9ydCB7IFVpU3RhdGVTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1VpU3RhdGVTdG9yZSc7XHJcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNZFJhZGlvR3JvdXAsIE1kUmFkaW9CdXR0b259IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpbyc7XHJcbmltcG9ydCB7TWRSYWRpb0Rpc3BhdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpby9yYWRpb19kaXNwYXRjaGVyJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNZFByb2dyZXNzQmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcclxuaW1wb3J0IHtNZFBhdHRlcm5WYWxpZGF0b3IsXHJcbk1kTWluVmFsdWVWYWxpZGF0b3IsXHJcbk1kTnVtYmVyUmVxdWlyZWRWYWxpZGF0b3IsXHJcbk1kTWF4VmFsdWVWYWxpZGF0b3IsIE1BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQge09WRVJMQVlfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvY29yZS9vdmVybGF5L292ZXJsYXknO1xyXG5pbXBvcnQge01kSWNvbiwgTWRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pY29uL2ljb24nO1xyXG4vL2ltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGF0aWVudC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbTWRSYWRpb0Rpc3BhdGNoZXIsIE1kSWNvblJlZ2lzdHJ5LCBPVkVSTEFZX1BST1ZJREVSU10sXHJcbiAgICBob3N0OiB7ICdbaGlkZGVuXSc6ICdoaWRkZW4nIH0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVMsXHJcbiAgICAgICAgTWRSYWRpb0dyb3VwLCBNZFJhZGlvQnV0dG9uLCBNZEljb24sIE1kVG9vbGJhciwgQ29udHJvbE1lc3NhZ2VzLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBNZFByb2dyZXNzQmFyXSxcclxuICAgIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGVdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnRGb3JtQ29tcG9uZW50IHtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkZXI6IEZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoeyB1cmw6ICcvcGF0aWVudC91cGxvYWQnIH0pO1xyXG5cclxuICAgIHBhdGllbnRGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50OiBQYXRpZW50O1xyXG4gICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRoZWFkZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRsaXN0OiBhbnk7XHJcbiAgICBmb3JtVGl0bGU6IHN0cmluZztcclxuICAgIHN1Ym1pdEFjdGlvbjogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBhdmF0YXJEYXRhOiBhbnlbXSA9IFt7XHJcbiAgICAgICAgaWQ6ICdNJyxcclxuICAgICAgICB0aXRsZTogJ00nLFxyXG4gICAgICAgIHZhbHVlOiAnTScsXHJcbiAgICAgICAgY29sb3I6ICdtZC1wcmltYXJ5J1xyXG4gICAgfSwge1xyXG4gICAgICAgICAgICBpZDogJ0YnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0YnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ0YnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ21kLXdhcm4nXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBtZEljb25SZWdpc3RyeTogTWRJY29uUmVnaXN0cnksIHByaXZhdGUgcGF0aWVudFN0b3JlOiBQYXRpZW50U3RvcmUsIHByaXZhdGUgdWlTdGF0ZVN0b3JlOiBVaVN0YXRlU3RvcmUsIHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInVwbG9hZGVyXCIsIHRoaXMudXBsb2FkZXIpO1xyXG4gICAgICAgIG1kSWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ0YnLCAnYXNzZXRzL2ltYWdlcy9zdmcvaHVtYW4tZmVtYWxlLnN2ZycpO1xyXG4gICAgICAgIG1kSWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ00nLCAnYXNzZXRzL2ltYWdlcy9zdmcvaHVtYW4tbWFsZS5zdmcnKTtcclxuICAgICAgICB0aGlzLnBhdGllbnRGb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZmlyc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAgICAgICAnbGFzdG5hbWUnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMClcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICAnZW1haWwnOiBbJycsIFZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gbmV3IFBhdGllbnQoMCwgJycsICcnLCAnJywgJ00nLCAnJywgJycsIG5ldyBEYXRlKCksICcnLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGF0aWVudCA9PiB0aGlzLm9uRm9ybUFjdGlvbkNoYW5nZShwYXRpZW50KSk7XHJcbiAgICB9XHJcbiAgICBvbkZvcm1BY3Rpb25DaGFuZ2UocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IHBhdGllbnQ7XHJcbiAgICAgICAgaWYgKHBhdGllbnQuaWQgPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkFkZCBQYXRpZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2FkZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkVkaXQgUGF0aWVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEFjdGlvbiA9ICdlZGl0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBhdGllbnQocGF0aWVudCkge1xyXG4gICAgICAgIGlmKHRoaXMudXBsb2FkZXIucXVldWUgJiYgdGhpcy51cGxvYWRlci5xdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWQgcGhvdG8gdXJsXCIsIHRoaXMudXBsb2FkZXIucXVldWVbMF0uZmlsZS5uYW1lKTsgXHJcbiAgICAgICAgICAgcGF0aWVudC5waG90byA9IHRoaXMudXBsb2FkZXIucXVldWVbMF0uZmlsZS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGF0aWVudC5waG90byA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLmFkZFBhdGllbnQocGF0aWVudClcclxuICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhdGllbnQocGF0aWVudCkge1xyXG4gICAgICAgIGlmKHRoaXMudXBsb2FkZXIucXVldWUgJiYgdGhpcy51cGxvYWRlci5xdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWQgcGhvdG8gdXJsXCIsIHRoaXMudXBsb2FkZXIucXVldWVbMF0uZmlsZS5uYW1lKTsgXHJcbiAgICAgICAgICAgcGF0aWVudC5waG90byA9IHRoaXMudXBsb2FkZXIucXVldWVbMF0uZmlsZS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGF0aWVudC5waG90byA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLnVwZGF0ZVBhdGllbnQocGF0aWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHsgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlTdGF0ZVN0b3JlLmVuZEJhY2tlbmRBY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRoZWFkZXIuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50bGlzdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChwYXRpZW50KSB7IFxyXG4gICAgICAgIC8vIHBhdGllbnQuYmlydGhkYXRlLnNldEhvdXJzKDEyKTtcclxuICAgICAgICBpZiAodGhpcy5zdWJtaXRBY3Rpb24gPT0gJ2FkZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGF0aWVudChwYXRpZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
