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
                constructor(route) {
                    this.route = route;
                }
                ngOnInit() {
                    this.route.params.subscribe(params => {
                        this.id = params['id']; // (+) converts string 'id' to a number
                        var owner = params['owner'];
                    });
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
                __metadata('design:paramtypes', [router_1.ActivatedRoute])
            ], TreatmentsComponent);
            exports_1("TreatmentsComponent", TreatmentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQUlJLFlBQW9CLEtBQXFCO29CQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtnQkFDekMsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNO3dCQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1Qzt3QkFDL0QsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUMvQixDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBRWhELENBQUM7WUFDTCxDQUFDO1lBckJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFdBQVcsRUFBRSwyQ0FBMkM7b0JBQ3hELFNBQVMsRUFBRyxDQUFDLDZCQUE2QixDQUFDO29CQUMzQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLHVDQUFzQixFQUFFLHVDQUFzQixFQUFFLDBCQUFpQixDQUFDO2lCQUN0SCxDQUFDOzttQ0FBQTtZQUNGLHFEQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vaW1wb3J0IHsgUm91dGVyTGluaywgUm91dGVQYXJhbXMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG4vL2ltcG9ydCB7IFRyZWF0bWVudFNlcnZpY2UsIFRyZWF0bWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyZWF0bWVudFNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGF0aWVudFNlcnZpY2UnO1xyXG4vL2ltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG4vL2ltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtUcmVhdG1lbnRMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi90cmVhdG1lbnQtbGlzdFwiXHJcbmltcG9ydCB7VHJlYXRtZW50Rm9ybUNvbXBvbmVudH0gZnJvbSBcIi4vdHJlYXRtZW50LWZvcm1cIlxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICd0cmVhdG1lbnRzJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RyZWF0bWVudHMvdHJlYXRtZW50cy5odG1sJyxcclxuICBzdHlsZVVybHMgOiBbJ3N0eWxlcy9zZWxlY3RhYmxlX3VzYWdlLmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIFRyZWF0bWVudExpc3RDb21wb25lbnQsIFRyZWF0bWVudEZvcm1Db21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50c0NvbXBvbmVudCB7XHJcbiAgaWQ6c3RyaW5nO1xyXG4gICBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICB2YXIgb3duZXIgPSBwYXJhbXNbJ293bmVyJ10gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0IFRyZWF0bWVudHNDb21wb25lbnRcIik7XHJcbiAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
