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
    var SortByDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let SortByDirective = class SortByDirective {
                constructor(el) {
                    this.sorted = new core_1.EventEmitter();
                    this.sortProperty = el.nativeElement.getAttribute('sort-by');
                    el.nativeElement.addEventListener('click', (event) => this.elementClicked(event));
                    this.sorted = new core_1.EventEmitter();
                }
                elementClicked(event) {
                    event.preventDefault();
                    this.sorted.next(this.sortProperty); //Raise clicked event
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], SortByDirective.prototype, "sorted", void 0);
            SortByDirective = __decorate([
                core_1.Directive({
                    selector: '[sort-by]'
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef])
            ], SortByDirective);
            exports_1("SortByDirective", SortByDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFPSSxZQUFZLEVBQWM7b0JBRjdCLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBRzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzdELEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdkYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFDbkMsQ0FBQztnQkFFRCxjQUFjLENBQUMsS0FBVTtvQkFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7Z0JBQzlELENBQUM7WUFFTCxDQUFDO1lBZEM7Z0JBQUMsYUFBTSxFQUFFOzsyREFBQTtZQVBYO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCLENBQUM7OytCQUFBO1lBQ0YsNkNBa0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL2RpcmVjdGl2ZXMvc29ydGJ5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3NvcnQtYnldJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ydEJ5RGlyZWN0aXZlIHtcclxuXHRcclxuICAgIHNvcnRQcm9wZXJ0eTogc3RyaW5nO1xyXG4gIFxyXG4gIEBPdXRwdXQoKVxyXG5cdHNvcnRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0XHJcbiAgICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xyXG4gICAgICB0aGlzLnNvcnRQcm9wZXJ0eSA9IGVsLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzb3J0LWJ5Jyk7XHJcbiAgICAgIGVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4gdGhpcy5lbGVtZW50Q2xpY2tlZChldmVudCkpO1xyXG4gICAgICB0aGlzLnNvcnRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50Q2xpY2tlZChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNvcnRlZC5uZXh0KHRoaXMuc29ydFByb3BlcnR5KTsgLy9SYWlzZSBjbGlja2VkIGV2ZW50XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
