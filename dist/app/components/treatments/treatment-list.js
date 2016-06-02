System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/TreatmentBackendService', '../state/TreatmentStore', '../../services/notificationService', '@angular2-material/toolbar', "ng2-material/index", "rxjs/Rx", 'immutable'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, TreatmentBackendService_1, TreatmentStore_1, notificationService_1, toolbar_1, index_1, Rx, immutable_1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFZSSxnQ0FBb0IsbUJBQXdDLEVBQVUsZ0JBQXlDLEVBQVUsY0FBOEI7b0JBQW5JLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBVnZKLFVBQUssR0FBVyxZQUFZLENBQUM7b0JBRTdCLGVBQVUsR0FBaUIsRUFBRSxDQUFDO29CQUM5Qix1QkFBa0IsR0FBZ0IsRUFBRSxDQUFDO29CQUc1QixXQUFNLEdBQVcsS0FBSyxDQUFDO29CQUd4QixnQkFBVyxHQUF3QyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM4RCxDQUFDO2dCQUUzSix5Q0FBUSxHQUFSO29CQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBRUYsdUNBQU0sR0FBTixVQUFPLElBQTJCO29CQUNqQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBb0I7d0JBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM3QyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDakMsQ0FBQztnQkFFQSw0Q0FBNEM7Z0JBQzNDLDZDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1DQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7b0JBQzFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELGdEQUFlLEdBQWYsVUFBZ0IsU0FBb0I7b0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDO2dCQUNELDhDQUFhLEdBQWIsVUFBYyxTQUFvQjtvQkFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFDQSwyQ0FBVSxHQUFWLFVBQVcsU0FBb0I7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3RFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkEzQ0Q7b0JBQUMsWUFBSyxFQUFFOztzRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUc7OzZFQUFBO2dCQUNUO29CQUFDLFlBQUssRUFBRzs7eUVBQUE7Z0JBbEJiO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsU0FBUyxFQUFFLENBQUMsaURBQXVCLENBQUM7d0JBQ3BDLFdBQVcsRUFBRSwrQ0FBK0M7d0JBQzVELElBQUksRUFBRSxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUM7d0JBQzVCLFNBQVMsRUFBRyxDQUFDLDZCQUE2QixDQUFDO3dCQUMzQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFDLDJCQUFtQixFQUFFLG1CQUFTLENBQUU7cUJBQ2pGLENBQUM7OzBDQUFBO2dCQXNERiw2QkFBQztZQUFELENBckRBLEFBcURDLElBQUE7WUFyREQsMkRBcURDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudC1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUywgUm91dGVTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVHJlYXRtZW50LCBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgVHJlYXRtZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9UcmVhdG1lbnRTdG9yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBJVGFibGVTZWxlY3Rpb25DaGFuZ2V9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4uL3N0YXRlL2FzT2JzZXJ2YWJsZVwiO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICd0cmVhdG1lbnQtbGlzdCcsXHJcbiAgcHJvdmlkZXJzOiBbVHJlYXRtZW50QmFja2VuZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtbGlzdC5odG1sJyxcclxuICBob3N0OiB7J1toaWRkZW5dJzogJ2hpZGRlbid9LFxyXG4gIHN0eWxlVXJscyA6IFsnc3R5bGVzL3NlbGVjdGFibGVfdXNhZ2UuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudExpc3RDb21wb25lbnQge1xyXG5cdFxyXG4gICAgdGl0bGU6IHN0cmluZyA9ICdUcmVhdG1lbnRzJztcclxuICAgIHRyZWF0bWVudDogVHJlYXRtZW50O1xyXG4gICAgdHJlYXRtZW50cyA6IFRyZWF0bWVudFtdID0gW107XHJcbiAgICBmaWx0ZXJlZFRyZWF0bWVudHM6IFRyZWF0bWVudFtdID0gW107XHJcbiAgICBzZWxlY3Rpb246IHN0cmluZyA7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaGlkZGVuOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCAoKSB0cmVhdG1lbnRmb3JtOiBhbnk7ICBcclxuICAgIEBJbnB1dCAoKSBwYXRpZW50SUQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RyZWF0bWVudHM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PFRyZWF0bWVudD4+ID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgdHJlYXRtZW50U2VydmljZTogVHJlYXRtZW50QmFja2VuZFNlcnZpY2UsIHByaXZhdGUgdHJlYXRtZW50U3RvcmU6IFRyZWF0bWVudFN0b3JlKSB7fSAgIFxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiVHJlYXRtZW50TGlzdENvbXBvbmVudCBuZ09uSW5pdCBwYXRpZW50SURcIiwgdGhpcy5wYXRpZW50SUQpO1xyXG4gICAgICAgdGhpcy50cmVhdG1lbnRTdG9yZS5sb2FkSW5pdGlhbERhdGEodGhpcy5wYXRpZW50SUQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIGNoYW5nZShkYXRhOiBJVGFibGVTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgIGxldCB0cmVhdG1lbnRzID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgICB0aGlzLmZpbHRlcmVkVHJlYXRtZW50cy5mb3JFYWNoKCh0cmVhdG1lbnQ6IFRyZWF0bWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJlYXRtZW50XCIsIHRyZWF0bWVudCk7XHJcbiAgICAgIGlmIChkYXRhLnZhbHVlcy5pbmRleE9mKHRyZWF0bWVudC5pZCkgIT09IC0xKSB7XHJcbiAgICAgICAgdHJlYXRtZW50cy5wdXNoKHRyZWF0bWVudC5pZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSB0cmVhdG1lbnRzLmpvaW4oJywgJyk7XHJcbiAgICB0aGlzLmNvdW50ID0gdHJlYXRtZW50cy5sZW5ndGg7XHJcbiAgfVxyXG4gIFxyXG4gICAvLyBvcGVuIHRyZWF0bWVudCBmb3JtIHRvIGFkZCBuZXcgdHJlYXRtZW50LlxyXG4gICAgYWRkVHJlYXRtZW50ICgpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50ID0gbmV3IFRyZWF0bWVudCgtMSwgdGhpcy5wYXRpZW50SUQsIG5ldyBEYXRlKCksICcnLCAnJywgJycpXHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKHRoaXMudHJlYXRtZW50KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlVHJlYXRtZW50KHRyZWF0bWVudDogVHJlYXRtZW50KSB7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRTdG9yZS5kZWxldGVUcmVhdG1lbnQodHJlYXRtZW50KTtcclxuICAgIH1cclxuICAgIGVkaXRUcmVhdG1lbnQodHJlYXRtZW50OiBUcmVhdG1lbnQpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRmb3JtLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0cmVhdG1lbnQpO1xyXG4gICAgfVxyXG4gICAgIGZvcm1BY3Rpb24odHJlYXRtZW50OiBUcmVhdG1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVHJlYXRtZW50TGlzdENvbXBvbmVudCBmb3JtQWN0aW9uIHRyZWF0bWVudCcsIHRyZWF0bWVudCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmVtaXRGb3JtQWN0aW9uQ2hhbmdlRXZlbnQodHJlYXRtZW50KTtcclxuICAgIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
