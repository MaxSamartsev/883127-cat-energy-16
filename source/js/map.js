var contentNoJs = document.querySelector('.map__content-no-js');
contentNoJs.classList.add('map__content-no-js--disabled');

var tabletWidth = 768;
var desktopWidth = 1300;
var miniIcon = [62, 53];
var miniOffset = [-31, -53];
var bigIcon = [124, 106];
var bigOffset = [-62, -106];
var pointMap = [59.938774, 30.323222];
var centerMobile = [59.938830, 30.323220];
var centerTablet = [59.939065, 30.323210];
var centerDesktop = [59.939075, 30.319560];

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: pointMap,
    zoom: 17,
    controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
  }, {
      searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    miniPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Офис Кэт энерджи',
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/map-pin.png',
        iconImageSize: miniIcon,
        iconImageOffset: miniOffset,
      });
  myMap.geoObjects.add(miniPlacemark);
  myMap.behaviors.disable('scrollZoom');

  bigPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Офис Кэт энерджи',
  }, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-pin.png',
      iconImageSize: bigIcon,
      iconImageOffset: bigOffset,
    });

  var timeout = function (f, ms) {
    var timer = null;
    return function (cb) {
      var onComplete = function () {
        f.apply(this, cb);
        timer = null;
      };
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(onComplete, ms);
    };
  };

  addPlacemark = function () {
    if (window.screen.width < tabletWidth) {
      myMap.geoObjects.add(miniPlacemark);
      myMap.setCenter(centerMobile, 17);
    }
    else (myMap.geoObjects.add(bigPlacemark));

    if (window.screen.width >= tabletWidth && window.screen.width < desktopWidth) {
      myMap.setCenter(centerTablet, 17);
    }
    if (window.screen.width >= desktopWidth) {
      myMap.setCenter(centerDesktop, 17);
    }
  }

  var replacementPlacemark = function () {
    myMap.geoObjects.remove(bigPlacemark)
    myMap.geoObjects.remove(miniPlacemark)
    addPlacemark();
  }

  addPlacemark();

  window.addEventListener("resize", timeout(replacementPlacemark, 500));
});
