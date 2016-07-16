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
            class Treatment {
                constructor(id, patientid, doctorid, treatmentdate, therapy, diagnose, price) {
                    this.id = id;
                    this.patientid = patientid;
                    this.doctorid = doctorid;
                    this.treatmentdate = treatmentdate;
                    this.therapy = therapy;
                    this.diagnose = diagnose;
                    this.price = price;
                }
            }
            exports_1("Treatment", Treatment);
            let TreatmentBackendService = class TreatmentBackendService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                getAllTreatments() {
                    return this.http.get(this.baseUrl + 'treatments');
                }
                saveTreatment(newTreatment) {
                    let body = JSON.stringify(newTreatment);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'treatment'), body, options);
                }
                updateTreatment(treatment) {
                    //
                    let body = JSON.stringify(treatment);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'treatment/' + treatment.id), body, options)
                        .share();
                }
                //   
                deleteTreatment(deleteTreatment) {
                    return this.http.delete('/treatment/' + deleteTreatment.id).share();
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            TreatmentBackendService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], TreatmentBackendService);
            exports_1("TreatmentBackendService", TreatmentBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQ0ksWUFBb0IsRUFBVSxFQUFTLFNBQWtCLEVBQVMsUUFBZ0IsRUFBUyxhQUFtQixFQUFTLE9BQWUsRUFDM0gsUUFBZ0IsRUFBUyxLQUFhO29CQUQ3QixPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBTTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUMzSCxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7Z0JBQ2pELENBQUM7WUFDTCxDQUFDO1lBSkQsaUNBSUMsQ0FBQTtZQUdEO2dCQUlJLFlBQVksSUFBUztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUN0QixDQUFDO2dCQUVELGdCQUFnQjtvQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFRCxhQUFhLENBQUMsWUFBdUI7b0JBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsWUFBWSxDQUFFLENBQUE7b0JBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQUVELGVBQWUsQ0FBRSxTQUFxQjtvQkFDMUMsRUFBRTtvQkFDTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFNBQVMsQ0FBRSxDQUFBO29CQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDL0QsS0FBSyxFQUFFLENBQUE7Z0JBQzdCLENBQUM7Z0JBQ0wsS0FBSztnQkFFRCxlQUFlLENBQUMsZUFBMEI7b0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4RSxDQUFDO2dCQUVELFdBQVcsQ0FBQyxLQUFVO29CQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztZQUdMLENBQUM7WUExQ0Q7Z0JBQUMsaUJBQVUsRUFBRTs7dUNBQUE7WUFDYiw2REF5Q0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9UcmVhdG1lbnRCYWNrZW5kU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSxJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgIHtIdHRwLEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJVHJlYXRtZW50IHtcclxuICAgIGlkOiBudW1iZXI7IFxyXG4gICAgcGF0aWVudGlkIDogbnVtYmVyO1xyXG4gICAgZG9jdG9yaWQ6IG51bWJlcjsgXHJcbiAgICB0cmVhdG1lbnRkYXRlOiBEYXRlO1xyXG4gICAgdGhlcmFweTogc3RyaW5nO1xyXG4gICAgZGlhZ25vc2U6IHN0cmluZztcclxuICAgIHByaWNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnQgaW1wbGVtZW50cyBJVHJlYXRtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIHBhdGllbnRpZCA6IG51bWJlciwgcHVibGljIGRvY3RvcmlkOiBudW1iZXIsIHB1YmxpYyB0cmVhdG1lbnRkYXRlOiBEYXRlLCBwdWJsaWMgdGhlcmFweTogc3RyaW5nLCBcclxuICAgICAgICBwdWJsaWMgZGlhZ25vc2U6IHN0cmluZywgcHVibGljIHByaWNlOiBzdHJpbmcpIHtcclxuICAgIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50QmFja2VuZFNlcnZpY2Uge1xyXG5cclxuICAgIGh0dHA6SHR0cDtcclxuICAgIGJhc2VVcmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkgIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9ICcvJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFRyZWF0bWVudHMoKSB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAndHJlYXRtZW50cycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVUcmVhdG1lbnQobmV3VHJlYXRtZW50OiBUcmVhdG1lbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIG5ld1RyZWF0bWVudCApXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgodGhpcy5iYXNlVXJsICsgJ3RyZWF0bWVudCcpLCBib2R5LCBvcHRpb25zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlVHJlYXRtZW50ICh0cmVhdG1lbnQ6IElUcmVhdG1lbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4gIHtcclxuLy9cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCB0cmVhdG1lbnQgKVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoKHRoaXMuYmFzZVVybCArICd0cmVhdG1lbnQvJyArIHRyZWF0bWVudC5pZCksIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc2hhcmUoKVxyXG4gICAgfSAgIFxyXG4vLyAgIFxyXG5cclxuICAgIGRlbGV0ZVRyZWF0bWVudChkZWxldGVUcmVhdG1lbnQ6IFRyZWF0bWVudCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy90cmVhdG1lbnQvJyArIGRlbGV0ZVRyZWF0bWVudC5pZCkuc2hhcmUoKTtcclxuICAgIH0gICAgXHJcbiAgIFxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
