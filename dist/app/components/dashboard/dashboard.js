System.register(['@angular/core', '@angular/router', '../alerts/alerts', '../rd-loading/rd-loading', '../rd-widget/rd-widget', '../rd-widget-header/rd-widget-header', '../rd-widget-body/rd-widget-body', '../rd-widget-footer/rd-widget-footer'], function(exports_1, context_1) {
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
    var core_1, router_1, alerts_1, rd_loading_1, rd_widget_1, rd_widget_header_1, rd_widget_body_1, rd_widget_footer_1;
    var Dashboard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (alerts_1_1) {
                alerts_1 = alerts_1_1;
            },
            function (rd_loading_1_1) {
                rd_loading_1 = rd_loading_1_1;
            },
            function (rd_widget_1_1) {
                rd_widget_1 = rd_widget_1_1;
            },
            function (rd_widget_header_1_1) {
                rd_widget_header_1 = rd_widget_header_1_1;
            },
            function (rd_widget_body_1_1) {
                rd_widget_body_1 = rd_widget_body_1_1;
            },
            function (rd_widget_footer_1_1) {
                rd_widget_footer_1 = rd_widget_footer_1_1;
            }],
        execute: function() {
            Dashboard = (function () {
                function Dashboard() {
                }
                Dashboard = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/components/dashboard/dashboard.html',
                        styleUrls: ['app/components/dashboard/dashboard.css'],
                        directives: [alerts_1.Alerts, rd_widget_1.RdWidget, rd_widget_header_1.RdWidgetHeader, rd_widget_body_1.RdWidgetBody, rd_widget_footer_1.RdWidgetFooter, rd_loading_1.RdLoading, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Dashboard);
                return Dashboard;
            }());
            exports_1("Dashboard", Dashboard);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFDRTtnQkFBZSxDQUFDO2dCQVBsQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQzt3QkFDckQsVUFBVSxFQUFFLENBQUMsZUFBTSxFQUFFLG9CQUFRLEVBQUUsaUNBQWMsRUFBRSw2QkFBWSxFQUFFLGlDQUFjLEVBQUUsc0JBQVMsRUFBRSwwQkFBaUIsQ0FBQztxQkFDM0csQ0FBQzs7NkJBQUE7Z0JBR0YsZ0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELGlDQUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBbGVydHN9IGZyb20gJy4uL2FsZXJ0cy9hbGVydHMnO1xyXG5pbXBvcnQge1JkTG9hZGluZ30gZnJvbSAnLi4vcmQtbG9hZGluZy9yZC1sb2FkaW5nJztcclxuaW1wb3J0IHtSZFdpZGdldH0gZnJvbSAnLi4vcmQtd2lkZ2V0L3JkLXdpZGdldCc7XHJcbmltcG9ydCB7UmRXaWRnZXRIZWFkZXJ9IGZyb20gJy4uL3JkLXdpZGdldC1oZWFkZXIvcmQtd2lkZ2V0LWhlYWRlcic7XHJcbmltcG9ydCB7UmRXaWRnZXRCb2R5fSBmcm9tICcuLi9yZC13aWRnZXQtYm9keS9yZC13aWRnZXQtYm9keSc7XHJcbmltcG9ydCB7UmRXaWRnZXRGb290ZXJ9IGZyb20gJy4uL3JkLXdpZGdldC1mb290ZXIvcmQtd2lkZ2V0LWZvb3Rlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXNoYm9hcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbQWxlcnRzLCBSZFdpZGdldCwgUmRXaWRnZXRIZWFkZXIsIFJkV2lkZ2V0Qm9keSwgUmRXaWRnZXRGb290ZXIsIFJkTG9hZGluZywgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
