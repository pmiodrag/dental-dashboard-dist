System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", "./diagnose-list", '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, index_1, diagnose_list_1, app_constants_1;
    var DiagnoseComponent;
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
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (diagnose_list_1_1) {
                diagnose_list_1 = diagnose_list_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            let DiagnoseComponent = class DiagnoseComponent {
                constructor() {
                    this.iconClass = app_constants_1.ICON_CLASS;
                }
                ngOnInit() {
                    console.log("ngOnInit DiagnosesComponent");
                }
            };
            DiagnoseComponent = __decorate([
                core_1.Component({
                    selector: 'diagnoses',
                    templateUrl: 'app/components/diagnose/diagnose.html',
                    styleUrls: ['styles/diagnose.css'],
                    directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, diagnose_list_1.DiagnoseListComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], DiagnoseComponent);
            exports_1("DiagnoseComponent", DiagnoseComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtvQkFJSSxjQUFTLEdBQVcsMEJBQVUsQ0FBQztnQkFNbkMsQ0FBQztnQkFIRyxRQUFRO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDL0MsQ0FBQztZQUNMLENBQUM7WUFoQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLHVDQUF1QztvQkFDcEQsU0FBUyxFQUFHLENBQUMscUJBQXFCLENBQUM7b0JBQ25DLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMkJBQW1CLEVBQUUscUNBQXFCLEVBQUUsMEJBQWlCLENBQUM7aUJBQzdGLENBQUM7O2lDQUFBO1lBQ0YsaURBVUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge0RpYWdub3NlTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vZGlhZ25vc2UtbGlzdFwiXHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuXHJcbkBDb21wb25lbnQoeyBcclxuICBzZWxlY3RvcjogJ2RpYWdub3NlcycsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kaWFnbm9zZS9kaWFnbm9zZS5odG1sJyxcclxuICBzdHlsZVVybHMgOiBbJ3N0eWxlcy9kaWFnbm9zZS5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBEaWFnbm9zZUxpc3RDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ25vc2VDb21wb25lbnQge1xyXG4gICAgaWQ6c3RyaW5nO1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmc7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7ICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdCBEaWFnbm9zZXNDb21wb25lbnRcIik7ICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
