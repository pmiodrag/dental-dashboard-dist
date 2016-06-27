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
        <md-input placeholder="Filter" align="end"  [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"></md-input>
        
    </form>`,
                    directives: [common_1.FORM_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], FilterTextboxComponent);
            exports_1("FilterTextboxComponent", FilterTextboxComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZG9jdG9ycy9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO29CQUdJLFVBQUssR0FBdUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7b0JBRzdDLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBTXBELENBQUM7Z0JBSkcsYUFBYSxDQUFDLEtBQVU7b0JBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDL0QsQ0FBQztZQUNMLENBQUM7WUFQRztnQkFBQyxhQUFNLEVBQUU7O21FQUFBO1lBakJiO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFOzs7Ozs7WUFNQTtvQkFFVixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixDQUFDO2lCQUNuRCxDQUFDOztzQ0FBQTtZQUNGLDJEQVlDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kb2N0b3JzL2ZpbHRlclRleHRib3guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01EX0lOUFVUX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9pbnB1dCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmlsdGVyLXRleHRib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcblxyXG4gIDxmb3JtPlxyXG4gICAgICAgIDxtZC1pbnB1dCBwbGFjZWhvbGRlcj1cIkZpbHRlclwiIGFsaWduPVwiZW5kXCIgIFsobmdNb2RlbCldPVwibW9kZWwuZmlsdGVyXCIgXHJcbiAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVyQ2hhbmdlZCgkZXZlbnQpXCI+PC9tZC1pbnB1dD5cclxuICAgICAgICBcclxuICAgIDwvZm9ybT5gXHJcbiAgLFxyXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IHtcclxuXHJcbiAgXHJcbiAgICBtb2RlbDogeyBmaWx0ZXI6IHN0cmluZyB9ID0geyBmaWx0ZXI6IG51bGwgfTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBmaWx0ZXJDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMubW9kZWwuZmlsdGVyKTsgLy9SYWlzZSBjaGFuZ2VkIGV2ZW50XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
