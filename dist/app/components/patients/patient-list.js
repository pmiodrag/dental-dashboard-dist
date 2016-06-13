System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../../shared/sorter', './filterTextbox.component', '../../shared/directives/sortby.directive', '../../shared/pipes/capitalize.pipe', '../../shared/pipes/trim.pipe', '../../shared/pipes/values.pipe', "ng2-material/index", "@angular/common/src/facade/async", '../state/PatientStore', '@angular2-material/toolbar', 'immutable', "rxjs/Rx", '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, values_pipe_1, index_1, async_1, PatientStore_1, toolbar_1, immutable_1, Rx, app_constants_1;
    var PatientList;
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
            function (sorter_1_1) {
                sorter_1 = sorter_1_1;
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
            function (values_pipe_1_1) {
                values_pipe_1 = values_pipe_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (PatientStore_1_1) {
                PatientStore_1 = PatientStore_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            PatientList = (function () {
                function PatientList(patientService, notificationService, patientStore) {
                    this.patientService = patientService;
                    this.notificationService = notificationService;
                    this.patientStore = patientStore;
                    /**
                    * True to show the source code for the example
                    */
                    this.showSource = false;
                    this.showTabs = false;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.filteredPatients = [];
                    this.hidden = false;
                    this.selectedChange = new core_1.EventEmitter();
                    this._patients = new Rx.BehaviorSubject(immutable_1.List([]));
                }
                PatientList.prototype.ngOnInit = function () {
                    this.title = 'Patients';
                    this.filterText = 'Filter Patients:';
                    this.listDisplayModeEnabled = false;
                    this.sorter = new sorter_1.Sorter();
                };
                PatientList.prototype.deletePatient = function (patient) {
                    this.patientStore.deletePatient(patient);
                };
                PatientList.prototype.editPatient = function (patient) {
                    this.selectedChange.next(patient);
                    this.hidden = true;
                    this.patientheader.hidden = true;
                    this.patientform.hidden = false;
                    this.formAction(patient);
                };
                PatientList.prototype.formAction = function (patient) {
                    // console.log('formAction ' + action);
                    this.notificationService.emitFormActionChangeEvent(patient);
                };
                PatientList.prototype.showCardView = function (show) {
                    this.patientStore.changeView(show);
                };
                PatientList.prototype.filterChanged = function (data) {
                    if (data) {
                        data = data.toUpperCase();
                        this.patientStore.filterData(data);
                    }
                };
                PatientList.prototype.sort = function (prop) {
                    //Check for complex type such as 'state.name'
                    if (prop && prop.indexOf('.')) {
                    }
                    this.sorter.sort(this.filteredPatients, prop);
                };
                PatientList.prototype.toggleSource = function (id) {
                    var _this = this;
                    this.toggleID = id;
                    if (this.showSource) {
                        this.showTabs = false;
                        async_1.TimerWrapper.setTimeout(function () {
                            _this.showSource = false;
                        }, 500);
                    }
                    else {
                        this.showSource = true;
                        async_1.TimerWrapper.setTimeout(function () {
                            _this.showTabs = true;
                        }, 25);
                    }
                };
                PatientList.prototype.change = function (data) {
                    var patientsSelected = [];
                    // let p = this.patientStore.patients.map(patient => console.log("patient", patient));
                    this.patientStore.patients.forEach(function (patients) {
                        console.log("patients", patients, data);
                        patients.forEach(function (patient) {
                            console.log("patient", patient);
                            if (data.values.indexOf(patient.id) !== -1) {
                                patientsSelected.push(patient.id);
                                console.log("patientsSelected", patientsSelected);
                            }
                        });
                        //     
                    });
                    this.selection = patientsSelected.join(', ');
                    this.count = patientsSelected.length;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PatientList.prototype, "listDisplayModeEnabled", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PatientList.prototype, "hidden", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], PatientList.prototype, "patients", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', PatientBackendService_1.Patient)
                ], PatientList.prototype, "selected", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientList.prototype, "patientheader", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientList.prototype, "patientform", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], PatientList.prototype, "selectedChange", void 0);
                PatientList = __decorate([
                    core_1.Component({
                        selector: 'patient-list',
                        // providers: [PatientService],
                        templateUrl: 'app/components/patients/patient-list.html',
                        host: { '[hidden]': 'hidden' },
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, filterTextbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective],
                        pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe, values_pipe_1.ValuesPipe]
                    }), 
                    __metadata('design:paramtypes', [PatientBackendService_1.PatientBackendService, notificationService_1.NotificationService, PatientStore_1.PatientStore])
                ], PatientList);
                return PatientList;
            }());
            exports_1("PatientList", PatientList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQXVCRSxxQkFBb0IsY0FBcUMsRUFBVSxtQkFBd0MsRUFBVSxZQUEwQjtvQkFBM0gsbUJBQWMsR0FBZCxjQUFjLENBQXVCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBdEI5STs7c0JBRUU7b0JBQ0ksZUFBVSxHQUFZLEtBQUssQ0FBQztvQkFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFDaEMsY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBS2pDLHFCQUFnQixHQUFjLEVBQUUsQ0FBQztvQkFHeEIsV0FBTSxHQUFXLEtBQUssQ0FBQztvQkFLdEIsbUJBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBR3pELGNBQVMsR0FBc0MsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMkQsQ0FBQztnQkFFcEosOEJBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztvQkFDckMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO2dCQUM3QixDQUFDO2dCQUNELG1DQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0QsaUNBQVcsR0FBWCxVQUFhLE9BQWdCO29CQUN6QixJQUFJLENBQUMs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QkFDVixPQUFPO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFDdkMsQ0FBQztnQkF0RkQ7b0JBQUMsWUFBSyxFQUFFOzsyRUFBQTtnQkFJUjtvQkFBQyxZQUFLLEVBQUU7OzJEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NkRBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs2REFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O2tFQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7Z0VBQUE7Z0JBQ1I7b0JBQUMsYUFBTSxFQUFFOzttRUFBQTtnQkE3Qlg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsY0FBYzt3QkFDekIsK0JBQStCO3dCQUM5QixXQUFXLEVBQUUsMkNBQTJDO3dCQUN4RCxJQUFJLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDO3dCQUM1QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsZ0RBQXNCLEVBQUUsa0NBQWUsQ0FBQzt3QkFDekgsS0FBSyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxvQkFBUSxFQUFFLHdCQUFVLENBQUM7cUJBQzlDLENBQUM7OytCQUFBO2dCQXFHRixrQkFBQztZQUFELENBbEdBLEFBa0dDLElBQUE7WUFsR0QscUNBa0dDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBhdGllbnQsIFBhdGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5pbXBvcnQgeyBWYWx1ZXNQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3ZhbHVlcy5waXBlJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBJVGFibGVTZWxlY3Rpb25DaGFuZ2V9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgUGF0aWVudEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3BhdGllbnQtZm9ybSdcclxuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gXCJAYW5ndWxhci9jb21tb24vc3JjL2ZhY2FkZS9hc3luY1wiO1xyXG5pbXBvcnQgeyBQYXRpZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi4vc3RhdGUvYXNPYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAncGF0aWVudC1saXN0JywgXHJcbiAvLyBwcm92aWRlcnM6IFtQYXRpZW50U2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWxpc3QuaHRtbCcsXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyLCBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50LCBTb3J0QnlEaXJlY3RpdmVdLFxyXG4gIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGUsIFRyaW1QaXBlLCBWYWx1ZXNQaXBlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50TGlzdCB7XHJcbiAgIC8qKlxyXG4gICAqIFRydWUgdG8gc2hvdyB0aGUgc291cmNlIGNvZGUgZm9yIHRoZSBleGFtcGxlXHJcbiAgICovXHJcbiAgcHVibGljIHNob3dTb3VyY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHNob3dUYWJzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b2dnbGVJRDogbnVtYmVyO1xyXG4gIGZpbHRlclRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBsaXN0RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuOyBcclxuICBmaWx0ZXJlZFBhdGllbnRzOiBQYXRpZW50W10gPSBbXTtcclxuICBzb3J0ZXI6IFNvcnRlcjtcclxuICBwYXRpZW50IDogUGF0aWVudDtcclxuICBASW5wdXQoKSBoaWRkZW46Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhdGllbnRzOiBQYXRpZW50W107XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IFBhdGllbnQ7XHJcbiAgQElucHV0KCkgcGF0aWVudGhlYWRlcjogYW55O1xyXG4gIEBJbnB1dCgpIHBhdGllbnRmb3JtOiBhbnk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzZWxlY3Rpb246IHN0cmluZyA7XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIF9wYXRpZW50czogUnguQmVoYXZpb3JTdWJqZWN0PExpc3Q8UGF0aWVudD4+ID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50U2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgcGF0aWVudFN0b3JlOiBQYXRpZW50U3RvcmUpIHsgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy50aXRsZSA9ICdQYXRpZW50cyc7XHJcbiAgICB0aGlzLmZpbHRlclRleHQgPSAnRmlsdGVyIFBhdGllbnRzOic7XHJcbiAgICB0aGlzLmxpc3REaXNwbGF5TW9kZUVuYWJsZWQgPSBmYWxzZTsgICAgIFxyXG4gICAgdGhpcy5zb3J0ZXIgPSBuZXcgU29ydGVyKCk7XHJcbiAgfVxyXG4gIGRlbGV0ZVBhdGllbnQocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgdGhpcy5wYXRpZW50U3RvcmUuZGVsZXRlUGF0aWVudChwYXRpZW50KTtcclxuICB9XHJcbiAgZWRpdFBhdGllbnQgKHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5uZXh0KHBhdGllbnQpO1xyXG4gICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMucGF0aWVudGhlYWRlci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhdGllbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZvcm1BY3Rpb24ocGF0aWVudCk7XHJcbiAgfVxyXG4gIGZvcm1BY3Rpb24ocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAvLyBjb25zb2xlLmxvZygnZm9ybUFjdGlvbiAnICsgYWN0aW9uKTtcclxuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KHBhdGllbnQpO1xyXG4gIH1cclxuICAgIHNob3dDYXJkVmlldyhzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuY2hhbmdlVmlldyhzaG93KTtcclxuICAgIH1cclxuXHJcbiAgZmlsdGVyQ2hhbmdlZChkYXRhOiBzdHJpbmcpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5maWx0ZXJEYXRhKGRhdGEpOyAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KHByb3A6IHN0cmluZykge1xyXG4gICAgICAvL0NoZWNrIGZvciBjb21wbGV4IHR5cGUgc3VjaCBhcyAnc3RhdGUubmFtZSdcclxuICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKCcuJykpIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNvcnRlci5zb3J0KHRoaXMuZmlsdGVyZWRQYXRpZW50cywgcHJvcCk7XHJcbiAgfVxyXG4gIFxyXG4gICB0b2dnbGVTb3VyY2UoaWQpIHtcclxuICAgIHRoaXMudG9nZ2xlSUQgPSBpZDtcclxuICAgIGlmICh0aGlzLnNob3dTb3VyY2UpIHtcclxuICAgICAgdGhpcy5zaG93VGFicyA9IGZhbHNlO1xyXG4gICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93U291cmNlID0gZmFsc2U7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93U291cmNlID0gdHJ1ZTtcclxuICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlO1xyXG4gICAgICB9LCAyNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICBjaGFuZ2UoZGF0YTogSVRhYmxlU2VsZWN0aW9uQ2hhbmdlKSB7XHJcbiAgICBsZXQgcGF0aWVudHNTZWxlY3RlZCA9IFtdO1xyXG4gICAvLyBsZXQgcCA9IHRoaXMucGF0aWVudFN0b3JlLnBhdGllbnRzLm1hcChwYXRpZW50ID0+IGNvbnNvbGUubG9nKFwicGF0aWVudFwiLCBwYXRpZW50KSk7XHJcbiAgICB0aGlzLnBhdGllbnRTdG9yZS5wYXRpZW50cy5mb3JFYWNoKChwYXRpZW50czogTGlzdDxQYXRpZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudHNcIiwgcGF0aWVudHMsIGRhdGEpO1xyXG4gICAgICAgIHBhdGllbnRzLmZvckVhY2goKHBhdGllbnQ6IFBhdGllbnQpID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudFwiLCBwYXRpZW50KTtcclxuICAgICAgICAgICAgaWYgKGRhdGEudmFsdWVzLmluZGV4T2YocGF0aWVudC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRpZW50c1NlbGVjdGVkLnB1c2gocGF0aWVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGllbnRzU2VsZWN0ZWRcIiwgcGF0aWVudHNTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4vLyAgICAgXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VsZWN0aW9uID0gcGF0aWVudHNTZWxlY3RlZC5qb2luKCcsICcpO1xyXG4gICAgdGhpcy5jb3VudCA9IHBhdGllbnRzU2VsZWN0ZWQubGVuZ3RoO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
