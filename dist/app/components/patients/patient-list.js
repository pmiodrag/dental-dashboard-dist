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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, values_pipe_1, slice_pipe_1, index_1, async_1, PatientStore_1, toolbar_1, immutable_1, Rx, app_constants_1, icon_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUNBO2dCQStCSSxZQUFZLGNBQThCLEVBQVUsY0FBcUMsRUFBVSxtQkFBd0MsRUFBVSxZQUEwQjtvQkFBM0gsbUJBQWMsR0FBZCxjQUFjLENBQXVCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBOUIvSyxlQUFVLEdBQUc7d0JBQ1QsV0FBVyxFQUFFLENBQUM7d0JBQ2QsWUFBWSxFQUFFLENBQUM7d0JBQ2YsVUFBVSxFQUFFLENBQUM7cUJBQ2hCLENBQUM7b0JBQ0YsVUFBSyxHQUFXLENBQUMsQ0FBQztvQkFDbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztvQkFDaEIsb0JBQWUsR0FBa0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM3Qzs7c0JBRUU7b0JBQ0ssZUFBVSxHQUFZLEtBQUssQ0FBQztvQkFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFDbEMsY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBSy9CLHFCQUFnQixHQUFjLEVBQUUsQ0FBQztvQkFHeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFLdkIsbUJBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBR3pELGNBQVMsR0FBc0MsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFcEYsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN2QixjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNuRSxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc29ydGVyJztcclxuaW1wb3J0IHsgRmlsdGVyVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyVGV4dGJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgVHJpbVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvdHJpbS5waXBlJztcclxuaW1wb3J0IHsgVmFsdWVzUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy92YWx1ZXMucGlwZSc7XHJcbmltcG9ydCB7IEN1c3RvbVNsaWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3NsaWNlLnBpcGUnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVMsIElUYWJsZVNlbGVjdGlvbkNoYW5nZX0gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQgeyBQYXRpZW50Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vcGF0aWVudC1mb3JtJ1xyXG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9zcmMvZmFjYWRlL2FzeW5jXCI7XHJcbmltcG9ydCB7IFBhdGllbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1BhdGllbnRTdG9yZSc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuLi9zdGF0ZS9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQge01kSWNvbiwgTWRJY29uUmVnaXN0cnl9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pY29uL2ljb24nO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGF0aWVudC1saXN0JywgXHJcbiAgICBwcm92aWRlcnM6IFtNZEljb25SZWdpc3RyeV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtbGlzdC5odG1sJyxcclxuICAgIGhvc3Q6IHsgJ1toaWRkZW5dJzogJ2hpZGRlbicgfSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZEljb24sIE1kVG9vbGJhciwgRmlsdGVyVGV4dGJveENvbXBvbmVudCwgU29ydEJ5RGlyZWN0aXZlXSxcclxuICAgIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGUsIFRyaW1QaXBlLCBWYWx1ZXNQaXBlLCBDdXN0b21TbGljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudExpc3Qge1xyXG4gICAgcGFnaW5hdGlvbiA9IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBpdGVtc1BlclBhZ2U6IDUsXHJcbiAgICAgICAgdG90YWxJdGVtczogMFxyXG4gICAgfTtcclxuICAgIHN0YXJ0OiBudW1iZXIgPSAwO1xyXG4gICAgZW5kOiBudW1iZXIgPSAzO1xyXG4gICAgYXZhaWxhYmxlTGVuZ3RoOiBBcnJheTxudW1iZXI+ID0gWzUsIDEwLCAyMF07XHJcbiAgICAvKipcclxuICAgICogVHJ1ZSB0byBzaG93IHRoZSBzb3VyY2UgY29kZSBmb3IgdGhlIGV4YW1wbGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1NvdXJjZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzaG93VGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRvZ2dsZUlEOiBudW1iZXI7XHJcbiAgICBmaWx0ZXJUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsaXN0RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG4gICAgZmlsdGVyZWRQYXRpZW50czogUGF0aWVudFtdID0gW107XHJcbiAgICBzb3J0ZXI6IFNvcnRlcjtcclxuICAgIHBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRzOiBQYXRpZW50W107XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZDogUGF0aWVudDtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRoZWFkZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRmb3JtOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGF0aWVudHM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PFBhdGllbnQ+PiA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gICAgY29uc3RydWN0b3IobWRJY29uUmVnaXN0cnk6IE1kSWNvblJlZ2lzdHJ5LCBwcml2YXRlIHBhdGllbnRTZXJ2aWNlOiBQYXRpZW50QmFja2VuZFNlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwYXRpZW50U3RvcmU6IFBhdGllbnRTdG9yZSkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhdGllbnRzKCk7XHJcbiAgICAgICAgbWRJY29uUmVnaXN0cnkuYWRkU3ZnSWNvbignTScsICdhc3NldHMvaW1hZ2VzL3N2Zy9odW1hbi1tYWxlLnN2ZycpO1xyXG4gICAgICAgIG1kSWNvblJlZ2lzdHJ5LmFkZFN2Z0ljb24oJ0YnLCAnYXNzZXRzL2ltYWdlcy9zdmcvaHVtYW4tZmVtYWxlLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnUGF0aWVudHMnO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyVGV4dCA9ICdGaWx0ZXIgUGF0aWVudHM6JztcclxuICAgICAgICB0aGlzLmxpc3REaXNwbGF5TW9kZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvcnRlciA9IG5ldyBTb3J0ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhdGllbnRTdG9yZS5wYXRpZW50c1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hQYXRpZW50cygpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdpbmF0aW9uLml0ZW1zUGVyUGFnZTtcclxuICAgICAgICB0aGlzLmVuZCA9IHRoaXMuc3RhcnQgKyB0aGlzLnBhZ2luYXRpb24uaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLnNldEluZGV4ZXModGhpcy5zdGFydCwgdGhpcy5lbmQpO1xyXG4gICAgfVxyXG4gICAgZGV0ZWN0Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQubmFtZSA9PT0gJ3BhZ2luYXRpb25fY2hhbmdlZCcgJiYgZXZlbnQucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiA9IGV2ZW50LnBhZ2luYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFBhdGllbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVFbGVtZW50cygpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50aGVhZGVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50Zm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVBhdGllbnQocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLmRlbGV0ZVBhdGllbnQocGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBhZGRQYXRpZW50KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gbmV3IFBhdGllbnQoLTEsICcnLCAnJywgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHRoaXMucGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBlZGl0UGF0aWVudChwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5uZXh0KHBhdGllbnQpO1xyXG4gICAgICAgIHRoaXMuaGlkZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgZm9ybUFjdGlvbihwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm1BY3Rpb24gJyArIGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQocGF0aWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NhcmRWaWV3KHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5jaGFuZ2VWaWV3KHNob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnQocHJvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9DaGVjayBmb3IgY29tcGxleCB0eXBlIHN1Y2ggYXMgJ3N0YXRlLm5hbWUnXHJcbiAgICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKCcuJykpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc29ydGVyLnNvcnQodGhpcy5maWx0ZXJlZFBhdGllbnRzLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTb3VyY2UoaWQpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZUlEID0gaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUYWJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvdXJjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U291cmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGFicyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDI1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlKGRhdGE6IElUYWJsZVNlbGVjdGlvbkNoYW5nZSkge1xyXG4gICAgICAgIGxldCBwYXRpZW50c1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgLy8gbGV0IHAgPSB0aGlzLnBhdGllbnRTdG9yZS5wYXRpZW50cy5tYXAocGF0aWVudCA9PiBjb25zb2xlLmxvZyhcInBhdGllbnRcIiwgcGF0aWVudCkpO1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLnBhdGllbnRzLmZvckVhY2goKHBhdGllbnRzOiBMaXN0PFBhdGllbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudHNcIiwgcGF0aWVudHMsIGRhdGEpO1xyXG4gICAgICAgICAgICBwYXRpZW50cy5mb3JFYWNoKChwYXRpZW50OiBQYXRpZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGllbnRcIiwgcGF0aWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS52YWx1ZXMuaW5kZXhPZihwYXRpZW50LmlkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50c1NlbGVjdGVkLnB1c2gocGF0aWVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXRpZW50c1NlbGVjdGVkXCIsIHBhdGllbnRzU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBwYXRpZW50c1NlbGVjdGVkLmpvaW4oJywgJyk7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IHBhdGllbnRzU2VsZWN0ZWQubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
