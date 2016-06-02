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
                        template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVJLHlCQUE0QixRQUFxQjtvQkFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtnQkFBSSxDQUFDO2dCQUV0RCxzQkFBSSx5Q0FBWTt5QkFBaEI7d0JBQ0ksNkNBQTZDO3dCQUM3QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUVsRCxHQUFHLENBQUMsQ0FBQyxJQUFJLFlBQVksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDbkMseUJBQXlCOzRCQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQ0FDMUQsbUVBQW1FO2dDQUM5RCxNQUFNLENBQUMsc0NBQWlCLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3BFLENBQUM7d0JBQ0wsQ0FBQzt3QkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNoQixDQUFDOzs7bUJBQUE7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7d0JBQ2hDLFFBQVEsRUFBRSw2REFBMkQ7cUJBSXhFLENBQUM7K0JBR2UsV0FBSSxFQUFFOzttQ0FIckI7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCw2Q0FrQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hhbmRsZXJzL2NvbnRyb2wtbWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TmdGb3JtTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7VmFsaWRhdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRyb2wtbWVzc2FnZXMnLFxyXG4gICAgaW5wdXRzOiBbJ2NvbnRyb2xOYW1lOiBjb250cm9sJ10sXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+YFxyXG4vLyAgICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJlcnJvck1lc3NhZ2UgIT09IG51bGxcIiByb2xlPVwiYWxlcnRcIj4gXHJcbi8vICAgIDxkaXYgbWQtbWVzc2FnZT57e2Vycm9yTWVzc2FnZX19PC9kaXY+ICAgICAgICBcclxuLy88L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sTWVzc2FnZXMge1xyXG4gICAgY29udHJvbE5hbWU6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBfZm9ybURpcjogTmdGb3JtTW9kZWwpIHsgfVxyXG4gICAgIFxyXG4gICAgZ2V0IGVycm9yTWVzc2FnZSgpIHtcclxuICAgICAgICAvLyBGaW5kIHRoZSBjb250cm9sIGluIHRoZSBIb3N0IChQYXJlbnQpIGZvcm1cclxuICAgICAgICBsZXQgYyA9IHRoaXMuX2Zvcm1EaXIuZm9ybS5maW5kKHRoaXMuY29udHJvbE5hbWUpO1xyXG4gICAgIFxyXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5TmFtZSBpbiBjLmVycm9ycykge1xyXG5cdCAgICAgICAgLy8gSWYgY29udHJvbCBoYXMgYSBlcnJvclxyXG4gICAgICAgICAgICBpZiAoYy5lcnJvcnMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBjLnRvdWNoZWQpIHtcclxuIFx0XHQgICAgICAgIC8vIFJldHVybiB0aGUgYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBWYWxpZGF0aW9uIFNlcnZpY2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBWYWxpZGF0aW9uU2VydmljZS5nZXRWYWxpZGF0b3JFcnJvck1lc3NhZ2UocHJvcGVydHlOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
