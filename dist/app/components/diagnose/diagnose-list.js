System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/DiagnoseBackendService', '../state/DiagnoseStore', '../../services/notificationService', '@angular2-material/toolbar', "ng2-material/index", '@angular2-material/checkbox', "rxjs/Rx", 'immutable', '@angular2-material/input', '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, DiagnoseBackendService_1, DiagnoseStore_1, notificationService_1, toolbar_1, index_1, checkbox_1, Rx, immutable_1, input_1, app_constants_1;
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
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
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
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this._diagnoses = new Rx.BehaviorSubject(immutable_1.List([]));
                }
                DiagnoseListComponent.prototype.ngOnInit = function () {
                    console.log("DiagnoseListComponent ngOnInit");
                    this.diagnoseStore.loadInitialData();
                };
                DiagnoseListComponent.prototype.addDiagnose = function () {
                    var newDiagnose = new DiagnoseBackendService_1.Diagnose(0, this.name, this.description);
                    this.diagnoseStore.addDiagnose(newDiagnose);
                };
                DiagnoseListComponent.prototype.deleteDiagnose = function (diagnose) {
                    this.diagnoseStore.deleteDiagnose(diagnose);
                };
                DiagnoseListComponent = __decorate([
                    core_1.Component({
                        selector: 'diagnose-list',
                        providers: [DiagnoseBackendService_1.DiagnoseBackendService],
                        templateUrl: 'app/components/diagnose/diagnose-list.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, checkbox_1.MdCheckbox, toolbar_1.MdToolbar]
                    }), 
                    __metadata('design:paramtypes', [notificationService_1.NotificationService, DiagnoseBackendService_1.DiagnoseBackendService, DiagnoseStore_1.DiagnoseStore])
                ], DiagnoseListComponent);
                return DiagnoseListComponent;
            }());
            exports_1("DiagnoseListComponent", DiagnoseListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFXSSwrQkFBb0IsbUJBQXdDLEVBQVUsZUFBdUMsRUFBVSxhQUE0QjtvQkFBL0gsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7b0JBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBUm5KLFVBQUssR0FBVyxXQUFXLENBQUM7b0JBRTVCLGNBQVMsR0FBZ0IsRUFBRSxDQUFDO29CQUM1QixzQkFBaUIsR0FBZSxFQUFFLENBQUM7b0JBR25DLGNBQVMsR0FBVywwQkFBVSxDQUFDO29CQUN2QixlQUFVLEdBQXVDLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxnQkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzRELENBQUM7Z0JBRXZKLHdDQUFRLEdBQVI7b0JBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELDJDQUFXLEdBQVg7b0JBQ0ksSUFBSSxXQUFXLEdBQUcsSUFBSSxpQ0FBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQy9DLENBQUM7Z0JBQ0QsOENBQWMsR0FBZCxVQUFlLFFBQWtCO29CQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkE5Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsU0FBUyxFQUFFLENBQUMsK0NBQXNCLENBQUM7d0JBQ25DLFdBQVcsRUFBRSw0Q0FBNEM7d0JBQ3pELFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUMsMkJBQW1CLEVBQUUsMkJBQW1CLEVBQUUscUJBQVUsRUFBRSxtQkFBUyxDQUFFO3FCQUNsSCxDQUFDOzt5Q0FBQTtnQkEyQkYsNEJBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELHlEQTBCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlU2VnbWVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERpYWdub3NlLCBEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvRGlhZ25vc2VCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IERpYWdub3NlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9EaWFnbm9zZVN0b3JlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSAgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgU29ydGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NvcnRlcic7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtNZENoZWNrYm94fSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgKiBhcyBSeCBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi4vc3RhdGUvYXNPYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdkaWFnbm9zZS1saXN0JyxcclxuICBwcm92aWRlcnM6IFtEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLWxpc3QuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsTUFURVJJQUxfRElSRUNUSVZFUywgTURfSU5QVVRfRElSRUNUSVZFUywgTWRDaGVja2JveCwgTWRUb29sYmFyIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdub3NlTGlzdENvbXBvbmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZyA9ICdEaWFnbm9zZXMnO1xyXG4gICAgZGlhZ25vc2U6IERpYWdub3NlO1xyXG4gICAgZGlhZ25vc2VzIDogRGlhZ25vc2VbXSA9IFtdO1xyXG4gICAgZmlsdGVyZWREaWFnbm9zZXM6IERpYWdub3NlW10gPSBbXTtcclxuICAgIHNlbGVjdGlvbjogc3RyaW5nIDtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgICBwcml2YXRlIF9kaWFnbm9zZXM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PERpYWdub3NlPj4gPSBuZXcgUnguQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBkaWFnbm9zZVNlcnZpY2U6IERpYWdub3NlQmFja2VuZFNlcnZpY2UsIHByaXZhdGUgZGlhZ25vc2VTdG9yZTogRGlhZ25vc2VTdG9yZSkge30gICBcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIkRpYWdub3NlTGlzdENvbXBvbmVudCBuZ09uSW5pdFwiKTtcclxuICAgICAgIHRoaXMuZGlhZ25vc2VTdG9yZS5sb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBhZGREaWFnbm9zZSgpIHsgICAgIFxyXG4gICAgICAgIGxldCBuZXdEaWFnbm9zZSA9IG5ldyBEaWFnbm9zZSgwLCB0aGlzLm5hbWUsIHRoaXMuZGVzY3JpcHRpb24pOyAgXHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZVN0b3JlLmFkZERpYWdub3NlKG5ld0RpYWdub3NlKVxyXG4gICAgfVxyXG4gICAgZGVsZXRlRGlhZ25vc2UoZGlhZ25vc2U6IERpYWdub3NlKSB7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZVN0b3JlLmRlbGV0ZURpYWdub3NlKGRpYWdub3NlKTtcclxuICAgIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
