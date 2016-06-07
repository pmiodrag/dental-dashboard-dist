System.register(['angular2/core'], function(exports_1, context_1) {
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
    var DiagnoseHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DiagnoseHeaderComponent = (function () {
                function DiagnoseHeaderComponent() {
                }
                //@Output() diagnose = new EventEmitter();
                DiagnoseHeaderComponent.prototype.addDiagnose = function (input) {
                    //  this.diagnose.emit(input.value);
                    input.value = "";
                };
                DiagnoseHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'diagnose-header'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DiagnoseHeaderComponent);
                return DiagnoseHeaderComponent;
            }());
            exports_1("DiagnoseHeaderComponent", DiagnoseHeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhZ25vc2UvZGlhZ25vc2UtaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBV0EsQ0FBQztnQkFURywwQ0FBMEM7Z0JBSTFDLDZDQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNmLG9DQUFvQztvQkFDbEMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBWkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsaUJBQWlCO3FCQUM3QixDQUFDOzsyQ0FBQTtnQkFZRiw4QkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsNkRBV0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2RpYWdub3NlL2RpYWdub3NlLWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonZGlhZ25vc2UtaGVhZGVyJyAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdub3NlSGVhZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICAvL0BPdXRwdXQoKSBkaWFnbm9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICBhZGREaWFnbm9zZShpbnB1dCkge1xyXG4gICAgICAvLyAgdGhpcy5kaWFnbm9zZS5lbWl0KGlucHV0LnZhbHVlKTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
