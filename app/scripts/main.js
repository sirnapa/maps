L.mapbox.accessToken = 'pk.eyJ1IjoicmNhbnRlcm8iLCJhIjoiNWM0NjRiODRhNDViOGNmZDhkZGRhZTgyZTQwYjZkZmEifQ.08WmjdH-gAz_eekkz-tDmA';

var map = L.mapbox.map('map', 'mapbox.dark')
    .setView([40, -74.50], 9);

var geocoder = L.mapbox.geocoder('mapbox.places');

geocoder.query('Paraguay', showMap);

function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 13);
    }
}
