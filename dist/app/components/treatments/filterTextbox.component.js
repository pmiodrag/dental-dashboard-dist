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
            let FilterTextboxComponent = class FilterTextboxComponent {
                constructor() {
                    this.model = { filter: null };
                    this.changed = new core_1.EventEmitter();
                }
                filterChanged(event) {
                    event.preventDefault();
                    this.changed.emit(this.model.filter); //Raise changed event
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], FilterTextboxComponent.prototype, "changed", void 0);
            FilterTextboxComponent = __decorate([
                core_1.Component({
                    selector: 'filter-textbox',
                    template: `
    <form>
         <input type="text" 
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `,
                    directives: [common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], FilterTextboxComponent);
            exports_1("FilterTextboxComponent", FilterTextboxComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHJlYXRtZW50cy9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUFBO29CQUdJLFVBQUssR0FBdUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBRzdDLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBTXBELENBQUM7Z0JBSkcsYUFBYSxDQUFDLEtBQVU7b0JBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDL0QsQ0FBQztZQUNMLENBQUM7WUFQRztnQkFBQyxhQUFNLEVBQUU7O21FQUFBO1lBaEJiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFOzs7Ozs7R0FNVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixDQUFDO2lCQUNuRCxDQUFDOztzQ0FBQTtZQUNGLDJEQVlDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy90cmVhdG1lbnRzL2ZpbHRlclRleHRib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmlsdGVyLXRleHRib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Zm9ybT5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1vZGVsLmZpbHRlclwiIFxyXG4gICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlckNoYW5nZWQoJGV2ZW50KVwiICAvPlxyXG4gICAgPC9mb3JtPlxyXG4gIGAsXHJcbiAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgTURfSU5QVVRfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlclRleHRib3hDb21wb25lbnQge1xyXG5cclxuICBcclxuICAgIG1vZGVsOiB7IGZpbHRlcjogc3RyaW5nIH0gPSB7IGZpbHRlcjogbnVsbCB9O1xyXG4gICAgXHJcbiAgICBAT3V0cHV0KClcclxuICAgIGNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGZpbHRlckNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5tb2RlbC5maWx0ZXIpOyAvL1JhaXNlIGNoYW5nZWQgZXZlbnRcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
