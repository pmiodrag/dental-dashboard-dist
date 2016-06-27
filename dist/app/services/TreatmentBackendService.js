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
                constructor(id, patientid, treatmentdate, therapy, diagnose, price) {
                    this.id = id;
                    this.patientid = patientid;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ0ksWUFBb0IsRUFBVSxFQUFTLFNBQWtCLEVBQVMsYUFBbUIsRUFBUyxPQUFlLEVBQ2xHLFFBQWdCLEVBQVMsS0FBYTtvQkFEN0IsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO29CQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFNO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2xHLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtnQkFDakQsQ0FBQztZQUNMLENBQUM7WUFKRCxpQ0FJQyxDQUFBO1lBR0Q7Z0JBSUksWUFBWSxJQUFTO29CQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7Z0JBQ3RCLENBQUM7Z0JBRUQsZ0JBQWdCO29CQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUVELGFBQWEsQ0FBQyxZQUF1QjtvQkFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxZQUFZLENBQUUsQ0FBQTtvQkFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQsZUFBZSxDQUFFLFNBQXFCO29CQUMxQyxFQUFFO29CQUNNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsU0FBUyxDQUFFLENBQUE7b0JBQ3RDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUMvRCxLQUFLLEVBQUUsQ0FBQTtnQkFDN0IsQ0FBQztnQkFDTCxLQUFLO2dCQUVELGVBQWUsQ0FBQyxlQUEwQjtvQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hFLENBQUM7Z0JBRUQsV0FBVyxDQUFDLEtBQVU7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO1lBR0wsQ0FBQztZQTFDRDtnQkFBQyxpQkFBVSxFQUFFOzt1Q0FBQTtZQUNiLDZEQXlDQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgIHtIdHRwLEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuZXhwb3J0IGludGVyZmFjZSBJVHJlYXRtZW50IHtcbiAgICBpZDogbnVtYmVyOyBcbiAgICBwYXRpZW50aWQgOiBudW1iZXI7IFxuICAgIHRyZWF0bWVudGRhdGU6IERhdGU7XG4gICAgdGhlcmFweTogc3RyaW5nO1xuICAgIGRpYWdub3NlOiBzdHJpbmc7XG4gICAgcHJpY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudCBpbXBsZW1lbnRzIElUcmVhdG1lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIHBhdGllbnRpZCA6IG51bWJlciwgcHVibGljIHRyZWF0bWVudGRhdGU6IERhdGUsIHB1YmxpYyB0aGVyYXB5OiBzdHJpbmcsIFxuICAgICAgICBwdWJsaWMgZGlhZ25vc2U6IHN0cmluZywgcHVibGljIHByaWNlOiBzdHJpbmcpIHtcbiAgICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSB7XG5cbiAgICBodHRwOkh0dHA7XG4gICAgYmFzZVVybDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkgIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gJy8nXG4gICAgfVxuXG4gICAgZ2V0QWxsVHJlYXRtZW50cygpIHsgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAndHJlYXRtZW50cycpO1xuICAgIH1cblxuICAgIHNhdmVUcmVhdG1lbnQobmV3VHJlYXRtZW50OiBUcmVhdG1lbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBuZXdUcmVhdG1lbnQgKVxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoKHRoaXMuYmFzZVVybCArICd0cmVhdG1lbnQnKSwgYm9keSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVRyZWF0bWVudCAodHJlYXRtZW50OiBJVHJlYXRtZW50KSA6IE9ic2VydmFibGU8UmVzcG9uc2U+ICB7XG4vL1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCB0cmVhdG1lbnQgKVxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCh0aGlzLmJhc2VVcmwgKyAndHJlYXRtZW50LycgKyB0cmVhdG1lbnQuaWQpLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFyZSgpXG4gICAgfSAgIFxuLy8gICBcblxuICAgIGRlbGV0ZVRyZWF0bWVudChkZWxldGVUcmVhdG1lbnQ6IFRyZWF0bWVudCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvdHJlYXRtZW50LycgKyBkZWxldGVUcmVhdG1lbnQuaWQpLnNoYXJlKCk7XG4gICAgfSAgICBcbiAgIFxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgfVxuICAgIFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
