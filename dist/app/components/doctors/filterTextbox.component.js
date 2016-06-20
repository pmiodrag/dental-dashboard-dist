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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO29CQUdJLFVBQUssR0FBdUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBRzdDLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBTXBELENBQUM7Z0JBSkcsOENBQWEsR0FBYixVQUFjLEtBQVU7b0JBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDL0QsQ0FBQztnQkFORDtvQkFBQyxhQUFNLEVBQUU7O3VFQUFBO2dCQWpCYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwyTEFNQTt3QkFFVixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixDQUFDO3FCQUNuRCxDQUFDOzswQ0FBQTtnQkFhRiw2QkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsMkRBWUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RvY3RvcnMvZmlsdGVyVGV4dGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0JztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaWx0ZXItdGV4dGJveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuXHJcbiAgPGZvcm0+XHJcbiAgICAgICAgPG1kLWlucHV0IHBsYWNlaG9sZGVyPVwiRmlsdGVyXCIgYWxpZ249XCJlbmRcIiAgWyhuZ01vZGVsKV09XCJtb2RlbC5maWx0ZXJcIiBcclxuICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJDaGFuZ2VkKCRldmVudClcIj48L21kLWlucHV0PlxyXG4gICAgICAgIFxyXG4gICAgPC9mb3JtPmBcclxuICAsXHJcbiAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgTURfSU5QVVRfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlclRleHRib3hDb21wb25lbnQge1xyXG5cclxuICBcclxuICAgIG1vZGVsOiB7IGZpbHRlcjogc3RyaW5nIH0gPSB7IGZpbHRlcjogbnVsbCB9O1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGZpbHRlckNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5tb2RlbC5maWx0ZXIpOyAvL1JhaXNlIGNoYW5nZWQgZXZlbnRcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
