function addPoints(map, points){
    var infowindow =  new google.maps.InfoWindow({
                content: "info: ",
                map: map,
            });
    infowindow.close()
    for (i = 0; i < points.length; i+=100) {
        var marker = new google.maps.Marker({
           position: points[i],
           map: map,
           icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 1,
              },
           time: points[i]['time'],
           index: i.toString()
           });

        marker.addListener('mouseover', function() {
            infowindow.setContent(this.index)
            infowindow.open(map, this);
        });

//        // assuming you also want to hide the infowindow when user mouses-out
//        marker.addListener('mouseout', function() {
//            infowindow.close();
//        });
    }


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