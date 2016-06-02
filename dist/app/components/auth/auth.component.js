System.register(['@angular/core', '@angular/router', '@angular/http', 'angular2-jwt/angular2-jwt', '@angular2-material/toolbar', "ng2-material/index"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, angular2_jwt_1, toolbar_1, index_1;
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
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            AuthComponent = (function () {
                function AuthComponent(http, authHttp) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.lock = new Auth0Lock('9NdeCaZbpddcqM34xZ8BKcZcwMfPqFNl', 'twinsoft.eu.auth0.com');
                    //lock = new Auth0Lock('AUTH0_CLIENT_ID', 'AUTH0_DOMAIN');
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                    this.profile = localStorage.getItem('profile');
                    this.setProfileObject();
                }
                AuthComponent.prototype.login = function () {
                    var _this = this;
                    this.lock.show(function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        _this.setProfileObject();
                    });
                };
                AuthComponent.prototype.setProfileObject = function () {
                    this.profile = localStorage.getItem('profile');
                    this.jsonObj = JSON.parse(this.profile);
                    console.log(" this.jsonObj == ", this.jsonObj);
                    if (this.jsonObj != null) {
                        this.picture = this.jsonObj['picture'];
                        this.name = this.jsonObj['name'];
                    }
                    else {
                        this.picture = "assets/img/avatar.jpg";
                        this.name = "";
                    }
                };
                AuthComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.picture = "assets/img/avatar.jpg";
                    this.name = "";
                };
                AuthComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AuthComponent.prototype.tokenSubscription = function () {
                    this.authHttp.tokenStream.subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
                };
                AuthComponent.prototype.useJwtHelper = function () {
                    var token = localStorage.getItem('id_token');
                    console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
                };
                AuthComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar],
                        selector: 'auth-component',
                        templateUrl: 'app/components/auth/auth.component.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
                ], AuthComponent);
                return AuthComponent;
            }());
            exports_1("AuthComponent", AuthComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFTSSx1QkFBbUIsSUFBVSxFQUFTLFFBQWtCO29CQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBTnhELFNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO29CQUNsRiwwREFBMEQ7b0JBQzFELGNBQVMsR0FBYyxJQUFJLHdCQUFTLEVBQUUsQ0FBQztvQkFLbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCw2QkFBSyxHQUFMO29CQUFBLGlCQVNDO29CQVJHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBVyxFQUFFLE9BQWUsRUFBRSxRQUFnQjt3QkFDMUQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDTixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixDQUFDO3dCQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQzNDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELHdDQUFnQixHQUFoQjtvQkFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNyQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUE7d0JBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNuQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsOEJBQU0sR0FBTjtvQkFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxnQ0FBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyw4QkFBZSxFQUFFLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQseUNBQWlCLEdBQWpCO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLEVBQ3ZCLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUF2QixDQUF1QixDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBQ0Qsb0NBQVksR0FBWjtvQkFDSSxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUM3QyxPQUFPLENBQUMsR0FBRyxDQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxFQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDdkMsQ0FBQztnQkFDTixDQUFDO2dCQW5FTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG1CQUFTLENBQUM7d0JBQy9ELFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSx5Q0FBeUM7cUJBQ3pELENBQUM7O2lDQUFBO2dCQWlFRixvQkFBQztZQUFELENBL0RBLEFBK0RDLElBQUE7WUEvREQseUNBK0RDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0F1dGhIdHRwLCB0b2tlbk5vdEV4cGlyZWQsIEp3dEhlbHBlcn0gZnJvbSAnYW5ndWxhcjItand0L2FuZ3VsYXIyLWp3dCc7XHJcbi8vaW1wb3J0IHtNZEJ1dHRvbn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5kZWNsYXJlIHZhciBBdXRoMExvY2s7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIE1kVG9vbGJhcl0sXHJcbiAgICBzZWxlY3RvcjogJ2F1dGgtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQge1xyXG4gICAganNvbk9iajogSlNPTjtcclxuICAgIHBpY3R1cmU6IHN0cmluZztcclxuICAgIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCc5TmRlQ2FaYnBkZGNxTTM0eFo4QktjWmN3TWZQcUZObCcsICd0d2luc29mdC5ldS5hdXRoMC5jb20nKTtcclxuICAgIC8vbG9jayA9IG5ldyBBdXRoMExvY2soJ0FVVEgwX0NMSUVOVF9JRCcsICdBVVRIMF9ET01BSU4nKTtcclxuICAgIGp3dEhlbHBlcjogSnd0SGVscGVyID0gbmV3IEp3dEhlbHBlcigpO1xyXG4gICAgcHJvZmlsZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwLCBwdWJsaWMgYXV0aEh0dHA6IEF1dGhIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKTtcclxuICAgICAgICB0aGlzLnNldFByb2ZpbGVPYmplY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmxvY2suc2hvdygoZXJyOiBzdHJpbmcsIHByb2ZpbGU6IHN0cmluZywgaWRfdG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2ZpbGVPYmplY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldFByb2ZpbGVPYmplY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGUnKTtcclxuICAgICAgICB0aGlzLmpzb25PYmogPSBKU09OLnBhcnNlKHRoaXMucHJvZmlsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgdGhpcy5qc29uT2JqID09IFwiLCB0aGlzLmpzb25PYmopO1xyXG4gICAgICAgIGlmICh0aGlzLmpzb25PYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY3R1cmUgPSB0aGlzLmpzb25PYmpbJ3BpY3R1cmUnXTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5qc29uT2JqWyduYW1lJ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5waWN0dXJlID0gXCJhc3NldHMvaW1nL2F2YXRhci5qcGdcIlxyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xyXG4gICAgICAgIHRoaXMucGljdHVyZSA9IFwiYXNzZXRzL2ltZy9hdmF0YXIuanBnXCI7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBsb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9rZW5TdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoSHR0cC50b2tlblN0cmVhbS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnQ29tcGxldGUnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB1c2VKd3RIZWxwZXIoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRva2VuKSxcclxuICAgICAgICAgICAgdGhpcy5qd3RIZWxwZXIuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0b2tlbiksXHJcbiAgICAgICAgICAgIHRoaXMuand0SGVscGVyLmlzVG9rZW5FeHBpcmVkKHRva2VuKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
