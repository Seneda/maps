function addPoints(map, points){
//    for (i = 0; i < points.length; i+100000) {
//        var marker = new google.maps.Marker({
//           position: points[i],
//           map: map,
//           icon: {
//                path: google.maps.SymbolPath.CIRCLE,
//                scale: 1,
//              },
//           });
//    }


    var line = new google.maps.Polyline({
      path: points,
      strokeOpacity: 1,
      strokeColor: "#0cff00",
      geodesic: true,
      <!--icons: [{-->
        <!--icon: lineSymbol,-->
        <!--offset: '0',-->
        <!--repeat: '20px'-->
      <!--}],-->
      map: map
    });
}


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'),
        {
             zoom: 7,
             center: markers[0],
             mapTypeId: 'satellite'
        });
    addPoints(map, markers);
}