System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", '../../services/AuthService', '../state/GalleryStore', 'ng2-file-upload/ng2-file-upload'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, index_1, AuthService_1, GalleryStore_1, ng2_file_upload_1;
    var GalleryUpload;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            },
            function (GalleryStore_1_1) {
                GalleryStore_1 = GalleryStore_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            }],
        execute: function() {
            let GalleryUpload = class GalleryUpload {
                constructor(authService, router, route, galleryStore) {
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.galleryStore = galleryStore;
                }
                ngOnInit() {
                    this.sub = this.router.routerState.parent(this.route).params.subscribe(params => {
                        this.patientID = params["id"];
                        this.uploader = new ng2_file_upload_1.FileUploader({ url: '/patient/' + this.patientID + '/upload/gallery' });
                    });
                }
            };
            GalleryUpload = __decorate([
                core_1.Component({
                    selector: 'gallery-upload',
                    templateUrl: 'app/components/gallery/gallery-upload.html',
                    styleUrls: ['styles/gallery.css'],
                    directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES, ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService, router_1.Router, router_1.ActivatedRoute, GalleryStore_1.GalleryStore])
            ], GalleryUpload);
            exports_1("GalleryUpload", GalleryUpload);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LXVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUtJLFlBQW1CLFdBQXdCLEVBQVUsTUFBYyxFQUFVLEtBQXFCLEVBQVMsWUFBMEI7b0JBQWxILGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQWM7Z0JBQUcsQ0FBQztnQkFFekksUUFBUTtvQkFDSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNO3dCQUN6RSxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRSxJQUFJLDhCQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUMvRixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQW5CRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSw0Q0FBNEM7b0JBQ3pELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNqQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLDBCQUFpQixFQUFFLHdDQUFzQixDQUFDO2lCQUNoRyxDQUFDOzs2QkFBQTtZQUNGLHlDQWFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJztcclxuaW1wb3J0IHtHYWxsZXJ5fSBmcm9tIFwiLi4vLi4vc2VydmljZXMvR2FsbGVyeUJhY2tlbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2FsbGVyeVN0b3JlfSBmcm9tICcuLi9zdGF0ZS9HYWxsZXJ5U3RvcmUnO1xyXG5pbXBvcnQge0ZJTEVfVVBMT0FEX0RJUkVDVElWRVMsIEZpbGVVcGxvYWRlcn0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkL25nMi1maWxlLXVwbG9hZCc7XHJcbkBDb21wb25lbnQoeyBcclxuICAgIHNlbGVjdG9yOiAnZ2FsbGVyeS11cGxvYWQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktdXBsb2FkLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9nYWxsZXJ5LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFUywgUk9VVEVSX0RJUkVDVElWRVMsIEZJTEVfVVBMT0FEX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5VXBsb2FkIHsgIFxyXG4gICAgc3ViOiBhbnk7XHJcbiAgICBwYXRpZW50SUQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB1cGxvYWRlcjogRmlsZVVwbG9hZGVyO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIGdhbGxlcnlTdG9yZTogR2FsbGVyeVN0b3JlKSB7fSAgIFxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnBhcmVudCh0aGlzLnJvdXRlKS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudElEID0gcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkZXI9IG5ldyBGaWxlVXBsb2FkZXIoeyB1cmw6ICcvcGF0aWVudC8nICsgdGhpcy5wYXRpZW50SUQgKyAnL3VwbG9hZC9nYWxsZXJ5JyB9KTtcclxuICAgICAgICB9KTsgICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
