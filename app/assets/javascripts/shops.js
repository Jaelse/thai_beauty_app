// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function initMap(lat, lng, names, categories) {
    var myCoords = new google.maps.LatLng(13.7563, 100.5018);
    var mapOptions = {
    center: myCoords,
    zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var spa = {
        url: 'icons/spa.png',
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    var nails = {
        url: 'icons/nails.png',
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    var removals = {
        url: 'icons/removals.png',
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };
    var barbershop = {
        url: 'icons/barbershop.png',
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };

    for (var i = 0; i < 1000; i++) {
        var icn = 'icons/spa.png';
        switch(categories[i]){
            case "spa and massage":
                icn = spa;
            break;
            case "nails":
                icn = nails;
            break;
            case "hair removal":
                icn = removals;
            break;
            case "barbershop":
                icn = barbershop;
            break;
        } 

        var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
        };

        // init markers
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat[i], lng[i]),
            map: map,
            icon: icn,
            shape: shape,
            title: names[i]
        });
        
        (function(marker, i) {
            // add click event
            google.maps.event.addListener(marker, 'click', function() {
                infowindow = new google.maps.InfoWindow({
                    content: names[i]
                });
                infowindow.open(map, marker);
            });
        })(marker, i);
    }
}