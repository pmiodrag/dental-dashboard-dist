System.register(['@angular/core', '@angular/common', '@angular/router', './filterTextbox.component', '../../shared/directives/sortby.directive', '../../shared/pipes/capitalize.pipe', '../../shared/pipes/trim.pipe', "ng2-material/index", '../../shared/constants/app.constants', './doctor-form', './doctor-list', './doctor-header'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, filterTextbox_component_1, sortby_directive_1, capitalize_pipe_1, trim_pipe_1, index_1, app_constants_1, doctor_form_1, doctor_list_1, doctor_header_1;
    var DoctorsComponent;
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
            function (filterTextbox_component_1_1) {
                filterTextbox_component_1 = filterTextbox_component_1_1;
            },
            function (sortby_directive_1_1) {
                sortby_directive_1 = sortby_directive_1_1;
            },
            function (capitalize_pipe_1_1) {
                capitalize_pipe_1 = capitalize_pipe_1_1;
            },
            function (trim_pipe_1_1) {
                trim_pipe_1 = trim_pipe_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            },
            function (doctor_form_1_1) {
                doctor_form_1 = doctor_form_1_1;
            },
            function (doctor_list_1_1) {
                doctor_list_1 = doctor_list_1_1;
            },
            function (doctor_header_1_1) {
                doctor_header_1 = doctor_header_1_1;
            }],
        execute: function() {
            DoctorsComponent = (function () {
                function DoctorsComponent() {
                    this.iconClass = app_constants_1.ICON_CLASS;
                }
                DoctorsComponent.prototype.addDoctor = function () {
                    console.log("Add doctor");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], DoctorsComponent.prototype, "doctors", void 0);
                DoctorsComponent = __decorate([
                    core_1.Component({
                        selector: 'doctors',
                        templateUrl: 'app/components/doctors/doctors.html',
                        host: { '[hidden]': 'hidden' },
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, filterTextbox_component_1.FilterTextboxComponent, sortby_directive_1.SortByDirective, doctor_list_1.DoctorList, doctor_header_1.DoctorHeaderComponent, doctor_form_1.DoctorFormComponent, index_1.MATERIAL_DIRECTIVES],
                        pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DoctorsComponent);
                return DoctorsComponent;
            }());
            exports_1("DoctorsComponent", DoctorsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQU9JO29CQUZBLGNBQVMsR0FBVywwQkFBVSxDQUFDO2dCQUcvQixDQUFDO2dCQUVELG9DQUFTLEdBQVQ7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFURDtvQkFBQyxZQUFLLEVBQUU7O2lFQUFBO2dCQVpaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELElBQUksRUFBRSxFQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUM7d0JBQzVCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMEJBQWlCLEVBQUUsZ0RBQXNCLEVBQUUsa0NBQWUsRUFBRSx3QkFBVSxFQUFFLHFDQUFxQixFQUFFLGlDQUFtQixFQUFFLDJCQUFtQixDQUFDO3dCQUN0SyxLQUFLLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLG9CQUFRLENBQUM7cUJBQ2xDLENBQUM7O29DQUFBO2dCQWlCRix1QkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsK0NBY0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RvY3RvcnMvZG9jdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQgeyBTb3J0ZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvc29ydGVyJztcclxuaW1wb3J0IHsgRmlsdGVyVGV4dGJveENvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyVGV4dGJveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb3J0QnlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2FwaXRhbGl6ZVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvY2FwaXRhbGl6ZS5waXBlJztcclxuaW1wb3J0IHsgVHJpbVBpcGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvcGlwZXMvdHJpbS5waXBlJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRG9jdG9yRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZG9jdG9yLWZvcm0nXHJcbmltcG9ydCB7IERvY3Rvckxpc3QgfSBmcm9tICcuL2RvY3Rvci1saXN0J1xyXG5pbXBvcnQgeyBEb2N0b3JIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2RvY3Rvci1oZWFkZXInXHJcbmltcG9ydCB7IERvY3RvcixEb2N0b3JCYWNrZW5kU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvRG9jdG9yQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlICB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7IFxyXG4gIHNlbGVjdG9yOiAnZG9jdG9ycycsIFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLmh0bWwnLFxyXG4gIGhvc3Q6IHsnW2hpZGRlbl0nOiAnaGlkZGVuJ30sXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIEZpbHRlclRleHRib3hDb21wb25lbnQsIFNvcnRCeURpcmVjdGl2ZSwgRG9jdG9yTGlzdCwgRG9jdG9ySGVhZGVyQ29tcG9uZW50LCBEb2N0b3JGb3JtQ29tcG9uZW50LCBNQVRFUklBTF9ESVJFQ1RJVkVTXSxcclxuICBwaXBlczogW0NhcGl0YWxpemVQaXBlLCBUcmltUGlwZV1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdG9yc0NvbXBvbmVudCB7XHJcbiAgICBzZWxlY3RlZERvY3RvcjogRG9jdG9yO1xyXG4gICAgc3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkb2N0b3JzOiBEb2N0b3JbXTtcclxuICAgIFxyXG4gICAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBhZGREb2N0b3IgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkIGRvY3RvclwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
