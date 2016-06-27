System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CapitalizePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let CapitalizePipe = class CapitalizePipe {
                transform(value) {
                    if (value) {
                        return value.charAt(0).toUpperCase() + value.slice(1);
                    }
                    return value;
                }
            };
            CapitalizePipe = __decorate([
                core_1.Pipe({ name: 'capitalize' }), 
                __metadata('design:paramtypes', [])
            ], CapitalizePipe);
            exports_1("CapitalizePipe", CapitalizePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9jYXBpdGFsaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFFRSxTQUFTLENBQUMsS0FBVTtvQkFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxRCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2QsQ0FBQztZQUVILENBQUM7WUFWRDtnQkFBQyxXQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7OzhCQUFBO1lBQzdCLDJDQVNDLENBQUEiLCJmaWxlIjoic2hhcmVkL3BpcGVzL2NhcGl0YWxpemUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2NhcGl0YWxpemUnIH0pXHJcbmV4cG9ydCBjbGFzcyBDYXBpdGFsaXplUGlwZSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KSB7XHJcblx0ICBpZiAodmFsdWUpIHtcclxuICAgICAgXHRyZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcclxuXHQgIH1cclxuXHQgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
