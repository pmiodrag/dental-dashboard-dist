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
    var Treatment, TreatmentService;
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
            let TreatmentService = class TreatmentService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                getTreatments() {
                    return this.http.get(this.baseUrl + '/treatments')
                        .map((res) => res.json())
                        .catch(this.handleError);
                }
                addPatient(treatment) {
                    let body = JSON.stringify(treatment);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.baseUrl + 'treatment', body, options)
                        .catch(this.handleError);
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            TreatmentService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], TreatmentService);
            exports_1("TreatmentService", TreatmentService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RyZWF0bWVudFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFDSSxZQUFvQixFQUFVLEVBQVMsU0FBa0IsRUFBUyxhQUFtQixFQUFTLE9BQWUsRUFDbEcsUUFBZ0IsRUFBUyxLQUFhO29CQUQ3QixPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVM7b0JBQVMsa0JBQWEsR0FBYixhQUFhLENBQU07b0JBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDbEcsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUNqRCxDQUFDO1lBQ0wsQ0FBQztZQUpELGlDQUlDLENBQUE7WUFJRDtnQkFFSSxZQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBRDlCLFlBQU8sR0FBVyxHQUFHLENBQUM7Z0JBQ1ksQ0FBQztnQkFHbkMsYUFBYTtvQkFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7eUJBQ25DLEdBQUcsQ0FBQyxDQUFDLEdBQWEsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBR0EsVUFBVSxDQUFFLFNBQXFCO29CQUU5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFNBQVMsQ0FBRSxDQUFBO29CQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDNUMsQ0FBQztnQkFFRCxXQUFXLENBQUMsS0FBVTtvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7WUFFTCxDQUFDO1lBN0JEO2dCQUFDLGlCQUFVLEVBQUU7O2dDQUFBO1lBQ2IsK0NBNEJDLENBQUEiLCJmaWxlIjoic2VydmljZXMvdHJlYXRtZW50U2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbi8vR3JhYiBldmVyeXRoaW5nIHdpdGggaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7IFxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmVhdG1lbnQge1xyXG4gICAgaWQ6IG51bWJlcjsgXHJcbiAgICBwYXRpZW50aWQgOiBudW1iZXI7IFxyXG4gICAgdHJlYXRtZW50ZGF0ZTogRGF0ZTtcclxuICAgIHRoZXJhcHk6IHN0cmluZztcclxuICAgIGRpYWdub3NlOiBzdHJpbmc7XHJcbiAgICBwcmljZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50IGltcGxlbWVudHMgSVRyZWF0bWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyBwYXRpZW50aWQgOiBudW1iZXIsIHB1YmxpYyB0cmVhdG1lbnRkYXRlOiBEYXRlLCBwdWJsaWMgdGhlcmFweTogc3RyaW5nLCBcclxuICAgICAgICBwdWJsaWMgZGlhZ25vc2U6IHN0cmluZywgcHVibGljIHByaWNlOiBzdHJpbmcpIHtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRyZWF0bWVudFNlcnZpY2Uge1xyXG4gICAgYmFzZVVybDogc3RyaW5nID0gJy8nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBnZXRUcmVhdG1lbnRzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJy90cmVhdG1lbnRzJylcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7ICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgIGFkZFBhdGllbnQgKHRyZWF0bWVudDogSVRyZWF0bWVudCkgOiBPYnNlcnZhYmxlPElUcmVhdG1lbnQ+ICB7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHRyZWF0bWVudCApXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJ3RyZWF0bWVudCcsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgLy8gLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
