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
    var PatientFormPage, PatientStore;
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
            (function (PatientFormPage) {
                PatientFormPage[PatientFormPage["Details"] = 0] = "Details";
                PatientFormPage[PatientFormPage["Photo"] = 1] = "Photo";
                PatientFormPage[PatientFormPage["Contact"] = 2] = "Contact";
            })(PatientFormPage || (PatientFormPage = {}));
            exports_1("PatientFormPage", PatientFormPage);
            let PatientStore = class PatientStore {
                // this method should be supported in RXJS 2
                //    public patients: Observable<List<Patient>> =  this._patients.asObservable();
                constructor(patientBackendService) {
                    this.patientBackendService = patientBackendService;
                    this._patients = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    this._patientFormPage = new Rx_1.BehaviorSubject(PatientFormPage.Details);
                    this._showCardView = new Rx_1.BehaviorSubject(true);
                    this._startIndex = new Rx_1.BehaviorSubject(0);
                    this._endIndex = new Rx_1.BehaviorSubject(3);
                    this._patientsSize = new Rx_1.BehaviorSubject(0);
                    this.loadInitialData();
                }
                get showCardView() {
                    return asObservable_1.asObservable(this._showCardView);
                }
                get patientFormPage() {
                    return asObservable_1.asObservable(this._patientFormPage);
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
                    this._showCardView.next(show);
                }
                setPatientFormPage(page) {
                    this._patientFormPage.next(page);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvUGF0aWVudFN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUEsV0FBWSxlQUFlO2dCQUFHLDJEQUFPLENBQUE7Z0JBQUUsdURBQUssQ0FBQTtnQkFBRSwyREFBTyxDQUFBO1lBQUEsQ0FBQyxFQUExQyxlQUFlLEtBQWYsZUFBZSxRQUEyQjswREFBQTtZQUV0RDtnQkFRSSw0Q0FBNEM7Z0JBQzVDLGtGQUFrRjtnQkFFbEYsWUFBb0IscUJBQTRDO29CQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO29CQVR4RCxjQUFTLEdBQW1DLElBQUksb0JBQWUsQ0FBQyxnQkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLHFCQUFnQixHQUF5QixJQUFJLG9CQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN0RixrQkFBYSxHQUE2QixJQUFJLG9CQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BFLGdCQUFXLEdBQTRCLElBQUksb0JBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDOUQsY0FBUyxHQUE0QixJQUFJLG9CQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELGtCQUFhLEdBQTRCLElBQUksb0JBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFLcEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELElBQUksWUFBWTtvQkFDWixNQUFNLENBQUUsMkJBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QsSUFBSSxlQUFlO29CQUNmLE1BQU0sQ0FBRSwyQkFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUNELHlDQUF5QztnQkFDekMsSUFBSSxVQUFVO29CQUNWLE1BQU0sQ0FBRSwyQkFBWSxDQUFDLElB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Q0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztZQUdMLENBQUM7WUEvSkQ7Z0JBQUMsaUJBQVUsRUFBRTs7NEJBQUE7WUFDYix1Q0E4SkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0YXRlL1BhdGllbnRTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtQYXRpZW50LCBQYXRpZW50QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9QYXRpZW50QmFja2VuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gUGF0aWVudEZvcm1QYWdlIHsgRGV0YWlscywgUGhvdG8sIENvbnRhY3R9XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBhdGllbnRTdG9yZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGF0aWVudHM6IEJlaGF2aW9yU3ViamVjdDxMaXN0PFBhdGllbnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG4gICAgcHJpdmF0ZSBfcGF0aWVudEZvcm1QYWdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoUGF0aWVudEZvcm1QYWdlLkRldGFpbHMpO1xyXG4gICAgcHJpdmF0ZSBfc2hvd0NhcmRWaWV3OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnRJbmRleDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xyXG4gICAgcHJpdmF0ZSBfZW5kSW5kZXg6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgzKTtcclxuICAgIHByaXZhdGUgX3BhdGllbnRzU2l6ZTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xyXG4gICAgLy8gdGhpcyBtZXRob2Qgc2hvdWxkIGJlIHN1cHBvcnRlZCBpbiBSWEpTIDJcclxuICAgIC8vICAgIHB1YmxpYyBwYXRpZW50czogT2JzZXJ2YWJsZTxMaXN0PFBhdGllbnQ+PiA9ICB0aGlzLl9wYXRpZW50cy5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGllbnRCYWNrZW5kU2VydmljZTogUGF0aWVudEJhY2tlbmRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHNob3dDYXJkVmlldygpIHtcclxuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9zaG93Q2FyZFZpZXcpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhdGllbnRGb3JtUGFnZSgpIHtcclxuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9wYXRpZW50Rm9ybVBhZ2UpO1xyXG4gICAgfVxyXG4gICAgLy9QYWdpbmF0aW9uIHByb3BlcnRpZXMgZ2V0dGVyIGFuZCBzZXR0ZXJcclxuICAgIGdldCBzdGFydEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAgYXNPYnNlcnZhYmxlKHRoaXMuX3N0YXJ0SW5kZXgpO1xyXG4gICAgfSAgICBcclxuICAgIGdldCBlbmRJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9lbmRJbmRleCk7XHJcbiAgICB9ICAgIFxyXG4gICAgc2V0SW5kZXhlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0SW5kZXgubmV4dChzdGFydCk7XHJcbiAgICAgICAgdGhpcy5fZW5kSW5kZXgubmV4dChlbmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGFuZ2VWaWV3KHNob3c6IGJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuX3Nob3dDYXJkVmlldy5uZXh0KHNob3cpO1xyXG4gICAgfVxyXG4gICAgc2V0UGF0aWVudEZvcm1QYWdlKHBhZ2U6IFBhdGllbnRGb3JtUGFnZSl7XHJcbiAgICAgICAgdGhpcy5fcGF0aWVudEZvcm1QYWdlLm5leHQocGFnZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcGF0aWVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFzT2JzZXJ2YWJsZSh0aGlzLl9wYXRpZW50cyk7XHJcbiAgICB9XHJcbiAgICBnZXQgcGF0aWVudHNTaXplKCl7XHJcbiAgICAgICAgcmV0dXJuIGFzT2JzZXJ2YWJsZSh0aGlzLl9wYXRpZW50c1NpemUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgcGF0aWVudHMocGF0aWVudHM6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkSW5pdGlhbERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UuZ2V0QWxsUGF0aWVudHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzID0gKDxQYXRpZW50W10+cmVzLmpzb24oKSkubWFwKChwYXRpZW50OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBhdGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1pZGRsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGxhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYmlydGhkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1vYmlsZXBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob3RvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFsbGVyZ2llcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5ub3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICkpIC8vLmZpbHRlcigocGVyc29uKSA9PiBwZXJzb24uZmlyc3RuYW1lID09IFwiTWlvZHJhZ1wiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aWVudHNTaXplLm5leHQocGF0aWVudHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQoTGlzdChwYXRpZW50cykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFBhdGllbnRzXCIpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgfVxyXG4gICAgZmlsdGVyRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2UuZ2V0QWxsUGF0aWVudHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhdGllbnRzID0gKDxQYXRpZW50W10+cmVzLmpzb24oKSkubWFwKChwYXRpZW50OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFBhdGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZmlyc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1pZGRsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQucGxhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnQuYmlydGhkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50Lm1vYmlsZXBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LnBob3RvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRpZW50LmFsbGVyZ2llcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5ub3Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBbJ2ZpcnN0bmFtZScsICdtaWRkbGVuYW1lJywgJ2xhc3RuYW1lJywgJ2FkZHJlc3MnLCAncGxhY2UnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3Agb2YgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW3Byb3BdICE9IG51bGwgJiYgaXRlbVtwcm9wXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihkYXRhKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQoTGlzdChwYXRpZW50cykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFBhdGllbnRzXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhZGRQYXRpZW50KG5ld1BhdGllbnQ6IFBhdGllbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wYXRpZW50QmFja2VuZFNlcnZpY2Uuc2F2ZVBhdGllbnQobmV3UGF0aWVudCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1BhdGllbnQgPSAoPFBhdGllbnQ+cmVzLmpzb24oKSk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aWVudHMubmV4dCh0aGlzLl9wYXRpZW50cy5nZXRWYWx1ZSgpLnB1c2gobmV3UGF0aWVudCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgUGF0aWVudHNcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhdGllbnQodXBkYXRlZFBhdGllbnQ6IFBhdGllbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcblxyXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnBhdGllbnRCYWNrZW5kU2VydmljZS51cGRhdGVQYXRpZW50KHVwZGF0ZWRQYXRpZW50KTtcclxuXHJcbiAgICAgICAgb2JzLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRpZW50czogTGlzdDxQYXRpZW50PiA9IHRoaXMuX3BhdGllbnRzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXRpZW50cy5maW5kSW5kZXgoKHBhdGllbnQpID0+IHBhdGllbnQuaWQgPT09IHVwZGF0ZWRQYXRpZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIHBhdGllbnRzW2luZGV4XSA9IHVwZGF0ZWRQYXRpZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aWVudHMubmV4dChwYXRpZW50cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZWxldGVQYXRpZW50KGRlbGV0ZWQ6IFBhdGllbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IG9icyA9IHRoaXMucGF0aWVudEJhY2tlbmRTZXJ2aWNlLmRlbGV0ZVBhdGllbnQoZGVsZXRlZCk7XHJcblxyXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGF0aWVudHM6IExpc3Q8UGF0aWVudD4gPSB0aGlzLl9wYXRpZW50cy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGF0aWVudHMuZmluZEluZGV4KChwYXRpZW50KSA9PiBwYXRpZW50LmlkID09PSBkZWxldGVkLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGllbnRzLm5leHQocGF0aWVudHMuZGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9icztcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
