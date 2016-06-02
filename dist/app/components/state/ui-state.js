System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UiState, initialUiState;
    return {
        setters:[],
        execute: function() {
            UiState = (function () {
                function UiState(actionOngoing, message) {
                    this.actionOngoing = actionOngoing;
                    this.message = message;
                }
                return UiState;
            }());
            exports_1("UiState", UiState);
            exports_1("initialUiState", initialUiState = {
                actionOngoing: false,
                message: 'Ready'
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvdWktc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lCQVFhLGNBQWM7Ozs7WUFSM0I7Z0JBRUksaUJBQW1CLGFBQXNCLEVBQVMsT0FBYztvQkFBN0Msa0JBQWEsR0FBYixhQUFhLENBQVM7b0JBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBTztnQkFFaEUsQ0FBQztnQkFFTCxjQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCw2QkFNQyxDQUFBO1lBRVksNEJBQUEsY0FBYyxHQUFHO2dCQUMxQixhQUFhLEVBQUUsS0FBSztnQkFDcEIsT0FBTyxFQUFFLE9BQU87YUFDbkIsQ0FBQSxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdGUvdWktc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVWlTdGF0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aW9uT25nb2luZzogYm9vbGVhbiwgcHVibGljIG1lc3NhZ2U6c3RyaW5nKSB7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxVaVN0YXRlID0ge1xuICAgIGFjdGlvbk9uZ29pbmc6IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICdSZWFkeSdcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
