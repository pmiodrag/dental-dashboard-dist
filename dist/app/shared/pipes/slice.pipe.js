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
            let CustomSlice = class CustomSlice {
                transform(list, start, end) {
                    // create instance vars to store keys and final output
                    //console.log("Slice pipe", list, start);
                    // return the resulting array
                    return list.slice(start, end);
                }
            };
            CustomSlice = __decorate([
                core_1.Pipe({ name: 'customslice', pure: false }), 
                __metadata('design:paramtypes', [])
            ], CustomSlice);
            exports_1("CustomSlice", CustomSlice);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9zbGljZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQ0ssU0FBUyxDQUFDLElBQVcsRUFBRSxLQUFhLEVBQUUsR0FBVztvQkFDOUMsc0RBQXNEO29CQUV0RCx5Q0FBeUM7b0JBQ3pDLDZCQUE2QjtvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0wsQ0FBQztZQVREO2dCQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDOzsyQkFBQTtZQUMxQyxxQ0FRQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9waXBlcy9zbGljZS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtuYW1lOiAnY3VzdG9tc2xpY2UnLCAgcHVyZTogZmFsc2V9KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tU2xpY2UgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgICB0cmFuc2Zvcm0obGlzdDogYW55W10sIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogYW55W10ge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBpbnN0YW5jZSB2YXJzIHRvIHN0b3JlIGtleXMgYW5kIGZpbmFsIG91dHB1dFxyXG4gICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiU2xpY2UgcGlwZVwiLCBsaXN0LCBzdGFydCk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByZXN1bHRpbmcgYXJyYXlcclxuICAgICAgICByZXR1cm4gbGlzdC5zbGljZShzdGFydCxlbmQpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
