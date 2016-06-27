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
            let DiagnoseStore = class DiagnoseStore {
                constructor(diagnoseBackendService) {
                    this.diagnoseBackendService = diagnoseBackendService;
                    this._diagnoses = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    this.loadInitialData();
                }
                get diagnoses() {
                    return asObservable_1.asObservable(this._diagnoses);
                }
                get diagnosesSubject() {
                    return this.diagnoseBackendService.getAllDiagnoses();
                }
                loadInitialData() {
                    this.diagnoseBackendService.getAllDiagnoses()
                        .subscribe(res => {
                        let diagnoses = res.json().map((diagnose) => new DiagnoseBackendService_1.Diagnose(diagnose.id, diagnose.name, diagnose.description));
                        this._diagnoses.next(immutable_1.List(diagnoses));
                    }, err => console.log("Error retrieving Diagnoses"));
                }
                filterData(data) {
                    this.diagnoseBackendService.getAllDiagnoses()
                        .subscribe(res => {
                        let diagnoses = res.json().map((diagnose) => new DiagnoseBackendService_1.Diagnose(diagnose.id, diagnose.name, diagnose.description))
                            .filter(item => {
                            let props = ['name', 'description'];
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
                        this._diagnoses.next(immutable_1.List(diagnoses));
                    }, err => console.log("Error retrieving Diagnoses"));
                }
                addDiagnose(newDiagnose) {
                    this.diagnoseBackendService.saveDiagnose(newDiagnose).subscribe(res => {
                        let newDiagnose = res.json();
                        this._diagnoses.next(this._diagnoses.getValue().push(newDiagnose));
                    }, err => console.log("Error saving Patients"));
                }
                updateDiagnose(updatedDiagnose) {
                    let obs = this.diagnoseBackendService.updateDiagnose(updatedDiagnose);
                    obs.subscribe(res => {
                        let diagnoses = this._diagnoses.getValue();
                        let index = diagnoses.findIndex((diagnose) => diagnose.id === updatedDiagnose.id);
                        diagnoses[index] = updatedDiagnose;
                        this._diagnoses.next(diagnoses);
                    });
                    return obs;
                }
                deleteDiagnose(deleted) {
                    let obs = this.diagnoseBackendService.deleteDiagnose(deleted);
                    obs.subscribe(res => {
                        let diagnoses = this._diagnoses.getValue();
                        let index = diagnoses.findIndex((diagnose) => diagnose.id === deleted.id);
                        this._diagnoses.next(diagnoses.delete(index));
                    });
                    return obs;
                }
            };
            DiagnoseStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [DiagnoseBackendService_1.DiagnoseBackendService])
            ], DiagnoseStore);
            exports_1("DiagnoseStore", DiagnoseStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvRGlhZ25vc2VTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUlJLFlBQW9CLHNCQUE4QztvQkFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtvQkFGMUQsZUFBVSxHQUFvQyxJQUFJLG9CQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUdoRixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsSUFBSSxTQUFTO29CQUNULE1BQU0sQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFJRCxJQUFJLGdCQUFnQjtvQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtnQkFDdkQsQ0FBQztnQkFFRCxlQUFlO29CQUNYLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLEVBQUU7eUJBQ3hDLFNBQVMsQ0FDVixHQUFHO3dCQUNDLElBQUksU0FBUyxHQUFnQixHQUFHLENBQUMsSUFBSSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBYSxLQUN2RCxJQUFJLGlDQUFRLENBQ1IsUUFBUSxDQUFDLEVBQUUsRUFDWCxRQUFRLENBQUMsSUFBSSxFQUNiLFFBQVEsQ0FBQyxXQUFXLENBRXZCLENBQUMsQ0FBQTt3QkFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLENBQUMsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUMvQyxDQUFDO2dCQUVWLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLElBQUk7b0JBQ1gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsRUFBRTt5QkFDeEMsU0FBUyxDQUNW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LElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsQ0FBQyxDQUNKLENBQUM7b0JBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO1lBR0wsQ0FBQztZQXZHRDtnQkFBQyxpQkFBVSxFQUFFOzs2QkFBQTtZQUNiLHlDQXNHQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdGUvRGlhZ25vc2VTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtEaWFnbm9zZSwgRGlhZ25vc2VCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0RpYWdub3NlQmFja2VuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFnbm9zZVN0b3JlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kaWFnbm9zZXM6IEJlaGF2aW9yU3ViamVjdDxMaXN0PERpYWdub3NlPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdub3NlQmFja2VuZFNlcnZpY2U6IERpYWdub3NlQmFja2VuZFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRJbml0aWFsRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkaWFnbm9zZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFzT2JzZXJ2YWJsZSh0aGlzLl9kaWFnbm9zZXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICBcclxuICAgIGdldCBkaWFnbm9zZXNTdWJqZWN0KCkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuZGlhZ25vc2VCYWNrZW5kU2VydmljZS5nZXRBbGxEaWFnbm9zZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbml0aWFsRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmRpYWdub3NlQmFja2VuZFNlcnZpY2UuZ2V0QWxsRGlhZ25vc2VzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkaWFnbm9zZXMgPSAoPERpYWdub3NlW10+cmVzLmpzb24oKSkubWFwKChkaWFnbm9zZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEaWFnbm9zZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3NlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWdub3NlLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlhZ25vc2VzLm5leHQoTGlzdChkaWFnbm9zZXMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBEaWFnbm9zZXNcIilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgICBmaWx0ZXJEYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRpYWdub3NlQmFja2VuZFNlcnZpY2UuZ2V0QWxsRGlhZ25vc2VzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IGRpYWdub3NlcyA9ICg8RGlhZ25vc2VbXT5yZXMuanNvbigpKS5tYXAoKGRpYWdub3NlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IERpYWdub3NlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFnbm9zZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc2UubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhZ25vc2UuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IFsnbmFtZScsICdkZXNjcmlwdGlvbiddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0gIT0gbnVsbCAmJiBpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlhZ25vc2VzLm5leHQoTGlzdChkaWFnbm9zZXMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBEaWFnbm9zZXNcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFkZERpYWdub3NlKG5ld0RpYWdub3NlOiBEaWFnbm9zZSkge1xyXG4gICAgICAgIHRoaXMuZGlhZ25vc2VCYWNrZW5kU2VydmljZS5zYXZlRGlhZ25vc2UobmV3RGlhZ25vc2UpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgbGV0IG5ld0RpYWdub3NlID0gKDxEaWFnbm9zZT5yZXMuanNvbigpKTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWFnbm9zZXMubmV4dCh0aGlzLl9kaWFnbm9zZXMuZ2V0VmFsdWUoKS5wdXNoKG5ld0RpYWdub3NlKSk7XHJcbiAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgUGF0aWVudHNcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURpYWdub3NlKHVwZGF0ZWREaWFnbm9zZTogRGlhZ25vc2UpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcblxyXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLmRpYWdub3NlQmFja2VuZFNlcnZpY2UudXBkYXRlRGlhZ25vc2UodXBkYXRlZERpYWdub3NlKTtcclxuXHJcbiAgICAgICAgb2JzLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkaWFnbm9zZXM6IExpc3Q8RGlhZ25vc2U+ID0gdGhpcy5fZGlhZ25vc2VzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkaWFnbm9zZXMuZmluZEluZGV4KChkaWFnbm9zZSkgPT4gZGlhZ25vc2UuaWQgPT09IHVwZGF0ZWREaWFnbm9zZS5pZCk7XHJcbiAgICAgICAgICAgICAgICBkaWFnbm9zZXNbaW5kZXhdID0gdXBkYXRlZERpYWdub3NlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlhZ25vc2VzLm5leHQoZGlhZ25vc2VzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlbGV0ZURpYWdub3NlKGRlbGV0ZWQ6IERpYWdub3NlKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLmRpYWdub3NlQmFja2VuZFNlcnZpY2UuZGVsZXRlRGlhZ25vc2UoZGVsZXRlZCk7XHJcblxyXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlhZ25vc2VzOiBMaXN0PERpYWdub3NlPiA9IHRoaXMuX2RpYWdub3Nlcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZGlhZ25vc2VzLmZpbmRJbmRleCgoZGlhZ25vc2UpID0+IGRpYWdub3NlLmlkID09PSBkZWxldGVkLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RpYWdub3Nlcy5uZXh0KGRpYWdub3Nlcy5kZWxldGUoaW5kZXgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYnM7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
