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
            TreatmentStore = (function () {
                function TreatmentStore(treatmentBackendService) {
                    this.treatmentBackendService = treatmentBackendService;
                    this._treatments = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    // this.loadInitialData();
                }
                Object.defineProperty(TreatmentStore.prototype, "treatments", {
                    get: function () {
                        return asObservable_1.asObservable(this._treatments);
                    },
                    enumerable: true,
                    configurable: true
                });
                TreatmentStore.prototype.loadInitialData = function (patientId) {
                    var _this = this;
                    this.treatmentBackendService.getAllTreatments()
                        .subscribe(function (res) {
                        var treatments = res.json().map(function (treatment) {
                            return new TreatmentBackendService_1.Treatment(treatment.id, treatment.patientid, treatment.treatmentdate, treatment.therapy, treatment.diagnose, treatment.price);
                        }).filter(function (treatment) { return treatment.patientid == patientId; });
                        _this._treatments.next(immutable_1.List(treatments));
                    }, function (err) { return console.log("Error retrieving Treatments"); });
                };
                TreatmentStore.prototype.filterData = function (data) {
                    var _this = this;
                    this.treatmentBackendService.getAllTreatments()
                        .subscribe(function (res) {
                        var treatments = res.json().map(function (treatment) {
                            return new TreatmentBackendService_1.Treatment(treatment.id, treatment.patientid, treatment.treatmentdate, treatment.therapy, treatment.diagnose, treatment.price);
                        })
                            .filter(function (item) {
                            var props = ['treatmentdate', 'therapy', 'diagnose', 'price'];
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
                        _this._treatments.next(immutable_1.List(treatments));
                    }, function (err) { return console.log("Error retrieving Treatments"); });
                };
                TreatmentStore.prototype.addTreatment = function (newTreatment) {
                    var _this = this;
                    var obs = this.treatmentBackendService.saveTreatment(newTreatment);
                    newTreatment.id = 0;
                    obs.subscribe(function (res) {
                        _this._treatments.next(_this._treatments.getValue().push(newTreatment));
                    });
                    return obs;
                };
                TreatmentStore.prototype.updateTreatment = function (updatedTreatment) {
                    var _this = this;
                    var obs = this.treatmentBackendService.updateTreatment(updatedTreatment);
                    obs.subscribe(function (res) {
                        var treatments = _this._treatments.getValue();
                        var index = treatments.findIndex(function (treatment) { return treatment.id === updatedTreatment.id; });
                        treatments[index] = updatedTreatment;
                        _this._treatments.next(treatments);
                    });
                    return obs;
                };
                TreatmentStore.prototype.deleteTreatment = function (deleted) {
                    var _this = this;
                    var obs = this.treatmentBackendService.deleteTreatment(deleted);
                    obs.subscribe(function (res) {
                        var treatments = _this._treatments.getValue();
                        var index = treatments.findIndex(function (treatment) { return treatment.id === deleted.id; });
                        _this._treatments.next(treatments.delete(index));
                    });
                    return obs;
                };
                TreatmentStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [TreatmentBackendService_1.TreatmentBackendService])
                ], TreatmentStore);
                return TreatmentStore;
            }());
            exports_1("TreatmentStore", TreatmentStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvVHJlYXRtZW50U3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSx3QkFBb0IsdUJBQWdEO29CQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO29CQUY1RCxnQkFBVyxHQUFxQyxJQUFJLG9CQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUduRiwwQkFBMEI7Z0JBQzdCLENBQUM7Z0JBRUQsc0JBQUksc0NBQVU7eUJBQWQ7d0JBQ0ksTUFBTSxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMxQyxDQUFDOzs7bUJBQUE7Z0JBRUQsd0NBQWUsR0FBZixVQUFnQixTQUFTO29CQUF6QixpQkFrQkM7b0JBakJHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsRUFBRTt5QkFDMUMsU0FBUyxDQUNWLFVBQUEsR0FBRzt3QkFDQyxJQUFJLFVBQVUsR0FBaUIsR0FBRyxDQUFDLElBQUksRUFBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQWM7NEJBQzFELE9BQUEsSUFBSSxtQ0FBUyxDQUNULFNBQVMsQ0FBQyxFQUFFLEVBQ1osU0FBUyxDQUFDLFNBQVMsRUFDbkIsU0FBUyxDQUFDLGFBQWEsRUFDdkIsU0FBUyxDQUFDLE9BQU8sRUFDakIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsU0FBUyxDQUFDLEtBQUssQ0FDbEI7d0JBUEQsQ0FPQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQWhDLENBQWdDLENBQUMsQ0FBQTt3QkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFP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QyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0QyxDQUFDLENBQUMsQ0FBQztvQkFFUCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBR0Qsd0NBQWUsR0FBZixVQUFnQixPQUFrQjtvQkFBbEMsaUJBYUM7b0JBWkcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFaEUsR0FBRyxDQUFDLFNBQVMsQ0FDVCxVQUFBLEdBQUc7d0JBQ0MsSUFBSSxVQUFVLEdBQW9CLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQzlELElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxTQUFTLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQzt3QkFDN0UsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUVwRCxDQUFDLENBQ0osQ0FBQztvQkFFRixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBdEdMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXlHYixxQkFBQztZQUFELENBeEdBLEFBd0dDLElBQUE7WUF4R0QsMkNBd0dDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0ZS9UcmVhdG1lbnRTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge1RyZWF0bWVudCwgVHJlYXRtZW50QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9UcmVhdG1lbnRCYWNrZW5kU2VydmljZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi9hc09ic2VydmFibGVcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJlYXRtZW50U3RvcmUge1xuXG4gICAgcHJpdmF0ZSBfdHJlYXRtZW50czogQmVoYXZpb3JTdWJqZWN0PExpc3Q8VHJlYXRtZW50Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJlYXRtZW50QmFja2VuZFNlcnZpY2U6IFRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlKSB7XG4gICAgICAgLy8gdGhpcy5sb2FkSW5pdGlhbERhdGEoKTtcbiAgICB9XG5cbiAgICBnZXQgdHJlYXRtZW50cygpIHtcbiAgICAgICAgcmV0dXJuIGFzT2JzZXJ2YWJsZSh0aGlzLl90cmVhdG1lbnRzKTtcbiAgICB9XG5cbiAgICBsb2FkSW5pdGlhbERhdGEocGF0aWVudElkKSB7XG4gICAgICAgIHRoaXMudHJlYXRtZW50QmFja2VuZFNlcnZpY2UuZ2V0QWxsVHJlYXRtZW50cygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50cyA9ICg8VHJlYXRtZW50W10+cmVzLmpzb24oKSkubWFwKCh0cmVhdG1lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFRyZWF0bWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5wYXRpZW50aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQudHJlYXRtZW50ZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC50aGVyYXB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmRpYWdub3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnByaWNlXG4gICAgICAgICAgICAgICAgICAgICkpLmZpbHRlcih0cmVhdG1lbnQgPT4gdHJlYXRtZW50LnBhdGllbnRpZCA9PSBwYXRpZW50SWQpXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlYXRtZW50cy5uZXh0KExpc3QodHJlYXRtZW50cykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgVHJlYXRtZW50c1wiKVxuICAgICAgICAgICAgKTtcblxuICAgIH1cbiAgICBmaWx0ZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy50cmVhdG1lbnRCYWNrZW5kU2VydmljZS5nZXRBbGxUcmVhdG1lbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudHMgPSAoPFRyZWF0bWVudFtdPnJlcy5qc29uKCkpLm1hcCgodHJlYXRtZW50OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgIG5ldyBUcmVhdG1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQucGF0aWVudGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnRyZWF0bWVudGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQudGhlcmFweSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5kaWFnbm9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5wcmljZVxuICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gWyd0cmVhdG1lbnRkYXRlJywgJ3RoZXJhcHknLCAnZGlhZ25vc2UnLCAncHJpY2UnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW3Byb3BdICE9IG51bGwgJiYgaXRlbVtwcm9wXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihkYXRhKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLl90cmVhdG1lbnRzLm5leHQoTGlzdCh0cmVhdG1lbnRzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBUcmVhdG1lbnRzXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBhZGRUcmVhdG1lbnQobmV3VHJlYXRtZW50OiBUcmVhdG1lbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cbiAgICAgICAgbGV0IG9icyA9IHRoaXMudHJlYXRtZW50QmFja2VuZFNlcnZpY2Uuc2F2ZVRyZWF0bWVudChuZXdUcmVhdG1lbnQpO1xuICAgICAgICAgbmV3VHJlYXRtZW50LmlkID0gMDtcbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlYXRtZW50cy5uZXh0KHRoaXMuX3RyZWF0bWVudHMuZ2V0VmFsdWUoKS5wdXNoKG5ld1RyZWF0bWVudCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cbiAgICB1cGRhdGVUcmVhdG1lbnQodXBkYXRlZFRyZWF0bWVudDogVHJlYXRtZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLnVwZGF0ZVRyZWF0bWVudCh1cGRhdGVkVHJlYXRtZW50KTtcblxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50czogTGlzdDxUcmVhdG1lbnQ+ID0gdGhpcy5fdHJlYXRtZW50cy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRyZWF0bWVudHMuZmluZEluZGV4KCh0cmVhdG1lbnQpID0+IHRyZWF0bWVudC5pZCA9PT0gdXBkYXRlZFRyZWF0bWVudC5pZCk7XG4gICAgICAgICAgICAgICAgdHJlYXRtZW50c1tpbmRleF0gPSB1cGRhdGVkVHJlYXRtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dCh0cmVhdG1lbnRzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYnM7XG4gICAgfVxuXG5cbiAgICBkZWxldGVUcmVhdG1lbnQoZGVsZXRlZDogVHJlYXRtZW50KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICBsZXQgb2JzID0gdGhpcy50cmVhdG1lbnRCYWNrZW5kU2VydmljZS5kZWxldGVUcmVhdG1lbnQoZGVsZXRlZCk7XG5cbiAgICAgICAgb2JzLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRyZWF0bWVudHM6IExpc3Q8VHJlYXRtZW50PiA9IHRoaXMuX3RyZWF0bWVudHMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0cmVhdG1lbnRzLmZpbmRJbmRleCgodHJlYXRtZW50KSA9PiB0cmVhdG1lbnQuaWQgPT09IGRlbGV0ZWQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dCh0cmVhdG1lbnRzLmRlbGV0ZShpbmRleCkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
