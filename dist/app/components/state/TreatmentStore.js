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
                        let treatments = res.json().map((treatment) => new TreatmentBackendService_1.Treatment(treatment.id, treatment.patientid, treatment.treatmentdate, treatment.therapy, treatment.diagnose, treatment.price)).filter(treatment => treatment.patientid == patientId);
                        this._treatments.next(immutable_1.List(treatments));
                    }, err => console.log("Error retrieving Treatments"));
                }
                filterData(data) {
                    this.treatmentBackendService.getAllTreatments()
                        .subscribe(res => {
                        let treatments = res.json().map((treatment) => new TreatmentBackendService_1.Treatment(treatment.id, treatment.patientid, treatment.treatmentdate, treatment.therapy, treatment.diagnose, treatment.price))
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvVHJlYXRtZW50U3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSxZQUFvQix1QkFBZ0Q7b0JBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7b0JBRjVELGdCQUFXLEdBQXFDLElBQUksb0JBQWUsQ0FBQyxnQkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBR25GLDBCQUEwQjtnQkFDN0IsQ0FBQztnQkFFRCxJQUFJLFVBQVU7b0JBQ1YsTUFBTSxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELGVBQWUsQ0FBQyxTQUFTO29CQUNyQixJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLEVBQUU7eUJBQzFDLFNBQVMsQ0FDVixHQUFHO3dCQUNDLElBQUksVUFBVSxHQUFpQixHQUFHLENBQUMsSUFBSSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBYyxLQUMxRCxJQUFJLG1DQUFTLENBQ1QsU0FBUyxDQUFDLEVBQUUsRUFDWixTQUFTLENBQUMsU0FBUyxFQUNuQixTQUFTLENBQUMsYUFBYSxFQUN2QixTQUFTLENBQUMsT0FBTyxFQUNqQixTQUFTLENBQUMsUUFBUSxFQUNsQixTQUFTLENBQUMsS0FBSyxDQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFBO3dCQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLENBQUMsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUNoRCxDQUFDO2dCQUVWLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLElBQUk7b0JBQ1gsSUFBSSxDQUFDLHVCQUF1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QUFDLFFBQVEsRUFBRSxDQUFDO3dCQUM5RCxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM3RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXBELENBQUMsQ0FDSixDQUFDO29CQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztZQUdMLENBQUM7WUF6R0Q7Z0JBQUMsaUJBQVUsRUFBRTs7OEJBQUE7WUFDYiwyQ0F3R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0YXRlL1RyZWF0bWVudFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7VHJlYXRtZW50LCBUcmVhdG1lbnRCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnRTdG9yZSB7XG5cbiAgICBwcml2YXRlIF90cmVhdG1lbnRzOiBCZWhhdmlvclN1YmplY3Q8TGlzdDxUcmVhdG1lbnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVhdG1lbnRCYWNrZW5kU2VydmljZTogVHJlYXRtZW50QmFja2VuZFNlcnZpY2UpIHtcbiAgICAgICAvLyB0aGlzLmxvYWRJbml0aWFsRGF0YSgpO1xuICAgIH1cblxuICAgIGdldCB0cmVhdG1lbnRzKCkge1xuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX3RyZWF0bWVudHMpO1xuICAgIH1cblxuICAgIGxvYWRJbml0aWFsRGF0YShwYXRpZW50SWQpIHtcbiAgICAgICAgdGhpcy50cmVhdG1lbnRCYWNrZW5kU2VydmljZS5nZXRBbGxUcmVhdG1lbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0cmVhdG1lbnRzID0gKDxUcmVhdG1lbnRbXT5yZXMuanNvbigpKS5tYXAoKHRyZWF0bWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJlYXRtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnBhdGllbnRpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnRoZXJhcHksXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQuZGlhZ25vc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgKSkuZmlsdGVyKHRyZWF0bWVudCA9PiB0cmVhdG1lbnQucGF0aWVudGlkID09IHBhdGllbnRJZClcbiAgICAgICAgICAgICAgICB0aGlzLl90cmVhdG1lbnRzLm5leHQoTGlzdCh0cmVhdG1lbnRzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBUcmVhdG1lbnRzXCIpXG4gICAgICAgICAgICApO1xuXG4gICAgfVxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFRyZWF0bWVudHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50cyA9ICg8VHJlYXRtZW50W10+cmVzLmpzb24oKSkubWFwKCh0cmVhdG1lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFRyZWF0bWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5wYXRpZW50aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQudHJlYXRtZW50ZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC50aGVyYXB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmRpYWdub3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnByaWNlXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBbJ3RyZWF0bWVudGRhdGUnLCAndGhlcmFweScsICdkaWFnbm9zZScsICdwcmljZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0gIT0gbnVsbCAmJiBpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dChMaXN0KHRyZWF0bWVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFRyZWF0bWVudHNcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGFkZFRyZWF0bWVudChuZXdUcmVhdG1lbnQ6IFRyZWF0bWVudCkge1xuXG4gICAgICAgIHRoaXMudHJlYXRtZW50QmFja2VuZFNlcnZpY2Uuc2F2ZVRyZWF0bWVudChuZXdUcmVhdG1lbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdUcmVhdG1lbnQgPSAoPFRyZWF0bWVudD5yZXMuanNvbigpKTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dCh0aGlzLl90cmVhdG1lbnRzLmdldFZhbHVlKCkucHVzaChuZXdUcmVhdG1lbnQpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHNhdmluZyBUcmVhdG1lbnRcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUcmVhdG1lbnQodXBkYXRlZFRyZWF0bWVudDogVHJlYXRtZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLnVwZGF0ZVRyZWF0bWVudCh1cGRhdGVkVHJlYXRtZW50KTtcblxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50czogTGlzdDxUcmVhdG1lbnQ+ID0gdGhpcy5fdHJlYXRtZW50cy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRyZWF0bWVudHMuZmluZEluZGV4KCh0cmVhdG1lbnQpID0+IHRyZWF0bWVudC5pZCA9PT0gdXBkYXRlZFRyZWF0bWVudC5pZCk7XG4gICAgICAgICAgICAgICAgdHJlYXRtZW50c1tpbmRleF0gPSB1cGRhdGVkVHJlYXRtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dCh0cmVhdG1lbnRzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnM7XG4gICAgfVxuXG5cbiAgICBkZWxldGVUcmVhdG1lbnQoZGVsZXRlZDogVHJlYXRtZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgb2JzID0gdGhpcy50cmVhdG1lbnRCYWNrZW5kU2VydmljZS5kZWxldGVUcmVhdG1lbnQoZGVsZXRlZCk7XG5cbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudHM6IExpc3Q8VHJlYXRtZW50PiA9IHRoaXMuX3RyZWF0bWVudHMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0cmVhdG1lbnRzLmZpbmRJbmRleCgodHJlYXRtZW50KSA9PiB0cmVhdG1lbnQuaWQgPT09IGRlbGV0ZWQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dCh0cmVhdG1lbnRzLmRlbGV0ZShpbmRleCkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
