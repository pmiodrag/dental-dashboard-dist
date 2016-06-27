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
    var core_1, common_1, router_1, DoctorBackendService_1, notificationService_1, sorter_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, values_pipe_1, index_1, async_1, DoctorStore_1, toolbar_1, immutable_1, Rx, app_constants_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStCQTtnQkF1QkksWUFBb0IsYUFBbUMsRUFBVSxtQkFBd0MsRUFBVSxXQUF3QjtvQkFBdkgsa0JBQWEsR0FBYixhQUFhLENBQXNCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBdEIzSTs7c0JBRUU7b0JBQ0ssZUFBVSxHQUFZLEtBQUssQ0FBQztvQkFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztvQkFDbEMsY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBSy9CLG9CQUFlLEdBQWEsRUFBRSxDQUFDO29CQUd0QixXQUFNLEdBQVksS0FBSyxDQUFDO29CQUt2QixtQkFBYyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFHekQsYUFBUSxHQUFxQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN5RCxDQUFDO2dCQUVoSixRQUFRO29CQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO29CQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDO29CQUNwQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO29CQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsWUFBWTtvQkFDUixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ25D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QUFDO2dDQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDOzRCQUNwRCxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFBO3dCQUNGLE9BQU87b0JBQ1gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hDLENBQUM7WUFFTCxDQUFDO1lBMUZHO2dCQUFDLFlBQUssRUFBRTs7c0VBQUE7WUFJUjtnQkFBQyxZQUFLLEVBQUU7O3NEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt1REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7d0RBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzREQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzswREFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7OERBQUE7WUE3QmI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsOEJBQThCO29CQUM5QixXQUFXLEVBQUUseUNBQXlDO29CQUN0RCxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO29CQUM5QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsZ0RBQXNCLEVBQUUsa0NBQWUsQ0FBQztvQkFDekgsS0FBSyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxvQkFBUSxFQUFFLHdCQUFVLENBQUM7aUJBQ2hELENBQUM7OzBCQUFBO1lBR0YsbUNBb0dDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kb2N0b3JzL2RvY3Rvci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBEb2N0b3IsIERvY3RvckJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvRG9jdG9yQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc29ydGVyJztcclxuaW1wb3J0IHsgRmlsdGVyVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyVGV4dGJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgVHJpbVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvdHJpbS5waXBlJztcclxuaW1wb3J0IHsgVmFsdWVzUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy92YWx1ZXMucGlwZSc7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgSVRhYmxlU2VsZWN0aW9uQ2hhbmdlfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7IERvY3RvckZvcm1Db21wb25lbnQgfSBmcm9tICcuL2RvY3Rvci1mb3JtJ1xyXG5pbXBvcnQge1RpbWVyV3JhcHBlcn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9zcmMvZmFjYWRlL2FzeW5jXCI7XHJcbmltcG9ydCB7IERvY3RvclN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvRG9jdG9yU3RvcmUnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi4vc3RhdGUvYXNPYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RvY3Rvci1saXN0JywgXHJcbiAgICAvLyBwcm92aWRlcnM6IFtEb2N0b3JTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC5odG1sJyxcclxuICAgIGhvc3Q6IHsgJ1toaWRkZW5dJzogJ2hpZGRlbicgfSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXIsIEZpbHRlclRleHRib3hDb21wb25lbnQsIFNvcnRCeURpcmVjdGl2ZV0sXHJcbiAgICBwaXBlczogW0NhcGl0YWxpemVQaXBlLCBUcmltUGlwZSwgVmFsdWVzUGlwZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdG9yTGlzdCB7XHJcbiAgICAvKipcclxuICAgICogVHJ1ZSB0byBzaG93IHRoZSBzb3VyY2UgY29kZSBmb3IgdGhlIGV4YW1wbGVcclxuICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1NvdXJjZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzaG93VGFiczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRvZ2dsZUlEOiBudW1iZXI7XHJcbiAgICBmaWx0ZXJUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsaXN0RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG4gICAgZmlsdGVyZWREb2N0b3JzOiBEb2N0b3JbXSA9IFtdO1xyXG4gICAgc29ydGVyOiBTb3J0ZXI7XHJcbiAgICBkb2N0b3I6IERvY3RvcjtcclxuICAgIEBJbnB1dCgpIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZG9jdG9yczogRG9jdG9yW107XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZDogRG9jdG9yO1xyXG4gICAgQElucHV0KCkgZG9jdG9yaGVhZGVyOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkb2N0b3Jmb3JtOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmc7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZG9jdG9yczogUnguQmVoYXZpb3JTdWJqZWN0PExpc3Q8RG9jdG9yPj4gPSBuZXcgUnguQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdG9yU2VydmljZTogRG9jdG9yQmFja2VuZFNlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBkb2N0b3JTdG9yZTogRG9jdG9yU3RvcmUpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSAnRG9jdG9ycyc7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJUZXh0ID0gJ0ZpbHRlciBEb2N0b3JzOic7XHJcbiAgICAgICAgdGhpcy5saXN0RGlzcGxheU1vZGVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zb3J0ZXIgPSBuZXcgU29ydGVyKCk7XHJcbiAgICB9XHJcbiAgICBoaWRlRWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZG9jdG9yaGVhZGVyLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kb2N0b3Jmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlRG9jdG9yKGRvY3RvcjogRG9jdG9yKSB7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JTdG9yZS5kZWxldGVEb2N0b3IoZG9jdG9yKTtcclxuICAgIH1cclxuICAgIGFkZERvY3RvcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMuZG9jdG9yID0gbmV3IERvY3RvcigtMSwgJycsICcnLCAnJywgMjAxNiwgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24odGhpcy5kb2N0b3IpO1xyXG4gICAgfVxyXG4gICAgZWRpdERvY3Rvcihkb2N0b3I6IERvY3Rvcikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UubmV4dChkb2N0b3IpO1xyXG4gICAgICAgIHRoaXMuaGlkZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKGRvY3Rvcik7XHJcbiAgICB9XHJcbiAgICBmb3JtQWN0aW9uKGRvY3RvcjogRG9jdG9yKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm1BY3Rpb24gJyArIGFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQoZG9jdG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd0NhcmRWaWV3KHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRvY3RvclN0b3JlLmNoYW5nZVZpZXcoc2hvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydChwcm9wOiBzdHJpbmcpIHtcclxuICAgICAgICAvL0NoZWNrIGZvciBjb21wbGV4IHR5cGUgc3VjaCBhcyAnc3RhdGUubmFtZSdcclxuICAgICAgICBpZiAocHJvcCAmJiBwcm9wLmluZGV4T2YoJy4nKSkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zb3J0ZXIuc29ydCh0aGlzLmZpbHRlcmVkRG9jdG9ycywgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU291cmNlKGlkKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVJRCA9IGlkO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGFicyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBUaW1lcldyYXBwZXIuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTb3VyY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NvdXJjZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RhYnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCAyNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZShkYXRhOiBJVGFibGVTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgICAgICBsZXQgZG9jdG9yc1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgLy8gbGV0IHAgPSB0aGlzLmRvY3RvclN0b3JlLmRvY3RvcnMubWFwKGRvY3RvciA9PiBjb25zb2xlLmxvZyhcImRvY3RvclwiLCBkb2N0b3IpKTtcclxuICAgICAgICB0aGlzLmRvY3RvclN0b3JlLmRvY3RvcnMuZm9yRWFjaCgoZG9jdG9yczogTGlzdDxEb2N0b3I+KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9jdG9yc1wiLCBkb2N0b3JzLCBkYXRhKTtcclxuICAgICAgICAgICAgZG9jdG9ycy5mb3JFYWNoKChkb2N0b3I6IERvY3RvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb2N0b3JcIiwgZG9jdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlcy5pbmRleE9mKGRvY3Rvci5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdG9yc1NlbGVjdGVkLnB1c2goZG9jdG9yLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvY3RvcnNTZWxlY3RlZFwiLCBkb2N0b3JzU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBkb2N0b3JzU2VsZWN0ZWQuam9pbignLCAnKTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gZG9jdG9yc1NlbGVjdGVkLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
