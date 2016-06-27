System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '../../services/treatmentService', '../../services/notificationService', '../handlers/control-messages', '../state/UiStateStore', '../state/TreatmentStore', '../state/DiagnoseStore', '../../shared/pipes/listtodict.pipe', "ng2-material/index", 'ng2-bootstrap/ng2-bootstrap', '@angular2-material/toolbar', '@angular2-material/input'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, treatmentService_1, notificationService_1, control_messages_1, UiStateStore_1, TreatmentStore_1, DiagnoseStore_1, listtodict_pipe_1, index_1, ng2_bootstrap_1, toolbar_1, input_1, ng2_bootstrap_2;
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
            function (DiagnoseStore_1_1) {
                DiagnoseStore_1 = DiagnoseStore_1_1;
            },
            function (listtodict_pipe_1_1) {
                listtodict_pipe_1 = listtodict_pipe_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
                ng2_bootstrap_2 = ng2_bootstrap_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            }],
        execute: function() {
            let TreatmentFormComponent = class TreatmentFormComponent {
                constructor(fb, treatmentStore, diagnoseStore, treatmentService, notificationService, uiStateStore) {
                    this.treatmentStore = treatmentStore;
                    this.diagnoseStore = diagnoseStore;
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
                    this.selected = '';
                    this.typeaheadLoading = false;
                    this.typeaheadNoResults = false;
                    this.treatmentForm = fb.group({
                        'therapy': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(300)])],
                        //            'diagnose': ['', Validators.compose([
                        //                Validators.required,
                        //                Validators.minLength(3),
                        //                Validators.maxLength(300)
                        //            ])],
                        'price': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3),
                                common_1.Validators.maxLength(10)
                            ])]
                    });
                }
                toggleMode() {
                    this.ismeridian = !this.ismeridian;
                }
                ;
                changed() {
                    console.log('Time time changed to: ' + this.time);
                }
                ;
                clear() {
                    this.time = void 0;
                }
                ;
                ngOnInit() {
                    this.treatment = new treatmentService_1.Treatment(0, 1, new Date(), '', '', '');
                    this.subscription = this.notificationService.getFormActionChangeEmitter()
                        .subscribe(treatment => this.onFormActionChange(treatment));
                }
                onFormActionChange(treatment) {
                    console.log("onFormActionChange treatment", treatment);
                    this.treatment = treatment;
                    if (treatment.id == -1) {
                        this.formTitle = "Add Treatment";
                        this.submitAction = 'add';
                    }
                    else {
                        this.selected = treatment.diagnose;
                        this.formTitle = "Edit Treatment";
                        this.submitAction = 'edit';
                    }
                }
                ngOnDestroy() {
                    this.subscription.unsubscribe();
                }
                goBack() {
                    this.hidden = true;
                    this.treatmentlist.hidden = false;
                }
                onSubmit(treatment) {
                    //        treatment.treatmentdate = this.date;
                    //        treatment.treatmentdate.setHours(this.time.getHours());
                    //        treatment.treatmentdate.setMinutes(this.time.getMinutes());
                    //        console.log("Submit treatment datetime() ", treatment.treatmentdate);
                    //        console.log("Submit treatment date() ", this.date );
                    //        console.log("Submit treatment time() ", this.time, "this.time.getMinutes()", this.time.getMinutes() )   
                    console.log("Submit treatment", treatment);
                    treatment.diagnose = this.selected;
                    if (this.submitAction == 'add') {
                        this.addTreatment(treatment);
                    }
                    else {
                        this.updateTreatment(treatment);
                    }
                    this.submitted = true;
                    this.goBack();
                    this.submitted = true;
                }
                // method to call Store action to create new treatment
                addTreatment(treatment) {
                    this.treatmentStore.addTreatment(treatment);
                    this.goBack();
                }
                updateTreatment(treatment) {
                    this.treatmentStore.updateTreatment(treatment)
                        .subscribe(res => { }, err => {
                        this.uiStateStore.endBackendAction();
                    });
                    this.goBack();
                }
                changeTypeaheadLoading(e) {
                    this.typeaheadLoading = e;
                }
                changeTypeaheadNoResults(e) {
                    this.typeaheadNoResults = e;
                }
                typeaheadOnSelect(e) {
                    console.log(`Selected value: ${e.item}`);
                    this.selected = e.item;
                }
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
                    pipes: [listtodict_pipe_1.ListToDict],
                    directives: [ng2_bootstrap_1.TimepickerComponent, ng2_bootstrap_2.TYPEAHEAD_DIRECTIVES, ng2_bootstrap_1.DATEPICKER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, input_1.MD_INPUT_DIRECTIVES, router_deprecated_1.RouterLink, control_messages_1.ControlMessages]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, TreatmentStore_1.TreatmentStore, DiagnoseStore_1.DiagnoseStore, treatmentService_1.TreatmentService, notificationService_1.NotificationService, UiStateStore_1.UiStateStore])
            ], TreatmentFormComponent);
            exports_1("TreatmentFormComponent", TreatmentFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBc0JJLFlBQVksRUFBZSxFQUFVLGNBQThCLEVBQVUsYUFBNEIsRUFBVSxnQkFBa0MsRUFBVSxtQkFBd0MsRUFBVSxZQUEwQjtvQkFBdE0sbUJBQWMsR0FBZCxjQUFjLENBQWdCO29CQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFsQmxPLFdBQU0sR0FBWSxJQUFJLENBQUM7b0JBR2hDLGNBQVMsR0FBRyxLQUFLLENBQUM7b0JBRWxCLHFDQUFxQztvQkFDckMsU0FBSSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQ2pCLFVBQUssR0FBVyxDQUFDLENBQUM7b0JBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7b0JBQ25CLGVBQVUsR0FBWSxJQUFJLENBQUM7b0JBQzNCLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUN4QixZQUFPLEdBQVE7d0JBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztxQkFDaEMsQ0FBQztvQkFDSyxhQUFRLEdBQVcsRUFBRSxDQUFDO29CQUN0QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7b0JBQ2xDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztvQkFHdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUMx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QUFDLFlBQUssRUFBRTs7eUVBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7O2tFQUFBO1lBZFo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsK0NBQStDO29CQUM1RCxTQUFTLEVBQUUsQ0FBQyxtQ0FBZ0IsQ0FBQztvQkFDN0IsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtvQkFDOUIsS0FBSyxFQUFFLENBQUMsNEJBQVUsQ0FBQztvQkFDbkIsVUFBVSxFQUFFLENBQUMsbUNBQW1CLEVBQUUsb0NBQW9CLEVBQUUscUNBQXFCLEVBQUUsd0JBQWUsRUFBRSx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsMkJBQW1CLEVBQUUsOEJBQVUsRUFBRSxrQ0FBZSxDQUFDO2lCQUNyTSxDQUFDOztzQ0FBQTtZQUdGLDJEQWtJQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlckxpbmt9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHsgVHJlYXRtZW50U2VydmljZSwgVHJlYXRtZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJlYXRtZW50U2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25TZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udHJvbE1lc3NhZ2VzfSBmcm9tICcuLi9oYW5kbGVycy9jb250cm9sLW1lc3NhZ2VzJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVaVN0YXRlU3RvcmUgfSBmcm9tICcuLi9zdGF0ZS9VaVN0YXRlU3RvcmUnO1xyXG5pbXBvcnQgeyBUcmVhdG1lbnRTdG9yZSB9IGZyb20gJy4uL3N0YXRlL1RyZWF0bWVudFN0b3JlJztcclxuaW1wb3J0IHsgRGlhZ25vc2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kaWFnbm9zZVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFnbm9zZVN0b3JlIH0gZnJvbSAnLi4vc3RhdGUvRGlhZ25vc2VTdG9yZSc7XHJcbmltcG9ydCB7IExpc3RUb0RpY3QgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvbGlzdHRvZGljdC5waXBlJztcclxuaW1wb3J0IHtNZFBhdHRlcm5WYWxpZGF0b3IsXHJcbk1kTWluVmFsdWVWYWxpZGF0b3IsXHJcbk1kTnVtYmVyUmVxdWlyZWRWYWxpZGF0b3IsXHJcbk1kTWF4VmFsdWVWYWxpZGF0b3IsIE1BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtUaW1lcGlja2VyQ29tcG9uZW50LCBEQVRFUElDS0VSX0RJUkVDVElWRVN9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHtUWVBFQUhFQURfRElSRUNUSVZFU30gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RyZWF0bWVudC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnQtZm9ybS5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW1RyZWF0bWVudFNlcnZpY2VdLFxyXG4gICAgaG9zdDogeyAnW2hpZGRlbl0nOiAnaGlkZGVuJyB9LFxyXG4gICAgcGlwZXM6IFtMaXN0VG9EaWN0XSxcclxuICAgIGRpcmVjdGl2ZXM6IFtUaW1lcGlja2VyQ29tcG9uZW50LCBUWVBFQUhFQURfRElSRUNUSVZFUywgREFURVBJQ0tFUl9ESVJFQ1RJVkVTLCBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyLCBNRF9JTlBVVF9ESVJFQ1RJVkVTLCBSb3V0ZXJMaW5rLCBDb250cm9sTWVzc2FnZXNdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudEZvcm1Db21wb25lbnQge1xyXG4gICAgdHJlYXRtZW50Rm9ybTogQ29udHJvbEdyb3VwO1xyXG4gICAgdHJlYXRtZW50OiBUcmVhdG1lbnQ7XHJcbiAgICBASW5wdXQoKSB0cmVhdG1lbnRsaXN0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgc3VibWl0QWN0aW9uOiBzdHJpbmc7XHJcbiAgICAvLyBEYXRlIGFuZCB0aW1lIHByb3BlcnRpZXNUaW1lcGlja2VyXHJcbiAgICBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHB1YmxpYyBoc3RlcDogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBtc3RlcDogbnVtYmVyID0gMTU7XHJcbiAgICBwdWJsaWMgaXNtZXJpZGlhbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwdWJsaWMgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgIGhzdGVwOiBbMSwgMiwgM10sXHJcbiAgICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cclxuICAgIH07XHJcbiAgICBwdWJsaWMgc2VsZWN0ZWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHR5cGVhaGVhZExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyB0eXBlYWhlYWROb1Jlc3VsdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSB0cmVhdG1lbnRTdG9yZTogVHJlYXRtZW50U3RvcmUsIHByaXZhdGUgZGlhZ25vc2VTdG9yZTogRGlhZ25vc2VTdG9yZSwgcHJpdmF0ZSB0cmVhdG1lbnRTZXJ2aWNlOiBUcmVhdG1lbnRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgdWlTdGF0ZVN0b3JlOiBVaVN0YXRlU3RvcmUpIHtcclxuXHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRGb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAndGhlcmFweSc6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwMCldKV0sXHJcbi8vICAgICAgICAgICAgJ2RpYWdub3NlJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4vLyAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4vLyAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuLy8gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzAwKVxyXG4vLyAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgJ3ByaWNlJzogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApXHJcbiAgICAgICAgICAgIF0pXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlTW9kZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzbWVyaWRpYW4gPSAhdGhpcy5pc21lcmlkaWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGltZSB0aW1lIGNoYW5nZWQgdG86ICcgKyB0aGlzLnRpbWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdm9pZCAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRyZWF0bWVudCA9IG5ldyBUcmVhdG1lbnQoMCwgMSwgbmV3IERhdGUoKSwgJycsICcnLCAnJylcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodHJlYXRtZW50ID0+IHRoaXMub25Gb3JtQWN0aW9uQ2hhbmdlKHRyZWF0bWVudCkpO1xyXG5cclxuICAgIH1cclxuICAgIG9uRm9ybUFjdGlvbkNoYW5nZSh0cmVhdG1lbnQ6IFRyZWF0bWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Gb3JtQWN0aW9uQ2hhbmdlIHRyZWF0bWVudFwiLCB0cmVhdG1lbnQpO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50ID0gdHJlYXRtZW50O1xyXG4gICAgICAgIGlmICh0cmVhdG1lbnQuaWQgPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtVGl0bGUgPSBcIkFkZCBUcmVhdG1lbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnYWRkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJlYXRtZW50LmRpYWdub3NlO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1UaXRsZSA9IFwiRWRpdCBUcmVhdG1lbnRcIjtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRBY3Rpb24gPSAnZWRpdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50bGlzdC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIG9uU3VibWl0KHRyZWF0bWVudCkgeyBcclxuICAgICAgICAvLyAgICAgICAgdHJlYXRtZW50LnRyZWF0bWVudGRhdGUgPSB0aGlzLmRhdGU7XHJcbiAgICAgICAgLy8gICAgICAgIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlLnNldEhvdXJzKHRoaXMudGltZS5nZXRIb3VycygpKTtcclxuICAgICAgICAvLyAgICAgICAgdHJlYXRtZW50LnRyZWF0bWVudGRhdGUuc2V0TWludXRlcyh0aGlzLnRpbWUuZ2V0TWludXRlcygpKTtcclxuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coXCJTdWJtaXQgdHJlYXRtZW50IGRhdGV0aW1lKCkgXCIsIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlKTtcclxuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coXCJTdWJtaXQgdHJlYXRtZW50IGRhdGUoKSBcIiwgdGhpcy5kYXRlICk7XHJcbiAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0IHRyZWF0bWVudCB0aW1lKCkgXCIsIHRoaXMudGltZSwgXCJ0aGlzLnRpbWUuZ2V0TWludXRlcygpXCIsIHRoaXMudGltZS5nZXRNaW51dGVzKCkgKSAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0IHRyZWF0bWVudFwiLCB0cmVhdG1lbnQpO1xyXG4gICAgICAgIHRyZWF0bWVudC5kaWFnbm9zZSA9IHRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VibWl0QWN0aW9uID09ICdhZGQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVHJlYXRtZW50KHRyZWF0bWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmVhdG1lbnQodHJlYXRtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gbWV0aG9kIHRvIGNhbGwgU3RvcmUgYWN0aW9uIHRvIGNyZWF0ZSBuZXcgdHJlYXRtZW50XHJcbiAgICBcclxuICAgIGFkZFRyZWF0bWVudCh0cmVhdG1lbnQpIHtcclxuICAgICAgICB0aGlzLnRyZWF0bWVudFN0b3JlLmFkZFRyZWF0bWVudCh0cmVhdG1lbnQpXHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUcmVhdG1lbnQodHJlYXRtZW50KSB7XHJcbiAgICAgICAgdGhpcy50cmVhdG1lbnRTdG9yZS51cGRhdGVUcmVhdG1lbnQodHJlYXRtZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4geyB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51aVN0YXRlU3RvcmUuZW5kQmFja2VuZEFjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlVHlwZWFoZWFkTG9hZGluZyhlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nID0gZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlVHlwZWFoZWFkTm9SZXN1bHRzKGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cyA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR5cGVhaGVhZE9uU2VsZWN0KGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZCB2YWx1ZTogJHtlLml0ZW19YCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGUuaXRlbTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
