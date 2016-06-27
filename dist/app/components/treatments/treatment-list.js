System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/TreatmentBackendService', '../state/TreatmentStore', '../../services/notificationService', '@angular2-material/toolbar', "ng2-material/index", '../../shared/constants/app.constants', "rxjs/Rx", 'immutable'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, TreatmentBackendService_1, TreatmentStore_1, notificationService_1, toolbar_1, index_1, app_constants_1, Rx, immutable_1;
    var TreatmentListComponent;
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
            function (TreatmentBackendService_1_1) {
                TreatmentBackendService_1 = TreatmentBackendService_1_1;
            },
            function (TreatmentStore_1_1) {
                TreatmentStore_1 = TreatmentStore_1_1;
            },
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
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
            function (Rx_1) {
                Rx = Rx_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
            let TreatmentListComponent = class TreatmentListComponent {
                constructor(notificationService, treatmentService, treatmentStore) {
                    this.notificationService = notificationService;
                    this.treatmentService = treatmentService;
                    this.treatmentStore = treatmentStore;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.title = 'Treatments';
                    this.treatments = [];
                    this.filteredTreatments = [];
                    this.hidden = false;
                    this._treatments = new Rx.BehaviorSubject(immutable_1.List([]));
                }
                ngOnInit() {
                    console.log("TreatmentListComponent ngOnInit patientID", this.patientID);
                    this.treatmentStore.loadInitialData(this.patientID);
                }
                change(data) {
                    let treatments = [];
                    console.log("data", data);
                    this.filteredTreatments.forEach((treatment) => {
                        console.log("treatment", treatment);
                        if (data.values.indexOf(treatment.id) !== -1) {
                            treatments.push(treatment.id);
                        }
                    });
                    this.selection = treatments.join(', ');
                    this.count = treatments.length;
                }
                // open treatment form to add new treatment.
                addTreatment() {
                    this.hidden = true;
                    this.treatmentform.hidden = false;
                    this.treatment = new TreatmentBackendService_1.Treatment(-1, this.patientID, new Date(), '', '', '');
                    this.formAction(this.treatment);
                }
                deleteTreatment(treatment) {
                    this.treatmentStore.deleteTreatment(treatment);
                }
                editTreatment(treatment) {
                    this.hidden = true;
                    this.treatmentform.hidden = false;
                    this.formAction(treatment);
                }
                formAction(treatment) {
                    console.log('TreatmentListComponent formAction treatment', treatment);
                    this.notificationService.emitFormActionChangeEvent(treatment);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], TreatmentListComponent.prototype, "hidden", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TreatmentListComponent.prototype, "treatmentform", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Number)
            ], TreatmentListComponent.prototype, "patientID", void 0);
            TreatmentListComponent = __decorate([
                core_1.Component({
                    selector: 'treatment-list',
                    providers: [TreatmentBackendService_1.TreatmentBackendService],
                    templateUrl: 'app/components/treatments/treatment-list.html',
                    host: { '[hidden]': 'hidden' },
                    styleUrls: ['styles/selectable_usage.css'],
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar]
                }), 
                __metadata('design:paramtypes', [notificationService_1.NotificationService, TreatmentBackendService_1.TreatmentBackendService, TreatmentStore_1.TreatmentStore])
            ], TreatmentListComponent);
            exports_1("TreatmentListComponent", TreatmentListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFZSSxZQUFvQixtQkFBd0MsRUFBVSxnQkFBeUMsRUFBVSxjQUE4QjtvQkFBbkksd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFYdkosY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBQy9CLFVBQUssR0FBVyxZQUFZLENBQUM7b0JBRTdCLGVBQVUsR0FBaUIsRUFBRSxDQUFDO29CQUM5Qix1QkFBa0IsR0FBZ0IsRUFBRSxDQUFDO29CQUc1QixXQUFNLEdBQVcsS0FBSyxDQUFDO29CQUd4QixnQkFBVyxHQUF3QyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM4RCxDQUFDO2dCQUUzSixRQUFRO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRUYsTUFBTSxDQUFDLElBQTJCO29CQUNqQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBb0I7d0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM3QyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztnQkFFQSw0Q0FBNEM7Z0JBQzNDLFlBQVk7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1DQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELGVBQWUsQ0FBQyxTQUFvQjtvQkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBQ0QsYUFBYSxDQUFDLFNBQW9CO29CQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNBLFVBQVUsQ0FBQyxTQUFvQjtvQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO1lBRUwsQ0FBQztZQTdDRztnQkFBQyxZQUFLLEVBQUU7O2tFQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFHOzt5RUFBQTtZQUNUO2dCQUFDLFlBQUssRUFBRzs7cUVBQUE7WUFsQmI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUUsQ0FBQyxpREFBdUIsQ0FBQztvQkFDcEMsV0FBVyxFQUFFLCtDQUErQztvQkFDNUQsSUFBSSxFQUFFLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQztvQkFDNUIsU0FBUyxFQUFHLENBQUMsNkJBQTZCLENBQUM7b0JBQzNDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUMsMkJBQW1CLEVBQUUsbUJBQVMsQ0FBRTtpQkFDakYsQ0FBQzs7c0NBQUE7WUFDRiwyREFxREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnQsIFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvVHJlYXRtZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1RyZWF0bWVudFN0b3JlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NvcnRlcic7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVMsIElUYWJsZVNlbGVjdGlvbkNoYW5nZX0gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuLi9zdGF0ZS9hc09ic2VydmFibGVcIjtcclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAndHJlYXRtZW50LWxpc3QnLFxyXG4gIHByb3ZpZGVyczogW1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50LWxpc3QuaHRtbCcsXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBzdHlsZVVybHMgOiBbJ3N0eWxlcy9zZWxlY3RhYmxlX3VzYWdlLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnRMaXN0Q29tcG9uZW50IHtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIHRpdGxlOiBzdHJpbmcgPSAnVHJlYXRtZW50cyc7XHJcbiAgICB0cmVhdG1lbnQ6IFRyZWF0bWVudDtcclxuICAgIHRyZWF0bWVudHMgOiBUcmVhdG1lbnRbXSA9IFtdO1xyXG4gICAgZmlsdGVyZWRUcmVhdG1lbnRzOiBUcmVhdG1lbnRbXSA9IFtdO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmcgO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGhpZGRlbjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQgKCkgdHJlYXRtZW50Zm9ybTogYW55OyAgXHJcbiAgICBASW5wdXQgKCkgcGF0aWVudElEOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90cmVhdG1lbnRzOiBSeC5CZWhhdmlvclN1YmplY3Q8TGlzdDxUcmVhdG1lbnQ+PiA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHRyZWF0bWVudFNlcnZpY2U6IFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIHRyZWF0bWVudFN0b3JlOiBUcmVhdG1lbnRTdG9yZSkge30gICBcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIlRyZWF0bWVudExpc3RDb21wb25lbnQgbmdPbkluaXQgcGF0aWVudElEXCIsIHRoaXMucGF0aWVudElEKTtcclxuICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUubG9hZEluaXRpYWxEYXRhKHRoaXMucGF0aWVudElEKTtcclxuICAgIH1cclxuICAgIFxyXG4gICBjaGFuZ2UoZGF0YTogSVRhYmxlU2VsZWN0aW9uQ2hhbmdlKSB7XHJcbiAgICBsZXQgdHJlYXRtZW50cyA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgdGhpcy5maWx0ZXJlZFRyZWF0bWVudHMuZm9yRWFjaCgodHJlYXRtZW50OiBUcmVhdG1lbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRyZWF0bWVudFwiLCB0cmVhdG1lbnQpO1xyXG4gICAgICBpZiAoZGF0YS52YWx1ZXMuaW5kZXhPZih0cmVhdG1lbnQuaWQpICE9PSAtMSkge1xyXG4gICAgICAgIHRyZWF0bWVudHMucHVzaCh0cmVhdG1lbnQuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VsZWN0aW9uID0gdHJlYXRtZW50cy5qb2luKCcsICcpO1xyXG4gICAgdGhpcy5jb3VudCA9IHRyZWF0bWVudHMubGVuZ3RoO1xyXG4gIH1cclxuICBcclxuICAgLy8gb3BlbiB0cmVhdG1lbnQgZm9ybSB0byBhZGQgbmV3IHRyZWF0bWVudC5cclxuICAgIGFkZFRyZWF0bWVudCAoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50Zm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRyZWF0bWVudCA9IG5ldyBUcmVhdG1lbnQoLTEsIHRoaXMucGF0aWVudElELCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKVxyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLnRyZWF0bWVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZVRyZWF0bWVudCh0cmVhdG1lbnQ6IFRyZWF0bWVudCkge1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUuZGVsZXRlVHJlYXRtZW50KHRyZWF0bWVudCk7XHJcbiAgICB9XHJcbiAgICBlZGl0VHJlYXRtZW50KHRyZWF0bWVudDogVHJlYXRtZW50KSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50Zm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24odHJlYXRtZW50KTtcclxuICAgIH1cclxuICAgICBmb3JtQWN0aW9uKHRyZWF0bWVudDogVHJlYXRtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RyZWF0bWVudExpc3RDb21wb25lbnQgZm9ybUFjdGlvbiB0cmVhdG1lbnQnLCB0cmVhdG1lbnQpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KHRyZWF0bWVudCk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
