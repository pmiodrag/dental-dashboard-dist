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
            DoctorStore = (function () {
                // this method should be supported in RXJS 2
                //    public doctors: Observable<List<Doctor>> =  this._doctors.asObservable();
                function DoctorStore(doctorBackendService) {
                    this.doctorBackendService = doctorBackendService;
                    this._doctors = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    this._showCardView = new Rx_1.BehaviorSubject(true);
                    this.loadInitialData();
                }
                Object.defineProperty(DoctorStore.prototype, "showCardView", {
                    get: function () {
                        return asObservable_1.asObservable(this._showCardView);
                    },
                    enumerable: true,
                    configurable: true
                });
                DoctorStore.prototype.changeView = function (show) {
                    console.log("changeView _showCardView", show);
                    this._showCardView.next(show);
                };
                Object.defineProperty(DoctorStore.prototype, "doctors", {
                    get: function () {
                        return asObservable_1.asObservable(this._doctors);
                    },
                    set: function (doctors) {
                        this._doctors.next(doctors);
                    },
                    enumerable: true,
                    configurable: true
                });
                DoctorStore.prototype.loadInitialData = function () {
                    var _this = this;
                    this.doctorBackendService.getAllDoctors()
                        .subscribe(function (res) {
                        var doctors = res.json().map(function (doctor) {
                            return new DoctorBackendService_1.Doctor(doctor.id, doctor.firstname, doctor.lastname, doctor.title, doctor.degreeyear, doctor.degreeplace, doctor.gender, doctor.address, doctor.place, doctor.birthdate, doctor.email, doctor.phone, doctor.mobilephone);
                        }); //.filter((person) => person.firstname == "Miodrag")
                        _this._doctors.next(immutable_1.List(doctors));
                    }, function (err) { return console.log("Error retrieving Doctors"); });
                };
                DoctorStore.prototype.filterData = function (data) {
                    var _this = this;
                    this.doctorBackendService.getAllDoctors()
                        .subscribe(function (res) {
                        var doctors = res.json().map(function (doctor) {
                            return new DoctorBackendService_1.Doctor(doctor.id, doctor.firstname, doctor.lastname, doctor.title, doctor.degreeyear, doctor.degreeplace, doctor.gender, doctor.address, doctor.place, doctor.birthdate, doctor.email, doctor.phone, doctor.mobilephone);
                        })
                            .filter(function (item) {
                            var props = ['firstname', 'title', 'lastname', 'address', 'place'];
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
                        _this._doctors.next(immutable_1.List(doctors));
                    }, function (err) { return console.log("Error retrieving Doctors"); });
                };
                DoctorStore.prototype.addDoctor = function (newDoctor) {
                    var _this = this;
                    this.doctorBackendService.saveDoctor(newDoctor).subscribe(function (res) {
                        var newDoctor = res.json();
                        _this._doctors.next(_this._doctors.getValue().push(newDoctor));
                    }, function (err) { return console.log("Error saving Doctors"); });
                };
                DoctorStore.prototype.updateDoctor = function (updatedDoctor) {
                    var _this = this;
                    var obs = this.doctorBackendService.updateDoctor(updatedDoctor);
                    obs.subscribe(function (res) {
                        var doctors = _this._doctors.getValue();
                        var index = doctors.findIndex(function (doctor) { return doctor.id === updatedDoctor.id; });
                        doctors[index] = updatedDoctor;
                        _this._doctors.next(doctors);
                    });
                    return obs;
                };
                DoctorStore.prototype.deleteDoctor = function (deleted) {
                    var _this = this;
                    var obs = this.doctorBackendService.deleteDoctor(deleted);
                    obs.subscribe(function (res) {
                        var doctors = _this._doctors.getValue();
                        var index = doctors.findIndex(function (doctor) { return doctor.id === deleted.id; });
                        _this._doctors.next(doctors.delete(index));
                    });
                    return obs;
                };
                DoctorStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [DoctorBackendService_1.DoctorBackendService])
                ], DoctorStore);
                return DoctorStore;
            }());
            exports_1("DoctorStore", DoctorStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvRG9jdG9yU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFJSSw0Q0FBNEM7Z0JBQzVDLCtFQUErRTtnQkFFL0UscUJBQW9CLG9CQUEwQztvQkFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtvQkFMdEQsYUFBUSxHQUFrQyxJQUFJLG9CQUFlLENBQUMsZ0JBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxrQkFBYSxHQUE2QixJQUFJLG9CQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBS3hFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCxzQkFBSSxxQ0FBWTt5QkFBaEI7d0JBQ0ksTUFBTSxDQUFFLDJCQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM3QyxDQUFDOzs7bUJBQUE7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQWE7b0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELHNCQUFJLGdDQUFPO3lCQUFYO3dCQUNJLE1BQU0sQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkMsQ0FBQzt5QkFDRCxVQUFZLE9BQVk7d0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxDQUFDOzs7bUJBSEE7Z0JBTUQscUNBQWUsR0FBZjtvQkFBQSxpQkEyQkM7b0JBMUJHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUU7eUJBQ3BDLFNBQVMsQ0FDVixVQUFBLEdBQUc7d0JBQ0MsSUFBSSxPQUFPLEdBQWMsR0FBRyxD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QUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNyRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxFQUF4QixDQUF3QixDQUFDLENBQUM7d0JBQ3BFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFFOUMsQ0FBQyxDQUNKLENBQUM7b0JBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO2dCQXBJTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkF1SWIsa0JBQUM7WUFBRCxDQXRJQSxBQXNJQyxJQUFBO1lBdElELHFDQXNJQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdGUvRG9jdG9yU3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7RG9jdG9yLCBEb2N0b3JCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0RvY3RvckJhY2tlbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcclxuaW1wb3J0IHtMaXN0fSBmcm9tICdpbW11dGFibGUnO1xyXG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4vYXNPYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRG9jdG9yU3RvcmUge1xyXG5cclxuICAgIHByaXZhdGUgX2RvY3RvcnM6IEJlaGF2aW9yU3ViamVjdDxMaXN0PERvY3Rvcj4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChMaXN0KFtdKSk7XHJcbiAgICBwcml2YXRlIF9zaG93Q2FyZFZpZXc6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcbiAgICAvLyB0aGlzIG1ldGhvZCBzaG91bGQgYmUgc3VwcG9ydGVkIGluIFJYSlMgMlxyXG4gICAgLy8gICAgcHVibGljIGRvY3RvcnM6IE9ic2VydmFibGU8TGlzdDxEb2N0b3I+PiA9ICB0aGlzLl9kb2N0b3JzLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdG9yQmFja2VuZFNlcnZpY2U6IERvY3RvckJhY2tlbmRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkSW5pdGlhbERhdGEoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHNob3dDYXJkVmlldygpIHtcclxuICAgICAgICByZXR1cm4gIGFzT2JzZXJ2YWJsZSh0aGlzLl9zaG93Q2FyZFZpZXcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGFuZ2VWaWV3KHNob3c6IGJvb2xlYW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlVmlldyBfc2hvd0NhcmRWaWV3XCIsIHNob3cpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dDYXJkVmlldy5uZXh0KHNob3cpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRvY3RvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFzT2JzZXJ2YWJsZSh0aGlzLl9kb2N0b3JzKTtcclxuICAgIH1cclxuICAgIHNldCBkb2N0b3JzKGRvY3RvcnM6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2RvY3RvcnMubmV4dChkb2N0b3JzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZEluaXRpYWxEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZG9jdG9yQmFja2VuZFNlcnZpY2UuZ2V0QWxsRG9jdG9ycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9jdG9ycyA9ICg8RG9jdG9yW10+cmVzLmpzb24oKSkubWFwKChkb2N0b3I6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgRG9jdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZGVncmVleWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmRlZ3JlZXBsYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnBsYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuYmlydGhkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLm1vYmlsZXBob25lXHJcbiAgICAgICAgICAgICAgICAgICAgKSkgLy8uZmlsdGVyKChwZXJzb24pID0+IHBlcnNvbi5maXJzdG5hbWUgPT0gXCJNaW9kcmFnXCIpXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kb2N0b3JzLm5leHQoTGlzdChkb2N0b3JzKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhcIkVycm9yIHJldHJpZXZpbmcgRG9jdG9yc1wiKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuICAgIGZpbHRlckRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZG9jdG9yQmFja2VuZFNlcnZpY2UuZ2V0QWxsRG9jdG9ycygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9jdG9ycyA9ICg8RG9jdG9yW10+cmVzLmpzb24oKSkubWFwKChkb2N0b3I6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgRG9jdG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5maXJzdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5sYXN0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZGVncmVleWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLmRlZ3JlZXBsYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLnBsYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuYmlydGhkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0b3IuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3Rvci5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdG9yLm1vYmlsZXBob25lXHJcbiAgICAgICAgICAgICAgICAgICAgKSkgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IFsnZmlyc3RuYW1lJywgJ3RpdGxlJywgJ2xhc3RuYW1lJywgJ2FkZHJlc3MnLCAncGxhY2UnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3Agb2YgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW3Byb3BdICE9IG51bGwgJiYgaXRlbVtwcm9wXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihkYXRhKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY3RvcnMubmV4dChMaXN0KGRvY3RvcnMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBEb2N0b3JzXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhZGREb2N0b3IobmV3RG9jdG9yOiBEb2N0b3IpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kb2N0b3JCYWNrZW5kU2VydmljZS5zYXZlRG9jdG9yKG5ld0RvY3Rvcikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0RvY3RvciA9ICg8RG9jdG9yPnJlcy5qc29uKCkpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY3RvcnMubmV4dCh0aGlzLl9kb2N0b3JzLmdldFZhbHVlKCkucHVzaChuZXdEb2N0b3IpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3Igc2F2aW5nIERvY3RvcnNcIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURvY3Rvcih1cGRhdGVkRG9jdG9yOiBEb2N0b3IpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcblxyXG4gICAgICAgIGxldCBvYnMgPSB0aGlzLmRvY3RvckJhY2tlbmRTZXJ2aWNlLnVwZGF0ZURvY3Rvcih1cGRhdGVkRG9jdG9yKTtcclxuXHJcbiAgICAgICAgb2JzLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkb2N0b3JzOiBMaXN0PERvY3Rvcj4gPSB0aGlzLl9kb2N0b3JzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBkb2N0b3JzLmZpbmRJbmRleCgoZG9jdG9yKSA9PiBkb2N0b3IuaWQgPT09IHVwZGF0ZWREb2N0b3IuaWQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdG9yc1tpbmRleF0gPSB1cGRhdGVkRG9jdG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jdG9ycy5uZXh0KGRvY3RvcnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9icztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZGVsZXRlRG9jdG9yKGRlbGV0ZWQ6IERvY3Rvcik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICBsZXQgb2JzID0gdGhpcy5kb2N0b3JCYWNrZW5kU2VydmljZS5kZWxldGVEb2N0b3IoZGVsZXRlZCk7XHJcblxyXG4gICAgICAgIG9icy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZG9jdG9yczogTGlzdDxEb2N0b3I+ID0gdGhpcy5fZG9jdG9ycy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZG9jdG9ycy5maW5kSW5kZXgoKGRvY3RvcikgPT4gZG9jdG9yLmlkID09PSBkZWxldGVkLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY3RvcnMubmV4dChkb2N0b3JzLmRlbGV0ZShpbmRleCkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYnM7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
