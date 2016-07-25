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
                constructor(id, firstname, lastname, middlename, gender, address, place, birthdate, email, phone, mobilephone, photo, allergies, notes) {
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
                    this.allergies = allergies;
                    this.notes = notes;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFDQSxNQUFNO2dCQUNGLFlBQW9CLEVBQVUsRUFBUyxTQUFpQixFQUFTLFFBQWdCLEVBQVMsVUFBa0IsRUFDekYsTUFBYyxFQUFTLE9BQWUsRUFBUyxLQUFhLEVBQVUsU0FBZSxFQUFTLEtBQWMsRUFDNUcsS0FBYSxFQUFVLFdBQW1CLEVBQVMsS0FBYyxFQUFTLFNBQWlCLEVBQVMsS0FBYTtvQkFGaEgsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDekYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBTTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUM1RyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVM7b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUNwSSxDQUFDO1lBQ0wsQ0FBQztZQU5ELDZCQU1DLENBQUE7WUFFRDtnQkFJSSxZQUFZLElBQVM7b0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtnQkFDdEIsQ0FBQztnQkFFRCxjQUFjO29CQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFRCxnQkFBZ0I7b0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUQsV0FBVyxDQUFDLFVBQW1CO29CQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFVBQVUsQ0FBRSxDQUFBO29CQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQSxDQUFBLFdBQVc7Z0JBQy9FLENBQUM7Z0JBRUQsYUFBYSxDQUFFLE9BQWlCO29CQUU1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLE9BQU8sQ0FBRSxDQUFBO29CQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDM0QsS0FBSyxFQUFFLENBQUE7Z0JBQzdCLENBQUM7Z0JBRUQsYUFBYSxDQUFDLGFBQXNCO29CQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEUsQ0FBQztnQkFHQSxXQUFXLENBQUMsS0FBVTtvQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7WUFHTCxDQUFDO1lBOUNEO2dCQUFDLGlCQUFVLEVBQUU7O3FDQUFBO1lBQ2IseURBNkNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAge0h0dHAsSGVhZGVycywgVVJMU2VhcmNoUGFyYW1zLCBSZXF1ZXN0T3B0aW9ucywgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXRpZW50IHtcclxuICAgIGlkOiBudW1iZXI7IFxyXG4gICAgZmlyc3RuYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0bmFtZTogc3RyaW5nO1xyXG4gICAgbWlkZGxlbmFtZTogc3RyaW5nLFxyXG4gICAgZ2VuZGVyOiBzdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBwbGFjZTogc3RyaW5nOyAgICBcclxuICAgIGJpcnRoZGF0ZTogRGF0ZTtcclxuICAgIGVtYWlsIDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxuICAgIG1vYmlsZXBob25lOiBzdHJpbmc7XHJcbiAgICBwaG90bzogc3RyaW5nO1xyXG4gICAgYWxsZXJnaWVzOiBzdHJpbmc7XHJcbiAgICBub3Rlczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF0aWVudCBpbXBsZW1lbnRzIElQYXRpZW50IHtcclxuLy8gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyBmaXJzdG5hbWU6IHN0cmluZywgcHVibGljIGxhc3RuYW1lOiBzdHJpbmcsIHB1YmxpYyBtaWRkbGVuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgZ2VuZGVyOiBzdHJpbmcsIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcsIHB1YmxpYyBwbGFjZTogc3RyaW5nLCAgcHVibGljIGJpcnRoZGF0ZTogRGF0ZSwgcHVibGljIGVtYWlsIDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHBob25lOiBzdHJpbmcsICBwdWJsaWMgbW9iaWxlcGhvbmU6IHN0cmluZywgcHVibGljIHBob3RvIDogc3RyaW5nLCBwdWJsaWMgYWxsZXJnaWVzOiBzdHJpbmcsIHB1YmxpYyBub3Rlczogc3RyaW5nKSB7XHJcbiAgICB9XHJcbn1cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIHtcclxuXHJcbiAgICBodHRwOkh0dHA7XHJcbiAgICBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOkh0dHApICB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSAnLydcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxQYXRpZW50cygpIHsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvcGF0aWVudCcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMYXRlc3RQYXRpZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvcGF0aWVudC9sYXRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlUGF0aWVudChuZXdQYXRpZW50OiBQYXRpZW50KSA6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBuZXdQYXRpZW50IClcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudCcpLCBib2R5LCBvcHRpb25zKS8vLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZVBhdGllbnQgKHBhdGllbnQ6IElQYXRpZW50KSA6IE9ic2VydmFibGU8UmVzcG9uc2U+ICB7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIHBhdGllbnQgKVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoKHRoaXMuYmFzZVVybCArICdwYXRpZW50LycgKyBwYXRpZW50LmlkKSwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFyZSgpXHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIGRlbGV0ZVBhdGllbnQoZGVsZXRlUGF0aWVudDogUGF0aWVudCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9wYXRpZW50LycgKyBkZWxldGVQYXRpZW50LmlkKS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
