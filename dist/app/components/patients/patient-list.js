System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/PatientBackendService', '../../services/notificationService', '../../shared/sorter', './filterTextbox.component', '../../shared/directives/sortby.directive', '../../shared/pipes/capitalize.pipe', '../../shared/pipes/trim.pipe', '../../shared/pipes/values.pipe', "ng2-material/index", "@angular/common/src/facade/async", '../state/PatientStore', '@angular2-material/toolbar', 'immutable', "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, PatientBackendService_1, notificationService_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, values_pipe_1, index_1, async_1, PatientStore_1, toolbar_1, immutable_1, Rx;
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
                PatientList.prototype.changeDisplayMode = function (mode) {
                    this.listDisplayModeEnabled = (mode === 'List');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0JBO2dCQXVCRSxxQkFBb0IsY0FBcUMsRUFBVSxtQkFBd0MsRUFBVSxZQUEwQjtvQkFBM0gsbUJBQWMsR0FBZCxjQUFjLENBQXVCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBdEI5STs7c0JBRUU7b0JBQ0ksZUFBVSxHQUFZLEtBQUssQ0FBQztvQkFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFNbEMscUJBQWdCLEdBQWMsRUFBRSxDQUFDO29CQUd4QixXQUFNLEdBQVcsS0FBSyxDQUFDO29CQUt0QixtQkFBYyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFHekQsY0FBUyxHQUFzQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMyRCxDQUFDO2dCQUVwSiw4QkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO29CQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO29CQUNyQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsbUNBQWEsR0FBYixVQUFjLE9BQWdCO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFDRCxpQ0FBVyxHQUFYLFVBQWEsT0FBZ0I7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxD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Q0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFDdkMsQ0FBQztnQkFsRkQ7b0JBQUMsWUFBSyxFQUFFOzsyREFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzZEQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7NkRBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOztrRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O2dFQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7bUVBQUE7Z0JBN0JYO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7d0JBQ3pCLCtCQUErQjt3QkFDOUIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDeEQsSUFBSSxFQUFFLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQzt3QkFDNUIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSwyQkFBbUIsRUFBRSxtQkFBUyxFQUFFLGdEQUFzQixFQUFFLGtDQUFlLENBQUM7d0JBQ3pILEtBQUssRUFBRSxDQUFDLGdDQUFjLEVBQUUsb0JBQVEsRUFBRSx3QkFBVSxDQUFDO3FCQUM5QyxDQUFDOzsrQkFBQTtnQkFxR0Ysa0JBQUM7WUFBRCxDQWxHQSxBQWtHQyxJQUFBO1lBbEdELHFDQWtHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc29ydGVyJztcclxuaW1wb3J0IHsgRmlsdGVyVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyVGV4dGJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgVHJpbVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvdHJpbS5waXBlJztcclxuaW1wb3J0IHsgVmFsdWVzUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy92YWx1ZXMucGlwZSc7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgSVRhYmxlU2VsZWN0aW9uQ2hhbmdlfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7IFBhdGllbnRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9wYXRpZW50LWZvcm0nXHJcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL3NyYy9mYWNhZGUvYXN5bmNcIjtcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuLy9pbXBvcnQge01EX0lDT05fRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi4vc3RhdGUvYXNPYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzL1J4XCI7XHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ3BhdGllbnQtbGlzdCcsIFxyXG4gLy8gcHJvdmlkZXJzOiBbUGF0aWVudFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1saXN0Lmh0bWwnLFxyXG4gIGhvc3Q6IHsnW2hpZGRlbl0nOiAnaGlkZGVuJ30sXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciwgRmlsdGVyVGV4dGJveENvbXBvbmVudCwgU29ydEJ5RGlyZWN0aXZlXSxcclxuICBwaXBlczogW0NhcGl0YWxpemVQaXBlLCBUcmltUGlwZSwgVmFsdWVzUGlwZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudExpc3Qge1xyXG4gICAvKipcclxuICAgKiBUcnVlIHRvIHNob3cgdGhlIHNvdXJjZSBjb2RlIGZvciB0aGUgZXhhbXBsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93U291cmNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzaG93VGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdG9nZ2xlSUQ6IG51bWJlcjtcclxuICBmaWx0ZXJUZXh0OiBzdHJpbmc7XHJcbiAgbGlzdERpc3BsYXlNb2RlRW5hYmxlZDogYm9vbGVhbjsgXHJcbiAgZmlsdGVyZWRQYXRpZW50czogUGF0aWVudFtdID0gW107XHJcbiAgc29ydGVyOiBTb3J0ZXI7XHJcbiAgcGF0aWVudCA6IFBhdGllbnQ7XHJcbiAgQElucHV0KCkgaGlkZGVuOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwYXRpZW50czogUGF0aWVudFtdO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBQYXRpZW50O1xyXG4gIEBJbnB1dCgpIHBhdGllbnRoZWFkZXI6IGFueTtcclxuICBASW5wdXQoKSBwYXRpZW50Zm9ybTogYW55O1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc2VsZWN0aW9uOiBzdHJpbmcgO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfcGF0aWVudHM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PFBhdGllbnQ+PiA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBhdGllbnRTdG9yZTogUGF0aWVudFN0b3JlKSB7IH1cclxuICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudGl0bGUgPSAnUGF0aWVudHMnO1xyXG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gJ0ZpbHRlciBQYXRpZW50czonO1xyXG4gICAgdGhpcy5saXN0RGlzcGxheU1vZGVFbmFibGVkID0gZmFsc2U7ICAgICBcclxuICAgIHRoaXMuc29ydGVyID0gbmV3IFNvcnRlcigpO1xyXG4gIH1cclxuICBkZWxldGVQYXRpZW50KHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgIHRoaXMucGF0aWVudFN0b3JlLmRlbGV0ZVBhdGllbnQocGF0aWVudCk7XHJcbiAgfVxyXG4gIGVkaXRQYXRpZW50IChwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UubmV4dChwYXRpZW50KTtcclxuICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhdGllbnRoZWFkZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYXRpZW50Zm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5mb3JtQWN0aW9uKHBhdGllbnQpO1xyXG4gIH1cclxuICBmb3JtQWN0aW9uKHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgLy8gY29uc29sZS5sb2coJ2Zvcm1BY3Rpb24gJyArIGFjdGlvbik7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZW1pdEZvcm1BY3Rpb25DaGFuZ2VFdmVudChwYXRpZW50KTtcclxuICB9XHJcbiAgY2hhbmdlRGlzcGxheU1vZGUobW9kZTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMubGlzdERpc3BsYXlNb2RlRW5hYmxlZCA9IChtb2RlID09PSAnTGlzdCcpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQ2hhbmdlZChkYXRhOiBzdHJpbmcpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5maWx0ZXJEYXRhKGRhdGEpOyAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzb3J0KHByb3A6IHN0cmluZykge1xyXG4gICAgICAvL0NoZWNrIGZvciBjb21wbGV4IHR5cGUgc3VjaCBhcyAnc3RhdGUubmFtZSdcclxuICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKCcuJykpIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNvcnRlci5zb3J0KHRoaXMuZmlsdGVyZWRQYXRpZW50cywgcHJvcCk7XHJcbiAgfVxyXG4gIFxyXG4gICB0b2dnbGVTb3VyY2UoaWQpIHtcclxuICAgIHRoaXMudG9nZ2xlSUQgPSBpZDtcclxuICAgIGlmICh0aGlzLnNob3dTb3VyY2UpIHtcclxuICAgICAgdGhpcy5zaG93VGFicyA9IGZhbHNlO1xyXG4gICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93U291cmNlID0gZmFsc2U7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93U291cmNlID0gdHJ1ZTtcclxuICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlO1xyXG4gICAgICB9LCAyNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICBjaGFuZ2UoZGF0YTogSVRhYmxlU2VsZWN0aW9uQ2hhbmdlKSB7XHJcbiAgICBsZXQgcGF0aWVudHNTZWxlY3RlZCA9IFtdO1xyXG4gICAvLyBsZXQgcCA9IHRoaXMucGF0aWVudFN0b3JlLnBhdGllbnRzLm1hcChwYXRpZW50ID0+IGNvbnNvbGUubG9nKFwicGF0aWVudFwiLCBwYXRpZW50KSk7XHJcbiAgICB0aGlzLnBhdGllbnRTdG9yZS5wYXRpZW50cy5mb3JFYWNoKChwYXRpZW50czogTGlzdDxQYXRpZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudHNcIiwgcGF0aWVudHMsIGRhdGEpO1xyXG4gICAgICAgIHBhdGllbnRzLmZvckVhY2goKHBhdGllbnQ6IFBhdGllbnQpID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGF0aWVudFwiLCBwYXRpZW50KTtcclxuICAgICAgICAgICAgaWYgKGRhdGEudmFsdWVzLmluZGV4T2YocGF0aWVudC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRpZW50c1NlbGVjdGVkLnB1c2gocGF0aWVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBhdGllbnRzU2VsZWN0ZWRcIiwgcGF0aWVudHNTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4vLyAgICAgXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VsZWN0aW9uID0gcGF0aWVudHNTZWxlY3RlZC5qb2luKCcsICcpO1xyXG4gICAgdGhpcy5jb3VudCA9IHBhdGllbnRzU2VsZWN0ZWQubGVuZ3RoO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
