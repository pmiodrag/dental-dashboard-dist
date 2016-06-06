System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '../../services/treatmentService', '../../services/notificationService', '../handlers/control-messages', '../state/UiStateStore', '../state/TreatmentStore', "ng2-material/index", 'ng2-bootstrap/ng2-bootstrap', '@angular2-material/toolbar', '@angular2-material/input'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, treatmentService_1, notificationService_1, control_messages_1, UiStateStore_1, TreatmentStore_1, index_1, ng2_bootstrap_1, toolbar_1, input_1;
    var TreatmentFormComponent;
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
            function (treatmentService_1_1) {
                treatmentService_1 = treatmentService_1_1;
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
            function (TreatmentStore_1_1) {
                TreatmentStore_1 = TreatmentStore_1_1;
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
            TreatmentFormComponent = (function () {
                function TreatmentFormComponent(fb, treatmentStore, treatmentService, notificationService, uiStateStore) {
                    this.treatmentStore = treatmentStore;
                    this.treatmentService = treatmentService;
                    this.notificationService = notificationService;
                    this.uiStateStore = uiStateStore;
                    this.hidden = true;
                    this.submitted = false;
                    // Date and time propertiesTimepicker
                    this.date = new Date();
                    this.hstep = 1;
                    this.mstep = 15;
                    this.ismeridian = true;
                    this.time = new Date();
                    this.options = {
                        hstep: [1, 2, 3],
                        mstep: [1, 5, 10, 15, 25, 30]
                    };
                    this.treatmentForm = fb.group({
                        'therapy': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(300)])],
                        'diagnose': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(300)
                            ])],
                        'price': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(10)
                            ])]
                    });
                }
                TreatmentFormComponent.prototype.toggleMode = function () {
                    this.ismeridian = !this.ismeridian;
                };
                ;
                TreatmentFormComponent.prototype.changed = function () {
                    console.log('Time time changed to: ' + this.time);
                };
                ;
                TreatmentFormComponent.prototype.clear = function () {
                    this.time = void 0;
                };
                ;
                TreatmentFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.treatment = new treatmentService_1.Treatment(0, 1, new Date(), '', '', '');
                    this.subscription = this.notificationService.getFormActionChangeEmitter()
                        .subscribe(function (treatment) { return _this.onFormActionChange(treatment); });
                };
                TreatmentFormComponent.prototype.onFormActionChange = function (treatment) {
                    console.log("onFormActionChange treatment", treatment);
                    this.treatment = treatment;
                    if (treatment.id == -1) {
                        this.formTitle = "Add Treatment";
                        this.submitAction = 'add';
                    }
                    else {
                        this.formTitle = "Edit Treatment";
                        this.submitAction = 'edit';
                    }
                };
                TreatmentFormComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                TreatmentFormComponent.prototype.goBack = function () {
                    this.hidden = true;
                    this.treatmentlist.hidden = false;
                };
                TreatmentFormComponent.prototype.onSubmit = function (treatment) {
                    //        treatment.treatmentdate = this.date;
                    //        treatment.treatmentdate.setHours(this.time.getHours());
                    //        treatment.treatmentdate.setMinutes(this.time.getMinutes());
                    //        console.log("Submit treatment datetime() ", treatment.treatmentdate);
                    //        console.log("Submit treatment date() ", this.date );
                    //        console.log("Submit treatment time() ", this.time, "this.time.getMinutes()", this.time.getMinutes() )   
                    console.log("Submit treatment", treatment);
                    if (this.submitAction == 'add') {
                        this.addTreatment(treatment);
                    }
                    else {
                        this.updateTreatment(treatment);
                    }
                    this.submitted = true;
                    this.goBack();
                    this.submitted = true;
                };
                // method to call Store action to create new treatment
                TreatmentFormComponent.prototype.addTreatment = function (treatment) {
                    this.treatmentStore.addTreatment(treatment);
                    this.goBack();
                };
                TreatmentFormComponent.prototype.updateTreatment = function (treatment) {
                    var _this = this;
                    this.treatmentStore.updateTreatment(treatment)
                        .subscribe(function (res) { }, function (err) {
                        _this.uiStateStore.endBackendAction();
                    });
                    this.goBack();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TreatmentFormComponent.prototype, "treatmentlist", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], TreatmentFormComponent.prototype, "hidden", void 0);
                TreatmentFormComponent = __decorate([
                    core_1.Component({
                        selector: 'treatment-form',
                        templateUrl: 'app/components/treatments/treatment-form.html',
                        providers: [treatmentService_1.TreatmentService],
                        host: { '[hidden]': 'hidden' },
                        directives: [ng2_bootstrap_1.TimepickerComponent, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, input_1.MD_INPUT_DIRECTIVES, router_deprecated_1.RouterLink, control_messages_1.ControlMessages]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, TreatmentStore_1.TreatmentStore, treatmentService_1.TreatmentService, notificationService_1.NotificationService, UiStateStore_1.UiStateStore])
                ], TreatmentFormComponent);
                return TreatmentFormComponent;
            }());
            exports_1("TreatmentFormComponent", TreatmentFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFvQkksZ0NBQVksRUFBZSxFQUFVLGNBQThCLEVBQVUsZ0JBQWtDLEVBQVUsbUJBQXdDLEVBQVUsWUFBMEI7b0JBQWhLLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBaEI1TCxXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUcvQixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQUVsQixxQ0FBcUM7b0JBQ3JDLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNqQixVQUFLLEdBQVUsQ0FBQyxDQUFDO29CQUNqQixVQUFLLEdBQVUsRUFBRSxDQUFDO29CQUNsQixlQUFVLEdBQVcsSUFBSSxDQUFDO29CQUMxQixTQUFJLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsWUFBTyxHQUFPO3dCQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7cUJBQ2hDLENBQUM7b0JBSUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUcsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ2xDLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QixtQkFBVSxDQUFDLFNB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QUUsa0NBQWUsQ0FBQztxQkFDN0ssQ0FBQzs7MENBQUE7Z0JBcUhGLDZCQUFDO1lBQUQsQ0FsSEEsQUFrSEMsSUFBQTtZQWxIRCwyREFrSEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50LWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7IFRyZWF0bWVudFNlcnZpY2UsIFRyZWF0bWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyZWF0bWVudFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IENvbnRyb2xNZXNzYWdlc30gZnJvbSAnLi4vaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVWlTdGF0ZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvVWlTdGF0ZVN0b3JlJztcclxuaW1wb3J0IHsgVHJlYXRtZW50U3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9UcmVhdG1lbnRTdG9yZSc7XHJcbmltcG9ydCB7TWRQYXR0ZXJuVmFsaWRhdG9yLFxyXG4gIE1kTWluVmFsdWVWYWxpZGF0b3IsXHJcbiAgTWROdW1iZXJSZXF1aXJlZFZhbGlkYXRvcixcclxuICBNZE1heFZhbHVlVmFsaWRhdG9yLCBNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7VGltZXBpY2tlckNvbXBvbmVudCwgREFURVBJQ0tFUl9ESVJFQ1RJVkVTfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ3RyZWF0bWVudC1mb3JtJywgXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudC1mb3JtLmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1RyZWF0bWVudFNlcnZpY2VdLFxyXG4gIGhvc3Q6IHsnW2hpZGRlbl0nOiAnaGlkZGVuJ30sXHJcbiAgZGlyZWN0aXZlczogW1RpbWVwaWNrZXJDb21wb25lbnQsIERBVEVQSUNLRVJfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciwgTURfSU5QVVRfRElSRUNUSVZFUywgUm91dGVyTGluaywgQ29udHJvbE1lc3NhZ2VzXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnRGb3JtQ29tcG9uZW50IHtcclxuICAgIHRyZWF0bWVudEZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIHRyZWF0bWVudDogVHJlYXRtZW50O1xyXG4gICAgQElucHV0ICgpIHRyZWF0bWVudGxpc3Q6IGFueTsgIFxyXG4gICAgQElucHV0KCkgaGlkZGVuOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgc3VibWl0QWN0aW9uOiBzdHJpbmc7XHJcbiAgICAvLyBEYXRlIGFuZCB0aW1lIHByb3BlcnRpZXNUaW1lcGlja2VyXHJcbiAgICBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHB1YmxpYyBoc3RlcDpudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIG1zdGVwOm51bWJlciA9IDE1O1xyXG4gICAgcHVibGljIGlzbWVyaWRpYW46Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgdGltZTpEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHB1YmxpYyBvcHRpb25zOmFueSA9IHtcclxuICAgICAgICBoc3RlcDogWzEsIDIsIDNdLFxyXG4gICAgICAgIG1zdGVwOiBbMSwgNSwgMTAsIDE1LCAyNSwgMzBdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgdHJlYXRtZW50U3RvcmU6IFRyZWF0bWVudFN0b3JlLCBwcml2YXRlIHRyZWF0bWVudFNlcnZpY2U6IFRyZWF0bWVudFNlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSB1aVN0YXRlU3RvcmU6IFVpU3RhdGVTdG9yZSApIHtcclxuICAgIFxyXG4gICAgICAgIHRoaXMudHJlYXRtZW50Rm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICd0aGVyYXB5JzogWycnLCAgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwMCldKV0sXHJcbiAgICAgICAgICAnZGlhZ25vc2UnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMDApXHJcbiAgICAgICAgICBdKV0sXHJcbiAgICAgICAgICAncHJpY2UnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgxMClcclxuICAgICAgICAgIF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVNb2RlKCk6dm9pZCB7XHJcbiAgICAgIHRoaXMuaXNtZXJpZGlhbiA9ICF0aGlzLmlzbWVyaWRpYW47XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VkKCk6dm9pZCB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaW1lIHRpbWUgY2hhbmdlZCB0bzogJyArIHRoaXMudGltZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOnZvaWQge1xyXG4gICAgICB0aGlzLnRpbWUgPSB2b2lkIDA7XHJcbiAgICB9O1xyXG4gIFxyXG4gICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRyZWF0bWVudCA9IG5ldyBUcmVhdG1lbnQoMCwgMSwgbmV3IERhdGUoKSwgJycsICcnLCAnJylcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHRyZWF0bWVudCA9PiB0aGlzLm9uRm9ybUFjdGlvbkNoYW5nZSh0cmVhdG1lbnQpKTsgXHJcbiAgICAgICAgICBcclxuICAgIH1cclxuICAgIG9uRm9ybUFjdGlvbkNoYW5nZSh0cmVhdG1lbnQ6IFRyZWF0bWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Gb3JtQWN0aW9uQ2hhbmdlIHRyZWF0bWVudFwiLCB0cmVhdG1lbnQpO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50ID0gdHJlYXRtZW50O1xyXG4gICAgICAgIGlmICh0cmVhdG1lbnQuaWQgPT0gLTEpIHsgICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiQWRkIFRyZWF0bWVudFwiO1xyXG4gICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2FkZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkVkaXQgVHJlYXRtZW50XCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QWN0aW9uID0gJ2VkaXQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdvQmFjaygpIHsgICAgIFxyXG4gICAgICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRyZWF0bWVudGxpc3QuaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdCh0cmVhdG1lbnQpIHsgXHJcbi8vICAgICAgICB0cmVhdG1lbnQudHJlYXRtZW50ZGF0ZSA9IHRoaXMuZGF0ZTtcclxuLy8gICAgICAgIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlLnNldEhvdXJzKHRoaXMudGltZS5nZXRIb3VycygpKTtcclxuLy8gICAgICAgIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlLnNldE1pbnV0ZXModGhpcy50aW1lLmdldE1pbnV0ZXMoKSk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdCB0cmVhdG1lbnQgZGF0ZXRpbWUoKSBcIiwgdHJlYXRtZW50LnRyZWF0bWVudGRhdGUpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coXCJTdWJtaXQgdHJlYXRtZW50IGRhdGUoKSBcIiwgdGhpcy5kYXRlICk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdCB0cmVhdG1lbnQgdGltZSgpIFwiLCB0aGlzLnRpbWUsIFwidGhpcy50aW1lLmdldE1pbnV0ZXMoKVwiLCB0aGlzLnRpbWUuZ2V0TWludXRlcygpICkgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdCB0cmVhdG1lbnRcIiwgdHJlYXRtZW50KTtcclxuICAgICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5zdWJtaXRBY3Rpb24gPT0gJ2FkZCcpIHsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgdGhpcy5hZGRUcmVhdG1lbnQodHJlYXRtZW50KTsgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICB0aGlzLnVwZGF0ZVRyZWF0bWVudCh0cmVhdG1lbnQpOyBcclxuICAgICAgICB9ICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgXHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7IFxyXG4gICAgfVxyXG4gICAgLy8gbWV0aG9kIHRvIGNhbGwgU3RvcmUgYWN0aW9uIHRvIGNyZWF0ZSBuZXcgdHJlYXRtZW50XHJcbiAgICBcclxuICAgIGFkZFRyZWF0bWVudCh0cmVhdG1lbnQpIHtcclxuICAgICAgICB0aGlzLnRyZWF0bWVudFN0b3JlLmFkZFRyZWF0bWVudCh0cmVhdG1lbnQpICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgdXBkYXRlVHJlYXRtZW50KHRyZWF0bWVudCkge1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUudXBkYXRlVHJlYXRtZW50KHRyZWF0bWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
