System.register(["@angular/core", "../../services/TreatmentBackendService", 'immutable', "./asObservable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, TreatmentBackendService_1, immutable_1, asObservable_1, Rx_1;
    var TreatmentStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TreatmentBackendService_1_1) {
                TreatmentBackendService_1 = TreatmentBackendService_1_1;
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
            let TreatmentStore = class TreatmentStore {
                constructor(treatmentBackendService) {
                    this.treatmentBackendService = treatmentBackendService;
                    this._treatments = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    // this.loadInitialData();
                }
                get treatments() {
                    return asObservable_1.asObservable(this._treatments);
                }
                loadInitialData(patientId) {
                    this.treatmentBackendService.getAllTreatments()
                        .subscribe(res => {
                        let treatments = res.json().map((treatment) => new TreatmentBackendService_1.Treatment(treatment.id, treatment.patientid, treatment.doctorid, treatment.treatmentdate, treatment.therapy, treatment.diagnose, treatment.price)).filter(treatment => treatment.patientid == patientId);
                        this._treatments.next(immutable_1.List(treatments));
                    }, err => console.log("Error retrieving Treatments"));
                }
                loadTreatmentsByDoctorId(doctorId) {
                    this.treatmentBackendService.getAllTreatments()
                        .subscribe(res => {
                        let treatments = res.json().map((treatment) => new TreatmentBackendService_1.Treatment(treatment.id, treatment.patientid, treatment.doctorid, treatment.treatmentdate, treatment.therapy, treatment.diagnose, treatment.price)).filter(treatment => treatment.doctorid == doctorId);
                        this._treatments.next(immutable_1.List(treatments));
                    }, err => console.log("Error retrieving Treatments"));
                }
                filterData(data) {
                    this.treatmentBackendService.getAllTreatments()
                        .subscribe(res => {
                        let treatments = res.json().map((treatment) => new TreatmentBackendService_1.Treatment(treatment.id, treatment.patientid, treatment.doctorid, treatment.treatmentdate, treatment.therapy, treatment.diagnose, treatment.price))
                            .filter(item => {
                            let props = ['treatmentdate', 'therapy', 'diagnose', 'price'];
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
                        this._treatments.next(immutable_1.List(treatments));
                    }, err => console.log("Error retrieving Treatments"));
                }
                addTreatment(newTreatment) {
                    this.treatmentBackendService.saveTreatment(newTreatment)
                        .subscribe(res => {
                        let newTreatment = res.json();
                        this._treatments.next(this._treatments.getValue().push(newTreatment));
                    }, err => console.log("Error saving Treatment"));
                }
                updateTreatment(updatedTreatment) {
                    let obs = this.treatmentBackendService.updateTreatment(updatedTreatment);
                    obs.subscribe(res => {
                        let treatments = this._treatments.getValue();
                        let index = treatments.findIndex((treatment) => treatment.id === updatedTreatment.id);
                        treatments[index] = updatedTreatment;
                        this._treatments.next(treatments);
                    });
                    return obs;
                }
                deleteTreatment(deleted) {
                    let obs = this.treatmentBackendService.deleteTreatment(deleted);
                    obs.subscribe(res => {
                        let treatments = this._treatments.getValue();
                        let index = treatments.findIndex((treatment) => treatment.id === deleted.id);
                        this._treatments.next(treatments.delete(index));
                    });
                    return obs;
                }
            };
            TreatmentStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [TreatmentBackendService_1.TreatmentBackendService])
            ], TreatmentStore);
            exports_1("TreatmentStore", TreatmentStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvVHJlYXRtZW50U3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSxZQUFvQix1QkFBZ0Q7b0JBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7b0JBRjVELGdCQUFXLEdBQXFDLElBQUksb0JBQWUsQ0FBQyxnQkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBR25GLDBCQUEwQjtnQkFDN0IsQ0FBQztnQkFFRCxJQUFJLFVBQVU7b0JBQ1YsTUFBTSxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELGVBQWUsQ0FBQyxTQUFTO29CQUNyQixJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLEVBQUU7eUJBQzFDLFNBQVMsQ0FDVixHQUFHO3dCQUNDLElBQUksVUFBVSxHQUFpQixHQUFHLENBQUMsSUFBSSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBYyxLQUMxRCxJQUFJLG1DQUFTLENBQ1QsU0FBUyxDQUFDLEVBQUUsRUFDWixTQUFTLENBQUMsU0FBUyxFQUNuQixTQUFTLENBQUMsUUFBUSxFQUNsQixTQUFTLENBQUMsYUFBYSxFQUN2QixTQUFTLENBQUMsT0FBTyxFQUNqQixTQUFTLENBQUMsUUFBUSxFQUNsQixTQUFTLENBQUMsS0FBSyxDQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFBO3dCQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLENBQUMsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUNoRCxDQUFDO2dCQUVWLENBQUM7Z0JBRUQsd0JBQXdCLENBQUMsUUFB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Y29tcG9uZW50cy9zdGF0ZS9UcmVhdG1lbnRTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtUcmVhdG1lbnQsIFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvVHJlYXRtZW50QmFja2VuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnRTdG9yZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdHJlYXRtZW50czogQmVoYXZpb3JTdWJqZWN0PExpc3Q8VHJlYXRtZW50Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlOiBUcmVhdG1lbnRCYWNrZW5kU2VydmljZSkge1xyXG4gICAgICAgLy8gdGhpcy5sb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHJlYXRtZW50cygpIHtcclxuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX3RyZWF0bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbml0aWFsRGF0YShwYXRpZW50SWQpIHtcclxuICAgICAgICB0aGlzLnRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFRyZWF0bWVudHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudHMgPSAoPFRyZWF0bWVudFtdPnJlcy5qc29uKCkpLm1hcCgodHJlYXRtZW50OiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRyZWF0bWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQucGF0aWVudGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQuZG9jdG9yaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQudGhlcmFweSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmRpYWdub3NlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQucHJpY2VcclxuICAgICAgICAgICAgICAgICAgICApKS5maWx0ZXIodHJlYXRtZW50ID0+IHRyZWF0bWVudC5wYXRpZW50aWQgPT0gcGF0aWVudElkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlYXRtZW50cy5uZXh0KExpc3QodHJlYXRtZW50cykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFRyZWF0bWVudHNcIilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRUcmVhdG1lbnRzQnlEb2N0b3JJZChkb2N0b3JJZCkge1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50QmFja2VuZFNlcnZpY2UuZ2V0QWxsVHJlYXRtZW50cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50cyA9ICg8VHJlYXRtZW50W10+cmVzLmpzb24oKSkubWFwKCh0cmVhdG1lbnQ6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJlYXRtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5wYXRpZW50aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5kb2N0b3JpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnRyZWF0bWVudGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC50aGVyYXB5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQuZGlhZ25vc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5wcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICkpLmZpbHRlcih0cmVhdG1lbnQgPT4gdHJlYXRtZW50LmRvY3RvcmlkID09IGRvY3RvcklkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlYXRtZW50cy5uZXh0KExpc3QodHJlYXRtZW50cykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFRyZWF0bWVudHNcIilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudHJlYXRtZW50QmFja2VuZFNlcnZpY2UuZ2V0QWxsVHJlYXRtZW50cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCB0cmVhdG1lbnRzID0gKDxUcmVhdG1lbnRbXT5yZXMuanNvbigpKS5tYXAoKHRyZWF0bWVudDogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUcmVhdG1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnBhdGllbnRpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmRvY3RvcmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQudHJlYXRtZW50ZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnRoZXJhcHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5kaWFnbm9zZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgKSkgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBbJ3RyZWF0bWVudGRhdGUnLCAndGhlcmFweScsICdkaWFnbm9zZScsICdwcmljZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0gIT0gbnVsbCAmJiBpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlYXRtZW50cy5uZXh0KExpc3QodHJlYXRtZW50cykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFRyZWF0bWVudHNcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFkZFRyZWF0bWVudChuZXdUcmVhdG1lbnQ6IFRyZWF0bWVudCkge1xyXG5cclxuICAgICAgICB0aGlzLnRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLnNhdmVUcmVhdG1lbnQobmV3VHJlYXRtZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VHJlYXRtZW50ID0gKDxUcmVhdG1lbnQ+cmVzLmpzb24oKSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dCh0aGlzLl90cmVhdG1lbnRzLmdldFZhbHVlKCkucHVzaChuZXdUcmVhdG1lbnQpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgVHJlYXRtZW50XCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUcmVhdG1lbnQodXBkYXRlZFRyZWF0bWVudDogVHJlYXRtZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgICAgICBsZXQgb2JzID0gdGhpcy50cmVhdG1lbnRCYWNrZW5kU2VydmljZS51cGRhdGVUcmVhdG1lbnQodXBkYXRlZFRyZWF0bWVudCk7XHJcblxyXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50czogTGlzdDxUcmVhdG1lbnQ+ID0gdGhpcy5fdHJlYXRtZW50cy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdHJlYXRtZW50cy5maW5kSW5kZXgoKHRyZWF0bWVudCkgPT4gdHJlYXRtZW50LmlkID09PSB1cGRhdGVkVHJlYXRtZW50LmlkKTtcclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudHNbaW5kZXhdID0gdXBkYXRlZFRyZWF0bWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dCh0cmVhdG1lbnRzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlbGV0ZVRyZWF0bWVudChkZWxldGVkOiBUcmVhdG1lbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IG9icyA9IHRoaXMudHJlYXRtZW50QmFja2VuZFNlcnZpY2UuZGVsZXRlVHJlYXRtZW50KGRlbGV0ZWQpO1xyXG5cclxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudHM6IExpc3Q8VHJlYXRtZW50PiA9IHRoaXMuX3RyZWF0bWVudHMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRyZWF0bWVudHMuZmluZEluZGV4KCh0cmVhdG1lbnQpID0+IHRyZWF0bWVudC5pZCA9PT0gZGVsZXRlZC5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmVhdG1lbnRzLm5leHQodHJlYXRtZW50cy5kZWxldGUoaW5kZXgpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JzO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
