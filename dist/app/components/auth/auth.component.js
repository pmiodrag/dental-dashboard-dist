System.register(['@angular/core', '@angular/router', '@angular/http', '@angular2-material/toolbar', "ng2-material/index", '../../shared/constants/app.constants', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, toolbar_1, index_1, app_constants_1, AuthService_1;
    var AuthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            let AuthComponent = class AuthComponent {
                constructor(http, authService) {
                    this.http = http;
                    this.authService = authService;
                    this.iconClass = app_constants_1.ICON_CLASS;
                    // authService.setProfileObject();
                }
            };
            AuthComponent = __decorate([
                core_1.Component({
                    directives: [router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar],
                    selector: 'auth-component',
                    templateUrl: 'app/components/auth/auth.component.html'
                }), 
                __metadata('design:paramtypes', [http_1.Http, AuthService_1.AuthService])
            ], AuthComponent);
            exports_1("AuthComponent", AuthComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUdJLFlBQW1CLElBQVUsRUFBUyxXQUF3QjtvQkFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFGOUQsY0FBUyxHQUFXLDBCQUFVLENBQUM7b0JBRzVCLGtDQUFrQztnQkFDckMsQ0FBQztZQUNMLENBQUM7WUFaRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG1CQUFTLENBQUM7b0JBQy9ELFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSx5Q0FBeUM7aUJBQ3pELENBQUM7OzZCQUFBO1lBRUYseUNBTUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7QXV0aEh0dHAsIHRva2VuTm90RXhwaXJlZCwgSnd0SGVscGVyfSBmcm9tICdhbmd1bGFyMi1qd3QvYW5ndWxhcjItand0JztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7SUNPTl9DTEFTU30gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyXSxcclxuICAgIHNlbGVjdG9yOiAnYXV0aC1jb21wb25lbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCB7XHJcbiAgICBpY29uQ2xhc3M6IHN0cmluZyA9IElDT05fQ0xBU1M7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwLCBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7ICAgICAgICBcclxuICAgICAgIC8vIGF1dGhTZXJ2aWNlLnNldFByb2ZpbGVPYmplY3QoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
