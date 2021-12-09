var locations = [
        ['Charminar', 17.3616, 78.4747,6],
        ['Anantagiri Hills', 17.3120, 77.8636,5],
        ['Thousand Pillar Temple', 18.0037, 79.5747,4],
        ['Medak Church', 18.053661, 78.267159,3],
        ['Taj Falaknuma Palace', 17.3315, 78.4675,2],
        ['CARE Hospitals - Banjara Hills', 17.4126, 78.4503,1]
  ];
  var map;
  var markers = [];
  
  function mapFunction(){
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    var num_markers = locations.length;
    for (var i = 0; i < num_markers; i++) {  
      markers[i] = new google.maps.Marker({
        position: {lat:locations[i][1], lng:locations[i][2]},
        map: map,
        html: locations[i][0],
        id: i,
      });
        
      google.maps.event.addListener(markers[i], 'click', function(){
        var infowindow = new google.maps.InfoWindow({
          id: this.id,
          content:this.html,
          position:this.getPosition()
        });
        google.maps.event.addListenerOnce(infowindow, 'closeclick', function(){
          markers[this.id].setVisible(true);
        });
        this.setVisible(false);
        infowindow.open(map);
      });
    }
  }
  
myFunction();