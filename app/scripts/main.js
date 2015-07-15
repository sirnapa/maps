var map;
function initialize() {

  // Create an array of styles.
  var styles = [
    {
      "stylers": [
        { "saturation": -90 },
        { "lightness": -80 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Initialize map
  map = new google.maps.Map(document.getElementById('map'), {});

  // Center on Paraguay
  var country = "Paraguay";
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( {'address' : country}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          map.fitBounds(results[0].geometry.bounds);
      }
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  // Marker
  var myLatlng = new google.maps.LatLng(-23.4347092,-58.4483503);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Marker',
      icon: 'images/marker.png'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
