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
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '', '', '', '');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBZ0JJLFlBQW9CLG1CQUF3QyxFQUFVLFlBQTBCO29CQUE1RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQWZoRyxlQUFVLEdBQUc7d0JBQ1QsV0FBVyxFQUFFLENBQUM7d0JBQ2QsWUFBWSxFQUFFLENBQUM7d0JBQ2YsVUFBVSxFQUFFLEVBQUU7cUJBQ2pCLENBQUM7b0JBQ0YsVUFBSyxHQUFXLENBQUMsQ0FBQztvQkFDbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztvQkFDaEIsb0JBQWUsR0FBa0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM3QyxjQUFTLEdBQVcsMEJBQVUsQ0FBQztvQkFDdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFPN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7b0JBQ3JELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUNELFlBQVksQ0FBQyxLQUFLO29CQUNkLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxvQkFBb0IsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQy9GLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzQixDQUFDO2dCQUNMLENBQUM7Z0JBR0QsVUFBVTtvQkFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSwrQkFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLE9BQWdCO29CQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBQ0QsWUFBWSxDQUFDLElBQWE7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUVELGFBQWEsQ0FBQyxJQUFZO29CQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNQLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1lBM0NHO2dCQUFDLFlBQUssRUFBRTs7a0VBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O3VFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzt1RUFBQTtZQWxCWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSw2Q0FBNkM7b0JBQzFELElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7b0JBQzlCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUUsMkJBQW1CLEVBQUUsbUJBQVMsRUFBRSxnREFBc0IsQ0FBQztpQkFDM0csQ0FBQzs7c0NBQUE7WUFDRiwyREFxREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXRpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHsgRmlsdGVyVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyVGV4dGJveC5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGF0aWVudC1oZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWhlYWRlci5odG1sJyxcclxuICAgIGhvc3Q6IHsgJ1toaWRkZW5dJzogJ2hpZGRlbicgfSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXIsIEZpbHRlclRleHRib3hDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGF0aWVudEhlYWRlckNvbXBvbmVudCB7XHJcbiAgICBwYWdpbmF0aW9uID0ge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgIGl0ZW1zUGVyUGFnZTogNSxcclxuICAgICAgICB0b3RhbEl0ZW1zOiAyNFxyXG4gICAgfTtcclxuICAgIHN0YXJ0OiBudW1iZXIgPSAwO1xyXG4gICAgZW5kOiBudW1iZXIgPSAzO1xyXG4gICAgYXZhaWxhYmxlTGVuZ3RoOiBBcnJheTxudW1iZXI+ID0gWzUsIDEwLCAyMF07XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHBhdGllbnRmb3JtOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwYXRpZW50bGlzdDogYW55O1xyXG4gICAgcGF0aWVudDogUGF0aWVudDtcclxuICAgIGxpc3REaXNwbGF5TW9kZUVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBhdGllbnRTdG9yZTogUGF0aWVudFN0b3JlKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUGF0aWVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUGF0aWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9ICh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGFnaW5hdGlvbi5pdGVtc1BlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5lbmQgPSB0aGlzLnN0YXJ0ICsgdGhpcy5wYWdpbmF0aW9uLml0ZW1zUGVyUGFnZTtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5zZXRJbmRleGVzKHRoaXMuc3RhcnQsIHRoaXMuZW5kKTtcclxuICAgIH1cclxuICAgIGRldGVjdENoYW5nZShldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm5hbWUgPT09ICdwYWdpbmF0aW9uX2NoYW5nZWQnICYmIGV2ZW50LnBhZ2luYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSBldmVudC5wYWdpbmF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hQYXRpZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkUGF0aWVudCgpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50bGlzdC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gbmV3IFBhdGllbnQoLTEsICcnLCAnJywgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24odGhpcy5wYXRpZW50KTtcclxuICAgIH1cclxuICAgIGZvcm1BY3Rpb24ocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KHBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgc2hvd0NhcmRWaWV3KHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnBhdGllbnRTdG9yZS5jaGFuZ2VWaWV3KHNob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckNoYW5nZWQoZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wYXRpZW50U3RvcmUuZmlsdGVyRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
