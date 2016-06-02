System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../handlers/control-messages', '../../shared/services/validation.service', 'ng2-bootstrap/ng2-bootstrap', '../../shared/pipes/capitalize.pipe', '../state/PatientStore', '../state/UiStateStore', '@angular2-material/input', '@angular2-material/radio', '@angular2-material/radio/radio_dispatcher', "ng2-material/index"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, control_messages_1, validation_service_1, ng2_bootstrap_1, capitalize_pipe_1, PatientStore_1, UiStateStore_1, input_1, radio_1, radio_dispatcher_1, index_1;
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
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            //import {DatePicker} from 'ng2-datepicker';
            PatientFormComponent = (function () {
                function PatientFormComponent(fb, patientStore, uiStateStore, patientService, notificationService) {
                    this.patientStore = patientStore;
                    this.uiStateStore = uiStateStore;
                    this.patientService = patientService;
                    this.notificationService = notificationService;
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
                    var _this = this;
                    this.uiStateStore.startBackendAction('Saving Todo...');
                    this.patientStore.addPatient(patient)
                        .subscribe(function (res) { }, function (err) {
                        _this.uiStateStore.endBackendAction();
                    });
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
                    console.log("patient.birthdate", patient.birthdate);
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
                        //  providers: [PatientBackendService],
                        providers: [radio_dispatcher_1.MdRadioDispatcher],
                        host: { '[hidden]': 'hidden' },
                        directives: [common_1.CORE_DIRECTIVES, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, radio_1.MdRadioGroup, radio_1.MdRadioButton, control_messages_1.ControlMessages, index_1.MATERIAL_DIRECTIVES],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBLDRDQUE0QztZQVk1QztnQkE2QkUsOEJBQVksRUFBZSxFQUFVLFlBQTBCLEVBQVUsWUFBMEIsRUFBVSxjQUFxQyxFQUFVLG1CQUF3QztvQkFBL0osaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQXVCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBMUJ6TCxXQUFNLEdBQVcsSUFBSSxDQUFDO29CQVEvQixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQUVsQixTQUFJLEdBQVE7d0JBQ1IsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLE1BQU0sRUFBRSxHQUFHO3dCQUNYLE1BQU0sRUFBRSxVQUFVO3FCQUNuQixDQUFDO29CQUNKLGVBQVUsR0FBVSxDQUFDOzRCQUNqQixFQUFFLEVBQUUscUJBQXFCOzRCQUN6QixLQUFLLEVBQUUsTUFBTTs0QkFDYixLQUFLLEVBQUUsR0FBRzs0QkFDVixLQUFLLEVBQUMsWUFBWTt5QkFDckIsRUFBRTs0QkFDQyxFQUFFLEVBQUUscUJBQXFCOzRCQUN6QixLQUFLLEVBQUUsUUFBUTs0QkFDZixLQUFLLEVBQUUsR0FBRzs0QkFDVCxLQUFLLEVBQUMsU0FBUzt5QkFDbkIsQ0FBQyxDQUFDO29CQUdILElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDMUIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFHLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNwQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQ0FDdkIsbUJBQVUsQ0FBQyxTQUFT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b21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUGF0aWVudCwgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHtDb250cm9sTWVzc2FnZXN9IGZyb20gJy4uL2hhbmRsZXJzL2NvbnRyb2wtbWVzc2FnZXMnO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtEQVRFUElDS0VSX0RJUkVDVElWRVN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUucGlwZSc7XHJcbmltcG9ydCB7IFBhdGllbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1BhdGllbnRTdG9yZSc7XHJcbmltcG9ydCB7IFVpU3RhdGVTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1VpU3RhdGVTdG9yZSc7XHJcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtNZFJhZGlvR3JvdXAsIE1kUmFkaW9CdXR0b259IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpbyc7XHJcbmltcG9ydCB7TWRSYWRpb0Rpc3BhdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9yYWRpby9yYWRpb19kaXNwYXRjaGVyJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNZFBhdHRlcm5WYWxpZGF0b3IsXHJcbiAgTWRNaW5WYWx1ZVZhbGlkYXRvcixcclxuICBNZE51bWJlclJlcXVpcmVkVmFsaWRhdG9yLFxyXG4gIE1kTWF4VmFsdWVWYWxpZGF0b3IsIE1BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuLy9pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gJ25nMi1kYXRlcGlja2VyJztcclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAncGF0aWVudC1mb3JtJywgXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWZvcm0uaHRtbCcsXHJcbi8vICBwcm92aWRlcnM6IFtQYXRpZW50QmFja2VuZFNlcnZpY2VdLFxyXG4gIHByb3ZpZGVyczogW01kUmFkaW9EaXNwYXRjaGVyXSxcclxuICBob3N0OiB7J1toaWRkZW5dJzogJ2hpZGRlbid9LFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIERBVEVQSUNLRVJfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLFJPVVRFUl9ESVJFQ1RJVkVTLCBNRF9JTlBVVF9ESVJFQ1RJVkVTLCBNZFJhZGlvR3JvdXAsIE1kUmFkaW9CdXR0b24sIENvbnRyb2xNZXNzYWdlcywgTUFURVJJQUxfRElSRUNUSVZFU10sXHJcbiAgcGlwZXM6IFtDYXBpdGFsaXplUGlwZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudEZvcm1Db21wb25lbnQge1xyXG4gICAgcGF0aWVudEZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIEBJbnB1dCgpIHBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQgKCkgcGF0aWVudGhlYWRlcjogYW55O1xyXG4gICAgQElucHV0ICgpIHBhdGllbnRsaXN0OiBhbnk7XHJcbiAgICAgLy8gRGF0ZSBhbmQgdGltZSBwcm9wZXJ0aWVzXHJcbiAvLyAgIGJpcnRoZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBmb3JtVGl0bGU6IHN0cmluZztcclxuICAgIHN1Ym1pdEFjdGlvbjogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgZGF0YTogYW55ID0ge1xyXG4gICAgICAgIGdyb3VwMTogJ0JhbmFuYScsXHJcbiAgICAgICAgZ3JvdXAyOiAnMicsXHJcbiAgICAgICAgZ3JvdXAzOiAnYXZhdGFyLTEnXHJcbiAgICAgIH07XHJcbiAgICBhdmF0YXJEYXRhOiBhbnlbXSA9IFt7XHJcbiAgICAgICAgaWQ6ICdhc3NldHMvaW1hZ2VzL20ucG5nJyxcclxuICAgICAgICB0aXRsZTogJ01hbGUnLFxyXG4gICAgICAgIHZhbHVlOiAnTScsXHJcbiAgICAgICAgY29sb3I6J21kLXByaW1hcnknXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6ICdhc3NldHMvaW1hZ2VzL2YucG5nJyxcclxuICAgICAgICB0aXRsZTogJ0ZlbWFsZScsXHJcbiAgICAgICAgdmFsdWU6ICdGJyxcclxuICAgICAgICAgY29sb3I6J21kLXdhcm4nXHJcbiAgICB9XTtcclxuICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcGF0aWVudFN0b3JlOiBQYXRpZW50U3RvcmUsIHByaXZhdGUgdWlTdGF0ZVN0b3JlOiBVaVN0YXRlU3RvcmUsIHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlICkge1xyXG4gICAgXHJcbiAgICB0aGlzLnBhdGllbnRGb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAnZmlyc3RuYW1lJzogWycnLCAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgJ2xhc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgIF0pXSxcclxuICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhdGllbnQgPSBuZXcgUGF0aWVudCgwLCAnJywgJycsICcnLCAnTScsICcnLCAnJywgbmV3IERhdGUoKSwgJycsICcnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0Rm9ybUFjdGlvbkNoYW5nZUVtaXR0ZXIoKVxyXG4gICAgICAgICAgLnN1YnNjcmliZShwYXRpZW50ID0+IHRoaXMub25Gb3JtQWN0aW9uQ2hhbmdlKHBhdGllbnQpKTsgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25Gb3JtQWN0aW9uQ2hhbmdlKHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uRm9ybUFjdGlvbkNoYW5nZSBwYXRpZW50XCIsIHBhdGllbnQpO1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IHBhdGllbnQ7XHJcbiAgICAgICAgaWYgKHBhdGllbnQuaWQgPT0gLTEpIHsgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiQWRkIFBhdGllbnRcIjtcclxuICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2FkZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkVkaXQgUGF0aWVudFwiO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEFjdGlvbiA9ICdlZGl0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRQYXRpZW50KHBhdGllbnQpIHtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMudWlTdGF0ZVN0b3JlLnN0YXJ0QmFja2VuZEFjdGlvbignU2F2aW5nIFRvZG8uLi4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuYWRkUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpU3RhdGVTdG9yZS5lbmRCYWNrZW5kQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZVBhdGllbnQocGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLnVwZGF0ZVBhdGllbnQocGF0aWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIGdvQmFjaygpIHsgICAgIFxyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRoZWFkZXIuaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50bGlzdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25TdWJtaXQocGF0aWVudCkgeyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhdGllbnQuYmlydGhkYXRlXCIsIHBhdGllbnQuYmlydGhkYXRlKTtcclxuICAgICAgIC8vIHBhdGllbnQuYmlydGhkYXRlLnNldEhvdXJzKDEyKTtcclxuICAgICAgICBpZiAodGhpcy5zdWJtaXRBY3Rpb24gPT0gJ2FkZCcpIHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYWRkUGF0aWVudCAocGF0aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyBcclxuICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
