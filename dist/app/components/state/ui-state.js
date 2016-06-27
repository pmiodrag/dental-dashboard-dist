System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UiState, initialUiState;
    return {
        setters:[],
        execute: function() {
            class UiState {
                constructor(actionOngoing, message) {
                    this.actionOngoing = actionOngoing;
                    this.message = message;
                }
            }
            exports_1("UiState", UiState);
            exports_1("initialUiState", initialUiState = {
                actionOngoing: false,
                message: 'Ready'
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvdWktc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lCQVFhLGNBQWM7Ozs7WUFSM0I7Z0JBRUksWUFBbUIsYUFBc0IsRUFBUyxPQUFjO29CQUE3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBUztvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFPO2dCQUVoRSxDQUFDO1lBRUwsQ0FBQztZQU5ELDZCQU1DLENBQUE7WUFFWSw0QkFBQSxjQUFjLEdBQUc7Z0JBQzFCLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFBLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9zdGF0ZS91aS1zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVaVN0YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhY3Rpb25PbmdvaW5nOiBib29sZWFuLCBwdWJsaWMgbWVzc2FnZTpzdHJpbmcpIHtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFVpU3RhdGUgPSB7XG4gICAgYWN0aW9uT25nb2luZzogZmFsc2UsXG4gICAgbWVzc2FnZTogJ1JlYWR5J1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
