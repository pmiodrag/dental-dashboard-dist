System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", '../../services/AuthService', '../state/GalleryStore', 'primeng/primeng'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, index_1, AuthService_1, GalleryStore_1, primeng_1;
    var GalleryPreview;
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
            function (primeng_1_1) {
                primeng_1 = primeng_1_1;
            }],
        execute: function() {
            let GalleryPreview = class GalleryPreview {
                constructor(authService, router, route, galleryStore) {
                    this.authService = authService;
                    this.router = router;
                    this.route = route;
                    this.galleryStore = galleryStore;
                    this.images = [];
                }
                ngOnInit() {
                    this.sub = this.router.routerState.parent(this.route).params.subscribe(params => {
                        this.patientID = params["id"];
                        console.log("ngOnInit GalleryPreview", this.patientID);
                        this.galleryStore.loadInitialData(this.patientID);
                    });
                }
                onImageClicked(event) {
                    console.log("onImageClicked", event);
                }
            };
            GalleryPreview = __decorate([
                core_1.Component({
                    selector: 'gallery-preview',
                    templateUrl: 'app/components/gallery/gallery-preview.html',
                    styleUrls: ['styles/gallery.css'],
                    directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES, primeng_1.Galleria]
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService, router_1.Router, router_1.ActivatedRoute, GalleryStore_1.GalleryStore])
            ], GalleryPreview);
            exports_1("GalleryPreview", GalleryPreview);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LXByZXZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFLSSxZQUFtQixXQUF3QixFQUFXLE1BQWMsRUFBVSxLQUFxQixFQUFTLFlBQTBCO29CQUFuSCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFjO29CQUp0SSxXQUFNLEdBQVMsRUFBRSxDQUFDO2dCQUl1SCxDQUFDO2dCQUUxSSxRQUFRO29CQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07d0JBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6RCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELGNBQWMsQ0FBQyxLQUFLO29CQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQztZQXZCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFdBQVcsRUFBRSw2Q0FBNkM7b0JBQzFELFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUNqQyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLDJCQUFtQixFQUFFLDBCQUFpQixFQUFDLGtCQUFRLENBQUM7aUJBQ2pGLENBQUM7OzhCQUFBO1lBQ0YsMkNBaUJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktcHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gXCJuZzItbWF0ZXJpYWwvaW5kZXhcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoU2VydmljZSc7XHJcbmltcG9ydCB7R2FsbGVyeVN0b3JlfSBmcm9tICcuLi9zdGF0ZS9HYWxsZXJ5U3RvcmUnO1xyXG5pbXBvcnQge0dhbGxlcmlhLCBMaWdodGJveH0gZnJvbSAncHJpbWVuZy9wcmltZW5nJztcclxuQENvbXBvbmVudCh7IFxyXG4gICAgc2VsZWN0b3I6ICdnYWxsZXJ5LXByZXZpZXcnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktcHJldmlldy5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvZ2FsbGVyeS5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVMsIE1BVEVSSUFMX0RJUkVDVElWRVMsIFJPVVRFUl9ESVJFQ1RJVkVTLEdhbGxlcmlhXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeVByZXZpZXcge1xyXG4gICAgaW1hZ2VzIDogYW55ID0gW107XHJcbiAgICBwYXRpZW50SUQ6IHN0cmluZztcclxuLy8gICAgcGF0aWVudF9pbWFnZXMgOiBhbnkgPSBbXTtcclxuICAgIHN1YjogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgZ2FsbGVyeVN0b3JlOiBHYWxsZXJ5U3RvcmUpIHt9ICAgXHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnBhcmVudCh0aGlzLnJvdXRlKS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aWVudElEID0gcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0IEdhbGxlcnlQcmV2aWV3XCIsIHRoaXMucGF0aWVudElEKTtcclxuICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5U3RvcmUubG9hZEluaXRpYWxEYXRhKHRoaXMucGF0aWVudElEKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uSW1hZ2VDbGlja2VkKGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uSW1hZ2VDbGlja2VkXCIsIGV2ZW50KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
