System.register(['@angular/core', '@angular/common', '@angular/router', '../../services/DiagnoseBackendService', '../state/DiagnoseStore', '../../services/notificationService', '@angular2-material/toolbar', "ng2-material/index", '@angular2-material/checkbox', "rxjs/Rx", 'immutable', '@angular2-material/input', '../../shared/constants/app.constants', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, DiagnoseBackendService_1, DiagnoseStore_1, notificationService_1, toolbar_1, index_1, checkbox_1, Rx, immutable_1, input_1, app_constants_1, AuthService_1;
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
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            let DiagnoseListComponent = class DiagnoseListComponent {
                constructor(authService, notificationService, diagnoseService, diagnoseStore) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.diagnoseService = diagnoseService;
                    this.diagnoseStore = diagnoseStore;
                    this.title = 'Diagnoses';
                    this.diagnoses = [];
                    this.filteredDiagnoses = [];
                    this.iconClass = app_constants_1.ICON_CLASS;
                    this._diagnoses = new Rx.BehaviorSubject(immutable_1.List([]));
                }
                ngOnInit() {
                    console.log("DiagnoseListComponent ngOnInit");
                    this.diagnoseStore.loadInitialData();
                }
                addDiagnose() {
                    let newDiagnose = new DiagnoseBackendService_1.Diagnose(0, this.name, this.description);
                    this.diagnoseStore.addDiagnose(newDiagnose);
                }
                deleteDiagnose(diagnose) {
                    this.diagnoseStore.deleteDiagnose(diagnose);
                }
            };
            DiagnoseListComponent = __decorate([
                core_1.Component({
                    selector: 'diagnose-list',
                    providers: [DiagnoseBackendService_1.DiagnoseBackendService],
                    templateUrl: 'app/components/diagnose/diagnose-list.html',
                    directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, checkbox_1.MdCheckbox, toolbar_1.MdToolbar]
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService, notificationService_1.NotificationService, DiagnoseBackendService_1.DiagnoseBackendService, DiagnoseStore_1.DiagnoseStore])
            ], DiagnoseListComponent);
            exports_1("DiagnoseListComponent", DiagnoseListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFXSSxZQUFtQixXQUF3QixFQUFVLG1CQUF3QyxFQUFVLGVBQXVDLEVBQVUsYUFBNEI7b0JBQWpLLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQXdCO29CQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQVJwTCxVQUFLLEdBQVcsV0FBVyxDQUFDO29CQUU1QixjQUFTLEdBQWdCLEVBQUUsQ0FBQztvQkFDNUIsc0JBQWlCLEdBQWUsRUFBRSxDQUFDO29CQUduQyxjQUFTLEdBQVcsMEJBQVUsQ0FBQztvQkFDdkIsZUFBVSxHQUF1QyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM2RixDQUFDO2dCQUV4TCxRQUFRO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxXQUFXO29CQUNQLElBQUksV0FBVyxHQUFHLElBQUksaUNBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUMvQyxDQUFDO2dCQUNELGNBQWMsQ0FBQyxRQUFrQjtvQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7WUFFTCxDQUFDO1lBaENEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLCtDQUFzQixDQUFDO29CQUNuQyxXQUFXLEVBQUUsNENBQTRDO29CQUN6RCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFDLDJCQUFtQixFQUFFLDJCQUFtQixFQUFFLHFCQUFVLEVBQUUsbUJBQVMsQ0FBRTtpQkFDbEgsQ0FBQzs7cUNBQUE7WUFDRix5REEwQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGlhZ25vc2UsIERpYWdub3NlQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9EaWFnbm9zZUJhY2tlbmRTZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlhZ25vc2VTdG9yZSB9IGZyb20gJy4uL3N0YXRlL0RpYWdub3NlU3RvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc29ydGVyJztcclxuaW1wb3J0IHsgU29ydEJ5RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2RpcmVjdGl2ZXMvc29ydGJ5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge01kQ2hlY2tib3h9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCAqIGFzIFJ4IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuLi9zdGF0ZS9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge0lDT05fQ0xBU1N9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMvYXBwLmNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdkaWFnbm9zZS1saXN0JyxcclxuICBwcm92aWRlcnM6IFtEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLWxpc3QuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsTUFURVJJQUxfRElSRUNUSVZFUywgTURfSU5QVVRfRElSRUNUSVZFUywgTWRDaGVja2JveCwgTWRUb29sYmFyIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdub3NlTGlzdENvbXBvbmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZyA9ICdEaWFnbm9zZXMnO1xyXG4gICAgZGlhZ25vc2U6IERpYWdub3NlO1xyXG4gICAgZGlhZ25vc2VzIDogRGlhZ25vc2VbXSA9IFtdO1xyXG4gICAgZmlsdGVyZWREaWFnbm9zZXM6IERpYWdub3NlW10gPSBbXTtcclxuICAgIHNlbGVjdGlvbjogc3RyaW5nIDtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgICBwcml2YXRlIF9kaWFnbm9zZXM6IFJ4LkJlaGF2aW9yU3ViamVjdDxMaXN0PERpYWdub3NlPj4gPSBuZXcgUnguQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBkaWFnbm9zZVNlcnZpY2U6IERpYWdub3NlQmFja2VuZFNlcnZpY2UsIHByaXZhdGUgZGlhZ25vc2VTdG9yZTogRGlhZ25vc2VTdG9yZSkge30gICBcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhcIkRpYWdub3NlTGlzdENvbXBvbmVudCBuZ09uSW5pdFwiKTtcclxuICAgICAgIHRoaXMuZGlhZ25vc2VTdG9yZS5sb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBhZGREaWFnbm9zZSgpIHsgICAgIFxyXG4gICAgICAgIGxldCBuZXdEaWFnbm9zZSA9IG5ldyBEaWFnbm9zZSgwLCB0aGlzLm5hbWUsIHRoaXMuZGVzY3JpcHRpb24pOyAgXHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZVN0b3JlLmFkZERpYWdub3NlKG5ld0RpYWdub3NlKVxyXG4gICAgfVxyXG4gICAgZGVsZXRlRGlhZ25vc2UoZGlhZ25vc2U6IERpYWdub3NlKSB7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZVN0b3JlLmRlbGV0ZURpYWdub3NlKGRpYWdub3NlKTtcclxuICAgIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
