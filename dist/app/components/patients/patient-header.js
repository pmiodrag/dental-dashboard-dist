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
            let PatientHeaderComponent = class PatientHeaderComponent {
                constructor(notificationService, patientStore) {
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
                    this.refreshPatients();
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
                addPatient() {
                    this.hidden = true;
                    this.patientlist.hidden = true;
                    this.patientform.hidden = false;
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '', '');
                    this.formAction(this.patient);
                }
                formAction(patient) {
                    this.notificationService.emitFormActionChangeEvent(patient);
                }
                showCardView(show) {
                    this.patientStore.changeView(show);
                }
                filterChanged(data) {
                    if (data) {
                        data = data.toUpperCase();
                        this.patientStore.filterData(data);
                    }
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
            exports_1("PatientHeaderComponent", PatientHeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBZ0JJLFlBQW9CLG1CQUF3QyxFQUFVLFlBQTBCO29CQUE1RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQWZoRyxlQUFVLEdBQUc7d0JBQ1QsV0FBVyxFQUFFLENBQUM7d0JBQ2QsWUFBWSxFQUFFLENBQUM7d0JBQ2YsVUFBVSxFQUFFLEVBQUU7cUJBQ2pCLENBQUM7b0JBQ0YsVUFBSyxHQUFXLENBQUMsQ0FBQztvQkFDbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztvQkFDaEIsb0JBQWUsR0FBa0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM3QyxjQUFTLEdBQVcsMEJBQVUsQ0FBQztvQkFDdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFPN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7b0JBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNELFlBQVksQ0FBQyxLQUFLO29CQUNkLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxvQkFBb0IsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQy9GLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzQixDQUFDO2dCQUNMLENBQUM7Z0JBR0QsVUFBVTtvQkFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSwrQkFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3BGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELFVBQVUsQ0FBQyxPQUFnQjtvQkFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUNELFlBQVksQ0FBQyxJQUFhO29CQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxhQUFhLENBQUMsSUFBWTtvQkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQTNDRztnQkFBQyxZQUFLLEVBQUU7O2tFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt1RUFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7dUVBQUE7WUFsQlo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsNkNBQTZDO29CQUMxRCxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO29CQUM5QixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsZ0RBQXNCLENBQUM7aUJBQzNHLENBQUM7O3NDQUFBO1lBQ0YsMkRBcURDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgUGF0aWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBhdGllbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1BhdGllbnRTdG9yZSc7XHJcbmltcG9ydCB7IEZpbHRlclRleHRib3hDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlclRleHRib3guY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhdGllbnQtaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1oZWFkZXIuaHRtbCcsXHJcbiAgICBob3N0OiB7ICdbaGlkZGVuXSc6ICdoaWRkZW4nIH0sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyLCBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhdGllbnRIZWFkZXJDb21wb25lbnQge1xyXG4gICAgcGFnaW5hdGlvbiA9IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBpdGVtc1BlclBhZ2U6IDUsXHJcbiAgICAgICAgdG90YWxJdGVtczogMjRcclxuICAgIH07XHJcbiAgICBzdGFydDogbnVtYmVyID0gMDtcclxuICAgIGVuZDogbnVtYmVyID0gMztcclxuICAgIGF2YWlsYWJsZUxlbmd0aDogQXJyYXk8bnVtYmVyPiA9IFs1LCAxMCwgMjBdO1xyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50Zm9ybTogYW55O1xyXG4gICAgQElucHV0KCkgcGF0aWVudGxpc3Q6IGFueTtcclxuICAgIHBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBsaXN0RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwYXRpZW50U3RvcmU6IFBhdGllbnRTdG9yZSkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFBhdGllbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFBhdGllbnRzKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2luYXRpb24uaXRlbXNQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMuZW5kID0gdGhpcy5zdGFydCArIHRoaXMucGFnaW5hdGlvbi5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuc2V0SW5kZXhlcyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XHJcbiAgICB9XHJcbiAgICBkZXRlY3RDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5uYW1lID09PSAncGFnaW5hdGlvbl9jaGFuZ2VkJyAmJiBldmVudC5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gZXZlbnQucGFnaW5hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoUGF0aWVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZFBhdGllbnQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGxpc3QuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudCA9IG5ldyBQYXRpZW50KC0xLCAnJywgJycsICcnLCAnTScsICcnLCAnJywgbmV3IERhdGUoKSwgJycsICcnLCAnJywgJycpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLnBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgZm9ybUFjdGlvbihwYXRpZW50OiBQYXRpZW50KSB7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQocGF0aWVudCk7XHJcbiAgICB9XHJcbiAgICBzaG93Q2FyZFZpZXcoc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucGF0aWVudFN0b3JlLmNoYW5nZVZpZXcoc2hvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQ2hhbmdlZChkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5maWx0ZXJEYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
