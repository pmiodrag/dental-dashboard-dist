System.register(["rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    function asObservable(subject) {
        return new Observable_1.Observable(function (fn) { return subject.subscribe(fn); });
    }
    exports_1("asObservable", asObservable);
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvYXNPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFVQSxzQkFBNkIsT0FBcUI7UUFDOUMsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3N0YXRlL2FzT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qXG4qIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlLUV4dGVuc2lvbnMvUnhKUy9ibG9iLzhmMTJmODEyZDQ5N2FjZjYzOTU4OGU5MGY3NGQ1MDRhOWZjODAxZWMvc3JjL2NvcmUvbGlucS9vYnNlcnZhYmxlL2Fzb2JzZXJ2YWJsZS5qc1xuKlxuKiBub3QgbmVlZGVkIGlmIHVzaW5nIFJ4SnMgYmV0YSAyIG9yIGhpZ2hlclxuKlxuKiovXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzL1N1YmplY3RcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNPYnNlcnZhYmxlKHN1YmplY3Q6IFN1YmplY3Q8YW55Pikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmbiA9PiBzdWJqZWN0LnN1YnNjcmliZShmbikpO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
