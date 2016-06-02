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
                    // to recognize form action we set id = -1 for new treatment.
                    // After form submiting list of observable items is updated and latest one item is not containing id from database for newly created treatment
                    // for that reason we are changing here to 0, to prevent on edit to recognize action as add.
                    // After refresh list is fully updated from database.
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvVHJlYXRtZW50U3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSx3QkFBb0IsdUJBQWdEO29CQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO29CQUY1RCxnQkFBVyxHQUFxQyxJQUFJLG9CQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUduRiwwQkFBMEI7Z0JBQzdCLENBQUM7Z0JBRUQsc0JBQUksc0NBQVU7eUJBQWQ7d0JBQ0ksTUFBTSxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMxQyxDQUFDOzs7bUJBQUE7Z0JBRUQsd0NBQWUsR0FBZixVQUFnQixTQUFTO29CQUF6QixpQkFrQkM7b0JBakJHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsRUFBRTt5QkFDMUMsU0FBUyxDQUNWLFVBQUEsR0FBRzt3QkFDQyxJQUFJLFVBQVUsR0FBaUIsR0FBRyxDQUFDLElBQUksRUFBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQWM7NEJBQzFELE9BQUEsSUFBSSxtQ0FBUyxDQUNULFNBQVMsQ0FBQyxFQUFFLEVBQ1osU0FBUyxDQUFDLFNBQVMsRUFDbkIsU0FBUyxDQUFDLGFBQWEsRUFDdkIsU0FBUyxDQUFDLE9BQU8sRUFDakIsU0FBUyxDQUFDLFFBQVEsRUFDbEIsU0FBUyxDQUFDLEtBQUssQ0FDbEI7d0JBUEQsQ0FPQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQWhDLENBQWdDLENBQUMsQ0FBQTt3QkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUM1QyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFP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Q3RGLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQzt3QkFDckMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxDQUFDO29CQUVQLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztnQkFHRCx3Q0FBZSxHQUFmLFVBQWdCLE9BQWtCO29CQUFsQyxpQkFhQztvQkFaRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoRSxHQUFHLENBQUMsU0FBUyxDQUNULFVBQUEsR0FBRzt3QkFDQyxJQUFJLFVBQVUsR0FBb0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDOUQsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFNBQVMsSUFBSyxPQUFBLFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO3dCQUM3RSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXBELENBQUMsQ0FDSixDQUFDO29CQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztnQkExR0w7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBNkdiLHFCQUFDO1lBQUQsQ0E1R0EsQUE0R0MsSUFBQTtZQTVHRCwyQ0E0R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0YXRlL1RyZWF0bWVudFN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7VHJlYXRtZW50LCBUcmVhdG1lbnRCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1RyZWF0bWVudEJhY2tlbmRTZXJ2aWNlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmVhdG1lbnRTdG9yZSB7XG5cbiAgICBwcml2YXRlIF90cmVhdG1lbnRzOiBCZWhhdmlvclN1YmplY3Q8TGlzdDxUcmVhdG1lbnQ+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmVhdG1lbnRCYWNrZW5kU2VydmljZTogVHJlYXRtZW50QmFja2VuZFNlcnZpY2UpIHtcbiAgICAgICAvLyB0aGlzLmxvYWRJbml0aWFsRGF0YSgpO1xuICAgIH1cblxuICAgIGdldCB0cmVhdG1lbnRzKCkge1xuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX3RyZWF0bWVudHMpO1xuICAgIH1cblxuICAgIGxvYWRJbml0aWFsRGF0YShwYXRpZW50SWQpIHtcbiAgICAgICAgdGhpcy50cmVhdG1lbnRCYWNrZW5kU2VydmljZS5nZXRBbGxUcmVhdG1lbnRzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0cmVhdG1lbnRzID0gKDxUcmVhdG1lbnRbXT5yZXMuanNvbigpKS5tYXAoKHRyZWF0bWVudDogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgVHJlYXRtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnBhdGllbnRpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC50cmVhdG1lbnRkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnRoZXJhcHksXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQuZGlhZ25vc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgKSkuZmlsdGVyKHRyZWF0bWVudCA9PiB0cmVhdG1lbnQucGF0aWVudGlkID09IHBhdGllbnRJZClcbiAgICAgICAgICAgICAgICB0aGlzLl90cmVhdG1lbnRzLm5leHQoTGlzdCh0cmVhdG1lbnRzKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBUcmVhdG1lbnRzXCIpXG4gICAgICAgICAgICApO1xuXG4gICAgfVxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLnRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLmdldEFsbFRyZWF0bWVudHMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50cyA9ICg8VHJlYXRtZW50W10+cmVzLmpzb24oKSkubWFwKCh0cmVhdG1lbnQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IFRyZWF0bWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC5wYXRpZW50aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnQudHJlYXRtZW50ZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudC50aGVyYXB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LmRpYWdub3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50LnByaWNlXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHMgPSBbJ3RyZWF0bWVudGRhdGUnLCAndGhlcmFweScsICdkaWFnbm9zZScsICdwcmljZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0gIT0gbnVsbCAmJiBpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuX3RyZWF0bWVudHMubmV4dChMaXN0KHRyZWF0bWVudHMpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIFRyZWF0bWVudHNcIilcbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGFkZFRyZWF0bWVudChuZXdUcmVhdG1lbnQ6IFRyZWF0bWVudCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblxuICAgICAgICBsZXQgb2JzID0gdGhpcy50cmVhdG1lbnRCYWNrZW5kU2VydmljZS5zYXZlVHJlYXRtZW50KG5ld1RyZWF0bWVudCk7XG4gICAgICAgIC8vIHRvIHJlY29nbml6ZSBmb3JtIGFjdGlvbiB3ZSBzZXQgaWQgPSAtMSBmb3IgbmV3IHRyZWF0bWVudC5cbiAgICAgICAgLy8gQWZ0ZXIgZm9ybSBzdWJtaXRpbmcgbGlzdCBvZiBvYnNlcnZhYmxlIGl0ZW1zIGlzIHVwZGF0ZWQgYW5kIGxhdGVzdCBvbmUgaXRlbSBpcyBub3QgY29udGFpbmluZyBpZCBmcm9tIGRhdGFiYXNlIGZvciBuZXdseSBjcmVhdGVkIHRyZWF0bWVudFxuICAgICAgICAvLyBmb3IgdGhhdCByZWFzb24gd2UgYXJlIGNoYW5naW5nIGhlcmUgdG8gMCwgdG8gcHJldmVudCBvbiBlZGl0IHRvIHJlY29nbml6ZSBhY3Rpb24gYXMgYWRkLlxuICAgICAgICAvLyBBZnRlciByZWZyZXNoIGxpc3QgaXMgZnVsbHkgdXBkYXRlZCBmcm9tIGRhdGFiYXNlLlxuICAgICAgICBuZXdUcmVhdG1lbnQuaWQgPSAwO1xuICAgICAgICBvYnMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmVhdG1lbnRzLm5leHQodGhpcy5fdHJlYXRtZW50cy5nZXRWYWx1ZSgpLnB1c2gobmV3VHJlYXRtZW50KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb2JzO1xuICAgIH1cblxuICAgIHVwZGF0ZVRyZWF0bWVudCh1cGRhdGVkVHJlYXRtZW50OiBUcmVhdG1lbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cbiAgICAgICAgbGV0IG9icyA9IHRoaXMudHJlYXRtZW50QmFja2VuZFNlcnZpY2UudXBkYXRlVHJlYXRtZW50KHVwZGF0ZWRUcmVhdG1lbnQpO1xuXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0cmVhdG1lbnRzOiBMaXN0PFRyZWF0bWVudD4gPSB0aGlzLl90cmVhdG1lbnRzLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdHJlYXRtZW50cy5maW5kSW5kZXgoKHRyZWF0bWVudCkgPT4gdHJlYXRtZW50LmlkID09PSB1cGRhdGVkVHJlYXRtZW50LmlkKTtcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRzW2luZGV4XSA9IHVwZGF0ZWRUcmVhdG1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlYXRtZW50cy5uZXh0KHRyZWF0bWVudHMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9icztcbiAgICB9XG5cblxuICAgIGRlbGV0ZVRyZWF0bWVudChkZWxldGVkOiBUcmVhdG1lbnQpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBvYnMgPSB0aGlzLnRyZWF0bWVudEJhY2tlbmRTZXJ2aWNlLmRlbGV0ZVRyZWF0bWVudChkZWxldGVkKTtcblxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHJlYXRtZW50czogTGlzdDxUcmVhdG1lbnQ+ID0gdGhpcy5fdHJlYXRtZW50cy5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRyZWF0bWVudHMuZmluZEluZGV4KCh0cmVhdG1lbnQpID0+IHRyZWF0bWVudC5pZCA9PT0gZGVsZXRlZC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJlYXRtZW50cy5uZXh0KHRyZWF0bWVudHMuZGVsZXRlKGluZGV4KSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gb2JzO1xuICAgIH1cblxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
