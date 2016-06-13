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
            DocumentsComponent = (function () {
                function DocumentsComponent() {
                    this.iconClass = app_constants_1.ICON_CLASS;
                }
                DocumentsComponent.prototype.addDocument = function () {
                    console.log("Add document");
                };
                DocumentsComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/components/documents/documents.html',
                        directives: [router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DocumentsComponent);
                return DocumentsComponent;
            }());
            exports_1("DocumentsComponent", DocumentsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdW1lbnRzL2RvY3VtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUdFO29CQURBLGNBQVMsR0FBVywwQkFBVSxDQUFDO2dCQUUvQixDQUFDO2dCQUVELHdDQUFXLEdBQVg7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFiSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSwyQkFBbUIsRUFBRSxtQkFBUyxDQUFFO3FCQUNqRSxDQUFDOztzQ0FBQTtnQkFXRix5QkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsbURBVUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RvY3VtZW50cy9kb2N1bWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtJQ09OX0NMQVNTfSBmcm9tICcuLi8uLi9zaGFyZWQvY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY3VtZW50c0NvbXBvbmVudCB7XHJcbiAgICBcclxuICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZERvY3VtZW50ICgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBZGQgZG9jdW1lbnRcIik7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
