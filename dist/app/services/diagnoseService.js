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
            class Diagnose {
                constructor(id, name, description) {
                    this.id = id;
                    this.name = name;
                    this.description = description;
                }
            }
            exports_1("Diagnose", Diagnose);
            let DiagnoseService = class DiagnoseService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                getDiagnoses() {
                    return this.http.get(this.baseUrl + '/diagnoses')
                        .map((res) => res.json())
                        .catch(this.handleError);
                }
                addDiagnose(diagnose) {
                    let body = JSON.stringify(diagnose);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.baseUrl + 'diagnose', body, options)
                        .catch(this.handleError);
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            DiagnoseService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], DiagnoseService);
            exports_1("DiagnoseService", DiagnoseService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RpYWdub3NlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQ0ksWUFBb0IsRUFBVSxFQUFRLElBQVksRUFDdkMsV0FBbUI7b0JBRFYsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUSxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUN2QyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFDOUIsQ0FBQztZQUNMLENBQUM7WUFKRCwrQkFJQyxDQUFBO1lBSUQ7Z0JBRUksWUFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUQ5QixZQUFPLEdBQVcsR0FBRyxDQUFDO2dCQUNZLENBQUM7Z0JBR25DLFlBQVk7b0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO3lCQUNsQyxHQUFHLENBQUMsQ0FBQyxHQUFhLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUdBLFdBQVcsQ0FBRSxRQUFtQjtvQkFFN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxRQUFRLENBQUUsQ0FBQTtvQkFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQzVDLENBQUM7Z0JBRUQsV0FBVyxDQUFDLEtBQVU7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO1lBRUwsQ0FBQztZQTdCRDtnQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtZQUNiLDZDQTRCQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2RpYWdub3NlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbi8vR3JhYiBldmVyeXRoaW5nIHdpdGggaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7IFxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEaWFnbm9zZSB7XHJcbiAgICBpZDogbnVtYmVyOyAgICBcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFnbm9zZSBpbXBsZW1lbnRzIElEaWFnbm9zZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBudW1iZXIscHVibGljIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWdub3NlU2VydmljZSB7XHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSAnLyc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGdldERpYWdub3Nlcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICcvZGlhZ25vc2VzJylcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgIGFkZERpYWdub3NlIChkaWFnbm9zZTogSURpYWdub3NlKSA6IE9ic2VydmFibGU8SURpYWdub3NlPiAge1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBkaWFnbm9zZSApXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ2RpYWdub3NlJywgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAvLyAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
