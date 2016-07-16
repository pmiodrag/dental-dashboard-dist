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
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '', '');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFnQ0ksWUFBWSxjQUE4QixFQUFVLGNBQXFDLEVBQVUsbUJBQXdDLEVBQVUsWUFBMEI7b0JBQTNILG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtvQkFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQS9CL0ssZUFBVSxHQUFHO3dCQUNULFdBQVcsRUFBRSxDQUFDO3dCQUNkLFlBQVksRUFBRSxDQUFDO3dCQUNmLFVBQVUsRUFBRSxDQUFDO3FCQUNoQixDQUFDO29CQUNGLFVBQUssR0FBVyxDQUFDLENBQUM7b0JBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7b0JBQ2hCLG9CQUFlLEdBQWtCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDN0M7O3NCQUVFO29CQUNLLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUMvQixVQUFLLEdBQVcsNkJBQWEsQ0FBQztvQkFLOUIscUJBQWdCLEdBQWMsRUFBRSxDQUFDO29CQUd4QixXQUFNLEdBQVksS0FBSyxDQUFDO29CQUt2QixtQkFBYyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFHekQsY0FBUyxHQUFzQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVwRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZCLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7b0JBQ25F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QkFBUyxFQUFFLGdEQUFzQixFQUFFLGtDQUFlLENBQUM7b0JBQ2pJLEtBQUssRUFBRSxDQUFDLGdDQUFjLEVBQUUsb0JBQVEsRUFBRSx3QkFBVSxFQUFFLHdCQUFXLENBQUM7aUJBQzdELENBQUM7OzJCQUFBO1lBR0YscUNBcUlDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBhdGllbnQsIFBhdGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5pbXBvcnQgeyBWYWx1ZXNQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3ZhbHVlcy5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tU2xpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvc2xpY2UucGlwZSc7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgSVRhYmxlU2VsZWN0aW9uQ2hhbmdlfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7IFBhdGllbnRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9wYXRpZW50LWZvcm0nXHJcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL3NyYy9mYWNhZGUvYXN5bmNcIjtcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4uL3N0YXRlL2FzT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBSeCBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7UEFUSUVOVF9PV05FUn0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHtNZEljb24sIE1kSWNvblJlZ2lzdHJ5fSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaWNvbi9pY29uJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtbGlzdCcsIFxyXG4gICAgcHJvdmlkZXJzOiBbTWRJY29uUmVnaXN0cnldLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWxpc3QuaHRtbCcsXHJcbiAgICBob3N0OiB7ICdbaGlkZGVuXSc6ICdoaWRkZW4nIH0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRJY29uLCBNZFRvb2xiYXIsIEZpbHRlclRleHRib3hDb21wb25lbnQsIFNvcnRCeURpcmVjdGl2ZV0sXHJcbiAgICBwaXBlczogW0NhcGl0YWxpemVQaXBlLCBUcmltUGlwZSwgVmFsdWVzUGlwZSwgQ3VzdG9tU2xpY2VdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGllbnRMaXN0IHtcclxuICAgIHBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICAgICAgaXRlbXNQZXJQYWdlOiA1LFxyXG4gICAgICAgIHRvdGFsSXRlbXM6IDBcclxuICAgIH07XHJcbiAgICBzdGFydDogbnVtYmVyID0gMDtcclxuICAgIGVuZDogbnVtYmVyID0gMztcclxuICAgIGF2YWlsYWJsZUxlbmd0aDogQXJyYXk8bnVtYmVyPiA9IFs1LCAxMCwgMjBdO1xyXG4gICAgLyoqXHJcbiAgICAqIFRydWUgdG8gc2hvdyB0aGUgc291cmNlIGNvZGUgZm9yIHRoZSBleGFtcGxlXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNob3dTb3VyY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc2hvd1RhYnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIG93bmVyOiBzdHJpbmcgPSBQQVRJRU5UX09XTkVSO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRvZ2dsZUlEOiBudW1iZXI7XHJcbiAgICBmaWx0ZXJUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsaXN0RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG4gICAgZmlsdGVyZWRQYXRpZW50czogUGF0aWVudFtdID0gW107XHJcbiAgICBzb3J0ZXI6IFNvcnRlcjtcclxuICAgIHBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRzOiBQYXRpZW50W107XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZDogUGF0aWVudDtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRoZWFkZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRmb3JtOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGF0aWVudHM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PFBhdGllbnQ+PiA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gICAgY29uc3RydWN0b3IobWRJY29uUmVnaXN0cnk6IE1kSWNvblJlZ2lzdHJ5LCBwcml2YXRlIHBhdGllbnRTZXJ2aWNlOiBQYXRpZW50QmFja2VuZFNlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwYXRpZW50U3RvcmU6IFBhdGllbnRTdG9yZSkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhdGllbnRzKCk7XHJcbiAgICAgICAgbWRJY29uUmVnaXN0cnkuYWRkU3ZnSWNvbignTScsICdhc3NldHMvaW1hZ2VzL3N2Zy9odW1hbi1tYWxlLnN2ZycpO1xyXG4gICAgICAgIG1kSWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ0YnLCAnYXNzZXRzL2ltYWdlcy9zdmcvaHVtYW4tZmVtYWxlLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnUGF0aWVudHMnO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyVGV4dCA9ICdGaWx0ZXIgUGF0aWVudHM6JztcclxuICAgICAgICB0aGlzLmxpc3REaXNwbGF5TW9kZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvcnRlciA9IG5ldyBTb3J0ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhdGllbnRTdG9yZS5wYXRpZW50c1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hQYXRpZW50cygpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdpbmF0aW9uLml0ZW1zUGVyUGFnZTtcclxuICAgICAgICB0aGlzLmVuZCA9IHRoaXMuc3RhcnQgKyB0aGlzLnBhZ2luYXRpb24uaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLnNldEluZGV4ZXModGhpcy5zdGFydCwgdGhpcy5lbmQpO1xyXG4gICAgfVxyXG4gICAgZGV0ZWN0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQubmFtZSA9PT0gJ3BhZ2luYXRpb25fY2hhbmdlZCcgJiYgZXZlbnQucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IGV2ZW50LnBhZ2luYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFBhdGllbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICBsaXN0UGF0aWVudFRyZWF0bWVudHMocGF0aWVudDogUGF0aWVudCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsaXN0UGF0aWVudFRyZWF0bWVudHNcIitwYXRpZW50LmlkKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZW1pdEZvcm1BY3Rpb25DaGFuZ2VFdmVudChwYXRpZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlRWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGhlYWRlci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBkZWxldGVQYXRpZW50KHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5kZWxldGVQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgYWRkUGF0aWVudCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KC0xLCAnJywgJycsICcnLCAnTScsICcnLCAnJywgbmV3IERhdGUoKSwgJycsICcnLCAnJywgJycpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLnBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgZWRpdFBhdGllbnQocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UubmV4dChwYXRpZW50KTtcclxuICAgICAgICB0aGlzLmhpZGVFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbihwYXRpZW50KTtcclxuICAgIH1cclxuICAgIGZvcm1BY3Rpb24ocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb3JtQWN0aW9uICcgKyBhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KHBhdGllbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDYXJkVmlldyhzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuY2hhbmdlVmlldyhzaG93KTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0KHByb3A6IHN0cmluZykge1xyXG4gICAgICAgIC8vQ2hlY2sgZm9yIGNvbXBsZXggdHlwZSBzdWNoIGFzICdzdGF0ZS5uYW1lJ1xyXG4gICAgICAgIGlmIChwcm9wICYmIHByb3AuaW5kZXhPZignLicpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvcnRlci5zb3J0KHRoaXMuZmlsdGVyZWRQYXRpZW50cywgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU291cmNlKGlkKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVJRCA9IGlkO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGFicyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTb3VyY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvdXJjZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAyNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZShkYXRhOiBJVGFibGVTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgICAgICBsZXQgcGF0aWVudHNTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgIC8vIGxldCBwID0gdGhpcy5wYXRpZW50U3RvcmUucGF0aWVudHMubWFwKHBhdGllbnQgPT4gY29uc29sZS5sb2coXCJwYXRpZW50XCIsIHBhdGllbnQpKTtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5wYXRpZW50cy5mb3JFYWNoKChwYXRpZW50czogTGlzdDxQYXRpZW50PikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGllbnRzXCIsIHBhdGllbnRzLCBkYXRhKTtcclxuICAgICAgICAgICAgcGF0aWVudHMuZm9yRWFjaCgocGF0aWVudDogUGF0aWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXRpZW50XCIsIHBhdGllbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudmFsdWVzLmluZGV4T2YocGF0aWVudC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudHNTZWxlY3RlZC5wdXNoKHBhdGllbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudHNTZWxlY3RlZFwiLCBwYXRpZW50c1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gcGF0aWVudHNTZWxlY3RlZC5qb2luKCcsICcpO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBwYXRpZW50c1NlbGVjdGVkLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
