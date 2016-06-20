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
            PatientFormComponent = (function () {
                function PatientFormComponent(fb, mdIconRegistry, patientStore, uiStateStore, patientService, notificationService) {
                    this.patientStore = patientStore;
                    this.uiStateStore = uiStateStore;
                    this.patientService = patientService;
                    this.notificationService = notificationService;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: '/patient/upload' });
                    this.hidden = true;
                    this.submitted = false;
                    this.avatarData = [{
                            id: 'male',
                            title: 'Male',
                            value: 'M',
                            color: 'md-primary'
                        }, {
                            id: 'female',
                            title: 'Female',
                            value: 'F',
                            color: 'md-warn'
                        }];
                    //   console.log("uploader", this.uploader);
                    mdIconRegistry.addSvgIcon('female', 'assets/images/svg/human-female.svg');
                    mdIconRegistry.addSvgIcon('male', 'assets/images/svg/human-male.svg');
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
                return PatientFormComponent;
            }());
            exports_1("PatientFormComponent", PatientFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBLG1DQUFtQztZQVluQztnQkEyQkksOEJBQVksRUFBZSxFQUFFLGNBQThCLEVBQVUsWUFBMEIsRUFBVSxZQUEwQixFQUFVLGNBQXFDLEVBQVUsbUJBQXdDO29CQUEvSixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7b0JBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkExQnBPLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUV4QixhQUFRLEdBQWlCLElBQUksOEJBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBSXBFLFdBQU0sR0FBWSxJQUFJLENBQUM7b0JBTWhDLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBRWxCLGVBQVUsR0FBVSxDQUFDOzRCQUNqQixFQUFFLEVBQUUsTUFBTTs0QkFDVixLQUFLLEVBQUUsTUFBTTs0QkFDYixLQUFLLEVBQUUsR0FBRzs0QkFDVixLQUFLLEVBQUUsWUFBWTt5QkFDdEIsRUFBRTs0QkFDSyxFQUFFLEVBQUUsUUFBUTs0QkFDWixLQUFLLEVBQUUsUUFBUTs0QkFDZixLQUFLLEVBQUUsR0FBRzs0QkFDVixLQUFLLEVBQUUsU0FBUzt5QkFDbkIsQ0FBQyxDQUFDO29CQUdILDRDQUE0QztvQkFDNUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztvQkFDMUUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFF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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnRyb2xNZXNzYWdlc30gZnJvbSAnLi4vaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RBVEVQSUNLRVJfRElSRUNUSVZFU30gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBGaWxlVXBsb2FkZXJ9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBQYXRpZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7TWRSYWRpb0dyb3VwLCBNZFJhZGlvQnV0dG9ufSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQge01kUmFkaW9EaXNwYXRjaGVyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvcmFkaW8vcmFkaW9fZGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TWRQcm9ncmVzc0Jhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Byb2dyZXNzLWJhcic7XHJcbmltcG9ydCB7TWRQYXR0ZXJuVmFsaWRhdG9yLFxyXG5NZE1pblZhbHVlVmFsaWRhdG9yLFxyXG5NZE51bWJlclJlcXVpcmVkVmFsaWRhdG9yLFxyXG5NZE1heFZhbHVlVmFsaWRhdG9yLCBNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHtPVkVSTEFZX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2NvcmUvb3ZlcmxheS9vdmVybGF5JztcclxuaW1wb3J0IHtNZEljb24sIE1kSWNvblJlZ2lzdHJ5fSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaWNvbi9pY29uJztcclxuLy9pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZm9ybS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW01kUmFkaW9EaXNwYXRjaGVyLCBNZEljb25SZWdpc3RyeSwgT1ZFUkxBWV9QUk9WSURFUlNdLFxyXG4gICAgaG9zdDogeyAnW2hpZGRlbl0nOiAnaGlkZGVuJyB9LFxyXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIERBVEVQSUNLRVJfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBNRF9JTlBVVF9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIE1kUmFkaW9Hcm91cCwgTWRSYWRpb0J1dHRvbiwgTWRJY29uLCBNZFRvb2xiYXIsIENvbnRyb2xNZXNzYWdlcywgTUFURVJJQUxfRElSRUNUSVZFUywgRklMRV9VUExPQURfRElSRUNUSVZFUywgTWRQcm9ncmVzc0Jhcl0sXHJcbiAgICBwaXBlczogW0NhcGl0YWxpemVQaXBlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50Rm9ybUNvbXBvbmVudCB7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcblxyXG4gICAgcHVibGljIHVwbG9hZGVyOiBGaWxlVXBsb2FkZXIgPSBuZXcgRmlsZVVwbG9hZGVyKHsgdXJsOiAnL3BhdGllbnQvdXBsb2FkJyB9KTtcclxuXHJcbiAgICBwYXRpZW50Rm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgQElucHV0KCkgcGF0aWVudDogUGF0aWVudDtcclxuICAgIEBJbnB1dCgpIGhpZGRlbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50aGVhZGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50bGlzdDogYW55O1xyXG4gICAgZm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJtaXRBY3Rpb246IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvbjogYW55O1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgYXZhdGFyRGF0YTogYW55W10gPSBbe1xyXG4gICAgICAgIGlkOiAnbWFsZScsXHJcbiAgICAgICAgdGl0bGU6ICdNYWxlJyxcclxuICAgICAgICB2YWx1ZTogJ00nLFxyXG4gICAgICAgIGNvbG9yOiAnbWQtcHJpbWFyeSdcclxuICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6ICdmZW1hbGUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0ZlbWFsZScsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnRicsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnbWQtd2FybidcclxuICAgICAgICB9XTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIG1kSWNvblJlZ2lzdHJ5OiBNZEljb25SZWdpc3RyeSwgcHJpdmF0ZSBwYXRpZW50U3RvcmU6IFBhdGllbnRTdG9yZSwgcHJpdmF0ZSB1aVN0YXRlU3RvcmU6IFVpU3RhdGVTdG9yZSwgcHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwidXBsb2FkZXJcIiwgdGhpcy51cGxvYWRlcik7XHJcbiAgICAgICAgbWRJY29uUmVnaXN0cnkuYWRkU3ZnSWNvbignZmVtYWxlJywgJ2Fzc2V0cy9pbWFnZXMvc3ZnL2h1bWFuLWZlbWFsZS5zdmcnKTtcclxuICAgICAgICBtZEljb25SZWdpc3RyeS5hZGRTdmdJY29uKCdtYWxlJywgJ2Fzc2V0cy9pbWFnZXMvc3ZnL2h1bWFuLW1hbGUuc3ZnJyk7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50Rm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICAgJ2ZpcnN0bmFtZSc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgICAgICAgJ2xhc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KDAsICcnLCAnJywgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocGF0aWVudCA9PiB0aGlzLm9uRm9ybUFjdGlvbkNoYW5nZShwYXRpZW50KSk7XHJcbiAgICB9XHJcbiAgICBvbkZvcm1BY3Rpb25DaGFuZ2UocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Gb3JtQWN0aW9uQ2hhbmdlIHBhdGllbnRcIiwgcGF0aWVudCk7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gcGF0aWVudDtcclxuICAgICAgICBpZiAocGF0aWVudC5pZCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiQWRkIFBhdGllbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnYWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiRWRpdCBQYXRpZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2VkaXQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGF0aWVudChwYXRpZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuYWRkUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGF0aWVudChwYXRpZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUudXBkYXRlUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4geyB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGhlYWRlci5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRsaXN0LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHBhdGllbnQpIHsgXHJcbiAgICAgICAgLy8gcGF0aWVudC5iaXJ0aGRhdGUuc2V0SG91cnMoMTIpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEFjdGlvbiA9PSAnYWRkJykge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFBhdGllbnQocGF0aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
