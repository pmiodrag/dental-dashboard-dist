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
            DoctorList = (function () {
                function DoctorList(doctorService, notificationService, doctorStore) {
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
                DoctorList.prototype.ngOnInit = function () {
                    this.title = 'Doctors';
                    this.filterText = 'Filter Doctors:';
                    this.listDisplayModeEnabled = false;
                    this.sorter = new sorter_1.Sorter();
                };
                DoctorList.prototype.hideElements = function () {
                    this.hidden = true;
                    this.doctorheader.hidden = true;
                    this.doctorform.hidden = false;
                };
                DoctorList.prototype.deleteDoctor = function (doctor) {
                    this.doctorStore.deleteDoctor(doctor);
                };
                DoctorList.prototype.addDoctor = function () {
                    this.hideElements();
                    this.doctor = new DoctorBackendService_1.Doctor(-1, '', '', '', 2016, '', 'M', '', '', new Date(), '', '', '');
                    this.formAction(this.doctor);
                };
                DoctorList.prototype.editDoctor = function (doctor) {
                    this.selectedChange.next(doctor);
                    this.hideElements();
                    this.formAction(doctor);
                };
                DoctorList.prototype.formAction = function (doctor) {
                    // console.log('formAction ' + action);
                    this.notificationService.emitFormActionChangeEvent(doctor);
                };
                DoctorList.prototype.showCardView = function (show) {
                    this.doctorStore.changeView(show);
                };
                DoctorList.prototype.sort = function (prop) {
                    //Check for complex type such as 'state.name'
                    if (prop && prop.indexOf('.')) {
                    }
                    this.sorter.sort(this.filteredDoctors, prop);
                };
                DoctorList.prototype.toggleSource = function (id) {
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
                DoctorList.prototype.change = function (data) {
                    var doctorsSelected = [];
                    // let p = this.doctorStore.doctors.map(doctor => console.log("doctor", doctor));
                    this.doctorStore.doctors.forEach(function (doctors) {
                        console.log("doctors", doctors, data);
                        doctors.forEach(function (doctor) {
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
                return DoctorList;
            }());
            exports_1("DoctorList", DoctorList);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStCQTtnQkF1Qkksb0JBQW9CLGFBQW1DLEVBQVUsbUJBQXdDLEVBQVUsV0FBd0I7b0JBQXZILGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtvQkFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQXRCM0k7O3NCQUVFO29CQUNLLGVBQVUsR0FBWSxLQUFLLENBQUM7b0JBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUsvQixvQkFBZSxHQUFhLEVBQUUsQ0FBQztvQkFHdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFLdkIsbUJBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBR3pELGFBQVEsR0FBcUMsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeUQsQ0FBQztnQkFFaEosNkJBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELGlDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FB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c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IERvY3RvciwgRG9jdG9yQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Eb2N0b3JCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5pbXBvcnQgeyBWYWx1ZXNQaXBlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BpcGVzL3ZhbHVlcy5waXBlJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBJVGFibGVTZWxlY3Rpb25DaGFuZ2V9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgRG9jdG9yRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZG9jdG9yLWZvcm0nXHJcbmltcG9ydCB7VGltZXJXcmFwcGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL3NyYy9mYWNhZGUvYXN5bmNcIjtcclxuaW1wb3J0IHsgRG9jdG9yU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9Eb2N0b3JTdG9yZSc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuLi9zdGF0ZS9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZG9jdG9yLWxpc3QnLCBcclxuICAgIC8vIHByb3ZpZGVyczogW0RvY3RvclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kb2N0b3JzL2RvY3Rvci1saXN0Lmh0bWwnLFxyXG4gICAgaG9zdDogeyAnW2hpZGRlbl0nOiAnaGlkZGVuJyB9LFxyXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciwgRmlsdGVyVGV4dGJveENvbXBvbmVudCwgU29ydEJ5RGlyZWN0aXZlXSxcclxuICAgIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGUsIFRyaW1QaXBlLCBWYWx1ZXNQaXBlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N0b3JMaXN0IHtcclxuICAgIC8qKlxyXG4gICAgKiBUcnVlIHRvIHNob3cgdGhlIHNvdXJjZSBjb2RlIGZvciB0aGUgZXhhbXBsZVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzaG93U291cmNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNob3dUYWJzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdG9nZ2xlSUQ6IG51bWJlcjtcclxuICAgIGZpbHRlclRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGxpc3REaXNwbGF5TW9kZUVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBmaWx0ZXJlZERvY3RvcnM6IERvY3RvcltdID0gW107XHJcbiAgICBzb3J0ZXI6IFNvcnRlcjtcclxuICAgIGRvY3RvcjogRG9jdG9yO1xyXG4gICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkb2N0b3JzOiBEb2N0b3JbXTtcclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBEb2N0b3I7XHJcbiAgICBASW5wdXQoKSBkb2N0b3JoZWFkZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIGRvY3RvcmZvcm06IGFueTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBzZWxlY3Rpb246IHN0cmluZztcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kb2N0b3JzOiBSeC5CZWhhdmlvclN1YmplY3Q8TGlzdDxEb2N0b3I+PiA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N0b3JTZXJ2aWNlOiBEb2N0b3JCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGRvY3RvclN0b3JlOiBEb2N0b3JTdG9yZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9ICdEb2N0b3JzJztcclxuICAgICAgICB0aGlzLmZpbHRlclRleHQgPSAnRmlsdGVyIERvY3RvcnM6JztcclxuICAgICAgICB0aGlzLmxpc3REaXNwbGF5TW9kZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNvcnRlciA9IG5ldyBTb3J0ZXIoKTtcclxuICAgIH1cclxuICAgIGhpZGVFbGVtZW50cygpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JoZWFkZXIuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRvY3RvcmZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBkZWxldGVEb2N0b3IoZG9jdG9yOiBEb2N0b3IpIHtcclxuICAgICAgICB0aGlzLmRvY3RvclN0b3JlLmRlbGV0ZURvY3Rvcihkb2N0b3IpO1xyXG4gICAgfVxyXG4gICAgYWRkRG9jdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5kb2N0b3IgPSBuZXcgRG9jdG9yKC0xLCAnJywgJycsICcnLCAyMDE2LCAnJywgJ00nLCAnJywgJycsIG5ldyBEYXRlKCksICcnLCAnJywgJycpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLmRvY3Rvcik7XHJcbiAgICB9XHJcbiAgICBlZGl0RG9jdG9yKGRvY3RvcjogRG9jdG9yKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5uZXh0KGRvY3Rvcik7XHJcbiAgICAgICAgdGhpcy5oaWRlRWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24oZG9jdG9yKTtcclxuICAgIH1cclxuICAgIGZvcm1BY3Rpb24oZG9jdG9yOiBEb2N0b3IpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9ybUFjdGlvbiAnICsgYWN0aW9uKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZW1pdEZvcm1BY3Rpb25DaGFuZ2VFdmVudChkb2N0b3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93Q2FyZFZpZXcoc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZG9jdG9yU3RvcmUuY2hhbmdlVmlldyhzaG93KTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0KHByb3A6IHN0cmluZykge1xyXG4gICAgICAgIC8vQ2hlY2sgZm9yIGNvbXBsZXggdHlwZSBzdWNoIGFzICdzdGF0ZS5uYW1lJ1xyXG4gICAgICAgIGlmIChwcm9wICYmIHByb3AuaW5kZXhPZignLicpKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNvcnRlci5zb3J0KHRoaXMuZmlsdGVyZWREb2N0b3JzLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTb3VyY2UoaWQpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZUlEID0gaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUYWJzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFRpbWVyV3JhcHBlci5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvdXJjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U291cmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgVGltZXJXcmFwcGVyLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGFicyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDI1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlKGRhdGE6IElUYWJsZVNlbGVjdGlvbkNoYW5nZSkge1xyXG4gICAgICAgIGxldCBkb2N0b3JzU2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICAvLyBsZXQgcCA9IHRoaXMuZG9jdG9yU3RvcmUuZG9jdG9ycy5tYXAoZG9jdG9yID0+IGNvbnNvbGUubG9nKFwiZG9jdG9yXCIsIGRvY3RvcikpO1xyXG4gICAgICAgIHRoaXMuZG9jdG9yU3RvcmUuZG9jdG9ycy5mb3JFYWNoKChkb2N0b3JzOiBMaXN0PERvY3Rvcj4pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb2N0b3JzXCIsIGRvY3RvcnMsIGRhdGEpO1xyXG4gICAgICAgICAgICBkb2N0b3JzLmZvckVhY2goKGRvY3RvcjogRG9jdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvY3RvclwiLCBkb2N0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudmFsdWVzLmluZGV4T2YoZG9jdG9yLmlkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JzU2VsZWN0ZWQucHVzaChkb2N0b3IuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9jdG9yc1NlbGVjdGVkXCIsIGRvY3RvcnNTZWxlY3RlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IGRvY3RvcnNTZWxlY3RlZC5qb2luKCcsICcpO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSBkb2N0b3JzU2VsZWN0ZWQubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
