import { SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function navigation() {
  let map = document.getElementById('map');
  if (map) {
    let mapOptions = {
      center: [7.901399, 98.311498],
      zoom: 13,
    }
    map = new L.map(map, mapOptions);
    
    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    let iconOptions = {
      iconUrl: '/assets/images/icons/marker-blue.svg',
      iconSize: [36, 36]
    }
    let customIcon = L.icon(iconOptions);

    L.Icon.Default.prototype.options.iconUrl = '/assets/images/icons/marker-blue.svg';
    L.Icon.Default.prototype.options.shadowSize = [0, 0];

    let markerOptions = {
      icon: customIcon
    }
    let marker = L.marker([7.901399, 98.311498], markerOptions);
    
    marker.addTo(map);

    const searchControl = new SearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'bar',
    });
    
    map.addControl(searchControl);

    // Call the getContainer routine.
    var htmlObject = document.querySelector('.leaflet-control-container');
    // Get the desired parent node.
    var customMapContols = document.getElementById('custom-map-controls');
    if (customMapContols) {
    // Finally append that node to the new parent, recursively searching out and re-parenting nodes.
      function setParent(el, newParent)
      {
          newParent.appendChild(el);
      }
      setParent(htmlObject, customMapContols);
    }
  }
};
navigation();

function toggleMap() {
  let button = $('.product__map__hide');
  let map = $('#map');
  button.on('click', function() {
    $(this).toggleClass('active');
    map.slideToggle();
  });
}
toggleMap();