System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Agenda, AgendaBackendService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            class Agenda {
                constructor(id, title, start, end) {
                    this.id = id;
                    this.title = title;
                    this.start = start;
                    this.end = end;
                }
            }
            exports_1("Agenda", Agenda);
            let AgendaBackendService = class AgendaBackendService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                getAllEvents() {
                    return this.http.get(this.baseUrl + 'events');
                }
                saveEvent(newEvent) {
                    let body = JSON.stringify(newEvent);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'events'), body, options);
                }
                updateEvent(event) {
                    let body = JSON.stringify(event);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put((this.baseUrl + 'events/' + event.id), body, options)
                        .share();
                }
                deleteEvent(deleteEvent) {
                    return this.http.delete('/events/' + deleteEvent.id).share();
                }
            };
            AgendaBackendService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], AgendaBackendService);
            exports_1("AgendaBackendService", AgendaBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0FnZW5kYUJhY2tlbmRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQ0ksWUFBb0IsRUFBVSxFQUFTLEtBQWEsRUFBUyxLQUFhLEVBQVMsR0FBVztvQkFBMUUsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUTtnQkFBRyxDQUFDO1lBQ3RHLENBQUM7WUFGRCwyQkFFQyxDQUFBO1lBRUQ7Z0JBSUksWUFBWSxJQUFVO29CQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7Z0JBQ3ZCLENBQUM7Z0JBRUQsWUFBWTtvQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCxTQUFTLENBQUMsUUFBZ0I7b0JBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUUsUUFBUSxDQUFFLENBQUE7b0JBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7b0JBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUdELFdBQVcsQ0FBRSxLQUFhO29CQUV0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBRSxDQUFBO29CQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDeEQsS0FBSyxFQUFFLENBQUE7Z0JBQzdCLENBQUM7Z0JBRUQsV0FBVyxDQUFDLFdBQW1CO29CQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakUsQ0FBQztZQUVMLENBQUM7WUFwQ0Q7Z0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7WUFDYix1REFtQ0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9BZ2VuZGFCYWNrZW5kU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSxJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBZ2VuZGEge1xyXG4gICAgaWQ6IG51bWJlcjsgXHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3RhcnQ6IHN0cmluZztcclxuICAgIGVuZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWdlbmRhIGltcGxlbWVudHMgSUFnZW5kYSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgc3RhcnQ6IHN0cmluZywgcHVibGljIGVuZDogc3RyaW5nKSB7fVxyXG59XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFnZW5kYUJhY2tlbmRTZXJ2aWNlIHtcclxuICAgIGh0dHA6SHR0cDtcclxuICAgIGJhc2VVcmw6IHN0cmluZztcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgICAgICB0aGlzLmJhc2VVcmwgPSAnLydcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxFdmVudHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2V2ZW50cycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzYXZlRXZlbnQobmV3RXZlbnQ6IEFnZW5kYSkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggbmV3RXZlbnQgKVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoKHRoaXMuYmFzZVVybCArICdldmVudHMnKSwgYm9keSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgdXBkYXRlRXZlbnQgKGV2ZW50OiBBZ2VuZGEpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4gIHtcclxuXHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSggZXZlbnQgKVxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoKHRoaXMuYmFzZVVybCArICdldmVudHMvJyArIGV2ZW50LmlkKSwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zaGFyZSgpXHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIGRlbGV0ZUV2ZW50KGRlbGV0ZUV2ZW50OiBBZ2VuZGEpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKCcvZXZlbnRzLycgKyBkZWxldGVFdmVudC5pZCkuc2hhcmUoKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
