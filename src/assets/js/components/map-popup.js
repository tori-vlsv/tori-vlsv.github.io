import { SearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

function mapPopup() {
  let map = document.getElementById('map-popup');
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
    map.on('moveend', function() {
      $('.leaflet-marker-pane img').attr('src', '/assets/images/icons/marker-blue.svg');
      if ($('.leaflet-control-geosearch input').val()) {
        $('.chat__map__address').addClass('active');
      }
      $('.chat__map__address p').text($('.leaflet-control-geosearch input').val());
    });
  }
  $('.leaflet-control-geosearch input').on('input', function() {
    if (!$(this).val()) {
      $('.chat__map__address').removeClass('active');
    }
  });
  $('.chat__map__address button').on('click', function() {
    var copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = $('.leaflet-control-geosearch input').val();
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
  });
};
mapPopup();