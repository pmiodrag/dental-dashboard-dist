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
    var Treatment, TreatmentBackendService;
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
            Treatment = (function () {
                function Treatment(id, patientid, treatmentdate, therapy, diagnose, price) {
                    this.id = id;
                    this.patientid = patientid;
                    this.treatmentdate = treatmentdate;
                    this.therapy = therapy;
                    this.diagnose = diagnose;
                    this.price = price;
                }
                return Treatment;
            }());
            exports_1("Treatment", Treatment);
            TreatmentBackendService = (function () {
                function TreatmentBackendService(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                TreatmentBackendService.prototype.getAllTreatments = function () {
                    return this.http.get(this.baseUrl + 'treatments');
                };
                TreatmentBackendService.prototype.saveTreatment = function (newTreatment) {
                    var body = JSON.stringify(newTreatment);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'treatment'), body, options);
                };
                TreatmentBackendService.prototype.updateTreatment = function (treatment) {
                    //
                    var body = JSON.stringify(treatment);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'treatment/' + treatment.id), body, options)
                        .share();
                };
                //   
                TreatmentBackendService.prototype.deleteTreatment = function (deleteTreatment) {
                    return this.http.delete('/treatment/' + deleteTreatment.id).share();
                };
                TreatmentBackendService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TreatmentBackendService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TreatmentBackendService);
                return TreatmentBackendService;
            }());
            exports_1("TreatmentBackendService", TreatmentBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0ksbUJBQW9CLEVBQVUsRUFBUyxTQUFrQixFQUFTLGFBQW1CLEVBQVMsT0FBZSxFQUNsRyxRQUFnQixFQUFTLEtBQWE7b0JBRDdCLE9BQUUsR0FBRixFQUFFLENBQVE7b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUztvQkFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBTTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNsRyxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBQ2pELENBQUM7Z0JBQ0wsZ0JBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELGlDQUlDLENBQUE7WUFHRDtnQkFJSSxpQ0FBWSxJQUFTO29CQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7Z0JBQ3RCLENBQUM7Z0JBRUQsa0RBQWdCLEdBQWhCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUVELCtDQUFhLEdBQWIsVUFBYyxZQUF1QjtvQkFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxZQUFZLENBQUUsQ0FBQTtvQkFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQsaURBQWUsR0FBZixVQUFpQixTQUFxQjtvQkFDMUMsRUFBRTtvQkFDTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFNBQVMsQ0FBRSxDQUFBO29CQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDL0QsS0FBSyxFQUFFLENBQUE7Z0JBQzdCLENBQUM7Z0JBQ0wsS0FBSztnQkFFRCxpREFBZSxHQUFmLFVBQWdCLGVBQTBCO29CQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDeEUsQ0FBQztnQkFFRCw2Q0FBVyxHQUFYLFVBQVksS0FBVTtvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBdkNMO29CQUFDLGlCQUFVLEVBQUU7OzJDQUFBO2dCQTBDYiw4QkFBQztZQUFELENBekNBLEFBeUNDLElBQUE7WUF6Q0QsNkRBeUNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvVHJlYXRtZW50QmFja2VuZFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAge0h0dHAsSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5leHBvcnQgaW50ZXJmYWNlIElUcmVhdG1lbnQge1xuICAgIGlkOiBudW1iZXI7IFxuICAgIHBhdGllbnRpZCA6IG51bWJlcjsgXG4gICAgdHJlYXRtZW50ZGF0ZTogRGF0ZTtcbiAgICB0aGVyYXB5OiBzdHJpbmc7XG4gICAgZGlhZ25vc2U6IHN0cmluZztcbiAgICBwcmljZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50IGltcGxlbWVudHMgSVRyZWF0bWVudCB7XG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgcGF0aWVudGlkIDogbnVtYmVyLCBwdWJsaWMgdHJlYXRtZW50ZGF0ZTogRGF0ZSwgcHVibGljIHRoZXJhcHk6IHN0cmluZywgXG4gICAgICAgIHB1YmxpYyBkaWFnbm9zZTogc3RyaW5nLCBwdWJsaWMgcHJpY2U6IHN0cmluZykge1xuICAgIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlIHtcblxuICAgIGh0dHA6SHR0cDtcbiAgICBiYXNlVXJsOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSAge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSAnLydcbiAgICB9XG5cbiAgICBnZXRBbGxUcmVhdG1lbnRzKCkgeyAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICd0cmVhdG1lbnRzJyk7XG4gICAgfVxuXG4gICAgc2F2ZVRyZWF0bWVudChuZXdUcmVhdG1lbnQ6IFRyZWF0bWVudCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIG5ld1RyZWF0bWVudCApXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgodGhpcy5iYXNlVXJsICsgJ3RyZWF0bWVudCcpLCBib2R5LCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlVHJlYXRtZW50ICh0cmVhdG1lbnQ6IElUcmVhdG1lbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4gIHtcbi8vXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHRyZWF0bWVudCApXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoKHRoaXMuYmFzZVVybCArICd0cmVhdG1lbnQvJyArIHRyZWF0bWVudC5pZCksIGJvZHksIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnNoYXJlKClcbiAgICB9ICAgXG4vLyAgIFxuXG4gICAgZGVsZXRlVHJlYXRtZW50KGRlbGV0ZVRyZWF0bWVudDogVHJlYXRtZW50KSA6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy90cmVhdG1lbnQvJyArIGRlbGV0ZVRyZWF0bWVudC5pZCkuc2hhcmUoKTtcbiAgICB9ICAgIFxuICAgXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICB9XG4gICAgXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
