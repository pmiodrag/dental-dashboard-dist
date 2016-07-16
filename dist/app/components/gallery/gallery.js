System.register(['@angular/core', '@angular/common', '@angular/router', "ng2-material/index", '@angular2-material/toolbar', '../../services/AuthService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, index_1, toolbar_1, AuthService_1;
    var GalleryComponent;
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
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (AuthService_1_1) {
                AuthService_1 = AuthService_1_1;
            }],
        execute: function() {
            let GalleryComponent = class GalleryComponent {
                constructor(authService) {
                    this.authService = authService;
                    this.images = [];
                }
            };
            GalleryComponent = __decorate([
                core_1.Component({
                    selector: 'gallery',
                    templateUrl: 'app/components/gallery/gallery.html',
                    styleUrls: ['styles/gallery.css'],
                    directives: [common_1.CORE_DIRECTIVES, index_1.MATERIAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar]
                }), 
                __metadata('design:paramtypes', [AuthService_1.AuthService])
            ], GalleryComponent);
            exports_1("GalleryComponent", GalleryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUtJLFlBQW1CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFKM0MsV0FBTSxHQUFTLEVBQUUsQ0FBQztnQkFJNEIsQ0FBQztZQUNuRCxDQUFDO1lBWkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLHFDQUFxQztvQkFDbEQsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ2pDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsMkJBQW1CLEVBQUUsMEJBQWlCLEVBQUUsbUJBQVMsQ0FBQztpQkFDbkYsQ0FBQzs7Z0NBQUE7WUFDRiwrQ0FNQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFU30gZnJvbSBcIm5nMi1tYXRlcmlhbC9pbmRleFwiO1xyXG5pbXBvcnQge01kVG9vbGJhcn0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL3Rvb2xiYXInO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGhTZXJ2aWNlJztcclxuaW1wb3J0IHtHYWxsZXJpYSwgTGlnaHRib3h9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcbmltcG9ydCB7R2FsbGVyeVN0b3JlfSBmcm9tICcuLi9zdGF0ZS9HYWxsZXJ5U3RvcmUnO1xyXG5pbXBvcnQge0dhbGxlcnl9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9HYWxsZXJ5QmFja2VuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHtGSUxFX1VQTE9BRF9ESVJFQ1RJVkVTLCBGaWxlVXBsb2FkZXJ9IGZyb20gJ25nMi1maWxlLXVwbG9hZC9uZzItZmlsZS11cGxvYWQnO1xyXG5AQ29tcG9uZW50KHsgXHJcbiAgICBzZWxlY3RvcjogJ2dhbGxlcnknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2dhbGxlcnkuY3NzJ10sXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTLCBST1VURVJfRElSRUNUSVZFUywgTWRUb29sYmFyXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUNvbXBvbmVudCB7XHJcbiAgICBpbWFnZXMgOiBhbnkgPSBbXTtcclxuICAgIHBhdGllbnRJRDogc3RyaW5nO1xyXG4gICAgc3ViOiBhbnk7XHJcbiAgICBwdWJsaWMgdXBsb2FkZXI6IEZpbGVVcGxvYWRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9ICAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
