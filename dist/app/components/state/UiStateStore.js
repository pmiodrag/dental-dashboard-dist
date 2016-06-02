System.register(["@angular/core", "./ui-state", "./asObservable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, ui_state_1, asObservable_1, Rx_1;
    var UiStateStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ui_state_1_1) {
                ui_state_1 = ui_state_1_1;
            },
            function (asObservable_1_1) {
                asObservable_1 = asObservable_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            UiStateStore = (function () {
                function UiStateStore() {
                    this._uiState = new Rx_1.BehaviorSubject(ui_state_1.initialUiState);
                }
                Object.defineProperty(UiStateStore.prototype, "uiState", {
                    get: function () {
                        return asObservable_1.asObservable(this._uiState);
                    },
                    enumerable: true,
                    configurable: true
                });
                UiStateStore.prototype.startBackendAction = function (message) {
                    this._uiState.next({
                        actionOngoing: true,
                        message: message
                    });
                };
                UiStateStore.prototype.endBackendAction = function () {
                    this._uiState.next({
                        actionOngoing: false,
                        message: ''
                    });
                };
                UiStateStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UiStateStore);
                return UiStateStore;
            }());
            exports_1("UiStateStore", UiStateStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvVWlTdGF0ZVN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7b0JBRVksYUFBUSxHQUE2QixJQUFJLG9CQUFlLENBQUMseUJBQWMsQ0FBQyxDQUFDO2dCQW9CckYsQ0FBQztnQkFsQkcsc0JBQUksaUNBQU87eUJBQVg7d0JBQ0ksTUFBTSxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN2QyxDQUFDOzs7bUJBQUE7Z0JBR0QseUNBQWtCLEdBQWxCLFVBQW1CLE9BQWM7b0JBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNmLGFBQWEsRUFBRSxJQUFJO3dCQUNuQixTQUFBLE9BQU87cUJBQ1YsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsdUNBQWdCLEdBQWhCO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNmLGFBQWEsRUFBRSxLQUFLO3dCQUNwQixPQUFPLEVBQUUsRUFBRTtxQkFDZCxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkF0Qkw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBdUJiLG1CQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCx1Q0FzQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0YXRlL1VpU3RhdGVTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VWlTdGF0ZSwgaW5pdGlhbFVpU3RhdGV9IGZyb20gXCIuL3VpLXN0YXRlXCI7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcbmltcG9ydCB7YXNPYnNlcnZhYmxlfSBmcm9tIFwiLi9hc09ic2VydmFibGVcIjtcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVWlTdGF0ZVN0b3JlIHtcblxuICAgIHByaXZhdGUgX3VpU3RhdGU6IEJlaGF2aW9yU3ViamVjdDxVaVN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoaW5pdGlhbFVpU3RhdGUpO1xuXG4gICAgZ2V0IHVpU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiBhc09ic2VydmFibGUodGhpcy5fdWlTdGF0ZSk7XG4gICAgfVxuXG5cbiAgICBzdGFydEJhY2tlbmRBY3Rpb24obWVzc2FnZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdWlTdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgIGFjdGlvbk9uZ29pbmc6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVuZEJhY2tlbmRBY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3VpU3RhdGUubmV4dCh7XG4gICAgICAgICAgICBhY3Rpb25PbmdvaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
