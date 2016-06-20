System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../../shared/sorter', './filterTextbox.component', '../../shared/directives/sortby.directive', '../../shared/pipes/capitalize.pipe', '../../shared/pipes/trim.pipe', '../../shared/pipes/values.pipe', '../../shared/pipes/slice.pipe', "ng2-material/index", "@angular/common/src/facade/async", '../state/PatientStore', '@angular2-material/toolbar', 'immutable', "rxjs/Rx", '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, values_pipe_1, slice_pipe_1, index_1, async_1, PatientStore_1, toolbar_1, immutable_1, Rx, app_constants_1;
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
                PatientList.prototype.hideElements = function () {
                    this.hidden = true;
                    this.patientheader.hidden = true;
                    this.patientform.hidden = false;
                };
                PatientList.prototype.deletePatient = function (patient) {
                    this.patientStore.deletePatient(patient);
                };
                PatientList.prototype.addPatient = function () {
                    this.hideElements();
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '');
                    this.formAction(this.patient);
                };
                PatientList.prototype.editPatient = function (patient) {
                    this.selectedChange.next(patient);
                    this.hideElements();
                    this.formAction(patient);
                };
                PatientList.prototype.formAction = function (patient) {
                    // console.log('formAction ' + action);
                    this.notificationService.emitFormActionChangeEvent(patient);
                };
                PatientList.prototype.showCardView = function (show) {
                    this.patientStore.changeView(show);
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
                        pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe, values_pipe_1.ValuesPipe, slice_pipe_1.CustomSlice]
                    }), 
                    __metadata('design:paramtypes', [PatientBackendService_1.PatientBackendService, notificationService_1.NotificationService, PatientStore_1.PatientStore])
                ], PatientList);
                return PatientList;
            }());
            exports_1("PatientList", PatientList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQXVCSSxxQkFBb0IsY0FBcUMsRUFBVSxtQkFBd0MsRUFBVSxZQUEwQjtvQkFBM0gsbUJBQWMsR0FBZCxjQUFjLENBQXVCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBdEIvSTs7c0JBRUU7b0JBQ0ssZUFBVSxHQUFZLEtBQUssQ0FBQztvQkFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFDbEMsY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBSy9CLHFCQUFnQixHQUFjLEVBQUUsQ0FBQztvQkFHeEIsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFLdkIsbUJBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBR3pELGNBQVMsR0FBc0MsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMkQsQ0FBQztnQkFFcEosOEJBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztvQkFDckMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELGtDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdB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ZW50cy9wYXRpZW50LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBhdGllbnQsIFBhdGllbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5pbXBvcnQgeyBWYWx1ZXNQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3ZhbHVlcy5waXBlJztcclxuaW1wb3J0IHsgQ3VzdG9tU2xpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvc2xpY2UucGlwZSc7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgSVRhYmxlU2VsZWN0aW9uQ2hhbmdlfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7IFBhdGllbnRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9wYXRpZW50LWZvcm0nXHJcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL3NyYy9mYWNhZGUvYXN5bmNcIjtcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4uL3N0YXRlL2FzT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBSeCBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwYXRpZW50LWxpc3QnLCBcclxuICAgIC8vIHByb3ZpZGVyczogW1BhdGllbnRTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0Lmh0bWwnLFxyXG4gICAgaG9zdDogeyAnW2hpZGRlbl0nOiAnaGlkZGVuJyB9LFxyXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciwgRmlsdGVyVGV4dGJveENvbXBvbmVudCwgU29ydEJ5RGlyZWN0aXZlXSxcclxuICAgIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGUsIFRyaW1QaXBlLCBWYWx1ZXNQaXBlLCBDdXN0b21TbGljZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudExpc3Qge1xyXG4gICAgLyoqXHJcbiAgICAqIFRydWUgdG8gc2hvdyB0aGUgc291cmNlIGNvZGUgZm9yIHRoZSBleGFtcGxlXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHNob3dTb3VyY2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc2hvd1RhYnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0b2dnbGVJRDogbnVtYmVyO1xyXG4gICAgZmlsdGVyVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbGlzdERpc3BsYXlNb2RlRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIGZpbHRlcmVkUGF0aWVudHM6IFBhdGllbnRbXSA9IFtdO1xyXG4gICAgc29ydGVyOiBTb3J0ZXI7XHJcbiAgICBwYXRpZW50OiBQYXRpZW50O1xyXG4gICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50czogUGF0aWVudFtdO1xyXG4gICAgQElucHV0KCkgc2VsZWN0ZWQ6IFBhdGllbnQ7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50aGVhZGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50Zm9ybTogYW55O1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhdGllbnRzOiBSeC5CZWhhdmlvclN1YmplY3Q8TGlzdDxQYXRpZW50Pj4gPSBuZXcgUnguQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBhdGllbnRTdG9yZTogUGF0aWVudFN0b3JlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gJ1BhdGllbnRzJztcclxuICAgICAgICB0aGlzLmZpbHRlclRleHQgPSAnRmlsdGVyIFBhdGllbnRzOic7XHJcbiAgICAgICAgdGhpcy5saXN0RGlzcGxheU1vZGVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zb3J0ZXIgPSBuZXcgU29ydGVyKCk7XHJcbiAgICB9XHJcbiAgICBoaWRlRWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGhlYWRlci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBkZWxldGVQYXRpZW50KHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5kZWxldGVQYXRpZW50KHBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgYWRkUGF0aWVudCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KC0xLCAnJywgJycsICcnLCAnTScsICcnLCAnJywgbmV3IERhdGUoKSwgJycsICcnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHRoaXMucGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBlZGl0UGF0aWVudChwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5uZXh0KHBhdGllbnQpO1xyXG4gICAgICAgIHRoaXMuaGlkZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgZm9ybUFjdGlvbihwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm1BY3Rpb24gJyArIGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQocGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dDYXJkVmlldyhzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuY2hhbmdlVmlldyhzaG93KTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0KHByb3A6IHN0cmluZykge1xyXG4gICAgICAgIC8vQ2hlY2sgZm9yIGNvbXBsZXggdHlwZSBzdWNoIGFzICdzdGF0ZS5uYW1lJ1xyXG4gICAgICAgIGlmIChwcm9wICYmIHByb3AuaW5kZXhPZignLicpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvcnRlci5zb3J0KHRoaXMuZmlsdGVyZWRQYXRpZW50cywgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU291cmNlKGlkKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVJRCA9IGlkO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGFicyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTb3VyY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvdXJjZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAyNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZShkYXRhOiBJVGFibGVTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgICAgICBsZXQgcGF0aWVudHNTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgIC8vIGxldCBwID0gdGhpcy5wYXRpZW50U3RvcmUucGF0aWVudHMubWFwKHBhdGllbnQgPT4gY29uc29sZS5sb2coXCJwYXRpZW50XCIsIHBhdGllbnQpKTtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5wYXRpZW50cy5mb3JFYWNoKChwYXRpZW50czogTGlzdDxQYXRpZW50PikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGllbnRzXCIsIHBhdGllbnRzLCBkYXRhKTtcclxuICAgICAgICAgICAgcGF0aWVudHMuZm9yRWFjaCgocGF0aWVudDogUGF0aWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXRpZW50XCIsIHBhdGllbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudmFsdWVzLmluZGV4T2YocGF0aWVudC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudHNTZWxlY3RlZC5wdXNoKHBhdGllbnQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudHNTZWxlY3RlZFwiLCBwYXRpZW50c1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gcGF0aWVudHNTZWxlY3RlZC5qb2luKCcsICcpO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBwYXRpZW50c1NlbGVjdGVkLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
