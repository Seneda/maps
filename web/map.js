function addPoints(map, points){
//    var infowindow =  new google.maps.InfoWindow({
//                content: "info: ",
//                map: map,
//            });
//    infowindow.close()
//    for (i = 0; i < points.length; i+=100) {
//        var marker = new google.maps.Marker({
//           position: points[i],
//           map: map,
//           icon: {
//                path: google.maps.SymbolPath.CIRCLE,
//                scale: 1,
//              },
//           time: points[i]['time'],
//           index: i.toString()
//           });
//
//        marker.addListener('mouseover', function() {
//            infowindow.setContent(this.index)
//            infowindow.open(map, this);
//        });

//    }


    var line = new google.maps.Polyline({
      path: points,
      strokeOpacity: 1,
      strokeColor: "#e60000",
      strokeWeight: 5,

      geodesic: false,
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
             zoom: 7,  // level 7 zoom gives a good image of entire usa at 5000*3000 px
             center: markers[0],  //{'lat':40.1,'lng':-99}, // centre of the usa
             mapTypeId: 'satellite'
        });
    console.log(markers[10000]);
    addPoints(map, markers);
}