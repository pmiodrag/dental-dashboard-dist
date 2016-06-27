System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", "./treatment-list", "./treatment-form"], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, index_1, treatment_list_1, treatment_form_1;
    var TreatmentsComponent;
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
            function (treatment_list_1_1) {
                treatment_list_1 = treatment_list_1_1;
            },
            function (treatment_form_1_1) {
                treatment_form_1 = treatment_form_1_1;
            }],
        execute: function() {
            let TreatmentsComponent = class TreatmentsComponent {
                constructor(routeSegment) {
                    this.id = routeSegment.getParam('id');
                    //        this.firstname = routeSegment.getParam('firstname');
                    //        this.lastname = routeSegment.getParam('lastname');
                    console.log("TreatmentsComponent routerOnActivate id", this.id);
                }
                ngOnInit() {
                    console.log("ngOnInit TreatmentsComponent");
                }
            };
            TreatmentsComponent = __decorate([
                core_1.Component({
                    selector: 'treatments',
                    templateUrl: 'app/components/treatments/treatments.html',
                    styleUrls: ['styles/selectable_usage.css'],
                    directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, treatment_list_1.TreatmentListComponent, treatment_form_1.TreatmentFormComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [router_1.RouteSegment])
            ], TreatmentsComponent);
            exports_1("TreatmentsComponent", TreatmentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQU1JLFlBQVksWUFBMEI7b0JBQ2xDLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDOUMsOERBQThEO29CQUM5RCw0REFBNEQ7b0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUVELFFBQVE7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO2dCQUVoRCxDQUFDO1lBQ0wsQ0FBQztZQXZCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixXQUFXLEVBQUUsMkNBQTJDO29CQUN4RCxTQUFTLEVBQUcsQ0FBQyw2QkFBNkIsQ0FBQztvQkFDM0MsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwyQkFBbUIsRUFBRSx1Q0FBc0IsRUFBRSx1Q0FBc0IsRUFBRSwwQkFBaUIsQ0FBQztpQkFDdEgsQ0FBQzs7bUNBQUE7WUFDRixxREFpQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vaW1wb3J0IHsgUm91dGVyTGluaywgUm91dGVQYXJhbXMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG4vL2ltcG9ydCB7IFRyZWF0bWVudFNlcnZpY2UsIFRyZWF0bWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyZWF0bWVudFNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGF0aWVudFNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG4vL2ltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtUcmVhdG1lbnRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi90cmVhdG1lbnQtbGlzdFwiXHJcbmltcG9ydCB7VHJlYXRtZW50Rm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vdHJlYXRtZW50LWZvcm1cIlxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICd0cmVhdG1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50cy5odG1sJyxcclxuICBzdHlsZVVybHMgOiBbJ3N0eWxlcy9zZWxlY3RhYmxlX3VzYWdlLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIFRyZWF0bWVudExpc3RDb21wb25lbnQsIFRyZWF0bWVudEZvcm1Db21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50c0NvbXBvbmVudCB7XHJcbiAgaWQ6c3RyaW5nO1xyXG4gIGZpcnN0bmFtZTpzdHJpbmc7XHJcbiAgbGFzdG5hbWU6c3RyaW5nO1xyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3Iocm91dGVTZWdtZW50OiBSb3V0ZVNlZ21lbnQpIHtcclxuICAgICAgICB0aGlzLmlkID0gcm91dGVTZWdtZW50LmdldFBhcmFtKCdpZCcpO1xyXG4vLyAgICAgICAgdGhpcy5maXJzdG5hbWUgPSByb3V0ZVNlZ21lbnQuZ2V0UGFyYW0oJ2ZpcnN0bmFtZScpO1xyXG4vLyAgICAgICAgdGhpcy5sYXN0bmFtZSA9IHJvdXRlU2VnbWVudC5nZXRQYXJhbSgnbGFzdG5hbWUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRyZWF0bWVudHNDb21wb25lbnQgcm91dGVyT25BY3RpdmF0ZSBpZFwiLCB0aGlzLmlkKTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdCBUcmVhdG1lbnRzQ29tcG9uZW50XCIpO1xyXG4gICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
