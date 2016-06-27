System.register(["@angular/core", "../../services/DoctorBackendService", 'immutable', "./asObservable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, DoctorBackendService_1, immutable_1, asObservable_1, Rx_1;
    var DoctorStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (DoctorBackendService_1_1) {
                DoctorBackendService_1 = DoctorBackendService_1_1;
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
            let DoctorStore = class DoctorStore {
                // this method should be supported in RXJS 2
                //    public doctors: Observable<List<Doctor>> =  this._doctors.asObservable();
                constructor(doctorBackendService) {
                    this.doctorBackendService = doctorBackendService;
                    this._doctors = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    this._showCardView = new Rx_1.BehaviorSubject(true);
                    this.loadInitialData();
                }
                get showCardView() {
                    return asObservable_1.asObservable(this._showCardView);
                }
                changeView(show) {
                    console.log("changeView _showCardView", show);
                    this._showCardView.next(show);
                }
                get doctors() {
                    return asObservable_1.asObservable(this._doctors);
                }
                set doctors(doctors) {
                    this._doctors.next(doctors);
                }
                loadInitialData() {
                    this.doctorBackendService.getAllDoctors()
                        .subscribe(res => {
                        let doctors = res.json().map((doctor) => new DoctorBackendService_1.Doctor(doctor.id, doctor.firstname, doctor.lastname, doctor.title, doctor.degreeyear, doctor.degreeplace, doctor.gender, doctor.address, doctor.place, doctor.birthdate, doctor.email, doctor.phone, doctor.mobilephone)); //.filter((person) => person.firstname == "Miodrag")
                        this._doctors.next(immutable_1.List(doctors));
                    }, err => console.log("Error retrieving Doctors"));
                }
                filterData(data) {
                    this.doctorBackendService.getAllDoctors()
                        .subscribe(res => {
                        let doctors = res.json().map((doctor) => new DoctorBackendService_1.Doctor(doctor.id, doctor.firstname, doctor.lastname, doctor.title, doctor.degreeyear, doctor.degreeplace, doctor.gender, doctor.address, doctor.place, doctor.birthdate, doctor.email, doctor.phone, doctor.mobilephone))
                            .filter(item => {
                            let props = ['firstname', 'title', 'lastname', 'address', 'place'];
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
                        this._doctors.next(immutable_1.List(doctors));
                    }, err => console.log("Error retrieving Doctors"));
                }
                addDoctor(newDoctor) {
                    this.doctorBackendService.saveDoctor(newDoctor).subscribe(res => {
                        let newDoctor = res.json();
                        this._doctors.next(this._doctors.getValue().push(newDoctor));
                    }, err => console.log("Error saving Doctors"));
                }
                updateDoctor(updatedDoctor) {
                    let obs = this.doctorBackendService.updateDoctor(updatedDoctor);
                    obs.subscribe(res => {
                        let doctors = this._doctors.getValue();
                        let index = doctors.findIndex((doctor) => doctor.id === updatedDoctor.id);
                        doctors[index] = updatedDoctor;
                        this._doctors.next(doctors);
                    });
                    return obs;
                }
                deleteDoctor(deleted) {
                    let obs = this.doctorBackendService.deleteDoctor(deleted);
                    obs.subscribe(res => {
                        let doctors = this._doctors.getValue();
                        let index = doctors.findIndex((doctor) => doctor.id === deleted.id);
                        this._doctors.next(doctors.delete(index));
                    });
                    return obs;
                }
            };
            DoctorStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [DoctorBackendService_1.DoctorBackendService])
            ], DoctorStore);
            exports_1("DoctorStore", DoctorStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvRG9jdG9yU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSw0Q0FBNEM7Z0JBQzVDLCtFQUErRTtnQkFFL0UsWUFBb0Isb0JBQTBDO29CQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO29CQUx0RCxhQUFRLEdBQWtDLElBQUksb0JBQWUsQ0FBQyxnQkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3hFLGtCQUFhLEdBQTZCLElBQUksb0JBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFLeEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELElBQUksWUFBWTtvQkFDWixNQUFNLENBQUUsMkJBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsVUFBVSxDQUFDLElBQWE7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELElBQUksT0FBTztvQkFDUCxNQUFNLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsT0FBWTtvQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBR0QsZUFBZTtvQkFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFO3lCQUNwQyxTQUFTLENBQ1YsR0FBRzt3QkFDQyxJQUFJLE9BQU8sR0FBYyxHQUFHLENBQUMsSUFBSSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBVyxLQUNqRCxJQUFJLDZCQUFN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LGlCQUFVLEVBQUU7OzJCQUFBO1lBQ2IscUNBc0lDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0ZS9Eb2N0b3JTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtEb2N0b3IsIERvY3RvckJhY2tlbmRTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvRG9jdG9yQmFja2VuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xyXG5pbXBvcnQge0xpc3R9IGZyb20gJ2ltbXV0YWJsZSc7XHJcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi9hc09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEb2N0b3JTdG9yZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZG9jdG9yczogQmVoYXZpb3JTdWJqZWN0PExpc3Q8RG9jdG9yPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KExpc3QoW10pKTtcclxuICAgIHByaXZhdGUgX3Nob3dDYXJkVmlldzogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuICAgIC8vIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBzdXBwb3J0ZWQgaW4gUlhKUyAyXHJcbiAgICAvLyAgICBwdWJsaWMgZG9jdG9yczogT2JzZXJ2YWJsZTxMaXN0PERvY3Rvcj4+ID0gIHRoaXMuX2RvY3RvcnMuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N0b3JCYWNrZW5kU2VydmljZTogRG9jdG9yQmFja2VuZFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRJbml0aWFsRGF0YSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgc2hvd0NhcmRWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiAgYXNPYnNlcnZhYmxlKHRoaXMuX3Nob3dDYXJkVmlldyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoYW5nZVZpZXcoc2hvdzogYm9vbGVhbil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VWaWV3IF9zaG93Q2FyZFZpZXdcIiwgc2hvdyk7XHJcbiAgICAgICAgdGhpcy5fc2hvd0NhcmRWaWV3Lm5leHQoc2hvdyk7XHJcbiAgICB9XHJcbiAgICBnZXQgZG9jdG9ycygpIHtcclxuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX2RvY3RvcnMpO1xyXG4gICAgfVxyXG4gICAgc2V0IGRvY3RvcnMoZG9jdG9yczogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fZG9jdG9ycy5uZXh0KGRvY3RvcnMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkSW5pdGlhbERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JCYWNrZW5kU2VydmljZS5nZXRBbGxEb2N0b3JzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkb2N0b3JzID0gKDxEb2N0b3JbXT5yZXMuanNvbigpKS5tYXAoKGRvY3RvcjogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEb2N0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5kZWdyZWV5ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZGVncmVlcGxhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IucGxhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5iaXJ0aGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IubW9iaWxlcGhvbmVcclxuICAgICAgICAgICAgICAgICAgICApKSAvLy5maWx0ZXIoKHBlcnNvbikgPT4gcGVyc29uLmZpcnN0bmFtZSA9PSBcIk1pb2RyYWdcIilcclxuICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY3RvcnMubmV4dChMaXN0KGRvY3RvcnMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBEb2N0b3JzXCIpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgfVxyXG4gICAgZmlsdGVyRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kb2N0b3JCYWNrZW5kU2VydmljZS5nZXRBbGxEb2N0b3JzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkb2N0b3JzID0gKDxEb2N0b3JbXT5yZXMuanNvbigpKS5tYXAoKGRvY3RvcjogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEb2N0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmZpcnN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmxhc3RuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5kZWdyZWV5ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZGVncmVlcGxhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IucGxhY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5iaXJ0aGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IubW9iaWxlcGhvbmVcclxuICAgICAgICAgICAgICAgICAgICApKSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb3BzID0gWydmaXJzdG5hbWUnLCAndGl0bGUnLCAnbGFzdG5hbWUnLCAnYWRkcmVzcycsICdwbGFjZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bcHJvcF0gIT0gbnVsbCAmJiBpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGRhdGEpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jdG9ycy5uZXh0KExpc3QoZG9jdG9ycykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIERvY3RvcnNcIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFkZERvY3RvcihuZXdEb2N0b3I6IERvY3Rvcikge1xyXG5cclxuICAgICAgICB0aGlzLmRvY3RvckJhY2tlbmRTZXJ2aWNlLnNhdmVEb2N0b3IobmV3RG9jdG9yKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3RG9jdG9yID0gKDxEb2N0b3I+cmVzLmpzb24oKSk7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jdG9ycy5uZXh0KHRoaXMuX2RvY3RvcnMuZ2V0VmFsdWUoKS5wdXNoKG5ld0RvY3RvcikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgRG9jdG9yc1wiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRG9jdG9yKHVwZGF0ZWREb2N0b3I6IERvY3Rvcik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuXHJcbiAgICAgICAgbGV0IG9icyA9IHRoaXMuZG9jdG9yQmFja2VuZFNlcnZpY2UudXBkYXRlRG9jdG9yKHVwZGF0ZWREb2N0b3IpO1xyXG5cclxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRvY3RvcnM6IExpc3Q8RG9jdG9yPiA9IHRoaXMuX2RvY3RvcnMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGRvY3RvcnMuZmluZEluZGV4KChkb2N0b3IpID0+IGRvY3Rvci5pZCA9PT0gdXBkYXRlZERvY3Rvci5pZCk7XHJcbiAgICAgICAgICAgICAgICBkb2N0b3JzW2luZGV4XSA9IHVwZGF0ZWREb2N0b3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kb2N0b3JzLm5leHQoZG9jdG9ycyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkZWxldGVEb2N0b3IoZGVsZXRlZDogRG9jdG9yKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLmRvY3RvckJhY2tlbmRTZXJ2aWNlLmRlbGV0ZURvY3RvcihkZWxldGVkKTtcclxuXHJcbiAgICAgICAgb2JzLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkb2N0b3JzOiBMaXN0PERvY3Rvcj4gPSB0aGlzLl9kb2N0b3JzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkb2N0b3JzLmZpbmRJbmRleCgoZG9jdG9yKSA9PiBkb2N0b3IuaWQgPT09IGRlbGV0ZWQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jdG9ycy5uZXh0KGRvY3RvcnMuZGVsZXRlKGluZGV4KSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9icztcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
