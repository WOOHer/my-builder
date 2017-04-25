(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();

  //map
ymaps.ready(init);
var myMap;

function init(){
  myMap = new ymaps.Map('map', {
    center: [58.605717, 49.665167],
    zoom: 12,
    controls: ['default','routeEditor','smallMapDefaultSet'],
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcbn0pKCk7XHJcblxyXG4gIC8vbWFwXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG52YXIgbXlNYXA7XHJcblxyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICBjZW50ZXI6IFs1OC42MDU3MTcsIDQ5LjY2NTE2N10sXHJcbiAgICB6b29tOiAxMixcclxuICAgIGNvbnRyb2xzOiBbJ2RlZmF1bHQnLCdyb3V0ZUVkaXRvcicsJ3NtYWxsTWFwRGVmYXVsdFNldCddLFxyXG4gIH0pO1xyXG59Il19
