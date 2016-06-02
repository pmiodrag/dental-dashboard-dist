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
                    var obs = this.patientBackendService.savePatient(newPatient);
                    newPatient.id = 0;
                    obs.subscribe(function (res) {
                        _this._patients.next(_this._patients.getValue().push(newPatient));
                    });
                    return obs;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0ksNENBQTRDO2dCQUM1QyxrRkFBa0Y7Z0JBRWxGLHNCQUFvQixxQkFBNEM7b0JBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7b0JBSnhELGNBQVMsR0FBbUMsSUFBSSxvQkFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFLOUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELHNCQUFJLGtDQUFRO3lCQUFaO3dCQUNJLE1BQU0sQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDeEMsQ0FBQzt5QkFDRCxVQUFhLFFBQWE7d0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxDQUFDOzs7bUJBSEE7Z0JBTUQsc0NBQWUsR0FBZjtvQkFBQSxpQkF5QkM7b0JBeEJHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLEVBQUU7eUJBQ3RDLFNBQVMsQ0FDVixVQUFBLEdBQUc7d0JBQ0MsSUFBSSxRQUFRLEdBQWUsR0FBRyxDQUFDLElBQUksRUFBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE9BQVk7NEJBQ3BELE9BQUEsSUFBSSwrQkFBTyxDQUNQLE9BQU8sQ0FBQyxFQUFFLEVBQ1YsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLFFBQVEsRUFDaEIsT0FBTyxDQUFDLFVBQVUsRUFDbEIsT0FBTyxDQUFDLE1BQU0sRUFDZCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxLQUFLLEVBQ2IsT0FBTyxDQUFDLFNBQVMsRUFDakIsT0FBTyxDQUFDLEtBQUssRUFDYixPQUFPLENBQUMsS0FBSyxFQUNiLE9BQU8sQ0FBQyxXQUFXLENBQ3RC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c3RhdGUvUGF0aWVudFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7UGF0aWVudCwgUGF0aWVudEJhY2tlbmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvUGF0aWVudEJhY2tlbmRTZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRpZW50U3RvcmUge1xuXG4gICAgcHJpdmF0ZSBfcGF0aWVudHM6IEJlaGF2aW9yU3ViamVjdDxMaXN0PFBhdGllbnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xuICAgIC8vIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBzdXBwb3J0ZWQgaW4gUlhKUyAyXG4gICAgLy8gICAgcHVibGljIHBhdGllbnRzOiBPYnNlcnZhYmxlPExpc3Q8UGF0aWVudD4+ID0gIHRoaXMuX3BhdGllbnRzLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50QmFja2VuZFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSkge1xuICAgICAgICB0aGlzLmxvYWRJbml0aWFsRGF0YSgpO1xuICAgIH1cblxuICAgIGdldCBwYXRpZW50cygpIHtcbiAgICAgICAgcmV0dXJuIGFzT2JzZXJ2YWJsZSh0aGlzLl9wYXRpZW50cyk7XG4gICAgfVxuICAgIHNldCBwYXRpZW50cyhwYXRpZW50czogYW55KSB7XG4gICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMpO1xuICAgIH1cblxuXG4gICAgbG9hZEluaXRpYWxEYXRhKCkge1xuICAgICAgICB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5nZXRBbGxQYXRpZW50cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aWVudHMgPSAoPFBhdGllbnRbXT5yZXMuanNvbigpKS5tYXAoKHBhdGllbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFBhdGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5maXJzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lmxhc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5taWRkbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBsYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5iaXJ0aGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubW9iaWxlcGhvbmVcbiAgICAgICAgICAgICAgICAgICAgKSkgLy8uZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5maXJzdG5hbWUgPT0gXCJNaW9kcmFnXCIpXG4gICAgICAgXG5cbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KExpc3QocGF0aWVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFBhdGllbnRzXCIpXG4gICAgICAgICAgICApO1xuXG4gICAgfVxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5nZXRBbGxQYXRpZW50cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aWVudHMgPSAoPFBhdGllbnRbXT5yZXMuanNvbigpKS5tYXAoKHBhdGllbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFBhdGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5maXJzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lmxhc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5taWRkbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBsYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5iaXJ0aGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubW9iaWxlcGhvbmVcbiAgICAgICAgICAgICAgICAgICAgKSkgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gWydmaXJzdG5hbWUnLCAnbWlkZGxlbmFtZScsICdsYXN0bmFtZScsICdhZGRyZXNzJywgJ3BsYWNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3Agb2YgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtwcm9wXSAhPSBudWxsICYmIGl0ZW1bcHJvcF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZGF0YSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aWVudHMubmV4dChMaXN0KHBhdGllbnRzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBQYXRpZW50c1wiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgYWRkUGF0aWVudChuZXdQYXRpZW50OiBQYXRpZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5zYXZlUGF0aWVudChuZXdQYXRpZW50KTtcbiAgICAgICAgbmV3UGF0aWVudC5pZCA9IDA7XG4gICAgICAgIG9icy5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQodGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKS5wdXNoKG5ld1BhdGllbnQpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnM7XG4gICAgfVxuXG4gICAgdXBkYXRlUGF0aWVudCh1cGRhdGVkUGF0aWVudDogUGF0aWVudCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuICAgICAgICBsZXQgb2JzID0gdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UudXBkYXRlUGF0aWVudCh1cGRhdGVkUGF0aWVudCk7XG5cbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzOiBMaXN0PFBhdGllbnQ+ID0gdGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXRpZW50cy5maW5kSW5kZXgoKHBhdGllbnQpID0+IHBhdGllbnQuaWQgPT09IHVwZGF0ZWRQYXRpZW50LmlkKTtcbiAgICAgICAgICAgICAgICBwYXRpZW50c1tpbmRleF0gPSB1cGRhdGVkUGF0aWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnM7XG4gICAgfVxuXG5cbiAgICBkZWxldGVQYXRpZW50KGRlbGV0ZWQ6IFBhdGllbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5kZWxldGVQYXRpZW50KGRlbGV0ZWQpO1xuXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50czogTGlzdDxQYXRpZW50PiA9IHRoaXMuX3BhdGllbnRzLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGF0aWVudHMuZmluZEluZGV4KChwYXRpZW50KSA9PiBwYXRpZW50LmlkID09PSBkZWxldGVkLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzLmRlbGV0ZShpbmRleCkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
