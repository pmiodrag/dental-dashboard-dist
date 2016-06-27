System.register(['@angular/core', '@angular/http', 'angular2-jwt/angular2-jwt', '../shared/constants/app.constants'], function(exports_1, context_1) {
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
    var core_1, http_1, angular2_jwt_1, app_constants_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            let AuthService = class AuthService {
                constructor(http, authHttp) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.lock = new Auth0Lock(app_constants_1.AUTH0_CLIENT_ID, app_constants_1.AUTH0_DOMAIN);
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                    this.profile = localStorage.getItem('profile');
                    this.setProfileObject();
                }
                login() {
                    this.lock.show((err, profile, id_token) => {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        this.setProfileObject();
                    });
                }
                setProfileObject() {
                    this.profile = localStorage.getItem('profile');
                    this.jsonObj = JSON.parse(this.profile);
                    if (this.jsonObj != null) {
                        this.picture = this.jsonObj['picture'];
                        this.name = this.jsonObj['name'];
                    }
                    else {
                        this.picture = "assets/img/avatar.jpg";
                        this.name = "";
                    }
                }
                logout() {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.picture = "assets/img/avatar.jpg";
                    this.name = "";
                }
                loggedIn() {
                    return angular2_jwt_1.tokenNotExpired();
                }
                tokenSubscription() {
                    this.authHttp.tokenStream.subscribe(data => console.log(data), err => console.log(err), () => console.log('Complete'));
                }
                useJwtHelper() {
                    var token = localStorage.getItem('id_token');
                    console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
                }
                isAdmin() {
                    if (this.loggedIn() && this.jsonObj['roles'].indexOf("admin") > -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                getPicture() {
                    return this.picture;
                }
            };
            AuthService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
            ], AuthService);
            exports_1("AuthService", AuthService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBUUksWUFBbUIsSUFBVSxFQUFTLFFBQWtCO29CQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBTHhELFNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQywrQkFBZSxFQUFFLDRCQUFZLENBQUMsQ0FBQztvQkFDcEQsY0FBUyxHQUFjLElBQUksd0JBQVMsRUFBRSxDQUFDO29CQUtuQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVNLEtBQUs7b0JBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFXLEVBQUUsT0FBZSxFQUFFLFFBQWdCO3dCQUMxRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLENBQUM7d0JBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ00sZ0JBQWdCO29CQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3JDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQTt3QkFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0wsQ0FBQztnQkFDTSxNQUFNO29CQUNULFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQXVCLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVNLFFBQVE7b0JBQ1gsTUFBTSxDQUFDLDhCQUFlLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFFTSxpQkFBaUI7b0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDL0IsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ3pCLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUN2QixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztnQkFDRCxZQUFZO29CQUNSLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEVBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUN2QyxDQUFDO2dCQUNOLENBQUM7Z0JBQ00sT0FBTztvQkFDVixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFTSxVQUFVO29CQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQztZQXhFRDtnQkFBQyxpQkFBVSxFQUFFOzsyQkFBQTtZQUNiLHFDQXVFQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL0F1dGhTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7QXV0aEh0dHAsIHRva2VuTm90RXhwaXJlZCwgSnd0SGVscGVyfSBmcm9tICdhbmd1bGFyMi1qd3QvYW5ndWxhcjItand0JztcclxuaW1wb3J0IHtBVVRIMF9DTElFTlRfSUQsIEFVVEgwX0RPTUFJTn0gZnJvbSAnLi4vc2hhcmVkL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzJztcclxuXHJcbmRlY2xhcmUgdmFyIEF1dGgwTG9jazogYW55O1xyXG5cclxuIFxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBqc29uT2JqOiBKU09OO1xyXG4gICAgcGljdHVyZTogc3RyaW5nO1xyXG4gICAgbG9jayA9IG5ldyBBdXRoMExvY2soQVVUSDBfQ0xJRU5UX0lELCBBVVRIMF9ET01BSU4pO1xyXG4gICAgand0SGVscGVyOiBKd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyKCk7XHJcbiAgICBwcm9maWxlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHB1YmxpYyBhdXRoSHR0cDogQXV0aEh0dHApIHtcclxuICAgICAgICB0aGlzLnByb2ZpbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZScpO1xyXG4gICAgICAgIHRoaXMuc2V0UHJvZmlsZU9iamVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmxvY2suc2hvdygoZXJyOiBzdHJpbmcsIHByb2ZpbGU6IHN0cmluZywgaWRfdG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2ZpbGVPYmplY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRQcm9maWxlT2JqZWN0KCkge1xyXG4gICAgICAgIHRoaXMucHJvZmlsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlJyk7XHJcbiAgICAgICAgdGhpcy5qc29uT2JqID0gSlNPTi5wYXJzZSh0aGlzLnByb2ZpbGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmpzb25PYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBpY3R1cmUgPSB0aGlzLmpzb25PYmpbJ3BpY3R1cmUnXTtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5qc29uT2JqWyduYW1lJ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5waWN0dXJlID0gXCJhc3NldHMvaW1nL2F2YXRhci5qcGdcIlxyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcclxuICAgICAgICB0aGlzLnBpY3R1cmUgPSBcImFzc2V0cy9pbWcvYXZhdGFyLmpwZ1wiO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9rZW5TdWJzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoSHR0cC50b2tlblN0cmVhbS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxyXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnQ29tcGxldGUnKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB1c2VKd3RIZWxwZXIoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRva2VuKSxcclxuICAgICAgICAgICAgdGhpcy5qd3RIZWxwZXIuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0b2tlbiksXHJcbiAgICAgICAgICAgIHRoaXMuand0SGVscGVyLmlzVG9rZW5FeHBpcmVkKHRva2VuKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNBZG1pbigpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2dnZWRJbigpICYmIHRoaXMuanNvbk9ialsncm9sZXMnXS5pbmRleE9mKFwiYWRtaW5cIikgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0UGljdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWN0dXJlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
