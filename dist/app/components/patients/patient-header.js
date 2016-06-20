System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/notificationService', '../../services/PatientBackendService', '@angular2-material/toolbar', "ng2-material/index", '../../shared/constants/app.constants', '../state/PatientStore', './filterTextbox.component'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, notificationService_1, PatientBackendService_1, toolbar_1, index_1, app_constants_1, PatientStore_1, filterTextbox_component_1;
    var PatientHeaderComponent;
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
            function (PatientBackendService_1_1) {
                PatientBackendService_1 = PatientBackendService_1_1;
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
            function (PatientStore_1_1) {
                PatientStore_1 = PatientStore_1_1;
            },
            function (filterTextbox_component_1_1) {
                filterTextbox_component_1 = filterTextbox_component_1_1;
            }],
        execute: function() {
            PatientHeaderComponent = (function () {
                function PatientHeaderComponent(notificationService, patientStore) {
                    this.notificationService = notificationService;
                    this.patientStore = patientStore;
                    this.pagination = {
                        currentPage: 1,
                        itemsPerPage: 5,
                        totalItems: 24
                    };
                    this.start = 0;
                    this.end = 3;
                    this.availableLength = [5, 10, 20];
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.hidden = false;
                    this.refreshMaterials();
                }
                PatientHeaderComponent.prototype.refreshMaterials = function () {
                    this.start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
                        this.end = this.start + this.pagination.itemsPerPage;
                    this.patientStore.setIndexes(this.start, this.end);
                    // this.pagedMaterials = this.materials.slice(start, end);
                };
                PatientHeaderComponent.prototype.detectChange = function (event) {
                    if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
                        this.pagination = event.pagination;
                        this.refreshMaterials();
                    }
                };
                PatientHeaderComponent.prototype.addPatient = function () {
                    this.hidden = true;
                    this.patientlist.hidden = true;
                    this.patientform.hidden = false;
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '');
                    this.formAction(this.patient);
                };
                PatientHeaderComponent.prototype.formAction = function (patient) {
                    this.notificationService.emitFormActionChangeEvent(patient);
                };
                PatientHeaderComponent.prototype.showCardView = function (show) {
                    this.patientStore.changeView(show);
                };
                PatientHeaderComponent.prototype.filterChanged = function (data) {
                    if (data) {
                        data = data.toUpperCase();
                        this.patientStore.filterData(data);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PatientHeaderComponent.prototype, "hidden", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientHeaderComponent.prototype, "patientform", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PatientHeaderComponent.prototype, "patientlist", void 0);
                PatientHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'patient-header',
                        templateUrl: 'app/components/patients/patient-header.html',
                        host: { '[hidden]': 'hidden' },
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, filterTextbox_component_1.FilterTextboxComponent],
                    }), 
                    __metadata('design:paramtypes', [notificationService_1.NotificationService, PatientStore_1.PatientStore])
                ], PatientHeaderComponent);
                return PatientHeaderComponent;
            }());
            exports_1("PatientHeaderComponent", PatientHeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBZ0JJLGdDQUFvQixtQkFBd0MsRUFBVSxZQUEwQjtvQkFBNUUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFmaEcsZUFBVSxHQUFHO3dCQUNULFdBQVcsRUFBRSxDQUFDO3dCQUNkLFlBQVksRUFBRSxDQUFDO3dCQUNmLFVBQVUsRUFBRSxFQUFFO3FCQUNqQixDQUFDO29CQUNGLFVBQUssR0FBVyxDQUFDLENBQUM7b0JBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7b0JBQ2hCLG9CQUFlLEdBQWtCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDN0MsY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBQ3RCLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBTzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELGlEQUFnQixHQUFoQjtvQkFDRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZO3dCQUMzRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7b0JBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCwwREFBMEQ7Z0JBQzNELENBQUM7Z0JBQ0QsNkNBQVksR0FBWixVQUFhLEtBQUs7b0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxvQkFBb0IsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pHLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQzFCLENBQUM7Z0JBQ0gsQ0FBQztnQkFHRiwyQ0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLCtCQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCwyQ0FBVSxHQUFWLFVBQVcsT0FBZ0I7b0JBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFDRCw2Q0FBWSxHQUFaLFVBQWEsSUFBYTtvQkFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsOENBQWEsR0FBYixVQUFjLElBQVk7b0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0wsQ0FBQztnQkEzQ0Q7b0JBQUMsWUFBSyxFQUFFOztzRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7OzJFQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRTs7MkVBQUE7Z0JBbEJaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLDZDQUE2Qzt3QkFDMUQsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTt3QkFDOUIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSwyQkFBbUIsRUFBRSxtQkFBUyxFQUFFLGdEQUFzQixDQUFDO3FCQUMzRyxDQUFDOzswQ0FBQTtnQkF1REYsNkJBQUM7WUFBRCxDQXREQSxBQXNEQyxJQUFBO1lBdERELDJEQXNEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQYXRpZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9QYXRpZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwYXRpZW50LWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtaGVhZGVyLmh0bWwnLFxyXG4gICAgaG9zdDogeyAnW2hpZGRlbl0nOiAnaGlkZGVuJyB9LFxyXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciwgRmlsdGVyVGV4dGJveENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICAgICAgaXRlbXNQZXJQYWdlOiA1LFxyXG4gICAgICAgIHRvdGFsSXRlbXM6IDI0XHJcbiAgICB9O1xyXG4gICAgc3RhcnQ6IG51bWJlciA9IDA7XHJcbiAgICBlbmQ6IG51bWJlciA9IDM7XHJcbiAgICBhdmFpbGFibGVMZW5ndGg6IEFycmF5PG51bWJlcj4gPSBbNSwgMTAsIDIwXTtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIEBJbnB1dCgpIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcGF0aWVudGZvcm06IGFueTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRsaXN0OiBhbnk7XHJcbiAgICBwYXRpZW50OiBQYXRpZW50O1xyXG4gICAgbGlzdERpc3BsYXlNb2RlRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgcGF0aWVudFN0b3JlOiBQYXRpZW50U3RvcmUpIHsgXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoTWF0ZXJpYWxzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaE1hdGVyaWFscygpIHtcclxuICAgICAgIHRoaXMuc3RhcnQgPSAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2luYXRpb24uaXRlbXNQZXJQYWdlLFxyXG4gICAgICAgICB0aGlzLmVuZCA9IHRoaXMuc3RhcnQgKyB0aGlzLnBhZ2luYXRpb24uaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5zZXRJbmRleGVzKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcclxuICAgICAgLy8gdGhpcy5wYWdlZE1hdGVyaWFscyA9IHRoaXMubWF0ZXJpYWxzLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG4gICAgIH1cclxuICAgICBkZXRlY3RDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgIGlmIChldmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm5hbWUgPT09ICdwYWdpbmF0aW9uX2NoYW5nZWQnICYmIGV2ZW50LnBhZ2luYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSBldmVudC5wYWdpbmF0aW9uO1xyXG4gICAgICAgICB0aGlzLnJlZnJlc2hNYXRlcmlhbHMoKTtcclxuICAgICAgIH1cclxuICAgICB9XHJcblxyXG5cclxuICAgIGFkZFBhdGllbnQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGxpc3QuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KC0xLCAnJywgJycsICcnLCAnTScsICcnLCAnJywgbmV3IERhdGUoKSwgJycsICcnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHRoaXMucGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBmb3JtQWN0aW9uKHBhdGllbnQ6IFBhdGllbnQpIHtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZW1pdEZvcm1BY3Rpb25DaGFuZ2VFdmVudChwYXRpZW50KTtcclxuICAgIH1cclxuICAgIHNob3dDYXJkVmlldyhzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuY2hhbmdlVmlldyhzaG93KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJDaGFuZ2VkKGRhdGE6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudFN0b3JlLmZpbHRlckRhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
