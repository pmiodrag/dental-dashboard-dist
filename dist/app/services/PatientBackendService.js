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
                PatientBackendService.prototype.getLatestPatient = function () {
                    return this.http.get('/patient/latest');
                };
                PatientBackendService.prototype.savePatient = function (newPatient) {
                    var body = JSON.stringify(newPatient);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'patient'), body, options); //.share();
                };
                PatientBackendService.prototype.updatePatient = function (patient) {
                    var body = JSON.stringify(patient);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'patient/' + patient.id), body, options)
                        .share();
                };
                PatientBackendService.prototype.deletePatient = function (deletePatient) {
                    return this.http.delete('/patient/' + deletePatient.id).share();
                };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFDQSxNQUFNO2dCQUNGLGlCQUFvQixFQUFVLEVBQVMsU0FBaUIsRUFBUyxRQUFnQixFQUFTLFVBQWtCLEVBQ3pGLE1BQWMsRUFBUyxPQUFlLEVBQVMsS0FBYSxFQUFVLFNBQWUsRUFBUyxLQUFjLEVBQzVHLEtBQWEsRUFBVSxXQUFtQjtvQkFGekMsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFRO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDekYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBTTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUM1RyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFRO2dCQUM3RCxDQUFDO2dCQUNMLGNBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDZCQU1DLENBQUE7WUFFRDtnQkFJSSwrQkFBWSxJQUFTO29CQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7Z0JBQ3RCLENBQUM7Z0JBRUQsOENBQWMsR0FBZDtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRUQsZ0RBQWdCLEdBQWhCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELDJDQUFXLEdBQVgsVUFBWSxVQUFtQjtvQkFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxVQUFVLENBQUUsQ0FBQTtvQkFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUEsQ0FBQSxXQUFXO2dCQUMvRSxDQUFDO2dCQUVELDZDQUFhLEdBQWIsVUFBZSxPQUFpQjtvQkFFNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxPQUFPLENBQUUsQ0FBQTtvQkFDcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQzNELEtBQUssRUFBRSxDQUFBO2dCQUM3QixDQUFDO2dCQUVELDZDQUFhLEdBQWIsVUFBYyxhQUFzQjtvQkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3BFLENBQUM7Z0JBR0EsMkNBQVcsR0FBWCxVQUFZLEtBQVU7b0JBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQTNDTDtvQkFBQyxpQkFBVSxFQUFFOzt5Q0FBQTtnQkE4Q2IsNEJBQUM7WUFBRCxDQTdDQSxBQTZDQyxJQUFBO1lBN0NELHlEQTZDQyxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSxJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICB7SHR0cCxIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSVBhdGllbnQge1xuICAgIGlkOiBudW1iZXI7IFxuICAgIGZpcnN0bmFtZTogc3RyaW5nO1xuICAgIGxhc3RuYW1lOiBzdHJpbmc7XG4gICAgbWlkZGxlbmFtZTogc3RyaW5nLFxuICAgIGdlbmRlcjogc3RyaW5nLFxuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBwbGFjZTogc3RyaW5nOyAgICBcbiAgICBiaXJ0aGRhdGU6IERhdGU7XG4gICAgZW1haWwgOiBzdHJpbmc7XG4gICAgcGhvbmU6IHN0cmluZztcbiAgICBtb2JpbGVwaG9uZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGF0aWVudCBpbXBsZW1lbnRzIElQYXRpZW50IHtcbi8vICAgIFxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIGZpcnN0bmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdG5hbWU6IHN0cmluZywgcHVibGljIG1pZGRsZW5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgZ2VuZGVyOiBzdHJpbmcsIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcsIHB1YmxpYyBwbGFjZTogc3RyaW5nLCAgcHVibGljIGJpcnRoZGF0ZTogRGF0ZSwgcHVibGljIGVtYWlsIDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBwaG9uZTogc3RyaW5nLCAgcHVibGljIG1vYmlsZXBob25lOiBzdHJpbmcpIHtcbiAgICB9XG59XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF0aWVudEJhY2tlbmRTZXJ2aWNlIHtcblxuICAgIGh0dHA6SHR0cDtcbiAgICBiYXNlVXJsOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSAge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSAnLydcbiAgICB9XG5cbiAgICBnZXRBbGxQYXRpZW50cygpIHsgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL3BhdGllbnQnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0TGF0ZXN0UGF0aWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9wYXRpZW50L2xhdGVzdCcpO1xuICAgIH1cblxuICAgIHNhdmVQYXRpZW50KG5ld1BhdGllbnQ6IFBhdGllbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KCBuZXdQYXRpZW50IClcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCh0aGlzLmJhc2VVcmwgKyAncGF0aWVudCcpLCBib2R5LCBvcHRpb25zKS8vLnNoYXJlKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVBhdGllbnQgKHBhdGllbnQ6IElQYXRpZW50KSA6IE9ic2VydmFibGU8UmVzcG9uc2U+ICB7XG5cbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggcGF0aWVudCApXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoKHRoaXMuYmFzZVVybCArICdwYXRpZW50LycgKyBwYXRpZW50LmlkKSwgYm9keSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc2hhcmUoKVxuICAgIH0gICBcbiAgICBcbiAgICBkZWxldGVQYXRpZW50KGRlbGV0ZVBhdGllbnQ6IFBhdGllbnQpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL3BhdGllbnQvJyArIGRlbGV0ZVBhdGllbnQuaWQpLnNoYXJlKCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgICBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuICAgIH1cbiAgICBcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
