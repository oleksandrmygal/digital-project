! function () {
    "use strict";
    var map;
    window.addEventListener("load", function () {
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: -7.939706913006946,
                lng: 112.62542320944426
            },
            zoom: 14,
            disableDefaultUI: !0,
            styles: [
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "weight": 1
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              }
            ]
        }), new google.maps.Marker({
            position: {
                lat: -7.9273615555,
                lng: 112.637344555
            },
            map: map,
            icon: "src/img/marker.png"
        })
    })
}();