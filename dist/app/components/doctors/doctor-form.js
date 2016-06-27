System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/DoctorBackendService', '../../services/notificationService', '../handlers/control-messages', '../../shared/services/validation.service', 'ng2-bootstrap/ng2-bootstrap', 'ng2-file-upload/ng2-file-upload', '../../shared/pipes/capitalize.pipe', '../state/DoctorStore', '../state/UiStateStore', '@angular2-material/input', '@angular2-material/radio', '@angular2-material/radio/radio_dispatcher', '@angular2-material/toolbar', '@angular2-material/progress-bar', "ng2-material/index", '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, DoctorBackendService_1, notificationService_1, control_messages_1, validation_service_1, ng2_bootstrap_1, ng2_file_upload_1, capitalize_pipe_1, DoctorStore_1, UiStateStore_1, input_1, radio_1, radio_dispatcher_1, toolbar_1, progress_bar_1, index_1, app_constants_1;
    var DoctorFormComponent;
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
            function (DoctorBackendService_1_1) {
                DoctorBackendService_1 = DoctorBackendService_1_1;
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
            function (DoctorStore_1_1) {
                DoctorStore_1 = DoctorStore_1_1;
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
            }],
        execute: function() {
            let DoctorFormComponent = class DoctorFormComponent {
                constructor(fb, doctorStore, uiStateStore, doctorService, notificationService) {
                    this.doctorStore = doctorStore;
                    this.uiStateStore = uiStateStore;
                    this.doctorService = doctorService;
                    this.notificationService = notificationService;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: '/doctor/upload' });
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
                    this.doctorForm = fb.group({
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
                    this.doctor = new DoctorBackendService_1.Doctor(0, '', '', '', 2016, '', 'M', '', '', new Date(), '', '', '');
                    this.subscription = this.notificationService.getFormActionChangeEmitter()
                        .subscribe(doctor => this.onFormActionChange(doctor));
                }
                onFormActionChange(doctor) {
                    console.log("onFormActionChange doctor", doctor);
                    this.doctor = doctor;
                    if (doctor.id == -1) {
                        this.formTitle = "Add Doctor";
                        this.submitAction = 'add';
                    }
                    else {
                        this.formTitle = "Edit Doctor";
                        this.submitAction = 'edit';
                    }
                }
                ngOnDestroy() {
                    this.subscription.unsubscribe();
                }
                addDoctor(doctor) {
                    this.doctorStore.addDoctor(doctor);
                    this.goBack();
                }
                updateDoctor(doctor) {
                    this.doctorStore.updateDoctor(doctor)
                        .subscribe(res => { }, err => {
                        this.uiStateStore.endBackendAction();
                    });
                    this.goBack();
                }
                goBack() {
                    this.hidden = true;
                    this.doctorheader.hidden = false;
                    this.doctorlist.hidden = false;
                }
                onSubmit(doctor) {
                    // doctor.birthdate.setHours(12);
                    if (this.submitAction == 'add') {
                        this.addDoctor(doctor);
                    }
                    else {
                        this.updateDoctor(doctor);
                    }
                    this.submitted = true;
                    this.goBack();
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', DoctorBackendService_1.Doctor)
            ], DoctorFormComponent.prototype, "doctor", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], DoctorFormComponent.prototype, "hidden", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DoctorFormComponent.prototype, "doctorheader", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DoctorFormComponent.prototype, "doctorlist", void 0);
            DoctorFormComponent = __decorate([
                core_1.Component({
                    selector: 'doctor-form',
                    templateUrl: 'app/components/doctors/doctor-form.html',
                    providers: [radio_dispatcher_1.MdRadioDispatcher],
                    host: { '[hidden]': 'hidden' },
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES,
                        radio_1.MdRadioGroup, radio_1.MdRadioButton, toolbar_1.MdToolbar, control_messages_1.ControlMessages, index_1.MATERIAL_DIRECTIVES, ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES, progress_bar_1.MdProgressBar],
                    pipes: [capitalize_pipe_1.CapitalizePipe]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, DoctorStore_1.DoctorStore, UiStateStore_1.UiStateStore, DoctorBackendService_1.DoctorBackendService, notificationService_1.NotificationService])
            ], DoctorFormComponent);
            exports_1("DoctorFormComponent", DoctorFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkErQkUsWUFBWSxFQUFlLEVBQVUsV0FBd0IsRUFBVSxZQUEwQixFQUFVLGFBQW1DLEVBQVUsbUJBQXdDO29CQUEzSixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7b0JBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkE5QjlMLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUV4QixhQUFRLEdBQWdCLElBQUksOEJBQVksQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7b0JBR2hFLFdBQU0sR0FBVyxJQUFJLENBQUM7b0JBTS9CLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBRWxCLFNBQUksR0FBUTt3QkFDUixNQUFNLEVBQUUsUUFBUTt3QkFDaEIsTUFBTSxFQUFFLEdBQUc7d0JBQ1gsTUFBTSxFQUFFLFVBQVU7cUJBQ25CLENBQUM7b0JBQ0osZUFBVSxHQUFVLENBQUM7NEJBQ2pCLEVBQUUsRUFBRSxxQkFBcUI7NEJBQ3pCLEtBQUssRUFBRSxNQUFNOzRCQUNiLEtBQUssRUFBRSxHQUFHOzRCQUNWLEtBQUssRUFBQyxZQUFZO3lCQUNyQixFQUFFOzRCQUNDLEVBQUUsRUFBRSxxQkFBcUI7NEJBQ3pCLEtBQUssRUFBRSxRQUFROzRCQUNmLEtBQUssRUFBRSxHQUFHOzRCQUNULEtBQUssRUFBQyxTQUFTO3lCQUNuQixDQUFDLENBQUM7b0JBSUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUN6QixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUcsbUJBQVUsQ0FB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b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixDQUFDO1lBSUwsQ0FBQztZQW5HRztnQkFBQyxZQUFLLEVBQUU7OytEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzsrREFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRzs7cUVBQUE7WUFDVDtnQkFBQyxZQUFLLEVBQUc7O21FQUFBO1lBbkJiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFdBQVcsRUFBRSx5Q0FBeUM7b0JBQ3RELFNBQVMsRUFBRSxDQUFDLG9DQUFpQixDQUFDO29CQUM5QixJQUFJLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDO29CQUM1QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFFLHFDQUFxQixFQUFFLHdCQUFlLEVBQUUsMkJBQW1CO3dCQUNsRyxvQkFBWSxFQUFFLHFCQUFhLEVBQUUsbUJBQVMsRUFBRSxrQ0FBZSxFQUFFLDJCQUFtQixFQUFFLHdDQUFzQixFQUFFLDRCQUFhLENBQUM7b0JBQzlILEtBQUssRUFBRSxDQUFDLGdDQUFjLENBQUM7aUJBQ3hCLENBQUM7O21DQUFBO1lBR0YscURBd0dDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kb2N0b3JzL2RvY3Rvci1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEb2N0b3IsIERvY3RvckJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvRG9jdG9yQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnRyb2xNZXNzYWdlc30gZnJvbSAnLi4vaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RBVEVQSUNLRVJfRElSRUNUSVZFU30gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHtGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBGaWxlVXBsb2FkZXJ9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBEb2N0b3JTdG9yZSB9IGZyb20gJy4uL3N0YXRlL0RvY3RvclN0b3JlJztcclxuaW1wb3J0IHsgVWlTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvVWlTdGF0ZVN0b3JlJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01kUmFkaW9Hcm91cCwgTWRSYWRpb0J1dHRvbn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHtNZFJhZGlvRGlzcGF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3JhZGlvL3JhZGlvX2Rpc3BhdGNoZXInO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01kUHJvZ3Jlc3NCYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xyXG5pbXBvcnQge01kUGF0dGVyblZhbGlkYXRvcixcclxuICBNZE1pblZhbHVlVmFsaWRhdG9yLFxyXG4gIE1kTnVtYmVyUmVxdWlyZWRWYWxpZGF0b3IsXHJcbiAgTWRNYXhWYWx1ZVZhbGlkYXRvciwgTUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcblxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdkb2N0b3ItZm9ybScsIFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItZm9ybS5odG1sJyxcclxuICBwcm92aWRlcnM6IFtNZFJhZGlvRGlzcGF0Y2hlcl0sXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVMsXHJcbiAgICAgICAgICAgIE1kUmFkaW9Hcm91cCwgTWRSYWRpb0J1dHRvbiwgTWRUb29sYmFyLCBDb250cm9sTWVzc2FnZXMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIEZJTEVfVVBMT0FEX0RJUkVDVElWRVMsIE1kUHJvZ3Jlc3NCYXJdLFxyXG4gIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGVdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3RvckZvcm1Db21wb25lbnQge1xyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgdXBsb2FkZXI6RmlsZVVwbG9hZGVyID0gbmV3IEZpbGVVcGxvYWRlcih7dXJsOiAnL2RvY3Rvci91cGxvYWQnfSk7XHJcbiAgICBkb2N0b3JGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBASW5wdXQoKSBkb2N0b3I6IERvY3RvcjtcclxuICAgIEBJbnB1dCgpIGhpZGRlbjpib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCAoKSBkb2N0b3JoZWFkZXI6IGFueTtcclxuICAgIEBJbnB1dCAoKSBkb2N0b3JsaXN0OiBhbnk7XHJcbiAgICBmb3JtVGl0bGU6IHN0cmluZztcclxuICAgIHN1Ym1pdEFjdGlvbjogc3RyaW5nO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgZGF0YTogYW55ID0ge1xyXG4gICAgICAgIGdyb3VwMTogJ0JhbmFuYScsXHJcbiAgICAgICAgZ3JvdXAyOiAnMicsXHJcbiAgICAgICAgZ3JvdXAzOiAnYXZhdGFyLTEnXHJcbiAgICAgIH07XHJcbiAgICBhdmF0YXJEYXRhOiBhbnlbXSA9IFt7XHJcbiAgICAgICAgaWQ6ICdhc3NldHMvaW1hZ2VzL20ucG5nJyxcclxuICAgICAgICB0aXRsZTogJ01hbGUnLFxyXG4gICAgICAgIHZhbHVlOiAnTScsXHJcbiAgICAgICAgY29sb3I6J21kLXByaW1hcnknXHJcbiAgICB9LCB7XHJcbiAgICAgICAgaWQ6ICdhc3NldHMvaW1hZ2VzL2YucG5nJyxcclxuICAgICAgICB0aXRsZTogJ0ZlbWFsZScsXHJcbiAgICAgICAgdmFsdWU6ICdGJyxcclxuICAgICAgICAgY29sb3I6J21kLXdhcm4nXHJcbiAgICB9XTtcclxuICAgXHJcbiAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGRvY3RvclN0b3JlOiBEb2N0b3JTdG9yZSwgcHJpdmF0ZSB1aVN0YXRlU3RvcmU6IFVpU3RhdGVTdG9yZSwgcHJpdmF0ZSBkb2N0b3JTZXJ2aWNlOiBEb2N0b3JCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlICkge1xyXG4gIFxyXG4gICAgdGhpcy5kb2N0b3JGb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAnZmlyc3RuYW1lJzogWycnLCAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgJ2xhc3RuYW1lJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXHJcbiAgICAgIF0pXSxcclxuICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0aW9uU2VydmljZS5lbWFpbFZhbGlkYXRvcl1cclxuICAgIH0pO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRvY3RvciA9IG5ldyBEb2N0b3IoMCwgJycsICcnLCAnJywgMjAxNiwgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKGRvY3RvciA9PiB0aGlzLm9uRm9ybUFjdGlvbkNoYW5nZShkb2N0b3IpKTsgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25Gb3JtQWN0aW9uQ2hhbmdlKGRvY3RvcjogRG9jdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkZvcm1BY3Rpb25DaGFuZ2UgZG9jdG9yXCIsIGRvY3Rvcik7XHJcbiAgICAgICAgdGhpcy5kb2N0b3IgPSBkb2N0b3I7XHJcbiAgICAgICAgaWYgKGRvY3Rvci5pZCA9PSAtMSkgeyAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuZm9ybVRpdGxlID0gXCJBZGQgRG9jdG9yXCI7XHJcbiAgICAgICAgICB0aGlzLnN1Ym1pdEFjdGlvbiA9ICdhZGQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybVRpdGxlID0gXCJFZGl0IERvY3RvclwiO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEFjdGlvbiA9ICdlZGl0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGREb2N0b3IoZG9jdG9yKSB7ICAgICAgIFxyXG4gICAgICAgIHRoaXMuZG9jdG9yU3RvcmUuYWRkRG9jdG9yKGRvY3RvcilcclxuICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVEb2N0b3IoZG9jdG9yKSB7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JTdG9yZS51cGRhdGVEb2N0b3IoZG9jdG9yKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpU3RhdGVTdG9yZS5lbmRCYWNrZW5kQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgZ29CYWNrKCkgeyAgICAgXHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZG9jdG9yaGVhZGVyLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG9jdG9ybGlzdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25TdWJtaXQoZG9jdG9yKSB7IFxyXG4gICAgICAgLy8gZG9jdG9yLmJpcnRoZGF0ZS5zZXRIb3VycygxMik7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VibWl0QWN0aW9uID09ICdhZGQnKSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmFkZERvY3RvciAoZG9jdG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURvY3Rvcihkb2N0b3IpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyBcclxuICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gXHJcbiBcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
