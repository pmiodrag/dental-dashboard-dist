System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/DoctorBackendService', '../../services/notificationService', '../../shared/sorter', './filterTextbox.component', '../../shared/directives/sortby.directive', '../../shared/pipes/capitalize.pipe', '../../shared/pipes/trim.pipe', '../../shared/pipes/values.pipe', "ng2-material/index", "@angular/common/src/facade/async", '../state/DoctorStore', '@angular2-material/toolbar', 'immutable', "rxjs/Rx", '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, DoctorBackendService_1, notificationService_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, values_pipe_1, index_1, async_1, DoctorStore_1, toolbar_1, immutable_1, Rx, app_constants_1, app_constants_2;
    var DoctorList;
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
            function (DoctorStore_1_1) {
                DoctorStore_1 = DoctorStore_1_1;
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
            }],
        execute: function() {
            let DoctorList = class DoctorList {
                constructor(doctorService, notificationService, doctorStore) {
                    this.doctorService = doctorService;
                    this.notificationService = notificationService;
                    this.doctorStore = doctorStore;
                    /**
                    * True to show the source code for the example
                    */
                    this.showSource = false;
                    this.showTabs = false;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.owner = app_constants_2.DOCTOR_OWNER;
                    this.filteredDoctors = [];
                    this.hidden = false;
                    this.selectedChange = new core_1.EventEmitter();
                    this._doctors = new Rx.BehaviorSubject(immutable_1.List([]));
                }
                ngOnInit() {
                    this.title = 'Doctors';
                    this.filterText = 'Filter Doctors:';
                    this.listDisplayModeEnabled = false;
                    this.sorter = new sorter_1.Sorter();
                }
                hideElements() {
                    this.hidden = true;
                    this.doctorheader.hidden = true;
                    this.doctorform.hidden = false;
                }
                deleteDoctor(doctor) {
                    this.doctorStore.deleteDoctor(doctor);
                }
                addDoctor() {
                    this.hideElements();
                    this.doctor = new DoctorBackendService_1.Doctor(-1, '', '', '', 2016, '', 'M', '', '', new Date(), '', '', '');
                    this.formAction(this.doctor);
                }
                editDoctor(doctor) {
                    this.selectedChange.next(doctor);
                    this.hideElements();
                    this.formAction(doctor);
                }
                formAction(doctor) {
                    // console.log('formAction ' + action);
                    this.notificationService.emitFormActionChangeEvent(doctor);
                }
                showCardView(show) {
                    this.doctorStore.changeView(show);
                }
                sort(prop) {
                    //Check for complex type such as 'state.name'
                    if (prop && prop.indexOf('.')) {
                    }
                    this.sorter.sort(this.filteredDoctors, prop);
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
                    let doctorsSelected = [];
                    // let p = this.doctorStore.doctors.map(doctor => console.log("doctor", doctor));
                    this.doctorStore.doctors.forEach((doctors) => {
                        console.log("doctors", doctors, data);
                        doctors.forEach((doctor) => {
                            console.log("doctor", doctor);
                            if (data.values.indexOf(doctor.id) !== -1) {
                                doctorsSelected.push(doctor.id);
                                console.log("doctorsSelected", doctorsSelected);
                            }
                        });
                        //     
                    });
                    this.selection = doctorsSelected.join(', ');
                    this.count = doctorsSelected.length;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], DoctorList.prototype, "listDisplayModeEnabled", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], DoctorList.prototype, "hidden", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], DoctorList.prototype, "doctors", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', DoctorBackendService_1.Doctor)
            ], DoctorList.prototype, "selected", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DoctorList.prototype, "doctorheader", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DoctorList.prototype, "doctorform", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], DoctorList.prototype, "selectedChange", void 0);
            DoctorList = __decorate([
                core_1.Component({
                    selector: 'doctor-list',
                    // providers: [DoctorService],
                    templateUrl: 'app/components/doctors/doctor-list.html',
                    host: { '[hidden]': 'hidden' },
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, filterTextbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective],
                    pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe, values_pipe_1.ValuesPipe]
                }), 
                __metadata('design:paramtypes', [DoctorBackendService_1.DoctorBackendService, notificationService_1.NotificationService, DoctorStore_1.DoctorStore])
            ], DoctorList);
            exports_1("DoctorList", DoctorList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQ0E7Z0JBd0JJLFlBQW9CLGFBQW1DLEVBQVUsbUJBQXdDLEVBQVUsV0FBd0I7b0JBQXZILGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtvQkFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQXZCM0k7O3NCQUVFO29CQUNLLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUMvQixVQUFLLEdBQVcsNEJBQVksQ0FBQztvQkFLN0Isb0JBQWUsR0FBYSxFQUFFLENBQUM7b0JBR3RCLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBS3ZCLG1CQUFjLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUd6RCxhQUFRLEdBQXFDLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxnQkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3lELENBQUM7Z0JBRWhKLFFBQVE7b0JBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxZQUFZO29CQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENB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QUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7NEJBQ3BELENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUE7d0JBQ0YsT0FBTztvQkFDWCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztnQkFDeEMsQ0FBQztZQUNMLENBQUM7WUF6Rkc7Z0JBQUMsWUFBSyxFQUFFOztzRUFBQTtZQUlSO2dCQUFDLFlBQUssRUFBRTs7c0RBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O3VEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt3REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NERBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzBEQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOzs4REFBQTtZQTlCYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw4QkFBOEI7b0JBQzlCLFdBQVcsRUFBRSx5Q0FBeUM7b0JBQ3RELElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7b0JBQzlCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUUsMkJBQW1CLEVBQUUsbUJBQVMsRUFBRSxnREFBc0IsRUFBRSxrQ0FBZSxDQUFDO29CQUN6SCxLQUFLLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9CQUFRLEVBQUUsd0JBQVUsQ0FBQztpQkFDaEQsQ0FBQzs7MEJBQUE7WUFHRixtQ0FvR0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RvY3RvcnMvZG9jdG9yLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IERvY3RvciwgRG9jdG9yQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Eb2N0b3JCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5pbXBvcnQgeyBWYWx1ZXNQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3ZhbHVlcy5waXBlJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBJVGFibGVTZWxlY3Rpb25DaGFuZ2V9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgRG9jdG9yRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZG9jdG9yLWZvcm0nXHJcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL3NyYy9mYWNhZGUvYXN5bmNcIjtcclxuaW1wb3J0IHsgRG9jdG9yU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9Eb2N0b3JTdG9yZSc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuLi9zdGF0ZS9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQge0RPQ1RPUl9PV05FUn0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RvY3Rvci1saXN0JywgXHJcbiAgICAvLyBwcm92aWRlcnM6IFtEb2N0b3JTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC5odG1sJyxcclxuICAgIGhvc3Q6IHsgJ1toaWRkZW5dJzogJ2hpZGRlbicgfSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXIsIEZpbHRlclRleHRib3hDb21wb25lbnQsIFNvcnRCeURpcmVjdGl2ZV0sXHJcbiAgICBwaXBlczogW0NhcGl0YWxpemVQaXBlLCBUcmltUGlwZSwgVmFsdWVzUGlwZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdG9yTGlzdCB7XHJcbiAgICAvKipcclxuICAgICogVHJ1ZSB0byBzaG93IHRoZSBzb3VyY2UgY29kZSBmb3IgdGhlIGV4YW1wbGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1NvdXJjZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzaG93VGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgb3duZXI6IHN0cmluZyA9IERPQ1RPUl9PV05FUjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0b2dnbGVJRDogbnVtYmVyO1xyXG4gICAgZmlsdGVyVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbGlzdERpc3BsYXlNb2RlRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIGZpbHRlcmVkRG9jdG9yczogRG9jdG9yW10gPSBbXTtcclxuICAgIHNvcnRlcjogU29ydGVyO1xyXG4gICAgZG9jdG9yOiBEb2N0b3I7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRvY3RvcnM6IERvY3RvcltdO1xyXG4gICAgQElucHV0KCkgc2VsZWN0ZWQ6IERvY3RvcjtcclxuICAgIEBJbnB1dCgpIGRvY3RvcmhlYWRlcjogYW55O1xyXG4gICAgQElucHV0KCkgZG9jdG9yZm9ybTogYW55O1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHNlbGVjdGlvbjogc3RyaW5nO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2RvY3RvcnM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PERvY3Rvcj4+ID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3RvclNlcnZpY2U6IERvY3RvckJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgZG9jdG9yU3RvcmU6IERvY3RvclN0b3JlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gJ0RvY3RvcnMnO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyVGV4dCA9ICdGaWx0ZXIgRG9jdG9yczonO1xyXG4gICAgICAgIHRoaXMubGlzdERpc3BsYXlNb2RlRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc29ydGVyID0gbmV3IFNvcnRlcigpO1xyXG4gICAgfVxyXG4gICAgaGlkZUVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRvY3RvcmhlYWRlci5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZG9jdG9yZm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGRlbGV0ZURvY3Rvcihkb2N0b3I6IERvY3Rvcikge1xyXG4gICAgICAgIHRoaXMuZG9jdG9yU3RvcmUuZGVsZXRlRG9jdG9yKGRvY3Rvcik7XHJcbiAgICB9XHJcbiAgICBhZGREb2N0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLmRvY3RvciA9IG5ldyBEb2N0b3IoLTEsICcnLCAnJywgJycsIDIwMTYsICcnLCAnTScsICcnLCAnJywgbmV3IERhdGUoKSwgJycsICcnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHRoaXMuZG9jdG9yKTtcclxuICAgIH1cclxuICAgIGVkaXREb2N0b3IoZG9jdG9yOiBEb2N0b3IpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLm5leHQoZG9jdG9yKTtcclxuICAgICAgICB0aGlzLmhpZGVFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbihkb2N0b3IpO1xyXG4gICAgfVxyXG4gICAgZm9ybUFjdGlvbihkb2N0b3I6IERvY3Rvcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb3JtQWN0aW9uICcgKyBhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KGRvY3Rvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNob3dDYXJkVmlldyhzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JTdG9yZS5jaGFuZ2VWaWV3KHNob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnQocHJvcDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9DaGVjayBmb3IgY29tcGxleCB0eXBlIHN1Y2ggYXMgJ3N0YXRlLm5hbWUnXHJcbiAgICAgICAgaWYgKHByb3AgJiYgcHJvcC5pbmRleE9mKCcuJykpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc29ydGVyLnNvcnQodGhpcy5maWx0ZXJlZERvY3RvcnMsIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNvdXJjZShpZCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlSUQgPSBpZDtcclxuICAgICAgICBpZiAodGhpcy5zaG93U291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RhYnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U291cmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTb3VyY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUYWJzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2UoZGF0YTogSVRhYmxlU2VsZWN0aW9uQ2hhbmdlKSB7XHJcbiAgICAgICAgbGV0IGRvY3RvcnNTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgIC8vIGxldCBwID0gdGhpcy5kb2N0b3JTdG9yZS5kb2N0b3JzLm1hcChkb2N0b3IgPT4gY29uc29sZS5sb2coXCJkb2N0b3JcIiwgZG9jdG9yKSk7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JTdG9yZS5kb2N0b3JzLmZvckVhY2goKGRvY3RvcnM6IExpc3Q8RG9jdG9yPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvY3RvcnNcIiwgZG9jdG9ycywgZGF0YSk7XHJcbiAgICAgICAgICAgIGRvY3RvcnMuZm9yRWFjaCgoZG9jdG9yOiBEb2N0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9jdG9yXCIsIGRvY3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS52YWx1ZXMuaW5kZXhPZihkb2N0b3IuaWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3RvcnNTZWxlY3RlZC5wdXNoKGRvY3Rvci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb2N0b3JzU2VsZWN0ZWRcIiwgZG9jdG9yc1NlbGVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gZG9jdG9yc1NlbGVjdGVkLmpvaW4oJywgJyk7XHJcbiAgICAgICAgdGhpcy5jb3VudCA9IGRvY3RvcnNTZWxlY3RlZC5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
