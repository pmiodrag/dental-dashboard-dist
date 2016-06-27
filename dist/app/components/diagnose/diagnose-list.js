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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFXSSxZQUFtQixXQUF3QixFQUFVLG1CQUF3QyxFQUFVLGVBQXVDLEVBQVUsYUFBNEI7b0JBQWpLLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQXdCO29CQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQVJwTCxVQUFLLEdBQVcsV0FBVyxDQUFDO29CQUU1QixjQUFTLEdBQWdCLEVBQUUsQ0FBQztvQkFDNUIsc0JBQWlCLEdBQWUsRUFBRSxDQUFDO29CQUduQyxjQUFTLEdBQVcsMEJBQVUsQ0FBQztvQkFDdkIsZUFBVSxHQUF1QyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM2RixDQUFDO2dCQUV4TCxRQUFRO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztnQkFFRCxXQUFXO29CQUNQLElBQUksV0FBVyxHQUFHLElBQUksaUNBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUMvQyxDQUFDO2dCQUNELGNBQWMsQ0FBQyxRQUFrQjtvQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELENBQUM7WUFFTCxDQUFDO1lBaENEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLCtDQUFzQixDQUFDO29CQUNuQyxXQUFXLEVBQUUsNENBQTRDO29CQUN6RCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDBCQUFpQixFQUFDLDJCQUFtQixFQUFFLDJCQUFtQixFQUFFLHFCQUFVLEVBQUUsbUJBQVMsQ0FBRTtpQkFDbEgsQ0FBQzs7cUNBQUE7WUFDRix5REEwQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEaWFnbm9zZSwgRGlhZ25vc2VCYWNrZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0RpYWdub3NlQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvRGlhZ25vc2VTdG9yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7TWRDaGVja2JveH0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0ICogYXMgUnggZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4uL3N0YXRlL2FzT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSc7XHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ2RpYWdub3NlLWxpc3QnLFxyXG4gIHByb3ZpZGVyczogW0RpYWdub3NlQmFja2VuZFNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtbGlzdC5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUyxNQVRFUklBTF9ESVJFQ1RJVkVTLCBNRF9JTlBVVF9ESVJFQ1RJVkVTLCBNZENoZWNrYm94LCBNZFRvb2xiYXIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ25vc2VMaXN0Q29tcG9uZW50IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nID0gJ0RpYWdub3Nlcyc7XHJcbiAgICBkaWFnbm9zZTogRGlhZ25vc2U7XHJcbiAgICBkaWFnbm9zZXMgOiBEaWFnbm9zZVtdID0gW107XHJcbiAgICBmaWx0ZXJlZERpYWdub3NlczogRGlhZ25vc2VbXSA9IFtdO1xyXG4gICAgc2VsZWN0aW9uOiBzdHJpbmcgO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIGljb25DbGFzczogc3RyaW5nID0gSUNPTl9DTEFTUztcclxuICAgIHByaXZhdGUgX2RpYWdub3NlczogUnguQmVoYXZpb3JTdWJqZWN0PExpc3Q8RGlhZ25vc2U+PiA9IG5ldyBSeC5CZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGRpYWdub3NlU2VydmljZTogRGlhZ25vc2VCYWNrZW5kU2VydmljZSwgcHJpdmF0ZSBkaWFnbm9zZVN0b3JlOiBEaWFnbm9zZVN0b3JlKSB7fSAgIFxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKFwiRGlhZ25vc2VMaXN0Q29tcG9uZW50IG5nT25Jbml0XCIpO1xyXG4gICAgICAgdGhpcy5kaWFnbm9zZVN0b3JlLmxvYWRJbml0aWFsRGF0YSgpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGFkZERpYWdub3NlKCkgeyAgICAgXHJcbiAgICAgICAgbGV0IG5ld0RpYWdub3NlID0gbmV3IERpYWdub3NlKDAsIHRoaXMubmFtZSwgdGhpcy5kZXNjcmlwdGlvbik7ICBcclxuICAgICAgICB0aGlzLmRpYWdub3NlU3RvcmUuYWRkRGlhZ25vc2UobmV3RGlhZ25vc2UpXHJcbiAgICB9XHJcbiAgICBkZWxldGVEaWFnbm9zZShkaWFnbm9zZTogRGlhZ25vc2UpIHtcclxuICAgICAgICB0aGlzLmRpYWdub3NlU3RvcmUuZGVsZXRlRGlhZ25vc2UoZGlhZ25vc2UpO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
