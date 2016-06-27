System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/notificationService', '../../services/DoctorBackendService', '@angular2-material/toolbar', "ng2-material/index", '../../shared/constants/app.constants', '../state/DoctorStore', './filterTextbox.component'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, notificationService_1, DoctorBackendService_1, toolbar_1, index_1, app_constants_1, DoctorStore_1, filterTextbox_component_1;
    var DoctorHeaderComponent;
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
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            },
            function (DoctorBackendService_1_1) {
                DoctorBackendService_1 = DoctorBackendService_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            },
            function (DoctorStore_1_1) {
                DoctorStore_1 = DoctorStore_1_1;
            },
            function (filterTextbox_component_1_1) {
                filterTextbox_component_1 = filterTextbox_component_1_1;
            }],
        execute: function() {
            let DoctorHeaderComponent = class DoctorHeaderComponent {
                constructor(notificationService, doctorStore) {
                    this.notificationService = notificationService;
                    this.doctorStore = doctorStore;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.hidden = false;
                }
                addDoctor() {
                    this.hidden = true;
                    this.doctorlist.hidden = true;
                    this.doctorform.hidden = false;
                    this.doctor = new DoctorBackendService_1.Doctor(-1, '', '', '', 2016, '', 'M', '', '', new Date(), '', '', '');
                    this.formAction(this.doctor);
                }
                formAction(doctor) {
                    this.notificationService.emitFormActionChangeEvent(doctor);
                }
                showCardView(show) {
                    this.doctorStore.changeView(show);
                }
                filterChanged(data) {
                    if (data) {
                        data = data.toUpperCase();
                        this.doctorStore.filterData(data);
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], DoctorHeaderComponent.prototype, "hidden", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DoctorHeaderComponent.prototype, "doctorform", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], DoctorHeaderComponent.prototype, "doctorlist", void 0);
            DoctorHeaderComponent = __decorate([
                core_1.Component({
                    selector: 'doctor-header',
                    templateUrl: 'app/components/doctors/doctor-header.html',
                    host: { '[hidden]': 'hidden' },
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, filterTextbox_component_1.FilterTextboxComponent],
                }), 
                __metadata('design:paramtypes', [notificationService_1.NotificationService, DoctorStore_1.DoctorStore])
            ], DoctorHeaderComponent);
            exports_1("DoctorHeaderComponent", DoctorHeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3ItaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQVNJLFlBQW9CLG1CQUF3QyxFQUFVLFdBQXdCO29CQUExRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQVA5RixjQUFTLEdBQVcsMEJBQVUsQ0FBQztvQkFDdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztnQkFNaUUsQ0FBQztnQkFFbkcsU0FBUztvQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSw2QkFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUN4RixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFDRCxVQUFVLENBQUMsTUFBYztvQkFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQUNELFlBQVksQ0FBQyxJQUFhO29CQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCxhQUFhLENBQUMsSUFBWTtvQkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQTVCRztnQkFBQyxZQUFLLEVBQUU7O2lFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOztxRUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7cUVBQUE7WUFYWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixXQUFXLEVBQUUsMkNBQTJDO29CQUN4RCxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO29CQUM5QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsZ0RBQXNCLENBQUM7aUJBQzNHLENBQUM7O3FDQUFBO1lBQ0YseURBK0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kb2N0b3JzL2RvY3Rvci1oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IERvY3RvciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0RvY3RvckJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRG9jdG9yU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9Eb2N0b3JTdG9yZSc7XHJcbmltcG9ydCB7IEZpbHRlclRleHRib3hDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlclRleHRib3guY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RvY3Rvci1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kb2N0b3JzL2RvY3Rvci1oZWFkZXIuaHRtbCcsXHJcbiAgICBob3N0OiB7ICdbaGlkZGVuXSc6ICdoaWRkZW4nIH0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyLCBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3RvckhlYWRlckNvbXBvbmVudCB7XHJcblxyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkb2N0b3Jmb3JtOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkb2N0b3JsaXN0OiBhbnk7XHJcbiAgICBkb2N0b3I6IERvY3RvcjtcclxuICAgIGxpc3REaXNwbGF5TW9kZUVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGRvY3RvclN0b3JlOiBEb2N0b3JTdG9yZSkgeyB9XHJcblxyXG4gICAgYWRkRG9jdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRvY3Rvcmxpc3QuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRvY3RvcmZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kb2N0b3IgPSBuZXcgRG9jdG9yKC0xLCAnJywgJycsICcnLCAyMDE2LCAnJywgJ00nLCAnJywgJycsIG5ldyBEYXRlKCksICcnLCAnJywgJycpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLmRvY3Rvcik7XHJcbiAgICB9XHJcbiAgICBmb3JtQWN0aW9uKGRvY3RvcjogRG9jdG9yKSB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQoZG9jdG9yKTtcclxuICAgIH1cclxuICAgIHNob3dDYXJkVmlldyhzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JTdG9yZS5jaGFuZ2VWaWV3KHNob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckNoYW5nZWQoZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5kb2N0b3JTdG9yZS5maWx0ZXJEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
