System.register(['@angular/core', '@angular/router', '@angular2-material/toolbar', "ng2-material/index", '../../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, router_1, toolbar_1, index_1, app_constants_1;
    var DocumentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            let DocumentsComponent = class DocumentsComponent {
                constructor() {
                    this.iconClass = app_constants_1.ICON_CLASS;
                }
                addDocument() {
                    console.log("Add document");
                }
            };
            DocumentsComponent = __decorate([
                core_1.Component({
                    selector: 'dashboard',
                    templateUrl: 'app/components/documents/documents.html',
                    directives: [router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar]
                }), 
                __metadata('design:paramtypes', [])
            ], DocumentsComponent);
            exports_1("DocumentsComponent", DocumentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdW1lbnRzL2RvY3VtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUdFO29CQURBLGNBQVMsR0FBVywwQkFBVSxDQUFDO2dCQUUvQixDQUFDO2dCQUVELFdBQVc7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztZQUVILENBQUM7WUFmRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixXQUFXLEVBQUUseUNBQXlDO29CQUN0RCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSwyQkFBbUIsRUFBRSxtQkFBUyxDQUFFO2lCQUNqRSxDQUFDOztrQ0FBQTtZQUNGLG1EQVVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZG9jdW1lbnRzL2RvY3VtZW50cy5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhciBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudHNDb21wb25lbnQge1xyXG4gICAgXHJcbiAgaWNvbkNsYXNzOiBzdHJpbmcgPSBJQ09OX0NMQVNTO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuICBcclxuICBhZGREb2N1bWVudCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWRkIGRvY3VtZW50XCIpO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
