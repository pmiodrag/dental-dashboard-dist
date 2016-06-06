System.register(["@angular/core", "../../services/PatientBackendService", 'immutable', "./asObservable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, PatientBackendService_1, immutable_1, asObservable_1, Rx_1;
    var PatientStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (PatientBackendService_1_1) {
                PatientBackendService_1 = PatientBackendService_1_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (asObservable_1_1) {
                asObservable_1 = asObservable_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            PatientStore = (function () {
                // this method should be supported in RXJS 2
                //    public patients: Observable<List<Patient>> =  this._patients.asObservable();
                function PatientStore(patientBackendService) {
                    this.patientBackendService = patientBackendService;
                    this._patients = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    this.loadInitialData();
                }
                Object.defineProperty(PatientStore.prototype, "patients", {
                    get: function () {
                        return asObservable_1.asObservable(this._patients);
                    },
                    set: function (patients) {
                        this._patients.next(patients);
                    },
                    enumerable: true,
                    configurable: true
                });
                PatientStore.prototype.loadInitialData = function () {
                    var _this = this;
                    this.patientBackendService.getAllPatients()
                        .subscribe(function (res) {
                        var patients = res.json().map(function (patient) {
                            return new PatientBackendService_1.Patient(patient.id, patient.firstname, patient.lastname, patient.middlename, patient.gender, patient.address, patient.place, patient.birthdate, patient.email, patient.phone, patient.mobilephone);
                        }); //.filter((person) => person.firstname == "Miodrag")
                        _this._patients.next(immutable_1.List(patients));
                    }, function (err) { return console.log("Error retrieving Patients"); });
                };
                PatientStore.prototype.filterData = function (data) {
                    var _this = this;
                    this.patientBackendService.getAllPatients()
                        .subscribe(function (res) {
                        var patients = res.json().map(function (patient) {
                            return new PatientBackendService_1.Patient(patient.id, patient.firstname, patient.lastname, patient.middlename, patient.gender, patient.address, patient.place, patient.birthdate, patient.email, patient.phone, patient.mobilephone);
                        })
                            .filter(function (item) {
                            var props = ['firstname', 'middlename', 'lastname', 'address', 'place'];
                            var match = false;
                            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                                var prop = props_1[_i];
                                if (item[prop] != null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                    match = true;
                                    break;
                                }
                            }
                            ;
                            return match;
                        });
                        _this._patients.next(immutable_1.List(patients));
                    }, function (err) { return console.log("Error retrieving Patients"); });
                };
                PatientStore.prototype.addPatient = function (newPatient) {
                    var _this = this;
                    this.patientBackendService.savePatient(newPatient).subscribe(function (res) {
                        var newPatient = res.json();
                        _this._patients.next(_this._patients.getValue().push(newPatient));
                    }, function (err) { return console.log("Error saving Patients"); });
                };
                PatientStore.prototype.updatePatient = function (updatedPatient) {
                    var _this = this;
                    var obs = this.patientBackendService.updatePatient(updatedPatient);
                    obs.subscribe(function (res) {
                        var patients = _this._patients.getValue();
                        var index = patients.findIndex(function (patient) { return patient.id === updatedPatient.id; });
                        patients[index] = updatedPatient;
                        _this._patients.next(patients);
                    });
                    return obs;
                };
                PatientStore.prototype.deletePatient = function (deleted) {
                    var _this = this;
                    var obs = this.patientBackendService.deletePatient(deleted);
                    obs.subscribe(function (res) {
                        var patients = _this._patients.getValue();
                        var index = patients.findIndex(function (patient) { return patient.id === deleted.id; });
                        _this._patients.next(patients.delete(index));
                    });
                    return obs;
                };
                PatientStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [PatientBackendService_1.PatientBackendService])
                ], PatientStore);
                return PatientStore;
            }());
            exports_1("PatientStore", PatientStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0ksNENBQTRDO2dCQUM1QyxrRkFBa0Y7Z0JBRWxGLHNCQUFvQixxQkFBNEM7b0JBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7b0JBSnhELGNBQVMsR0FBbUMsSUFBSSxvQkFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFLOUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELHNCQUFJLGtDQUFRO3lCQUFaO3dCQUNJLE1BQU0sQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDeEMsQ0FBQzt5QkFDRCxVQUFhLFFBQWE7d0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxDQUFDOzs7bUJBSEE7Z0JBTUQsc0NBQWUsR0FBZjtvQkFBQSxpQkF5QkM7b0JBeEJHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUU7eUJBQ3RDLFNBQVMsQ0FDVixVQUFBLEdBQUc7d0JBQ0MsSUFBSSxRQUFRLEdBQWUsR0FBRyxDQUFDLElBQUksRUFBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQVk7NEJBQ3BELE9BQUEsSUFBSSwrQkFBTyxDQUNQLE9BQU8sQ0FBQyxFQUFFLEVBQ1YsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLEtBQUssRUFDYixPQUFPLENBQUMsS0FBSyxFQUNiLE9BQU8sQ0FBQyxXQUFXLENBQ3RC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QUEiLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0ZS9QYXRpZW50U3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2VcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4vYXNPYnNlcnZhYmxlXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhdGllbnRTdG9yZSB7XG5cbiAgICBwcml2YXRlIF9wYXRpZW50czogQmVoYXZpb3JTdWJqZWN0PExpc3Q8UGF0aWVudD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XG4gICAgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIGJlIHN1cHBvcnRlZCBpbiBSWEpTIDJcbiAgICAvLyAgICBwdWJsaWMgcGF0aWVudHM6IE9ic2VydmFibGU8TGlzdDxQYXRpZW50Pj4gPSAgdGhpcy5fcGF0aWVudHMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnRCYWNrZW5kU2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9hZEluaXRpYWxEYXRhKCk7XG4gICAgfVxuXG4gICAgZ2V0IHBhdGllbnRzKCkge1xuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX3BhdGllbnRzKTtcbiAgICB9XG4gICAgc2V0IHBhdGllbnRzKHBhdGllbnRzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcGF0aWVudHMubmV4dChwYXRpZW50cyk7XG4gICAgfVxuXG5cbiAgICBsb2FkSW5pdGlhbERhdGEoKSB7XG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFBhdGllbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50cyA9ICg8UGF0aWVudFtdPnJlcy5qc29uKCkpLm1hcCgocGF0aWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1pZGRsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmJpcnRoZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5tb2JpbGVwaG9uZVxuICAgICAgICAgICAgICAgICAgICApKSAvLy5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLmZpcnN0bmFtZSA9PSBcIk1pb2RyYWdcIilcbiAgICAgICBcblxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQoTGlzdChwYXRpZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgUGF0aWVudHNcIilcbiAgICAgICAgICAgICk7XG5cbiAgICB9XG4gICAgZmlsdGVyRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFBhdGllbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50cyA9ICg8UGF0aWVudFtdPnJlcy5qc29uKCkpLm1hcCgocGF0aWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1pZGRsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmJpcnRoZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5tb2JpbGVwaG9uZVxuICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBbJ2ZpcnN0bmFtZScsICdtaWRkbGVuYW1lJywgJ2xhc3RuYW1lJywgJ2FkZHJlc3MnLCAncGxhY2UnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW3Byb3BdICE9IG51bGwgJiYgaXRlbVtwcm9wXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihkYXRhKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KExpc3QocGF0aWVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFBhdGllbnRzXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBhZGRQYXRpZW50KG5ld1BhdGllbnQ6IFBhdGllbnQpIHtcblxuICAgICAgICB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5zYXZlUGF0aWVudChuZXdQYXRpZW50KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQYXRpZW50ID0gKDxQYXRpZW50PnJlcy5qc29uKCkpOyBcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHRoaXMuX3BhdGllbnRzLmdldFZhbHVlKCkucHVzaChuZXdQYXRpZW50KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3Igc2F2aW5nIFBhdGllbnRzXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdXBkYXRlUGF0aWVudCh1cGRhdGVkUGF0aWVudDogUGF0aWVudCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuICAgICAgICBsZXQgb2JzID0gdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UudXBkYXRlUGF0aWVudCh1cGRhdGVkUGF0aWVudCk7XG5cbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzOiBMaXN0PFBhdGllbnQ+ID0gdGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXRpZW50cy5maW5kSW5kZXgoKHBhdGllbnQpID0+IHBhdGllbnQuaWQgPT09IHVwZGF0ZWRQYXRpZW50LmlkKTtcbiAgICAgICAgICAgICAgICBwYXRpZW50c1tpbmRleF0gPSB1cGRhdGVkUGF0aWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnM7XG4gICAgfVxuXG5cbiAgICBkZWxldGVQYXRpZW50KGRlbGV0ZWQ6IFBhdGllbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5kZWxldGVQYXRpZW50KGRlbGV0ZWQpO1xuXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50czogTGlzdDxQYXRpZW50PiA9IHRoaXMuX3BhdGllbnRzLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGF0aWVudHMuZmluZEluZGV4KChwYXRpZW50KSA9PiBwYXRpZW50LmlkID09PSBkZWxldGVkLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzLmRlbGV0ZShpbmRleCkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
