System.register(['@angular/core', '@angular/http', "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var Gallery, GalleryBackendService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            class Gallery {
                constructor(id, patientid, source, treatmentid) {
                    this.id = id;
                    this.patientid = patientid;
                    this.source = source;
                    this.treatmentid = treatmentid;
                }
            }
            exports_1("Gallery", Gallery);
            let GalleryBackendService = class GalleryBackendService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = '/';
                }
                getAllImages() {
                    return this.http.get(this.baseUrl + 'gallery');
                }
                saveImage(newImage) {
                    let body = JSON.stringify(newImage);
                    let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post((this.baseUrl + 'gallery'), body, options);
                }
                deleteImage(deleteImage) {
                    return this.http.delete('/gallery/' + deleteImage.id).share();
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            GalleryBackendService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], GalleryBackendService);
            exports_1("GalleryBackendService", GalleryBackendService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0dhbGxlcnlCYWNrZW5kU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUNJLFlBQW9CLEVBQVUsRUFBUyxTQUFrQixFQUFTLE1BQWMsRUFBUyxXQUFtQjtvQkFBeEYsT0FBRSxHQUFGLEVBQUUsQ0FBUTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFTO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBQzVHLENBQUM7WUFDTCxDQUFDO1lBSEQsNkJBR0MsQ0FBQTtZQUdEO2dCQUlJLFlBQVksSUFBUztvQkFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO2dCQUN0QixDQUFDO2dCQUVELFlBQVk7b0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBRUQsU0FBUyxDQUFDLFFBQWlCO29CQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLFFBQVEsQ0FBRSxDQUFBO29CQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFFRCxXQUFXLENBQUMsV0FBb0I7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsRSxDQUFDO2dCQUVELFdBQVcsQ0FBQyxLQUFVO29CQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztZQUdMLENBQUM7WUEvQkQ7Z0JBQUMsaUJBQVUsRUFBRTs7cUNBQUE7WUFDYix5REE4QkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9HYWxsZXJ5QmFja2VuZFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICB7SHR0cCxIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXMsIFJlcXVlc3RPcHRpb25zLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdhbGxlcnkge1xyXG4gICAgaWQ6IG51bWJlcjsgXHJcbiAgICBwYXRpZW50aWQgOiBudW1iZXI7ICAgXHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIHRyZWF0bWVudGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IGltcGxlbWVudHMgSUdhbGxlcnkge1xyXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgcGF0aWVudGlkIDogbnVtYmVyLCBwdWJsaWMgc291cmNlOiBzdHJpbmcsIHB1YmxpYyB0cmVhdG1lbnRpZDogbnVtYmVyKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlCYWNrZW5kU2VydmljZSB7XHJcblxyXG4gICAgaHR0cDpIdHRwO1xyXG4gICAgYmFzZVVybDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaHR0cDpIdHRwKSAge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gJy8nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsSW1hZ2VzKCkgeyAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsICsgJ2dhbGxlcnknKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlSW1hZ2UobmV3SW1hZ2U6IEdhbGxlcnkpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoIG5ld0ltYWdlIClcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCh0aGlzLmJhc2VVcmwgKyAnZ2FsbGVyeScpLCBib2R5LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVJbWFnZShkZWxldGVJbWFnZTogR2FsbGVyeSkgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoJy9nYWxsZXJ5LycgKyBkZWxldGVJbWFnZS5pZCkuc2hhcmUoKTtcclxuICAgIH0gICAgXHJcbiAgIFxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
