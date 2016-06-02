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
            SortByDirective = (function () {
                function SortByDirective(el) {
                    var _this = this;
                    this.sorted = new core_1.EventEmitter();
                    this.sortProperty = el.nativeElement.getAttribute('sort-by');
                    el.nativeElement.addEventListener('click', function (event) { return _this.elementClicked(event); });
                    this.sorted = new core_1.EventEmitter();
                }
                SortByDirective.prototype.elementClicked = function (event) {
                    event.preventDefault();
                    this.sorted.next(this.sortProperty); //Raise clicked event
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
                return SortByDirective;
            }());
            exports_1("SortByDirective", SortByDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kaXJlY3RpdmVzL3NvcnRieS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFPSSx5QkFBWSxFQUFjO29CQVA5QixpQkFrQkM7b0JBYkEsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFHMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7b0JBQ3ZGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsd0NBQWMsR0FBZCxVQUFlLEtBQVU7b0JBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMscUJBQXFCO2dCQUM5RCxDQUFDO2dCQVpIO29CQUFDLGFBQU0sRUFBRTs7K0RBQUE7Z0JBUFg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVztxQkFDdEIsQ0FBQzs7bUNBQUE7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCw2Q0FrQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZGlyZWN0aXZlcy9zb3J0YnkuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc29ydC1ieV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0QnlEaXJlY3RpdmUge1xyXG5cdFxyXG4gICAgc29ydFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgXHJcbiAgQE91dHB1dCgpXHJcblx0c29ydGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuc29ydFByb3BlcnR5ID0gZWwubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NvcnQtYnknKTtcclxuICAgICAgZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KSA9PiB0aGlzLmVsZW1lbnRDbGlja2VkKGV2ZW50KSk7XHJcbiAgICAgIHRoaXMuc29ydGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnRDbGlja2VkKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc29ydGVkLm5leHQodGhpcy5zb3J0UHJvcGVydHkpOyAvL1JhaXNlIGNsaWNrZWQgZXZlbnRcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
