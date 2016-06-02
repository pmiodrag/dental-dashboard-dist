System.register(['@angular/core', '@angular/common', '@angular2-material/input'], function(exports_1, context_1) {
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
    var core_1, common_1, input_1;
    var FilterTextboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            }],
        execute: function() {
            FilterTextboxComponent = (function () {
                function FilterTextboxComponent() {
                    this.model = { filter: null };
                    this.changed = new core_1.EventEmitter();
                }
                FilterTextboxComponent.prototype.filterChanged = function (event) {
                    event.preventDefault();
                    this.changed.emit(this.model.filter); //Raise changed event
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], FilterTextboxComponent.prototype, "changed", void 0);
                FilterTextboxComponent = __decorate([
                    core_1.Component({
                        selector: 'filter-textbox',
                        template: "\n\n  <form>\n        <md-input placeholder=\"Filter\" align=\"end\"  [(ngModel)]=\"model.filter\" \n                (keyup)=\"filterChanged($event)\"></md-input>\n        \n    </form>",
                        directives: [common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterTextboxComponent);
                return FilterTextboxComponent;
            }());
            exports_1("FilterTextboxComponent", FilterTextboxComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGF0aWVudHMvZmlsdGVyVGV4dGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFHSSxVQUFLLEdBQXVCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUc3QyxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQU1wRCxDQUFDO2dCQUpHLDhDQUFhLEdBQWIsVUFBYyxLQUFVO29CQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7Z0JBQy9ELENBQUM7Z0JBTkQ7b0JBQUMsYUFBTSxFQUFFOzt1RUFBQTtnQkFqQmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMkxBTUE7d0JBRVYsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwyQkFBbUIsQ0FBQztxQkFDbkQsQ0FBQzs7MENBQUE7Z0JBYUYsNkJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDJEQVlDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYXRpZW50cy9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZpbHRlci10ZXh0Ym94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG5cclxuICA8Zm9ybT5cclxuICAgICAgICA8bWQtaW5wdXQgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIiBhbGlnbj1cImVuZFwiICBbKG5nTW9kZWwpXT1cIm1vZGVsLmZpbHRlclwiIFxyXG4gICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlckNoYW5nZWQoJGV2ZW50KVwiPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgXHJcbiAgICA8L2Zvcm0+YFxyXG4gICxcclxuICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTLCBNRF9JTlBVVF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyVGV4dGJveENvbXBvbmVudCB7XHJcblxyXG4gIFxyXG4gICAgbW9kZWw6IHsgZmlsdGVyOiBzdHJpbmcgfSA9IHsgZmlsdGVyOiBudWxsIH07XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgZmlsdGVyQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLm1vZGVsLmZpbHRlcik7IC8vUmFpc2UgY2hhbmdlZCBldmVudFxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
