window.koViewModel = window.koViewModel || {};

window.koViewModel.SetOfInstructions = window.koViewModel.SetOfInstructions || function(){
    var self = this;
    
    // >>>>>>>>     SCREEN MANAGEMENT     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
    this.showMainScreenFromLocationMap = function() {
        window.app.showPage1FromPage2();
    };
    
    this.showMainScreenFromLocationMapsGalery = function() {
        window.app.showPage1FromPage3();
    };
    
    this.showLocationMap = function() {
        window.app.map.initializeGoogleMap();
        window.app.showPage2FromPage1();
    };
    
    this.showLocationMapsGallery = function() {
        window.app.showPage3FromPage1();
    };
    
    // >>>>>>>>     MAP OPERATIONS     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
    this.saveLocationMap = function(){
        // There were problems with the final image becase it was cutted some times.
        // The solutions was provided here: http://stackoverflow.com/questions/24046778/html2canvas-does-not-work-with-google-maps-pan

        var transform = $('.gm-style>div:first>div').css('transform'),
            comp = transform.split(','),    //split up the transform matrix
            mapleft = parseFloat(comp[4]),  //get left value
            maptop = parseFloat(comp[5]);   //get top value
        $('.gm-style>div:first>div').css({  //get the map container. not sure if stable
            transform : 'none',
            left : mapleft,
            top : maptop
        });

        html2canvas($('#locationMap'), {
            useCORS : true,
            logging : true,
            onrendered: function(canvas) {
                var img = canvas.toDataURL('image/png'); 
                window.app.setOfLocationMaps.push({ picture : img });
                $('.gm-style>div:first>div').css({
                    left : 0,
                    top : 0,
                    transform : transform
                });
                
                self.showMainScreenFromLocationMap();
            }
        });
    };
    
    this.deleteLocationMap = function(mapToDelete) {
        window.app.setOfLocationMaps.remove(mapToDelete);
    };
};


