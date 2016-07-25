System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../handlers/control-messages', '../../shared/services/validation.service', 'ng2-bootstrap/ng2-bootstrap', 'ng2-file-upload/ng2-file-upload', '../../shared/pipes/capitalize.pipe', '../state/PatientStore', '../state/UiStateStore', '@angular2-material/input', '@angular2-material/radio', '@angular2-material/radio/radio_dispatcher', '@angular2-material/toolbar', '@angular2-material/progress-bar', "ng2-material/index", '../../shared/constants/app.constants', '@angular2-material/icon/icon'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, control_messages_1, validation_service_1, ng2_bootstrap_1, ng2_file_upload_1, capitalize_pipe_1, PatientStore_1, UiStateStore_1, input_1, radio_1, radio_dispatcher_1, toolbar_1, progress_bar_1, index_1, app_constants_1, icon_1;
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
                    this.patient = new PatientBackendService_1.Patient(0, '', '', '', 'M', '', '', new Date(), '', '', '', '', '', '');
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
                    providers: [radio_dispatcher_1.MdRadioDispatcher, icon_1.MdIconRegistry],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBLG1DQUFtQztZQVluQztnQkEyQkksWUFBWSxFQUFlLEVBQUUsY0FBOEIsRUFBVSxZQUEwQixFQUFVLFlBQTBCLEVBQVUsY0FBcUMsRUFBVSxtQkFBd0M7b0JBQS9KLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtvQkFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQTFCcE8sY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBRXhCLGFBQVEsR0FBaUIsSUFBSSw4QkFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztvQkFJcEUsV0FBTSxHQUFZLElBQUksQ0FBQztvQkFNaEMsY0FBUyxHQUFHLEtBQUssQ0FBQztvQkFFbEIsZUFBVSxHQUFVLENBQUM7NEJBQ2pCLEVBQUUsRUFBRSxHQUFHOzRCQUNQLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxZQUFZO3lCQUN0QixFQUFFOzRCQUNLLEVBQUUsRUFBRSxHQUFHOzRCQUNQLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBRSxTQUFTO3lCQUNuQixDQUFDLENBQUM7b0JBR0gsNENBQTRDO29CQUM1QyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO29CQUNyRSxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FB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SSxDQUFDO29CQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7WUFHTCxDQUFDO1lBN0dHO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O2dFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt1RUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7cUVBQUE7WUFwQlo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsV0FBVyxFQUFFLDJDQUEyQztvQkFDeEQsU0FBUyxFQUFFLENBQUMsb0NBQWlCLEVBQUUscUJBQWMsQ0FBQztvQkFDOUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtvQkFDOUIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSxxQ0FBcUIsRUFBRSx3QkFBZSxFQUFFLDJCQUFtQjt3QkFDeEcsb0JBQVksRUFBRSxxQkFBYSxFQUFFLGFBQU0sRUFBRSxtQkFBUyxFQUFFLGtDQUFlLEVBQUUsMkJBQW1CLEVBQUUsd0NBQXNCLEVBQUUsNEJBQWEsQ0FBQztvQkFDaEksS0FBSyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztpQkFDMUIsQ0FBQzs7b0NBQUE7WUFHRix1REFtSEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudCwgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHtDb250cm9sTWVzc2FnZXN9IGZyb20gJy4uL2hhbmRsZXJzL2NvbnRyb2wtbWVzc2FnZXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtEQVRFUElDS0VSX0RJUkVDVElWRVN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7RklMRV9VUExPQURfRElSRUNUSVZFUywgRmlsZVVwbG9hZGVyfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHsgVWlTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvVWlTdGF0ZVN0b3JlJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01kUmFkaW9Hcm91cCwgTWRSYWRpb0J1dHRvbn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHtNZFJhZGlvRGlzcGF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3JhZGlvL3JhZGlvX2Rpc3BhdGNoZXInO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01kUHJvZ3Jlc3NCYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQge01kUGF0dGVyblZhbGlkYXRvcixcclxuTWRNaW5WYWx1ZVZhbGlkYXRvcixcclxuTWROdW1iZXJSZXF1aXJlZFZhbGlkYXRvcixcclxuTWRNYXhWYWx1ZVZhbGlkYXRvciwgTUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbi8vaW1wb3J0IHtPVkVSTEFZX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2NvcmUvb3ZlcmxheS9vdmVybGF5JztcclxuaW1wb3J0IHtNZEljb24sIE1kSWNvblJlZ2lzdHJ5fSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaWNvbi9pY29uJztcclxuLy9pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZm9ybS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW01kUmFkaW9EaXNwYXRjaGVyLCBNZEljb25SZWdpc3RyeV0sXHJcbiAgICBob3N0OiB7ICdbaGlkZGVuXSc6ICdoaWRkZW4nIH0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVMsXHJcbiAgICAgICAgTWRSYWRpb0dyb3VwLCBNZFJhZGlvQnV0dG9uLCBNZEljb24sIE1kVG9vbGJhciwgQ29udHJvbE1lc3NhZ2VzLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBNZFByb2dyZXNzQmFyXSxcclxuICAgIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGVdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnRGb3JtQ29tcG9uZW50IHtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkZXI6IEZpbGVVcGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIoeyB1cmw6ICcvcGF0aWVudC91cGxvYWQnIH0pO1xyXG5cclxuICAgIHBhdGllbnRGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50OiBQYXRpZW50O1xyXG4gICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRoZWFkZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRsaXN0OiBhbnk7XHJcbiAgICBmb3JtVGl0bGU6IHN0cmluZztcclxuICAgIHN1Ym1pdEFjdGlvbjogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBhdmF0YXJEYXRhOiBhbnlbXSA9IFt7XHJcbiAgICAgICAgaWQ6ICdNJyxcclxuICAgICAgICB0aXRsZTogJ00nLFxyXG4gICAgICAgIHZhbHVlOiAnTScsXHJcbiAgICAgICAgY29sb3I6ICdtZC1wcmltYXJ5J1xyXG4gICAgfSwge1xyXG4gICAgICAgICAgICBpZDogJ0YnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0YnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ0YnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ21kLXdhcm4nXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBtZEljb25SZWdpc3RyeTogTWRJY29uUmVnaXN0cnksIHByaXZhdGUgcGF0aWVudFN0b3JlOiBQYXRpZW50U3RvcmUsIHByaXZhdGUgdWlTdGF0ZVN0b3JlOiBVaVN0YXRlU3RvcmUsIHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInVwbG9hZGVyXCIsIHRoaXMudXBsb2FkZXIpO1xyXG4gICAgICAgIG1kSWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ0YnLCAnYXNzZXRzL2ltYWdlcy9zdmcvaHVtYW4tZmVtYWxlLnN2ZycpO1xyXG4gICAgICAgIG1kSWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ00nLCAnYXNzZXRzL2ltYWdlcy9zdmcvaHVtYW4tbWFsZS5zdmcnKTtcclxuICAgICAgICB0aGlzLnBhdGllbnRGb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnZmlyc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAgICAgICAnbGFzdG5hbWUnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMClcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICAnZW1haWwnOiBbJycsIFZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gbmV3IFBhdGllbnQoMCwgJycsICcnLCAnJywgJ00nLCAnJywgJycsIG5ldyBEYXRlKCksICcnLCAnJywgJycsICcnLCAnJywgJycpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmdldEZvcm1BY3Rpb25DaGFuZ2VFbWl0dGVyKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShwYXRpZW50ID0+IHRoaXMub25Gb3JtQWN0aW9uQ2hhbmdlKHBhdGllbnQpKTtcclxuICAgIH1cclxuICAgIG9uRm9ybUFjdGlvbkNoYW5nZShwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gcGF0aWVudDtcclxuICAgICAgICBpZiAocGF0aWVudC5pZCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiQWRkIFBhdGllbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnYWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiRWRpdCBQYXRpZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2VkaXQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGF0aWVudChwYXRpZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy51cGxvYWRlci5xdWV1ZSAmJiB0aGlzLnVwbG9hZGVyLnF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZCBwaG90byB1cmxcIiwgdGhpcy51cGxvYWRlci5xdWV1ZVswXS5maWxlLm5hbWUpOyBcclxuICAgICAgICAgICBwYXRpZW50LnBob3RvID0gdGhpcy51cGxvYWRlci5xdWV1ZVswXS5maWxlLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBwYXRpZW50LnBob3RvID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuYWRkUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGF0aWVudChwYXRpZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy51cGxvYWRlci5xdWV1ZSAmJiB0aGlzLnVwbG9hZGVyLnF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZCBwaG90byB1cmxcIiwgdGhpcy51cGxvYWRlci5xdWV1ZVswXS5maWxlLm5hbWUpOyBcclxuICAgICAgICAgICBwYXRpZW50LnBob3RvID0gdGhpcy51cGxvYWRlci5xdWV1ZVswXS5maWxlLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBwYXRpZW50LnBob3RvID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUudXBkYXRlUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4geyB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGhlYWRlci5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRsaXN0LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHBhdGllbnQpIHsgXHJcbiAgICAgICAgLy8gcGF0aWVudC5iaXJ0aGRhdGUuc2V0SG91cnMoMTIpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEFjdGlvbiA9PSAnYWRkJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQocGF0aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
