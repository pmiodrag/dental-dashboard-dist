System.register(["@angular/core", "../../services/DiagnoseBackendService", 'immutable', "./asObservable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, DiagnoseBackendService_1, immutable_1, asObservable_1, Rx_1;
    var DiagnoseStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DiagnoseBackendService_1_1) {
                DiagnoseBackendService_1 = DiagnoseBackendService_1_1;
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
            DiagnoseStore = (function () {
                function DiagnoseStore(diagnoseBackendService) {
                    this.diagnoseBackendService = diagnoseBackendService;
                    this._diagnoses = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    this.loadInitialData();
                }
                Object.defineProperty(DiagnoseStore.prototype, "diagnoses", {
                    get: function () {
                        return asObservable_1.asObservable(this._diagnoses);
                    },
                    enumerable: true,
                    configurable: true
                });
                DiagnoseStore.prototype.loadInitialData = function () {
                    var _this = this;
                    this.diagnoseBackendService.getAllDiagnoses()
                        .subscribe(function (res) {
                        var diagnoses = res.json().map(function (diagnose) {
                            return new DiagnoseBackendService_1.Diagnose(diagnose.id, diagnose.name, diagnose.description);
                        });
                        _this._diagnoses.next(immutable_1.List(diagnoses));
                    }, function (err) { return console.log("Error retrieving Diagnoses"); });
                };
                DiagnoseStore.prototype.filterData = function (data) {
                    var _this = this;
                    this.diagnoseBackendService.getAllDiagnoses()
                        .subscribe(function (res) {
                        var diagnoses = res.json().map(function (diagnose) {
                            return new DiagnoseBackendService_1.Diagnose(diagnose.id, diagnose.name, diagnose.description);
                        })
                            .filter(function (item) {
                            var props = ['name', 'description'];
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
                        _this._diagnoses.next(immutable_1.List(diagnoses));
                    }, function (err) { return console.log("Error retrieving Diagnoses"); });
                };
                DiagnoseStore.prototype.addDiagnose = function (newDiagnose) {
                    var _this = this;
                    this.diagnoseBackendService.saveDiagnose(newDiagnose).subscribe(function (res) {
                        var newDiagnose = res.json();
                        _this._diagnoses.next(_this._diagnoses.getValue().push(newDiagnose));
                    }, function (err) { return console.log("Error saving Patients"); });
                };
                DiagnoseStore.prototype.updateDiagnose = function (updatedDiagnose) {
                    var _this = this;
                    var obs = this.diagnoseBackendService.updateDiagnose(updatedDiagnose);
                    obs.subscribe(function (res) {
                        var diagnoses = _this._diagnoses.getValue();
                        var index = diagnoses.findIndex(function (diagnose) { return diagnose.id === updatedDiagnose.id; });
                        diagnoses[index] = updatedDiagnose;
                        _this._diagnoses.next(diagnoses);
                    });
                    return obs;
                };
                DiagnoseStore.prototype.deleteDiagnose = function (deleted) {
                    var _this = this;
                    var obs = this.diagnoseBackendService.deleteDiagnose(deleted);
                    obs.subscribe(function (res) {
                        var diagnoses = _this._diagnoses.getValue();
                        var index = diagnoses.findIndex(function (diagnose) { return diagnose.id === deleted.id; });
                        _this._diagnoses.next(diagnoses.delete(index));
                    });
                    return obs;
                };
                DiagnoseStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [DiagnoseBackendService_1.DiagnoseBackendService])
                ], DiagnoseStore);
                return DiagnoseStore;
            }());
            exports_1("DiagnoseStore", DiagnoseStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvRGlhZ25vc2VTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlJLHVCQUFvQixzQkFBOEM7b0JBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7b0JBRjFELGVBQVUsR0FBb0MsSUFBSSxvQkFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFHaEYsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELHNCQUFJLG9DQUFTO3lCQUFiO3dCQUNJLE1BQU0sQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDekMsQ0FBQzs7O21CQUFBO2dCQUVELHVDQUFlLEdBQWY7b0JBQUEsaUJBZ0JDO29CQWZHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUU7eUJBQ3hDLFNBQVMsQ0FDVixVQUFBLEdBQUc7d0JBQ0MsSUFBSSxTQUFTLEdBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFhOzRCQUN2RCxPQUFBLElBQUksaUNBQVEsQ0FDUixRQUFRLENBQUMsRUFBRSxFQUNYLFFBQVEsQ0FBQyxJQUFJLEVBQ2IsUUFBUSxDQUFDLFdBQVcsQ0FFdkI7d0JBTEQsQ0FLQyxDQUFDLENBQUE7d0JBQ04sS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLEVBQXpDLENBQXlDLENBQy9DLENBQUM7Z0JBRVYsQ0FBQztnQkFDRCxrQ0FBVSxHQUFWLFVBQVcsSUFBSTtvQkFBZixpQkF5QkM7b0JBeEJHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUU7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R0FBRyxDQUFDLFNBQVMsQ0FDVCxVQUFBLEdBQUc7d0JBQ0MsSUFBSSxTQUFTLEdBQW1CLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQzNELElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxFQUFFLEVBQTFCLENBQTBCLENBQUMsQ0FBQzt3QkFDMUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxDQUFDLENBQ0osQ0FBQztvQkFFRixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUM7Z0JBOUZMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWlHYixvQkFBQztZQUFELENBaEdBLEFBZ0dDLElBQUE7WUFoR0QseUNBZ0dDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0ZS9EaWFnbm9zZVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0RpYWdub3NlLCBEaWFnbm9zZUJhY2tlbmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvRGlhZ25vc2VCYWNrZW5kU2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWdub3NlU3RvcmUge1xyXG5cclxuICAgIHByaXZhdGUgX2RpYWdub3NlczogQmVoYXZpb3JTdWJqZWN0PExpc3Q8RGlhZ25vc2U+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ25vc2VCYWNrZW5kU2VydmljZTogRGlhZ25vc2VCYWNrZW5kU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRpYWdub3NlcygpIHtcclxuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX2RpYWdub3Nlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEluaXRpYWxEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZGlhZ25vc2VCYWNrZW5kU2VydmljZS5nZXRBbGxEaWFnbm9zZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpYWdub3NlcyA9ICg8RGlhZ25vc2VbXT5yZXMuanNvbigpKS5tYXAoKGRpYWdub3NlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IERpYWdub3NlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc2UubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc2UuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWFnbm9zZXMubmV4dChMaXN0KGRpYWdub3NlcykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIERpYWdub3Nlc1wiKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGlhZ25vc2VCYWNrZW5kU2VydmljZS5nZXRBbGxEaWFnbm9zZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICBsZXQgZGlhZ25vc2VzID0gKDxEaWFnbm9zZVtdPnJlcy5qc29uKCkpLm1hcCgoZGlhZ25vc2U6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgRGlhZ25vc2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3NlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zZS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICkpICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gWyduYW1lJywgJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtwcm9wXSAhPSBudWxsICYmIGl0ZW1bcHJvcF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZGF0YSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWFnbm9zZXMubmV4dChMaXN0KGRpYWdub3NlcykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIERpYWdub3Nlc1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgYWRkRGlhZ25vc2UobmV3RGlhZ25vc2U6IERpYWdub3NlKSB7XHJcbiAgICAgICAgdGhpcy5kaWFnbm9zZUJhY2tlbmRTZXJ2aWNlLnNhdmVEaWFnbm9zZShuZXdEaWFnbm9zZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbmV3RGlhZ25vc2UgPSAoPERpYWdub3NlPnJlcy5qc29uKCkpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpYWdub3Nlcy5uZXh0KHRoaXMuX2RpYWdub3Nlcy5nZXRWYWx1ZSgpLnB1c2gobmV3RGlhZ25vc2UpKTtcclxuICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHNhdmluZyBQYXRpZW50c1wiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGlhZ25vc2UodXBkYXRlZERpYWdub3NlOiBEaWFnbm9zZSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHJcbiAgICAgICAgbGV0IG9icyA9IHRoaXMuZGlhZ25vc2VCYWNrZW5kU2VydmljZS51cGRhdGVEaWFnbm9zZSh1cGRhdGVkRGlhZ25vc2UpO1xyXG5cclxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpYWdub3NlczogTGlzdDxEaWFnbm9zZT4gPSB0aGlzLl9kaWFnbm9zZXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRpYWdub3Nlcy5maW5kSW5kZXgoKGRpYWdub3NlKSA9PiBkaWFnbm9zZS5pZCA9PT0gdXBkYXRlZERpYWdub3NlLmlkKTtcclxuICAgICAgICAgICAgICAgIGRpYWdub3Nlc1tpbmRleF0gPSB1cGRhdGVkRGlhZ25vc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWFnbm9zZXMubmV4dChkaWFnbm9zZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9icztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVsZXRlRGlhZ25vc2UoZGVsZXRlZDogRGlhZ25vc2UpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IG9icyA9IHRoaXMuZGlhZ25vc2VCYWNrZW5kU2VydmljZS5kZWxldGVEaWFnbm9zZShkZWxldGVkKTtcclxuXHJcbiAgICAgICAgb2JzLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkaWFnbm9zZXM6IExpc3Q8RGlhZ25vc2U+ID0gdGhpcy5fZGlhZ25vc2VzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkaWFnbm9zZXMuZmluZEluZGV4KChkaWFnbm9zZSkgPT4gZGlhZ25vc2UuaWQgPT09IGRlbGV0ZWQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlhZ25vc2VzLm5leHQoZGlhZ25vc2VzLmRlbGV0ZShpbmRleCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9icztcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
