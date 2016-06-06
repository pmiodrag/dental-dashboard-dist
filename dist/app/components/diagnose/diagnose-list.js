System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/DiagnoseBackendService', '../state/DiagnoseStore', '../../services/notificationService', '@angular2-material/toolbar', "ng2-material/index", "rxjs/Rx", 'immutable'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, DiagnoseBackendService_1, DiagnoseStore_1, notificationService_1, toolbar_1, index_1, Rx, immutable_1;
    var DiagnoseListComponent;
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
            function (DiagnoseBackendService_1_1) {
                DiagnoseBackendService_1 = DiagnoseBackendService_1_1;
            },
            function (DiagnoseStore_1_1) {
                DiagnoseStore_1 = DiagnoseStore_1_1;
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
            DiagnoseListComponent = (function () {
                function DiagnoseListComponent(notificationService, diagnoseService, diagnoseStore) {
                    this.notificationService = notificationService;
                    this.diagnoseService = diagnoseService;
                    this.diagnoseStore = diagnoseStore;
                    this.title = 'Diagnoses';
                    this.diagnoses = [];
                    this.filteredDiagnoses = [];
                    this.hidden = false;
                    this._diagnoses = new Rx.BehaviorSubject(immutable_1.List([]));
                }
                DiagnoseListComponent.prototype.ngOnInit = function () {
                    console.log("DiagnoseListComponent ngOnInit");
                    this.diagnoseStore.loadInitialData();
                };
                DiagnoseListComponent.prototype.change = function (data) {
                    var diagnoses = [];
                    console.log("data", data);
                    this.filteredDiagnoses.forEach(function (diagnose) {
                        console.log("diagnose", diagnose);
                        if (data.values.indexOf(diagnose.id) !== -1) {
                            diagnoses.push(diagnose.id);
                        }
                    });
                    this.selection = diagnoses.join(', ');
                    this.count = diagnoses.length;
                };
                // open diagnose form to add new diagnose.
                DiagnoseListComponent.prototype.addDiagnose = function () {
                    this.hidden = true;
                    this.diagnoseform.hidden = false;
                    this.diagnose = new DiagnoseBackendService_1.Diagnose(-1, '', '');
                    this.formAction(this.diagnose);
                };
                DiagnoseListComponent.prototype.deleteDiagnose = function (diagnose) {
                    this.diagnoseStore.deleteDiagnose(diagnose);
                };
                DiagnoseListComponent.prototype.editDiagnose = function (diagnose) {
                    this.hidden = true;
                    this.diagnoseform.hidden = false;
                    this.formAction(diagnose);
                };
                DiagnoseListComponent.prototype.formAction = function (diagnose) {
                    console.log('DiagnoseListComponent formAction diagnose', diagnose);
                    this.notificationService.emitFormActionChangeEvent(diagnose);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], DiagnoseListComponent.prototype, "hidden", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DiagnoseListComponent.prototype, "diagnoseform", void 0);
                DiagnoseListComponent = __decorate([
                    core_1.Component({
                        selector: 'diagnose-list',
                        providers: [DiagnoseBackendService_1.DiagnoseBackendService],
                        templateUrl: 'app/components/diagnoses/diagnose-list.html',
                        host: { '[hidden]': 'hidden' },
                        styleUrls: ['styles/selectable_usage.css'],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar]
                    }), 
                    __metadata('design:paramtypes', [notificationService_1.NotificationService, DiagnoseBackendService_1.DiagnoseBackendService, DiagnoseStore_1.DiagnoseStore])
                ], DiagnoseListComponent);
                return DiagnoseListComponent;
            }());
            exports_1("DiagnoseListComponent", DiagnoseListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFXSSwrQkFBb0IsbUJBQXdDLEVBQVUsZUFBdUMsRUFBVSxhQUE0QjtvQkFBL0gsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBVG5KLFVBQUssR0FBVyxXQUFXLENBQUM7b0JBRTVCLGNBQVMsR0FBZ0IsRUFBRSxDQUFDO29CQUM1QixzQkFBaUIsR0FBZSxFQUFFLENBQUM7b0JBRzFCLFdBQU0sR0FBVyxLQUFLLENBQUM7b0JBRXhCLGVBQVUsR0FBdUMsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNEQsQ0FBQztnQkFFdkosd0NBQVEsR0FBUjtvQkFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRUYsc0NBQU0sR0FBTixVQUFPLElBQTJCO29CQUNqQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBa0I7d0JBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDOUIsQ0FBQztvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDaEMsQ0FBQztnQkFFQSwwQ0FBMEM7Z0JBQ3pDLDJDQUFXLEdBQVg7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGlDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO29CQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCw4Q0FBYyxHQUFkLFVBQWUsUUFBa0I7b0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUNELDRDQUFZLEdBQVosVUFBYSxRQUFrQjtvQkFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFDQSwwQ0FBVSxHQUFWLFVBQVcsUUFBa0I7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ25FLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkExQ0Q7b0JBQUMsWUFBSyxFQUFFOztxRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUc7OzJFQUFBO2dCQWpCYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixTQUFTLEVBQUUsQ0FBQywrQ0FBc0IsQ0FBQzt3QkFDbkMsV0FBVyxFQUFFLDZDQUE2Qzt3QkFDMUQsSUFBSSxFQUFFLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQzt3QkFDNUIsU0FBUyxFQUFHLENBQUMsNkJBQTZCLENBQUM7d0JBQzNDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUMsMkJBQW1CLEVBQUUsbUJBQVMsQ0FBRTtxQkFDakYsQ0FBQzs7eUNBQUE7Z0JBcURGLDRCQUFDO1lBQUQsQ0FwREEsQUFvREMsSUFBQTtZQXBERCx5REFvREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEaWFnbm9zZSwgRGlhZ25vc2VCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0RpYWdub3NlQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvRGlhZ25vc2VTdG9yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBJVGFibGVTZWxlY3Rpb25DaGFuZ2V9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4uL3N0YXRlL2FzT2JzZXJ2YWJsZVwiO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdkaWFnbm9zZS1saXN0JyxcclxuICBwcm92aWRlcnM6IFtEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RpYWdub3Nlcy9kaWFnbm9zZS1saXN0Lmh0bWwnLFxyXG4gIGhvc3Q6IHsnW2hpZGRlbl0nOiAnaGlkZGVuJ30sXHJcbiAgc3R5bGVVcmxzIDogWydzdHlsZXMvc2VsZWN0YWJsZV91c2FnZS5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUyxNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ25vc2VMaXN0Q29tcG9uZW50IHtcclxuXHRcclxuICAgIHRpdGxlOiBzdHJpbmcgPSAnRGlhZ25vc2VzJztcclxuICAgIGRpYWdub3NlOiBEaWFnbm9zZTtcclxuICAgIGRpYWdub3NlcyA6IERpYWdub3NlW10gPSBbXTtcclxuICAgIGZpbHRlcmVkRGlhZ25vc2VzOiBEaWFnbm9zZVtdID0gW107XHJcbiAgICBzZWxlY3Rpb246IHN0cmluZyA7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaGlkZGVuOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCAoKSBkaWFnbm9zZWZvcm06IGFueTsgIFxyXG4gICAgcHJpdmF0ZSBfZGlhZ25vc2VzOiBSeC5CZWhhdmlvclN1YmplY3Q8TGlzdDxEaWFnbm9zZT4+ID0gbmV3IFJ4LkJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgZGlhZ25vc2VTZXJ2aWNlOiBEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlLCBwcml2YXRlIGRpYWdub3NlU3RvcmU6IERpYWdub3NlU3RvcmUpIHt9ICAgXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgY29uc29sZS5sb2coXCJEaWFnbm9zZUxpc3RDb21wb25lbnQgbmdPbkluaXRcIik7XHJcbiAgICAgICB0aGlzLmRpYWdub3NlU3RvcmUubG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgY2hhbmdlKGRhdGE6IElUYWJsZVNlbGVjdGlvbkNoYW5nZSkge1xyXG4gICAgbGV0IGRpYWdub3NlcyA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgdGhpcy5maWx0ZXJlZERpYWdub3Nlcy5mb3JFYWNoKChkaWFnbm9zZTogRGlhZ25vc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRpYWdub3NlXCIsIGRpYWdub3NlKTtcclxuICAgICAgaWYgKGRhdGEudmFsdWVzLmluZGV4T2YoZGlhZ25vc2UuaWQpICE9PSAtMSkge1xyXG4gICAgICAgIGRpYWdub3Nlcy5wdXNoKGRpYWdub3NlLmlkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbiA9IGRpYWdub3Nlcy5qb2luKCcsICcpO1xyXG4gICAgdGhpcy5jb3VudCA9IGRpYWdub3Nlcy5sZW5ndGg7XHJcbiAgfVxyXG4gIFxyXG4gICAvLyBvcGVuIGRpYWdub3NlIGZvcm0gdG8gYWRkIG5ldyBkaWFnbm9zZS5cclxuICAgIGFkZERpYWdub3NlICgpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZWZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZSA9IG5ldyBEaWFnbm9zZSgtMSwgJycsICcnKVxyXG4gICAgICAgIHRoaXMuZm9ybUFjdGlvbih0aGlzLmRpYWdub3NlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlRGlhZ25vc2UoZGlhZ25vc2U6IERpYWdub3NlKSB7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZVN0b3JlLmRlbGV0ZURpYWdub3NlKGRpYWdub3NlKTtcclxuICAgIH1cclxuICAgIGVkaXREaWFnbm9zZShkaWFnbm9zZTogRGlhZ25vc2UpIHtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZWZvcm0uaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JtQWN0aW9uKGRpYWdub3NlKTtcclxuICAgIH1cclxuICAgICBmb3JtQWN0aW9uKGRpYWdub3NlOiBEaWFnbm9zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEaWFnbm9zZUxpc3RDb21wb25lbnQgZm9ybUFjdGlvbiBkaWFnbm9zZScsIGRpYWdub3NlKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZW1pdEZvcm1BY3Rpb25DaGFuZ2VFdmVudChkaWFnbm9zZSk7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
