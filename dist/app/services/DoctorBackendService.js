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
            class Doctor {
                //    
                constructor(id, firstname, lastname, title, degreeyear, degreeplace, gender, address, place, birthdate, email, phone, mobilephone) {
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
            }
            exports_1("Doctor", Doctor);
            let DoctorBackendService = class DoctorBackendService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                getAllDoctors() {
                    return this.http.get('/doctor');
                }
                getLatestDoctor() {
                    return this.http.get('/doctor/latest');
                }
                saveDoctor(newDoctor) {
                    let body = JSON.stringify(newDoctor);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'doctor'), body, options); //.share();
                }
                updateDoctor(doctor) {
                    let body = JSON.stringify(doctor);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'doctor/' + doctor.id), body, options)
                        .share();
                }
                deleteDoctor(deleteDoctor) {
                    return this.http.delete('/doctor/' + deleteDoctor.id).share();
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            DoctorBackendService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], DoctorBackendService);
            exports_1("DoctorBackendService", DoctorBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0RvY3RvckJhY2tlbmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUNBLE1BQU07Z0JBQ0YsWUFBb0IsRUFBVSxFQUFTLFNBQWlCLEVBQVMsUUFBZ0IsRUFBUyxLQUFhLEVBQVMsVUFBa0IsRUFBUyxXQUFtQixFQUMzSSxNQUFjLEVBQVMsT0FBZSxFQUFTLEtBQWEsRUFBVSxTQUFlLEVBQVMsS0FBYyxFQUM1RyxLQUFhLEVBQVUsV0FBbUI7b0JBRnpDLE9BQUUsR0FBRixFQUFFLENBQVE7b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBUTtvQkFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtvQkFDM0ksV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBTTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFTO29CQUM1RyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFRO2dCQUM3RCxDQUFDO1lBQ0wsQ0FBQztZQU5ELDJCQU1DLENBQUE7WUFFRDtnQkFJSSxZQUFZLElBQVM7b0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtnQkFDdEIsQ0FBQztnQkFFRCxhQUFhO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxlQUFlO29CQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELFVBQVUsQ0FBQyxTQUFpQjtvQkFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxTQUFTLENBQUUsQ0FBQTtvQkFDdEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUEsQ0FBQSxXQUFXO2dCQUM5RSxDQUFDO2dCQUVELFlBQVksQ0FBRSxNQUFlO29CQUV6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBRSxDQUFBO29CQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDekQsS0FBSyxFQUFFLENBQUE7Z0JBQzdCLENBQUM7Z0JBRUQsWUFBWSxDQUFDLFlBQW9CO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEUsQ0FBQztnQkFHQSxXQUFXLENBQUMsS0FBVTtvQkFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7WUFHTCxDQUFDO1lBOUNEO2dCQUFDLGlCQUFVLEVBQUU7O29DQUFBO1lBQ2IsdURBNkNDLENBQUEiLCJmaWxlIjoic2VydmljZXMvRG9jdG9yQmFja2VuZFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICB7SHR0cCxIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSURvY3RvciB7XHJcbiAgICBpZDogbnVtYmVyOyBcclxuICAgIGZpcnN0bmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdG5hbWU6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBkZWdyZWV5ZWFyOiBudW1iZXIsXHJcbiAgICBkZWdyZWVwbGFjZTogc3RyaW5nLFxyXG4gICAgZ2VuZGVyOiBzdHJpbmcsXHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBwbGFjZTogc3RyaW5nOyAgICBcclxuICAgIGJpcnRoZGF0ZTogRGF0ZTtcclxuICAgIGVtYWlsIDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxuICAgIG1vYmlsZXBob25lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N0b3IgaW1wbGVtZW50cyBJRG9jdG9yIHtcclxuLy8gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyBmaXJzdG5hbWU6IHN0cmluZywgcHVibGljIGxhc3RuYW1lOiBzdHJpbmcsIHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgZGVncmVleWVhcjogbnVtYmVyLCBwdWJsaWMgZGVncmVlcGxhY2U6IHN0cmluZywgXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgZ2VuZGVyOiBzdHJpbmcsIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcsIHB1YmxpYyBwbGFjZTogc3RyaW5nLCAgcHVibGljIGJpcnRoZGF0ZTogRGF0ZSwgcHVibGljIGVtYWlsIDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHBob25lOiBzdHJpbmcsICBwdWJsaWMgbW9iaWxlcGhvbmU6IHN0cmluZykge1xyXG4gICAgfVxyXG59XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERvY3RvckJhY2tlbmRTZXJ2aWNlIHtcclxuXHJcbiAgICBodHRwOkh0dHA7XHJcbiAgICBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOkh0dHApICB7XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSAnLydcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxEb2N0b3JzKCkgeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9kb2N0b3InKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TGF0ZXN0RG9jdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvZG9jdG9yL2xhdGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVEb2N0b3IobmV3RG9jdG9yOiBEb2N0b3IpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIG5ld0RvY3RvciApXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgodGhpcy5iYXNlVXJsICsgJ2RvY3RvcicpLCBib2R5LCBvcHRpb25zKS8vLnNoYXJlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZURvY3RvciAoZG9jdG9yOiBJRG9jdG9yKSA6IE9ic2VydmFibGU8UmVzcG9uc2U+ICB7XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIGRvY3RvciApXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgodGhpcy5iYXNlVXJsICsgJ2RvY3Rvci8nICsgZG9jdG9yLmlkKSwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFyZSgpXHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIGRlbGV0ZURvY3RvcihkZWxldGVEb2N0b3I6IERvY3RvcikgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9kb2N0b3IvJyArIGRlbGV0ZURvY3Rvci5pZCkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
