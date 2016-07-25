System.register(['@angular/core', '@angular/router', '@angular2-material/toolbar', "ng2-material/index", 'primeng/primeng', '../state/AgendaStore'], function(exports_1, context_1) {
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
    var core_1, router_1, toolbar_1, index_1, primeng_1, AgendaStore_1;
    var MyEvent, AgendaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            },
            function (AgendaStore_1_1) {
                AgendaStore_1 = AgendaStore_1_1;
            }],
        execute: function() {
            class MyEvent {
                constructor() {
                    this.allDay = true;
                }
            }
            exports_1("MyEvent", MyEvent);
            let AgendaComponent = class AgendaComponent {
                constructor(agendaStore, cd) {
                    this.agendaStore = agendaStore;
                    this.cd = cd;
                    this.events = [];
                    this.dialogVisible = false;
                }
                ngOnInit() {
                    this.agendaStore.loadInitialData();
                    this.header = {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    };
                }
                handleDayClick(event) {
                    this.event = new MyEvent();
                    this.event.start = event.date.format();
                    this.dialogVisible = true;
                    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
                    this.cd.detectChanges();
                }
                handleEventClick(e) {
                    this.event = new MyEvent();
                    this.event.title = e.calEvent.title;
                    let start = e.calEvent.start;
                    let end = e.calEvent.end;
                    if (e.view.name === 'month') {
                        start.stripTime();
                    }
                    if (end) {
                        end.stripTime();
                        this.event.end = end.format();
                    }
                    this.event.id = e.calEvent.id;
                    this.event.start = start.format();
                    this.event.allDay = e.calEvent.allDay;
                    this.dialogVisible = true;
                }
                saveEvent() {
                    //update
                    if (this.event.id) {
                        this.agendaStore.updateEvent(this.event);
                    }
                    else {
                        console.log("Save event ", event);
                        this.agendaStore.saveEvent(this.event);
                        this.event = null;
                    }
                    this.dialogVisible = false;
                }
                deleteEvent() {
                    this.agendaStore.deleteEvent(this.event);
                    this.dialogVisible = false;
                }
            };
            AgendaComponent = __decorate([
                core_1.Component({
                    selector: 'agenda',
                    templateUrl: 'app/components/agenda/agenda.html',
                    directives: [router_1.ROUTER_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, toolbar_1.MdToolbar, primeng_1.Schedule, primeng_1.Dialog, primeng_1.Calendar, primeng_1.Button, primeng_1.ToggleButton]
                }), 
                __metadata('design:paramtypes', [AgendaStore_1.AgendaStore, core_1.ChangeDetectorRef])
            ], AgendaComponent);
            exports_1("AgendaComponent", AgendaComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO29CQUtJLFdBQU0sR0FBWSxJQUFJLENBQUM7Z0JBQzNCLENBQUM7WUFBRCxDQUFDO1lBTkQsNkJBTUMsQ0FBQTtZQU1EO2dCQVFJLFlBQW1CLFdBQXlCLEVBQVcsRUFBcUI7b0JBQXpELGdCQUFXLEdBQVgsV0FBVyxDQUFjO29CQUFXLE9BQUUsR0FBRixFQUFFLENBQW1CO29CQVA1RSxXQUFNLEdBQVUsRUFBRSxDQUFDO29CQUluQixrQkFBYSxHQUFZLEtBQUssQ0FBQztnQkFJL0IsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUc7d0JBQ04sSUFBSSxFQUFFLGlCQUFpQjt3QkFDdkIsTUFBTSxFQUFFLE9BQU87d0JBQ2YsS0FBSyxFQUFFLDRCQUE0QjtxQkFDMUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELGNBQWMsQ0FBQyxLQUFLO29CQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUUxQixrSEFBa0g7b0JBQ2xILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsZ0JBQWdCLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO29CQUVwQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFFRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNMLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNsQyxDQUFDO29CQUVELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxTQUFTO29CQUNMLFFBQVE7b0JBQ1IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFLN0MsQ0FBQztvQkFFRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDdEIsQ0FBQztvQkFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDL0IsQ0FBQztnQkFFRCxXQUFXO29CQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7WUFNTCxDQUFDO1lBbkZEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFdBQVcsRUFBRSxtQ0FBbUM7b0JBQ2hELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDJCQUFtQixFQUFFLG1CQUFTLEVBQUUsa0JBQVEsRUFBRSxnQkFBTSxFQUFFLGtCQUFRLEVBQUUsZ0JBQU0sRUFBRSxzQkFBWSxDQUFDO2lCQUNsSCxDQUFDOzsrQkFBQTtZQUNGLDZDQThFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHtTY2hlZHVsZSwgRGlhbG9nLCBDYWxlbmRhciwgQnV0dG9uLCBUb2dnbGVCdXR0b259IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7QWdlbmRhQmFja2VuZFNlcnZpY2V9IGZyb20gICcuLi8uLi9zZXJ2aWNlcy9BZ2VuZGFCYWNrZW5kU2VydmljZSc7XHJcbmltcG9ydCB7QWdlbmRhU3RvcmV9IGZyb20gJy4uL3N0YXRlL0FnZW5kYVN0b3JlJztcclxuXHJcbiAgICBcclxuZXhwb3J0IGNsYXNzIE15RXZlbnQge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdGFydDogc3RyaW5nO1xyXG4gICAgZW5kOiBzdHJpbmc7XHJcbiAgICBhbGxEYXk6IGJvb2xlYW4gPSB0cnVlO1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWdlbmRhJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBNZFRvb2xiYXIsIFNjaGVkdWxlLCBEaWFsb2csIENhbGVuZGFyLCBCdXR0b24sIFRvZ2dsZUJ1dHRvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFnZW5kYUNvbXBvbmVudCB7XHJcbiAgICBldmVudHM6IGFueVtdID0gW107XHJcbiAgICBoZWFkZXI6IGFueTtcclxuICAgIGV2ZW50OiBNeUV2ZW50O1xyXG4gICAgXHJcbiAgICBkaWFsb2dWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGlkR2VuOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWdlbmRhU3RvcmUgOiBBZ2VuZGFTdG9yZSwgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB9IFxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWdlbmRhU3RvcmUubG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnbW9udGgsYWdlbmRhV2VlayxhZ2VuZGFEYXknXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlRGF5Q2xpY2soZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IE15RXZlbnQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50LnN0YXJ0ID0gZXZlbnQuZGF0ZS5mb3JtYXQoKTtcclxuICAgICAgICB0aGlzLmRpYWxvZ1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdHJpZ2dlciBkZXRlY3Rpb24gbWFudWFsbHkgYXMgc29tZWhvdyBvbmx5IG1vdmluZyB0aGUgbW91c2UgcXVpY2tseSBhZnRlciBjbGljayB0cmlnZ2VycyB0aGUgYXV0b21hdGljIGRldGVjdGlvblxyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVFdmVudENsaWNrKGUpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IE15RXZlbnQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50LnRpdGxlID0gZS5jYWxFdmVudC50aXRsZTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3RhcnQgPSBlLmNhbEV2ZW50LnN0YXJ0O1xyXG4gICAgICAgIGxldCBlbmQgPSBlLmNhbEV2ZW50LmVuZDtcclxuICAgICAgICBpZihlLnZpZXcubmFtZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgICAgICBzdGFydC5zdHJpcFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZW5kKSB7XHJcbiAgICAgICAgICAgIGVuZC5zdHJpcFRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudC5lbmQgPSBlbmQuZm9ybWF0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50LmlkID0gZS5jYWxFdmVudC5pZDtcclxuICAgICAgICB0aGlzLmV2ZW50LnN0YXJ0ID0gc3RhcnQuZm9ybWF0KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC5hbGxEYXkgPSBlLmNhbEV2ZW50LmFsbERheTtcclxuICAgICAgICB0aGlzLmRpYWxvZ1Zpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzYXZlRXZlbnQoKSB7XHJcbiAgICAgICAgLy91cGRhdGVcclxuICAgICAgICBpZih0aGlzLmV2ZW50LmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWdlbmRhU3RvcmUudXBkYXRlRXZlbnQodGhpcy5ldmVudCk7XHJcbi8vICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLmZpbmRFdmVudEluZGV4QnlJZCh0aGlzLmV2ZW50LmlkKS5pZDtcclxuLy8gICAgICAgICAgICBpZihpbmRleCA+PSAwKSB7XHJcbi8vICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzW2luZGV4XSA9IHRoaXMuZXZlbnQ7XHJcbi8vICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL25ld1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmUgZXZlbnQgXCIsIGV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmFnZW5kYVN0b3JlLnNhdmVFdmVudCh0aGlzLmV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGlhbG9nVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVFdmVudCgpIHtcclxuICAgICAgICB0aGlzLmFnZW5kYVN0b3JlLmRlbGV0ZUV2ZW50KHRoaXMuZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbi8vICAgIGZpbmRFdmVudEluZGV4QnlJZChpZDogbnVtYmVyKSB7XHJcbi8vICAgICAgICBcclxuLy8gICAgICAgIHJldHVybiB0aGlzLmFnZW5kYVN0b3JlLmZpbmRFdmVudEluZGV4QnlJZChpZCk7XHJcbi8vICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
