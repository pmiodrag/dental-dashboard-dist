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
                        this.agendaStore.updateEvent(this.event); //            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWdlbmRhL2FnZW5kYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBO29CQUtJLFdBQU0sR0FBWSxJQUFJLENBQUM7Z0JBQzNCLENBQUM7WUFBRCxDQUFDO1lBTkQsNkJBTUMsQ0FBQTtZQU1EO2dCQVFJLFlBQW1CLFdBQXlCLEVBQVcsRUFBcUI7b0JBQXpELGdCQUFXLEdBQVgsV0FBVyxDQUFjO29CQUFXLE9BQUUsR0FBRixFQUFFLENBQW1CO29CQVA1RSxXQUFNLEdBQVUsRUFBRSxDQUFDO29CQUluQixrQkFBYSxHQUFZLEtBQUssQ0FBQztnQkFJL0IsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUc7d0JBQ04sSUFBSSxFQUFFLGlCQUFpQjt3QkFDdkIsTUFBTSxFQUFFLE9BQU87d0JBQ2YsS0FBSyxFQUFFLDRCQUE0QjtxQkFDMUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELGNBQWMsQ0FBQyxLQUFLO29CQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUUxQixrSEFBa0g7b0JBQ2xILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsZ0JBQWdCLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO29CQUVwQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDN0IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFFRCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNMLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNsQyxDQUFDO29CQUVELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxTQUFTO29CQUNMLFFBQVE7b0JBQ1IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLGVBQWU7b0JBQzVELENBQUM7b0JBRUQsSUFBSSxDQUFDLENBQUM7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUE7d0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7b0JBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDO1lBTUwsQ0FBQztZQS9FRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSwyQkFBbUIsRUFBRSxtQkFBUyxFQUFFLGtCQUFRLEVBQUUsZ0JBQU0sRUFBRSxrQkFBUSxFQUFFLGdCQUFNLEVBQUUsc0JBQVksQ0FBQztpQkFDbEgsQ0FBQzs7K0JBQUE7WUFDRiw2Q0EwRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FnZW5kYS9hZ2VuZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtNZFRvb2xiYXJ9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC90b29sYmFyJztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2luZGV4XCI7XHJcbmltcG9ydCB7U2NoZWR1bGUsIERpYWxvZywgQ2FsZW5kYXIsIEJ1dHRvbiwgVG9nZ2xlQnV0dG9ufSBmcm9tICdwcmltZW5nL3ByaW1lbmcnO1xyXG5pbXBvcnQge0FnZW5kYUJhY2tlbmRTZXJ2aWNlfSBmcm9tICAnLi4vLi4vc2VydmljZXMvQWdlbmRhQmFja2VuZFNlcnZpY2UnO1xyXG5pbXBvcnQge0FnZW5kYVN0b3JlfSBmcm9tICcuLi9zdGF0ZS9BZ2VuZGFTdG9yZSc7XHJcblxyXG4gICAgXHJcbmV4cG9ydCBjbGFzcyBNeUV2ZW50IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3RhcnQ6IHN0cmluZztcclxuICAgIGVuZDogc3RyaW5nO1xyXG4gICAgYWxsRGF5OiBib29sZWFuID0gdHJ1ZTtcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FnZW5kYScsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9hZ2VuZGEvYWdlbmRhLmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgTWRUb29sYmFyLCBTY2hlZHVsZSwgRGlhbG9nLCBDYWxlbmRhciwgQnV0dG9uLCBUb2dnbGVCdXR0b25dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZ2VuZGFDb21wb25lbnQge1xyXG4gICAgZXZlbnRzOiBhbnlbXSA9IFtdO1xyXG4gICAgaGVhZGVyOiBhbnk7XHJcbiAgICBldmVudDogTXlFdmVudDtcclxuICAgIFxyXG4gICAgZGlhbG9nVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBpZEdlbjogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFnZW5kYVN0b3JlIDogQWdlbmRhU3RvcmUsICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgfSBcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFnZW5kYVN0b3JlLmxvYWRJbml0aWFsRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJ21vbnRoLGFnZW5kYVdlZWssYWdlbmRhRGF5J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZURheUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBNeUV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC5zdGFydCA9IGV2ZW50LmRhdGUuZm9ybWF0KCk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICAvL3RyaWdnZXIgZGV0ZWN0aW9uIG1hbnVhbGx5IGFzIHNvbWVob3cgb25seSBtb3ZpbmcgdGhlIG1vdXNlIHF1aWNrbHkgYWZ0ZXIgY2xpY2sgdHJpZ2dlcnMgdGhlIGF1dG9tYXRpYyBkZXRlY3Rpb25cclxuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlRXZlbnRDbGljayhlKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBNeUV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudC50aXRsZSA9IGUuY2FsRXZlbnQudGl0bGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gZS5jYWxFdmVudC5zdGFydDtcclxuICAgICAgICBsZXQgZW5kID0gZS5jYWxFdmVudC5lbmQ7XHJcbiAgICAgICAgaWYoZS52aWV3Lm5hbWUgPT09ICdtb250aCcpIHtcclxuICAgICAgICAgICAgc3RhcnQuc3RyaXBUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGVuZCkge1xyXG4gICAgICAgICAgICBlbmQuc3RyaXBUaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnQuZW5kID0gZW5kLmZvcm1hdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ldmVudC5pZCA9IGUuY2FsRXZlbnQuaWQ7XHJcbiAgICAgICAgdGhpcy5ldmVudC5zdGFydCA9IHN0YXJ0LmZvcm1hdCgpO1xyXG4gICAgICAgIHRoaXMuZXZlbnQuYWxsRGF5ID0gZS5jYWxFdmVudC5hbGxEYXk7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dWaXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2F2ZUV2ZW50KCkge1xyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgaWYodGhpcy5ldmVudC5pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFnZW5kYVN0b3JlLnVwZGF0ZUV2ZW50KHRoaXMuZXZlbnQpOy8vICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL25ld1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmUgZXZlbnQgXCIsIGV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmFnZW5kYVN0b3JlLnNhdmVFdmVudCh0aGlzLmV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5ldmVudCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGlhbG9nVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZWxldGVFdmVudCgpIHtcclxuICAgICAgICB0aGlzLmFnZW5kYVN0b3JlLmRlbGV0ZUV2ZW50KHRoaXMuZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbi8vICAgIGZpbmRFdmVudEluZGV4QnlJZChpZDogbnVtYmVyKSB7XHJcbi8vICAgICAgICBcclxuLy8gICAgICAgIHJldHVybiB0aGlzLmFnZW5kYVN0b3JlLmZpbmRFdmVudEluZGV4QnlJZChpZCk7XHJcbi8vICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
