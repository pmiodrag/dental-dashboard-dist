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
    var core_1, common_1, router_1, TreatmentBackendService_1, TreatmentStore_1, notificationService_1, toolbar_1, index_1, app_constants_1, app_constants_2, Rx, immutable_1;
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
                app_constants_2 = app_constants_1_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
            let TreatmentListComponent = class TreatmentListComponent {
                constructor(notificationService, route, treatmentService, treatmentStore) {
                    this.notificationService = notificationService;
                    this.route = route;
                    this.treatmentService = treatmentService;
                    this.treatmentStore = treatmentStore;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this.title = 'Treatments';
                    this.treatments = [];
                    this.filteredTreatments = [];
                    this.hidden = false;
                    //@Input () doctorID: number;
                    this._treatments = new Rx.BehaviorSubject(immutable_1.List([]));
                }
                ngOnInit() {
                    console.log("TreatmentListComponent ngOnInit patientID", this.userID);
                    this.route.params.subscribe(params => {
                        this.owner = params['owner']; // (+) converts string 'id' to a number
                        console.log("ngOnInit GalleryComponent patientID", this.owner);
                        if (this.owner == app_constants_2.DOCTOR_OWNER) {
                            this.doctorID = this.userID;
                            this.treatmentStore.loadTreatmentsByDoctorId(this.userID);
                        }
                        else {
                            this.patientID = this.userID;
                            this.treatmentStore.loadInitialData(this.userID);
                        }
                    });
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
                    this.treatment = new TreatmentBackendService_1.Treatment(-1, this.patientID, this.doctorID, new Date(), '', '', '');
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
            ], TreatmentListComponent.prototype, "userID", void 0);
            TreatmentListComponent = __decorate([
                core_1.Component({
                    selector: 'treatment-list',
                    providers: [TreatmentBackendService_1.TreatmentBackendService],
                    templateUrl: 'app/components/treatments/treatment-list.html',
                    host: { '[hidden]': 'hidden' },
                    styleUrls: ['styles/selectable_usage.css'],
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar]
                }), 
                __metadata('design:paramtypes', [notificationService_1.NotificationService, router_1.ActivatedRoute, TreatmentBackendService_1.TreatmentBackendService, TreatmentStore_1.TreatmentStore])
            ], TreatmentListComponent);
            exports_1("TreatmentListComponent", TreatmentListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBZ0JJLFlBQW9CLG1CQUF3QyxFQUFVLEtBQXFCLEVBQVUsZ0JBQXlDLEVBQVUsY0FBOEI7b0JBQWxLLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBZnRMLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUMvQixVQUFLLEdBQVcsWUFBWSxDQUFDO29CQUU3QixlQUFVLEdBQWlCLEVBQUUsQ0FBQztvQkFDOUIsdUJBQWtCLEdBQWdCLEVBQUUsQ0FBQztvQkFNNUIsV0FBTSxHQUFXLEtBQUssQ0FBQztvQkFHaEMsNkJBQTZCO29CQUNyQixnQkFBVyxHQUF3QyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUc1RixDQUFDO2dCQUVELFFBQVE7b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNO3dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVDQUF1Qzt3QkFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7d0JBQ2hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksNEJBQVksQ0FBQyxDQUFBLENBQUM7NEJBQzVCLElBQUksQ0FBQyxRQUFR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Qyx3QkFBZSxFQUFFLDBCQUFpQixFQUFDLDJCQUFtQixFQUFFLG1CQUFTLENBQUU7aUJBQ2pGLENBQUM7O3NDQUFBO1lBQ0YsMkRBc0VDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnQsIFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvVHJlYXRtZW50QmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1RyZWF0bWVudFN0b3JlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NvcnRlcic7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVMsIElUYWJsZVNlbGVjdGlvbkNoYW5nZX0gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7RE9DVE9SX09XTkVSfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQge1BBVElFTlRfT1dORVJ9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuLi9zdGF0ZS9hc09ic2VydmFibGVcIjtcclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAndHJlYXRtZW50LWxpc3QnLFxyXG4gIHByb3ZpZGVyczogW1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50LWxpc3QuaHRtbCcsXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBzdHlsZVVybHMgOiBbJ3N0eWxlcy9zZWxlY3RhYmxlX3VzYWdlLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnRMaXN0Q29tcG9uZW50IHtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIHRpdGxlOiBzdHJpbmcgPSAnVHJlYXRtZW50cyc7XHJcbiAgICB0cmVhdG1lbnQ6IFRyZWF0bWVudDtcclxuICAgIHRyZWF0bWVudHMgOiBUcmVhdG1lbnRbXSA9IFtdO1xyXG4gICAgZmlsdGVyZWRUcmVhdG1lbnRzOiBUcmVhdG1lbnRbXSA9IFtdO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmcgO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIG93bmVyOiBzdHJpbmc7XHJcbiAgICBkb2N0b3JJRDogbnVtYmVyO1xyXG4gICAgcGF0aWVudElEOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0ICgpIHRyZWF0bWVudGZvcm06IGFueTsgIFxyXG4gICAgQElucHV0ICgpIHVzZXJJRDogbnVtYmVyO1xyXG4gICAgLy9ASW5wdXQgKCkgZG9jdG9ySUQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RyZWF0bWVudHM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PFRyZWF0bWVudD4+ID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHRyZWF0bWVudFNlcnZpY2U6IFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIHRyZWF0bWVudFN0b3JlOiBUcmVhdG1lbnRTdG9yZSkge1xyXG4gICAgICAgXHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJUcmVhdG1lbnRMaXN0Q29tcG9uZW50IG5nT25Jbml0IHBhdGllbnRJRFwiLCB0aGlzLnVzZXJJRCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIgPSBwYXJhbXNbJ293bmVyJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0IEdhbGxlcnlDb21wb25lbnQgcGF0aWVudElEXCIsIHRoaXMub3duZXIgKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3duZXIgPT0gRE9DVE9SX09XTkVSKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9jdG9ySUQgPSB0aGlzLnVzZXJJRDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUubG9hZFRyZWF0bWVudHNCeURvY3RvcklkKHRoaXMudXNlcklEKTsgICAgICBcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50SUQgPSB0aGlzLnVzZXJJRDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUubG9hZEluaXRpYWxEYXRhKHRoaXMudXNlcklEKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgIGNoYW5nZShkYXRhOiBJVGFibGVTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgIGxldCB0cmVhdG1lbnRzID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICB0aGlzLmZpbHRlcmVkVHJlYXRtZW50cy5mb3JFYWNoKCh0cmVhdG1lbnQ6IFRyZWF0bWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJlYXRtZW50XCIsIHRyZWF0bWVudCk7XHJcbiAgICAgIGlmIChkYXRhLnZhbHVlcy5pbmRleE9mKHRyZWF0bWVudC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgdHJlYXRtZW50cy5wdXNoKHRyZWF0bWVudC5pZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB0cmVhdG1lbnRzLmpvaW4oJywgJyk7XHJcbiAgICB0aGlzLmNvdW50ID0gdHJlYXRtZW50cy5sZW5ndGg7XHJcbiAgfVxyXG4gIFxyXG4gICAvLyBvcGVuIHRyZWF0bWVudCBmb3JtIHRvIGFkZCBuZXcgdHJlYXRtZW50LlxyXG4gICAgYWRkVHJlYXRtZW50ICgpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50ID0gbmV3IFRyZWF0bWVudCgtMSwgdGhpcy5wYXRpZW50SUQsICB0aGlzLmRvY3RvcklELCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKVxyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLnRyZWF0bWVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRlbGV0ZVRyZWF0bWVudCh0cmVhdG1lbnQ6IFRyZWF0bWVudCkge1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUuZGVsZXRlVHJlYXRtZW50KHRyZWF0bWVudCk7XHJcbiAgICB9XHJcbiAgICBlZGl0VHJlYXRtZW50KHRyZWF0bWVudDogVHJlYXRtZW50KSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50Zm9ybS5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcm1BY3Rpb24odHJlYXRtZW50KTtcclxuICAgIH1cclxuICAgICBmb3JtQWN0aW9uKHRyZWF0bWVudDogVHJlYXRtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RyZWF0bWVudExpc3RDb21wb25lbnQgZm9ybUFjdGlvbiB0cmVhdG1lbnQnLCB0cmVhdG1lbnQpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5lbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KHRyZWF0bWVudCk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
