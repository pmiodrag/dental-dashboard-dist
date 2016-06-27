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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZmlsdGVyVGV4dGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFHSSxVQUFLLEdBQXVCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUc3QyxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQU1wRCxDQUFDO2dCQUpHLGFBQWEsQ0FBQyxLQUFVO29CQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7Z0JBQy9ELENBQUM7WUFDTCxDQUFDO1lBUEc7Z0JBQUMsYUFBTSxFQUFFOzttRUFBQTtZQWhCYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7b0JBQ0QsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwyQkFBbUIsQ0FBQztpQkFDbkQsQ0FBQzs7c0NBQUE7WUFDRiwyREFZQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlhZ25vc2UvZmlsdGVyVGV4dGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TURfSU5QVVRfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2lucHV0JztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaWx0ZXItdGV4dGJveCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxmb3JtPlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibW9kZWwuZmlsdGVyXCIgXHJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVyQ2hhbmdlZCgkZXZlbnQpXCIgIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgYCxcclxuICBkaXJlY3RpdmVzOiBbRk9STV9ESVJFQ1RJVkVTLCBNRF9JTlBVVF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyVGV4dGJveENvbXBvbmVudCB7XHJcblxyXG4gIFxyXG4gICAgbW9kZWw6IHsgZmlsdGVyOiBzdHJpbmcgfSA9IHsgZmlsdGVyOiBudWxsIH07XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgY2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgZmlsdGVyQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZWQuZW1pdCh0aGlzLm1vZGVsLmZpbHRlcik7IC8vUmFpc2UgY2hhbmdlZCBldmVudFxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
