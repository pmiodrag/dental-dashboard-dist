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
                    this.patientFormPage = PatientStore_1.PatientFormPage;
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
                    mdIconRegistry.addSvgIcon('identification-card', 'assets/images/svg/account-card-details.svg');
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
                    patient.birthdate.setHours(12);
                    if (this.submitAction == 'add') {
                        this.addPatient(patient);
                    }
                    else {
                        this.updatePatient(patient);
                    }
                    this.submitted = true;
                    this.goBack();
                }
                setPatientFormPage(page) {
                    this.patientStore.setPatientFormPage(page);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBLG1DQUFtQztZQWFuQztnQkEyQkksWUFBWSxFQUFlLEVBQUUsY0FBOEIsRUFBVSxZQUEwQixFQUFVLFlBQTBCLEVBQVUsY0FBcUMsRUFBVSxtQkFBd0M7b0JBQS9KLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtvQkFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQTFCcE8sY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBQ3hCLG9CQUFlLEdBQUcsOEJBQWUsQ0FBQztvQkFDbEMsYUFBUSxHQUFpQixJQUFJLDhCQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUlwRSxXQUFNLEdBQVksSUFBSSxDQUFDO29CQU1oQyxjQUFTLEdBQUcsS0FBSyxDQUFDO29CQUVsQixlQUFVLEdBQVUsQ0FBQzs0QkFDakIsRUFBRSxFQUFFLEdBQUc7NEJBQ1AsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsS0FBSyxFQUFFLFlBQVk7eUJBQ3RCLEVBQUU7NEJBQ0ssRUFBRSxFQUFFLEdBQUc7NEJBQ1AsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsS0FBSyxFQUFFLEdBQUc7NEJBQ1YsS0FBSyxFQUFFLFNBQVM7eUJBQ25CLENBQUMsQ0FBQztvQkFHSCw0Q0FBNEM7b0JBQzVDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLG9DQUFvQyxDQUFDLENBQUM7b0JBQ3JFLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7b0JBQ25F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QUMsQ0FBQztvQkFDN0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxDQUFDO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7Z0JBRUQsa0JBQWtCLENBQUMsSUFBcUI7b0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLENBQUM7WUFHTCxDQUFDO1lBakhHO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O2dFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt1RUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7cUVBQUE7WUFwQlo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsV0FBVyxFQUFFLDJDQUEyQztvQkFDeEQsU0FBUyxFQUFFLENBQUMsb0NBQWlCLEVBQUUscUJBQWMsQ0FBQztvQkFDOUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtvQkFDOUIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSxxQ0FBcUIsRUFBRSx3QkFBZSxFQUFFLDJCQUFtQjt3QkFDeEcsb0JBQVksRUFBRSxxQkFBYSxFQUFFLGFBQU0sRUFBRSxtQkFBUyxFQUFFLGtDQUFlLEVBQUUsMkJBQW1CLEVBQUUsd0NBQXNCLEVBQUUsNEJBQWEsQ0FBQztvQkFDaEksS0FBSyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztpQkFDMUIsQ0FBQzs7b0NBQUE7WUFHRix1REF1SEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudCwgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHtDb250cm9sTWVzc2FnZXN9IGZyb20gJy4uL2hhbmRsZXJzL2NvbnRyb2wtbWVzc2FnZXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtEQVRFUElDS0VSX0RJUkVDVElWRVN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7RklMRV9VUExPQURfRElSRUNUSVZFUywgRmlsZVVwbG9hZGVyfSBmcm9tICduZzItZmlsZS11cGxvYWQvbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgUGF0aWVudEZvcm1QYWdlLCBQYXRpZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWRSYWRpb0dyb3VwLCBNZFJhZGlvQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQge01kUmFkaW9EaXNwYXRjaGVyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8vcmFkaW9fZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TWRQcm9ncmVzc0Jhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCB7TWRQYXR0ZXJuVmFsaWRhdG9yLFxyXG5NZE1pblZhbHVlVmFsaWRhdG9yLFxyXG5NZE51bWJlclJlcXVpcmVkVmFsaWRhdG9yLFxyXG5NZE1heFZhbHVlVmFsaWRhdG9yLCBNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuLy9pbXBvcnQge09WRVJMQVlfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvY29yZS9vdmVybGF5L292ZXJsYXknO1xyXG5pbXBvcnQge01kSWNvbiwgTWRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pY29uL2ljb24nO1xyXG4vL2ltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZm9ybS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW01kUmFkaW9EaXNwYXRjaGVyLCBNZEljb25SZWdpc3RyeV0sXHJcbiAgICBob3N0OiB7ICdbaGlkZGVuXSc6ICdoaWRkZW4nIH0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVMsXHJcbiAgICAgICAgTWRSYWRpb0dyb3VwLCBNZFJhZGlvQnV0dG9uLCBNZEljb24sIE1kVG9vbGJhciwgQ29udHJvbE1lc3NhZ2VzLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBNZFByb2dyZXNzQmFyXSxcclxuICAgIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGVdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnRGb3JtQ29tcG9uZW50IHtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIHB1YmxpYyBwYXRpZW50Rm9ybVBhZ2UgPSBQYXRpZW50Rm9ybVBhZ2U7ICAgICBcclxuICAgIHB1YmxpYyB1cGxvYWRlcjogRmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7IHVybDogJy9wYXRpZW50L3VwbG9hZCcgfSk7XHJcblxyXG4gICAgcGF0aWVudEZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIEBJbnB1dCgpIHBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcGF0aWVudGhlYWRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcGF0aWVudGxpc3Q6IGFueTtcclxuICAgIGZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgc3VibWl0QWN0aW9uOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGF2YXRhckRhdGE6IGFueVtdID0gW3tcclxuICAgICAgICBpZDogJ00nLFxyXG4gICAgICAgIHRpdGxlOiAnTScsXHJcbiAgICAgICAgdmFsdWU6ICdNJyxcclxuICAgICAgICBjb2xvcjogJ21kLXByaW1hcnknXHJcbiAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiAnRicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnRicsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnRicsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnbWQtd2FybidcclxuICAgICAgICB9XTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIG1kSWNvblJlZ2lzdHJ5OiBNZEljb25SZWdpc3RyeSwgcHJpdmF0ZSBwYXRpZW50U3RvcmU6IFBhdGllbnRTdG9yZSwgcHJpdmF0ZSB1aVN0YXRlU3RvcmU6IFVpU3RhdGVTdG9yZSwgcHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwidXBsb2FkZXJcIiwgdGhpcy51cGxvYWRlcik7XHJcbiAgICAgICAgbWRJY29uUmVnaXN0cnkuYWRkU3ZnSWNvbignRicsICdhc3NldHMvaW1hZ2VzL3N2Zy9odW1hbi1mZW1hbGUuc3ZnJyk7XHJcbiAgICAgICAgbWRJY29uUmVnaXN0cnkuYWRkU3ZnSWNvbignTScsICdhc3NldHMvaW1hZ2VzL3N2Zy9odW1hbi1tYWxlLnN2ZycpO1xyXG4gICAgICAgIG1kSWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ2lkZW50aWZpY2F0aW9uLWNhcmQnLCAnYXNzZXRzL2ltYWdlcy9zdmcvYWNjb3VudC1jYXJkLWRldGFpbHMuc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50Rm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2ZpcnN0bmFtZSc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgICAgICAgJ2xhc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KDAsICcnLCAnJywgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGF0aWVudCA9PiB0aGlzLm9uRm9ybUFjdGlvbkNoYW5nZShwYXRpZW50KSk7XHJcbiAgICB9XHJcbiAgICBvbkZvcm1BY3Rpb25DaGFuZ2UocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IHBhdGllbnQ7XHJcbiAgICAgICAgaWYgKHBhdGllbnQuaWQgPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkFkZCBQYXRpZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2FkZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkVkaXQgUGF0aWVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEFjdGlvbiA9ICdlZGl0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBhdGllbnQocGF0aWVudCkge1xyXG4gICAgICAgIGlmKHRoaXMudXBsb2FkZXIucXVldWUgJiYgdGhpcy51cGxvYWRlci5xdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGxvYWQgcGhvdG8gdXJsXCIsIHRoaXMudXBsb2FkZXIucXVldWVbMF0uZmlsZS5uYW1lKTsgXHJcbiAgICAgICAgICAgcGF0aWVudC5waG90byA9IHRoaXMudXBsb2FkZXIucXVldWVbMF0uZmlsZS5uYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgcGF0aWVudC5waG90byA9IFwiXCI7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuYWRkUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGF0aWVudChwYXRpZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy51cGxvYWRlci5xdWV1ZSAmJiB0aGlzLnVwbG9hZGVyLnF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwbG9hZCBwaG90byB1cmxcIiwgdGhpcy51cGxvYWRlci5xdWV1ZVswXS5maWxlLm5hbWUpOyBcclxuICAgICAgICAgICBwYXRpZW50LnBob3RvID0gdGhpcy51cGxvYWRlci5xdWV1ZVswXS5maWxlLm5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBwYXRpZW50LnBob3RvID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUudXBkYXRlUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4geyB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGhlYWRlci5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRsaXN0LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHBhdGllbnQpIHsgXHJcbiAgICAgICAgcGF0aWVudC5iaXJ0aGRhdGUuc2V0SG91cnMoMTIpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEFjdGlvbiA9PSAnYWRkJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQocGF0aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0UGF0aWVudEZvcm1QYWdlKHBhZ2U6IFBhdGllbnRGb3JtUGFnZSkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLnNldFBhdGllbnRGb3JtUGFnZShwYWdlKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
