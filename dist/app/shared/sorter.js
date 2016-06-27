System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sorter;
    return {
        setters:[],
        execute: function() {
            class Sorter {
                constructor() {
                    this.property = null;
                    this.direction = 1;
                }
                sort(collection, prop) {
                    this.property = prop;
                    this.direction = (this.property === prop) ? this.direction * -1 : 1;
                    collection.sort((a, b) => {
                        let aVal;
                        let bVal;
                        //Handle resolving complex properties such as 'state.name' for prop value
                        if (prop && prop.indexOf('.')) {
                            aVal = this.resolveProperty(prop, a);
                            bVal = this.resolveProperty(prop, b);
                        }
                        else {
                            aVal = a[prop];
                            bVal = b[prop];
                        }
                        //Fix issues that spaces before/after string value can cause such as ' San Francisco'
                        if (this.isString(aVal))
                            aVal = aVal.trim();
                        if (this.isString(bVal))
                            bVal = bVal.trim();
                        if (aVal === bVal) {
                            return 0;
                        }
                        else if (aVal > bVal) {
                            return this.direction * -1;
                        }
                        else {
                            return this.direction * 1;
                        }
                    });
                }
                isString(val) {
                    return (val && (typeof val === 'string' || val instanceof String));
                }
                resolveProperty(path, obj) {
                    return path.split('.').reduce(function (prev, curr) {
                        return (prev ? prev[curr] : undefined);
                    }, obj || self);
                }
            }
            exports_1("Sorter", Sorter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO29CQUVDLGFBQVEsR0FBVyxJQUFJLENBQUM7b0JBQ3hCLGNBQVMsR0FBVyxDQUFDLENBQUM7Z0JBOEN2QixDQUFDO2dCQTVDRyxJQUFJLENBQUMsVUFBaUIsRUFBRSxJQUFTO29CQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRXBFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFNLEVBQUMsQ0FBTTt3QkFDMUIsSUFBSSxJQUFTLENBQUM7d0JBQ2QsSUFBSSxJQUFTLENBQUM7d0JBRWQseUVBQXlFO3dCQUN6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzlCLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNKLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ2YsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDakIsQ0FBQzt3QkFFRCxxRkFBcUY7d0JBQ3JGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUU1QyxFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQzs0QkFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNiLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDOzRCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7d0JBQzlCLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxRQUFRLENBQUMsR0FBUTtvQkFDZixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxZQUFZLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBRUQsZUFBZSxDQUFDLElBQVksRUFBRSxHQUFRO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBUyxJQUFJLEVBQUUsSUFBSTt3QkFDN0MsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQTtvQkFDMUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQTtnQkFDakIsQ0FBQztZQUVMLENBQUM7WUFqREQsMkJBaURDLENBQUEiLCJmaWxlIjoic2hhcmVkL3NvcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTb3J0ZXIge1xyXG5cclxuXHRwcm9wZXJ0eTogc3RyaW5nID0gbnVsbDtcclxuXHRkaXJlY3Rpb246IG51bWJlciA9IDE7XHJcblxyXG4gICAgc29ydChjb2xsZWN0aW9uOiBhbnlbXSwgcHJvcDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3A7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAodGhpcy5wcm9wZXJ0eSA9PT0gcHJvcCkgPyB0aGlzLmRpcmVjdGlvbiAqIC0xIDogMTtcclxuXHJcbiAgICAgICAgY29sbGVjdGlvbi5zb3J0KChhOiBhbnksYjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhVmFsOiBhbnk7XHJcbiAgICAgICAgICAgIGxldCBiVmFsOiBhbnk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0hhbmRsZSByZXNvbHZpbmcgY29tcGxleCBwcm9wZXJ0aWVzIHN1Y2ggYXMgJ3N0YXRlLm5hbWUnIGZvciBwcm9wIHZhbHVlXHJcbiAgICAgICAgICAgIGlmIChwcm9wICYmIHByb3AuaW5kZXhPZignLicpKSB7XHJcbiAgICAgICAgICAgICAgYVZhbCA9IHRoaXMucmVzb2x2ZVByb3BlcnR5KHByb3AsIGEpO1xyXG4gICAgICAgICAgICAgIGJWYWwgPSB0aGlzLnJlc29sdmVQcm9wZXJ0eShwcm9wLCBiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBhVmFsID0gYVtwcm9wXTtcclxuICAgICAgICAgICAgICBiVmFsID0gYltwcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9GaXggaXNzdWVzIHRoYXQgc3BhY2VzIGJlZm9yZS9hZnRlciBzdHJpbmcgdmFsdWUgY2FuIGNhdXNlIHN1Y2ggYXMgJyBTYW4gRnJhbmNpc2NvJ1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0cmluZyhhVmFsKSkgYVZhbCA9IGFWYWwudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1N0cmluZyhiVmFsKSkgYlZhbCA9IGJWYWwudHJpbSgpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGFWYWwgPT09IGJWYWwpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYVZhbCA+IGJWYWwpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uICogLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gKiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlzU3RyaW5nKHZhbDogYW55KSA6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlc29sdmVQcm9wZXJ0eShwYXRoOiBzdHJpbmcsIG9iajogYW55KSB7XHJcbiAgICAgIHJldHVybiBwYXRoLnNwbGl0KCcuJykucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnIpIHtcclxuICAgICAgICAgIHJldHVybiAocHJldiA/IHByZXZbY3Vycl0gOiB1bmRlZmluZWQpXHJcbiAgICAgIH0sIG9iaiB8fCBzZWxmKVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
