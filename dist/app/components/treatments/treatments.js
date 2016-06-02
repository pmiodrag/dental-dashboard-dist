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
            TreatmentsComponent = (function () {
                function TreatmentsComponent(routeSegment) {
                    this.id = routeSegment.getParam('id');
                    //        this.firstname = routeSegment.getParam('firstname');
                    //        this.lastname = routeSegment.getParam('lastname');
                    console.log("TreatmentsComponent routerOnActivate id", this.id);
                }
                TreatmentsComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit TreatmentsComponent");
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
                return TreatmentsComponent;
            }());
            exports_1("TreatmentsComponent", TreatmentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy90cmVhdG1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQU1JLDZCQUFZLFlBQTBCO29CQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlDLDhEQUE4RDtvQkFDOUQsNERBQTREO29CQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEUsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztnQkFFaEQsQ0FBQztnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsV0FBVyxFQUFFLDJDQUEyQzt3QkFDeEQsU0FBUyxFQUFHLENBQUMsNkJBQTZCLENBQUM7d0JBQzNDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMkJBQW1CLEVBQUUsdUNBQXNCLEVBQUUsdUNBQXNCLEVBQUUsMEJBQWlCLENBQUM7cUJBQ3RILENBQUM7O3VDQUFBO2dCQWtCRiwwQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQscURBaUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVTZWdtZW50fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vL2ltcG9ydCB7IFJvdXRlckxpbmssIFJvdXRlUGFyYW1zIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuLy9pbXBvcnQgeyBUcmVhdG1lbnRTZXJ2aWNlLCBUcmVhdG1lbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmVhdG1lbnRTZXJ2aWNlJztcclxuLy9pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3BhdGllbnRTZXJ2aWNlJztcclxuLy9pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc29ydGVyJztcclxuLy9pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7VHJlYXRtZW50TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vdHJlYXRtZW50LWxpc3RcIlxyXG5pbXBvcnQge1RyZWF0bWVudEZvcm1Db21wb25lbnR9IGZyb20gXCIuL3RyZWF0bWVudC1mb3JtXCJcclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAndHJlYXRtZW50cycsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy90cmVhdG1lbnRzL3RyZWF0bWVudHMuaHRtbCcsXHJcbiAgc3R5bGVVcmxzIDogWydzdHlsZXMvc2VsZWN0YWJsZV91c2FnZS5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBUcmVhdG1lbnRMaXN0Q29tcG9uZW50LCBUcmVhdG1lbnRGb3JtQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudHNDb21wb25lbnQge1xyXG4gIGlkOnN0cmluZztcclxuICBmaXJzdG5hbWU6c3RyaW5nO1xyXG4gIGxhc3RuYW1lOnN0cmluZztcclxuICAgXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlU2VnbWVudDogUm91dGVTZWdtZW50KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IHJvdXRlU2VnbWVudC5nZXRQYXJhbSgnaWQnKTtcclxuLy8gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gcm91dGVTZWdtZW50LmdldFBhcmFtKCdmaXJzdG5hbWUnKTtcclxuLy8gICAgICAgIHRoaXMubGFzdG5hbWUgPSByb3V0ZVNlZ21lbnQuZ2V0UGFyYW0oJ2xhc3RuYW1lJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmVhdG1lbnRzQ29tcG9uZW50IHJvdXRlck9uQWN0aXZhdGUgaWRcIiwgdGhpcy5pZCk7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXQgVHJlYXRtZW50c0NvbXBvbmVudFwiKTtcclxuICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
