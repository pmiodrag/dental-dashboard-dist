System.register(['@angular/core', '@angular/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var Alerts;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Alerts = (function () {
                function Alerts() {
                    this.alerts = [{
                            type: 'success',
                            msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
                        }, {
                            type: 'danger',
                            msg: 'Found a bug? Create an issue with as many details as you can.'
                        }];
                }
                Alerts.prototype.addAlert = function () {
                    this.alerts.push({
                        msg: 'Another alert!'
                    });
                };
                Alerts.prototype.closeAlert = function (index) {
                    this.alerts.splice(index, 1);
                };
                Alerts = __decorate([
                    core_1.Component({
                        selector: 'alerts',
                        templateUrl: 'app/components/alerts/alerts.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Alerts);
                return Alerts;
            }());
            exports_1("Alerts", Alerts);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWxlcnRzL2FsZXJ0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBO29CQUVFLFdBQU0sR0FBUyxDQUFDOzRCQUNkLElBQUksRUFBRSxTQUFTOzRCQUNmLEdBQUcsRUFBRSxrRkFBa0Y7eUJBQ3hGLEVBQUU7NEJBQ0QsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsR0FBRyxFQUFFLCtEQUErRDt5QkFDckUsQ0FBQyxDQUFDO2dCQVdMLENBQUM7Z0JBVEMseUJBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDZixHQUFHLEVBQUUsZ0JBQWdCO3FCQUN0QixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwyQkFBVSxHQUFWLFVBQVcsS0FBSztvQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBdkJIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSxtQ0FBbUM7d0JBQ2hELFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7cUJBQzlCLENBQUM7OzBCQUFBO2dCQW9CRixhQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCwyQkFtQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FsZXJ0cy9hbGVydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FsZXJ0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9hbGVydHMvYWxlcnRzLmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydHMge1xyXG5cclxuICBhbGVydHM6YW55W10gPSBbe1xyXG4gICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgbXNnOiAnVGhhbmtzIGZvciB2aXNpdGluZyEgRmVlbCBmcmVlIHRvIGNyZWF0ZSBwdWxsIHJlcXVlc3RzIHRvIGltcHJvdmUgdGhlIGRhc2hib2FyZCEnXHJcbiAgfSwge1xyXG4gICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICBtc2c6ICdGb3VuZCBhIGJ1Zz8gQ3JlYXRlIGFuIGlzc3VlIHdpdGggYXMgbWFueSBkZXRhaWxzIGFzIHlvdSBjYW4uJ1xyXG4gIH1dO1xyXG5cclxuICBhZGRBbGVydCgpIHtcclxuICAgIHRoaXMuYWxlcnRzLnB1c2goe1xyXG4gICAgICBtc2c6ICdBbm90aGVyIGFsZXJ0ISdcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VBbGVydChpbmRleCkge1xyXG4gICAgdGhpcy5hbGVydHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
