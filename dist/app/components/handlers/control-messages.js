System.register(['@angular/core', '@angular/common', '../../shared/services/validation.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, validation_service_1;
    var ControlMessages;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (validation_service_1_1) {
                validation_service_1 = validation_service_1_1;
            }],
        execute: function() {
            ControlMessages = (function () {
                function ControlMessages(_formDir) {
                    this._formDir = _formDir;
                }
                Object.defineProperty(ControlMessages.prototype, "errorMessage", {
                    get: function () {
                        // Find the control in the Host (Parent) form
                        var c = this._formDir.form.find(this.controlName);
                        for (var propertyName in c.errors) {
                            // If control has a error
                            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                                // Return the appropriate error message from the Validation Service
                                return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName);
                            }
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                ControlMessages = __decorate([
                    core_1.Component({
                        selector: 'control-messages',
                        inputs: ['controlName: control'],
                        //    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
                        template: "<div *ngIf=\"errorMessage !== null\" role=\"alert\"> \n                    <div md-message>{{errorMessage}}</div>        \n               </div>"
                    }),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [common_1.NgFormModel])
                ], ControlMessages);
                return ControlMessages;
            }());
            exports_1("ControlMessages", ControlMessages);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVJLHlCQUE0QixRQUFxQjtvQkFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtnQkFBSSxDQUFDO2dCQUV0RCxzQkFBSSx5Q0FBWTt5QkFBaEI7d0JBQ0ksNkNBQTZDO3dCQUM3QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUVsRCxHQUFHLENBQUMsQ0FBQyxJQUFJLFlBQVksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDbkMseUJBQXlCOzRCQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQ0FDMUQsbUVBQW1FO2dDQUM5RCxNQUFNLENBQUMsc0NBQWlCLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BFLENBQUM7d0JBQ0wsQ0FBQzt3QkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDOzs7bUJBQUE7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ3BDLDJFQUEyRTt3QkFDdkUsUUFBUSxFQUFFLGtKQUVRO3FCQUNyQixDQUFDOytCQUdlLFdBQUksRUFBRTs7bUNBSHJCO2dCQW1CRixzQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsNkNBa0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9oYW5kbGVycy9jb250cm9sLW1lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEhvc3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge05nRm9ybU1vZGVsfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1ZhbGlkYXRpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvdmFsaWRhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb250cm9sLW1lc3NhZ2VzJyxcclxuICAgIGlucHV0czogWydjb250cm9sTmFtZTogY29udHJvbCddLFxyXG4vLyAgICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+YFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCIgcm9sZT1cImFsZXJ0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgbWQtbWVzc2FnZT57e2Vycm9yTWVzc2FnZX19PC9kaXY+ICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbE1lc3NhZ2VzIHtcclxuICAgIGNvbnRyb2xOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX2Zvcm1EaXI6IE5nRm9ybU1vZGVsKSB7IH1cclxuICAgICBcclxuICAgIGdldCBlcnJvck1lc3NhZ2UoKSB7XHJcbiAgICAgICAgLy8gRmluZCB0aGUgY29udHJvbCBpbiB0aGUgSG9zdCAoUGFyZW50KSBmb3JtXHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLl9mb3JtRGlyLmZvcm0uZmluZCh0aGlzLmNvbnRyb2xOYW1lKTtcclxuICAgICBcclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eU5hbWUgaW4gYy5lcnJvcnMpIHtcclxuXHQgICAgICAgIC8vIElmIGNvbnRyb2wgaGFzIGEgZXJyb3JcclxuICAgICAgICAgICAgaWYgKGMuZXJyb3JzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgYy50b3VjaGVkKSB7XHJcbiBcdFx0ICAgICAgICAvLyBSZXR1cm4gdGhlIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgVmFsaWRhdGlvbiBTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsaWRhdGlvblNlcnZpY2UuZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlKHByb3BlcnR5TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
