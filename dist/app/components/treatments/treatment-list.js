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
            TreatmentListComponent = (function () {
                function TreatmentListComponent(notificationService, treatmentService, treatmentStore) {
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
                TreatmentListComponent.prototype.ngOnInit = function () {
                    console.log("TreatmentListComponent ngOnInit patientID", this.patientID);
                    this.treatmentStore.loadInitialData(this.patientID);
                };
                TreatmentListComponent.prototype.change = function (data) {
                    var treatments = [];
                    console.log("data", data);
                    this.filteredTreatments.forEach(function (treatment) {
                        console.log("treatment", treatment);
                        if (data.values.indexOf(treatment.id) !== -1) {
                            treatments.push(treatment.id);
                        }
                    });
                    this.selection = treatments.join(', ');
                    this.count = treatments.length;
                };
                // open treatment form to add new treatment.
                TreatmentListComponent.prototype.addTreatment = function () {
                    this.hidden = true;
                    this.treatmentform.hidden = false;
                    this.treatment = new TreatmentBackendService_1.Treatment(-1, this.patientID, new Date(), '', '', '');
                    this.formAction(this.treatment);
                };
                TreatmentListComponent.prototype.deleteTreatment = function (treatment) {
                    this.treatmentStore.deleteTreatment(treatment);
                };
                TreatmentListComponent.prototype.editTreatment = function (treatment) {
                    this.hidden = true;
                    this.treatmentform.hidden = false;
                    this.formAction(treatment);
                };
                TreatmentListComponent.prototype.formAction = function (treatment) {
                    console.log('TreatmentListComponent formAction treatment', treatment);
                    this.notificationService.emitFormActionChangeEvent(treatment);
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
                return TreatmentListComponent;
            }());
            exports_1("TreatmentListComponent", TreatmentListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFZSSxnQ0FBb0IsbUJBQXdDLEVBQVUsZ0JBQXlDLEVBQVUsY0FBOEI7b0JBQW5JLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBWHZKLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUMvQixVQUFLLEdBQVcsWUFBWSxDQUFDO29CQUU3QixlQUFVLEdBQWlCLEVBQUUsQ0FBQztvQkFDOUIsdUJBQWtCLEdBQWdCLEVBQUUsQ0FBQztvQkFHNUIsV0FBTSxHQUFXLEtBQUssQ0FBQztvQkFHeEIsZ0JBQVcsR0FBd0MsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOEQsQ0FBQztnQkFFM0oseUNBQVEsR0FBUjtvQkFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVGLHVDQUFNLEdBQU4sVUFBTyxJQUEyQjtvQkFDakMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQW9CO3dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDN0MsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2hDLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUEsNENBQTRDO2dCQUMzQyw2Q0FBWSxHQUFaO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQ0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO29CQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxnREFBZSxHQUFmLFVBQWdCLFNBQW9CO29CQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFDRCw4Q0FBYSxHQUFiLFVBQWMsU0FBb0I7b0JBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0EsMkNBQVUsR0FBVixVQUFXLFNBQW9CO29CQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUN0RSxJQUFJLENBQUMsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBM0NEO29CQUFDLFlBQUssRUFBRTs7c0VBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFHOzs2RUFBQTtnQkFDVDtvQkFBQyxZQUFLLEVBQUc7O3lFQUFBO2dCQWxCYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFNBQVMsRUFBRSxDQUFDLGlEQUF1QixDQUFDO3dCQUNwQyxXQUFXLEVBQUUsK0NBQStDO3dCQUM1RCxJQUFJLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDO3dCQUM1QixTQUFTLEVBQUcsQ0FBQyw2QkFBNkIsQ0FBQzt3QkFDM0MsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwwQkFBaUIsRUFBQywyQkFBbUIsRUFBRSxtQkFBUyxDQUFFO3FCQUNqRixDQUFDOzswQ0FBQTtnQkFzREYsNkJBQUM7WUFBRCxDQXJEQSxBQXFEQyxJQUFBO1lBckRELDJEQXFEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRyZWF0bWVudCwgVHJlYXRtZW50QmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9UcmVhdG1lbnRCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IFRyZWF0bWVudFN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvVHJlYXRtZW50U3RvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc29ydGVyJztcclxuaW1wb3J0IHsgU29ydEJ5RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2RpcmVjdGl2ZXMvc29ydGJ5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgSVRhYmxlU2VsZWN0aW9uQ2hhbmdlfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4uL3N0YXRlL2FzT2JzZXJ2YWJsZVwiO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICd0cmVhdG1lbnQtbGlzdCcsXHJcbiAgcHJvdmlkZXJzOiBbVHJlYXRtZW50QmFja2VuZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtbGlzdC5odG1sJyxcclxuICBob3N0OiB7J1toaWRkZW5dJzogJ2hpZGRlbid9LFxyXG4gIHN0eWxlVXJscyA6IFsnc3R5bGVzL3NlbGVjdGFibGVfdXNhZ2UuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudExpc3RDb21wb25lbnQge1xyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgdGl0bGU6IHN0cmluZyA9ICdUcmVhdG1lbnRzJztcclxuICAgIHRyZWF0bWVudDogVHJlYXRtZW50O1xyXG4gICAgdHJlYXRtZW50cyA6IFRyZWF0bWVudFtdID0gW107XHJcbiAgICBmaWx0ZXJlZFRyZWF0bWVudHM6IFRyZWF0bWVudFtdID0gW107XHJcbiAgICBzZWxlY3Rpb246IHN0cmluZyA7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaGlkZGVuOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCAoKSB0cmVhdG1lbnRmb3JtOiBhbnk7ICBcclxuICAgIEBJbnB1dCAoKSBwYXRpZW50SUQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RyZWF0bWVudHM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PFRyZWF0bWVudD4+ID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgdHJlYXRtZW50U2VydmljZTogVHJlYXRtZW50QmFja2VuZFNlcnZpY2UsIHByaXZhdGUgdHJlYXRtZW50U3RvcmU6IFRyZWF0bWVudFN0b3JlKSB7fSAgIFxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiVHJlYXRtZW50TGlzdENvbXBvbmVudCBuZ09uSW5pdCBwYXRpZW50SURcIiwgdGhpcy5wYXRpZW50SUQpO1xyXG4gICAgICAgdGhpcy50cmVhdG1lbnRTdG9yZS5sb2FkSW5pdGlhbERhdGEodGhpcy5wYXRpZW50SUQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIGNoYW5nZShkYXRhOiBJVGFibGVTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgIGxldCB0cmVhdG1lbnRzID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICB0aGlzLmZpbHRlcmVkVHJlYXRtZW50cy5mb3JFYWNoKCh0cmVhdG1lbnQ6IFRyZWF0bWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJlYXRtZW50XCIsIHRyZWF0bWVudCk7XHJcbiAgICAgIGlmIChkYXRhLnZhbHVlcy5pbmRleE9mKHRyZWF0bWVudC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgdHJlYXRtZW50cy5wdXNoKHRyZWF0bWVudC5pZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB0cmVhdG1lbnRzLmpvaW4oJywgJyk7XHJcbiAgICB0aGlzLmNvdW50ID0gdHJlYXRtZW50cy5sZW5ndGg7XHJcbiAgfVxyXG4gIFxyXG4gICAvLyBvcGVuIHRyZWF0bWVudCBmb3JtIHRvIGFkZCBuZXcgdHJlYXRtZW50LlxyXG4gICAgYWRkVHJlYXRtZW50ICgpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50ID0gbmV3IFRyZWF0bWVudCgtMSwgdGhpcy5wYXRpZW50SUQsIG5ldyBEYXRlKCksICcnLCAnJywgJycpXHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHRoaXMudHJlYXRtZW50KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlVHJlYXRtZW50KHRyZWF0bWVudDogVHJlYXRtZW50KSB7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRTdG9yZS5kZWxldGVUcmVhdG1lbnQodHJlYXRtZW50KTtcclxuICAgIH1cclxuICAgIGVkaXRUcmVhdG1lbnQodHJlYXRtZW50OiBUcmVhdG1lbnQpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0cmVhdG1lbnQpO1xyXG4gICAgfVxyXG4gICAgIGZvcm1BY3Rpb24odHJlYXRtZW50OiBUcmVhdG1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVHJlYXRtZW50TGlzdENvbXBvbmVudCBmb3JtQWN0aW9uIHRyZWF0bWVudCcsIHRyZWF0bWVudCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQodHJlYXRtZW50KTtcclxuICAgIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
