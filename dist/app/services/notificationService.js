System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var NotificationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            class NotificationService {
                constructor() {
                    this.formActionChange$ = new core_1.EventEmitter();
                }
                emitFormActionChangeEvent(event) {
                    console.log("emitFormActionChangeEvent", event);
                    this.formActionChange$.emit(event);
                }
                getFormActionChangeEmitter() {
                    return this.formActionChange$;
                }
            }
            exports_1("NotificationService", NotificationService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmaWNhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFFQTtnQkFFRTtvQkFEQSxzQkFBaUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ2hCLHlCQUF5QixDQUFDLEtBQUs7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0QsMEJBQTBCO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoQyxDQUFDO1lBQ0gsQ0FBQztZQVZELHFEQVVDLENBQUEiLCJmaWxlIjoic2VydmljZXMvbm90aWZpY2F0aW9uU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgZm9ybUFjdGlvbkNoYW5nZSQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBlbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50KGV2ZW50KSB7XHJcbiAgICAgY29uc29sZS5sb2coXCJlbWl0Rm9ybUFjdGlvbkNoYW5nZUV2ZW50XCIsIGV2ZW50KTtcclxuICAgICB0aGlzLmZvcm1BY3Rpb25DaGFuZ2UkLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuICBnZXRGb3JtQWN0aW9uQ2hhbmdlRW1pdHRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1BY3Rpb25DaGFuZ2UkO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
