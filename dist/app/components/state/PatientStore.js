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
                    this._showCardView = new Rx_1.BehaviorSubject(true);
                    this._startIndex = new Rx_1.BehaviorSubject(0);
                    this._endIndex = new Rx_1.BehaviorSubject(3);
                    this.loadInitialData();
                }
                Object.defineProperty(PatientStore.prototype, "showCardView", {
                    get: function () {
                        return asObservable_1.asObservable(this._showCardView);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PatientStore.prototype, "startIndex", {
                    get: function () {
                        return asObservable_1.asObservable(this._startIndex);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PatientStore.prototype, "endIndex", {
                    get: function () {
                        return asObservable_1.asObservable(this._endIndex);
                    },
                    enumerable: true,
                    configurable: true
                });
                PatientStore.prototype.setIndexes = function (start, end) {
                    this._startIndex.next(start);
                    this._endIndex.next(end);
                };
                PatientStore.prototype.changeView = function (show) {
                    console.log("changeView _showCardView", show);
                    this._showCardView.next(show);
                };
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
                Object.defineProperty(PatientStore.prototype, "patientsBehaviorSubject", {
                    get: function () {
                        return this._patients;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBTUksNENBQTRDO2dCQUM1QyxrRkFBa0Y7Z0JBRWxGLHNCQUFvQixxQkFBNEM7b0JBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7b0JBUHhELGNBQVMsR0FBbUMsSUFBSSxvQkFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDMUUsa0JBQWEsR0FBNkIsSUFBSSxvQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwRSxnQkFBVyxHQUE0QixJQUFJLG9CQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlELGNBQVMsR0FBNEIsSUFBSSxvQkFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUtoRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsc0JBQUksc0NBQVk7eUJBQWhCO3dCQUNJLE1BQU0sQ0FBRSwyQkFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDN0MsQ0FBQzs7O21CQUFBO2dCQUVELHNCQUFJLG9DQUFVO3lCQUFkO3dCQUNJLE1BQU0sQ0FBRSwyQkFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDM0MsQ0FBQzs7O21CQUFBO2dCQUVBLHNCQUFJLGtDQUFRO3lCQUFaO3dCQUNHLE1BQU0sQ0FBRSwyQkFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekMsQ0FBQzs7O21CQUFBO2dCQUVELGlDQUFVLEdBQVYsVUFBVyxLQUFhLEVBQUUsR0FBVztvQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixDQUFD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RSxDQUFDO3dCQUN4RCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLENBQUMsRUFBRSxFQUFoQyxDQUFnQyxDQUFDLENBQUM7d0JBQzlFLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUM7d0JBQ2pDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsQ0FBQztvQkFFUCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBR0Qsb0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUE5QixpQkFhQztvQkFaRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUU1RCxHQUFHLENBQUMsU0FBUyxDQUNULFVBQUEsR0FBRzt3QkFDQyxJQUFJLFFBQVEsR0FBa0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDeEQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO3dCQUN2RSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRWhELENBQUMsQ0FDSixDQUFDO29CQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztnQkFuSkw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBc0piLG1CQUFDO1lBQUQsQ0FySkEsQUFxSkMsSUFBQTtZQXJKRCx1Q0FxSkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0YXRlL1BhdGllbnRTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1BhdGllbnQsIFBhdGllbnRCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi9hc09ic2VydmFibGVcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF0aWVudFN0b3JlIHtcblxuICAgIHByaXZhdGUgX3BhdGllbnRzOiBCZWhhdmlvclN1YmplY3Q8TGlzdDxQYXRpZW50Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcbiAgICBwcml2YXRlIF9zaG93Q2FyZFZpZXc6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG4gICAgcHJpdmF0ZSBfc3RhcnRJbmRleDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICAgIHByaXZhdGUgX2VuZEluZGV4OiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoMyk7XG4gICAgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIGJlIHN1cHBvcnRlZCBpbiBSWEpTIDJcbiAgICAvLyAgICBwdWJsaWMgcGF0aWVudHM6IE9ic2VydmFibGU8TGlzdDxQYXRpZW50Pj4gPSAgdGhpcy5fcGF0aWVudHMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnRCYWNrZW5kU2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9hZEluaXRpYWxEYXRhKCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBzaG93Q2FyZFZpZXcoKSB7XG4gICAgICAgIHJldHVybiAgYXNPYnNlcnZhYmxlKHRoaXMuX3Nob3dDYXJkVmlldyk7XG4gICAgfVxuICAgIFxuICAgIGdldCBzdGFydEluZGV4KCkge1xuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9zdGFydEluZGV4KTtcbiAgICB9XG4gICAgXG4gICAgIGdldCBlbmRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuICBhc09ic2VydmFibGUodGhpcy5fZW5kSW5kZXgpO1xuICAgIH1cbiAgICBcbiAgICBzZXRJbmRleGVzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0SW5kZXgubmV4dChzdGFydCk7XG4gICAgICAgIHRoaXMuX2VuZEluZGV4Lm5leHQoZW5kKTtcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlVmlldyhzaG93OiBib29sZWFuKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VWaWV3IF9zaG93Q2FyZFZpZXdcIiwgc2hvdyk7XG4gICAgICAgIHRoaXMuX3Nob3dDYXJkVmlldy5uZXh0KHNob3cpO1xuICAgIH1cbiAgICBnZXQgcGF0aWVudHMoKSB7XG4gICAgICAgIHJldHVybiBhc09ic2VydmFibGUodGhpcy5fcGF0aWVudHMpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgcGF0aWVudHNCZWhhdmlvclN1YmplY3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aWVudHNcbiAgICB9XG4gICAgc2V0IHBhdGllbnRzKHBhdGllbnRzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fcGF0aWVudHMubmV4dChwYXRpZW50cyk7XG4gICAgfVxuXG5cbiAgICBsb2FkSW5pdGlhbERhdGEoKSB7XG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFBhdGllbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50cyA9ICg8UGF0aWVudFtdPnJlcy5qc29uKCkpLm1hcCgocGF0aWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1pZGRsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmJpcnRoZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5tb2JpbGVwaG9uZVxuICAgICAgICAgICAgICAgICAgICApKSAvLy5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLmZpcnN0bmFtZSA9PSBcIk1pb2RyYWdcIilcbiAgICAgICBcblxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQoTGlzdChwYXRpZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgUGF0aWVudHNcIilcbiAgICAgICAgICAgICk7XG5cbiAgICB9XG4gICAgZmlsdGVyRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFBhdGllbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50cyA9ICg8UGF0aWVudFtdPnJlcy5qc29uKCkpLm1hcCgocGF0aWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1pZGRsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmJpcnRoZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5tb2JpbGVwaG9uZVxuICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBbJ2ZpcnN0bmFtZScsICdtaWRkbGVuYW1lJywgJ2xhc3RuYW1lJywgJ2FkZHJlc3MnLCAncGxhY2UnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW3Byb3BdICE9IG51bGwgJiYgaXRlbVtwcm9wXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihkYXRhKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KExpc3QocGF0aWVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFBhdGllbnRzXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBhZGRQYXRpZW50KG5ld1BhdGllbnQ6IFBhdGllbnQpIHtcblxuICAgICAgICB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5zYXZlUGF0aWVudChuZXdQYXRpZW50KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdQYXRpZW50ID0gKDxQYXRpZW50PnJlcy5qc29uKCkpOyBcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHRoaXMuX3BhdGllbnRzLmdldFZhbHVlKCkucHVzaChuZXdQYXRpZW50KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3Igc2F2aW5nIFBhdGllbnRzXCIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdXBkYXRlUGF0aWVudCh1cGRhdGVkUGF0aWVudDogUGF0aWVudCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuICAgICAgICBsZXQgb2JzID0gdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UudXBkYXRlUGF0aWVudCh1cGRhdGVkUGF0aWVudCk7XG5cbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzOiBMaXN0PFBhdGllbnQ+ID0gdGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXRpZW50cy5maW5kSW5kZXgoKHBhdGllbnQpID0+IHBhdGllbnQuaWQgPT09IHVwZGF0ZWRQYXRpZW50LmlkKTtcbiAgICAgICAgICAgICAgICBwYXRpZW50c1tpbmRleF0gPSB1cGRhdGVkUGF0aWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnM7XG4gICAgfVxuXG5cbiAgICBkZWxldGVQYXRpZW50KGRlbGV0ZWQ6IFBhdGllbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5kZWxldGVQYXRpZW50KGRlbGV0ZWQpO1xuXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50czogTGlzdDxQYXRpZW50PiA9IHRoaXMuX3BhdGllbnRzLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGF0aWVudHMuZmluZEluZGV4KChwYXRpZW50KSA9PiBwYXRpZW50LmlkID09PSBkZWxldGVkLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzLmRlbGV0ZShpbmRleCkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
