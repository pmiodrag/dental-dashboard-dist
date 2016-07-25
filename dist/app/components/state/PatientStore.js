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
                        let patients = res.json().map((patient) => new PatientBackendService_1.Patient(patient.id, patient.firstname, patient.lastname, patient.middlename, patient.gender, patient.address, patient.place, patient.birthdate, patient.email, patient.phone, patient.mobilephone, patient.photo, patient.allergies, patient.notes)); //.filter((person) => person.firstname == "Miodrag")
                        this._patientsSize.next(patients.length);
                        this._patients.next(immutable_1.List(patients));
                    }, err => console.log("Error retrieving Patients"));
                }
                filterData(data) {
                    this.patientBackendService.getAllPatients()
                        .subscribe(res => {
                        let patients = res.json().map((patient) => new PatientBackendService_1.Patient(patient.id, patient.firstname, patient.lastname, patient.middlename, patient.gender, patient.address, patient.place, patient.birthdate, patient.email, patient.phone, patient.mobilephone, patient.photo, patient.allergies, patient.notes))
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0ksNENBQTRDO2dCQUM1QyxrRkFBa0Y7Z0JBRWxGLFlBQW9CLHFCQUE0QztvQkFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtvQkFSeEQsY0FBUyxHQUFtQyxJQUFJLG9CQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxrQkFBYSxHQUE2QixJQUFJLG9CQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BFLGdCQUFXLEdBQTRCLElBQUksb0JBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUQsY0FBUyxHQUE0QixJQUFJLG9CQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELGtCQUFhLEdBQTRCLElBQUksb0JBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFLcEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELElBQUksWUFBWTtvQkFDWixNQUFNLENBQUUsMkJBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QseUNBQXlDO2dCQUN6QyxJQUFJLFVBQVU7b0JBQ1YsTUFBTSxDQUFFLDJCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELElBQUksUUFBUTtvQkFDUixNQUFNLENBQUUsMkJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQWEsRUFBRSxHQUFXO29CQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JB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LENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEVBQUUsS0FBSyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzlFLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsQ0FBQztvQkFFUCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBR0QsYUFBYSxDQUFDLE9BQWdCO29CQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUU1RCxHQUFHLENBQUMsU0FBUyxDQUNULEdBQUc7d0JBQ0MsSUFBSSxRQUFRLEdBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3hELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFFaEQsQ0FBQyxDQUNKLENBQUM7b0JBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO1lBR0wsQ0FBQztZQXpKRDtnQkFBQyxpQkFBVSxFQUFFOzs0QkFBQTtZQUNiLHVDQXdKQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge1BhdGllbnQsIFBhdGllbnRCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1BhdGllbnRCYWNrZW5kU2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhdGllbnRTdG9yZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGF0aWVudHM6IEJlaGF2aW9yU3ViamVjdDxMaXN0PFBhdGllbnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gICAgcHJpdmF0ZSBfc2hvd0NhcmRWaWV3OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRJbmRleDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xyXG4gICAgcHJpdmF0ZSBfZW5kSW5kZXg6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgzKTtcclxuICAgIHByaXZhdGUgX3BhdGllbnRzU2l6ZTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xyXG4gICAgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIGJlIHN1cHBvcnRlZCBpbiBSWEpTIDJcclxuICAgIC8vICAgIHB1YmxpYyBwYXRpZW50czogT2JzZXJ2YWJsZTxMaXN0PFBhdGllbnQ+PiA9ICB0aGlzLl9wYXRpZW50cy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnRCYWNrZW5kU2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHNob3dDYXJkVmlldygpIHtcclxuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9zaG93Q2FyZFZpZXcpO1xyXG4gICAgfVxyXG4gICAgLy9QYWdpbmF0aW9uIHByb3BlcnRpZXMgZ2V0dGVyIGFuZCBzZXR0ZXJcclxuICAgIGdldCBzdGFydEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAgYXNPYnNlcnZhYmxlKHRoaXMuX3N0YXJ0SW5kZXgpO1xyXG4gICAgfSAgICBcclxuICAgIGdldCBlbmRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9lbmRJbmRleCk7XHJcbiAgICB9ICAgIFxyXG4gICAgc2V0SW5kZXhlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0SW5kZXgubmV4dChzdGFydCk7XHJcbiAgICAgICAgdGhpcy5fZW5kSW5kZXgubmV4dChlbmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGFuZ2VWaWV3KHNob3c6IGJvb2xlYW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlVmlldyBfc2hvd0NhcmRWaWV3XCIsIHNob3cpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dDYXJkVmlldy5uZXh0KHNob3cpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhdGllbnRzKCkge1xyXG4gICAgICAgIHJldHVybiBhc09ic2VydmFibGUodGhpcy5fcGF0aWVudHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhdGllbnRzU2l6ZSgpe1xyXG4gICAgICAgIHJldHVybiBhc09ic2VydmFibGUodGhpcy5fcGF0aWVudHNTaXplKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHBhdGllbnRzKHBhdGllbnRzOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9hZEluaXRpYWxEYXRhKCkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFBhdGllbnRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50cyA9ICg8UGF0aWVudFtdPnJlcy5qc29uKCkpLm1hcCgocGF0aWVudDogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQYXRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5taWRkbGVuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmdlbmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBsYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmJpcnRoZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5tb2JpbGVwaG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5waG90byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hbGxlcmdpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubm90ZXNcclxuICAgICAgICAgICAgICAgICAgICApKSAvLy5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLmZpcnN0bmFtZSA9PSBcIk1pb2RyYWdcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzU2l6ZS5uZXh0KHBhdGllbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KExpc3QocGF0aWVudHMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBQYXRpZW50c1wiKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFBhdGllbnRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50cyA9ICg8UGF0aWVudFtdPnJlcy5qc29uKCkpLm1hcCgocGF0aWVudDogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBQYXRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5taWRkbGVuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmdlbmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBsYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmJpcnRoZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5tb2JpbGVwaG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5waG90byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5hbGxlcmdpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQubm90ZXNcclxuICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gWydmaXJzdG5hbWUnLCAnbWlkZGxlbmFtZScsICdsYXN0bmFtZScsICdhZGRyZXNzJywgJ3BsYWNlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtwcm9wXSAhPSBudWxsICYmIGl0ZW1bcHJvcF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZGF0YSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KExpc3QocGF0aWVudHMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBQYXRpZW50c1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgYWRkUGF0aWVudChuZXdQYXRpZW50OiBQYXRpZW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLnNhdmVQYXRpZW50KG5ld1BhdGllbnQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdQYXRpZW50ID0gKDxQYXRpZW50PnJlcy5qc29uKCkpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQodGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKS5wdXNoKG5ld1BhdGllbnQpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3Igc2F2aW5nIFBhdGllbnRzXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXRpZW50KHVwZGF0ZWRQYXRpZW50OiBQYXRpZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgICAgICBsZXQgb2JzID0gdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UudXBkYXRlUGF0aWVudCh1cGRhdGVkUGF0aWVudCk7XHJcblxyXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGF0aWVudHM6IExpc3Q8UGF0aWVudD4gPSB0aGlzLl9wYXRpZW50cy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGF0aWVudHMuZmluZEluZGV4KChwYXRpZW50KSA9PiBwYXRpZW50LmlkID09PSB1cGRhdGVkUGF0aWVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICBwYXRpZW50c1tpbmRleF0gPSB1cGRhdGVkUGF0aWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9icztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVsZXRlUGF0aWVudChkZWxldGVkOiBQYXRpZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS5kZWxldGVQYXRpZW50KGRlbGV0ZWQpO1xyXG5cclxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzOiBMaXN0PFBhdGllbnQ+ID0gdGhpcy5fcGF0aWVudHMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBhdGllbnRzLmZpbmRJbmRleCgocGF0aWVudCkgPT4gcGF0aWVudC5pZCA9PT0gZGVsZXRlZC5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzLmRlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYnM7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
