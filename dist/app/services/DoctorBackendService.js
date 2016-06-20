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
    var Doctor, DoctorBackendService;
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
            Doctor = (function () {
                //    
                function Doctor(id, firstname, lastname, title, degreeyear, degreeplace, gender, address, place, birthdate, email, phone, mobilephone) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.title = title;
                    this.degreeyear = degreeyear;
                    this.degreeplace = degreeplace;
                    this.gender = gender;
                    this.address = address;
                    this.place = place;
                    this.birthdate = birthdate;
                    this.email = email;
                    this.phone = phone;
                    this.mobilephone = mobilephone;
                }
                return Doctor;
            }());
            exports_1("Doctor", Doctor);
            DoctorBackendService = (function () {
                function DoctorBackendService(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                DoctorBackendService.prototype.getAllDoctors = function () {
                    return this.http.get('/doctor');
                };
                DoctorBackendService.prototype.getLatestDoctor = function () {
                    return this.http.get('/doctor/latest');
                };
                DoctorBackendService.prototype.saveDoctor = function (newDoctor) {
                    var body = JSON.stringify(newDoctor);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'doctor'), body, options); //.share();
                };
                DoctorBackendService.prototype.updateDoctor = function (doctor) {
                    var body = JSON.stringify(doctor);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'doctor/' + doctor.id), body, options)
                        .share();
                };
                DoctorBackendService.prototype.deleteDoctor = function (deleteDoctor) {
                    return this.http.delete('/doctor/' + deleteDoctor.id).share();
                };
                DoctorBackendService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DoctorBackendService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DoctorBackendService);
                return DoctorBackendService;
            }());
            exports_1("DoctorBackendService", DoctorBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0RvY3RvckJhY2tlbmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUNBLE1BQU07Z0JBQ0YsZ0JBQW9CLEVBQVUsRUFBUyxTQUFpQixFQUFTLFFBQWdCLEVBQVMsS0FBYSxFQUFTLFVBQWtCLEVBQVMsV0FBbUIsRUFDM0ksTUFBYyxFQUFTLE9BQWUsRUFBUyxLQUFhLEVBQVUsU0FBZSxFQUFTLEtBQWMsRUFDNUcsS0FBYSxFQUFVLFdBQW1CO29CQUZ6QyxPQUFFLEdBQUYsRUFBRSxDQUFRO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7b0JBQzNJLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQU07b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUztvQkFDNUcsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFDN0QsQ0FBQztnQkFDTCxhQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCwyQkFNQyxDQUFBO1lBRUQ7Z0JBSUksOEJBQVksSUFBUztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUN0QixDQUFDO2dCQUVELDRDQUFhLEdBQWI7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELDhDQUFlLEdBQWY7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUQseUNBQVUsR0FBVixVQUFXLFNBQWlCO29CQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFNBQVMsQ0FBRSxDQUFBO29CQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQSxDQUFBLFdBQVc7Z0JBQzlFLENBQUM7Z0JBRUQsMkNBQVksR0FBWixVQUFjLE1BQWU7b0JBRXpCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsTUFBTSxDQUFFLENBQUE7b0JBQ25DLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUN6RCxLQUFLLEVBQUUsQ0FBQTtnQkFDN0IsQ0FBQztnQkFFRCwyQ0FBWSxHQUFaLFVBQWEsWUFBb0I7b0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsRSxDQUFDO2dCQUdBLDBDQUFXLEdBQVgsVUFBWSxLQUFVO29CQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkEzQ0w7b0JBQUMsaUJBQVUsRUFBRTs7d0NBQUE7Z0JBOENiLDJCQUFDO1lBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtZQTdDRCx1REE2Q0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9Eb2N0b3JCYWNrZW5kU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSxJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgIHtIdHRwLEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJRG9jdG9yIHtcclxuICAgIGlkOiBudW1iZXI7IFxyXG4gICAgZmlyc3RuYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0bmFtZTogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGRlZ3JlZXllYXI6IG51bWJlcixcclxuICAgIGRlZ3JlZXBsYWNlOiBzdHJpbmcsXHJcbiAgICBnZW5kZXI6IHN0cmluZyxcclxuICAgIGFkZHJlc3M6IHN0cmluZztcclxuICAgIHBsYWNlOiBzdHJpbmc7ICAgIFxyXG4gICAgYmlydGhkYXRlOiBEYXRlO1xyXG4gICAgZW1haWwgOiBzdHJpbmc7XHJcbiAgICBwaG9uZTogc3RyaW5nO1xyXG4gICAgbW9iaWxlcGhvbmU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3RvciBpbXBsZW1lbnRzIElEb2N0b3Ige1xyXG4vLyAgICBcclxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIGZpcnN0bmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdG5hbWU6IHN0cmluZywgcHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyBkZWdyZWV5ZWFyOiBudW1iZXIsIHB1YmxpYyBkZWdyZWVwbGFjZTogc3RyaW5nLCBcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBnZW5kZXI6IHN0cmluZywgcHVibGljIGFkZHJlc3M6IHN0cmluZywgcHVibGljIHBsYWNlOiBzdHJpbmcsICBwdWJsaWMgYmlydGhkYXRlOiBEYXRlLCBwdWJsaWMgZW1haWwgOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgcGhvbmU6IHN0cmluZywgIHB1YmxpYyBtb2JpbGVwaG9uZTogc3RyaW5nKSB7XHJcbiAgICB9XHJcbn1cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRG9jdG9yQmFja2VuZFNlcnZpY2Uge1xyXG5cclxuICAgIGh0dHA6SHR0cDtcclxuICAgIGJhc2VVcmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6SHR0cCkgIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9ICcvJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbERvY3RvcnMoKSB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2RvY3RvcicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMYXRlc3REb2N0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9kb2N0b3IvbGF0ZXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZURvY3RvcihuZXdEb2N0b3I6IERvY3RvcikgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggbmV3RG9jdG9yIClcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCh0aGlzLmJhc2VVcmwgKyAnZG9jdG9yJyksIGJvZHksIG9wdGlvbnMpLy8uc2hhcmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlRG9jdG9yIChkb2N0b3I6IElEb2N0b3IpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4gIHtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggZG9jdG9yIClcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KCh0aGlzLmJhc2VVcmwgKyAnZG9jdG9yLycgKyBkb2N0b3IuaWQpLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnNoYXJlKClcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgZGVsZXRlRG9jdG9yKGRlbGV0ZURvY3RvcjogRG9jdG9yKSA6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSgnL2RvY3Rvci8nICsgZGVsZXRlRG9jdG9yLmlkKS5zaGFyZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
