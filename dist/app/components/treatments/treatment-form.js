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
                    //  this.uiStateStore.startBackendAction('Saving Todo...');
                    var _this = this;
                    this.treatmentStore.addTreatment(treatment)
                        .subscribe(function (res) { }, function (err) {
                        _this.uiStateStore.endBackendAction();
                    });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFvQkksZ0NBQVksRUFBZSxFQUFVLGNBQThCLEVBQVUsZ0JBQWtDLEVBQVUsbUJBQXdDLEVBQVUsWUFBMEI7b0JBQWhLLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO29CQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBaEI1TCxXQUFNLEdBQVcsSUFBSSxDQUFDO29CQUcvQixjQUFTLEdBQUcsS0FBSyxDQUFDO29CQUVsQixxQ0FBcUM7b0JBQ3JDLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUNqQixVQUFLLEdBQVUsQ0FBQyxDQUFDO29CQUNqQixVQUFLLEdBQVUsRUFBRSxDQUFDO29CQUNsQixlQUFVLEdBQVcsSUFBSSxDQUFDO29CQUMxQixTQUFJLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsWUFBTyxHQUFPO3dCQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7cUJBQ2hDLENBQUM7b0JBSUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUcsbUJBQVUsQ0FBQyxPQUFPLENBQUM7Z0NBQ2xDLG1CQUFVLENBQUMsUUFBUTtnQ0FDbkIsbUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QixtQkFBVSxDQUFDLFNB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LEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQzt3QkFDNUIsVUFBVSxFQUFFLENBQUMsbUNBQW1CLEVBQUUscUNBQXFCLEVBQUUsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsMkJBQW1CLEVBQUUsOEJBQVUsRUFBRSxrQ0FBZSxDQUFDO3FCQUM3SyxDQUFDOzswQ0FBQTtnQkE4SEYsNkJBQUM7WUFBRCxDQTNIQSxBQTJIQyxJQUFBO1lBM0hELDJEQTJIQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlckxpbmt9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHsgVHJlYXRtZW50U2VydmljZSwgVHJlYXRtZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJlYXRtZW50U2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJvbE1lc3NhZ2VzfSBmcm9tICcuLi9oYW5kbGVycy9jb250cm9sLW1lc3NhZ2VzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1RyZWF0bWVudFN0b3JlJztcclxuaW1wb3J0IHtNZFBhdHRlcm5WYWxpZGF0b3IsXHJcbiAgTWRNaW5WYWx1ZVZhbGlkYXRvcixcclxuICBNZE51bWJlclJlcXVpcmVkVmFsaWRhdG9yLFxyXG4gIE1kTWF4VmFsdWVWYWxpZGF0b3IsIE1BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtUaW1lcGlja2VyQ29tcG9uZW50LCBEQVRFUElDS0VSX0RJUkVDVElWRVN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0JztcclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAndHJlYXRtZW50LWZvcm0nLCBcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50LWZvcm0uaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbVHJlYXRtZW50U2VydmljZV0sXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBkaXJlY3RpdmVzOiBbVGltZXBpY2tlckNvbXBvbmVudCwgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyLCBNRF9JTlBVVF9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rLCBDb250cm9sTWVzc2FnZXNdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudEZvcm1Db21wb25lbnQge1xyXG4gICAgdHJlYXRtZW50Rm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgdHJlYXRtZW50OiBUcmVhdG1lbnQ7XHJcbiAgICBASW5wdXQgKCkgdHJlYXRtZW50bGlzdDogYW55OyAgXHJcbiAgICBASW5wdXQoKSBoaWRkZW46Ym9vbGVhbiA9IHRydWU7XHJcbiAgICBmb3JtVGl0bGU6IHN0cmluZztcclxuICAgIHN1YnNjcmlwdGlvbjogYW55O1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICBzdWJtaXRBY3Rpb246IHN0cmluZztcclxuICAgIC8vIERhdGUgYW5kIHRpbWUgcHJvcGVydGllc1RpbWVwaWNrZXJcclxuICAgIGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcHVibGljIGhzdGVwOm51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgbXN0ZXA6bnVtYmVyID0gMTU7XHJcbiAgICBwdWJsaWMgaXNtZXJpZGlhbjpib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyB0aW1lOkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcHVibGljIG9wdGlvbnM6YW55ID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB0cmVhdG1lbnRTdG9yZTogVHJlYXRtZW50U3RvcmUsIHByaXZhdGUgdHJlYXRtZW50U2VydmljZTogVHJlYXRtZW50U2VydmljZSwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIHVpU3RhdGVTdG9yZTogVWlTdGF0ZVN0b3JlICkge1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRGb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgJ3RoZXJhcHknOiBbJycsICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzAwKV0pXSxcclxuICAgICAgICAgICdkaWFnbm9zZSc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwMClcclxuICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICdwcmljZSc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKVxyXG4gICAgICAgICAgXSldXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgcHVibGljIHRvZ2dsZU1vZGUoKTp2b2lkIHtcclxuICAgICAgdGhpcy5pc21lcmlkaWFuID0gIXRoaXMuaXNtZXJpZGlhbjtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNoYW5nZWQoKTp2b2lkIHtcclxuICAgICAgY29uc29sZS5sb2coJ1RpbWUgdGltZSBjaGFuZ2VkIHRvOiAnICsgdGhpcy50aW1lKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6dm9pZCB7XHJcbiAgICAgIHRoaXMudGltZSA9IHZvaWQgMDtcclxuICAgIH07XHJcbiAgXHJcbiAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50ID0gbmV3IFRyZWF0bWVudCgwLCAxLCBuZXcgRGF0ZSgpLCAnJywgJycsICcnKVxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmdldEZvcm1BY3Rpb25DaGFuZ2VFbWl0dGVyKClcclxuICAgICAgICAgIC5zdWJzY3JpYmUodHJlYXRtZW50ID0+IHRoaXMub25Gb3JtQWN0aW9uQ2hhbmdlKHRyZWF0bWVudCkpOyBcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25Gb3JtQWN0aW9uQ2hhbmdlKHRyZWF0bWVudDogVHJlYXRtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkZvcm1BY3Rpb25DaGFuZ2UgdHJlYXRtZW50XCIsIHRyZWF0bWVudCk7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnQgPSB0cmVhdG1lbnQ7XHJcbiAgICAgICAgaWYgKHRyZWF0bWVudC5pZCA9PSAtMSkgeyAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuZm9ybVRpdGxlID0gXCJBZGQgVHJlYXRtZW50XCI7XHJcbiAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnYWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiRWRpdCBUcmVhdG1lbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnZWRpdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ29CYWNrKCkgeyAgICAgXHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50bGlzdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIG9uU3VibWl0KHRyZWF0bWVudCkgeyBcclxuLy8gICAgICAgIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlID0gdGhpcy5kYXRlO1xyXG4vLyAgICAgICAgdHJlYXRtZW50LnRyZWF0bWVudGRhdGUuc2V0SG91cnModGhpcy50aW1lLmdldEhvdXJzKCkpO1xyXG4vLyAgICAgICAgdHJlYXRtZW50LnRyZWF0bWVudGRhdGUuc2V0TWludXRlcyh0aGlzLnRpbWUuZ2V0TWludXRlcygpKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0IHRyZWF0bWVudCBkYXRldGltZSgpIFwiLCB0cmVhdG1lbnQudHJlYXRtZW50ZGF0ZSk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdCB0cmVhdG1lbnQgZGF0ZSgpIFwiLCB0aGlzLmRhdGUgKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0IHRyZWF0bWVudCB0aW1lKCkgXCIsIHRoaXMudGltZSwgXCJ0aGlzLnRpbWUuZ2V0TWludXRlcygpXCIsIHRoaXMudGltZS5nZXRNaW51dGVzKCkgKSAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0IHRyZWF0bWVudFwiLCB0cmVhdG1lbnQpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEFjdGlvbiA9PSAnYWRkJykgeyAgICAgICAgICAgICBcclxuICAgICAgICAgICB0aGlzLmFkZFRyZWF0bWVudCh0cmVhdG1lbnQpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIHRoaXMudXBkYXRlVHJlYXRtZW50KHRyZWF0bWVudCk7IFxyXG4gICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlOyBcclxuICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTsgXHJcbiAgICB9XHJcbiAgICAvLyBtZXRob2QgdG8gY2FsbCBTdG9yZSBhY3Rpb24gdG8gY3JlYXRlIG5ldyB0cmVhdG1lbnRcclxuICAgIFxyXG4gICAgYWRkVHJlYXRtZW50KHRyZWF0bWVudCkge1xyXG4gICAgICAgXHJcbiAgICAgIC8vICB0aGlzLnVpU3RhdGVTdG9yZS5zdGFydEJhY2tlbmRBY3Rpb24oJ1NhdmluZyBUb2RvLi4uJyk7XHJcblxyXG4gICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUuYWRkVHJlYXRtZW50KHRyZWF0bWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgdXBkYXRlVHJlYXRtZW50KHRyZWF0bWVudCkge1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50U3RvcmUudXBkYXRlVHJlYXRtZW50KHRyZWF0bWVudClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7fSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
