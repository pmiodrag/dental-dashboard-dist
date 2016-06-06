System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '../../services/diagnoseService', '../../services/notificationService', '../handlers/control-messages', '../state/UiStateStore', '../state/DiagnoseStore', "ng2-material/index", 'ng2-bootstrap/ng2-bootstrap', '@angular2-material/toolbar', '@angular2-material/input'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, diagnoseService_1, notificationService_1, control_messages_1, UiStateStore_1, DiagnoseStore_1, index_1, ng2_bootstrap_1, toolbar_1, input_1;
    var DiagnoseFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (diagnoseService_1_1) {
                diagnoseService_1 = diagnoseService_1_1;
            },
            function (notificationService_1_1) {
                notificationService_1 = notificationService_1_1;
            },
            function (control_messages_1_1) {
                control_messages_1 = control_messages_1_1;
            },
            function (UiStateStore_1_1) {
                UiStateStore_1 = UiStateStore_1_1;
            },
            function (DiagnoseStore_1_1) {
                DiagnoseStore_1 = DiagnoseStore_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            }],
        execute: function() {
            DiagnoseFormComponent = (function () {
                function DiagnoseFormComponent(fb, diagnoseStore, diagnoseService, notificationService, uiStateStore) {
                    this.diagnoseStore = diagnoseStore;
                    this.diagnoseService = diagnoseService;
                    this.notificationService = notificationService;
                    this.uiStateStore = uiStateStore;
                    this.hidden = true;
                    this.submitted = false;
                    this.diagnoseForm = fb.group({
                        'description': ['', common_1.Validators.compose([
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(300)])],
                        'name': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(300)
                            ])]
                    });
                }
                //    public toggleMode():void {
                //      this.ismeridian = !this.ismeridian;
                //    };
                //
                //    public changed():void {
                //      console.log('Time time changed to: ' + this.time);
                //    };
                //    public clear():void {
                //      this.time = void 0;
                //    };
                DiagnoseFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.diagnose = new diagnoseService_1.Diagnose(0, '', '');
                    this.subscription = this.notificationService.getFormActionChangeEmitter()
                        .subscribe(function (diagnose) { return _this.onFormActionChange(diagnose); });
                };
                DiagnoseFormComponent.prototype.onFormActionChange = function (diagnose) {
                    console.log("onFormActionChange diagnose", diagnose);
                    this.diagnose = diagnose;
                    if (diagnose.id == -1) {
                        this.formTitle = "Add Diagnose";
                        this.submitAction = 'add';
                    }
                    else {
                        this.formTitle = "Edit Diagnose";
                        this.submitAction = 'edit';
                    }
                };
                DiagnoseFormComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                DiagnoseFormComponent.prototype.goBack = function () {
                    this.hidden = true;
                    this.diagnoselist.hidden = false;
                };
                DiagnoseFormComponent.prototype.onSubmit = function (diagnose) {
                    console.log("Submit diagnose", diagnose);
                    if (this.submitAction == 'add') {
                        this.addDiagnose(diagnose);
                    }
                    else {
                        this.updateDiagnose(diagnose);
                    }
                    this.submitted = true;
                    this.goBack();
                    this.submitted = true;
                };
                // method to call Store action to create new diagnose
                DiagnoseFormComponent.prototype.addDiagnose = function (diagnose) {
                    //  this.uiStateStore.startBackendAction('Saving Todo...');
                    var _this = this;
                    this.diagnoseStore.addDiagnose(diagnose)
                        .subscribe(function (res) { }, function (err) {
                        _this.uiStateStore.endBackendAction();
                    });
                    this.goBack();
                };
                DiagnoseFormComponent.prototype.updateDiagnose = function (diagnose) {
                    var _this = this;
                    this.diagnoseStore.updateDiagnose(diagnose)
                        .subscribe(function (res) { }, function (err) {
                        _this.uiStateStore.endBackendAction();
                    });
                    this.goBack();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DiagnoseFormComponent.prototype, "diagnoselist", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], DiagnoseFormComponent.prototype, "hidden", void 0);
                DiagnoseFormComponent = __decorate([
                    core_1.Component({
                        selector: 'diagnose-form',
                        templateUrl: 'app/components/diagnose/diagnose-form.html',
                        providers: [diagnoseService_1.DiagnoseService],
                        host: { '[hidden]': 'hidden' },
                        directives: [ng2_bootstrap_1.TimepickerComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, input_1.MD_INPUT_DIRECTIVES, router_deprecated_1.RouterLink, control_messages_1.ControlMessages]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, DiagnoseStore_1.DiagnoseStore, diagnoseService_1.DiagnoseService, notificationService_1.NotificationService, UiStateStore_1.UiStateStore])
                ], DiagnoseFormComponent);
                return DiagnoseFormComponent;
            }());
            exports_1("DiagnoseFormComponent", DiagnoseFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFVSSwrQkFBWSxFQUFlLEVBQVUsYUFBNEIsRUFBVSxlQUFnQyxFQUFVLG1CQUF3QyxFQUFVLFlBQTBCO29CQUE1SixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFOeEwsV0FBTSxHQUFXLElBQUksQ0FBQztvQkFHL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztvQkFLZCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQzNCLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRyxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDdEMsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QixtQkFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDOUIsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZCLG1CQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzs2QkFDMUIsQ0FBQyxDQUFDO3FCQUNKLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUdMLGdDQUFnQztnQkFDaEMsMkNBQTJDO2dCQUMzQyxRQUFRO2dCQUNSLEVBQUU7Z0JBQ0YsNkJBQTZCO2dCQUM3QiwwREFBMEQ7Z0JBQzFELFFBQVE7Z0JBRVIsMkJBQTJCO2dCQUMzQiwyQkFBMkI7Z0JBQzNCLFFBQVE7Z0JBRUwsd0NB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Z0JBYlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLDRDQUE0Qzt3QkFDekQsU0FBUyxFQUFFLENBQUMsaUNBQWUsQ0FBQzt3QkFDNUIsSUFBSSxFQUFFLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQzt3QkFDNUIsVUFBVSxFQUFFLENBQUMsbUNBQW1CLEVBQUUscUNBQXFCLEVBQUUsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsMkJBQW1CLEVBQUUsOEJBQVUsRUFBRSxrQ0FBZSxDQUFDO3FCQUM3SyxDQUFDOzt5Q0FBQTtnQkF5R0YsNEJBQUM7WUFBRCxDQXRHQSxBQXNHQyxJQUFBO1lBdEdELHlEQXNHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlckxpbmt9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHsgRGlhZ25vc2VTZXJ2aWNlLCBEaWFnbm9zZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2RpYWdub3NlU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJvbE1lc3NhZ2VzfSBmcm9tICcuLi9oYW5kbGVycy9jb250cm9sLW1lc3NhZ2VzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvRGlhZ25vc2VTdG9yZSc7XHJcbmltcG9ydCB7TWRQYXR0ZXJuVmFsaWRhdG9yLFxyXG4gIE1kTWluVmFsdWVWYWxpZGF0b3IsXHJcbiAgTWROdW1iZXJSZXF1aXJlZFZhbGlkYXRvcixcclxuICBNZE1heFZhbHVlVmFsaWRhdG9yLCBNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7VGltZXBpY2tlckNvbXBvbmVudCwgREFURVBJQ0tFUl9ESVJFQ1RJVkVTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ2RpYWdub3NlLWZvcm0nLCBcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLWZvcm0uaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbRGlhZ25vc2VTZXJ2aWNlXSxcclxuICBob3N0OiB7J1toaWRkZW5dJzogJ2hpZGRlbid9LFxyXG4gIGRpcmVjdGl2ZXM6IFtUaW1lcGlja2VyQ29tcG9uZW50LCBEQVRFUElDS0VSX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXIsIE1EX0lOUFVUX0RJUkVDVElWRVMsIFJvdXRlckxpbmssIENvbnRyb2xNZXNzYWdlc11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGlhZ25vc2VGb3JtQ29tcG9uZW50IHtcclxuICAgIGRpYWdub3NlRm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgZGlhZ25vc2U6IERpYWdub3NlO1xyXG4gICAgQElucHV0ICgpIGRpYWdub3NlbGlzdDogYW55OyAgXHJcbiAgICBASW5wdXQoKSBoaWRkZW46Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBmb3JtVGl0bGU6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvbjogYW55O1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICBzdWJtaXRBY3Rpb246IHN0cmluZzsgICAgXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBkaWFnbm9zZVN0b3JlOiBEaWFnbm9zZVN0b3JlLCBwcml2YXRlIGRpYWdub3NlU2VydmljZTogRGlhZ25vc2VTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgdWlTdGF0ZVN0b3JlOiBVaVN0YXRlU3RvcmUgKSB7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmRpYWdub3NlRm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICdkZXNjcmlwdGlvbic6IFsnJywgIFZhbGlkYXRvcnMuY29tcG9zZShbICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMDApXSldLFxyXG4gICAgICAgICAgJ25hbWUnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMDApXHJcbiAgICAgICAgICBdKV0gICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICBcclxuXHJcbi8vICAgIHB1YmxpYyB0b2dnbGVNb2RlKCk6dm9pZCB7XHJcbi8vICAgICAgdGhpcy5pc21lcmlkaWFuID0gIXRoaXMuaXNtZXJpZGlhbjtcclxuLy8gICAgfTtcclxuLy9cclxuLy8gICAgcHVibGljIGNoYW5nZWQoKTp2b2lkIHtcclxuLy8gICAgICBjb25zb2xlLmxvZygnVGltZSB0aW1lIGNoYW5nZWQgdG86ICcgKyB0aGlzLnRpbWUpO1xyXG4vLyAgICB9O1xyXG5cclxuLy8gICAgcHVibGljIGNsZWFyKCk6dm9pZCB7XHJcbi8vICAgICAgdGhpcy50aW1lID0gdm9pZCAwO1xyXG4vLyAgICB9O1xyXG4gIFxyXG4gICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRpYWdub3NlID0gbmV3IERpYWdub3NlKDAsICcnLCAnJylcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKGRpYWdub3NlID0+IHRoaXMub25Gb3JtQWN0aW9uQ2hhbmdlKGRpYWdub3NlKSk7IFxyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBvbkZvcm1BY3Rpb25DaGFuZ2UoZGlhZ25vc2U6IERpYWdub3NlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkZvcm1BY3Rpb25DaGFuZ2UgZGlhZ25vc2VcIiwgZGlhZ25vc2UpO1xyXG4gICAgICAgIHRoaXMuZGlhZ25vc2UgPSBkaWFnbm9zZTtcclxuICAgICAgICBpZiAoZGlhZ25vc2UuaWQgPT0gLTEpIHsgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiQWRkIERpYWdub3NlXCI7XHJcbiAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnYWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiRWRpdCBEaWFnbm9zZVwiO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEFjdGlvbiA9ICdlZGl0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnb0JhY2soKSB7ICAgICBcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZWxpc3QuaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdChkaWFnbm9zZSkgeyBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJtaXQgZGlhZ25vc2VcIiwgZGlhZ25vc2UpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEFjdGlvbiA9PSAnYWRkJykgeyAgICAgICAgICAgICBcclxuICAgICAgICAgICB0aGlzLmFkZERpYWdub3NlKGRpYWdub3NlKTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICB0aGlzLnVwZGF0ZURpYWdub3NlKGRpYWdub3NlKTsgXHJcbiAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IFxyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyBcclxuICAgIH1cclxuICAgIC8vIG1ldGhvZCB0byBjYWxsIFN0b3JlIGFjdGlvbiB0byBjcmVhdGUgbmV3IGRpYWdub3NlXHJcbiAgICBcclxuICAgIGFkZERpYWdub3NlKGRpYWdub3NlKSB7XHJcbiAgICAgICBcclxuICAgICAgLy8gIHRoaXMudWlTdGF0ZVN0b3JlLnN0YXJ0QmFja2VuZEFjdGlvbignU2F2aW5nIFRvZG8uLi4nKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZVN0b3JlLmFkZERpYWdub3NlKGRpYWdub3NlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpU3RhdGVTdG9yZS5lbmRCYWNrZW5kQWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICB1cGRhdGVEaWFnbm9zZShkaWFnbm9zZSkge1xyXG4gICAgICAgIHRoaXMuZGlhZ25vc2VTdG9yZS51cGRhdGVEaWFnbm9zZShkaWFnbm9zZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
