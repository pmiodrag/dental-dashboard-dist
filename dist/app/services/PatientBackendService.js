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
            Patient = (function () {
                //    
                function Patient(id, firstname, lastname, middlename, gender, address, place, birthdate, email, phone, mobilephone) {
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
                }
                return Patient;
            }());
            exports_1("Patient", Patient);
            PatientBackendService = (function () {
                function PatientBackendService(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                PatientBackendService.prototype.getAllPatients = function () {
                    return this.http.get('/patient');
                };
                PatientBackendService.prototype.savePatient = function (newPatient) {
                    var body = JSON.stringify(newPatient);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'patient'), body, options).share();
                };
                PatientBackendService.prototype.updatePatient = function (patient) {
                    //
                    var body = JSON.stringify(patient);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'patient/' + patient.id), body, options)
                        .share();
                };
                //   
                PatientBackendService.prototype.deletePatient = function (deletePatient) {
                    return this.http.delete('/patient/' + deletePatient.id).share();
                };
                //    getPatientTreatmentList(patientId:number){        
                //        return this.http.get(this.baseUrl + 'patient/'+ patientId + '/treatments');                  
                //    }
                PatientBackendService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                PatientBackendService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PatientBackendService);
                return PatientBackendService;
            }());
            exports_1("PatientBackendService", PatientBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFDQSxNQUFNO2dCQUNGLGlCQUFvQixFQUFVLEVBQVMsU0FBaUIsRUFBUyxRQUFnQixFQUFTLFVBQWtCLEVBQ3pGLE1BQWMsRUFBUyxPQUFlLEVBQVMsS0FBYSxFQUFVLFNBQWUsRUFBUyxLQUFjLEVBQzVHLEtBQWEsRUFBVSxXQUFtQjtvQkFGekMsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDekYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBTTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUM1RyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFRO2dCQUM3RCxDQUFDO2dCQUNMLGNBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDZCQU1DLENBQUE7WUFFRDtnQkFJSSwrQkFBWSxJQUFTO29CQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7Z0JBQ3RCLENBQUM7Z0JBRUQsOENBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsMkNBQVcsR0FBWCxVQUFZLFVBQW1CO29CQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFVBQVUsQ0FBRSxDQUFBO29CQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDN0UsQ0FBQztnQkFFRCw2Q0FBYSxHQUFiLFVBQWUsT0FBaUI7b0JBQ3BDLEVBQUU7b0JBQ00sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxPQUFPLENBQUUsQ0FBQTtvQkFDcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQzNELEtBQUssRUFBRSxDQUFBO2dCQUM3QixDQUFDO2dCQUNMLEtBQUs7Z0JBRUQsNkNBQWEsR0FBYixVQUFjLGFBQXNCO29CQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEUsQ0FBQztnQkFFTCx3REFBd0Q7Z0JBQ3hELHVHQUF1RztnQkFDdkcsT0FBTztnQkFFRiwyQ0FBVyxHQUFYLFVBQVksS0FBVTtvQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBM0NMO29CQUFDLGlCQUFVLEVBQUU7O3lDQUFBO2dCQThDYiw0QkFBQztZQUFELENBN0NBLEFBNkNDLElBQUE7WUE3Q0QseURBNkNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgIHtIdHRwLEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuZXhwb3J0IGludGVyZmFjZSBJUGF0aWVudCB7XG4gICAgaWQ6IG51bWJlcjsgXG4gICAgZmlyc3RuYW1lOiBzdHJpbmc7XG4gICAgbGFzdG5hbWU6IHN0cmluZztcbiAgICBtaWRkbGVuYW1lOiBzdHJpbmcsXG4gICAgZ2VuZGVyOiBzdHJpbmcsXG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIHBsYWNlOiBzdHJpbmc7ICAgIFxuICAgIGJpcnRoZGF0ZTogRGF0ZTtcbiAgICBlbWFpbCA6IHN0cmluZztcbiAgICBwaG9uZTogc3RyaW5nO1xuICAgIG1vYmlsZXBob25lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXRpZW50IGltcGxlbWVudHMgSVBhdGllbnQge1xuLy8gICAgXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgZmlyc3RuYW1lOiBzdHJpbmcsIHB1YmxpYyBsYXN0bmFtZTogc3RyaW5nLCBwdWJsaWMgbWlkZGxlbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBnZW5kZXI6IHN0cmluZywgcHVibGljIGFkZHJlc3M6IHN0cmluZywgcHVibGljIHBsYWNlOiBzdHJpbmcsICBwdWJsaWMgYmlydGhkYXRlOiBEYXRlLCBwdWJsaWMgZW1haWwgOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIHBob25lOiBzdHJpbmcsICBwdWJsaWMgbW9iaWxlcGhvbmU6IHN0cmluZykge1xuICAgIH1cbn1cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRpZW50QmFja2VuZFNlcnZpY2Uge1xuXG4gICAgaHR0cDpIdHRwO1xuICAgIGJhc2VVcmw6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihodHRwOkh0dHApICB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9ICcvJ1xuICAgIH1cblxuICAgIGdldEFsbFBhdGllbnRzKCkgeyAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvcGF0aWVudCcpO1xuICAgIH1cblxuICAgIHNhdmVQYXRpZW50KG5ld1BhdGllbnQ6IFBhdGllbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBuZXdQYXRpZW50IClcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudCcpLCBib2R5LCBvcHRpb25zKS5zaGFyZSgpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGVQYXRpZW50IChwYXRpZW50OiBJUGF0aWVudCkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiAge1xuLy9cbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggcGF0aWVudCApXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoKHRoaXMuYmFzZVVybCArICdwYXRpZW50LycgKyBwYXRpZW50LmlkKSwgYm9keSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc2hhcmUoKVxuICAgIH0gICBcbi8vICAgXG5cbiAgICBkZWxldGVQYXRpZW50KGRlbGV0ZVBhdGllbnQ6IFBhdGllbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL3BhdGllbnQvJyArIGRlbGV0ZVBhdGllbnQuaWQpLnNoYXJlKCk7XG4gICAgfVxuICAgIFxuLy8gICAgZ2V0UGF0aWVudFRyZWF0bWVudExpc3QocGF0aWVudElkOm51bWJlcil7ICAgICAgICBcbi8vICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudC8nKyBwYXRpZW50SWQgKyAnL3RyZWF0bWVudHMnKTsgICAgICAgICAgICAgICAgICBcbi8vICAgIH1cbiAgICBcbiAgICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICB9XG4gICAgXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
