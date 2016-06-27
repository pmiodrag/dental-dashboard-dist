System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var PubSubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            class PubSubService {
                static emit(eventData) {
                    this.eventEmitter.emit({ event: eventData.eventName, data: eventData.data });
                }
                static on(eventName, callback) {
                    let found;
                    this.eventsList.forEach((eventEntry) => {
                        if (eventEntry.eventName === eventName) {
                            eventEntry.callbacks.push(callback);
                            found = true;
                        }
                    });
                    if (!found) {
                        this.eventsList.push({ eventName: eventName, callbacks: [callback] });
                    }
                }
                static initialize() {
                    this.eventEmitter.subscribe((eventData) => {
                    });
                }
            }
            PubSubService.eventEmitter = new core_1.EventEmitter();
            PubSubService.eventsList = [];
            exports_1("PubSubService", PubSubService);
            PubSubService.initialize();
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wdWJTdWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBRUE7Z0JBS0UsT0FBTyxJQUFJLENBQUMsU0FBOEI7b0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDO2dCQUVELE9BQU8sRUFBRSxDQUFDLFNBQWlCLEVBQUUsUUFBa0Q7b0JBQ3pFLElBQUksS0FBYyxDQUFDO29CQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQTBCO3dCQUNqRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUNwQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNmLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBRUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBRSxRQUFRLENBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzNFLENBQUM7Z0JBR1AsQ0FBQztnQkFFRCxPQUFPLFVBQVU7b0JBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUE4QjtvQkFFM0QsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUVILENBQUM7WUE3QlEsMEJBQVksR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7WUFDckQsd0JBQVUsR0FBMEIsRUFBRSxDQUFDO1lBSGhELHlDQStCQyxDQUFBO1lBRUQsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6InNoYXJlZC9wdWJTdWJTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHViU3ViU2VydmljZSB7XHJcbiAgXHJcbiAgc3RhdGljIGV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc3RhdGljIGV2ZW50c0xpc3Q6IEFycmF5PElFdmVudExpc3RJdGVtPiA9IFtdO1xyXG4gIFxyXG4gIHN0YXRpYyBlbWl0KGV2ZW50RGF0YTogSVB1YlN1YlNlcnZpY2VFdmVudCkge1xyXG4gICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCh7IGV2ZW50OiBldmVudERhdGEuZXZlbnROYW1lLCBkYXRhOiBldmVudERhdGEuZGF0YSB9KTtcclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50SW5mbzogSVB1YlN1YlNlcnZpY2VFdmVudCkgPT4gdm9pZCkgeyAgXHJcbiAgICAgICAgbGV0IGZvdW5kOiBib29sZWFuO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzTGlzdC5mb3JFYWNoKChldmVudEVudHJ5OiBJRXZlbnRMaXN0SXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50RW50cnkuZXZlbnROYW1lID09PSBldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgZXZlbnRFbnRyeS5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgICB0aGlzLmV2ZW50c0xpc3QucHVzaCggeyBldmVudE5hbWU6IGV2ZW50TmFtZSwgY2FsbGJhY2tzOiBbIGNhbGxiYWNrIF0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICB9XHJcbiAgXHJcbiAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLnN1YnNjcmliZSgoZXZlbnREYXRhOiBJUHViU3ViU2VydmljZUV2ZW50KSA9PiB7XHJcblxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcblB1YlN1YlNlcnZpY2UuaW5pdGlhbGl6ZSgpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHViU3ViU2VydmljZUV2ZW50IHtcclxuICBldmVudE5hbWU6IHN0cmluZztcclxuICBkYXRhOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50TGlzdEl0ZW0ge1xyXG4gIGV2ZW50TmFtZTogc3RyaW5nO1xyXG4gIGNhbGxiYWNrczogQXJyYXk8IChldmVudEluZm86IElQdWJTdWJTZXJ2aWNlRXZlbnQpID0+IHZvaWQgPjtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
