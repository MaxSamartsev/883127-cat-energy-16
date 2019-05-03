ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938749, 30.323266],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './img/map-pin.png',
          // Размеры метки.
          iconImageSize: [62, 53],
          // iconImageSize: [124, 106], - полный размер
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-31, -53],
          // iconImageOffset: [-62, -106], - полный размер
      })

  myMap.geoObjects
      .add(myPlacemark)
});
