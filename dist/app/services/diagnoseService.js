System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var Diagnose, DiagnoseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            Diagnose = (function () {
                function Diagnose(id, name, description) {
                    this.id = id;
                    this.name = name;
                    this.description = description;
                }
                return Diagnose;
            }());
            exports_1("Diagnose", Diagnose);
            DiagnoseService = (function () {
                function DiagnoseService(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                DiagnoseService.prototype.getDiagnoses = function () {
                    return this.http.get(this.baseUrl + '/diagnoses')
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DiagnoseService.prototype.addDiagnose = function (diagnose) {
                    var body = JSON.stringify(diagnose);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.baseUrl + 'diagnose', body, options)
                        .catch(this.handleError);
                };
                DiagnoseService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DiagnoseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DiagnoseService);
                return DiagnoseService;
            }());
            exports_1("DiagnoseService", DiagnoseService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RpYWdub3NlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQ0ksa0JBQW9CLEVBQVUsRUFBUSxJQUFZLEVBQ3ZDLFdBQW1CO29CQURWLE9BQUUsR0FBRixFQUFFLENBQVE7b0JBQVEsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBQzlCLENBQUM7Z0JBQ0wsZUFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsK0JBSUMsQ0FBQTtZQUlEO2dCQUVJLHlCQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRDlCLFlBQU8sR0FBVyxHQUFHLENBQUM7Z0JBQ1ksQ0FBQztnQkFHbkMsc0NBQVksR0FBWjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7eUJBQ2xDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBR0EscUNBQVcsR0FBWCxVQUFhLFFBQW1CO29CQUU3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFFBQVEsQ0FBRSxDQUFBO29CQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDNUMsQ0FBQztnQkFFRCxxQ0FBVyxHQUFYLFVBQVksS0FBVTtvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBM0JMO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQTZCYixzQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQsNkNBNEJDLENBQUEiLCJmaWxlIjoic2VydmljZXMvZGlhZ25vc2VTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuLy9HcmFiIGV2ZXJ5dGhpbmcgd2l0aCBpbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJzsgXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWdub3NlIHtcclxuICAgIGlkOiBudW1iZXI7ICAgIFxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERpYWdub3NlIGltcGxlbWVudHMgSURpYWdub3NlIHtcclxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlcixwdWJsaWMgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZykge1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhZ25vc2VTZXJ2aWNlIHtcclxuICAgIGJhc2VVcmw6IHN0cmluZyA9ICcvJztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgZ2V0RGlhZ25vc2VzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJy9kaWFnbm9zZXMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTsgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgYWRkRGlhZ25vc2UgKGRpYWdub3NlOiBJRGlhZ25vc2UpIDogT2JzZXJ2YWJsZTxJRGlhZ25vc2U+ICB7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIGRpYWdub3NlIClcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnZGlhZ25vc2UnLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgIC8vIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
