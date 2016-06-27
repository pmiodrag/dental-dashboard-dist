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
            let UiStateStore = class UiStateStore {
                constructor() {
                    this._uiState = new Rx_1.BehaviorSubject(ui_state_1.initialUiState);
                }
                get uiState() {
                    return asObservable_1.asObservable(this._uiState);
                }
                startBackendAction(message) {
                    this._uiState.next({
                        actionOngoing: true,
                        message: message
                    });
                }
                endBackendAction() {
                    this._uiState.next({
                        actionOngoing: false,
                        message: ''
                    });
                }
            };
            UiStateStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], UiStateStore);
            exports_1("UiStateStore", UiStateStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvVWlTdGF0ZVN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7b0JBRVksYUFBUSxHQUE2QixJQUFJLG9CQUFlLENBQUMseUJBQWMsQ0FBQyxDQUFDO2dCQW9CckYsQ0FBQztnQkFsQkcsSUFBSSxPQUFPO29CQUNQLE1BQU0sQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFHRCxrQkFBa0IsQ0FBQyxPQUFjO29CQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDZixhQUFhLEVBQUUsSUFBSTt3QkFDbkIsU0FBQSxPQUFPO3FCQUNWLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELGdCQUFnQjtvQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDZixhQUFhLEVBQUUsS0FBSzt3QkFDcEIsT0FBTyxFQUFFLEVBQUU7cUJBQ2QsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBdkJEO2dCQUFDLGlCQUFVLEVBQUU7OzRCQUFBO1lBQ2IsdUNBc0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0ZS9VaVN0YXRlU3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VpU3RhdGUsIGluaXRpYWxVaVN0YXRlfSBmcm9tIFwiLi91aS1zdGF0ZVwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQge2FzT2JzZXJ2YWJsZX0gZnJvbSBcIi4vYXNPYnNlcnZhYmxlXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVpU3RhdGVTdG9yZSB7XG5cbiAgICBwcml2YXRlIF91aVN0YXRlOiBCZWhhdmlvclN1YmplY3Q8VWlTdGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGluaXRpYWxVaVN0YXRlKTtcblxuICAgIGdldCB1aVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX3VpU3RhdGUpO1xuICAgIH1cblxuXG4gICAgc3RhcnRCYWNrZW5kQWN0aW9uKG1lc3NhZ2U6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3VpU3RhdGUubmV4dCh7XG4gICAgICAgICAgICBhY3Rpb25PbmdvaW5nOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmRCYWNrZW5kQWN0aW9uKCkge1xuICAgICAgICB0aGlzLl91aVN0YXRlLm5leHQoe1xuICAgICAgICAgICAgYWN0aW9uT25nb2luZzogZmFsc2UsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
