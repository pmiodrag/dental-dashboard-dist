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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBLDRDQUE0QztZQVk1QztnQkEyQkUsOEJBQVksRUFBZSxFQUFVLFlBQTBCLEVBQVUsWUFBMEIsRUFBVSxjQUFxQyxFQUFVLG1CQUF3QztvQkFBL0osaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQXVCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBeEJ6TCxXQUFNLEdBQVcsSUFBSSxDQUFDO29CQU0vQixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQUVsQixTQUFJLEdBQVE7d0JBQ1IsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLE1BQU0sRUFBRSxHQUFHO3dCQUNYLE1BQU0sRUFBRSxVQUFVO3FCQUNuQixDQUFDO29CQUNKLGVBQVUsR0FBVSxDQUFDOzRCQUNqQixFQUFFLEVBQUUscUJBQXFCOzRCQUN6QixLQUFLLEVBQUUsTUFBTTs0QkFDYixLQUFLLEVBQUUsR0FBRzs0QkFDVixLQUFLLEVBQUMsWUFBWTt5QkFDckIsRUFBRTs0QkFDQyxFQUFFLEVBQUUscUJBQXFCOzRCQUN6QixLQUFLLEVBQUUsUUFBUTs0QkFDZixLQUFLLEVBQUUsR0FBRzs0QkFDVCxLQUFLLEVBQUMsU0FBUzt5QkFDbkIsQ0FBQyxDQUFDO29CQUdILElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDMUIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFHLG1CQUFVLENBQUMsT0FBTyxDQUFDO2dDQUNwQyxtQkFBVSxDQUFDLFFBQVE7Z0NBQ25CLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQ0FDdkIsbUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ2xDLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QixtQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7NkJBQ3pCLENBQUMsQ0FBQzt3QkFDSCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsc0NBQWlCLENBQUMsY0FBYyxDQUFDO3FCQUNoRCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFHQyx1Q0FBUSxHQUFSO29CQUFBLGlCQUlDO29CQUhHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSwrQkFBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQy9FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLDBCQUEwQixFQUFFO3lCQUN0RSxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFDRCxpREFBa0IsR0FBbEIsVUFBbUIsT0FBZ0I7b0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7d0JBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUM1QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztvQkFDL0IsQ0FBQztnQkFDTCxDQUFDO2dCQUNELDBDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCx5Q0FBVSxHQUFWLFVBQVcsT0FBTztvQkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDckMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQUVELDRDQUFhLEdBQWIsVUFBYyxPQUFPO29CQUFyQixpQkFTQztvQkFSRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7eUJBQ25DLFNBQVMsQ0FDTixVQUFBLEdBQUcsSUFBSyxDQUFDLEVBQ1QsVUFBQSxHQUFHO3dCQUNDLEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztvQkFDekMsQ0FBQyxDQUNKLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHFDQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELHVDQUFRLEdBQVIsVUFBUyxPQUFPO29CQUNiLGtDQUFrQztvQkFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLENBQUMsVUFBVSxDQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUM5QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQztnQkE3RkQ7b0JBQUMsWUFBSyxFQUFFOztxRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O29FQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRzs7MkVBQUE7Z0JBQ1Q7b0JBQUMsWUFBSyxFQUFHOzt5RUFBQTtnQkFoQmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDMUQsdUNBQXVDO3dCQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQ0FBaUIsQ0FBQzt3QkFDOUIsSUFBSSxFQUFFLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQzt3QkFDNUIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSxxQ0FBcUIsRUFBRSx3QkFBZSxFQUFDLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG9CQUFZLEVBQUUscUJBQWEsRUFBRSxrQ0FBZSxFQUFFLDJCQUFtQixDQUFDO3dCQUMvSyxLQUFLLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUN4QixDQUFDOzt3Q0FBQTtnQkFvR0YsMkJBQUM7WUFBRCxDQWpHQSxBQWlHQyxJQUFBO1lBakdELHVEQWlHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbnRyb2xNZXNzYWdlc30gZnJvbSAnLi4vaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RBVEVQSUNLRVJfRElSRUNUSVZFU30gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHsgVWlTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvVWlTdGF0ZVN0b3JlJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01kUmFkaW9Hcm91cCwgTWRSYWRpb0J1dHRvbn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHtNZFJhZGlvRGlzcGF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3JhZGlvL3JhZGlvX2Rpc3BhdGNoZXInO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01kUGF0dGVyblZhbGlkYXRvcixcclxuICBNZE1pblZhbHVlVmFsaWRhdG9yLFxyXG4gIE1kTnVtYmVyUmVxdWlyZWRWYWxpZGF0b3IsXHJcbiAgTWRNYXhWYWx1ZVZhbGlkYXRvciwgTUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG4vL2ltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAnbmcyLWRhdGVwaWNrZXInO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdwYXRpZW50LWZvcm0nLCBcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZm9ybS5odG1sJyxcclxuLy8gIHByb3ZpZGVyczogW1BhdGllbnRCYWNrZW5kU2VydmljZV0sXHJcbiAgcHJvdmlkZXJzOiBbTWRSYWRpb0Rpc3BhdGNoZXJdLFxyXG4gIGhvc3Q6IHsnW2hpZGRlbl0nOiAnaGlkZGVuJ30sXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsUk9VVEVSX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVMsIE1kUmFkaW9Hcm91cCwgTWRSYWRpb0J1dHRvbiwgQ29udHJvbE1lc3NhZ2VzLCBNQVRFUklBTF9ESVJFQ1RJVkVTXSxcclxuICBwaXBlczogW0NhcGl0YWxpemVQaXBlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50Rm9ybUNvbXBvbmVudCB7XHJcbiAgICBwYXRpZW50Rm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgQElucHV0KCkgcGF0aWVudDogUGF0aWVudDtcclxuICAgIEBJbnB1dCgpIGhpZGRlbjpib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCAoKSBwYXRpZW50aGVhZGVyOiBhbnk7XHJcbiAgICBASW5wdXQgKCkgcGF0aWVudGxpc3Q6IGFueTtcclxuICAgIGZvcm1UaXRsZTogc3RyaW5nO1xyXG4gICAgc3VibWl0QWN0aW9uOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBkYXRhOiBhbnkgPSB7XHJcbiAgICAgICAgZ3JvdXAxOiAnQmFuYW5hJyxcclxuICAgICAgICBncm91cDI6ICcyJyxcclxuICAgICAgICBncm91cDM6ICdhdmF0YXItMSdcclxuICAgICAgfTtcclxuICAgIGF2YXRhckRhdGE6IGFueVtdID0gW3tcclxuICAgICAgICBpZDogJ2Fzc2V0cy9pbWFnZXMvbS5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnTWFsZScsXHJcbiAgICAgICAgdmFsdWU6ICdNJyxcclxuICAgICAgICBjb2xvcjonbWQtcHJpbWFyeSdcclxuICAgIH0sIHtcclxuICAgICAgICBpZDogJ2Fzc2V0cy9pbWFnZXMvZi5wbmcnLFxyXG4gICAgICAgIHRpdGxlOiAnRmVtYWxlJyxcclxuICAgICAgICB2YWx1ZTogJ0YnLFxyXG4gICAgICAgICBjb2xvcjonbWQtd2FybidcclxuICAgIH1dO1xyXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBwYXRpZW50U3RvcmU6IFBhdGllbnRTdG9yZSwgcHJpdmF0ZSB1aVN0YXRlU3RvcmU6IFVpU3RhdGVTdG9yZSwgcHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UgKSB7XHJcbiAgICBcclxuICAgIHRoaXMucGF0aWVudEZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICdmaXJzdG5hbWUnOiBbJycsICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAnbGFzdG5hbWUnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMClcclxuICAgICAgXSldLFxyXG4gICAgICAnZW1haWwnOiBbJycsIFZhbGlkYXRpb25TZXJ2aWNlLmVtYWlsVmFsaWRhdG9yXVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KDAsICcnLCAnJywgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHBhdGllbnQgPT4gdGhpcy5vbkZvcm1BY3Rpb25DaGFuZ2UocGF0aWVudCkpOyAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBvbkZvcm1BY3Rpb25DaGFuZ2UocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Gb3JtQWN0aW9uQ2hhbmdlIHBhdGllbnRcIiwgcGF0aWVudCk7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gcGF0aWVudDtcclxuICAgICAgICBpZiAocGF0aWVudC5pZCA9PSAtMSkgeyAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuZm9ybVRpdGxlID0gXCJBZGQgUGF0aWVudFwiO1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnYWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiRWRpdCBQYXRpZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2VkaXQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZFBhdGllbnQocGF0aWVudCkgeyAgICAgICBcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5hZGRQYXRpZW50KHBhdGllbnQpXHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlUGF0aWVudChwYXRpZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUudXBkYXRlUGF0aWVudChwYXRpZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpU3RhdGVTdG9yZS5lbmRCYWNrZW5kQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgZ29CYWNrKCkgeyAgICAgXHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGhlYWRlci5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRsaXN0LmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblN1Ym1pdChwYXRpZW50KSB7IFxyXG4gICAgICAgLy8gcGF0aWVudC5iaXJ0aGRhdGUuc2V0SG91cnMoMTIpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEFjdGlvbiA9PSAnYWRkJykgeyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5hZGRQYXRpZW50IChwYXRpZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhdGllbnQocGF0aWVudCk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IFxyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
