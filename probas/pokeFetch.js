let pokePetition = fetch(
    "https://pokeapi.co/api/v2/pokemon/piplup"
  );
  
  pokePetition
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Ha ocurrido un error:', error);
    });
  