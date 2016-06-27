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
    var Patient, PatientBackendService;
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
            class Patient {
                //    
                constructor(id, firstname, lastname, middlename, gender, address, place, birthdate, email, phone, mobilephone, photo) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.middlename = middlename;
                    this.gender = gender;
                    this.address = address;
                    this.place = place;
                    this.birthdate = birthdate;
                    this.email = email;
                    this.phone = phone;
                    this.mobilephone = mobilephone;
                    this.photo = photo;
                }
            }
            exports_1("Patient", Patient);
            let PatientBackendService = class PatientBackendService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                getAllPatients() {
                    return this.http.get('/patient');
                }
                getLatestPatient() {
                    return this.http.get('/patient/latest');
                }
                savePatient(newPatient) {
                    let body = JSON.stringify(newPatient);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'patient'), body, options); //.share();
                }
                updatePatient(patient) {
                    let body = JSON.stringify(patient);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'patient/' + patient.id), body, options)
                        .share();
                }
                deletePatient(deletePatient) {
                    return this.http.delete('/patient/' + deletePatient.id).share();
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            PatientBackendService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], PatientBackendService);
            exports_1("PatientBackendService", PatientBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFDQSxNQUFNO2dCQUNGLFlBQW9CLEVBQVUsRUFBUyxTQUFpQixFQUFTLFFBQWdCLEVBQVMsVUFBa0IsRUFDekYsTUFBYyxFQUFTLE9BQWUsRUFBUyxLQUFhLEVBQVUsU0FBZSxFQUFTLEtBQWMsRUFDNUcsS0FBYSxFQUFVLFdBQW1CLEVBQVMsS0FBYztvQkFGaEUsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDekYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBTTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUM1RyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7Z0JBQ3BGLENBQUM7WUFDTCxDQUFDO1lBTkQsNkJBTUMsQ0FBQTtZQUVEO2dCQUlJLFlBQVksSUFBUztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUN0QixDQUFDO2dCQUVELGNBQWM7b0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO2dCQUVELGdCQUFnQjtvQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCxXQUFXLENBQUMsVUFBbUI7b0JBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsVUFBVSxDQUFFLENBQUE7b0JBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBLENBQUEsV0FBVztnQkFDL0UsQ0FBQztnQkFFRCxhQUFhLENBQUUsT0FBaUI7b0JBRTVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsT0FBTyxDQUFFLENBQUE7b0JBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUMzRCxLQUFLLEVBQUUsQ0FBQTtnQkFDN0IsQ0FBQztnQkFFRCxhQUFhLENBQUMsYUFBc0I7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwRSxDQUFDO2dCQUdBLFdBQVcsQ0FBQyxLQUFVO29CQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztZQUdMLENBQUM7WUE5Q0Q7Z0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7WUFDYix5REE2Q0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAge0h0dHAsSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5leHBvcnQgaW50ZXJmYWNlIElQYXRpZW50IHtcbiAgICBpZDogbnVtYmVyOyBcbiAgICBmaXJzdG5hbWU6IHN0cmluZztcbiAgICBsYXN0bmFtZTogc3RyaW5nO1xuICAgIG1pZGRsZW5hbWU6IHN0cmluZyxcbiAgICBnZW5kZXI6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgcGxhY2U6IHN0cmluZzsgICAgXG4gICAgYmlydGhkYXRlOiBEYXRlO1xuICAgIGVtYWlsIDogc3RyaW5nO1xuICAgIHBob25lOiBzdHJpbmc7XG4gICAgbW9iaWxlcGhvbmU6IHN0cmluZztcbiAgICBwaG90bzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGF0aWVudCBpbXBsZW1lbnRzIElQYXRpZW50IHtcbi8vICAgIFxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIGZpcnN0bmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdG5hbWU6IHN0cmluZywgcHVibGljIG1pZGRsZW5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgZ2VuZGVyOiBzdHJpbmcsIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcsIHB1YmxpYyBwbGFjZTogc3RyaW5nLCAgcHVibGljIGJpcnRoZGF0ZTogRGF0ZSwgcHVibGljIGVtYWlsIDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBwaG9uZTogc3RyaW5nLCAgcHVibGljIG1vYmlsZXBob25lOiBzdHJpbmcsIHB1YmxpYyBwaG90byA6IHN0cmluZykge1xuICAgIH1cbn1cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRpZW50QmFja2VuZFNlcnZpY2Uge1xuXG4gICAgaHR0cDpIdHRwO1xuICAgIGJhc2VVcmw6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihodHRwOkh0dHApICB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9ICcvJ1xuICAgIH1cblxuICAgIGdldEFsbFBhdGllbnRzKCkgeyAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvcGF0aWVudCcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRMYXRlc3RQYXRpZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL3BhdGllbnQvbGF0ZXN0Jyk7XG4gICAgfVxuXG4gICAgc2F2ZVBhdGllbnQobmV3UGF0aWVudDogUGF0aWVudCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIG5ld1BhdGllbnQgKVxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoKHRoaXMuYmFzZVVybCArICdwYXRpZW50JyksIGJvZHksIG9wdGlvbnMpLy8uc2hhcmUoKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlUGF0aWVudCAocGF0aWVudDogSVBhdGllbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4gIHtcblxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBwYXRpZW50IClcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgodGhpcy5iYXNlVXJsICsgJ3BhdGllbnQvJyArIHBhdGllbnQuaWQpLCBib2R5LCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFyZSgpXG4gICAgfSAgIFxuICAgIFxuICAgIGRlbGV0ZVBhdGllbnQoZGVsZXRlUGF0aWVudDogUGF0aWVudCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvcGF0aWVudC8nICsgZGVsZXRlUGF0aWVudC5pZCkuc2hhcmUoKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gICAgfVxuICAgIFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
