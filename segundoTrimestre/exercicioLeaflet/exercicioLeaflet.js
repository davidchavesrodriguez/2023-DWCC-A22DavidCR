if ('geolocation' in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(
    function (posicion) {
      console.log(posicion);
      // desestruturación de obxectos
      const { latitude, longitude } = posicion.coords;
      console.log(`latitude: ${latitude}, lonxitude: ${longitude}`);
    },
    function (error) {
      console.log(`ERROR(${error.code}): ${error.message}`);
    }
  );
} else {
  console.log(`Geolocation pa casa`);
}

42.883209, -8.5580993;
