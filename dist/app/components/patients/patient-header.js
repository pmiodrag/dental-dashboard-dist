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
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.hidden = false;
                }
                PatientHeaderComponent.prototype.addPatient = function () {
                    this.hidden = true;
                    this.patientlist.hidden = true;
                    this.patientform.hidden = false;
                    this.patient = new PatientBackendService_1.Patient(-1, '', '', '', 'M', '', '', new Date(), '', '', '');
                    this.formAction(this.patient);
                };
                PatientHeaderComponent.prototype.formAction = function (patient) {
                    console.log('PatientHeaderComponent formAction patient', patient);
                    this.notificationService.emitFormActionChangeEvent(patient);
                };
                PatientHeaderComponent.prototype.showCardView = function (show) {
                    this.patientStore.changeView(show);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvcGF0aWVudC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBU0ksZ0NBQXFCLG1CQUF3QyxFQUFVLFlBQTBCO29CQUE1RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQVBqRyxjQUFTLEdBQVcsMEJBQVUsQ0FBQztvQkFDdEIsV0FBTSxHQUFXLEtBQUssQ0FBQztnQkFNb0UsQ0FBQztnQkFFckcsMkNBQVUsR0FBVjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSwrQkFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDaEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsMkNBQVUsR0FBVixVQUFXLE9BQWdCO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBQ0QsNkNBQVksR0FBWixVQUFhLElBQWE7b0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQXJCRDtvQkFBQyxZQUFLLEVBQUU7O3NFQUFBO2dCQUNSO29CQUFDLFlBQUssRUFBRzs7MkVBQUE7Z0JBQ1Q7b0JBQUMsWUFBSyxFQUFHOzsyRUFBQTtnQkFYYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSw2Q0FBNkM7d0JBQzFELElBQUksRUFBRSxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUM7d0JBQzVCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUUsMkJBQW1CLEVBQUUsbUJBQVMsRUFBRSxnREFBc0IsQ0FBQztxQkFDekcsQ0FBQzs7MENBQUE7Z0JBMEJGLDZCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwyREF5QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXRpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUGF0aWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvUGF0aWVudFN0b3JlJztcclxuaW1wb3J0IHsgRmlsdGVyVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyVGV4dGJveC5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhdGllbnQtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtaGVhZGVyLmh0bWwnLFxyXG4gIGhvc3Q6IHsnW2hpZGRlbl0nOiAnaGlkZGVuJ30sXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciwgRmlsdGVyVGV4dGJveENvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgQElucHV0KCkgaGlkZGVuOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCAoKSBwYXRpZW50Zm9ybTogYW55O1xyXG4gICAgQElucHV0ICgpIHBhdGllbnRsaXN0OiBhbnk7ICBcclxuICAgIHBhdGllbnQ6IFBhdGllbnQ7XHJcbiAgICBsaXN0RGlzcGxheU1vZGVFbmFibGVkOiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBhdGllbnRTdG9yZTogUGF0aWVudFN0b3JlKSB7fSAgICBcclxuXHJcbiAgICBhZGRQYXRpZW50ICgpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50bGlzdC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF0aWVudGZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gbmV3IFBhdGllbnQoLTEsICcnLCAnJywgJycsICdNJywgJycsICcnLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24odGhpcy5wYXRpZW50KTtcclxuICAgIH1cclxuICAgIGZvcm1BY3Rpb24ocGF0aWVudDogUGF0aWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXRpZW50SGVhZGVyQ29tcG9uZW50IGZvcm1BY3Rpb24gcGF0aWVudCcsIHBhdGllbnQpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KHBhdGllbnQpO1xyXG4gICAgfVxyXG4gICAgc2hvd0NhcmRWaWV3KHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5wYXRpZW50U3RvcmUuY2hhbmdlVmlldyhzaG93KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
