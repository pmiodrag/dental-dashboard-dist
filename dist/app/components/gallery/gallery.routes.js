System.register(['./gallery', './gallery-preview', './gallery-upload'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var gallery_1, gallery_preview_1, gallery_upload_1;
    var galleryRoutes;
    return {
        setters:[
            function (gallery_1_1) {
                gallery_1 = gallery_1_1;
            },
            function (gallery_preview_1_1) {
                gallery_preview_1 = gallery_preview_1_1;
            },
            function (gallery_upload_1_1) {
                gallery_upload_1 = gallery_upload_1_1;
            }],
        execute: function() {
            exports_1("galleryRoutes", galleryRoutes = [
                {
                    path: 'patients/patient/gallery/:id',
                    component: gallery_1.GalleryComponent,
                    children: [
                        //{ path: '',  component: GalleryPreview },
                        { path: '', redirectTo: 'preview', pathMatch: 'full' },
                        { path: 'preview', component: gallery_preview_1.GalleryPreview },
                        { path: 'upload', component: gallery_upload_1.GalleryUpload }
                    ]
                }
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBSWEsYUFBYTs7Ozs7Ozs7Ozs7OztZQUFiLDJCQUFBLGFBQWEsR0FBaUI7Z0JBRXZDO29CQUNJLElBQUksRUFBRSw4QkFBOEI7b0JBQ3BDLFNBQVMsRUFBRSwwQkFBZ0I7b0JBQzNCLFFBQVEsRUFBRTt3QkFDTiwyQ0FBMkM7d0JBQzNDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7d0JBQ3RELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRyxTQUFTLEVBQUUsZ0NBQWMsRUFBRTt3QkFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRSw4QkFBYSxFQUFFO3FCQUNoRDtpQkFDSjthQUNKLENBQUEsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJDb25maWcgfSAgICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gICBmcm9tICcuL2dhbGxlcnknO1xyXG5pbXBvcnQgeyBHYWxsZXJ5UHJldmlldyB9ICAgICBmcm9tICcuL2dhbGxlcnktcHJldmlldyc7XHJcbmltcG9ydCB7IEdhbGxlcnlVcGxvYWQgfSAgIGZyb20gJy4vZ2FsbGVyeS11cGxvYWQnO1xyXG5leHBvcnQgY29uc3QgZ2FsbGVyeVJvdXRlczogUm91dGVyQ29uZmlnID0gW1xyXG4gICBcclxuICAgIHsgXHJcbiAgICAgICAgcGF0aDogJ3BhdGllbnRzL3BhdGllbnQvZ2FsbGVyeS86aWQnLCAgXHJcbiAgICAgICAgY29tcG9uZW50OiBHYWxsZXJ5Q29tcG9uZW50LCAgXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgLy97IHBhdGg6ICcnLCAgY29tcG9uZW50OiBHYWxsZXJ5UHJldmlldyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAncHJldmlldycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3ByZXZpZXcnLCAgY29tcG9uZW50OiBHYWxsZXJ5UHJldmlldyB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICd1cGxvYWQnLCAgY29tcG9uZW50OiBHYWxsZXJ5VXBsb2FkIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
