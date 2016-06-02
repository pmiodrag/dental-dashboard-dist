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
    var ValuesPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ValuesPipe = (function () {
                function ValuesPipe() {
                }
                ValuesPipe.prototype.transform = function (value, args) {
                    // create instance vars to store keys and final output
                    var keyArr = Object.keys(value), dataArr = [];
                    // loop through the object,
                    // pushing values to the return array
                    keyArr.forEach(function (key) {
                        if (key != "id") {
                            dataArr.push(key + ": " + value[key]);
                        }
                    });
                    // return the resulting array
                    return dataArr;
                };
                ValuesPipe = __decorate([
                    core_1.Pipe({ name: 'values', pure: false }), 
                    __metadata('design:paramtypes', [])
                ], ValuesPipe);
                return ValuesPipe;
            }());
            exports_1("ValuesPipe", ValuesPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy92YWx1ZXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQWtCQSxDQUFDO2dCQWpCSSw4QkFBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVk7b0JBQy9CLHNEQUFzRDtvQkFDdEQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDM0IsT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFFakIsMkJBQTJCO29CQUMzQixxQ0FBcUM7b0JBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO3dCQUNkLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDM0MsQ0FBQztvQkFFTCxDQUFDLENBQUMsQ0FBQztvQkFFSCw2QkFBNkI7b0JBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLENBQUM7Z0JBbEJMO29CQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDOzs4QkFBQTtnQkFtQnJDLGlCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxtQ0FrQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcGlwZXMvdmFsdWVzLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe25hbWU6ICd2YWx1ZXMnLCAgcHVyZTogZmFsc2V9KVxyXG5leHBvcnQgY2xhc3MgVmFsdWVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55W10pOiBhbnlbXSB7XHJcbiAgICAgICAgLy8gY3JlYXRlIGluc3RhbmNlIHZhcnMgdG8gc3RvcmUga2V5cyBhbmQgZmluYWwgb3V0cHV0XHJcbiAgICAgICAgbGV0IGtleUFyciA9IE9iamVjdC5rZXlzKHZhbHVlKSxcclxuICAgICAgICAgICAgZGF0YUFyciA9IFtdO1xyXG5cclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIG9iamVjdCxcclxuICAgICAgICAvLyBwdXNoaW5nIHZhbHVlcyB0byB0aGUgcmV0dXJuIGFycmF5XHJcbiAgICAgICAga2V5QXJyLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleSAhPSBcImlkXCIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFBcnIucHVzaChrZXkgKyAgXCI6IFwiICsgdmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmVzdWx0aW5nIGFycmF5XHJcbiAgICAgICAgcmV0dXJuIGRhdGFBcnI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
