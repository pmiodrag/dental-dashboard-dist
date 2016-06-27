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
            let ControlMessages = class ControlMessages {
                constructor(_formDir) {
                    this._formDir = _formDir;
                }
                get errorMessage() {
                    // Find the control in the Host (Parent) form
                    let c = this._formDir.form.find(this.controlName);
                    for (let propertyName in c.errors) {
                        // If control has a error
                        if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                            // Return the appropriate error message from the Validation Service
                            return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName);
                        }
                    }
                    return null;
                }
            };
            ControlMessages = __decorate([
                core_1.Component({
                    selector: 'control-messages',
                    inputs: ['controlName: control'],
                    //    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
                    template: `<div *ngIf="errorMessage !== null" role="alert"> 
                    <div md-message>{{errorMessage}}</div>        
               </div>`
                }),
                __param(0, core_1.Host()), 
                __metadata('design:paramtypes', [common_1.NgFormModel])
            ], ControlMessages);
            exports_1("ControlMessages", ControlMessages);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVJLFlBQTRCLFFBQXFCO29CQUFyQixhQUFRLEdBQVIsUUFBUSxDQUFhO2dCQUFJLENBQUM7Z0JBRXRELElBQUksWUFBWTtvQkFDWiw2Q0FBNkM7b0JBQzdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRWxELEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyx5QkFBeUI7d0JBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUMxRCxtRUFBbUU7NEJBQzlELE1BQU0sQ0FBQyxzQ0FBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQztvQkFDTCxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDO1lBMUJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3BDLDJFQUEyRTtvQkFDdkUsUUFBUSxFQUFFOztzQkFFUTtpQkFDckIsQ0FBQzsyQkFHZSxXQUFJLEVBQUU7OytCQUhyQjtZQUNGLDZDQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGFuZGxlcnMvY29udHJvbC1tZXNzYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm1Nb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtWYWxpZGF0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29udHJvbC1tZXNzYWdlcycsXHJcbiAgICBpbnB1dHM6IFsnY29udHJvbE5hbWU6IGNvbnRyb2wnXSxcclxuLy8gICAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZXJyb3JNZXNzYWdlICE9PSBudWxsXCI+e3tlcnJvck1lc3NhZ2V9fTwvZGl2PmBcclxuICAgIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImVycm9yTWVzc2FnZSAhPT0gbnVsbFwiIHJvbGU9XCJhbGVydFwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG1kLW1lc3NhZ2U+e3tlcnJvck1lc3NhZ2V9fTwvZGl2PiAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xNZXNzYWdlcyB7XHJcbiAgICBjb250cm9sTmFtZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIF9mb3JtRGlyOiBOZ0Zvcm1Nb2RlbCkgeyB9XHJcbiAgICAgXHJcbiAgICBnZXQgZXJyb3JNZXNzYWdlKCkge1xyXG4gICAgICAgIC8vIEZpbmQgdGhlIGNvbnRyb2wgaW4gdGhlIEhvc3QgKFBhcmVudCkgZm9ybVxyXG4gICAgICAgIGxldCBjID0gdGhpcy5fZm9ybURpci5mb3JtLmZpbmQodGhpcy5jb250cm9sTmFtZSk7XHJcbiAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHlOYW1lIGluIGMuZXJyb3JzKSB7XHJcblx0ICAgICAgICAvLyBJZiBjb250cm9sIGhhcyBhIGVycm9yXHJcbiAgICAgICAgICAgIGlmIChjLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIGMudG91Y2hlZCkge1xyXG4gXHRcdCAgICAgICAgLy8gUmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIFZhbGlkYXRpb24gU2VydmljZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbGlkYXRpb25TZXJ2aWNlLmdldFZhbGlkYXRvckVycm9yTWVzc2FnZShwcm9wZXJ0eU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
