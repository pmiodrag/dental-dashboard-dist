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
            let DoctorsComponent = class DoctorsComponent {
                constructor() {
                    this.iconClass = app_constants_1.ICON_CLASS;
                }
                addDoctor() {
                    console.log("Add doctor");
                }
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
            exports_1("DoctorsComponent", DoctorsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQU9JO29CQUZBLGNBQVMsR0FBVywwQkFBVSxDQUFDO2dCQUcvQixDQUFDO2dCQUVELFNBQVM7b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztZQUVMLENBQUM7WUFYRztnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBWlo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLHFDQUFxQztvQkFDbEQsSUFBSSxFQUFFLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQztvQkFDNUIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwwQkFBaUIsRUFBRSxnREFBc0IsRUFBRSxrQ0FBZSxFQUFFLHdCQUFVLEVBQUUscUNBQXFCLEVBQUUsaUNBQW1CLEVBQUUsMkJBQW1CLENBQUM7b0JBQ3RLLEtBQUssRUFBRSxDQUFDLGdDQUFjLEVBQUUsb0JBQVEsQ0FBQztpQkFDbEMsQ0FBQzs7Z0NBQUE7WUFHRiwrQ0FjQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7IFNvcnRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zb3J0ZXInO1xyXG5pbXBvcnQgeyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDYXBpdGFsaXplUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5pbXBvcnQgeyBUcmltUGlwZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9waXBlcy90cmltLnBpcGUnO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBEb2N0b3JGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9kb2N0b3ItZm9ybSdcclxuaW1wb3J0IHsgRG9jdG9yTGlzdCB9IGZyb20gJy4vZG9jdG9yLWxpc3QnXHJcbmltcG9ydCB7IERvY3RvckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZG9jdG9yLWhlYWRlcidcclxuaW1wb3J0IHsgRG9jdG9yLERvY3RvckJhY2tlbmRTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Eb2N0b3JCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHsgXHJcbiAgc2VsZWN0b3I6ICdkb2N0b3JzJywgXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kb2N0b3JzL2RvY3RvcnMuaHRtbCcsXHJcbiAgaG9zdDogeydbaGlkZGVuXSc6ICdoaWRkZW4nfSxcclxuICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgRmlsdGVyVGV4dGJveENvbXBvbmVudCwgU29ydEJ5RGlyZWN0aXZlLCBEb2N0b3JMaXN0LCBEb2N0b3JIZWFkZXJDb21wb25lbnQsIERvY3RvckZvcm1Db21wb25lbnQsIE1BVEVSSUFMX0RJUkVDVElWRVNdLFxyXG4gIHBpcGVzOiBbQ2FwaXRhbGl6ZVBpcGUsIFRyaW1QaXBlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N0b3JzQ29tcG9uZW50IHtcclxuICAgIHNlbGVjdGVkRG9jdG9yOiBEb2N0b3I7XHJcbiAgICBzdWJzY3JpcHRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGRvY3RvcnM6IERvY3RvcltdO1xyXG4gICAgXHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERvY3RvciAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBZGQgZG9jdG9yXCIpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
