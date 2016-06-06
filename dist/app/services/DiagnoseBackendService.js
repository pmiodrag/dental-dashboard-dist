System.register(['@angular/core', '@angular/http', "rxjs/Observable"], function(exports_1, context_1) {
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
    var Diagnose, DiagnoseBackendService;
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
            }],
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
            DiagnoseBackendService = (function () {
                function DiagnoseBackendService(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                DiagnoseBackendService.prototype.getAllDiagnoses = function () {
                    return this.http.get(this.baseUrl + 'diagnoses');
                };
                DiagnoseBackendService.prototype.saveDiagnose = function (newDiagnose) {
                    var body = JSON.stringify(newDiagnose);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'diagnose'), body, options).share();
                };
                DiagnoseBackendService.prototype.updateDiagnose = function (diagnose) {
                    //
                    var body = JSON.stringify(diagnose);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'diagnose/' + diagnose.id), body, options)
                        .share();
                };
                //   
                DiagnoseBackendService.prototype.deleteDiagnose = function (deleteDiagnose) {
                    return this.http.delete('/diagnose/' + deleteDiagnose.id).share();
                };
                DiagnoseBackendService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DiagnoseBackendService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DiagnoseBackendService);
                return DiagnoseBackendService;
            }());
            exports_1("DiagnoseBackendService", DiagnoseBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0RpYWdub3NlQmFja2VuZFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFDSSxrQkFBb0IsRUFBVSxFQUFTLElBQVksRUFDeEMsV0FBbUI7b0JBRFYsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO29CQUN4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFDOUIsQ0FBQztnQkFDTCxlQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCwrQkFJQyxDQUFBO1lBR0Q7Z0JBSUksZ0NBQVksSUFBUztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUN0QixDQUFDO2dCQUVELGdEQUFlLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUM7Z0JBQ3JELENBQUM7Z0JBRUQsNkNBQVksR0FBWixVQUFhLFdBQXFCO29CQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFdBQVcsQ0FBRSxDQUFBO29CQUN4QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDOUUsQ0FBQztnQkFFRCwrQ0FBYyxHQUFkLFVBQWdCLFFBQW1CO29CQUN2QyxFQUFFO29CQUNNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFFLENBQUE7b0JBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUM3RCxLQUFLLEVBQUUsQ0FBQTtnQkFDN0IsQ0FBQztnQkFDTCxLQUFLO2dCQUVELCtDQUFjLEdBQWQsVUFBZSxjQUF3QjtvQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3RFLENBQUM7Z0JBRUQsNENBQVcsR0FBWCxVQUFZLEtBQVU7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQXZDTDtvQkFBQyxpQkFBVSxFQUFFOzswQ0FBQTtnQkEwQ2IsNkJBQUM7WUFBRCxDQXpDQSxBQXlDQyxJQUFBO1lBekNELDJEQXlDQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL0RpYWdub3NlQmFja2VuZFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICB7SHR0cCxIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSURpYWdub3NlIHtcclxuICAgIGlkOiBudW1iZXI7IFxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERpYWdub3NlIGltcGxlbWVudHMgSURpYWdub3NlIHtcclxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhZ25vc2VCYWNrZW5kU2VydmljZSB7XHJcblxyXG4gICAgaHR0cDpIdHRwO1xyXG4gICAgYmFzZVVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSAge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gJy8nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsRGlhZ25vc2VzKCkgeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2RpYWdub3NlcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVEaWFnbm9zZShuZXdEaWFnbm9zZTogRGlhZ25vc2UpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIG5ld0RpYWdub3NlIClcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCh0aGlzLmJhc2VVcmwgKyAnZGlhZ25vc2UnKSwgYm9keSwgb3B0aW9ucykuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlRGlhZ25vc2UgKGRpYWdub3NlOiBJRGlhZ25vc2UpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4gIHtcclxuLy9cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBkaWFnbm9zZSApXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgodGhpcy5iYXNlVXJsICsgJ2RpYWdub3NlLycgKyBkaWFnbm9zZS5pZCksIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc2hhcmUoKVxyXG4gICAgfSAgIFxyXG4vLyAgIFxyXG5cclxuICAgIGRlbGV0ZURpYWdub3NlKGRlbGV0ZURpYWdub3NlOiBEaWFnbm9zZSkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9kaWFnbm9zZS8nICsgZGVsZXRlRGlhZ25vc2UuaWQpLnNoYXJlKCk7XHJcbiAgICB9ICAgIFxyXG4gICBcclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
