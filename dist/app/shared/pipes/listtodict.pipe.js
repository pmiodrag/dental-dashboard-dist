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
    var ListToDict;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ListToDict = class ListToDict {
                transform(list) {
                    console.log("Slice list", list);
                    let dict = new Array();
                    // create instance vars to store keys and final output
                    list.forEach(key => {
                        dict.push({ 'name': key.name });
                    });
                    console.log("Slice dict", dict);
                    // return the resulting array
                    return dict;
                }
            };
            ListToDict = __decorate([
                core_1.Pipe({ name: 'listtodict', pure: false }), 
                __metadata('design:paramtypes', [])
            ], ListToDict);
            exports_1("ListToDict", ListToDict);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy9saXN0dG9kaWN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFDSyxTQUFTLENBQUMsSUFBVztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLElBQUksSUFBSSxHQUFnQixJQUFJLEtBQUssRUFBTyxDQUFBO29CQUN4QyxzREFBc0Q7b0JBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRzt3QkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUVwQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDaEMsNkJBQTZCO29CQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztZQWREO2dCQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUcsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDOzswQkFBQTtZQUN6QyxtQ0FhQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9waXBlcy9saXN0dG9kaWN0LnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe25hbWU6ICdsaXN0dG9kaWN0JywgIHB1cmU6IGZhbHNlfSlcclxuZXhwb3J0IGNsYXNzIExpc3RUb0RpY3QgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgICB0cmFuc2Zvcm0obGlzdDogYW55W10pOiBhbnlbXSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNsaWNlIGxpc3RcIiwgbGlzdCk7XHJcbiAgICAgICAgbGV0IGRpY3QgOiBBcnJheTxhbnk+ID0gbmV3IEFycmF5PGFueT4oKVxyXG4gICAgICAgIC8vIGNyZWF0ZSBpbnN0YW5jZSB2YXJzIHRvIHN0b3JlIGtleXMgYW5kIGZpbmFsIG91dHB1dFxyXG4gICAgICAgIGxpc3QuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGljdC5wdXNoKHsgJ25hbWUnOiBrZXkubmFtZSB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2xpY2UgZGljdFwiLCBkaWN0KTtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIHJlc3VsdGluZyBhcnJheVxyXG4gICAgICAgIHJldHVybiBkaWN0O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
