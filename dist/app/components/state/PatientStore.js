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
                    this.loadInitialData();
                }
                Object.defineProperty(PatientStore.prototype, "showCardView", {
                    get: function () {
                        return asObservable_1.asObservable(this._showCardView);
                    },
                    enumerable: true,
                    configurable: true
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBSUksNENBQTRDO2dCQUM1QyxrRkFBa0Y7Z0JBRWxGLHNCQUFvQixxQkFBNEM7b0JBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7b0JBTHhELGNBQVMsR0FBbUMsSUFBSSxvQkFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDMUUsa0JBQWEsR0FBNkIsSUFBSSxvQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUt4RSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsc0JBQUksc0NBQVk7eUJBQWhCO3dCQUNJLE1BQU0sQ0FBRSwyQkFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDN0MsQ0FBQzs7O21CQUFBO2dCQUVELGlDQUFVLEdBQVYsVUFBVyxJQUFhO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxzQkFBSSxrQ0FBUTt5QkFBWjt3QkFDSSxNQUFNLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3hDLENBQUM7eUJBQ0QsVUFBYSxRQUFhO3dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbEMsQ0FBQzs7O21CQUhBO2dCQU1ELHNDQUFlLEdBQWY7b0JBQUEsaUJBeUJDO29CQXhCRyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFO3lCQUN0QyxTQUFTLENBQ1YsVUFBQSxHQUFHO3dCQUNDLElBQUksUUFBUSxHQUFlLEdBQUcs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QUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUM7d0JBQ3ZFLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFFaEQsQ0FBQyxDQUNKLENBQUM7b0JBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO2dCQWhJTDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFtSWIsbUJBQUM7WUFBRCxDQWxJQSxBQWtJQyxJQUFBO1lBbElELHVDQWtJQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7UGF0aWVudCwgUGF0aWVudEJhY2tlbmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRpZW50U3RvcmUge1xuXG4gICAgcHJpdmF0ZSBfcGF0aWVudHM6IEJlaGF2aW9yU3ViamVjdDxMaXN0PFBhdGllbnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xuICAgIHByaXZhdGUgX3Nob3dDYXJkVmlldzogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcbiAgICAvLyB0aGlzIG1ldGhvZCBzaG91bGQgYmUgc3VwcG9ydGVkIGluIFJYSlMgMlxuICAgIC8vICAgIHB1YmxpYyBwYXRpZW50czogT2JzZXJ2YWJsZTxMaXN0PFBhdGllbnQ+PiA9ICB0aGlzLl9wYXRpZW50cy5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudEJhY2tlbmRTZXJ2aWNlOiBQYXRpZW50QmFja2VuZFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sb2FkSW5pdGlhbERhdGEoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHNob3dDYXJkVmlldygpIHtcbiAgICAgICAgcmV0dXJuICBhc09ic2VydmFibGUodGhpcy5fc2hvd0NhcmRWaWV3KTtcbiAgICB9XG4gICAgXG4gICAgY2hhbmdlVmlldyhzaG93OiBib29sZWFuKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VWaWV3IF9zaG93Q2FyZFZpZXdcIiwgc2hvdyk7XG4gICAgICAgIHRoaXMuX3Nob3dDYXJkVmlldy5uZXh0KHNob3cpO1xuICAgIH1cbiAgICBnZXQgcGF0aWVudHMoKSB7XG4gICAgICAgIHJldHVybiBhc09ic2VydmFibGUodGhpcy5fcGF0aWVudHMpO1xuICAgIH1cbiAgICBzZXQgcGF0aWVudHMocGF0aWVudHM6IGFueSkge1xuICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzKTtcbiAgICB9XG5cblxuICAgIGxvYWRJbml0aWFsRGF0YSgpIHtcbiAgICAgICAgdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UuZ2V0QWxsUGF0aWVudHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzID0gKDxQYXRpZW50W10+cmVzLmpzb24oKSkubWFwKChwYXRpZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgIG5ldyBQYXRpZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5sYXN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubWlkZGxlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZ2VuZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5wbGFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYmlydGhkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1vYmlsZXBob25lXG4gICAgICAgICAgICAgICAgICAgICkpIC8vLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24uZmlyc3RuYW1lID09IFwiTWlvZHJhZ1wiKVxuICAgICAgIFxuXG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aWVudHMubmV4dChMaXN0KHBhdGllbnRzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBQYXRpZW50c1wiKVxuICAgICAgICAgICAgKTtcblxuICAgIH1cbiAgICBmaWx0ZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UuZ2V0QWxsUGF0aWVudHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzID0gKDxQYXRpZW50W10+cmVzLmpzb24oKSkubWFwKChwYXRpZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgIG5ldyBQYXRpZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5sYXN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubWlkZGxlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZ2VuZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5wbGFjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYmlydGhkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1vYmlsZXBob25lXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IFsnZmlyc3RuYW1lJywgJ21pZGRsZW5hbWUnLCAnbGFzdG5hbWUnLCAnYWRkcmVzcycsICdwbGFjZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0gIT0gbnVsbCAmJiBpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQoTGlzdChwYXRpZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgUGF0aWVudHNcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGFkZFBhdGllbnQobmV3UGF0aWVudDogUGF0aWVudCkge1xuXG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLnNhdmVQYXRpZW50KG5ld1BhdGllbnQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSAoPFBhdGllbnQ+cmVzLmpzb24oKSk7IFxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQodGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKS5wdXNoKG5ld1BhdGllbnQpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgUGF0aWVudHNcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQYXRpZW50KHVwZGF0ZWRQYXRpZW50OiBQYXRpZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS51cGRhdGVQYXRpZW50KHVwZGF0ZWRQYXRpZW50KTtcblxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aWVudHM6IExpc3Q8UGF0aWVudD4gPSB0aGlzLl9wYXRpZW50cy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBhdGllbnRzLmZpbmRJbmRleCgocGF0aWVudCkgPT4gcGF0aWVudC5pZCA9PT0gdXBkYXRlZFBhdGllbnQuaWQpO1xuICAgICAgICAgICAgICAgIHBhdGllbnRzW2luZGV4XSA9IHVwZGF0ZWRQYXRpZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxuICAgIGRlbGV0ZVBhdGllbnQoZGVsZXRlZDogUGF0aWVudCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IG9icyA9IHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmRlbGV0ZVBhdGllbnQoZGVsZXRlZCk7XG5cbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzOiBMaXN0PFBhdGllbnQ+ID0gdGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXRpZW50cy5maW5kSW5kZXgoKHBhdGllbnQpID0+IHBhdGllbnQuaWQgPT09IGRlbGV0ZWQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMuZGVsZXRlKGluZGV4KSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gb2JzO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
