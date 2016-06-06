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
                        template: "\n    <form>\n         <input type=\"text\" \n                [(ngModel)]=\"model.filter\" \n                (keyup)=\"filterChanged($event)\"  />\n    </form>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZmlsdGVyVGV4dGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFBQTtvQkFHSSxVQUFLLEdBQXVCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUc3QyxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQU1wRCxDQUFDO2dCQUpHLDhDQUFhLEdBQWIsVUFBYyxLQUFVO29CQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7Z0JBQy9ELENBQUM7Z0JBTkQ7b0JBQUMsYUFBTSxFQUFFOzt1RUFBQTtnQkFoQmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUscUtBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSwyQkFBbUIsQ0FBQztxQkFDbkQsQ0FBQzs7MENBQUE7Z0JBYUYsNkJBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTtZQVpELDJEQVlDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kaWFnbm9zZS9maWx0ZXJUZXh0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtNRF9JTlBVVF9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvaW5wdXQnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ZpbHRlci10ZXh0Ym94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGZvcm0+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtb2RlbC5maWx0ZXJcIiBcclxuICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJDaGFuZ2VkKCRldmVudClcIiAgLz5cclxuICAgIDwvZm9ybT5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIE1EX0lOUFVUX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUZXh0Ym94Q29tcG9uZW50IHtcclxuXHJcbiAgXHJcbiAgICBtb2RlbDogeyBmaWx0ZXI6IHN0cmluZyB9ID0geyBmaWx0ZXI6IG51bGwgfTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBmaWx0ZXJDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMubW9kZWwuZmlsdGVyKTsgLy9SYWlzZSBjaGFuZ2VkIGV2ZW50XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
