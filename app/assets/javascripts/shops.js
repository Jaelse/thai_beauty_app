// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function initMap(lats, lngs,names, addresses) {
    alert(lats)
    var myCoords = new google.maps.LatLng(lats[0], lngs[0]);
    var mapOptions = {
    center: myCoords,
    zoom: 14
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}