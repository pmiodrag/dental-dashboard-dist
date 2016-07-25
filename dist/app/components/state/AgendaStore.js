System.register(["@angular/core", "../../services/AgendaBackendService", 'immutable', "./asObservable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, AgendaBackendService_1, immutable_1, asObservable_1, Rx_1;
    var AgendaStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AgendaBackendService_1_1) {
                AgendaBackendService_1 = AgendaBackendService_1_1;
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
            let AgendaStore = class AgendaStore {
                constructor(agendaBackendService) {
                    this.agendaBackendService = agendaBackendService;
                    this._events = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    // this.loadInitialData();
                }
                get events() {
                    return asObservable_1.asObservable(this._events);
                }
                loadInitialData() {
                    this.agendaBackendService.getAllEvents()
                        .subscribe(res => {
                        let events = res.json().map((event) => new AgendaBackendService_1.Agenda(event.id, event.title, event.start, event.end));
                        console.log("Retrieving agenda events res.json() ", res.json());
                        this._events.next(res.json());
                    }, err => console.log("Error retrieving agenda events"));
                }
                findEventIndexById(id) {
                    this.agendaBackendService.getAllEvents()
                        .subscribe(res => {
                        let events = res.json().map((event) => new AgendaBackendService_1.Agenda(event.id, event.title, event.start, event.end))
                            .filter((event) => event.id == id);
                        return event;
                    }, err => console.log("Error retrieving Patients"));
                }
                saveEvent(event) {
                    this.agendaBackendService.saveEvent(event)
                        .subscribe(res => {
                        let newEvent = res.json();
                        let events = this._events.getValue();
                        console.log("events before push", events);
                        events.push(newEvent);
                        console.log("events after push", events);
                        // this._events.next(this._events.getValue().push(newEvent));
                    }, err => console.log("Error saving event"));
                }
                updateEvent(updatedEvent) {
                    let obs = this.agendaBackendService.updateEvent(updatedEvent);
                    obs.subscribe(res => {
                        let events = this._events.getValue();
                        let index = events.findIndex((event) => event.id === updatedEvent.id);
                        events[index] = updatedEvent;
                        //this._patients.next(patients);
                    });
                    return obs;
                }
                deleteEvent(deleted) {
                    let obs = this.agendaBackendService.deleteEvent(deleted);
                    obs.subscribe(res => {
                        let events = this._events.getValue();
                        let index = events.findIndex((event) => event.id === deleted.id);
                        events.splice(index, 1);
                        // this._events.next(events.delete(index));
                    });
                    //
                    return obs;
                }
            };
            AgendaStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [AgendaBackendService_1.AgendaBackendService])
            ], AgendaStore);
            exports_1("AgendaStore", AgendaStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvQWdlbmRhU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHSSxZQUFvQixvQkFBMEM7b0JBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7b0JBRnRELFlBQU8sR0FBa0MsSUFBSSxvQkFBZSxDQUFDLGdCQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFHNUUsMEJBQTBCO2dCQUM3QixDQUFDO2dCQUVELElBQUksTUFBTTtvQkFDTixNQUFNLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsZUFBZTtvQkFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFO3lCQUNuQyxTQUFTLENBQ1YsR0FBRzt3QkFDQyxJQUFJLE1BQU0sR0FBYyxHQUFHLENBQUMsSUFBSSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxLQUMvQyxJQUFJLDZCQUFNLENBQ04sS0FBSyxDQUFDLEVBQUUsRUFDUixLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLEdBQUcsQ0FDWixDQUFDLENBQUE7d0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTt3QkFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUNuRCxDQUFDO2dCQUVWLENBQUM7Z0JBRUQsa0JBQWtCLENBQUMsRUFBVTtvQkFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRTt5QkFDbkMsU0FBUyxDQUNWLEdBQUc7d0JBQ0UsSUFBSSxNQUFNLEdBQWMsR0FBRyxDQUFDLElBQUksRUFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQVUsS0FDaEQsSUFBSSw2QkFBTSxDQUNOLEtBQUssQ0FBQyxFQUFFLEVBQ1IsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxHQUFHLENBQ1osQ0FBQzs2QkFDRCxNQUFNLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTt3QkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQTtvQkFDaEIsQ0FBQyxFQUNELEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQzlDLENBQUM7Z0JBQ1YsQ0FBQztnQkFFRCxTQUFTLENBQUMsS0FBYTtvQkFFbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7eUJBQ3JDLFNBQVMsQ0FDTixHQUFHO3dCQUNDLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFDekMsNkRBQTZEO29CQUNoRSxDQUFDLEVBQ0QsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FDL0MsQ0FBQztnQkFDTixDQUFDO2dCQUVELFdBQVcsQ0FBQyxZQUFvQjtvQkFFNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFOUQsR0FBRyxDQUFDLFNBQVMsQ0FDVCxHQUFHO3dCQUNDLElBQUksTUFBTSxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNuRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDO3dCQUM3QixnQ0FBZ0M7b0JBQ3BDLENBQUMsQ0FBQyxDQUFDO29CQUVQLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztnQkFHRCxXQUFXLENBQUMsT0FBZTtvQkFDdkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFekQsR0FBRyxDQUFDLFNBQVMsQ0FDVCxHQUFHO3dCQUNDLElBQUksTUFBTSxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNuRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNqRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDekIsMkNBQTJDO29CQUM5QyxDQUFDLENBQ0osQ0FBQztvQkFDVixFQUFFO29CQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQztZQUdMLENBQUM7WUFqR0Q7Z0JBQUMsaUJBQVUsRUFBRTs7MkJBQUE7WUFDYixxQ0FnR0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0YXRlL0FnZW5kYVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0FnZW5kYSwgQWdlbmRhQmFja2VuZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9BZ2VuZGFCYWNrZW5kU2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFnZW5kYVN0b3JlIHtcclxuICAgIHByaXZhdGUgX2V2ZW50czogQmVoYXZpb3JTdWJqZWN0PExpc3Q8QWdlbmRhPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFnZW5kYUJhY2tlbmRTZXJ2aWNlOiBBZ2VuZGFCYWNrZW5kU2VydmljZSkge1xyXG4gICAgICAgLy8gdGhpcy5sb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzKCkge1xyXG4gICAgICAgIHJldHVybiBhc09ic2VydmFibGUodGhpcy5fZXZlbnRzKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9hZEluaXRpYWxEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuYWdlbmRhQmFja2VuZFNlcnZpY2UuZ2V0QWxsRXZlbnRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudHMgPSAoPEFnZW5kYVtdPnJlcy5qc29uKCkpLm1hcCgoZXZlbnQ6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgQWdlbmRhKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5lbmRcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXRyaWV2aW5nIGFnZW5kYSBldmVudHMgcmVzLmpzb24oKSBcIiwgcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KHJlcy5qc29uKCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIGFnZW5kYSBldmVudHNcIilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZpbmRFdmVudEluZGV4QnlJZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hZ2VuZGFCYWNrZW5kU2VydmljZS5nZXRBbGxFdmVudHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGxldCBldmVudHMgPSAoPEFnZW5kYVtdPnJlcy5qc29uKCkpLm1hcCgoZXZlbnQ6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgQWdlbmRhKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5lbmRcclxuICAgICAgICAgICAgICAgICAgICApKSAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChldmVudCkgPT4gZXZlbnQuaWQgPT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBQYXRpZW50c1wiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICBcclxuICAgIHNhdmVFdmVudChldmVudDogQWdlbmRhKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYWdlbmRhQmFja2VuZFNlcnZpY2Uuc2F2ZUV2ZW50KGV2ZW50KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RXZlbnQgPSByZXMuanNvbigpOyBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnRzID0gdGhpcy5fZXZlbnRzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudHMgYmVmb3JlIHB1c2hcIiwgZXZlbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50cyBhZnRlciBwdXNoXCIsIGV2ZW50cylcclxuICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX2V2ZW50cy5uZXh0KHRoaXMuX2V2ZW50cy5nZXRWYWx1ZSgpLnB1c2gobmV3RXZlbnQpKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgZXZlbnRcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUV2ZW50KHVwZGF0ZWRFdmVudDogQWdlbmRhKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG5cclxuICAgICAgICBsZXQgb2JzID0gdGhpcy5hZ2VuZGFCYWNrZW5kU2VydmljZS51cGRhdGVFdmVudCh1cGRhdGVkRXZlbnQpO1xyXG5cclxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50czogTGlzdDxBZ2VuZGE+ID0gdGhpcy5fZXZlbnRzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBldmVudHMuZmluZEluZGV4KChldmVudCkgPT4gZXZlbnQuaWQgPT09IHVwZGF0ZWRFdmVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICBldmVudHNbaW5kZXhdID0gdXBkYXRlZEV2ZW50O1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLl9wYXRpZW50cy5uZXh0KHBhdGllbnRzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRlbGV0ZUV2ZW50KGRlbGV0ZWQ6IEFnZW5kYSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICBsZXQgb2JzID0gdGhpcy5hZ2VuZGFCYWNrZW5kU2VydmljZS5kZWxldGVFdmVudChkZWxldGVkKTtcclxuXHJcbiAgICAgICAgb2JzLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBldmVudHM6IExpc3Q8QWdlbmRhPiA9IHRoaXMuX2V2ZW50cy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZXZlbnRzLmZpbmRJbmRleCgoZXZlbnQpID0+IGV2ZW50LmlkID09PSBkZWxldGVkLmlkKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAvLyB0aGlzLl9ldmVudHMubmV4dChldmVudHMuZGVsZXRlKGluZGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4vL1xyXG4gICAgICAgIHJldHVybiBvYnM7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
