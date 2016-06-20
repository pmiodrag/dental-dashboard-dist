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
    var CustomSlice;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomSlice = (function () {
                function CustomSlice() {
                }
                CustomSlice.prototype.transform = function (list, start, end) {
                    // create instance vars to store keys and final output
                    //console.log("Slice pipe", list, start);
                    // return the resulting array
                    return list.slice(start, end);
                };
                CustomSlice = __decorate([
                    core_1.Pipe({ name: 'customslice', pure: false }), 
                    __metadata('design:paramtypes', [])
                ], CustomSlice);
                return CustomSlice;
            }());
            exports_1("CustomSlice", CustomSlice);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9zbGljZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUE7Z0JBUUEsQ0FBQztnQkFQSSwrQkFBUyxHQUFULFVBQVUsSUFBVyxFQUFFLEtBQWEsRUFBRSxHQUFXO29CQUM5QyxzREFBc0Q7b0JBRXRELHlDQUF5QztvQkFDekMsNkJBQTZCO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBUkw7b0JBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7OytCQUFBO2dCQVMxQyxrQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQscUNBUUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcGlwZXMvc2xpY2UucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2N1c3RvbXNsaWNlJywgIHB1cmU6IGZhbHNlfSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbVNsaWNlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICAgdHJhbnNmb3JtKGxpc3Q6IGFueVtdLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IGFueVtdIHtcclxuICAgICAgICAvLyBjcmVhdGUgaW5zdGFuY2UgdmFycyB0byBzdG9yZSBrZXlzIGFuZCBmaW5hbCBvdXRwdXRcclxuICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNsaWNlIHBpcGVcIiwgbGlzdCwgc3RhcnQpO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmVzdWx0aW5nIGFycmF5XHJcbiAgICAgICAgcmV0dXJuIGxpc3Quc2xpY2Uoc3RhcnQsZW5kKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
