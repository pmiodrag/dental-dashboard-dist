System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../../shared/sorter', './filterTextbox.component', '../../shared/directives/sortby.directive', '../../shared/pipes/capitalize.pipe', '../../shared/pipes/trim.pipe', '../../shared/pipes/values.pipe', '../../shared/pipes/slice.pipe', "ng2-material/index", "@angular/common/src/facade/async", '../state/PatientStore', '@angular2-material/toolbar', 'immutable', "rxjs/Rx", '../../shared/constants/app.constants', '@angular2-material/icon/icon'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, values_pipe_1, slice_pipe_1, index_1, async_1, PatientStore_1, toolbar_1, immutable_1, Rx, app_constants_1, app_constants_2, icon_1;
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
            function (slice_pipe_1_1) {
                slice_pipe_1 = slice_pipe_1_1;
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
                app_constants_2 = app_constants_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            }],
        execute: function() {
            let PatientList = class PatientList {
                constructor(mdIconRegistry, patientService, notificationService, patientStore) {
                    this.patientService = patientService;
                    this.notificationService = notificationService;
                    this.patientStore = patientStore;
                    this.pagination = {
                        currentPage: 1,
                        itemsPerPage: 5,
                        totalItems: 0
                    };
                    this.start = 0;
                    this.end = 3;
                    this.availableLength = [5, 10, 20];
                    /**
                    * True to show the source code for the example
                    */
                    this.showSource = false;
                    this.showTabs = false;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.owner = app_constants_2.PATIENT_OWNER;
                    this.filteredPatients = [];
                    this.hidden = false;
                    this.selectedChange = new core_1.EventEmitter();
                    this._patients = new Rx.BehaviorSubject(immutable_1.List([]));
                    this.refreshPatients();
                    mdIconRegistry.addSvgIcon('M', 'assets/images/svg/human-male.svg');
                    mdIconRegistry.addSvgIcon('F', 'assets/images/svg/human-female.svg');
                }
                ngOnInit() {
                    this.title = 'Patients';
                    this.filterText = 'Filter Patients:';
                    this.listDisplayModeEnabled = false;
                    this.sorter = new sorter_1.Sorter();
                    console.log(this.patientStore.patientsSize);
                }
                refreshPatients() {
                    this.start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
                    this.end = this.start + this.pagination.itemsPerPage;
                    this.patientStore.setIndexes(this.start, this.end);
                }
                detectChange(event) {
                    if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
                        this.pagination = event.pagination;
                        this.refreshPatients();
                    }
                }
                listPatientTreatments(patient) {
                    console.log("listPatientTreatments" + patient.id);
                    this.notificationService.emitFormActionChangeEvent(patient);
                }
                hideElements() {
                    this.hidden = true;
                    this.patientheader.hidden = true;
                    this.patientform.hidden = false;
                }
                deletePatient(patient) {
                    this.patientStore.deletePatient(patient);
                }
                addPatient() {
                    this.hideElements();
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '', '', '', '');
                    this.formAction(this.patient);
                }
                editPatient(patient) {
                    this.selectedChange.next(patient);
                    this.hideElements();
                    this.formAction(patient);
                }
                formAction(patient) {
                    // console.log('formAction ' + action);
                    this.notificationService.emitFormActionChangeEvent(patient);
                }
                showCardView(show) {
                    this.patientStore.changeView(show);
                }
                sort(prop) {
                    //Check for complex type such as 'state.name'
                    if (prop && prop.indexOf('.')) {
                    }
                    this.sorter.sort(this.filteredPatients, prop);
                }
                toggleSource(id) {
                    this.toggleID = id;
                    if (this.showSource) {
                        this.showTabs = false;
                        async_1.TimerWrapper.setTimeout(() => {
                            this.showSource = false;
                        }, 500);
                    }
                    else {
                        this.showSource = true;
                        async_1.TimerWrapper.setTimeout(() => {
                            this.showTabs = true;
                        }, 25);
                    }
                }
                change(data) {
                    let patientsSelected = [];
                    // let p = this.patientStore.patients.map(patient => console.log("patient", patient));
                    this.patientStore.patients.forEach((patients) => {
                        console.log("patients", patients, data);
                        patients.forEach((patient) => {
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
                }
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
                    providers: [icon_1.MdIconRegistry],
                    templateUrl: 'app/components/patients/patient-list.html',
                    host: { '[hidden]': 'hidden' },
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, icon_1.MdIcon, toolbar_1.MdToolbar, filterTextbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective],
                    pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe, values_pipe_1.ValuesPipe, slice_pipe_1.CustomSlice]
                }), 
                __metadata('design:paramtypes', [icon_1.MdIconRegistry, PatientBackendService_1.PatientBackendService, notificationService_1.NotificationService, PatientStore_1.PatientStore])
            ], PatientList);
            exports_1("PatientList", PatientList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFnQ0ksWUFBWSxjQUE4QixFQUFVLGNBQXFDLEVBQVUsbUJBQXdDLEVBQVUsWUFBMEI7b0JBQTNILG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtvQkFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQS9CL0ssZUFBVSxHQUFHO3dCQUNULFdBQVcsRUFBRSxDQUFDO3dCQUNkLFlBQVksRUFBRSxDQUFDO3dCQUNmLFVBQVUsRUFBRSxDQUFDO3FCQUNoQixDQUFDO29CQUNGLFVBQUssR0FBVyxDQUFDLENBQUM7b0JBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7b0JBQ2hCLG9CQUFlLEdBQWtCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDN0M7O3NCQUVFO29CQUNLLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUMvQixVQUFLLEdBQVcsNkJBQWEsQ0FBQztvQkFLOUIscUJBQWdCLEdBQWMsRUFBRSxDQUFDO29CQUd4QixXQUFNLEdBQVksS0FBSyxDQUFDO29CQUt2QixtQkFBYyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFHekQsY0FBUyxHQUFzQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVwRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZCLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7b0JBQ25F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QW1CLEVBQUUsYUFBTSxFQUFFLG1CQUFTLEVBQUUsZ0RBQXNCLEVBQUUsa0NBQWUsQ0FBQztvQkFDakksS0FBSyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxvQkFBUSxFQUFFLHdCQUFVLEVBQUUsd0JBQVcsQ0FBQztpQkFDN0QsQ0FBQzs7MkJBQUE7WUFHRixxQ0FxSUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGF0aWVudCwgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NvcnRlcic7XHJcbmltcG9ydCB7IEZpbHRlclRleHRib3hDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlclRleHRib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU29ydEJ5RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2RpcmVjdGl2ZXMvc29ydGJ5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL2NhcGl0YWxpemUucGlwZSc7XHJcbmltcG9ydCB7IFRyaW1QaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3RyaW0ucGlwZSc7XHJcbmltcG9ydCB7IFZhbHVlc1BpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvdmFsdWVzLnBpcGUnO1xyXG5pbXBvcnQgeyBDdXN0b21TbGljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9zbGljZS5waXBlJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBJVGFibGVTZWxlY3Rpb25DaGFuZ2V9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgUGF0aWVudEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3BhdGllbnQtZm9ybSdcclxuaW1wb3J0IHtUaW1lcldyYXBwZXJ9IGZyb20gXCJAYW5ndWxhci9jb21tb24vc3JjL2ZhY2FkZS9hc3luY1wiO1xyXG5pbXBvcnQgeyBQYXRpZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi4vc3RhdGUvYXNPYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHtQQVRJRU5UX09XTkVSfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQge01kSWNvbiwgTWRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pY29uL2ljb24nO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGF0aWVudC1saXN0JywgXHJcbiAgICBwcm92aWRlcnM6IFtNZEljb25SZWdpc3RyeV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtbGlzdC5odG1sJyxcclxuICAgIGhvc3Q6IHsgJ1toaWRkZW5dJzogJ2hpZGRlbicgfSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZEljb24sIE1kVG9vbGJhciwgRmlsdGVyVGV4dGJveENvbXBvbmVudCwgU29ydEJ5RGlyZWN0aXZlXSxcclxuICAgIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGUsIFRyaW1QaXBlLCBWYWx1ZXNQaXBlLCBDdXN0b21TbGljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudExpc3Qge1xyXG4gICAgcGFnaW5hdGlvbiA9IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBpdGVtc1BlclBhZ2U6IDUsXHJcbiAgICAgICAgdG90YWxJdGVtczogMFxyXG4gICAgfTtcclxuICAgIHN0YXJ0OiBudW1iZXIgPSAwO1xyXG4gICAgZW5kOiBudW1iZXIgPSAzO1xyXG4gICAgYXZhaWxhYmxlTGVuZ3RoOiBBcnJheTxudW1iZXI+ID0gWzUsIDEwLCAyMF07XHJcbiAgICAvKipcclxuICAgICogVHJ1ZSB0byBzaG93IHRoZSBzb3VyY2UgY29kZSBmb3IgdGhlIGV4YW1wbGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1NvdXJjZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzaG93VGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgb3duZXI6IHN0cmluZyA9IFBBVElFTlRfT1dORVI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdG9nZ2xlSUQ6IG51bWJlcjtcclxuICAgIGZpbHRlclRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGxpc3REaXNwbGF5TW9kZUVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBmaWx0ZXJlZFBhdGllbnRzOiBQYXRpZW50W10gPSBbXTtcclxuICAgIHNvcnRlcjogU29ydGVyO1xyXG4gICAgcGF0aWVudDogUGF0aWVudDtcclxuICAgIEBJbnB1dCgpIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcGF0aWVudHM6IFBhdGllbnRbXTtcclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBQYXRpZW50O1xyXG4gICAgQElucHV0KCkgcGF0aWVudGhlYWRlcjogYW55O1xyXG4gICAgQElucHV0KCkgcGF0aWVudGZvcm06IGFueTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBzZWxlY3Rpb246IHN0cmluZztcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYXRpZW50czogUnguQmVoYXZpb3JTdWJqZWN0PExpc3Q8UGF0aWVudD4+ID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgICBjb25zdHJ1Y3RvcihtZEljb25SZWdpc3RyeTogTWRJY29uUmVnaXN0cnksIHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBhdGllbnRTdG9yZTogUGF0aWVudFN0b3JlKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGF0aWVudHMoKTtcclxuICAgICAgICBtZEljb25SZWdpc3RyeS5hZGRTdmdJY29uKCdNJywgJ2Fzc2V0cy9pbWFnZXMvc3ZnL2h1bWFuLW1hbGUuc3ZnJyk7XHJcbiAgICAgICAgbWRJY29uUmVnaXN0cnkuYWRkU3ZnSWNvbignRicsICdhc3NldHMvaW1hZ2VzL3N2Zy9odW1hbi1mZW1hbGUuc3ZnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9ICdQYXRpZW50cyc7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJUZXh0ID0gJ0ZpbHRlciBQYXRpZW50czonO1xyXG4gICAgICAgIHRoaXMubGlzdERpc3BsYXlNb2RlRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc29ydGVyID0gbmV3IFNvcnRlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGF0aWVudFN0b3JlLnBhdGllbnRzU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFBhdGllbnRzKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2luYXRpb24uaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuZW5kID0gdGhpcy5zdGFydCArIHRoaXMucGFnaW5hdGlvbi5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuc2V0SW5kZXhlcyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XHJcbiAgICB9XHJcbiAgICBkZXRlY3RDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5uYW1lID09PSAncGFnaW5hdGlvbl9jaGFuZ2VkJyAmJiBldmVudC5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gZXZlbnQucGFnaW5hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoUGF0aWVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgIGxpc3RQYXRpZW50VHJlYXRtZW50cyhwYXRpZW50OiBQYXRpZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RQYXRpZW50VHJlYXRtZW50c1wiK3BhdGllbnQuaWQpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KHBhdGllbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVFbGVtZW50cygpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50aGVhZGVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50Zm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVBhdGllbnQocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLmRlbGV0ZVBhdGllbnQocGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBhZGRQYXRpZW50KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gbmV3IFBhdGllbnQoLTEsICcnLCAnJywgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24odGhpcy5wYXRpZW50KTtcclxuICAgIH1cclxuICAgIGVkaXRQYXRpZW50KHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLm5leHQocGF0aWVudCk7XHJcbiAgICAgICAgdGhpcy5oaWRlRWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24ocGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBmb3JtQWN0aW9uKHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9ybUFjdGlvbiAnICsgYWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZW1pdEZvcm1BY3Rpb25DaGFuZ2VFdmVudChwYXRpZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q2FyZFZpZXcoc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLmNoYW5nZVZpZXcoc2hvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydChwcm9wOiBzdHJpbmcpIHtcclxuICAgICAgICAvL0NoZWNrIGZvciBjb21wbGV4IHR5cGUgc3VjaCBhcyAnc3RhdGUubmFtZSdcclxuICAgICAgICBpZiAocHJvcCAmJiBwcm9wLmluZGV4T2YoJy4nKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb3J0ZXIuc29ydCh0aGlzLmZpbHRlcmVkUGF0aWVudHMsIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNvdXJjZShpZCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlSUQgPSBpZDtcclxuICAgICAgICBpZiAodGhpcy5zaG93U291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RhYnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U291cmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTb3VyY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUYWJzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2UoZGF0YTogSVRhYmxlU2VsZWN0aW9uQ2hhbmdlKSB7XHJcbiAgICAgICAgbGV0IHBhdGllbnRzU2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAvLyBsZXQgcCA9IHRoaXMucGF0aWVudFN0b3JlLnBhdGllbnRzLm1hcChwYXRpZW50ID0+IGNvbnNvbGUubG9nKFwicGF0aWVudFwiLCBwYXRpZW50KSk7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUucGF0aWVudHMuZm9yRWFjaCgocGF0aWVudHM6IExpc3Q8UGF0aWVudD4pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXRpZW50c1wiLCBwYXRpZW50cywgZGF0YSk7XHJcbiAgICAgICAgICAgIHBhdGllbnRzLmZvckVhY2goKHBhdGllbnQ6IFBhdGllbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudFwiLCBwYXRpZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlcy5pbmRleE9mKHBhdGllbnQuaWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnRzU2VsZWN0ZWQucHVzaChwYXRpZW50LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGllbnRzU2VsZWN0ZWRcIiwgcGF0aWVudHNTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHBhdGllbnRzU2VsZWN0ZWQuam9pbignLCAnKTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gcGF0aWVudHNTZWxlY3RlZC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
