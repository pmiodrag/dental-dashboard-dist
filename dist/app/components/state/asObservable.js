System.register(["rxjs/Observable"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    function asObservable(subject) {
        return new Observable_1.Observable(fn => subject.subscribe(fn));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvYXNPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFVQSxzQkFBNkIsT0FBcUI7UUFDOUMsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdGUvYXNPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbipcbiogdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmUtRXh0ZW5zaW9ucy9SeEpTL2Jsb2IvOGYxMmY4MTJkNDk3YWNmNjM5NTg4ZTkwZjc0ZDUwNGE5ZmM4MDFlYy9zcmMvY29yZS9saW5xL29ic2VydmFibGUvYXNvYnNlcnZhYmxlLmpzXG4qXG4qIG5vdCBuZWVkZWQgaWYgdXNpbmcgUnhKcyBiZXRhIDIgb3IgaGlnaGVyXG4qXG4qKi9cbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anMvU3ViamVjdFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc09ic2VydmFibGUoc3ViamVjdDogU3ViamVjdDxhbnk+KSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZuID0+IHN1YmplY3Quc3Vic2NyaWJlKGZuKSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
