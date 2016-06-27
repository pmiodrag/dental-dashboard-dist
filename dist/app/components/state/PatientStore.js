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
            let PatientStore = class PatientStore {
                // this method should be supported in RXJS 2
                //    public patients: Observable<List<Patient>> =  this._patients.asObservable();
                constructor(patientBackendService) {
                    this.patientBackendService = patientBackendService;
                    this._patients = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    this._showCardView = new Rx_1.BehaviorSubject(true);
                    this._startIndex = new Rx_1.BehaviorSubject(0);
                    this._endIndex = new Rx_1.BehaviorSubject(3);
                    this._patientsSize = new Rx_1.BehaviorSubject(0);
                    this.loadInitialData();
                }
                get showCardView() {
                    return asObservable_1.asObservable(this._showCardView);
                }
                //Pagination properties getter and setter
                get startIndex() {
                    return asObservable_1.asObservable(this._startIndex);
                }
                get endIndex() {
                    return asObservable_1.asObservable(this._endIndex);
                }
                setIndexes(start, end) {
                    this._startIndex.next(start);
                    this._endIndex.next(end);
                }
                changeView(show) {
                    console.log("changeView _showCardView", show);
                    this._showCardView.next(show);
                }
                get patients() {
                    return asObservable_1.asObservable(this._patients);
                }
                get patientsSize() {
                    return asObservable_1.asObservable(this._patientsSize);
                }
                set patients(patients) {
                    this._patients.next(patients);
                }
                loadInitialData() {
                    this.patientBackendService.getAllPatients()
                        .subscribe(res => {
                        let patients = res.json().map((patient) => new PatientBackendService_1.Patient(patient.id, patient.firstname, patient.lastname, patient.middlename, patient.gender, patient.address, patient.place, patient.birthdate, patient.email, patient.phone, patient.mobilephone, patient.photo)); //.filter((person) => person.firstname == "Miodrag")
                        this._patientsSize.next(patients.length);
                        this._patients.next(immutable_1.List(patients));
                    }, err => console.log("Error retrieving Patients"));
                }
                filterData(data) {
                    this.patientBackendService.getAllPatients()
                        .subscribe(res => {
                        let patients = res.json().map((patient) => new PatientBackendService_1.Patient(patient.id, patient.firstname, patient.lastname, patient.middlename, patient.gender, patient.address, patient.place, patient.birthdate, patient.email, patient.phone, patient.mobilephone, patient.photo))
                            .filter(item => {
                            let props = ['firstname', 'middlename', 'lastname', 'address', 'place'];
                            let match = false;
                            for (let prop of props) {
                                if (item[prop] != null && item[prop].toString().toUpperCase().indexOf(data) > -1) {
                                    match = true;
                                    break;
                                }
                            }
                            ;
                            return match;
                        });
                        this._patients.next(immutable_1.List(patients));
                    }, err => console.log("Error retrieving Patients"));
                }
                addPatient(newPatient) {
                    this.patientBackendService.savePatient(newPatient).subscribe(res => {
                        let newPatient = res.json();
                        this._patients.next(this._patients.getValue().push(newPatient));
                    }, err => console.log("Error saving Patients"));
                }
                updatePatient(updatedPatient) {
                    let obs = this.patientBackendService.updatePatient(updatedPatient);
                    obs.subscribe(res => {
                        let patients = this._patients.getValue();
                        let index = patients.findIndex((patient) => patient.id === updatedPatient.id);
                        patients[index] = updatedPatient;
                        this._patients.next(patients);
                    });
                    return obs;
                }
                deletePatient(deleted) {
                    let obs = this.patientBackendService.deletePatient(deleted);
                    obs.subscribe(res => {
                        let patients = this._patients.getValue();
                        let index = patients.findIndex((patient) => patient.id === deleted.id);
                        this._patients.next(patients.delete(index));
                    });
                    return obs;
                }
            };
            PatientStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [PatientBackendService_1.PatientBackendService])
            ], PatientStore);
            exports_1("PatientStore", PatientStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0ksNENBQTRDO2dCQUM1QyxrRkFBa0Y7Z0JBRWxGLFlBQW9CLHFCQUE0QztvQkFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtvQkFSeEQsY0FBUyxHQUFtQyxJQUFJLG9CQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxrQkFBYSxHQUE2QixJQUFJLG9CQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BFLGdCQUFXLEdBQTRCLElBQUksb0JBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUQsY0FBUyxHQUE0QixJQUFJLG9CQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELGtCQUFhLEdBQTRCLElBQUksb0JBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFLcEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELElBQUksWUFBWTtvQkFDWixNQUFNLENBQUUsMkJBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QseUNBQXlDO2dCQUN6QyxJQUFJLFVBQVU7b0JBQ1YsTUFBTSxDQUFFLDJCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELElBQUksUUFBUTtvQkFDUixNQUFNLENBQUUsMkJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQWEsRUFBRSxHQUFXO29CQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JB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LEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxDQUFDO29CQUVQLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztnQkFHRCxhQUFhLENBQUMsT0FBZ0I7b0JBQzFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRTVELEdBQUcsQ0FBQyxTQUFTLENBQ1QsR0FBRzt3QkFDQyxJQUFJLFFBQVEsR0FBa0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDeEQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUVoRCxDQUFDLENBQ0osQ0FBQztvQkFFRixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7WUFHTCxDQUFDO1lBckpEO2dCQUFDLGlCQUFVLEVBQUU7OzRCQUFBO1lBQ2IsdUNBb0pDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0ZS9QYXRpZW50U3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2VcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4vYXNPYnNlcnZhYmxlXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhdGllbnRTdG9yZSB7XG5cbiAgICBwcml2YXRlIF9wYXRpZW50czogQmVoYXZpb3JTdWJqZWN0PExpc3Q8UGF0aWVudD4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XG4gICAgcHJpdmF0ZSBfc2hvd0NhcmRWaWV3OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuICAgIHByaXZhdGUgX3N0YXJ0SW5kZXg6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgwKTtcbiAgICBwcml2YXRlIF9lbmRJbmRleDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDMpO1xuICAgIHByaXZhdGUgX3BhdGllbnRzU2l6ZTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICAgIC8vIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBzdXBwb3J0ZWQgaW4gUlhKUyAyXG4gICAgLy8gICAgcHVibGljIHBhdGllbnRzOiBPYnNlcnZhYmxlPExpc3Q8UGF0aWVudD4+ID0gIHRoaXMuX3BhdGllbnRzLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXRpZW50QmFja2VuZFNlcnZpY2U6IFBhdGllbnRCYWNrZW5kU2VydmljZSkge1xuICAgICAgICB0aGlzLmxvYWRJbml0aWFsRGF0YSgpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgc2hvd0NhcmRWaWV3KCkge1xuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9zaG93Q2FyZFZpZXcpO1xuICAgIH1cbiAgICAvL1BhZ2luYXRpb24gcHJvcGVydGllcyBnZXR0ZXIgYW5kIHNldHRlclxuICAgIGdldCBzdGFydEluZGV4KCkge1xuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9zdGFydEluZGV4KTtcbiAgICB9ICAgIFxuICAgIGdldCBlbmRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuICBhc09ic2VydmFibGUodGhpcy5fZW5kSW5kZXgpO1xuICAgIH0gICAgXG4gICAgc2V0SW5kZXhlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdGFydEluZGV4Lm5leHQoc3RhcnQpO1xuICAgICAgICB0aGlzLl9lbmRJbmRleC5uZXh0KGVuZCk7XG4gICAgfVxuICAgIFxuICAgIGNoYW5nZVZpZXcoc2hvdzogYm9vbGVhbil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlVmlldyBfc2hvd0NhcmRWaWV3XCIsIHNob3cpO1xuICAgICAgICB0aGlzLl9zaG93Q2FyZFZpZXcubmV4dChzaG93KTtcbiAgICB9XG4gICAgZ2V0IHBhdGllbnRzKCkge1xuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX3BhdGllbnRzKTtcbiAgICB9XG4gICAgZ2V0IHBhdGllbnRzU2l6ZSgpe1xuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX3BhdGllbnRzU2l6ZSk7XG4gICAgfVxuICAgIFxuICAgIHNldCBwYXRpZW50cyhwYXRpZW50czogYW55KSB7XG4gICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMpO1xuICAgIH1cbiAgICBcbiAgICBsb2FkSW5pdGlhbERhdGEoKSB7XG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFBhdGllbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50cyA9ICg8UGF0aWVudFtdPnJlcy5qc29uKCkpLm1hcCgocGF0aWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgUGF0aWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1pZGRsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGxhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmJpcnRoZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5tb2JpbGVwaG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGhvdG9cbiAgICAgICAgICAgICAgICAgICAgKSkgLy8uZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5maXJzdG5hbWUgPT0gXCJNaW9kcmFnXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aWVudHNTaXplLm5leHQocGF0aWVudHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KExpc3QocGF0aWVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFBhdGllbnRzXCIpXG4gICAgICAgICAgICApO1xuXG4gICAgfVxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5nZXRBbGxQYXRpZW50cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aWVudHMgPSAoPFBhdGllbnRbXT5yZXMuanNvbigpKS5tYXAoKHBhdGllbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFBhdGllbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5maXJzdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lmxhc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5taWRkbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5nZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBsYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5iaXJ0aGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5waG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubW9iaWxlcGhvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob3RvXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IFsnZmlyc3RuYW1lJywgJ21pZGRsZW5hbWUnLCAnbGFzdG5hbWUnLCAnYWRkcmVzcycsICdwbGFjZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0gIT0gbnVsbCAmJiBpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQoTGlzdChwYXRpZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgUGF0aWVudHNcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGFkZFBhdGllbnQobmV3UGF0aWVudDogUGF0aWVudCkge1xuXG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLnNhdmVQYXRpZW50KG5ld1BhdGllbnQpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSAoPFBhdGllbnQ+cmVzLmpzb24oKSk7IFxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQodGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKS5wdXNoKG5ld1BhdGllbnQpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgUGF0aWVudHNcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQYXRpZW50KHVwZGF0ZWRQYXRpZW50OiBQYXRpZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS51cGRhdGVQYXRpZW50KHVwZGF0ZWRQYXRpZW50KTtcblxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGF0aWVudHM6IExpc3Q8UGF0aWVudD4gPSB0aGlzLl9wYXRpZW50cy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBhdGllbnRzLmZpbmRJbmRleCgocGF0aWVudCkgPT4gcGF0aWVudC5pZCA9PT0gdXBkYXRlZFBhdGllbnQuaWQpO1xuICAgICAgICAgICAgICAgIHBhdGllbnRzW2luZGV4XSA9IHVwZGF0ZWRQYXRpZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxuICAgIGRlbGV0ZVBhdGllbnQoZGVsZXRlZDogUGF0aWVudCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IG9icyA9IHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmRlbGV0ZVBhdGllbnQoZGVsZXRlZCk7XG5cbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzOiBMaXN0PFBhdGllbnQ+ID0gdGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXRpZW50cy5maW5kSW5kZXgoKHBhdGllbnQpID0+IHBhdGllbnQuaWQgPT09IGRlbGV0ZWQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMuZGVsZXRlKGluZGV4KSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gb2JzO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
