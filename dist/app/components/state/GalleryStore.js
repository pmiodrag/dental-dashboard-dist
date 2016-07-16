System.register(["@angular/core", "../../services/GalleryBackendService", 'immutable', "./asObservable", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, GalleryBackendService_1, immutable_1, asObservable_1, Rx_1;
    var GalleryStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (GalleryBackendService_1_1) {
                GalleryBackendService_1 = GalleryBackendService_1_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (asObservable_1_1) {
                asObservable_1 = asObservable_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            let GalleryStore = class GalleryStore {
                constructor(galleryBackendService) {
                    this.galleryBackendService = galleryBackendService;
                    this._images = new Rx_1.BehaviorSubject(immutable_1.List([]));
                    // this.loadInitialData();
                }
                get images() {
                    return asObservable_1.asObservable(this._images);
                }
                loadInitialData(patientId) {
                    this.galleryBackendService.getAllImages()
                        .subscribe(res => {
                        let images = res.json().map((image) => new GalleryBackendService_1.Gallery(image.id, image.patientid, image.source, image.treatmentid)).filter(image => image.patientid == patientId);
                        this._images.next(immutable_1.List(images));
                    }, err => console.log("Error retrieving patient gallery"));
                }
                loadGalleryByTreatmentId(treatmentId) {
                    this.galleryBackendService.getAllImages()
                        .subscribe(res => {
                        let images = res.json().map((image) => new GalleryBackendService_1.Gallery(image.id, image.patientid, image.source, image.treatmentid)).filter(image => image.treatmentid == treatmentId);
                        this._images.next(immutable_1.List(images));
                    }, err => console.log("Error retrieving treatment gallery"));
                }
                saveImage(image) {
                    this.galleryBackendService.saveImage(image)
                        .subscribe(res => {
                        let newImage = res.json();
                        this._images.next(this._images.getValue().push(newImage));
                    }, err => console.log("Error saving image"));
                }
                deleteImage(deleted) {
                    let obs = this.galleryBackendService.deleteImage(deleted);
                    obs.subscribe(res => {
                        let images = this._images.getValue();
                        let index = images.findIndex((image) => image.id === deleted.id);
                        this._images.next(images.delete(index));
                    });
                    return obs;
                }
            };
            GalleryStore = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [GalleryBackendService_1.GalleryBackendService])
            ], GalleryStore);
            exports_1("GalleryStore", GalleryStore);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3RhdGUvR2FsbGVyeVN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0ksWUFBb0IscUJBQTRDO29CQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO29CQUZ4RCxZQUFPLEdBQW1DLElBQUksb0JBQWUsQ0FBQyxnQkFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBRzdFLDBCQUEwQjtnQkFDN0IsQ0FBQztnQkFFRCxJQUFJLE1BQU07b0JBQ04sTUFBTSxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELGVBQWUsQ0FBQyxTQUFTO29CQUNyQixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFO3lCQUNwQyxTQUFTLENBQ1YsR0FBRzt3QkFDQyxJQUFJLE1BQU0sR0FBZSxHQUFHLENBQUMsSUFBSSxFQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxLQUNoRCxJQUFJLCtCQUFPLENBQ1AsS0FBSyxDQUFDLEVBQUUsRUFDUixLQUFLLENBQUMsU0FBUyxFQUNmLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLFdBQVcsQ0FDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsQ0FBQTt3QkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDLEVBQ0QsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FDckQsQ0FBQztnQkFFVixDQUFDO2dCQUVELHdCQUF3QixDQUFDLFdBQVc7b0JBQ2hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUU7eUJBQ3BDLFNBQVMsQ0FDVixHQUFHO3dCQUNDLElBQUksTUFBTSxHQUFlLEdBQUcsQ0FBQyxJQUFJLEVBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFVLEtBQ2pELElBQUksK0JBQU8sQ0FDTixLQUFLLENBQUMsRUFBRSxFQUNSLEtBQUssQ0FBQyxTQUFTLEVBQ2YsS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENBQUMsV0FBVyxDQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxDQUFBO3dCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUN2RCxDQUFDO2dCQUVWLENBQUM7Z0JBR0QsU0FBUyxDQUFDLEtBQWM7b0JBRXBCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO3lCQUN0QyxTQUFTLENBQ04sR0FBRzt3QkFDQyxJQUFJLFFBQVEsR0FBYSxHQUFHLENBQUMsSUFBSSxFQUFHLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzlELENBQUMsRUFDRCxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUMvQyxDQUFDO2dCQUNOLENBQUM7Z0JBSUQsV0FBVyxDQUFDLE9BQWdCO29CQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUUxRCxHQUFHLENBQUMsU0FBUyxDQUNULEdBQUc7d0JBQ0MsSUFBSSxNQUFNLEdBQWtCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3BELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFFNUMsQ0FBQyxDQUNKLENBQUM7b0JBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDZixDQUFDO1lBR0wsQ0FBQztZQS9FRDtnQkFBQyxpQkFBVSxFQUFFOzs0QkFBQTtZQUNiLHVDQThFQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3RhdGUvR2FsbGVyeVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Jlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0dhbGxlcnksIEdhbGxlcnlCYWNrZW5kU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL0dhbGxlcnlCYWNrZW5kU2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XHJcbmltcG9ydCB7TGlzdH0gZnJvbSAnaW1tdXRhYmxlJztcclxuaW1wb3J0IHthc09ic2VydmFibGV9IGZyb20gXCIuL2FzT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlTdG9yZSB7XHJcbiAgICBwcml2YXRlIF9pbWFnZXM6IEJlaGF2aW9yU3ViamVjdDxMaXN0PEdhbGxlcnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoTGlzdChbXSkpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FsbGVyeUJhY2tlbmRTZXJ2aWNlOiBHYWxsZXJ5QmFja2VuZFNlcnZpY2UpIHtcclxuICAgICAgIC8vIHRoaXMubG9hZEluaXRpYWxEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGltYWdlcygpIHtcclxuICAgICAgICByZXR1cm4gYXNPYnNlcnZhYmxlKHRoaXMuX2ltYWdlcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRJbml0aWFsRGF0YShwYXRpZW50SWQpIHtcclxuICAgICAgICB0aGlzLmdhbGxlcnlCYWNrZW5kU2VydmljZS5nZXRBbGxJbWFnZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9ICg8R2FsbGVyeVtdPnJlcy5qc29uKCkpLm1hcCgoaW1hZ2U6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgR2FsbGVyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnBhdGllbnRpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc291cmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS50cmVhdG1lbnRpZFxyXG4gICAgICAgICAgICAgICAgICAgICkpLmZpbHRlcihpbWFnZSA9PiBpbWFnZS5wYXRpZW50aWQgPT0gcGF0aWVudElkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW1hZ2VzLm5leHQoTGlzdChpbWFnZXMpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3IgcmV0cmlldmluZyBwYXRpZW50IGdhbGxlcnlcIilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRHYWxsZXJ5QnlUcmVhdG1lbnRJZCh0cmVhdG1lbnRJZCkge1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeUJhY2tlbmRTZXJ2aWNlLmdldEFsbEltYWdlcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VzID0gKDxHYWxsZXJ5W10+cmVzLmpzb24oKSkubWFwKChpbWFnZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgbmV3IEdhbGxlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5wYXRpZW50aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnNvdXJjZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UudHJlYXRtZW50aWRcclxuICAgICAgICAgICAgICAgICAgICApKS5maWx0ZXIoaW1hZ2UgPT4gaW1hZ2UudHJlYXRtZW50aWQgPT0gdHJlYXRtZW50SWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZXMubmV4dChMaXN0KGltYWdlcykpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coXCJFcnJvciByZXRyaWV2aW5nIHRyZWF0bWVudCBnYWxsZXJ5XCIpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gICAgc2F2ZUltYWdlKGltYWdlOiBHYWxsZXJ5KSB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FsbGVyeUJhY2tlbmRTZXJ2aWNlLnNhdmVJbWFnZShpbWFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0ltYWdlID0gKDxHYWxsZXJ5PnJlcy5qc29uKCkpOyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZXMubmV4dCh0aGlzLl9pbWFnZXMuZ2V0VmFsdWUoKS5wdXNoKG5ld0ltYWdlKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKFwiRXJyb3Igc2F2aW5nIGltYWdlXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRlbGV0ZUltYWdlKGRlbGV0ZWQ6IEdhbGxlcnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IG9icyA9IHRoaXMuZ2FsbGVyeUJhY2tlbmRTZXJ2aWNlLmRlbGV0ZUltYWdlKGRlbGV0ZWQpO1xyXG5cclxuICAgICAgICBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlczogTGlzdDxHYWxsZXJ5PiA9IHRoaXMuX2ltYWdlcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaW1hZ2VzLmZpbmRJbmRleCgoaW1hZ2UpID0+IGltYWdlLmlkID09PSBkZWxldGVkLmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlcy5uZXh0KGltYWdlcy5kZWxldGUoaW5kZXgpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gb2JzO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
